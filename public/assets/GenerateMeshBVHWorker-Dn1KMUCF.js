import { l as BufferAttribute, q as Box3 } from "./index-CSlOv7if.js";
import { M as MeshBVH } from "./MeshBVH-CQ4Z3mPa.js";
class WorkerBase {
  constructor(worker) {
    this.name = "WorkerBase";
    this.running = false;
    this.worker = worker;
    this.worker.onerror = (e) => {
      if (e.message) {
        throw new Error(`${this.name}: Could not create Web Worker with error "${e.message}"`);
      } else {
        throw new Error(`${this.name}: Could not create Web Worker.`);
      }
    };
  }
  runTask() {
  }
  generate(...args) {
    if (this.running) {
      throw new Error("GenerateMeshBVHWorker: Already running job.");
    }
    if (this.worker === null) {
      throw new Error("GenerateMeshBVHWorker: Worker has been disposed.");
    }
    this.running = true;
    const promise = this.runTask(this.worker, ...args);
    promise.finally(() => {
      this.running = false;
    });
    return promise;
  }
  dispose() {
    this.worker.terminate();
    this.worker = null;
  }
}
class GenerateMeshBVHWorker extends WorkerBase {
  constructor() {
    super(new Worker(new URL(
      /* @vite-ignore */
      "/assets/generateMeshBVH.worker-gGixVAXV.js",
      import.meta.url
    ), { type: "module" }));
    this.name = "GenerateMeshBVHWorker";
  }
  runTask(worker, geometry, options = {}) {
    return new Promise((resolve, reject) => {
      if (geometry.getAttribute("position").isInterleavedBufferAttribute || geometry.index && geometry.index.isInterleavedBufferAttribute) {
        throw new Error("GenerateMeshBVHWorker: InterleavedBufferAttribute are not supported for the geometry attributes.");
      }
      worker.onerror = (e) => {
        reject(new Error(`[GenerateMeshBVHWorker] ${e.message || "Unknown error. Please check the server console. If you're using vite try adding 'three-mesh-bvh' to 'optimizeDeps.exclude' in your vite.config.js"}`));
      };
      worker.onmessage = (e) => {
        const { data } = e;
        if (data.error) {
          reject(new Error(data.error));
          worker.onmessage = null;
        } else if (data.serialized) {
          const { serialized, position: position2 } = data;
          const bvh = MeshBVH.deserialize(serialized, geometry, { setIndex: false });
          const boundsOptions = Object.assign({
            setBoundingBox: true
          }, options);
          geometry.attributes.position.array = position2;
          if (serialized.index) {
            if (geometry.index) {
              geometry.index.array = serialized.index;
            } else {
              const newIndex = new BufferAttribute(serialized.index, 1, false);
              geometry.setIndex(newIndex);
            }
          }
          if (boundsOptions.setBoundingBox) {
            geometry.boundingBox = bvh.getBoundingBox(new Box3());
          }
          if (options.onProgress) {
            options.onProgress(data.progress);
          }
          resolve(bvh);
          worker.onmessage = null;
        } else if (options.onProgress) {
          options.onProgress(data.progress);
        }
      };
      const index = geometry.index ? geometry.index.array : null;
      const position = geometry.attributes.position.array;
      const transferable = [position];
      if (index) {
        transferable.push(index);
      }
      worker.postMessage({
        index,
        position,
        options: {
          ...options,
          onProgress: null,
          includedProgressCallback: Boolean(options.onProgress),
          groups: [...geometry.groups]
        }
      }, transferable.map((arr) => arr.buffer).filter((v) => typeof SharedArrayBuffer === "undefined" || !(v instanceof SharedArrayBuffer)));
    });
  }
}
export {
  GenerateMeshBVHWorker
};
//# sourceMappingURL=GenerateMeshBVHWorker-Dn1KMUCF.js.map
