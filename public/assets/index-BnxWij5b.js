import { M as MeshBVH, a as arrayToBox, i as isSharedArrayBufferSupported, T as TRIANGLE_INTERSECT_COST, b as TRAVERSAL_COST, g as getIndexArray, c as getVertexCount, B as BYTES_PER_NODE, I as IS_LEAF, C as COUNT, O as OFFSET, R as RIGHT_NODE, S as SPLIT_AXIS, d as BOUNDING_DATA_INDEX } from "./MeshBVH-Bk6kqzSm.js";
import { A, e, j, E, h, N, l, f, k } from "./MeshBVH-Bk6kqzSm.js";
import { G as Group, n as LineBasicMaterial, o as MeshBasicMaterial, M as Matrix4, p as Object3D, j as Mesh, B as BufferGeometry, q as Box3, l as BufferAttribute, i as Vector3, k as Sphere, r as BatchedMesh, s as Ray, m as REVISION, d as DataTexture, N as NearestFilter, a as UnsignedIntType, I as IntType, h as FloatType, t as UnsignedByteType, u as UnsignedShortType, v as ByteType, w as ShortType, R as RGBAFormat, x as RGBAIntegerFormat, y as RGIntegerFormat, z as RedIntegerFormat, A as RGFormat, g as RedFormat, E as Matrix3, J as Vector4 } from "./needle-engine-DXCNciSc.js";
import "./index-Doj8EsS-.js";
const boundingBox = /* @__PURE__ */ new Box3();
const matrix = /* @__PURE__ */ new Matrix4();
class MeshBVHRootHelper extends Object3D {
  get isMesh() {
    return !this.displayEdges;
  }
  get isLineSegments() {
    return this.displayEdges;
  }
  get isLine() {
    return this.displayEdges;
  }
  getVertexPosition(...args) {
    return Mesh.prototype.getVertexPosition.call(this, ...args);
  }
  constructor(bvh, material, depth = 10, group = 0) {
    super();
    this.material = material;
    this.geometry = new BufferGeometry();
    this.name = "MeshBVHRootHelper";
    this.depth = depth;
    this.displayParents = false;
    this.bvh = bvh;
    this.displayEdges = true;
    this._group = group;
  }
  raycast() {
  }
  update() {
    const geometry = this.geometry;
    const boundsTree = this.bvh;
    const group = this._group;
    geometry.dispose();
    this.visible = false;
    if (boundsTree) {
      const targetDepth = this.depth - 1;
      const displayParents = this.displayParents;
      let boundsCount = 0;
      boundsTree.traverse((depth, isLeaf) => {
        if (depth >= targetDepth || isLeaf) {
          boundsCount++;
          return true;
        } else if (displayParents) {
          boundsCount++;
        }
      }, group);
      let posIndex = 0;
      const positionArray = new Float32Array(8 * 3 * boundsCount);
      boundsTree.traverse((depth, isLeaf, boundingData) => {
        const terminate = depth >= targetDepth || isLeaf;
        if (terminate || displayParents) {
          arrayToBox(0, boundingData, boundingBox);
          const { min, max } = boundingBox;
          for (let x = -1; x <= 1; x += 2) {
            const xVal = x < 0 ? min.x : max.x;
            for (let y = -1; y <= 1; y += 2) {
              const yVal = y < 0 ? min.y : max.y;
              for (let z = -1; z <= 1; z += 2) {
                const zVal = z < 0 ? min.z : max.z;
                positionArray[posIndex + 0] = xVal;
                positionArray[posIndex + 1] = yVal;
                positionArray[posIndex + 2] = zVal;
                posIndex += 3;
              }
            }
          }
          return terminate;
        }
      }, group);
      let indexArray;
      let indices;
      if (this.displayEdges) {
        indices = new Uint8Array([
          // x axis
          0,
          4,
          1,
          5,
          2,
          6,
          3,
          7,
          // y axis
          0,
          2,
          1,
          3,
          4,
          6,
          5,
          7,
          // z axis
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7
        ]);
      } else {
        indices = new Uint8Array([
          // X-, X+
          0,
          1,
          2,
          2,
          1,
          3,
          4,
          6,
          5,
          6,
          7,
          5,
          // Y-, Y+
          1,
          4,
          5,
          0,
          4,
          1,
          2,
          3,
          6,
          3,
          7,
          6,
          // Z-, Z+
          0,
          2,
          4,
          2,
          6,
          4,
          1,
          5,
          3,
          3,
          5,
          7
        ]);
      }
      if (positionArray.length > 65535) {
        indexArray = new Uint32Array(indices.length * boundsCount);
      } else {
        indexArray = new Uint16Array(indices.length * boundsCount);
      }
      const indexLength = indices.length;
      for (let i = 0; i < boundsCount; i++) {
        const posOffset = i * 8;
        const indexOffset = i * indexLength;
        for (let j2 = 0; j2 < indexLength; j2++) {
          indexArray[indexOffset + j2] = posOffset + indices[j2];
        }
      }
      geometry.setIndex(
        new BufferAttribute(indexArray, 1, false)
      );
      geometry.setAttribute(
        "position",
        new BufferAttribute(positionArray, 3, false)
      );
      this.visible = true;
    }
  }
}
class MeshBVHHelper extends Group {
  get color() {
    return this.edgeMaterial.color;
  }
  get opacity() {
    return this.edgeMaterial.opacity;
  }
  set opacity(v) {
    this.edgeMaterial.opacity = v;
    this.meshMaterial.opacity = v;
  }
  constructor(mesh = null, bvh = null, depth = 10) {
    if (mesh instanceof MeshBVH) {
      depth = bvh || 10;
      bvh = mesh;
      mesh = null;
    }
    if (typeof bvh === "number") {
      depth = bvh;
      bvh = null;
    }
    super();
    this.name = "MeshBVHHelper";
    this.depth = depth;
    this.mesh = mesh;
    this.bvh = bvh;
    this.displayParents = false;
    this.displayEdges = true;
    this.objectIndex = 0;
    this._roots = [];
    const edgeMaterial = new LineBasicMaterial({
      color: 65416,
      transparent: true,
      opacity: 0.3,
      depthWrite: false
    });
    const meshMaterial = new MeshBasicMaterial({
      color: 65416,
      transparent: true,
      opacity: 0.3,
      depthWrite: false
    });
    meshMaterial.color = edgeMaterial.color;
    this.edgeMaterial = edgeMaterial;
    this.meshMaterial = meshMaterial;
    this.update();
  }
  update() {
    const mesh = this.mesh;
    let bvh = this.bvh || mesh.geometry.boundsTree || null;
    if (mesh.isBatchedMesh && mesh.boundsTrees && !bvh) {
      const drawInfo = mesh._drawInfo[this.objectIndex];
      if (drawInfo) {
        bvh = mesh.boundsTrees[drawInfo.geometryIndex] || bvh;
      }
    }
    const totalRoots = bvh ? bvh._roots.length : 0;
    while (this._roots.length > totalRoots) {
      const root = this._roots.pop();
      root.geometry.dispose();
      this.remove(root);
    }
    for (let i = 0; i < totalRoots; i++) {
      const { depth, edgeMaterial, meshMaterial, displayParents, displayEdges } = this;
      if (i >= this._roots.length) {
        const root2 = new MeshBVHRootHelper(bvh, edgeMaterial, depth, i);
        this.add(root2);
        this._roots.push(root2);
      }
      const root = this._roots[i];
      root.bvh = bvh;
      root.depth = depth;
      root.displayParents = displayParents;
      root.displayEdges = displayEdges;
      root.material = displayEdges ? edgeMaterial : meshMaterial;
      root.update();
    }
  }
  updateMatrixWorld(...args) {
    const mesh = this.mesh;
    const parent = this.parent;
    if (mesh !== null) {
      mesh.updateWorldMatrix(true, false);
      if (parent) {
        this.matrix.copy(parent.matrixWorld).invert().multiply(mesh.matrixWorld);
      } else {
        this.matrix.copy(mesh.matrixWorld);
      }
      if (mesh.isInstancedMesh || mesh.isBatchedMesh) {
        mesh.getMatrixAt(this.objectIndex, matrix);
        this.matrix.multiply(matrix);
      }
      this.matrix.decompose(
        this.position,
        this.quaternion,
        this.scale
      );
    }
    super.updateMatrixWorld(...args);
  }
  copy(source) {
    this.depth = source.depth;
    this.mesh = source.mesh;
    this.bvh = source.bvh;
    this.opacity = source.opacity;
    this.color.copy(source.color);
  }
  clone() {
    return new MeshBVHHelper(this.mesh, this.bvh, this.depth);
  }
  dispose() {
    this.edgeMaterial.dispose();
    this.meshMaterial.dispose();
    const children = this.children;
    for (let i = 0, l2 = children.length; i < l2; i++) {
      children[i].geometry.dispose();
    }
  }
}
const _box1 = /* @__PURE__ */ new Box3();
const _box2 = /* @__PURE__ */ new Box3();
const _vec = /* @__PURE__ */ new Vector3();
function getPrimitiveSize(el) {
  switch (typeof el) {
    case "number":
      return 8;
    case "string":
      return el.length * 2;
    case "boolean":
      return 4;
    default:
      return 0;
  }
}
function isTypedArray(arr) {
  const regex = /(Uint|Int|Float)(8|16|32)Array/;
  return regex.test(arr.constructor.name);
}
function getRootExtremes(bvh, group) {
  const result = {
    nodeCount: 0,
    leafNodeCount: 0,
    depth: {
      min: Infinity,
      max: -Infinity
    },
    tris: {
      min: Infinity,
      max: -Infinity
    },
    splits: [0, 0, 0],
    surfaceAreaScore: 0
  };
  bvh.traverse((depth, isLeaf, boundingData, offsetOrSplit, count) => {
    const l0 = boundingData[0 + 3] - boundingData[0];
    const l1 = boundingData[1 + 3] - boundingData[1];
    const l2 = boundingData[2 + 3] - boundingData[2];
    const surfaceArea = 2 * (l0 * l1 + l1 * l2 + l2 * l0);
    result.nodeCount++;
    if (isLeaf) {
      result.leafNodeCount++;
      result.depth.min = Math.min(depth, result.depth.min);
      result.depth.max = Math.max(depth, result.depth.max);
      result.tris.min = Math.min(count, result.tris.min);
      result.tris.max = Math.max(count, result.tris.max);
      result.surfaceAreaScore += surfaceArea * TRIANGLE_INTERSECT_COST * count;
    } else {
      result.splits[offsetOrSplit]++;
      result.surfaceAreaScore += surfaceArea * TRAVERSAL_COST;
    }
  }, group);
  if (result.tris.min === Infinity) {
    result.tris.min = 0;
    result.tris.max = 0;
  }
  if (result.depth.min === Infinity) {
    result.depth.min = 0;
    result.depth.max = 0;
  }
  return result;
}
function getBVHExtremes(bvh) {
  return bvh._roots.map((root, i) => getRootExtremes(bvh, i));
}
function estimateMemoryInBytes(obj) {
  const traversed = /* @__PURE__ */ new Set();
  const stack = [obj];
  let bytes = 0;
  while (stack.length) {
    const curr = stack.pop();
    if (traversed.has(curr)) {
      continue;
    }
    traversed.add(curr);
    for (let key in curr) {
      if (!Object.hasOwn(curr, key)) {
        continue;
      }
      bytes += getPrimitiveSize(key);
      const value = curr[key];
      if (value && (typeof value === "object" || typeof value === "function")) {
        if (isTypedArray(value)) {
          bytes += value.byteLength;
        } else if (isSharedArrayBufferSupported() && value instanceof SharedArrayBuffer) {
          bytes += value.byteLength;
        } else if (value instanceof ArrayBuffer) {
          bytes += value.byteLength;
        } else {
          stack.push(value);
        }
      } else {
        bytes += getPrimitiveSize(value);
      }
    }
  }
  return bytes;
}
function validateBounds(bvh) {
  const geometry = bvh.geometry;
  const depthStack = [];
  const index = geometry.index;
  const position = geometry.getAttribute("position");
  let passes = true;
  bvh.traverse((depth, isLeaf, boundingData, offset, count) => {
    const info = {
      depth,
      isLeaf,
      boundingData,
      offset,
      count
    };
    depthStack[depth] = info;
    arrayToBox(0, boundingData, _box1);
    const parent = depthStack[depth - 1];
    if (isLeaf) {
      for (let i = offset, l2 = offset + count; i < l2; i++) {
        const triIndex = bvh.resolveTriangleIndex(i);
        let i0 = 3 * triIndex;
        let i1 = 3 * triIndex + 1;
        let i2 = 3 * triIndex + 2;
        if (index) {
          i0 = index.getX(i0);
          i1 = index.getX(i1);
          i2 = index.getX(i2);
        }
        let isContained;
        _vec.fromBufferAttribute(position, i0);
        isContained = _box1.containsPoint(_vec);
        _vec.fromBufferAttribute(position, i1);
        isContained = isContained && _box1.containsPoint(_vec);
        _vec.fromBufferAttribute(position, i2);
        isContained = isContained && _box1.containsPoint(_vec);
        console.assert(isContained, "Leaf bounds does not fully contain triangle.");
        passes = passes && isContained;
      }
    }
    if (parent) {
      arrayToBox(0, boundingData, _box2);
      const isContained = _box2.containsBox(_box1);
      console.assert(isContained, "Parent bounds does not fully contain child.");
      passes = passes && isContained;
    }
  });
  return passes;
}
function getJSONStructure(bvh) {
  const depthStack = [];
  bvh.traverse((depth, isLeaf, boundingData, offset, count) => {
    const info = {
      bounds: arrayToBox(0, boundingData, new Box3())
    };
    if (isLeaf) {
      info.count = count;
      info.offset = offset;
    } else {
      info.left = null;
      info.right = null;
    }
    depthStack[depth] = info;
    const parent = depthStack[depth - 1];
    if (parent) {
      if (parent.left === null) {
        parent.left = info;
      } else {
        parent.right = info;
      }
    }
  });
  return depthStack[0];
}
function convertRaycastIntersect(hit, object, raycaster) {
  if (hit === null) {
    return null;
  }
  hit.point.applyMatrix4(object.matrixWorld);
  hit.distance = hit.point.distanceTo(raycaster.ray.origin);
  hit.object = object;
  return hit;
}
const IS_REVISION_166 = parseInt(REVISION) >= 166;
const ray = /* @__PURE__ */ new Ray();
const direction = /* @__PURE__ */ new Vector3();
const tmpInverseMatrix = /* @__PURE__ */ new Matrix4();
const origMeshRaycastFunc = Mesh.prototype.raycast;
const origBatchedRaycastFunc = BatchedMesh.prototype.raycast;
const _worldScale = /* @__PURE__ */ new Vector3();
const _mesh = /* @__PURE__ */ new Mesh();
const _batchIntersects = [];
function acceleratedRaycast(raycaster, intersects) {
  if (this.isBatchedMesh) {
    acceleratedBatchedMeshRaycast.call(this, raycaster, intersects);
  } else {
    acceleratedMeshRaycast.call(this, raycaster, intersects);
  }
}
function acceleratedBatchedMeshRaycast(raycaster, intersects) {
  if (this.boundsTrees) {
    const boundsTrees = this.boundsTrees;
    const drawInfo = this._drawInfo || this._instanceInfo;
    const drawRanges = this._drawRanges || this._geometryInfo;
    const matrixWorld = this.matrixWorld;
    _mesh.material = this.material;
    _mesh.geometry = this.geometry;
    const oldBoundsTree = _mesh.geometry.boundsTree;
    const oldDrawRange = _mesh.geometry.drawRange;
    if (_mesh.geometry.boundingSphere === null) {
      _mesh.geometry.boundingSphere = new Sphere();
    }
    for (let i = 0, l2 = drawInfo.length; i < l2; i++) {
      if (!this.getVisibleAt(i)) {
        continue;
      }
      const geometryId = drawInfo[i].geometryIndex;
      _mesh.geometry.boundsTree = boundsTrees[geometryId];
      this.getMatrixAt(i, _mesh.matrixWorld).premultiply(matrixWorld);
      if (!_mesh.geometry.boundsTree) {
        this.getBoundingBoxAt(geometryId, _mesh.geometry.boundingBox);
        this.getBoundingSphereAt(geometryId, _mesh.geometry.boundingSphere);
        const drawRange = drawRanges[geometryId];
        _mesh.geometry.setDrawRange(drawRange.start, drawRange.count);
      }
      _mesh.raycast(raycaster, _batchIntersects);
      for (let j2 = 0, l3 = _batchIntersects.length; j2 < l3; j2++) {
        const intersect = _batchIntersects[j2];
        intersect.object = this;
        intersect.batchId = i;
        intersects.push(intersect);
      }
      _batchIntersects.length = 0;
    }
    _mesh.geometry.boundsTree = oldBoundsTree;
    _mesh.geometry.drawRange = oldDrawRange;
    _mesh.material = null;
    _mesh.geometry = null;
  } else {
    origBatchedRaycastFunc.call(this, raycaster, intersects);
  }
}
function acceleratedMeshRaycast(raycaster, intersects) {
  if (this.geometry.boundsTree) {
    if (this.material === void 0) return;
    tmpInverseMatrix.copy(this.matrixWorld).invert();
    ray.copy(raycaster.ray).applyMatrix4(tmpInverseMatrix);
    _worldScale.setFromMatrixScale(this.matrixWorld);
    direction.copy(ray.direction).multiply(_worldScale);
    const scaleFactor = direction.length();
    const near = raycaster.near / scaleFactor;
    const far = raycaster.far / scaleFactor;
    const bvh = this.geometry.boundsTree;
    if (raycaster.firstHitOnly === true) {
      const hit = convertRaycastIntersect(bvh.raycastFirst(ray, this.material, near, far), this, raycaster);
      if (hit) {
        intersects.push(hit);
      }
    } else {
      const hits = bvh.raycast(ray, this.material, near, far);
      for (let i = 0, l2 = hits.length; i < l2; i++) {
        const hit = convertRaycastIntersect(hits[i], this, raycaster);
        if (hit) {
          intersects.push(hit);
        }
      }
    }
  } else {
    origMeshRaycastFunc.call(this, raycaster, intersects);
  }
}
function computeBoundsTree(options = {}) {
  this.boundsTree = new MeshBVH(this, options);
  return this.boundsTree;
}
function disposeBoundsTree() {
  this.boundsTree = null;
}
function computeBatchedBoundsTree(index = -1, options = {}) {
  if (!IS_REVISION_166) {
    throw new Error("BatchedMesh: Three r166+ is required to compute bounds trees.");
  }
  if (options.indirect) {
    console.warn('"Indirect" is set to false because it is not supported for BatchedMesh.');
  }
  options = {
    ...options,
    indirect: false,
    range: null
  };
  const drawRanges = this._drawRanges || this._geometryInfo;
  const geometryCount = this._geometryCount;
  if (!this.boundsTrees) {
    this.boundsTrees = new Array(geometryCount).fill(null);
  }
  const boundsTrees = this.boundsTrees;
  while (boundsTrees.length < geometryCount) {
    boundsTrees.push(null);
  }
  if (index < 0) {
    for (let i = 0; i < geometryCount; i++) {
      options.range = drawRanges[i];
      boundsTrees[i] = new MeshBVH(this.geometry, options);
    }
    return boundsTrees;
  } else {
    if (index < drawRanges.length) {
      options.range = drawRanges[index];
      boundsTrees[index] = new MeshBVH(this.geometry, options);
    }
    return boundsTrees[index] || null;
  }
}
function disposeBatchedBoundsTree(index = -1) {
  if (index < 0) {
    this.boundsTrees.fill(null);
  } else {
    if (index < this.boundsTree.length) {
      this.boundsTrees[index] = null;
    }
  }
}
function countToStringFormat(count) {
  switch (count) {
    case 1:
      return "R";
    case 2:
      return "RG";
    case 3:
      return "RGBA";
    case 4:
      return "RGBA";
  }
  throw new Error();
}
function countToFormat(count) {
  switch (count) {
    case 1:
      return RedFormat;
    case 2:
      return RGFormat;
    case 3:
      return RGBAFormat;
    case 4:
      return RGBAFormat;
  }
}
function countToIntFormat(count) {
  switch (count) {
    case 1:
      return RedIntegerFormat;
    case 2:
      return RGIntegerFormat;
    case 3:
      return RGBAIntegerFormat;
    case 4:
      return RGBAIntegerFormat;
  }
}
class VertexAttributeTexture extends DataTexture {
  constructor() {
    super();
    this.minFilter = NearestFilter;
    this.magFilter = NearestFilter;
    this.generateMipmaps = false;
    this.overrideItemSize = null;
    this._forcedType = null;
  }
  updateFrom(attr) {
    const overrideItemSize = this.overrideItemSize;
    const originalItemSize = attr.itemSize;
    const originalCount = attr.count;
    if (overrideItemSize !== null) {
      if (originalItemSize * originalCount % overrideItemSize !== 0) {
        throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");
      }
      attr.itemSize = overrideItemSize;
      attr.count = originalCount * originalItemSize / overrideItemSize;
    }
    const itemSize = attr.itemSize;
    const count = attr.count;
    const normalized = attr.normalized;
    const originalBufferCons = attr.array.constructor;
    const byteCount = originalBufferCons.BYTES_PER_ELEMENT;
    let targetType = this._forcedType;
    let finalStride = itemSize;
    if (targetType === null) {
      switch (originalBufferCons) {
        case Float32Array:
          targetType = FloatType;
          break;
        case Uint8Array:
        case Uint16Array:
        case Uint32Array:
          targetType = UnsignedIntType;
          break;
        case Int8Array:
        case Int16Array:
        case Int32Array:
          targetType = IntType;
          break;
      }
    }
    let type, format, normalizeValue, targetBufferCons;
    let internalFormat = countToStringFormat(itemSize);
    switch (targetType) {
      case FloatType:
        normalizeValue = 1;
        format = countToFormat(itemSize);
        if (normalized && byteCount === 1) {
          targetBufferCons = originalBufferCons;
          internalFormat += "8";
          if (originalBufferCons === Uint8Array) {
            type = UnsignedByteType;
          } else {
            type = ByteType;
            internalFormat += "_SNORM";
          }
        } else {
          targetBufferCons = Float32Array;
          internalFormat += "32F";
          type = FloatType;
        }
        break;
      case IntType:
        internalFormat += byteCount * 8 + "I";
        normalizeValue = normalized ? Math.pow(2, originalBufferCons.BYTES_PER_ELEMENT * 8 - 1) : 1;
        format = countToIntFormat(itemSize);
        if (byteCount === 1) {
          targetBufferCons = Int8Array;
          type = ByteType;
        } else if (byteCount === 2) {
          targetBufferCons = Int16Array;
          type = ShortType;
        } else {
          targetBufferCons = Int32Array;
          type = IntType;
        }
        break;
      case UnsignedIntType:
        internalFormat += byteCount * 8 + "UI";
        normalizeValue = normalized ? Math.pow(2, originalBufferCons.BYTES_PER_ELEMENT * 8 - 1) : 1;
        format = countToIntFormat(itemSize);
        if (byteCount === 1) {
          targetBufferCons = Uint8Array;
          type = UnsignedByteType;
        } else if (byteCount === 2) {
          targetBufferCons = Uint16Array;
          type = UnsignedShortType;
        } else {
          targetBufferCons = Uint32Array;
          type = UnsignedIntType;
        }
        break;
    }
    if (finalStride === 3 && (format === RGBAFormat || format === RGBAIntegerFormat)) {
      finalStride = 4;
    }
    const dimension = Math.ceil(Math.sqrt(count)) || 1;
    const length = finalStride * dimension * dimension;
    const dataArray = new targetBufferCons(length);
    const originalNormalized = attr.normalized;
    attr.normalized = false;
    for (let i = 0; i < count; i++) {
      const ii = finalStride * i;
      dataArray[ii] = attr.getX(i) / normalizeValue;
      if (itemSize >= 2) {
        dataArray[ii + 1] = attr.getY(i) / normalizeValue;
      }
      if (itemSize >= 3) {
        dataArray[ii + 2] = attr.getZ(i) / normalizeValue;
        if (finalStride === 4) {
          dataArray[ii + 3] = 1;
        }
      }
      if (itemSize >= 4) {
        dataArray[ii + 3] = attr.getW(i) / normalizeValue;
      }
    }
    attr.normalized = originalNormalized;
    this.internalFormat = internalFormat;
    this.format = format;
    this.type = type;
    this.image.width = dimension;
    this.image.height = dimension;
    this.image.data = dataArray;
    this.needsUpdate = true;
    this.dispose();
    attr.itemSize = originalItemSize;
    attr.count = originalCount;
  }
}
class UIntVertexAttributeTexture extends VertexAttributeTexture {
  constructor() {
    super();
    this._forcedType = UnsignedIntType;
  }
}
class IntVertexAttributeTexture extends VertexAttributeTexture {
  constructor() {
    super();
    this._forcedType = IntType;
  }
}
class FloatVertexAttributeTexture extends VertexAttributeTexture {
  constructor() {
    super();
    this._forcedType = FloatType;
  }
}
class MeshBVHUniformStruct {
  constructor() {
    this.index = new UIntVertexAttributeTexture();
    this.position = new FloatVertexAttributeTexture();
    this.bvhBounds = new DataTexture();
    this.bvhContents = new DataTexture();
    this._cachedIndexAttr = null;
    this.index.overrideItemSize = 3;
  }
  updateFrom(bvh) {
    const { geometry } = bvh;
    bvhToTextures(bvh, this.bvhBounds, this.bvhContents);
    this.position.updateFrom(geometry.attributes.position);
    if (bvh.indirect) {
      const indirectBuffer = bvh._indirectBuffer;
      if (this._cachedIndexAttr === null || this._cachedIndexAttr.count !== indirectBuffer.length) {
        if (geometry.index) {
          this._cachedIndexAttr = geometry.index.clone();
        } else {
          const array = getIndexArray(getVertexCount(geometry));
          this._cachedIndexAttr = new BufferAttribute(array, 1, false);
        }
      }
      dereferenceIndex(geometry, indirectBuffer, this._cachedIndexAttr);
      this.index.updateFrom(this._cachedIndexAttr);
    } else {
      this.index.updateFrom(geometry.index);
    }
  }
  dispose() {
    const { index, position, bvhBounds, bvhContents } = this;
    if (index) index.dispose();
    if (position) position.dispose();
    if (bvhBounds) bvhBounds.dispose();
    if (bvhContents) bvhContents.dispose();
  }
}
function dereferenceIndex(geometry, indirectBuffer, target) {
  const unpacked = target.array;
  const indexArray = geometry.index ? geometry.index.array : null;
  for (let i = 0, l2 = indirectBuffer.length; i < l2; i++) {
    const i3 = 3 * i;
    const v3 = 3 * indirectBuffer[i];
    for (let c = 0; c < 3; c++) {
      unpacked[i3 + c] = indexArray ? indexArray[v3 + c] : v3 + c;
    }
  }
}
function bvhToTextures(bvh, boundsTexture, contentsTexture) {
  const roots = bvh._roots;
  if (roots.length !== 1) {
    throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");
  }
  const root = roots[0];
  const uint16Array = new Uint16Array(root);
  const uint32Array = new Uint32Array(root);
  const float32Array = new Float32Array(root);
  const nodeCount = root.byteLength / BYTES_PER_NODE;
  const boundsDimension = 2 * Math.ceil(Math.sqrt(nodeCount / 2));
  const boundsArray = new Float32Array(4 * boundsDimension * boundsDimension);
  const contentsDimension = Math.ceil(Math.sqrt(nodeCount));
  const contentsArray = new Uint32Array(2 * contentsDimension * contentsDimension);
  for (let i = 0; i < nodeCount; i++) {
    const nodeIndex32 = i * BYTES_PER_NODE / 4;
    const nodeIndex16 = nodeIndex32 * 2;
    const boundsIndex = BOUNDING_DATA_INDEX(nodeIndex32);
    for (let b = 0; b < 3; b++) {
      boundsArray[8 * i + 0 + b] = float32Array[boundsIndex + 0 + b];
      boundsArray[8 * i + 4 + b] = float32Array[boundsIndex + 3 + b];
    }
    if (IS_LEAF(nodeIndex16, uint16Array)) {
      const count = COUNT(nodeIndex16, uint16Array);
      const offset = OFFSET(nodeIndex32, uint32Array);
      const mergedLeafCount = 4294901760 | count;
      contentsArray[i * 2 + 0] = mergedLeafCount;
      contentsArray[i * 2 + 1] = offset;
    } else {
      const rightIndex = 4 * RIGHT_NODE(nodeIndex32, uint32Array) / BYTES_PER_NODE;
      const splitAxis = SPLIT_AXIS(nodeIndex32, uint32Array);
      contentsArray[i * 2 + 0] = splitAxis;
      contentsArray[i * 2 + 1] = rightIndex;
    }
  }
  boundsTexture.image.data = boundsArray;
  boundsTexture.image.width = boundsDimension;
  boundsTexture.image.height = boundsDimension;
  boundsTexture.format = RGBAFormat;
  boundsTexture.type = FloatType;
  boundsTexture.internalFormat = "RGBA32F";
  boundsTexture.minFilter = NearestFilter;
  boundsTexture.magFilter = NearestFilter;
  boundsTexture.generateMipmaps = false;
  boundsTexture.needsUpdate = true;
  boundsTexture.dispose();
  contentsTexture.image.data = contentsArray;
  contentsTexture.image.width = contentsDimension;
  contentsTexture.image.height = contentsDimension;
  contentsTexture.format = RGIntegerFormat;
  contentsTexture.type = UnsignedIntType;
  contentsTexture.internalFormat = "RG32UI";
  contentsTexture.minFilter = NearestFilter;
  contentsTexture.magFilter = NearestFilter;
  contentsTexture.generateMipmaps = false;
  contentsTexture.needsUpdate = true;
  contentsTexture.dispose();
}
const _positionVector = /* @__PURE__ */ new Vector3();
const _normalVector = /* @__PURE__ */ new Vector3();
const _tangentVector = /* @__PURE__ */ new Vector3();
const _tangentVector4 = /* @__PURE__ */ new Vector4();
const _morphVector = /* @__PURE__ */ new Vector3();
const _temp = /* @__PURE__ */ new Vector3();
const _skinIndex = /* @__PURE__ */ new Vector4();
const _skinWeight = /* @__PURE__ */ new Vector4();
const _matrix = /* @__PURE__ */ new Matrix4();
const _boneMatrix = /* @__PURE__ */ new Matrix4();
function validateAttributes(attr1, attr2) {
  if (!attr1 && !attr2) {
    return;
  }
  const sameCount = attr1.count === attr2.count;
  const sameNormalized = attr1.normalized === attr2.normalized;
  const sameType = attr1.array.constructor === attr2.array.constructor;
  const sameItemSize = attr1.itemSize === attr2.itemSize;
  if (!sameCount || !sameNormalized || !sameType || !sameItemSize) {
    throw new Error();
  }
}
function createAttributeClone(attr, countOverride = null) {
  const cons = attr.array.constructor;
  const normalized = attr.normalized;
  const itemSize = attr.itemSize;
  const count = countOverride === null ? attr.count : countOverride;
  return new BufferAttribute(new cons(itemSize * count), itemSize, normalized);
}
function copyAttributeContents(attr, target, targetOffset = 0) {
  if (attr.isInterleavedBufferAttribute) {
    const itemSize = attr.itemSize;
    for (let i = 0, l2 = attr.count; i < l2; i++) {
      const io = i + targetOffset;
      target.setX(io, attr.getX(i));
      if (itemSize >= 2) target.setY(io, attr.getY(i));
      if (itemSize >= 3) target.setZ(io, attr.getZ(i));
      if (itemSize >= 4) target.setW(io, attr.getW(i));
    }
  } else {
    const array = target.array;
    const cons = array.constructor;
    const byteOffset = array.BYTES_PER_ELEMENT * attr.itemSize * targetOffset;
    const temp = new cons(array.buffer, byteOffset, attr.array.length);
    temp.set(attr.array);
  }
}
function addScaledMatrix(target, matrix2, scale) {
  const targetArray = target.elements;
  const matrixArray = matrix2.elements;
  for (let i = 0, l2 = matrixArray.length; i < l2; i++) {
    targetArray[i] += matrixArray[i] * scale;
  }
}
function boneNormalTransform(mesh, index, target) {
  const skeleton = mesh.skeleton;
  const geometry = mesh.geometry;
  const bones = skeleton.bones;
  const boneInverses = skeleton.boneInverses;
  _skinIndex.fromBufferAttribute(geometry.attributes.skinIndex, index);
  _skinWeight.fromBufferAttribute(geometry.attributes.skinWeight, index);
  _matrix.elements.fill(0);
  for (let i = 0; i < 4; i++) {
    const weight = _skinWeight.getComponent(i);
    if (weight !== 0) {
      const boneIndex = _skinIndex.getComponent(i);
      _boneMatrix.multiplyMatrices(bones[boneIndex].matrixWorld, boneInverses[boneIndex]);
      addScaledMatrix(_matrix, _boneMatrix, weight);
    }
  }
  _matrix.multiply(mesh.bindMatrix).premultiply(mesh.bindMatrixInverse);
  target.transformDirection(_matrix);
  return target;
}
function applyMorphTarget(morphData, morphInfluences, morphTargetsRelative, i, target) {
  _morphVector.set(0, 0, 0);
  for (let j2 = 0, jl = morphData.length; j2 < jl; j2++) {
    const influence = morphInfluences[j2];
    const morphAttribute = morphData[j2];
    if (influence === 0) continue;
    _temp.fromBufferAttribute(morphAttribute, i);
    if (morphTargetsRelative) {
      _morphVector.addScaledVector(_temp, influence);
    } else {
      _morphVector.addScaledVector(_temp.sub(target), influence);
    }
  }
  target.add(_morphVector);
}
function mergeBufferGeometries(geometries, options = { useGroups: false, updateIndex: false, skipAttributes: [] }, targetGeometry = new BufferGeometry()) {
  const isIndexed = geometries[0].index !== null;
  const { useGroups = false, updateIndex = false, skipAttributes = [] } = options;
  const attributesUsed = new Set(Object.keys(geometries[0].attributes));
  const attributes = {};
  let offset = 0;
  targetGeometry.clearGroups();
  for (let i = 0; i < geometries.length; ++i) {
    const geometry = geometries[i];
    let attributesCount = 0;
    if (isIndexed !== (geometry.index !== null)) {
      throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");
    }
    for (const name in geometry.attributes) {
      if (!attributesUsed.has(name)) {
        throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "' + name + '" attribute exists among all geometries, or in none of them.');
      }
      if (attributes[name] === void 0) {
        attributes[name] = [];
      }
      attributes[name].push(geometry.attributes[name]);
      attributesCount++;
    }
    if (attributesCount !== attributesUsed.size) {
      throw new Error("StaticGeometryGenerator: Make sure all geometries have the same number of attributes.");
    }
    if (useGroups) {
      let count;
      if (isIndexed) {
        count = geometry.index.count;
      } else if (geometry.attributes.position !== void 0) {
        count = geometry.attributes.position.count;
      } else {
        throw new Error("StaticGeometryGenerator: The geometry must have either an index or a position attribute");
      }
      targetGeometry.addGroup(offset, count, i);
      offset += count;
    }
  }
  if (isIndexed) {
    let forceUpdateIndex = false;
    if (!targetGeometry.index) {
      let indexCount = 0;
      for (let i = 0; i < geometries.length; ++i) {
        indexCount += geometries[i].index.count;
      }
      targetGeometry.setIndex(new BufferAttribute(new Uint32Array(indexCount), 1, false));
      forceUpdateIndex = true;
    }
    if (updateIndex || forceUpdateIndex) {
      const targetIndex = targetGeometry.index;
      let targetOffset = 0;
      let indexOffset = 0;
      for (let i = 0; i < geometries.length; ++i) {
        const geometry = geometries[i];
        const index = geometry.index;
        if (skipAttributes[i] !== true) {
          for (let j2 = 0; j2 < index.count; ++j2) {
            targetIndex.setX(targetOffset, index.getX(j2) + indexOffset);
            targetOffset++;
          }
        }
        indexOffset += geometry.attributes.position.count;
      }
    }
  }
  for (const name in attributes) {
    const attrList = attributes[name];
    if (!(name in targetGeometry.attributes)) {
      let count = 0;
      for (const key in attrList) {
        count += attrList[key].count;
      }
      targetGeometry.setAttribute(name, createAttributeClone(attributes[name][0], count));
    }
    const targetAttribute = targetGeometry.attributes[name];
    let offset2 = 0;
    for (let i = 0, l2 = attrList.length; i < l2; i++) {
      const attr = attrList[i];
      if (skipAttributes[i] !== true) {
        copyAttributeContents(attr, targetAttribute, offset2);
      }
      offset2 += attr.count;
    }
  }
  return targetGeometry;
}
function checkTypedArrayEquality(a, b) {
  if (a === null || b === null) {
    return a === b;
  }
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0, l2 = a.length; i < l2; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
function invertGeometry(geometry) {
  const { index, attributes } = geometry;
  if (index) {
    for (let i = 0, l2 = index.count; i < l2; i += 3) {
      const v0 = index.getX(i);
      const v2 = index.getX(i + 2);
      index.setX(i, v2);
      index.setX(i + 2, v0);
    }
  } else {
    for (const key in attributes) {
      const attr = attributes[key];
      const itemSize = attr.itemSize;
      for (let i = 0, l2 = attr.count; i < l2; i += 3) {
        for (let j2 = 0; j2 < itemSize; j2++) {
          const v0 = attr.getComponent(i, j2);
          const v2 = attr.getComponent(i + 2, j2);
          attr.setComponent(i, j2, v2);
          attr.setComponent(i + 2, j2, v0);
        }
      }
    }
  }
  return geometry;
}
class GeometryDiff {
  constructor(mesh) {
    this.matrixWorld = new Matrix4();
    this.geometryHash = null;
    this.boneMatrices = null;
    this.primitiveCount = -1;
    this.mesh = mesh;
    this.update();
  }
  update() {
    const mesh = this.mesh;
    const geometry = mesh.geometry;
    const skeleton = mesh.skeleton;
    const primitiveCount = (geometry.index ? geometry.index.count : geometry.attributes.position.count) / 3;
    this.matrixWorld.copy(mesh.matrixWorld);
    this.geometryHash = geometry.attributes.position.version;
    this.primitiveCount = primitiveCount;
    if (skeleton) {
      if (!skeleton.boneTexture) {
        skeleton.computeBoneTexture();
      }
      skeleton.update();
      const boneMatrices = skeleton.boneMatrices;
      if (!this.boneMatrices || this.boneMatrices.length !== boneMatrices.length) {
        this.boneMatrices = boneMatrices.slice();
      } else {
        this.boneMatrices.set(boneMatrices);
      }
    } else {
      this.boneMatrices = null;
    }
  }
  didChange() {
    const mesh = this.mesh;
    const geometry = mesh.geometry;
    const primitiveCount = (geometry.index ? geometry.index.count : geometry.attributes.position.count) / 3;
    const identical = this.matrixWorld.equals(mesh.matrixWorld) && this.geometryHash === geometry.attributes.position.version && checkTypedArrayEquality(mesh.skeleton && mesh.skeleton.boneMatrices || null, this.boneMatrices) && this.primitiveCount === primitiveCount;
    return !identical;
  }
}
class StaticGeometryGenerator {
  constructor(meshes) {
    if (!Array.isArray(meshes)) {
      meshes = [meshes];
    }
    const finalMeshes = [];
    meshes.forEach((object) => {
      object.traverseVisible((c) => {
        if (c.isMesh) {
          finalMeshes.push(c);
        }
      });
    });
    this.meshes = finalMeshes;
    this.useGroups = true;
    this.applyWorldTransforms = true;
    this.attributes = ["position", "normal", "color", "tangent", "uv", "uv2"];
    this._intermediateGeometry = new Array(finalMeshes.length).fill().map(() => new BufferGeometry());
    this._diffMap = /* @__PURE__ */ new WeakMap();
  }
  getMaterials() {
    const materials = [];
    this.meshes.forEach((mesh) => {
      if (Array.isArray(mesh.material)) {
        materials.push(...mesh.material);
      } else {
        materials.push(mesh.material);
      }
    });
    return materials;
  }
  generate(targetGeometry = new BufferGeometry()) {
    let skipAttributes = [];
    const { meshes, useGroups, _intermediateGeometry, _diffMap } = this;
    for (let i = 0, l2 = meshes.length; i < l2; i++) {
      const mesh = meshes[i];
      const geom = _intermediateGeometry[i];
      const diff = _diffMap.get(mesh);
      if (!diff || diff.didChange(mesh)) {
        this._convertToStaticGeometry(mesh, geom);
        skipAttributes.push(false);
        if (!diff) {
          _diffMap.set(mesh, new GeometryDiff(mesh));
        } else {
          diff.update();
        }
      } else {
        skipAttributes.push(true);
      }
    }
    if (_intermediateGeometry.length === 0) {
      targetGeometry.setIndex(null);
      const attrs = targetGeometry.attributes;
      for (const key in attrs) {
        targetGeometry.deleteAttribute(key);
      }
      for (const key in this.attributes) {
        targetGeometry.setAttribute(this.attributes[key], new BufferAttribute(new Float32Array(0), 4, false));
      }
    } else {
      mergeBufferGeometries(_intermediateGeometry, { useGroups, skipAttributes }, targetGeometry);
    }
    for (const key in targetGeometry.attributes) {
      targetGeometry.attributes[key].needsUpdate = true;
    }
    return targetGeometry;
  }
  _convertToStaticGeometry(mesh, targetGeometry = new BufferGeometry()) {
    const geometry = mesh.geometry;
    const applyWorldTransforms = this.applyWorldTransforms;
    const includeNormal = this.attributes.includes("normal");
    const includeTangent = this.attributes.includes("tangent");
    const attributes = geometry.attributes;
    const targetAttributes = targetGeometry.attributes;
    if (!targetGeometry.index && geometry.index) {
      targetGeometry.index = geometry.index.clone();
    }
    if (!targetAttributes.position) {
      targetGeometry.setAttribute("position", createAttributeClone(attributes.position));
    }
    if (includeNormal && !targetAttributes.normal && attributes.normal) {
      targetGeometry.setAttribute("normal", createAttributeClone(attributes.normal));
    }
    if (includeTangent && !targetAttributes.tangent && attributes.tangent) {
      targetGeometry.setAttribute("tangent", createAttributeClone(attributes.tangent));
    }
    validateAttributes(geometry.index, targetGeometry.index);
    validateAttributes(attributes.position, targetAttributes.position);
    if (includeNormal) {
      validateAttributes(attributes.normal, targetAttributes.normal);
    }
    if (includeTangent) {
      validateAttributes(attributes.tangent, targetAttributes.tangent);
    }
    const position = attributes.position;
    const normal = includeNormal ? attributes.normal : null;
    const tangent = includeTangent ? attributes.tangent : null;
    const morphPosition = geometry.morphAttributes.position;
    const morphNormal = geometry.morphAttributes.normal;
    const morphTangent = geometry.morphAttributes.tangent;
    const morphTargetsRelative = geometry.morphTargetsRelative;
    const morphInfluences = mesh.morphTargetInfluences;
    const normalMatrix = new Matrix3();
    normalMatrix.getNormalMatrix(mesh.matrixWorld);
    if (geometry.index) {
      targetGeometry.index.array.set(geometry.index.array);
    }
    for (let i = 0, l2 = attributes.position.count; i < l2; i++) {
      _positionVector.fromBufferAttribute(position, i);
      if (normal) {
        _normalVector.fromBufferAttribute(normal, i);
      }
      if (tangent) {
        _tangentVector4.fromBufferAttribute(tangent, i);
        _tangentVector.fromBufferAttribute(tangent, i);
      }
      if (morphInfluences) {
        if (morphPosition) {
          applyMorphTarget(morphPosition, morphInfluences, morphTargetsRelative, i, _positionVector);
        }
        if (morphNormal) {
          applyMorphTarget(morphNormal, morphInfluences, morphTargetsRelative, i, _normalVector);
        }
        if (morphTangent) {
          applyMorphTarget(morphTangent, morphInfluences, morphTargetsRelative, i, _tangentVector);
        }
      }
      if (mesh.isSkinnedMesh) {
        mesh.applyBoneTransform(i, _positionVector);
        if (normal) {
          boneNormalTransform(mesh, i, _normalVector);
        }
        if (tangent) {
          boneNormalTransform(mesh, i, _tangentVector);
        }
      }
      if (applyWorldTransforms) {
        _positionVector.applyMatrix4(mesh.matrixWorld);
      }
      targetAttributes.position.setXYZ(i, _positionVector.x, _positionVector.y, _positionVector.z);
      if (normal) {
        if (applyWorldTransforms) {
          _normalVector.applyNormalMatrix(normalMatrix);
        }
        targetAttributes.normal.setXYZ(i, _normalVector.x, _normalVector.y, _normalVector.z);
      }
      if (tangent) {
        if (applyWorldTransforms) {
          _tangentVector.transformDirection(mesh.matrixWorld);
        }
        targetAttributes.tangent.setXYZW(i, _tangentVector.x, _tangentVector.y, _tangentVector.z, _tangentVector4.w);
      }
    }
    for (const i in this.attributes) {
      const key = this.attributes[i];
      if (key === "position" || key === "tangent" || key === "normal" || !(key in attributes)) {
        continue;
      }
      if (!targetAttributes[key]) {
        targetGeometry.setAttribute(key, createAttributeClone(attributes[key]));
      }
      validateAttributes(attributes[key], targetAttributes[key]);
      copyAttributeContents(attributes[key], targetAttributes[key]);
    }
    if (mesh.matrixWorld.determinant() < 0) {
      invertGeometry(targetGeometry);
    }
    return targetGeometry;
  }
}
const common_functions = (
  /* glsl */
  `

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`
);
const bvh_distance_functions = (
  /* glsl */
  `

float dot2( vec3 v ) {

	return dot( v, v );

}

// https://www.shadertoy.com/view/ttfGWl
vec3 closestPointToTriangle( vec3 p, vec3 v0, vec3 v1, vec3 v2, out vec3 barycoord ) {

    vec3 v10 = v1 - v0;
    vec3 v21 = v2 - v1;
    vec3 v02 = v0 - v2;

	vec3 p0 = p - v0;
	vec3 p1 = p - v1;
	vec3 p2 = p - v2;

    vec3 nor = cross( v10, v02 );

    // method 2, in barycentric space
    vec3  q = cross( nor, p0 );
    float d = 1.0 / dot2( nor );
    float u = d * dot( q, v02 );
    float v = d * dot( q, v10 );
    float w = 1.0 - u - v;

	if( u < 0.0 ) {

		w = clamp( dot( p2, v02 ) / dot2( v02 ), 0.0, 1.0 );
		u = 0.0;
		v = 1.0 - w;

	} else if( v < 0.0 ) {

		u = clamp( dot( p0, v10 ) / dot2( v10 ), 0.0, 1.0 );
		v = 0.0;
		w = 1.0 - u;

	} else if( w < 0.0 ) {

		v = clamp( dot( p1, v21 ) / dot2( v21 ), 0.0, 1.0 );
		w = 0.0;
		u = 1.0-v;

	}

	barycoord = vec3( u, v, w );
    return u * v1 + v * v2 + w * v0;

}

float distanceToTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// point and cut off range
	vec3 point, float closestDistanceSquared,

	// outputs
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord, inout float side, inout vec3 outPoint
) {

	bool found = false;
	vec3 localBarycoord;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		// get the closest point and barycoord
		vec3 closestPoint = closestPointToTriangle( point, a, b, c, localBarycoord );
		vec3 delta = point - closestPoint;
		float sqDist = dot2( delta );
		if ( sqDist < closestDistanceSquared ) {

			// set the output results
			closestDistanceSquared = sqDist;
			faceIndices = uvec4( indices.xyz, i );
			faceNormal = normalize( cross( a - b, b - c ) );
			barycoord = localBarycoord;
			outPoint = closestPoint;
			side = sign( dot( faceNormal, delta ) );

		}

	}

	return closestDistanceSquared;

}

float distanceSqToBounds( vec3 point, vec3 boundsMin, vec3 boundsMax ) {

	vec3 clampedPoint = clamp( point, boundsMin, boundsMax );
	vec3 delta = point - clampedPoint;
	return dot( delta, delta );

}

float distanceSqToBVHNodeBoundsPoint( vec3 point, sampler2D bvhBounds, uint currNodeIndex ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return distanceSqToBounds( point, boundsMin, boundsMax );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhClosestPointToPoint(		bvh,		point, maxDistance, faceIndices, faceNormal, barycoord, side, outPoint	)	_bvhClosestPointToPoint(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		point, maxDistance, faceIndices, faceNormal, barycoord, side, outPoint	)

float _bvhClosestPointToPoint(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// point to check
	vec3 point, float maxDistance,

	// output variables
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout vec3 outPoint
 ) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float closestDistanceSquared = maxDistance * maxDistance;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance = distanceSqToBVHNodeBoundsPoint( point, bvh_bvhBounds, currNodeIndex );
		if ( boundsHitDistance > closestDistanceSquared ) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );
		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;
			closestDistanceSquared = distanceToTriangles(
				bvh_position, bvh_index, offset, count, point, closestDistanceSquared,

				// outputs
				faceIndices, faceNormal, barycoord, side, outPoint
			);

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;
			bool leftToRight = distanceSqToBVHNodeBoundsPoint( point, bvh_bvhBounds, leftIndex ) < distanceSqToBVHNodeBoundsPoint( point, bvh_bvhBounds, rightIndex );//rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;
			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return sqrt( closestDistanceSquared );

}
`
);
const bvh_ray_functions = (
  /* glsl */
  `

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`
);
const bvh_struct_definitions = (
  /* glsl */
  `
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`
);
const BVHShaderGLSL = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bvh_distance_functions,
  bvh_ray_functions,
  bvh_struct_definitions,
  common_functions
}, Symbol.toStringTag, { value: "Module" }));
const shaderStructs = bvh_struct_definitions;
const shaderDistanceFunction = bvh_distance_functions;
const shaderIntersectFunction = `
	${common_functions}
	${bvh_ray_functions}
`;
export {
  A as AVERAGE,
  BVHShaderGLSL,
  e as CENTER,
  j as CONTAINED,
  E as ExtendedTriangle,
  FloatVertexAttributeTexture,
  h as INTERSECTED,
  IntVertexAttributeTexture,
  MeshBVH,
  MeshBVHHelper,
  MeshBVHUniformStruct,
  N as NOT_INTERSECTED,
  l as OrientedBox,
  f as SAH,
  StaticGeometryGenerator,
  UIntVertexAttributeTexture,
  VertexAttributeTexture,
  acceleratedRaycast,
  computeBatchedBoundsTree,
  computeBoundsTree,
  disposeBatchedBoundsTree,
  disposeBoundsTree,
  estimateMemoryInBytes,
  getBVHExtremes,
  getJSONStructure,
  k as getTriangleHitPointInfo,
  shaderDistanceFunction,
  shaderIntersectFunction,
  shaderStructs,
  validateBounds
};
//# sourceMappingURL=index-BnxWij5b.js.map
