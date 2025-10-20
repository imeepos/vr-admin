(function() {
  "use strict";
  /**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   */
  const REVISION = "169";
  const FrontSide = 0;
  const BackSide = 1;
  const DoubleSide = 2;
  const NoToneMapping = 0;
  const UVMapping = 300;
  const CubeReflectionMapping = 301;
  const CubeRefractionMapping = 302;
  const RepeatWrapping = 1e3;
  const ClampToEdgeWrapping = 1001;
  const MirroredRepeatWrapping = 1002;
  const NearestFilter = 1003;
  const LinearFilter = 1006;
  const LinearMipmapLinearFilter = 1008;
  const UnsignedByteType = 1009;
  const IntType = 1013;
  const UnsignedIntType = 1014;
  const FloatType = 1015;
  const HalfFloatType = 1016;
  const UnsignedInt248Type = 1020;
  const RGBAFormat = 1023;
  const DepthFormat = 1026;
  const DepthStencilFormat = 1027;
  const TangentSpaceNormalMap = 0;
  const ObjectSpaceNormalMap = 1;
  const NoColorSpace = "";
  const SRGBColorSpace = "srgb";
  const LinearSRGBColorSpace = "srgb-linear";
  const DisplayP3ColorSpace = "display-p3";
  const LinearDisplayP3ColorSpace = "display-p3-linear";
  const LinearTransfer = "linear";
  const SRGBTransfer = "srgb";
  const Rec709Primaries = "rec709";
  const P3Primaries = "p3";
  const StaticDrawUsage = 35044;
  const WebGLCoordinateSystem = 2e3;
  const WebGPUCoordinateSystem = 2001;
  class EventDispatcher {
    addEventListener(type, listener) {
      if (this._listeners === void 0) this._listeners = {};
      const listeners = this._listeners;
      if (listeners[type] === void 0) {
        listeners[type] = [];
      }
      if (listeners[type].indexOf(listener) === -1) {
        listeners[type].push(listener);
      }
    }
    hasEventListener(type, listener) {
      if (this._listeners === void 0) return false;
      const listeners = this._listeners;
      return listeners[type] !== void 0 && listeners[type].indexOf(listener) !== -1;
    }
    removeEventListener(type, listener) {
      if (this._listeners === void 0) return;
      const listeners = this._listeners;
      const listenerArray = listeners[type];
      if (listenerArray !== void 0) {
        const index = listenerArray.indexOf(listener);
        if (index !== -1) {
          listenerArray.splice(index, 1);
        }
      }
    }
    dispatchEvent(event) {
      if (this._listeners === void 0) return;
      const listeners = this._listeners;
      const listenerArray = listeners[event.type];
      if (listenerArray !== void 0) {
        event.target = this;
        const array = listenerArray.slice(0);
        for (let i = 0, l = array.length; i < l; i++) {
          array[i].call(this, event);
        }
        event.target = null;
      }
    }
  }
  const _lut = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
  let _seed = 1234567;
  const DEG2RAD = Math.PI / 180;
  const RAD2DEG = 180 / Math.PI;
  function generateUUID() {
    const d0 = Math.random() * 4294967295 | 0;
    const d1 = Math.random() * 4294967295 | 0;
    const d2 = Math.random() * 4294967295 | 0;
    const d3 = Math.random() * 4294967295 | 0;
    const uuid = _lut[d0 & 255] + _lut[d0 >> 8 & 255] + _lut[d0 >> 16 & 255] + _lut[d0 >> 24 & 255] + "-" + _lut[d1 & 255] + _lut[d1 >> 8 & 255] + "-" + _lut[d1 >> 16 & 15 | 64] + _lut[d1 >> 24 & 255] + "-" + _lut[d2 & 63 | 128] + _lut[d2 >> 8 & 255] + "-" + _lut[d2 >> 16 & 255] + _lut[d2 >> 24 & 255] + _lut[d3 & 255] + _lut[d3 >> 8 & 255] + _lut[d3 >> 16 & 255] + _lut[d3 >> 24 & 255];
    return uuid.toLowerCase();
  }
  function clamp$1(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
  function euclideanModulo(n, m) {
    return (n % m + m) % m;
  }
  function mapLinear(x, a1, a2, b1, b2) {
    return b1 + (x - a1) * (b2 - b1) / (a2 - a1);
  }
  function inverseLerp(x, y, value) {
    if (x !== y) {
      return (value - x) / (y - x);
    } else {
      return 0;
    }
  }
  function lerp(x, y, t) {
    return (1 - t) * x + t * y;
  }
  function damp(x, y, lambda, dt) {
    return lerp(x, y, 1 - Math.exp(-lambda * dt));
  }
  function pingpong(x, length2 = 1) {
    return length2 - Math.abs(euclideanModulo(x, length2 * 2) - length2);
  }
  function smoothstep$1(x, min, max) {
    if (x <= min) return 0;
    if (x >= max) return 1;
    x = (x - min) / (max - min);
    return x * x * (3 - 2 * x);
  }
  function smootherstep(x, min, max) {
    if (x <= min) return 0;
    if (x >= max) return 1;
    x = (x - min) / (max - min);
    return x * x * x * (x * (x * 6 - 15) + 10);
  }
  function randInt(low, high) {
    return low + Math.floor(Math.random() * (high - low + 1));
  }
  function randFloat(low, high) {
    return low + Math.random() * (high - low);
  }
  function randFloatSpread(range) {
    return range * (0.5 - Math.random());
  }
  function seededRandom(s) {
    if (s !== void 0) _seed = s;
    let t = _seed += 1831565813;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
  function degToRad(degrees2) {
    return degrees2 * DEG2RAD;
  }
  function radToDeg(radians2) {
    return radians2 * RAD2DEG;
  }
  function isPowerOfTwo(value) {
    return (value & value - 1) === 0 && value !== 0;
  }
  function ceilPowerOfTwo(value) {
    return Math.pow(2, Math.ceil(Math.log(value) / Math.LN2));
  }
  function floorPowerOfTwo(value) {
    return Math.pow(2, Math.floor(Math.log(value) / Math.LN2));
  }
  function setQuaternionFromProperEuler(q, a, b, c, order) {
    const cos2 = Math.cos;
    const sin2 = Math.sin;
    const c2 = cos2(b / 2);
    const s2 = sin2(b / 2);
    const c13 = cos2((a + c) / 2);
    const s13 = sin2((a + c) / 2);
    const c1_3 = cos2((a - c) / 2);
    const s1_3 = sin2((a - c) / 2);
    const c3_1 = cos2((c - a) / 2);
    const s3_1 = sin2((c - a) / 2);
    switch (order) {
      case "XYX":
        q.set(c2 * s13, s2 * c1_3, s2 * s1_3, c2 * c13);
        break;
      case "YZY":
        q.set(s2 * s1_3, c2 * s13, s2 * c1_3, c2 * c13);
        break;
      case "ZXZ":
        q.set(s2 * c1_3, s2 * s1_3, c2 * s13, c2 * c13);
        break;
      case "XZX":
        q.set(c2 * s13, s2 * s3_1, s2 * c3_1, c2 * c13);
        break;
      case "YXY":
        q.set(s2 * c3_1, c2 * s13, s2 * s3_1, c2 * c13);
        break;
      case "ZYZ":
        q.set(s2 * s3_1, s2 * c3_1, c2 * s13, c2 * c13);
        break;
      default:
        console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + order);
    }
  }
  function denormalize(value, array) {
    switch (array.constructor) {
      case Float32Array:
        return value;
      case Uint32Array:
        return value / 4294967295;
      case Uint16Array:
        return value / 65535;
      case Uint8Array:
        return value / 255;
      case Int32Array:
        return Math.max(value / 2147483647, -1);
      case Int16Array:
        return Math.max(value / 32767, -1);
      case Int8Array:
        return Math.max(value / 127, -1);
      default:
        throw new Error("Invalid component type.");
    }
  }
  function normalize$1(value, array) {
    switch (array.constructor) {
      case Float32Array:
        return value;
      case Uint32Array:
        return Math.round(value * 4294967295);
      case Uint16Array:
        return Math.round(value * 65535);
      case Uint8Array:
        return Math.round(value * 255);
      case Int32Array:
        return Math.round(value * 2147483647);
      case Int16Array:
        return Math.round(value * 32767);
      case Int8Array:
        return Math.round(value * 127);
      default:
        throw new Error("Invalid component type.");
    }
  }
  const MathUtils = {
    DEG2RAD,
    RAD2DEG,
    generateUUID,
    clamp: clamp$1,
    euclideanModulo,
    mapLinear,
    inverseLerp,
    lerp,
    damp,
    pingpong,
    smoothstep: smoothstep$1,
    smootherstep,
    randInt,
    randFloat,
    randFloatSpread,
    seededRandom,
    degToRad,
    radToDeg,
    isPowerOfTwo,
    ceilPowerOfTwo,
    floorPowerOfTwo,
    setQuaternionFromProperEuler,
    normalize: normalize$1,
    denormalize
  };
  class Vector2 {
    constructor(x = 0, y = 0) {
      Vector2.prototype.isVector2 = true;
      this.x = x;
      this.y = y;
    }
    get width() {
      return this.x;
    }
    set width(value) {
      this.x = value;
    }
    get height() {
      return this.y;
    }
    set height(value) {
      this.y = value;
    }
    set(x, y) {
      this.x = x;
      this.y = y;
      return this;
    }
    setScalar(scalar) {
      this.x = scalar;
      this.y = scalar;
      return this;
    }
    setX(x) {
      this.x = x;
      return this;
    }
    setY(y) {
      this.y = y;
      return this;
    }
    setComponent(index, value) {
      switch (index) {
        case 0:
          this.x = value;
          break;
        case 1:
          this.y = value;
          break;
        default:
          throw new Error("index is out of range: " + index);
      }
      return this;
    }
    getComponent(index) {
      switch (index) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + index);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(v) {
      this.x = v.x;
      this.y = v.y;
      return this;
    }
    add(v) {
      this.x += v.x;
      this.y += v.y;
      return this;
    }
    addScalar(s) {
      this.x += s;
      this.y += s;
      return this;
    }
    addVectors(a, b) {
      this.x = a.x + b.x;
      this.y = a.y + b.y;
      return this;
    }
    addScaledVector(v, s) {
      this.x += v.x * s;
      this.y += v.y * s;
      return this;
    }
    sub(v) {
      this.x -= v.x;
      this.y -= v.y;
      return this;
    }
    subScalar(s) {
      this.x -= s;
      this.y -= s;
      return this;
    }
    subVectors(a, b) {
      this.x = a.x - b.x;
      this.y = a.y - b.y;
      return this;
    }
    multiply(v) {
      this.x *= v.x;
      this.y *= v.y;
      return this;
    }
    multiplyScalar(scalar) {
      this.x *= scalar;
      this.y *= scalar;
      return this;
    }
    divide(v) {
      this.x /= v.x;
      this.y /= v.y;
      return this;
    }
    divideScalar(scalar) {
      return this.multiplyScalar(1 / scalar);
    }
    applyMatrix3(m) {
      const x = this.x, y = this.y;
      const e = m.elements;
      this.x = e[0] * x + e[3] * y + e[6];
      this.y = e[1] * x + e[4] * y + e[7];
      return this;
    }
    min(v) {
      this.x = Math.min(this.x, v.x);
      this.y = Math.min(this.y, v.y);
      return this;
    }
    max(v) {
      this.x = Math.max(this.x, v.x);
      this.y = Math.max(this.y, v.y);
      return this;
    }
    clamp(min, max) {
      this.x = Math.max(min.x, Math.min(max.x, this.x));
      this.y = Math.max(min.y, Math.min(max.y, this.y));
      return this;
    }
    clampScalar(minVal, maxVal) {
      this.x = Math.max(minVal, Math.min(maxVal, this.x));
      this.y = Math.max(minVal, Math.min(maxVal, this.y));
      return this;
    }
    clampLength(min, max) {
      const length2 = this.length();
      return this.divideScalar(length2 || 1).multiplyScalar(Math.max(min, Math.min(max, length2)));
    }
    floor() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      return this;
    }
    ceil() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      return this;
    }
    round() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      return this;
    }
    roundToZero() {
      this.x = Math.trunc(this.x);
      this.y = Math.trunc(this.y);
      return this;
    }
    negate() {
      this.x = -this.x;
      this.y = -this.y;
      return this;
    }
    dot(v) {
      return this.x * v.x + this.y * v.y;
    }
    cross(v) {
      return this.x * v.y - this.y * v.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      const angle = Math.atan2(-this.y, -this.x) + Math.PI;
      return angle;
    }
    angleTo(v) {
      const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
      if (denominator === 0) return Math.PI / 2;
      const theta = this.dot(v) / denominator;
      return Math.acos(clamp$1(theta, -1, 1));
    }
    distanceTo(v) {
      return Math.sqrt(this.distanceToSquared(v));
    }
    distanceToSquared(v) {
      const dx = this.x - v.x, dy = this.y - v.y;
      return dx * dx + dy * dy;
    }
    manhattanDistanceTo(v) {
      return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
    }
    setLength(length2) {
      return this.normalize().multiplyScalar(length2);
    }
    lerp(v, alpha) {
      this.x += (v.x - this.x) * alpha;
      this.y += (v.y - this.y) * alpha;
      return this;
    }
    lerpVectors(v1, v2, alpha) {
      this.x = v1.x + (v2.x - v1.x) * alpha;
      this.y = v1.y + (v2.y - v1.y) * alpha;
      return this;
    }
    equals(v) {
      return v.x === this.x && v.y === this.y;
    }
    fromArray(array, offset = 0) {
      this.x = array[offset];
      this.y = array[offset + 1];
      return this;
    }
    toArray(array = [], offset = 0) {
      array[offset] = this.x;
      array[offset + 1] = this.y;
      return array;
    }
    fromBufferAttribute(attribute2, index) {
      this.x = attribute2.getX(index);
      this.y = attribute2.getY(index);
      return this;
    }
    rotateAround(center, angle) {
      const c = Math.cos(angle), s = Math.sin(angle);
      const x = this.x - center.x;
      const y = this.y - center.y;
      this.x = x * c - y * s + center.x;
      this.y = x * s + y * c + center.y;
      return this;
    }
    random() {
      this.x = Math.random();
      this.y = Math.random();
      return this;
    }
    *[Symbol.iterator]() {
      yield this.x;
      yield this.y;
    }
  }
  class Matrix3 {
    constructor(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
      Matrix3.prototype.isMatrix3 = true;
      this.elements = [
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ];
      if (n11 !== void 0) {
        this.set(n11, n12, n13, n21, n22, n23, n31, n32, n33);
      }
    }
    set(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
      const te = this.elements;
      te[0] = n11;
      te[1] = n21;
      te[2] = n31;
      te[3] = n12;
      te[4] = n22;
      te[5] = n32;
      te[6] = n13;
      te[7] = n23;
      te[8] = n33;
      return this;
    }
    identity() {
      this.set(
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      );
      return this;
    }
    copy(m) {
      const te = this.elements;
      const me = m.elements;
      te[0] = me[0];
      te[1] = me[1];
      te[2] = me[2];
      te[3] = me[3];
      te[4] = me[4];
      te[5] = me[5];
      te[6] = me[6];
      te[7] = me[7];
      te[8] = me[8];
      return this;
    }
    extractBasis(xAxis, yAxis, zAxis) {
      xAxis.setFromMatrix3Column(this, 0);
      yAxis.setFromMatrix3Column(this, 1);
      zAxis.setFromMatrix3Column(this, 2);
      return this;
    }
    setFromMatrix4(m) {
      const me = m.elements;
      this.set(
        me[0],
        me[4],
        me[8],
        me[1],
        me[5],
        me[9],
        me[2],
        me[6],
        me[10]
      );
      return this;
    }
    multiply(m) {
      return this.multiplyMatrices(this, m);
    }
    premultiply(m) {
      return this.multiplyMatrices(m, this);
    }
    multiplyMatrices(a, b) {
      const ae = a.elements;
      const be = b.elements;
      const te = this.elements;
      const a11 = ae[0], a12 = ae[3], a13 = ae[6];
      const a21 = ae[1], a22 = ae[4], a23 = ae[7];
      const a31 = ae[2], a32 = ae[5], a33 = ae[8];
      const b11 = be[0], b12 = be[3], b13 = be[6];
      const b21 = be[1], b22 = be[4], b23 = be[7];
      const b31 = be[2], b32 = be[5], b33 = be[8];
      te[0] = a11 * b11 + a12 * b21 + a13 * b31;
      te[3] = a11 * b12 + a12 * b22 + a13 * b32;
      te[6] = a11 * b13 + a12 * b23 + a13 * b33;
      te[1] = a21 * b11 + a22 * b21 + a23 * b31;
      te[4] = a21 * b12 + a22 * b22 + a23 * b32;
      te[7] = a21 * b13 + a22 * b23 + a23 * b33;
      te[2] = a31 * b11 + a32 * b21 + a33 * b31;
      te[5] = a31 * b12 + a32 * b22 + a33 * b32;
      te[8] = a31 * b13 + a32 * b23 + a33 * b33;
      return this;
    }
    multiplyScalar(s) {
      const te = this.elements;
      te[0] *= s;
      te[3] *= s;
      te[6] *= s;
      te[1] *= s;
      te[4] *= s;
      te[7] *= s;
      te[2] *= s;
      te[5] *= s;
      te[8] *= s;
      return this;
    }
    determinant() {
      const te = this.elements;
      const a = te[0], b = te[1], c = te[2], d = te[3], e = te[4], f = te[5], g = te[6], h = te[7], i = te[8];
      return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;
    }
    invert() {
      const te = this.elements, n11 = te[0], n21 = te[1], n31 = te[2], n12 = te[3], n22 = te[4], n32 = te[5], n13 = te[6], n23 = te[7], n33 = te[8], t11 = n33 * n22 - n32 * n23, t12 = n32 * n13 - n33 * n12, t13 = n23 * n12 - n22 * n13, det = n11 * t11 + n21 * t12 + n31 * t13;
      if (det === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const detInv = 1 / det;
      te[0] = t11 * detInv;
      te[1] = (n31 * n23 - n33 * n21) * detInv;
      te[2] = (n32 * n21 - n31 * n22) * detInv;
      te[3] = t12 * detInv;
      te[4] = (n33 * n11 - n31 * n13) * detInv;
      te[5] = (n31 * n12 - n32 * n11) * detInv;
      te[6] = t13 * detInv;
      te[7] = (n21 * n13 - n23 * n11) * detInv;
      te[8] = (n22 * n11 - n21 * n12) * detInv;
      return this;
    }
    transpose() {
      let tmp;
      const m = this.elements;
      tmp = m[1];
      m[1] = m[3];
      m[3] = tmp;
      tmp = m[2];
      m[2] = m[6];
      m[6] = tmp;
      tmp = m[5];
      m[5] = m[7];
      m[7] = tmp;
      return this;
    }
    getNormalMatrix(matrix4) {
      return this.setFromMatrix4(matrix4).invert().transpose();
    }
    transposeIntoArray(r) {
      const m = this.elements;
      r[0] = m[0];
      r[1] = m[3];
      r[2] = m[6];
      r[3] = m[1];
      r[4] = m[4];
      r[5] = m[7];
      r[6] = m[2];
      r[7] = m[5];
      r[8] = m[8];
      return this;
    }
    setUvTransform(tx, ty, sx, sy, rotation, cx, cy) {
      const c = Math.cos(rotation);
      const s = Math.sin(rotation);
      this.set(
        sx * c,
        sx * s,
        -sx * (c * cx + s * cy) + cx + tx,
        -sy * s,
        sy * c,
        -sy * (-s * cx + c * cy) + cy + ty,
        0,
        0,
        1
      );
      return this;
    }
    //
    scale(sx, sy) {
      this.premultiply(_m3.makeScale(sx, sy));
      return this;
    }
    rotate(theta) {
      this.premultiply(_m3.makeRotation(-theta));
      return this;
    }
    translate(tx, ty) {
      this.premultiply(_m3.makeTranslation(tx, ty));
      return this;
    }
    // for 2D Transforms
    makeTranslation(x, y) {
      if (x.isVector2) {
        this.set(
          1,
          0,
          x.x,
          0,
          1,
          x.y,
          0,
          0,
          1
        );
      } else {
        this.set(
          1,
          0,
          x,
          0,
          1,
          y,
          0,
          0,
          1
        );
      }
      return this;
    }
    makeRotation(theta) {
      const c = Math.cos(theta);
      const s = Math.sin(theta);
      this.set(
        c,
        -s,
        0,
        s,
        c,
        0,
        0,
        0,
        1
      );
      return this;
    }
    makeScale(x, y) {
      this.set(
        x,
        0,
        0,
        0,
        y,
        0,
        0,
        0,
        1
      );
      return this;
    }
    //
    equals(matrix) {
      const te = this.elements;
      const me = matrix.elements;
      for (let i = 0; i < 9; i++) {
        if (te[i] !== me[i]) return false;
      }
      return true;
    }
    fromArray(array, offset = 0) {
      for (let i = 0; i < 9; i++) {
        this.elements[i] = array[i + offset];
      }
      return this;
    }
    toArray(array = [], offset = 0) {
      const te = this.elements;
      array[offset] = te[0];
      array[offset + 1] = te[1];
      array[offset + 2] = te[2];
      array[offset + 3] = te[3];
      array[offset + 4] = te[4];
      array[offset + 5] = te[5];
      array[offset + 6] = te[6];
      array[offset + 7] = te[7];
      array[offset + 8] = te[8];
      return array;
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  }
  const _m3 = /* @__PURE__ */ new Matrix3();
  function arrayNeedsUint32(array) {
    for (let i = array.length - 1; i >= 0; --i) {
      if (array[i] >= 65535) return true;
    }
    return false;
  }
  function createElementNS(name) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", name);
  }
  const LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = /* @__PURE__ */ new Matrix3().set(
    0.8224621,
    0.177538,
    0,
    0.0331941,
    0.9668058,
    0,
    0.0170827,
    0.0723974,
    0.9105199
  );
  const LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = /* @__PURE__ */ new Matrix3().set(
    1.2249401,
    -0.2249404,
    0,
    -0.0420569,
    1.0420571,
    0,
    -0.0196376,
    -0.0786361,
    1.0982735
  );
  const COLOR_SPACES = {
    [LinearSRGBColorSpace]: {
      transfer: LinearTransfer,
      primaries: Rec709Primaries,
      luminanceCoefficients: [0.2126, 0.7152, 0.0722],
      toReference: (color2) => color2,
      fromReference: (color2) => color2
    },
    [SRGBColorSpace]: {
      transfer: SRGBTransfer,
      primaries: Rec709Primaries,
      luminanceCoefficients: [0.2126, 0.7152, 0.0722],
      toReference: (color2) => color2.convertSRGBToLinear(),
      fromReference: (color2) => color2.convertLinearToSRGB()
    },
    [LinearDisplayP3ColorSpace]: {
      transfer: LinearTransfer,
      primaries: P3Primaries,
      luminanceCoefficients: [0.2289, 0.6917, 0.0793],
      toReference: (color2) => color2.applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB),
      fromReference: (color2) => color2.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3)
    },
    [DisplayP3ColorSpace]: {
      transfer: SRGBTransfer,
      primaries: P3Primaries,
      luminanceCoefficients: [0.2289, 0.6917, 0.0793],
      toReference: (color2) => color2.convertSRGBToLinear().applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB),
      fromReference: (color2) => color2.applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3).convertLinearToSRGB()
    }
  };
  const SUPPORTED_WORKING_COLOR_SPACES = /* @__PURE__ */ new Set([LinearSRGBColorSpace, LinearDisplayP3ColorSpace]);
  const ColorManagement = {
    enabled: true,
    _workingColorSpace: LinearSRGBColorSpace,
    get workingColorSpace() {
      return this._workingColorSpace;
    },
    set workingColorSpace(colorSpace) {
      if (!SUPPORTED_WORKING_COLOR_SPACES.has(colorSpace)) {
        throw new Error(`Unsupported working color space, "${colorSpace}".`);
      }
      this._workingColorSpace = colorSpace;
    },
    convert: function(color2, sourceColorSpace, targetColorSpace) {
      if (this.enabled === false || sourceColorSpace === targetColorSpace || !sourceColorSpace || !targetColorSpace) {
        return color2;
      }
      const sourceToReference = COLOR_SPACES[sourceColorSpace].toReference;
      const targetFromReference = COLOR_SPACES[targetColorSpace].fromReference;
      return targetFromReference(sourceToReference(color2));
    },
    fromWorkingColorSpace: function(color2, targetColorSpace) {
      return this.convert(color2, this._workingColorSpace, targetColorSpace);
    },
    toWorkingColorSpace: function(color2, sourceColorSpace) {
      return this.convert(color2, sourceColorSpace, this._workingColorSpace);
    },
    getPrimaries: function(colorSpace) {
      return COLOR_SPACES[colorSpace].primaries;
    },
    getTransfer: function(colorSpace) {
      if (colorSpace === NoColorSpace) return LinearTransfer;
      return COLOR_SPACES[colorSpace].transfer;
    },
    getLuminanceCoefficients: function(target, colorSpace = this._workingColorSpace) {
      return target.fromArray(COLOR_SPACES[colorSpace].luminanceCoefficients);
    }
  };
  function SRGBToLinear(c) {
    return c < 0.04045 ? c * 0.0773993808 : Math.pow(c * 0.9478672986 + 0.0521327014, 2.4);
  }
  function LinearToSRGB(c) {
    return c < 31308e-7 ? c * 12.92 : 1.055 * Math.pow(c, 0.41666) - 0.055;
  }
  let _canvas;
  class ImageUtils {
    static getDataURL(image) {
      if (/^data:/i.test(image.src)) {
        return image.src;
      }
      if (typeof HTMLCanvasElement === "undefined") {
        return image.src;
      }
      let canvas;
      if (image instanceof HTMLCanvasElement) {
        canvas = image;
      } else {
        if (_canvas === void 0) _canvas = createElementNS("canvas");
        _canvas.width = image.width;
        _canvas.height = image.height;
        const context2 = _canvas.getContext("2d");
        if (image instanceof ImageData) {
          context2.putImageData(image, 0, 0);
        } else {
          context2.drawImage(image, 0, 0, image.width, image.height);
        }
        canvas = _canvas;
      }
      if (canvas.width > 2048 || canvas.height > 2048) {
        console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", image);
        return canvas.toDataURL("image/jpeg", 0.6);
      } else {
        return canvas.toDataURL("image/png");
      }
    }
    static sRGBToLinear(image) {
      if (typeof HTMLImageElement !== "undefined" && image instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && image instanceof HTMLCanvasElement || typeof ImageBitmap !== "undefined" && image instanceof ImageBitmap) {
        const canvas = createElementNS("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        const context2 = canvas.getContext("2d");
        context2.drawImage(image, 0, 0, image.width, image.height);
        const imageData = context2.getImageData(0, 0, image.width, image.height);
        const data = imageData.data;
        for (let i = 0; i < data.length; i++) {
          data[i] = SRGBToLinear(data[i] / 255) * 255;
        }
        context2.putImageData(imageData, 0, 0);
        return canvas;
      } else if (image.data) {
        const data = image.data.slice(0);
        for (let i = 0; i < data.length; i++) {
          if (data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
            data[i] = Math.floor(SRGBToLinear(data[i] / 255) * 255);
          } else {
            data[i] = SRGBToLinear(data[i]);
          }
        }
        return {
          data,
          width: image.width,
          height: image.height
        };
      } else {
        console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.");
        return image;
      }
    }
  }
  let _sourceId = 0;
  class Source {
    constructor(data = null) {
      this.isSource = true;
      Object.defineProperty(this, "id", { value: _sourceId++ });
      this.uuid = generateUUID();
      this.data = data;
      this.dataReady = true;
      this.version = 0;
    }
    set needsUpdate(value) {
      if (value === true) this.version++;
    }
    toJSON(meta) {
      const isRootObject = meta === void 0 || typeof meta === "string";
      if (!isRootObject && meta.images[this.uuid] !== void 0) {
        return meta.images[this.uuid];
      }
      const output = {
        uuid: this.uuid,
        url: ""
      };
      const data = this.data;
      if (data !== null) {
        let url;
        if (Array.isArray(data)) {
          url = [];
          for (let i = 0, l = data.length; i < l; i++) {
            if (data[i].isDataTexture) {
              url.push(serializeImage(data[i].image));
            } else {
              url.push(serializeImage(data[i]));
            }
          }
        } else {
          url = serializeImage(data);
        }
        output.url = url;
      }
      if (!isRootObject) {
        meta.images[this.uuid] = output;
      }
      return output;
    }
  }
  function serializeImage(image) {
    if (typeof HTMLImageElement !== "undefined" && image instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && image instanceof HTMLCanvasElement || typeof ImageBitmap !== "undefined" && image instanceof ImageBitmap) {
      return ImageUtils.getDataURL(image);
    } else {
      if (image.data) {
        return {
          data: Array.from(image.data),
          width: image.width,
          height: image.height,
          type: image.data.constructor.name
        };
      } else {
        console.warn("THREE.Texture: Unable to serialize Texture.");
        return {};
      }
    }
  }
  let _textureId = 0;
  class Texture extends EventDispatcher {
    constructor(image = Texture.DEFAULT_IMAGE, mapping = Texture.DEFAULT_MAPPING, wrapS = ClampToEdgeWrapping, wrapT = ClampToEdgeWrapping, magFilter = LinearFilter, minFilter = LinearMipmapLinearFilter, format = RGBAFormat, type = UnsignedByteType, anisotropy = Texture.DEFAULT_ANISOTROPY, colorSpace = NoColorSpace) {
      super();
      this.isTexture = true;
      Object.defineProperty(this, "id", { value: _textureId++ });
      this.uuid = generateUUID();
      this.name = "";
      this.source = new Source(image);
      this.mipmaps = [];
      this.mapping = mapping;
      this.channel = 0;
      this.wrapS = wrapS;
      this.wrapT = wrapT;
      this.magFilter = magFilter;
      this.minFilter = minFilter;
      this.anisotropy = anisotropy;
      this.format = format;
      this.internalFormat = null;
      this.type = type;
      this.offset = new Vector2(0, 0);
      this.repeat = new Vector2(1, 1);
      this.center = new Vector2(0, 0);
      this.rotation = 0;
      this.matrixAutoUpdate = true;
      this.matrix = new Matrix3();
      this.generateMipmaps = true;
      this.premultiplyAlpha = false;
      this.flipY = true;
      this.unpackAlignment = 4;
      this.colorSpace = colorSpace;
      this.userData = {};
      this.version = 0;
      this.onUpdate = null;
      this.isRenderTargetTexture = false;
      this.pmremVersion = 0;
    }
    get image() {
      return this.source.data;
    }
    set image(value = null) {
      this.source.data = value;
    }
    updateMatrix() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(source) {
      this.name = source.name;
      this.source = source.source;
      this.mipmaps = source.mipmaps.slice(0);
      this.mapping = source.mapping;
      this.channel = source.channel;
      this.wrapS = source.wrapS;
      this.wrapT = source.wrapT;
      this.magFilter = source.magFilter;
      this.minFilter = source.minFilter;
      this.anisotropy = source.anisotropy;
      this.format = source.format;
      this.internalFormat = source.internalFormat;
      this.type = source.type;
      this.offset.copy(source.offset);
      this.repeat.copy(source.repeat);
      this.center.copy(source.center);
      this.rotation = source.rotation;
      this.matrixAutoUpdate = source.matrixAutoUpdate;
      this.matrix.copy(source.matrix);
      this.generateMipmaps = source.generateMipmaps;
      this.premultiplyAlpha = source.premultiplyAlpha;
      this.flipY = source.flipY;
      this.unpackAlignment = source.unpackAlignment;
      this.colorSpace = source.colorSpace;
      this.userData = JSON.parse(JSON.stringify(source.userData));
      this.needsUpdate = true;
      return this;
    }
    toJSON(meta) {
      const isRootObject = meta === void 0 || typeof meta === "string";
      if (!isRootObject && meta.textures[this.uuid] !== void 0) {
        return meta.textures[this.uuid];
      }
      const output = {
        metadata: {
          version: 4.6,
          type: "Texture",
          generator: "Texture.toJSON"
        },
        uuid: this.uuid,
        name: this.name,
        image: this.source.toJSON(meta).uuid,
        mapping: this.mapping,
        channel: this.channel,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        internalFormat: this.internalFormat,
        type: this.type,
        colorSpace: this.colorSpace,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        generateMipmaps: this.generateMipmaps,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment
      };
      if (Object.keys(this.userData).length > 0) output.userData = this.userData;
      if (!isRootObject) {
        meta.textures[this.uuid] = output;
      }
      return output;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    transformUv(uv2) {
      if (this.mapping !== UVMapping) return uv2;
      uv2.applyMatrix3(this.matrix);
      if (uv2.x < 0 || uv2.x > 1) {
        switch (this.wrapS) {
          case RepeatWrapping:
            uv2.x = uv2.x - Math.floor(uv2.x);
            break;
          case ClampToEdgeWrapping:
            uv2.x = uv2.x < 0 ? 0 : 1;
            break;
          case MirroredRepeatWrapping:
            if (Math.abs(Math.floor(uv2.x) % 2) === 1) {
              uv2.x = Math.ceil(uv2.x) - uv2.x;
            } else {
              uv2.x = uv2.x - Math.floor(uv2.x);
            }
            break;
        }
      }
      if (uv2.y < 0 || uv2.y > 1) {
        switch (this.wrapT) {
          case RepeatWrapping:
            uv2.y = uv2.y - Math.floor(uv2.y);
            break;
          case ClampToEdgeWrapping:
            uv2.y = uv2.y < 0 ? 0 : 1;
            break;
          case MirroredRepeatWrapping:
            if (Math.abs(Math.floor(uv2.y) % 2) === 1) {
              uv2.y = Math.ceil(uv2.y) - uv2.y;
            } else {
              uv2.y = uv2.y - Math.floor(uv2.y);
            }
            break;
        }
      }
      if (this.flipY) {
        uv2.y = 1 - uv2.y;
      }
      return uv2;
    }
    set needsUpdate(value) {
      if (value === true) {
        this.version++;
        this.source.needsUpdate = true;
      }
    }
    set needsPMREMUpdate(value) {
      if (value === true) {
        this.pmremVersion++;
      }
    }
  }
  Texture.DEFAULT_IMAGE = null;
  Texture.DEFAULT_MAPPING = UVMapping;
  Texture.DEFAULT_ANISOTROPY = 4;
  class Vector4 {
    constructor(x = 0, y = 0, z = 0, w = 1) {
      Vector4.prototype.isVector4 = true;
      this.x = x;
      this.y = y;
      this.z = z;
      this.w = w;
    }
    get width() {
      return this.z;
    }
    set width(value) {
      this.z = value;
    }
    get height() {
      return this.w;
    }
    set height(value) {
      this.w = value;
    }
    set(x, y, z, w) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.w = w;
      return this;
    }
    setScalar(scalar) {
      this.x = scalar;
      this.y = scalar;
      this.z = scalar;
      this.w = scalar;
      return this;
    }
    setX(x) {
      this.x = x;
      return this;
    }
    setY(y) {
      this.y = y;
      return this;
    }
    setZ(z) {
      this.z = z;
      return this;
    }
    setW(w) {
      this.w = w;
      return this;
    }
    setComponent(index, value) {
      switch (index) {
        case 0:
          this.x = value;
          break;
        case 1:
          this.y = value;
          break;
        case 2:
          this.z = value;
          break;
        case 3:
          this.w = value;
          break;
        default:
          throw new Error("index is out of range: " + index);
      }
      return this;
    }
    getComponent(index) {
      switch (index) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + index);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(v) {
      this.x = v.x;
      this.y = v.y;
      this.z = v.z;
      this.w = v.w !== void 0 ? v.w : 1;
      return this;
    }
    add(v) {
      this.x += v.x;
      this.y += v.y;
      this.z += v.z;
      this.w += v.w;
      return this;
    }
    addScalar(s) {
      this.x += s;
      this.y += s;
      this.z += s;
      this.w += s;
      return this;
    }
    addVectors(a, b) {
      this.x = a.x + b.x;
      this.y = a.y + b.y;
      this.z = a.z + b.z;
      this.w = a.w + b.w;
      return this;
    }
    addScaledVector(v, s) {
      this.x += v.x * s;
      this.y += v.y * s;
      this.z += v.z * s;
      this.w += v.w * s;
      return this;
    }
    sub(v) {
      this.x -= v.x;
      this.y -= v.y;
      this.z -= v.z;
      this.w -= v.w;
      return this;
    }
    subScalar(s) {
      this.x -= s;
      this.y -= s;
      this.z -= s;
      this.w -= s;
      return this;
    }
    subVectors(a, b) {
      this.x = a.x - b.x;
      this.y = a.y - b.y;
      this.z = a.z - b.z;
      this.w = a.w - b.w;
      return this;
    }
    multiply(v) {
      this.x *= v.x;
      this.y *= v.y;
      this.z *= v.z;
      this.w *= v.w;
      return this;
    }
    multiplyScalar(scalar) {
      this.x *= scalar;
      this.y *= scalar;
      this.z *= scalar;
      this.w *= scalar;
      return this;
    }
    applyMatrix4(m) {
      const x = this.x, y = this.y, z = this.z, w = this.w;
      const e = m.elements;
      this.x = e[0] * x + e[4] * y + e[8] * z + e[12] * w;
      this.y = e[1] * x + e[5] * y + e[9] * z + e[13] * w;
      this.z = e[2] * x + e[6] * y + e[10] * z + e[14] * w;
      this.w = e[3] * x + e[7] * y + e[11] * z + e[15] * w;
      return this;
    }
    divideScalar(scalar) {
      return this.multiplyScalar(1 / scalar);
    }
    setAxisAngleFromQuaternion(q) {
      this.w = 2 * Math.acos(q.w);
      const s = Math.sqrt(1 - q.w * q.w);
      if (s < 1e-4) {
        this.x = 1;
        this.y = 0;
        this.z = 0;
      } else {
        this.x = q.x / s;
        this.y = q.y / s;
        this.z = q.z / s;
      }
      return this;
    }
    setAxisAngleFromRotationMatrix(m) {
      let angle, x, y, z;
      const epsilon = 0.01, epsilon2 = 0.1, te = m.elements, m11 = te[0], m12 = te[4], m13 = te[8], m21 = te[1], m22 = te[5], m23 = te[9], m31 = te[2], m32 = te[6], m33 = te[10];
      if (Math.abs(m12 - m21) < epsilon && Math.abs(m13 - m31) < epsilon && Math.abs(m23 - m32) < epsilon) {
        if (Math.abs(m12 + m21) < epsilon2 && Math.abs(m13 + m31) < epsilon2 && Math.abs(m23 + m32) < epsilon2 && Math.abs(m11 + m22 + m33 - 3) < epsilon2) {
          this.set(1, 0, 0, 0);
          return this;
        }
        angle = Math.PI;
        const xx = (m11 + 1) / 2;
        const yy = (m22 + 1) / 2;
        const zz = (m33 + 1) / 2;
        const xy = (m12 + m21) / 4;
        const xz = (m13 + m31) / 4;
        const yz = (m23 + m32) / 4;
        if (xx > yy && xx > zz) {
          if (xx < epsilon) {
            x = 0;
            y = 0.707106781;
            z = 0.707106781;
          } else {
            x = Math.sqrt(xx);
            y = xy / x;
            z = xz / x;
          }
        } else if (yy > zz) {
          if (yy < epsilon) {
            x = 0.707106781;
            y = 0;
            z = 0.707106781;
          } else {
            y = Math.sqrt(yy);
            x = xy / y;
            z = yz / y;
          }
        } else {
          if (zz < epsilon) {
            x = 0.707106781;
            y = 0.707106781;
            z = 0;
          } else {
            z = Math.sqrt(zz);
            x = xz / z;
            y = yz / z;
          }
        }
        this.set(x, y, z, angle);
        return this;
      }
      let s = Math.sqrt((m32 - m23) * (m32 - m23) + (m13 - m31) * (m13 - m31) + (m21 - m12) * (m21 - m12));
      if (Math.abs(s) < 1e-3) s = 1;
      this.x = (m32 - m23) / s;
      this.y = (m13 - m31) / s;
      this.z = (m21 - m12) / s;
      this.w = Math.acos((m11 + m22 + m33 - 1) / 2);
      return this;
    }
    setFromMatrixPosition(m) {
      const e = m.elements;
      this.x = e[12];
      this.y = e[13];
      this.z = e[14];
      this.w = e[15];
      return this;
    }
    min(v) {
      this.x = Math.min(this.x, v.x);
      this.y = Math.min(this.y, v.y);
      this.z = Math.min(this.z, v.z);
      this.w = Math.min(this.w, v.w);
      return this;
    }
    max(v) {
      this.x = Math.max(this.x, v.x);
      this.y = Math.max(this.y, v.y);
      this.z = Math.max(this.z, v.z);
      this.w = Math.max(this.w, v.w);
      return this;
    }
    clamp(min, max) {
      this.x = Math.max(min.x, Math.min(max.x, this.x));
      this.y = Math.max(min.y, Math.min(max.y, this.y));
      this.z = Math.max(min.z, Math.min(max.z, this.z));
      this.w = Math.max(min.w, Math.min(max.w, this.w));
      return this;
    }
    clampScalar(minVal, maxVal) {
      this.x = Math.max(minVal, Math.min(maxVal, this.x));
      this.y = Math.max(minVal, Math.min(maxVal, this.y));
      this.z = Math.max(minVal, Math.min(maxVal, this.z));
      this.w = Math.max(minVal, Math.min(maxVal, this.w));
      return this;
    }
    clampLength(min, max) {
      const length2 = this.length();
      return this.divideScalar(length2 || 1).multiplyScalar(Math.max(min, Math.min(max, length2)));
    }
    floor() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      this.z = Math.floor(this.z);
      this.w = Math.floor(this.w);
      return this;
    }
    ceil() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      this.z = Math.ceil(this.z);
      this.w = Math.ceil(this.w);
      return this;
    }
    round() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      this.z = Math.round(this.z);
      this.w = Math.round(this.w);
      return this;
    }
    roundToZero() {
      this.x = Math.trunc(this.x);
      this.y = Math.trunc(this.y);
      this.z = Math.trunc(this.z);
      this.w = Math.trunc(this.w);
      return this;
    }
    negate() {
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      this.w = -this.w;
      return this;
    }
    dot(v) {
      return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(length2) {
      return this.normalize().multiplyScalar(length2);
    }
    lerp(v, alpha) {
      this.x += (v.x - this.x) * alpha;
      this.y += (v.y - this.y) * alpha;
      this.z += (v.z - this.z) * alpha;
      this.w += (v.w - this.w) * alpha;
      return this;
    }
    lerpVectors(v1, v2, alpha) {
      this.x = v1.x + (v2.x - v1.x) * alpha;
      this.y = v1.y + (v2.y - v1.y) * alpha;
      this.z = v1.z + (v2.z - v1.z) * alpha;
      this.w = v1.w + (v2.w - v1.w) * alpha;
      return this;
    }
    equals(v) {
      return v.x === this.x && v.y === this.y && v.z === this.z && v.w === this.w;
    }
    fromArray(array, offset = 0) {
      this.x = array[offset];
      this.y = array[offset + 1];
      this.z = array[offset + 2];
      this.w = array[offset + 3];
      return this;
    }
    toArray(array = [], offset = 0) {
      array[offset] = this.x;
      array[offset + 1] = this.y;
      array[offset + 2] = this.z;
      array[offset + 3] = this.w;
      return array;
    }
    fromBufferAttribute(attribute2, index) {
      this.x = attribute2.getX(index);
      this.y = attribute2.getY(index);
      this.z = attribute2.getZ(index);
      this.w = attribute2.getW(index);
      return this;
    }
    random() {
      this.x = Math.random();
      this.y = Math.random();
      this.z = Math.random();
      this.w = Math.random();
      return this;
    }
    *[Symbol.iterator]() {
      yield this.x;
      yield this.y;
      yield this.z;
      yield this.w;
    }
  }
  class RenderTarget extends EventDispatcher {
    constructor(width = 1, height = 1, options = {}) {
      super();
      this.isRenderTarget = true;
      this.width = width;
      this.height = height;
      this.depth = 1;
      this.scissor = new Vector4(0, 0, width, height);
      this.scissorTest = false;
      this.viewport = new Vector4(0, 0, width, height);
      const image = { width, height, depth: 1 };
      options = Object.assign({
        generateMipmaps: false,
        internalFormat: null,
        minFilter: LinearFilter,
        depthBuffer: true,
        stencilBuffer: false,
        resolveDepthBuffer: true,
        resolveStencilBuffer: true,
        depthTexture: null,
        samples: 0,
        count: 1
      }, options);
      const texture2 = new Texture(image, options.mapping, options.wrapS, options.wrapT, options.magFilter, options.minFilter, options.format, options.type, options.anisotropy, options.colorSpace);
      texture2.flipY = false;
      texture2.generateMipmaps = options.generateMipmaps;
      texture2.internalFormat = options.internalFormat;
      this.textures = [];
      const count = options.count;
      for (let i = 0; i < count; i++) {
        this.textures[i] = texture2.clone();
        this.textures[i].isRenderTargetTexture = true;
      }
      this.depthBuffer = options.depthBuffer;
      this.stencilBuffer = options.stencilBuffer;
      this.resolveDepthBuffer = options.resolveDepthBuffer;
      this.resolveStencilBuffer = options.resolveStencilBuffer;
      this.depthTexture = options.depthTexture;
      this.samples = options.samples;
    }
    get texture() {
      return this.textures[0];
    }
    set texture(value) {
      this.textures[0] = value;
    }
    setSize(width, height, depth2 = 1) {
      if (this.width !== width || this.height !== height || this.depth !== depth2) {
        this.width = width;
        this.height = height;
        this.depth = depth2;
        for (let i = 0, il = this.textures.length; i < il; i++) {
          this.textures[i].image.width = width;
          this.textures[i].image.height = height;
          this.textures[i].image.depth = depth2;
        }
        this.dispose();
      }
      this.viewport.set(0, 0, width, height);
      this.scissor.set(0, 0, width, height);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(source) {
      this.width = source.width;
      this.height = source.height;
      this.depth = source.depth;
      this.scissor.copy(source.scissor);
      this.scissorTest = source.scissorTest;
      this.viewport.copy(source.viewport);
      this.textures.length = 0;
      for (let i = 0, il = source.textures.length; i < il; i++) {
        this.textures[i] = source.textures[i].clone();
        this.textures[i].isRenderTargetTexture = true;
      }
      const image = Object.assign({}, source.texture.image);
      this.texture.source = new Source(image);
      this.depthBuffer = source.depthBuffer;
      this.stencilBuffer = source.stencilBuffer;
      this.resolveDepthBuffer = source.resolveDepthBuffer;
      this.resolveStencilBuffer = source.resolveStencilBuffer;
      if (source.depthTexture !== null) this.depthTexture = source.depthTexture.clone();
      this.samples = source.samples;
      return this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }
  class Quaternion {
    constructor(x = 0, y = 0, z = 0, w = 1) {
      this.isQuaternion = true;
      this._x = x;
      this._y = y;
      this._z = z;
      this._w = w;
    }
    static slerpFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t) {
      let x0 = src0[srcOffset0 + 0], y0 = src0[srcOffset0 + 1], z0 = src0[srcOffset0 + 2], w0 = src0[srcOffset0 + 3];
      const x1 = src1[srcOffset1 + 0], y1 = src1[srcOffset1 + 1], z1 = src1[srcOffset1 + 2], w1 = src1[srcOffset1 + 3];
      if (t === 0) {
        dst[dstOffset + 0] = x0;
        dst[dstOffset + 1] = y0;
        dst[dstOffset + 2] = z0;
        dst[dstOffset + 3] = w0;
        return;
      }
      if (t === 1) {
        dst[dstOffset + 0] = x1;
        dst[dstOffset + 1] = y1;
        dst[dstOffset + 2] = z1;
        dst[dstOffset + 3] = w1;
        return;
      }
      if (w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1) {
        let s = 1 - t;
        const cos2 = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1, dir = cos2 >= 0 ? 1 : -1, sqrSin = 1 - cos2 * cos2;
        if (sqrSin > Number.EPSILON) {
          const sin2 = Math.sqrt(sqrSin), len = Math.atan2(sin2, cos2 * dir);
          s = Math.sin(s * len) / sin2;
          t = Math.sin(t * len) / sin2;
        }
        const tDir = t * dir;
        x0 = x0 * s + x1 * tDir;
        y0 = y0 * s + y1 * tDir;
        z0 = z0 * s + z1 * tDir;
        w0 = w0 * s + w1 * tDir;
        if (s === 1 - t) {
          const f = 1 / Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0);
          x0 *= f;
          y0 *= f;
          z0 *= f;
          w0 *= f;
        }
      }
      dst[dstOffset] = x0;
      dst[dstOffset + 1] = y0;
      dst[dstOffset + 2] = z0;
      dst[dstOffset + 3] = w0;
    }
    static multiplyQuaternionsFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1) {
      const x0 = src0[srcOffset0];
      const y0 = src0[srcOffset0 + 1];
      const z0 = src0[srcOffset0 + 2];
      const w0 = src0[srcOffset0 + 3];
      const x1 = src1[srcOffset1];
      const y1 = src1[srcOffset1 + 1];
      const z1 = src1[srcOffset1 + 2];
      const w1 = src1[srcOffset1 + 3];
      dst[dstOffset] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
      dst[dstOffset + 1] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
      dst[dstOffset + 2] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
      dst[dstOffset + 3] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;
      return dst;
    }
    get x() {
      return this._x;
    }
    set x(value) {
      this._x = value;
      this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(value) {
      this._y = value;
      this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(value) {
      this._z = value;
      this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(value) {
      this._w = value;
      this._onChangeCallback();
    }
    set(x, y, z, w) {
      this._x = x;
      this._y = y;
      this._z = z;
      this._w = w;
      this._onChangeCallback();
      return this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(quaternion) {
      this._x = quaternion.x;
      this._y = quaternion.y;
      this._z = quaternion.z;
      this._w = quaternion.w;
      this._onChangeCallback();
      return this;
    }
    setFromEuler(euler, update = true) {
      const x = euler._x, y = euler._y, z = euler._z, order = euler._order;
      const cos2 = Math.cos;
      const sin2 = Math.sin;
      const c1 = cos2(x / 2);
      const c2 = cos2(y / 2);
      const c3 = cos2(z / 2);
      const s1 = sin2(x / 2);
      const s2 = sin2(y / 2);
      const s3 = sin2(z / 2);
      switch (order) {
        case "XYZ":
          this._x = s1 * c2 * c3 + c1 * s2 * s3;
          this._y = c1 * s2 * c3 - s1 * c2 * s3;
          this._z = c1 * c2 * s3 + s1 * s2 * c3;
          this._w = c1 * c2 * c3 - s1 * s2 * s3;
          break;
        case "YXZ":
          this._x = s1 * c2 * c3 + c1 * s2 * s3;
          this._y = c1 * s2 * c3 - s1 * c2 * s3;
          this._z = c1 * c2 * s3 - s1 * s2 * c3;
          this._w = c1 * c2 * c3 + s1 * s2 * s3;
          break;
        case "ZXY":
          this._x = s1 * c2 * c3 - c1 * s2 * s3;
          this._y = c1 * s2 * c3 + s1 * c2 * s3;
          this._z = c1 * c2 * s3 + s1 * s2 * c3;
          this._w = c1 * c2 * c3 - s1 * s2 * s3;
          break;
        case "ZYX":
          this._x = s1 * c2 * c3 - c1 * s2 * s3;
          this._y = c1 * s2 * c3 + s1 * c2 * s3;
          this._z = c1 * c2 * s3 - s1 * s2 * c3;
          this._w = c1 * c2 * c3 + s1 * s2 * s3;
          break;
        case "YZX":
          this._x = s1 * c2 * c3 + c1 * s2 * s3;
          this._y = c1 * s2 * c3 + s1 * c2 * s3;
          this._z = c1 * c2 * s3 - s1 * s2 * c3;
          this._w = c1 * c2 * c3 - s1 * s2 * s3;
          break;
        case "XZY":
          this._x = s1 * c2 * c3 - c1 * s2 * s3;
          this._y = c1 * s2 * c3 - s1 * c2 * s3;
          this._z = c1 * c2 * s3 + s1 * s2 * c3;
          this._w = c1 * c2 * c3 + s1 * s2 * s3;
          break;
        default:
          console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + order);
      }
      if (update === true) this._onChangeCallback();
      return this;
    }
    setFromAxisAngle(axis, angle) {
      const halfAngle = angle / 2, s = Math.sin(halfAngle);
      this._x = axis.x * s;
      this._y = axis.y * s;
      this._z = axis.z * s;
      this._w = Math.cos(halfAngle);
      this._onChangeCallback();
      return this;
    }
    setFromRotationMatrix(m) {
      const te = m.elements, m11 = te[0], m12 = te[4], m13 = te[8], m21 = te[1], m22 = te[5], m23 = te[9], m31 = te[2], m32 = te[6], m33 = te[10], trace = m11 + m22 + m33;
      if (trace > 0) {
        const s = 0.5 / Math.sqrt(trace + 1);
        this._w = 0.25 / s;
        this._x = (m32 - m23) * s;
        this._y = (m13 - m31) * s;
        this._z = (m21 - m12) * s;
      } else if (m11 > m22 && m11 > m33) {
        const s = 2 * Math.sqrt(1 + m11 - m22 - m33);
        this._w = (m32 - m23) / s;
        this._x = 0.25 * s;
        this._y = (m12 + m21) / s;
        this._z = (m13 + m31) / s;
      } else if (m22 > m33) {
        const s = 2 * Math.sqrt(1 + m22 - m11 - m33);
        this._w = (m13 - m31) / s;
        this._x = (m12 + m21) / s;
        this._y = 0.25 * s;
        this._z = (m23 + m32) / s;
      } else {
        const s = 2 * Math.sqrt(1 + m33 - m11 - m22);
        this._w = (m21 - m12) / s;
        this._x = (m13 + m31) / s;
        this._y = (m23 + m32) / s;
        this._z = 0.25 * s;
      }
      this._onChangeCallback();
      return this;
    }
    setFromUnitVectors(vFrom, vTo) {
      let r = vFrom.dot(vTo) + 1;
      if (r < Number.EPSILON) {
        r = 0;
        if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
          this._x = -vFrom.y;
          this._y = vFrom.x;
          this._z = 0;
          this._w = r;
        } else {
          this._x = 0;
          this._y = -vFrom.z;
          this._z = vFrom.y;
          this._w = r;
        }
      } else {
        this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
        this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
        this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
        this._w = r;
      }
      return this.normalize();
    }
    angleTo(q) {
      return 2 * Math.acos(Math.abs(clamp$1(this.dot(q), -1, 1)));
    }
    rotateTowards(q, step2) {
      const angle = this.angleTo(q);
      if (angle === 0) return this;
      const t = Math.min(1, step2 / angle);
      this.slerp(q, t);
      return this;
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      this._x *= -1;
      this._y *= -1;
      this._z *= -1;
      this._onChangeCallback();
      return this;
    }
    dot(v) {
      return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;
    }
    lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    normalize() {
      let l = this.length();
      if (l === 0) {
        this._x = 0;
        this._y = 0;
        this._z = 0;
        this._w = 1;
      } else {
        l = 1 / l;
        this._x = this._x * l;
        this._y = this._y * l;
        this._z = this._z * l;
        this._w = this._w * l;
      }
      this._onChangeCallback();
      return this;
    }
    multiply(q) {
      return this.multiplyQuaternions(this, q);
    }
    premultiply(q) {
      return this.multiplyQuaternions(q, this);
    }
    multiplyQuaternions(a, b) {
      const qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
      const qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;
      this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
      this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
      this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
      this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
      this._onChangeCallback();
      return this;
    }
    slerp(qb, t) {
      if (t === 0) return this;
      if (t === 1) return this.copy(qb);
      const x = this._x, y = this._y, z = this._z, w = this._w;
      let cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;
      if (cosHalfTheta < 0) {
        this._w = -qb._w;
        this._x = -qb._x;
        this._y = -qb._y;
        this._z = -qb._z;
        cosHalfTheta = -cosHalfTheta;
      } else {
        this.copy(qb);
      }
      if (cosHalfTheta >= 1) {
        this._w = w;
        this._x = x;
        this._y = y;
        this._z = z;
        return this;
      }
      const sqrSinHalfTheta = 1 - cosHalfTheta * cosHalfTheta;
      if (sqrSinHalfTheta <= Number.EPSILON) {
        const s = 1 - t;
        this._w = s * w + t * this._w;
        this._x = s * x + t * this._x;
        this._y = s * y + t * this._y;
        this._z = s * z + t * this._z;
        this.normalize();
        return this;
      }
      const sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
      const halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
      const ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta, ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
      this._w = w * ratioA + this._w * ratioB;
      this._x = x * ratioA + this._x * ratioB;
      this._y = y * ratioA + this._y * ratioB;
      this._z = z * ratioA + this._z * ratioB;
      this._onChangeCallback();
      return this;
    }
    slerpQuaternions(qa, qb, t) {
      return this.copy(qa).slerp(qb, t);
    }
    random() {
      const theta1 = 2 * Math.PI * Math.random();
      const theta2 = 2 * Math.PI * Math.random();
      const x0 = Math.random();
      const r1 = Math.sqrt(1 - x0);
      const r2 = Math.sqrt(x0);
      return this.set(
        r1 * Math.sin(theta1),
        r1 * Math.cos(theta1),
        r2 * Math.sin(theta2),
        r2 * Math.cos(theta2)
      );
    }
    equals(quaternion) {
      return quaternion._x === this._x && quaternion._y === this._y && quaternion._z === this._z && quaternion._w === this._w;
    }
    fromArray(array, offset = 0) {
      this._x = array[offset];
      this._y = array[offset + 1];
      this._z = array[offset + 2];
      this._w = array[offset + 3];
      this._onChangeCallback();
      return this;
    }
    toArray(array = [], offset = 0) {
      array[offset] = this._x;
      array[offset + 1] = this._y;
      array[offset + 2] = this._z;
      array[offset + 3] = this._w;
      return array;
    }
    fromBufferAttribute(attribute2, index) {
      this._x = attribute2.getX(index);
      this._y = attribute2.getY(index);
      this._z = attribute2.getZ(index);
      this._w = attribute2.getW(index);
      this._onChangeCallback();
      return this;
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(callback) {
      this._onChangeCallback = callback;
      return this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x;
      yield this._y;
      yield this._z;
      yield this._w;
    }
  }
  class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
      Vector3.prototype.isVector3 = true;
      this.x = x;
      this.y = y;
      this.z = z;
    }
    set(x, y, z) {
      if (z === void 0) z = this.z;
      this.x = x;
      this.y = y;
      this.z = z;
      return this;
    }
    setScalar(scalar) {
      this.x = scalar;
      this.y = scalar;
      this.z = scalar;
      return this;
    }
    setX(x) {
      this.x = x;
      return this;
    }
    setY(y) {
      this.y = y;
      return this;
    }
    setZ(z) {
      this.z = z;
      return this;
    }
    setComponent(index, value) {
      switch (index) {
        case 0:
          this.x = value;
          break;
        case 1:
          this.y = value;
          break;
        case 2:
          this.z = value;
          break;
        default:
          throw new Error("index is out of range: " + index);
      }
      return this;
    }
    getComponent(index) {
      switch (index) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + index);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(v) {
      this.x = v.x;
      this.y = v.y;
      this.z = v.z;
      return this;
    }
    add(v) {
      this.x += v.x;
      this.y += v.y;
      this.z += v.z;
      return this;
    }
    addScalar(s) {
      this.x += s;
      this.y += s;
      this.z += s;
      return this;
    }
    addVectors(a, b) {
      this.x = a.x + b.x;
      this.y = a.y + b.y;
      this.z = a.z + b.z;
      return this;
    }
    addScaledVector(v, s) {
      this.x += v.x * s;
      this.y += v.y * s;
      this.z += v.z * s;
      return this;
    }
    sub(v) {
      this.x -= v.x;
      this.y -= v.y;
      this.z -= v.z;
      return this;
    }
    subScalar(s) {
      this.x -= s;
      this.y -= s;
      this.z -= s;
      return this;
    }
    subVectors(a, b) {
      this.x = a.x - b.x;
      this.y = a.y - b.y;
      this.z = a.z - b.z;
      return this;
    }
    multiply(v) {
      this.x *= v.x;
      this.y *= v.y;
      this.z *= v.z;
      return this;
    }
    multiplyScalar(scalar) {
      this.x *= scalar;
      this.y *= scalar;
      this.z *= scalar;
      return this;
    }
    multiplyVectors(a, b) {
      this.x = a.x * b.x;
      this.y = a.y * b.y;
      this.z = a.z * b.z;
      return this;
    }
    applyEuler(euler) {
      return this.applyQuaternion(_quaternion$4.setFromEuler(euler));
    }
    applyAxisAngle(axis, angle) {
      return this.applyQuaternion(_quaternion$4.setFromAxisAngle(axis, angle));
    }
    applyMatrix3(m) {
      const x = this.x, y = this.y, z = this.z;
      const e = m.elements;
      this.x = e[0] * x + e[3] * y + e[6] * z;
      this.y = e[1] * x + e[4] * y + e[7] * z;
      this.z = e[2] * x + e[5] * y + e[8] * z;
      return this;
    }
    applyNormalMatrix(m) {
      return this.applyMatrix3(m).normalize();
    }
    applyMatrix4(m) {
      const x = this.x, y = this.y, z = this.z;
      const e = m.elements;
      const w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);
      this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
      this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
      this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;
      return this;
    }
    applyQuaternion(q) {
      const vx = this.x, vy = this.y, vz = this.z;
      const qx = q.x, qy = q.y, qz = q.z, qw = q.w;
      const tx = 2 * (qy * vz - qz * vy);
      const ty = 2 * (qz * vx - qx * vz);
      const tz = 2 * (qx * vy - qy * vx);
      this.x = vx + qw * tx + qy * tz - qz * ty;
      this.y = vy + qw * ty + qz * tx - qx * tz;
      this.z = vz + qw * tz + qx * ty - qy * tx;
      return this;
    }
    project(camera) {
      return this.applyMatrix4(camera.matrixWorldInverse).applyMatrix4(camera.projectionMatrix);
    }
    unproject(camera) {
      return this.applyMatrix4(camera.projectionMatrixInverse).applyMatrix4(camera.matrixWorld);
    }
    transformDirection(m) {
      const x = this.x, y = this.y, z = this.z;
      const e = m.elements;
      this.x = e[0] * x + e[4] * y + e[8] * z;
      this.y = e[1] * x + e[5] * y + e[9] * z;
      this.z = e[2] * x + e[6] * y + e[10] * z;
      return this.normalize();
    }
    divide(v) {
      this.x /= v.x;
      this.y /= v.y;
      this.z /= v.z;
      return this;
    }
    divideScalar(scalar) {
      return this.multiplyScalar(1 / scalar);
    }
    min(v) {
      this.x = Math.min(this.x, v.x);
      this.y = Math.min(this.y, v.y);
      this.z = Math.min(this.z, v.z);
      return this;
    }
    max(v) {
      this.x = Math.max(this.x, v.x);
      this.y = Math.max(this.y, v.y);
      this.z = Math.max(this.z, v.z);
      return this;
    }
    clamp(min, max) {
      this.x = Math.max(min.x, Math.min(max.x, this.x));
      this.y = Math.max(min.y, Math.min(max.y, this.y));
      this.z = Math.max(min.z, Math.min(max.z, this.z));
      return this;
    }
    clampScalar(minVal, maxVal) {
      this.x = Math.max(minVal, Math.min(maxVal, this.x));
      this.y = Math.max(minVal, Math.min(maxVal, this.y));
      this.z = Math.max(minVal, Math.min(maxVal, this.z));
      return this;
    }
    clampLength(min, max) {
      const length2 = this.length();
      return this.divideScalar(length2 || 1).multiplyScalar(Math.max(min, Math.min(max, length2)));
    }
    floor() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      this.z = Math.floor(this.z);
      return this;
    }
    ceil() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      this.z = Math.ceil(this.z);
      return this;
    }
    round() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      this.z = Math.round(this.z);
      return this;
    }
    roundToZero() {
      this.x = Math.trunc(this.x);
      this.y = Math.trunc(this.y);
      this.z = Math.trunc(this.z);
      return this;
    }
    negate() {
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      return this;
    }
    dot(v) {
      return this.x * v.x + this.y * v.y + this.z * v.z;
    }
    // TODO lengthSquared?
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(length2) {
      return this.normalize().multiplyScalar(length2);
    }
    lerp(v, alpha) {
      this.x += (v.x - this.x) * alpha;
      this.y += (v.y - this.y) * alpha;
      this.z += (v.z - this.z) * alpha;
      return this;
    }
    lerpVectors(v1, v2, alpha) {
      this.x = v1.x + (v2.x - v1.x) * alpha;
      this.y = v1.y + (v2.y - v1.y) * alpha;
      this.z = v1.z + (v2.z - v1.z) * alpha;
      return this;
    }
    cross(v) {
      return this.crossVectors(this, v);
    }
    crossVectors(a, b) {
      const ax = a.x, ay = a.y, az = a.z;
      const bx = b.x, by = b.y, bz = b.z;
      this.x = ay * bz - az * by;
      this.y = az * bx - ax * bz;
      this.z = ax * by - ay * bx;
      return this;
    }
    projectOnVector(v) {
      const denominator = v.lengthSq();
      if (denominator === 0) return this.set(0, 0, 0);
      const scalar = v.dot(this) / denominator;
      return this.copy(v).multiplyScalar(scalar);
    }
    projectOnPlane(planeNormal) {
      _vector$c.copy(this).projectOnVector(planeNormal);
      return this.sub(_vector$c);
    }
    reflect(normal) {
      return this.sub(_vector$c.copy(normal).multiplyScalar(2 * this.dot(normal)));
    }
    angleTo(v) {
      const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
      if (denominator === 0) return Math.PI / 2;
      const theta = this.dot(v) / denominator;
      return Math.acos(clamp$1(theta, -1, 1));
    }
    distanceTo(v) {
      return Math.sqrt(this.distanceToSquared(v));
    }
    distanceToSquared(v) {
      const dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;
      return dx * dx + dy * dy + dz * dz;
    }
    manhattanDistanceTo(v) {
      return Math.abs(this.x - v.x) + Math.abs(this.y - v.y) + Math.abs(this.z - v.z);
    }
    setFromSpherical(s) {
      return this.setFromSphericalCoords(s.radius, s.phi, s.theta);
    }
    setFromSphericalCoords(radius, phi, theta) {
      const sinPhiRadius = Math.sin(phi) * radius;
      this.x = sinPhiRadius * Math.sin(theta);
      this.y = Math.cos(phi) * radius;
      this.z = sinPhiRadius * Math.cos(theta);
      return this;
    }
    setFromCylindrical(c) {
      return this.setFromCylindricalCoords(c.radius, c.theta, c.y);
    }
    setFromCylindricalCoords(radius, theta, y) {
      this.x = radius * Math.sin(theta);
      this.y = y;
      this.z = radius * Math.cos(theta);
      return this;
    }
    setFromMatrixPosition(m) {
      const e = m.elements;
      this.x = e[12];
      this.y = e[13];
      this.z = e[14];
      return this;
    }
    setFromMatrixScale(m) {
      const sx = this.setFromMatrixColumn(m, 0).length();
      const sy = this.setFromMatrixColumn(m, 1).length();
      const sz = this.setFromMatrixColumn(m, 2).length();
      this.x = sx;
      this.y = sy;
      this.z = sz;
      return this;
    }
    setFromMatrixColumn(m, index) {
      return this.fromArray(m.elements, index * 4);
    }
    setFromMatrix3Column(m, index) {
      return this.fromArray(m.elements, index * 3);
    }
    setFromEuler(e) {
      this.x = e._x;
      this.y = e._y;
      this.z = e._z;
      return this;
    }
    setFromColor(c) {
      this.x = c.r;
      this.y = c.g;
      this.z = c.b;
      return this;
    }
    equals(v) {
      return v.x === this.x && v.y === this.y && v.z === this.z;
    }
    fromArray(array, offset = 0) {
      this.x = array[offset];
      this.y = array[offset + 1];
      this.z = array[offset + 2];
      return this;
    }
    toArray(array = [], offset = 0) {
      array[offset] = this.x;
      array[offset + 1] = this.y;
      array[offset + 2] = this.z;
      return array;
    }
    fromBufferAttribute(attribute2, index) {
      this.x = attribute2.getX(index);
      this.y = attribute2.getY(index);
      this.z = attribute2.getZ(index);
      return this;
    }
    random() {
      this.x = Math.random();
      this.y = Math.random();
      this.z = Math.random();
      return this;
    }
    randomDirection() {
      const theta = Math.random() * Math.PI * 2;
      const u = Math.random() * 2 - 1;
      const c = Math.sqrt(1 - u * u);
      this.x = c * Math.cos(theta);
      this.y = u;
      this.z = c * Math.sin(theta);
      return this;
    }
    *[Symbol.iterator]() {
      yield this.x;
      yield this.y;
      yield this.z;
    }
  }
  const _vector$c = /* @__PURE__ */ new Vector3();
  const _quaternion$4 = /* @__PURE__ */ new Quaternion();
  class Box3 {
    constructor(min = new Vector3(Infinity, Infinity, Infinity), max = new Vector3(-Infinity, -Infinity, -Infinity)) {
      this.isBox3 = true;
      this.min = min;
      this.max = max;
    }
    set(min, max) {
      this.min.copy(min);
      this.max.copy(max);
      return this;
    }
    setFromArray(array) {
      this.makeEmpty();
      for (let i = 0, il = array.length; i < il; i += 3) {
        this.expandByPoint(_vector$b.fromArray(array, i));
      }
      return this;
    }
    setFromBufferAttribute(attribute2) {
      this.makeEmpty();
      for (let i = 0, il = attribute2.count; i < il; i++) {
        this.expandByPoint(_vector$b.fromBufferAttribute(attribute2, i));
      }
      return this;
    }
    setFromPoints(points) {
      this.makeEmpty();
      for (let i = 0, il = points.length; i < il; i++) {
        this.expandByPoint(points[i]);
      }
      return this;
    }
    setFromCenterAndSize(center, size) {
      const halfSize = _vector$b.copy(size).multiplyScalar(0.5);
      this.min.copy(center).sub(halfSize);
      this.max.copy(center).add(halfSize);
      return this;
    }
    setFromObject(object, precise = false) {
      this.makeEmpty();
      return this.expandByObject(object, precise);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(box) {
      this.min.copy(box.min);
      this.max.copy(box.max);
      return this;
    }
    makeEmpty() {
      this.min.x = this.min.y = this.min.z = Infinity;
      this.max.x = this.max.y = this.max.z = -Infinity;
      return this;
    }
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    getCenter(target) {
      return this.isEmpty() ? target.set(0, 0, 0) : target.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(target) {
      return this.isEmpty() ? target.set(0, 0, 0) : target.subVectors(this.max, this.min);
    }
    expandByPoint(point) {
      this.min.min(point);
      this.max.max(point);
      return this;
    }
    expandByVector(vector) {
      this.min.sub(vector);
      this.max.add(vector);
      return this;
    }
    expandByScalar(scalar) {
      this.min.addScalar(-scalar);
      this.max.addScalar(scalar);
      return this;
    }
    expandByObject(object, precise = false) {
      object.updateWorldMatrix(false, false);
      const geometry = object.geometry;
      if (geometry !== void 0) {
        const positionAttribute = geometry.getAttribute("position");
        if (precise === true && positionAttribute !== void 0 && object.isInstancedMesh !== true) {
          for (let i = 0, l = positionAttribute.count; i < l; i++) {
            if (object.isMesh === true) {
              object.getVertexPosition(i, _vector$b);
            } else {
              _vector$b.fromBufferAttribute(positionAttribute, i);
            }
            _vector$b.applyMatrix4(object.matrixWorld);
            this.expandByPoint(_vector$b);
          }
        } else {
          if (object.boundingBox !== void 0) {
            if (object.boundingBox === null) {
              object.computeBoundingBox();
            }
            _box$4.copy(object.boundingBox);
          } else {
            if (geometry.boundingBox === null) {
              geometry.computeBoundingBox();
            }
            _box$4.copy(geometry.boundingBox);
          }
          _box$4.applyMatrix4(object.matrixWorld);
          this.union(_box$4);
        }
      }
      const children = object.children;
      for (let i = 0, l = children.length; i < l; i++) {
        this.expandByObject(children[i], precise);
      }
      return this;
    }
    containsPoint(point) {
      return point.x >= this.min.x && point.x <= this.max.x && point.y >= this.min.y && point.y <= this.max.y && point.z >= this.min.z && point.z <= this.max.z;
    }
    containsBox(box) {
      return this.min.x <= box.min.x && box.max.x <= this.max.x && this.min.y <= box.min.y && box.max.y <= this.max.y && this.min.z <= box.min.z && box.max.z <= this.max.z;
    }
    getParameter(point, target) {
      return target.set(
        (point.x - this.min.x) / (this.max.x - this.min.x),
        (point.y - this.min.y) / (this.max.y - this.min.y),
        (point.z - this.min.z) / (this.max.z - this.min.z)
      );
    }
    intersectsBox(box) {
      return box.max.x >= this.min.x && box.min.x <= this.max.x && box.max.y >= this.min.y && box.min.y <= this.max.y && box.max.z >= this.min.z && box.min.z <= this.max.z;
    }
    intersectsSphere(sphere) {
      this.clampPoint(sphere.center, _vector$b);
      return _vector$b.distanceToSquared(sphere.center) <= sphere.radius * sphere.radius;
    }
    intersectsPlane(plane) {
      let min, max;
      if (plane.normal.x > 0) {
        min = plane.normal.x * this.min.x;
        max = plane.normal.x * this.max.x;
      } else {
        min = plane.normal.x * this.max.x;
        max = plane.normal.x * this.min.x;
      }
      if (plane.normal.y > 0) {
        min += plane.normal.y * this.min.y;
        max += plane.normal.y * this.max.y;
      } else {
        min += plane.normal.y * this.max.y;
        max += plane.normal.y * this.min.y;
      }
      if (plane.normal.z > 0) {
        min += plane.normal.z * this.min.z;
        max += plane.normal.z * this.max.z;
      } else {
        min += plane.normal.z * this.max.z;
        max += plane.normal.z * this.min.z;
      }
      return min <= -plane.constant && max >= -plane.constant;
    }
    intersectsTriangle(triangle3) {
      if (this.isEmpty()) {
        return false;
      }
      this.getCenter(_center);
      _extents.subVectors(this.max, _center);
      _v0$3.subVectors(triangle3.a, _center);
      _v1$7.subVectors(triangle3.b, _center);
      _v2$4.subVectors(triangle3.c, _center);
      _f0.subVectors(_v1$7, _v0$3);
      _f1.subVectors(_v2$4, _v1$7);
      _f2.subVectors(_v0$3, _v2$4);
      let axes = [
        0,
        -_f0.z,
        _f0.y,
        0,
        -_f1.z,
        _f1.y,
        0,
        -_f2.z,
        _f2.y,
        _f0.z,
        0,
        -_f0.x,
        _f1.z,
        0,
        -_f1.x,
        _f2.z,
        0,
        -_f2.x,
        -_f0.y,
        _f0.x,
        0,
        -_f1.y,
        _f1.x,
        0,
        -_f2.y,
        _f2.x,
        0
      ];
      if (!satForAxes(axes, _v0$3, _v1$7, _v2$4, _extents)) {
        return false;
      }
      axes = [1, 0, 0, 0, 1, 0, 0, 0, 1];
      if (!satForAxes(axes, _v0$3, _v1$7, _v2$4, _extents)) {
        return false;
      }
      _triangleNormal.crossVectors(_f0, _f1);
      axes = [_triangleNormal.x, _triangleNormal.y, _triangleNormal.z];
      return satForAxes(axes, _v0$3, _v1$7, _v2$4, _extents);
    }
    clampPoint(point, target) {
      return target.copy(point).clamp(this.min, this.max);
    }
    distanceToPoint(point) {
      return this.clampPoint(point, _vector$b).distanceTo(point);
    }
    getBoundingSphere(target) {
      if (this.isEmpty()) {
        target.makeEmpty();
      } else {
        this.getCenter(target.center);
        target.radius = this.getSize(_vector$b).length() * 0.5;
      }
      return target;
    }
    intersect(box) {
      this.min.max(box.min);
      this.max.min(box.max);
      if (this.isEmpty()) this.makeEmpty();
      return this;
    }
    union(box) {
      this.min.min(box.min);
      this.max.max(box.max);
      return this;
    }
    applyMatrix4(matrix) {
      if (this.isEmpty()) return this;
      _points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(matrix);
      _points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(matrix);
      _points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(matrix);
      _points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(matrix);
      _points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(matrix);
      _points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(matrix);
      _points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(matrix);
      _points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(matrix);
      this.setFromPoints(_points);
      return this;
    }
    translate(offset) {
      this.min.add(offset);
      this.max.add(offset);
      return this;
    }
    equals(box) {
      return box.min.equals(this.min) && box.max.equals(this.max);
    }
  }
  const _points = [
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3()
  ];
  const _vector$b = /* @__PURE__ */ new Vector3();
  const _box$4 = /* @__PURE__ */ new Box3();
  const _v0$3 = /* @__PURE__ */ new Vector3();
  const _v1$7 = /* @__PURE__ */ new Vector3();
  const _v2$4 = /* @__PURE__ */ new Vector3();
  const _f0 = /* @__PURE__ */ new Vector3();
  const _f1 = /* @__PURE__ */ new Vector3();
  const _f2 = /* @__PURE__ */ new Vector3();
  const _center = /* @__PURE__ */ new Vector3();
  const _extents = /* @__PURE__ */ new Vector3();
  const _triangleNormal = /* @__PURE__ */ new Vector3();
  const _testAxis = /* @__PURE__ */ new Vector3();
  function satForAxes(axes, v0, v1, v2, extents) {
    for (let i = 0, j = axes.length - 3; i <= j; i += 3) {
      _testAxis.fromArray(axes, i);
      const r = extents.x * Math.abs(_testAxis.x) + extents.y * Math.abs(_testAxis.y) + extents.z * Math.abs(_testAxis.z);
      const p0 = v0.dot(_testAxis);
      const p1 = v1.dot(_testAxis);
      const p2 = v2.dot(_testAxis);
      if (Math.max(-Math.max(p0, p1, p2), Math.min(p0, p1, p2)) > r) {
        return false;
      }
    }
    return true;
  }
  const _box$3 = /* @__PURE__ */ new Box3();
  const _v1$6 = /* @__PURE__ */ new Vector3();
  const _v2$3 = /* @__PURE__ */ new Vector3();
  class Sphere {
    constructor(center = new Vector3(), radius = -1) {
      this.isSphere = true;
      this.center = center;
      this.radius = radius;
    }
    set(center, radius) {
      this.center.copy(center);
      this.radius = radius;
      return this;
    }
    setFromPoints(points, optionalCenter) {
      const center = this.center;
      if (optionalCenter !== void 0) {
        center.copy(optionalCenter);
      } else {
        _box$3.setFromPoints(points).getCenter(center);
      }
      let maxRadiusSq = 0;
      for (let i = 0, il = points.length; i < il; i++) {
        maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(points[i]));
      }
      this.radius = Math.sqrt(maxRadiusSq);
      return this;
    }
    copy(sphere) {
      this.center.copy(sphere.center);
      this.radius = sphere.radius;
      return this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      this.center.set(0, 0, 0);
      this.radius = -1;
      return this;
    }
    containsPoint(point) {
      return point.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(point) {
      return point.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(sphere) {
      const radiusSum = this.radius + sphere.radius;
      return sphere.center.distanceToSquared(this.center) <= radiusSum * radiusSum;
    }
    intersectsBox(box) {
      return box.intersectsSphere(this);
    }
    intersectsPlane(plane) {
      return Math.abs(plane.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(point, target) {
      const deltaLengthSq = this.center.distanceToSquared(point);
      target.copy(point);
      if (deltaLengthSq > this.radius * this.radius) {
        target.sub(this.center).normalize();
        target.multiplyScalar(this.radius).add(this.center);
      }
      return target;
    }
    getBoundingBox(target) {
      if (this.isEmpty()) {
        target.makeEmpty();
        return target;
      }
      target.set(this.center, this.center);
      target.expandByScalar(this.radius);
      return target;
    }
    applyMatrix4(matrix) {
      this.center.applyMatrix4(matrix);
      this.radius = this.radius * matrix.getMaxScaleOnAxis();
      return this;
    }
    translate(offset) {
      this.center.add(offset);
      return this;
    }
    expandByPoint(point) {
      if (this.isEmpty()) {
        this.center.copy(point);
        this.radius = 0;
        return this;
      }
      _v1$6.subVectors(point, this.center);
      const lengthSq2 = _v1$6.lengthSq();
      if (lengthSq2 > this.radius * this.radius) {
        const length2 = Math.sqrt(lengthSq2);
        const delta = (length2 - this.radius) * 0.5;
        this.center.addScaledVector(_v1$6, delta / length2);
        this.radius += delta;
      }
      return this;
    }
    union(sphere) {
      if (sphere.isEmpty()) {
        return this;
      }
      if (this.isEmpty()) {
        this.copy(sphere);
        return this;
      }
      if (this.center.equals(sphere.center) === true) {
        this.radius = Math.max(this.radius, sphere.radius);
      } else {
        _v2$3.subVectors(sphere.center, this.center).setLength(sphere.radius);
        this.expandByPoint(_v1$6.copy(sphere.center).add(_v2$3));
        this.expandByPoint(_v1$6.copy(sphere.center).sub(_v2$3));
      }
      return this;
    }
    equals(sphere) {
      return sphere.center.equals(this.center) && sphere.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class Matrix4 {
    constructor(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
      Matrix4.prototype.isMatrix4 = true;
      this.elements = [
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      ];
      if (n11 !== void 0) {
        this.set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44);
      }
    }
    set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
      const te = this.elements;
      te[0] = n11;
      te[4] = n12;
      te[8] = n13;
      te[12] = n14;
      te[1] = n21;
      te[5] = n22;
      te[9] = n23;
      te[13] = n24;
      te[2] = n31;
      te[6] = n32;
      te[10] = n33;
      te[14] = n34;
      te[3] = n41;
      te[7] = n42;
      te[11] = n43;
      te[15] = n44;
      return this;
    }
    identity() {
      this.set(
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    clone() {
      return new Matrix4().fromArray(this.elements);
    }
    copy(m) {
      const te = this.elements;
      const me = m.elements;
      te[0] = me[0];
      te[1] = me[1];
      te[2] = me[2];
      te[3] = me[3];
      te[4] = me[4];
      te[5] = me[5];
      te[6] = me[6];
      te[7] = me[7];
      te[8] = me[8];
      te[9] = me[9];
      te[10] = me[10];
      te[11] = me[11];
      te[12] = me[12];
      te[13] = me[13];
      te[14] = me[14];
      te[15] = me[15];
      return this;
    }
    copyPosition(m) {
      const te = this.elements, me = m.elements;
      te[12] = me[12];
      te[13] = me[13];
      te[14] = me[14];
      return this;
    }
    setFromMatrix3(m) {
      const me = m.elements;
      this.set(
        me[0],
        me[3],
        me[6],
        0,
        me[1],
        me[4],
        me[7],
        0,
        me[2],
        me[5],
        me[8],
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    extractBasis(xAxis, yAxis, zAxis) {
      xAxis.setFromMatrixColumn(this, 0);
      yAxis.setFromMatrixColumn(this, 1);
      zAxis.setFromMatrixColumn(this, 2);
      return this;
    }
    makeBasis(xAxis, yAxis, zAxis) {
      this.set(
        xAxis.x,
        yAxis.x,
        zAxis.x,
        0,
        xAxis.y,
        yAxis.y,
        zAxis.y,
        0,
        xAxis.z,
        yAxis.z,
        zAxis.z,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    extractRotation(m) {
      const te = this.elements;
      const me = m.elements;
      const scaleX = 1 / _v1$5.setFromMatrixColumn(m, 0).length();
      const scaleY = 1 / _v1$5.setFromMatrixColumn(m, 1).length();
      const scaleZ = 1 / _v1$5.setFromMatrixColumn(m, 2).length();
      te[0] = me[0] * scaleX;
      te[1] = me[1] * scaleX;
      te[2] = me[2] * scaleX;
      te[3] = 0;
      te[4] = me[4] * scaleY;
      te[5] = me[5] * scaleY;
      te[6] = me[6] * scaleY;
      te[7] = 0;
      te[8] = me[8] * scaleZ;
      te[9] = me[9] * scaleZ;
      te[10] = me[10] * scaleZ;
      te[11] = 0;
      te[12] = 0;
      te[13] = 0;
      te[14] = 0;
      te[15] = 1;
      return this;
    }
    makeRotationFromEuler(euler) {
      const te = this.elements;
      const x = euler.x, y = euler.y, z = euler.z;
      const a = Math.cos(x), b = Math.sin(x);
      const c = Math.cos(y), d = Math.sin(y);
      const e = Math.cos(z), f = Math.sin(z);
      if (euler.order === "XYZ") {
        const ae = a * e, af = a * f, be = b * e, bf = b * f;
        te[0] = c * e;
        te[4] = -c * f;
        te[8] = d;
        te[1] = af + be * d;
        te[5] = ae - bf * d;
        te[9] = -b * c;
        te[2] = bf - ae * d;
        te[6] = be + af * d;
        te[10] = a * c;
      } else if (euler.order === "YXZ") {
        const ce = c * e, cf = c * f, de = d * e, df = d * f;
        te[0] = ce + df * b;
        te[4] = de * b - cf;
        te[8] = a * d;
        te[1] = a * f;
        te[5] = a * e;
        te[9] = -b;
        te[2] = cf * b - de;
        te[6] = df + ce * b;
        te[10] = a * c;
      } else if (euler.order === "ZXY") {
        const ce = c * e, cf = c * f, de = d * e, df = d * f;
        te[0] = ce - df * b;
        te[4] = -a * f;
        te[8] = de + cf * b;
        te[1] = cf + de * b;
        te[5] = a * e;
        te[9] = df - ce * b;
        te[2] = -a * d;
        te[6] = b;
        te[10] = a * c;
      } else if (euler.order === "ZYX") {
        const ae = a * e, af = a * f, be = b * e, bf = b * f;
        te[0] = c * e;
        te[4] = be * d - af;
        te[8] = ae * d + bf;
        te[1] = c * f;
        te[5] = bf * d + ae;
        te[9] = af * d - be;
        te[2] = -d;
        te[6] = b * c;
        te[10] = a * c;
      } else if (euler.order === "YZX") {
        const ac = a * c, ad = a * d, bc = b * c, bd = b * d;
        te[0] = c * e;
        te[4] = bd - ac * f;
        te[8] = bc * f + ad;
        te[1] = f;
        te[5] = a * e;
        te[9] = -b * e;
        te[2] = -d * e;
        te[6] = ad * f + bc;
        te[10] = ac - bd * f;
      } else if (euler.order === "XZY") {
        const ac = a * c, ad = a * d, bc = b * c, bd = b * d;
        te[0] = c * e;
        te[4] = -f;
        te[8] = d * e;
        te[1] = ac * f + bd;
        te[5] = a * e;
        te[9] = ad * f - bc;
        te[2] = bc * f - ad;
        te[6] = b * e;
        te[10] = bd * f + ac;
      }
      te[3] = 0;
      te[7] = 0;
      te[11] = 0;
      te[12] = 0;
      te[13] = 0;
      te[14] = 0;
      te[15] = 1;
      return this;
    }
    makeRotationFromQuaternion(q) {
      return this.compose(_zero, q, _one);
    }
    lookAt(eye, target, up) {
      const te = this.elements;
      _z.subVectors(eye, target);
      if (_z.lengthSq() === 0) {
        _z.z = 1;
      }
      _z.normalize();
      _x.crossVectors(up, _z);
      if (_x.lengthSq() === 0) {
        if (Math.abs(up.z) === 1) {
          _z.x += 1e-4;
        } else {
          _z.z += 1e-4;
        }
        _z.normalize();
        _x.crossVectors(up, _z);
      }
      _x.normalize();
      _y.crossVectors(_z, _x);
      te[0] = _x.x;
      te[4] = _y.x;
      te[8] = _z.x;
      te[1] = _x.y;
      te[5] = _y.y;
      te[9] = _z.y;
      te[2] = _x.z;
      te[6] = _y.z;
      te[10] = _z.z;
      return this;
    }
    multiply(m) {
      return this.multiplyMatrices(this, m);
    }
    premultiply(m) {
      return this.multiplyMatrices(m, this);
    }
    multiplyMatrices(a, b) {
      const ae = a.elements;
      const be = b.elements;
      const te = this.elements;
      const a11 = ae[0], a12 = ae[4], a13 = ae[8], a14 = ae[12];
      const a21 = ae[1], a22 = ae[5], a23 = ae[9], a24 = ae[13];
      const a31 = ae[2], a32 = ae[6], a33 = ae[10], a34 = ae[14];
      const a41 = ae[3], a42 = ae[7], a43 = ae[11], a44 = ae[15];
      const b11 = be[0], b12 = be[4], b13 = be[8], b14 = be[12];
      const b21 = be[1], b22 = be[5], b23 = be[9], b24 = be[13];
      const b31 = be[2], b32 = be[6], b33 = be[10], b34 = be[14];
      const b41 = be[3], b42 = be[7], b43 = be[11], b44 = be[15];
      te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
      te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
      te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
      te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
      te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
      te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
      te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
      te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
      te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
      te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
      te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
      te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
      te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
      te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
      te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
      te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
      return this;
    }
    multiplyScalar(s) {
      const te = this.elements;
      te[0] *= s;
      te[4] *= s;
      te[8] *= s;
      te[12] *= s;
      te[1] *= s;
      te[5] *= s;
      te[9] *= s;
      te[13] *= s;
      te[2] *= s;
      te[6] *= s;
      te[10] *= s;
      te[14] *= s;
      te[3] *= s;
      te[7] *= s;
      te[11] *= s;
      te[15] *= s;
      return this;
    }
    determinant() {
      const te = this.elements;
      const n11 = te[0], n12 = te[4], n13 = te[8], n14 = te[12];
      const n21 = te[1], n22 = te[5], n23 = te[9], n24 = te[13];
      const n31 = te[2], n32 = te[6], n33 = te[10], n34 = te[14];
      const n41 = te[3], n42 = te[7], n43 = te[11], n44 = te[15];
      return n41 * (+n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34) + n42 * (+n11 * n23 * n34 - n11 * n24 * n33 + n14 * n21 * n33 - n13 * n21 * n34 + n13 * n24 * n31 - n14 * n23 * n31) + n43 * (+n11 * n24 * n32 - n11 * n22 * n34 - n14 * n21 * n32 + n12 * n21 * n34 + n14 * n22 * n31 - n12 * n24 * n31) + n44 * (-n13 * n22 * n31 - n11 * n23 * n32 + n11 * n22 * n33 + n13 * n21 * n32 - n12 * n21 * n33 + n12 * n23 * n31);
    }
    transpose() {
      const te = this.elements;
      let tmp;
      tmp = te[1];
      te[1] = te[4];
      te[4] = tmp;
      tmp = te[2];
      te[2] = te[8];
      te[8] = tmp;
      tmp = te[6];
      te[6] = te[9];
      te[9] = tmp;
      tmp = te[3];
      te[3] = te[12];
      te[12] = tmp;
      tmp = te[7];
      te[7] = te[13];
      te[13] = tmp;
      tmp = te[11];
      te[11] = te[14];
      te[14] = tmp;
      return this;
    }
    setPosition(x, y, z) {
      const te = this.elements;
      if (x.isVector3) {
        te[12] = x.x;
        te[13] = x.y;
        te[14] = x.z;
      } else {
        te[12] = x;
        te[13] = y;
        te[14] = z;
      }
      return this;
    }
    invert() {
      const te = this.elements, n11 = te[0], n21 = te[1], n31 = te[2], n41 = te[3], n12 = te[4], n22 = te[5], n32 = te[6], n42 = te[7], n13 = te[8], n23 = te[9], n33 = te[10], n43 = te[11], n14 = te[12], n24 = te[13], n34 = te[14], n44 = te[15], t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44, t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44, t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44, t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
      const det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;
      if (det === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const detInv = 1 / det;
      te[0] = t11 * detInv;
      te[1] = (n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44) * detInv;
      te[2] = (n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44) * detInv;
      te[3] = (n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43) * detInv;
      te[4] = t12 * detInv;
      te[5] = (n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44) * detInv;
      te[6] = (n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44) * detInv;
      te[7] = (n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43) * detInv;
      te[8] = t13 * detInv;
      te[9] = (n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44) * detInv;
      te[10] = (n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44) * detInv;
      te[11] = (n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43) * detInv;
      te[12] = t14 * detInv;
      te[13] = (n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34) * detInv;
      te[14] = (n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34) * detInv;
      te[15] = (n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33) * detInv;
      return this;
    }
    scale(v) {
      const te = this.elements;
      const x = v.x, y = v.y, z = v.z;
      te[0] *= x;
      te[4] *= y;
      te[8] *= z;
      te[1] *= x;
      te[5] *= y;
      te[9] *= z;
      te[2] *= x;
      te[6] *= y;
      te[10] *= z;
      te[3] *= x;
      te[7] *= y;
      te[11] *= z;
      return this;
    }
    getMaxScaleOnAxis() {
      const te = this.elements;
      const scaleXSq = te[0] * te[0] + te[1] * te[1] + te[2] * te[2];
      const scaleYSq = te[4] * te[4] + te[5] * te[5] + te[6] * te[6];
      const scaleZSq = te[8] * te[8] + te[9] * te[9] + te[10] * te[10];
      return Math.sqrt(Math.max(scaleXSq, scaleYSq, scaleZSq));
    }
    makeTranslation(x, y, z) {
      if (x.isVector3) {
        this.set(
          1,
          0,
          0,
          x.x,
          0,
          1,
          0,
          x.y,
          0,
          0,
          1,
          x.z,
          0,
          0,
          0,
          1
        );
      } else {
        this.set(
          1,
          0,
          0,
          x,
          0,
          1,
          0,
          y,
          0,
          0,
          1,
          z,
          0,
          0,
          0,
          1
        );
      }
      return this;
    }
    makeRotationX(theta) {
      const c = Math.cos(theta), s = Math.sin(theta);
      this.set(
        1,
        0,
        0,
        0,
        0,
        c,
        -s,
        0,
        0,
        s,
        c,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    makeRotationY(theta) {
      const c = Math.cos(theta), s = Math.sin(theta);
      this.set(
        c,
        0,
        s,
        0,
        0,
        1,
        0,
        0,
        -s,
        0,
        c,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    makeRotationZ(theta) {
      const c = Math.cos(theta), s = Math.sin(theta);
      this.set(
        c,
        -s,
        0,
        0,
        s,
        c,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    makeRotationAxis(axis, angle) {
      const c = Math.cos(angle);
      const s = Math.sin(angle);
      const t = 1 - c;
      const x = axis.x, y = axis.y, z = axis.z;
      const tx = t * x, ty = t * y;
      this.set(
        tx * x + c,
        tx * y - s * z,
        tx * z + s * y,
        0,
        tx * y + s * z,
        ty * y + c,
        ty * z - s * x,
        0,
        tx * z - s * y,
        ty * z + s * x,
        t * z * z + c,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    makeScale(x, y, z) {
      this.set(
        x,
        0,
        0,
        0,
        0,
        y,
        0,
        0,
        0,
        0,
        z,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    makeShear(xy, xz, yx, yz, zx, zy) {
      this.set(
        1,
        yx,
        zx,
        0,
        xy,
        1,
        zy,
        0,
        xz,
        yz,
        1,
        0,
        0,
        0,
        0,
        1
      );
      return this;
    }
    compose(position, quaternion, scale) {
      const te = this.elements;
      const x = quaternion._x, y = quaternion._y, z = quaternion._z, w = quaternion._w;
      const x2 = x + x, y2 = y + y, z2 = z + z;
      const xx = x * x2, xy = x * y2, xz = x * z2;
      const yy = y * y2, yz = y * z2, zz = z * z2;
      const wx = w * x2, wy = w * y2, wz = w * z2;
      const sx = scale.x, sy = scale.y, sz = scale.z;
      te[0] = (1 - (yy + zz)) * sx;
      te[1] = (xy + wz) * sx;
      te[2] = (xz - wy) * sx;
      te[3] = 0;
      te[4] = (xy - wz) * sy;
      te[5] = (1 - (xx + zz)) * sy;
      te[6] = (yz + wx) * sy;
      te[7] = 0;
      te[8] = (xz + wy) * sz;
      te[9] = (yz - wx) * sz;
      te[10] = (1 - (xx + yy)) * sz;
      te[11] = 0;
      te[12] = position.x;
      te[13] = position.y;
      te[14] = position.z;
      te[15] = 1;
      return this;
    }
    decompose(position, quaternion, scale) {
      const te = this.elements;
      let sx = _v1$5.set(te[0], te[1], te[2]).length();
      const sy = _v1$5.set(te[4], te[5], te[6]).length();
      const sz = _v1$5.set(te[8], te[9], te[10]).length();
      const det = this.determinant();
      if (det < 0) sx = -sx;
      position.x = te[12];
      position.y = te[13];
      position.z = te[14];
      _m1$4.copy(this);
      const invSX = 1 / sx;
      const invSY = 1 / sy;
      const invSZ = 1 / sz;
      _m1$4.elements[0] *= invSX;
      _m1$4.elements[1] *= invSX;
      _m1$4.elements[2] *= invSX;
      _m1$4.elements[4] *= invSY;
      _m1$4.elements[5] *= invSY;
      _m1$4.elements[6] *= invSY;
      _m1$4.elements[8] *= invSZ;
      _m1$4.elements[9] *= invSZ;
      _m1$4.elements[10] *= invSZ;
      quaternion.setFromRotationMatrix(_m1$4);
      scale.x = sx;
      scale.y = sy;
      scale.z = sz;
      return this;
    }
    makePerspective(left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem) {
      const te = this.elements;
      const x = 2 * near / (right - left);
      const y = 2 * near / (top - bottom);
      const a = (right + left) / (right - left);
      const b = (top + bottom) / (top - bottom);
      let c, d;
      if (coordinateSystem === WebGLCoordinateSystem) {
        c = -(far + near) / (far - near);
        d = -2 * far * near / (far - near);
      } else if (coordinateSystem === WebGPUCoordinateSystem) {
        c = -far / (far - near);
        d = -far * near / (far - near);
      } else {
        throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + coordinateSystem);
      }
      te[0] = x;
      te[4] = 0;
      te[8] = a;
      te[12] = 0;
      te[1] = 0;
      te[5] = y;
      te[9] = b;
      te[13] = 0;
      te[2] = 0;
      te[6] = 0;
      te[10] = c;
      te[14] = d;
      te[3] = 0;
      te[7] = 0;
      te[11] = -1;
      te[15] = 0;
      return this;
    }
    makeOrthographic(left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem) {
      const te = this.elements;
      const w = 1 / (right - left);
      const h = 1 / (top - bottom);
      const p = 1 / (far - near);
      const x = (right + left) * w;
      const y = (top + bottom) * h;
      let z, zInv;
      if (coordinateSystem === WebGLCoordinateSystem) {
        z = (far + near) * p;
        zInv = -2 * p;
      } else if (coordinateSystem === WebGPUCoordinateSystem) {
        z = near * p;
        zInv = -1 * p;
      } else {
        throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + coordinateSystem);
      }
      te[0] = 2 * w;
      te[4] = 0;
      te[8] = 0;
      te[12] = -x;
      te[1] = 0;
      te[5] = 2 * h;
      te[9] = 0;
      te[13] = -y;
      te[2] = 0;
      te[6] = 0;
      te[10] = zInv;
      te[14] = -z;
      te[3] = 0;
      te[7] = 0;
      te[11] = 0;
      te[15] = 1;
      return this;
    }
    equals(matrix) {
      const te = this.elements;
      const me = matrix.elements;
      for (let i = 0; i < 16; i++) {
        if (te[i] !== me[i]) return false;
      }
      return true;
    }
    fromArray(array, offset = 0) {
      for (let i = 0; i < 16; i++) {
        this.elements[i] = array[i + offset];
      }
      return this;
    }
    toArray(array = [], offset = 0) {
      const te = this.elements;
      array[offset] = te[0];
      array[offset + 1] = te[1];
      array[offset + 2] = te[2];
      array[offset + 3] = te[3];
      array[offset + 4] = te[4];
      array[offset + 5] = te[5];
      array[offset + 6] = te[6];
      array[offset + 7] = te[7];
      array[offset + 8] = te[8];
      array[offset + 9] = te[9];
      array[offset + 10] = te[10];
      array[offset + 11] = te[11];
      array[offset + 12] = te[12];
      array[offset + 13] = te[13];
      array[offset + 14] = te[14];
      array[offset + 15] = te[15];
      return array;
    }
  }
  const _v1$5 = /* @__PURE__ */ new Vector3();
  const _m1$4 = /* @__PURE__ */ new Matrix4();
  const _zero = /* @__PURE__ */ new Vector3(0, 0, 0);
  const _one = /* @__PURE__ */ new Vector3(1, 1, 1);
  const _x = /* @__PURE__ */ new Vector3();
  const _y = /* @__PURE__ */ new Vector3();
  const _z = /* @__PURE__ */ new Vector3();
  const _matrix$2 = /* @__PURE__ */ new Matrix4();
  const _quaternion$3 = /* @__PURE__ */ new Quaternion();
  class Euler {
    constructor(x = 0, y = 0, z = 0, order = Euler.DEFAULT_ORDER) {
      this.isEuler = true;
      this._x = x;
      this._y = y;
      this._z = z;
      this._order = order;
    }
    get x() {
      return this._x;
    }
    set x(value) {
      this._x = value;
      this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(value) {
      this._y = value;
      this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(value) {
      this._z = value;
      this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(value) {
      this._order = value;
      this._onChangeCallback();
    }
    set(x, y, z, order = this._order) {
      this._x = x;
      this._y = y;
      this._z = z;
      this._order = order;
      this._onChangeCallback();
      return this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(euler) {
      this._x = euler._x;
      this._y = euler._y;
      this._z = euler._z;
      this._order = euler._order;
      this._onChangeCallback();
      return this;
    }
    setFromRotationMatrix(m, order = this._order, update = true) {
      const te = m.elements;
      const m11 = te[0], m12 = te[4], m13 = te[8];
      const m21 = te[1], m22 = te[5], m23 = te[9];
      const m31 = te[2], m32 = te[6], m33 = te[10];
      switch (order) {
        case "XYZ":
          this._y = Math.asin(clamp$1(m13, -1, 1));
          if (Math.abs(m13) < 0.9999999) {
            this._x = Math.atan2(-m23, m33);
            this._z = Math.atan2(-m12, m11);
          } else {
            this._x = Math.atan2(m32, m22);
            this._z = 0;
          }
          break;
        case "YXZ":
          this._x = Math.asin(-clamp$1(m23, -1, 1));
          if (Math.abs(m23) < 0.9999999) {
            this._y = Math.atan2(m13, m33);
            this._z = Math.atan2(m21, m22);
          } else {
            this._y = Math.atan2(-m31, m11);
            this._z = 0;
          }
          break;
        case "ZXY":
          this._x = Math.asin(clamp$1(m32, -1, 1));
          if (Math.abs(m32) < 0.9999999) {
            this._y = Math.atan2(-m31, m33);
            this._z = Math.atan2(-m12, m22);
          } else {
            this._y = 0;
            this._z = Math.atan2(m21, m11);
          }
          break;
        case "ZYX":
          this._y = Math.asin(-clamp$1(m31, -1, 1));
          if (Math.abs(m31) < 0.9999999) {
            this._x = Math.atan2(m32, m33);
            this._z = Math.atan2(m21, m11);
          } else {
            this._x = 0;
            this._z = Math.atan2(-m12, m22);
          }
          break;
        case "YZX":
          this._z = Math.asin(clamp$1(m21, -1, 1));
          if (Math.abs(m21) < 0.9999999) {
            this._x = Math.atan2(-m23, m22);
            this._y = Math.atan2(-m31, m11);
          } else {
            this._x = 0;
            this._y = Math.atan2(m13, m33);
          }
          break;
        case "XZY":
          this._z = Math.asin(-clamp$1(m12, -1, 1));
          if (Math.abs(m12) < 0.9999999) {
            this._x = Math.atan2(m32, m22);
            this._y = Math.atan2(m13, m11);
          } else {
            this._x = Math.atan2(-m23, m33);
            this._y = 0;
          }
          break;
        default:
          console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + order);
      }
      this._order = order;
      if (update === true) this._onChangeCallback();
      return this;
    }
    setFromQuaternion(q, order, update) {
      _matrix$2.makeRotationFromQuaternion(q);
      return this.setFromRotationMatrix(_matrix$2, order, update);
    }
    setFromVector3(v, order = this._order) {
      return this.set(v.x, v.y, v.z, order);
    }
    reorder(newOrder) {
      _quaternion$3.setFromEuler(this);
      return this.setFromQuaternion(_quaternion$3, newOrder);
    }
    equals(euler) {
      return euler._x === this._x && euler._y === this._y && euler._z === this._z && euler._order === this._order;
    }
    fromArray(array) {
      this._x = array[0];
      this._y = array[1];
      this._z = array[2];
      if (array[3] !== void 0) this._order = array[3];
      this._onChangeCallback();
      return this;
    }
    toArray(array = [], offset = 0) {
      array[offset] = this._x;
      array[offset + 1] = this._y;
      array[offset + 2] = this._z;
      array[offset + 3] = this._order;
      return array;
    }
    _onChange(callback) {
      this._onChangeCallback = callback;
      return this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x;
      yield this._y;
      yield this._z;
      yield this._order;
    }
  }
  Euler.DEFAULT_ORDER = "XYZ";
  class Layers {
    constructor() {
      this.mask = 1 | 0;
    }
    set(channel) {
      this.mask = (1 << channel | 0) >>> 0;
    }
    enable(channel) {
      this.mask |= 1 << channel | 0;
    }
    enableAll() {
      this.mask = 4294967295 | 0;
    }
    toggle(channel) {
      this.mask ^= 1 << channel | 0;
    }
    disable(channel) {
      this.mask &= ~(1 << channel | 0);
    }
    disableAll() {
      this.mask = 0;
    }
    test(layers) {
      return (this.mask & layers.mask) !== 0;
    }
    isEnabled(channel) {
      return (this.mask & (1 << channel | 0)) !== 0;
    }
  }
  let _object3DId = 0;
  const _v1$4 = /* @__PURE__ */ new Vector3();
  const _q1 = /* @__PURE__ */ new Quaternion();
  const _m1$3 = /* @__PURE__ */ new Matrix4();
  const _target$1 = /* @__PURE__ */ new Vector3();
  const _position$3 = /* @__PURE__ */ new Vector3();
  const _scale$2 = /* @__PURE__ */ new Vector3();
  const _quaternion$2 = /* @__PURE__ */ new Quaternion();
  const _xAxis = /* @__PURE__ */ new Vector3(1, 0, 0);
  const _yAxis = /* @__PURE__ */ new Vector3(0, 1, 0);
  const _zAxis = /* @__PURE__ */ new Vector3(0, 0, 1);
  const _addedEvent = { type: "added" };
  const _removedEvent = { type: "removed" };
  const _childaddedEvent = { type: "childadded", child: null };
  const _childremovedEvent = { type: "childremoved", child: null };
  class Object3D extends EventDispatcher {
    constructor() {
      super();
      this.isObject3D = true;
      Object.defineProperty(this, "id", { value: _object3DId++ });
      this.uuid = generateUUID();
      this.name = "";
      this.type = "Object3D";
      this.parent = null;
      this.children = [];
      this.up = Object3D.DEFAULT_UP.clone();
      const position = new Vector3();
      const rotation = new Euler();
      const quaternion = new Quaternion();
      const scale = new Vector3(1, 1, 1);
      function onRotationChange() {
        quaternion.setFromEuler(rotation, false);
      }
      function onQuaternionChange() {
        rotation.setFromQuaternion(quaternion, void 0, false);
      }
      rotation._onChange(onRotationChange);
      quaternion._onChange(onQuaternionChange);
      Object.defineProperties(this, {
        position: {
          configurable: true,
          enumerable: true,
          value: position
        },
        rotation: {
          configurable: true,
          enumerable: true,
          value: rotation
        },
        quaternion: {
          configurable: true,
          enumerable: true,
          value: quaternion
        },
        scale: {
          configurable: true,
          enumerable: true,
          value: scale
        },
        modelViewMatrix: {
          value: new Matrix4()
        },
        normalMatrix: {
          value: new Matrix3()
        }
      });
      this.matrix = new Matrix4();
      this.matrixWorld = new Matrix4();
      this.matrixAutoUpdate = Object3D.DEFAULT_MATRIX_AUTO_UPDATE;
      this.matrixWorldAutoUpdate = Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE;
      this.matrixWorldNeedsUpdate = false;
      this.layers = new Layers();
      this.visible = true;
      this.castShadow = false;
      this.receiveShadow = false;
      this.frustumCulled = true;
      this.renderOrder = 0;
      this.animations = [];
      this.userData = {};
    }
    onBeforeShadow() {
    }
    onAfterShadow() {
    }
    onBeforeRender() {
    }
    onAfterRender() {
    }
    applyMatrix4(matrix) {
      if (this.matrixAutoUpdate) this.updateMatrix();
      this.matrix.premultiply(matrix);
      this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(q) {
      this.quaternion.premultiply(q);
      return this;
    }
    setRotationFromAxisAngle(axis, angle) {
      this.quaternion.setFromAxisAngle(axis, angle);
    }
    setRotationFromEuler(euler) {
      this.quaternion.setFromEuler(euler, true);
    }
    setRotationFromMatrix(m) {
      this.quaternion.setFromRotationMatrix(m);
    }
    setRotationFromQuaternion(q) {
      this.quaternion.copy(q);
    }
    rotateOnAxis(axis, angle) {
      _q1.setFromAxisAngle(axis, angle);
      this.quaternion.multiply(_q1);
      return this;
    }
    rotateOnWorldAxis(axis, angle) {
      _q1.setFromAxisAngle(axis, angle);
      this.quaternion.premultiply(_q1);
      return this;
    }
    rotateX(angle) {
      return this.rotateOnAxis(_xAxis, angle);
    }
    rotateY(angle) {
      return this.rotateOnAxis(_yAxis, angle);
    }
    rotateZ(angle) {
      return this.rotateOnAxis(_zAxis, angle);
    }
    translateOnAxis(axis, distance2) {
      _v1$4.copy(axis).applyQuaternion(this.quaternion);
      this.position.add(_v1$4.multiplyScalar(distance2));
      return this;
    }
    translateX(distance2) {
      return this.translateOnAxis(_xAxis, distance2);
    }
    translateY(distance2) {
      return this.translateOnAxis(_yAxis, distance2);
    }
    translateZ(distance2) {
      return this.translateOnAxis(_zAxis, distance2);
    }
    localToWorld(vector) {
      this.updateWorldMatrix(true, false);
      return vector.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(vector) {
      this.updateWorldMatrix(true, false);
      return vector.applyMatrix4(_m1$3.copy(this.matrixWorld).invert());
    }
    lookAt(x, y, z) {
      if (x.isVector3) {
        _target$1.copy(x);
      } else {
        _target$1.set(x, y, z);
      }
      const parent = this.parent;
      this.updateWorldMatrix(true, false);
      _position$3.setFromMatrixPosition(this.matrixWorld);
      if (this.isCamera || this.isLight) {
        _m1$3.lookAt(_position$3, _target$1, this.up);
      } else {
        _m1$3.lookAt(_target$1, _position$3, this.up);
      }
      this.quaternion.setFromRotationMatrix(_m1$3);
      if (parent) {
        _m1$3.extractRotation(parent.matrixWorld);
        _q1.setFromRotationMatrix(_m1$3);
        this.quaternion.premultiply(_q1.invert());
      }
    }
    add(object) {
      if (arguments.length > 1) {
        for (let i = 0; i < arguments.length; i++) {
          this.add(arguments[i]);
        }
        return this;
      }
      if (object === this) {
        console.error("THREE.Object3D.add: object can't be added as a child of itself.", object);
        return this;
      }
      if (object && object.isObject3D) {
        object.removeFromParent();
        object.parent = this;
        this.children.push(object);
        object.dispatchEvent(_addedEvent);
        _childaddedEvent.child = object;
        this.dispatchEvent(_childaddedEvent);
        _childaddedEvent.child = null;
      } else {
        console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", object);
      }
      return this;
    }
    remove(object) {
      if (arguments.length > 1) {
        for (let i = 0; i < arguments.length; i++) {
          this.remove(arguments[i]);
        }
        return this;
      }
      const index = this.children.indexOf(object);
      if (index !== -1) {
        object.parent = null;
        this.children.splice(index, 1);
        object.dispatchEvent(_removedEvent);
        _childremovedEvent.child = object;
        this.dispatchEvent(_childremovedEvent);
        _childremovedEvent.child = null;
      }
      return this;
    }
    removeFromParent() {
      const parent = this.parent;
      if (parent !== null) {
        parent.remove(this);
      }
      return this;
    }
    clear() {
      return this.remove(...this.children);
    }
    attach(object) {
      this.updateWorldMatrix(true, false);
      _m1$3.copy(this.matrixWorld).invert();
      if (object.parent !== null) {
        object.parent.updateWorldMatrix(true, false);
        _m1$3.multiply(object.parent.matrixWorld);
      }
      object.applyMatrix4(_m1$3);
      object.removeFromParent();
      object.parent = this;
      this.children.push(object);
      object.updateWorldMatrix(false, true);
      object.dispatchEvent(_addedEvent);
      _childaddedEvent.child = object;
      this.dispatchEvent(_childaddedEvent);
      _childaddedEvent.child = null;
      return this;
    }
    getObjectById(id) {
      return this.getObjectByProperty("id", id);
    }
    getObjectByName(name) {
      return this.getObjectByProperty("name", name);
    }
    getObjectByProperty(name, value) {
      if (this[name] === value) return this;
      for (let i = 0, l = this.children.length; i < l; i++) {
        const child = this.children[i];
        const object = child.getObjectByProperty(name, value);
        if (object !== void 0) {
          return object;
        }
      }
      return void 0;
    }
    getObjectsByProperty(name, value, result = []) {
      if (this[name] === value) result.push(this);
      const children = this.children;
      for (let i = 0, l = children.length; i < l; i++) {
        children[i].getObjectsByProperty(name, value, result);
      }
      return result;
    }
    getWorldPosition(target) {
      this.updateWorldMatrix(true, false);
      return target.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(target) {
      this.updateWorldMatrix(true, false);
      this.matrixWorld.decompose(_position$3, target, _scale$2);
      return target;
    }
    getWorldScale(target) {
      this.updateWorldMatrix(true, false);
      this.matrixWorld.decompose(_position$3, _quaternion$2, target);
      return target;
    }
    getWorldDirection(target) {
      this.updateWorldMatrix(true, false);
      const e = this.matrixWorld.elements;
      return target.set(e[8], e[9], e[10]).normalize();
    }
    raycast() {
    }
    traverse(callback) {
      callback(this);
      const children = this.children;
      for (let i = 0, l = children.length; i < l; i++) {
        children[i].traverse(callback);
      }
    }
    traverseVisible(callback) {
      if (this.visible === false) return;
      callback(this);
      const children = this.children;
      for (let i = 0, l = children.length; i < l; i++) {
        children[i].traverseVisible(callback);
      }
    }
    traverseAncestors(callback) {
      const parent = this.parent;
      if (parent !== null) {
        callback(parent);
        parent.traverseAncestors(callback);
      }
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale);
      this.matrixWorldNeedsUpdate = true;
    }
    updateMatrixWorld(force) {
      if (this.matrixAutoUpdate) this.updateMatrix();
      if (this.matrixWorldNeedsUpdate || force) {
        if (this.matrixWorldAutoUpdate === true) {
          if (this.parent === null) {
            this.matrixWorld.copy(this.matrix);
          } else {
            this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
          }
        }
        this.matrixWorldNeedsUpdate = false;
        force = true;
      }
      const children = this.children;
      for (let i = 0, l = children.length; i < l; i++) {
        const child = children[i];
        child.updateMatrixWorld(force);
      }
    }
    updateWorldMatrix(updateParents, updateChildren) {
      const parent = this.parent;
      if (updateParents === true && parent !== null) {
        parent.updateWorldMatrix(true, false);
      }
      if (this.matrixAutoUpdate) this.updateMatrix();
      if (this.matrixWorldAutoUpdate === true) {
        if (this.parent === null) {
          this.matrixWorld.copy(this.matrix);
        } else {
          this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
        }
      }
      if (updateChildren === true) {
        const children = this.children;
        for (let i = 0, l = children.length; i < l; i++) {
          const child = children[i];
          child.updateWorldMatrix(false, true);
        }
      }
    }
    toJSON(meta) {
      const isRootObject = meta === void 0 || typeof meta === "string";
      const output = {};
      if (isRootObject) {
        meta = {
          geometries: {},
          materials: {},
          textures: {},
          images: {},
          shapes: {},
          skeletons: {},
          animations: {},
          nodes: {}
        };
        output.metadata = {
          version: 4.6,
          type: "Object",
          generator: "Object3D.toJSON"
        };
      }
      const object = {};
      object.uuid = this.uuid;
      object.type = this.type;
      if (this.name !== "") object.name = this.name;
      if (this.castShadow === true) object.castShadow = true;
      if (this.receiveShadow === true) object.receiveShadow = true;
      if (this.visible === false) object.visible = false;
      if (this.frustumCulled === false) object.frustumCulled = false;
      if (this.renderOrder !== 0) object.renderOrder = this.renderOrder;
      if (Object.keys(this.userData).length > 0) object.userData = this.userData;
      object.layers = this.layers.mask;
      object.matrix = this.matrix.toArray();
      object.up = this.up.toArray();
      if (this.matrixAutoUpdate === false) object.matrixAutoUpdate = false;
      if (this.isInstancedMesh) {
        object.type = "InstancedMesh";
        object.count = this.count;
        object.instanceMatrix = this.instanceMatrix.toJSON();
        if (this.instanceColor !== null) object.instanceColor = this.instanceColor.toJSON();
      }
      if (this.isBatchedMesh) {
        object.type = "BatchedMesh";
        object.perObjectFrustumCulled = this.perObjectFrustumCulled;
        object.sortObjects = this.sortObjects;
        object.drawRanges = this._drawRanges;
        object.reservedRanges = this._reservedRanges;
        object.visibility = this._visibility;
        object.active = this._active;
        object.bounds = this._bounds.map((bound) => ({
          boxInitialized: bound.boxInitialized,
          boxMin: bound.box.min.toArray(),
          boxMax: bound.box.max.toArray(),
          sphereInitialized: bound.sphereInitialized,
          sphereRadius: bound.sphere.radius,
          sphereCenter: bound.sphere.center.toArray()
        }));
        object.maxInstanceCount = this._maxInstanceCount;
        object.maxVertexCount = this._maxVertexCount;
        object.maxIndexCount = this._maxIndexCount;
        object.geometryInitialized = this._geometryInitialized;
        object.geometryCount = this._geometryCount;
        object.matricesTexture = this._matricesTexture.toJSON(meta);
        if (this._colorsTexture !== null) object.colorsTexture = this._colorsTexture.toJSON(meta);
        if (this.boundingSphere !== null) {
          object.boundingSphere = {
            center: object.boundingSphere.center.toArray(),
            radius: object.boundingSphere.radius
          };
        }
        if (this.boundingBox !== null) {
          object.boundingBox = {
            min: object.boundingBox.min.toArray(),
            max: object.boundingBox.max.toArray()
          };
        }
      }
      function serialize(library, element2) {
        if (library[element2.uuid] === void 0) {
          library[element2.uuid] = element2.toJSON(meta);
        }
        return element2.uuid;
      }
      if (this.isScene) {
        if (this.background) {
          if (this.background.isColor) {
            object.background = this.background.toJSON();
          } else if (this.background.isTexture) {
            object.background = this.background.toJSON(meta).uuid;
          }
        }
        if (this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true) {
          object.environment = this.environment.toJSON(meta).uuid;
        }
      } else if (this.isMesh || this.isLine || this.isPoints) {
        object.geometry = serialize(meta.geometries, this.geometry);
        const parameters = this.geometry.parameters;
        if (parameters !== void 0 && parameters.shapes !== void 0) {
          const shapes = parameters.shapes;
          if (Array.isArray(shapes)) {
            for (let i = 0, l = shapes.length; i < l; i++) {
              const shape = shapes[i];
              serialize(meta.shapes, shape);
            }
          } else {
            serialize(meta.shapes, shapes);
          }
        }
      }
      if (this.isSkinnedMesh) {
        object.bindMode = this.bindMode;
        object.bindMatrix = this.bindMatrix.toArray();
        if (this.skeleton !== void 0) {
          serialize(meta.skeletons, this.skeleton);
          object.skeleton = this.skeleton.uuid;
        }
      }
      if (this.material !== void 0) {
        if (Array.isArray(this.material)) {
          const uuids = [];
          for (let i = 0, l = this.material.length; i < l; i++) {
            uuids.push(serialize(meta.materials, this.material[i]));
          }
          object.material = uuids;
        } else {
          object.material = serialize(meta.materials, this.material);
        }
      }
      if (this.children.length > 0) {
        object.children = [];
        for (let i = 0; i < this.children.length; i++) {
          object.children.push(this.children[i].toJSON(meta).object);
        }
      }
      if (this.animations.length > 0) {
        object.animations = [];
        for (let i = 0; i < this.animations.length; i++) {
          const animation = this.animations[i];
          object.animations.push(serialize(meta.animations, animation));
        }
      }
      if (isRootObject) {
        const geometries = extractFromCache(meta.geometries);
        const materials = extractFromCache(meta.materials);
        const textures = extractFromCache(meta.textures);
        const images = extractFromCache(meta.images);
        const shapes = extractFromCache(meta.shapes);
        const skeletons = extractFromCache(meta.skeletons);
        const animations = extractFromCache(meta.animations);
        const nodes = extractFromCache(meta.nodes);
        if (geometries.length > 0) output.geometries = geometries;
        if (materials.length > 0) output.materials = materials;
        if (textures.length > 0) output.textures = textures;
        if (images.length > 0) output.images = images;
        if (shapes.length > 0) output.shapes = shapes;
        if (skeletons.length > 0) output.skeletons = skeletons;
        if (animations.length > 0) output.animations = animations;
        if (nodes.length > 0) output.nodes = nodes;
      }
      output.object = object;
      return output;
      function extractFromCache(cache2) {
        const values = [];
        for (const key in cache2) {
          const data = cache2[key];
          delete data.metadata;
          values.push(data);
        }
        return values;
      }
    }
    clone(recursive) {
      return new this.constructor().copy(this, recursive);
    }
    copy(source, recursive = true) {
      this.name = source.name;
      this.up.copy(source.up);
      this.position.copy(source.position);
      this.rotation.order = source.rotation.order;
      this.quaternion.copy(source.quaternion);
      this.scale.copy(source.scale);
      this.matrix.copy(source.matrix);
      this.matrixWorld.copy(source.matrixWorld);
      this.matrixAutoUpdate = source.matrixAutoUpdate;
      this.matrixWorldAutoUpdate = source.matrixWorldAutoUpdate;
      this.matrixWorldNeedsUpdate = source.matrixWorldNeedsUpdate;
      this.layers.mask = source.layers.mask;
      this.visible = source.visible;
      this.castShadow = source.castShadow;
      this.receiveShadow = source.receiveShadow;
      this.frustumCulled = source.frustumCulled;
      this.renderOrder = source.renderOrder;
      this.animations = source.animations.slice();
      this.userData = JSON.parse(JSON.stringify(source.userData));
      if (recursive === true) {
        for (let i = 0; i < source.children.length; i++) {
          const child = source.children[i];
          this.add(child.clone());
        }
      }
      return this;
    }
  }
  Object3D.DEFAULT_UP = /* @__PURE__ */ new Vector3(0, 1, 0);
  Object3D.DEFAULT_MATRIX_AUTO_UPDATE = true;
  Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
  const _v0$2 = /* @__PURE__ */ new Vector3();
  const _v1$3 = /* @__PURE__ */ new Vector3();
  const _v2$2 = /* @__PURE__ */ new Vector3();
  const _v3$2 = /* @__PURE__ */ new Vector3();
  const _vab = /* @__PURE__ */ new Vector3();
  const _vac = /* @__PURE__ */ new Vector3();
  const _vbc = /* @__PURE__ */ new Vector3();
  const _vap = /* @__PURE__ */ new Vector3();
  const _vbp = /* @__PURE__ */ new Vector3();
  const _vcp = /* @__PURE__ */ new Vector3();
  const _v40 = /* @__PURE__ */ new Vector4();
  const _v41 = /* @__PURE__ */ new Vector4();
  const _v42 = /* @__PURE__ */ new Vector4();
  class Triangle {
    constructor(a = new Vector3(), b = new Vector3(), c = new Vector3()) {
      this.a = a;
      this.b = b;
      this.c = c;
    }
    static getNormal(a, b, c, target) {
      target.subVectors(c, b);
      _v0$2.subVectors(a, b);
      target.cross(_v0$2);
      const targetLengthSq = target.lengthSq();
      if (targetLengthSq > 0) {
        return target.multiplyScalar(1 / Math.sqrt(targetLengthSq));
      }
      return target.set(0, 0, 0);
    }
    // static/instance method to calculate barycentric coordinates
    // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
    static getBarycoord(point, a, b, c, target) {
      _v0$2.subVectors(c, a);
      _v1$3.subVectors(b, a);
      _v2$2.subVectors(point, a);
      const dot00 = _v0$2.dot(_v0$2);
      const dot01 = _v0$2.dot(_v1$3);
      const dot02 = _v0$2.dot(_v2$2);
      const dot11 = _v1$3.dot(_v1$3);
      const dot12 = _v1$3.dot(_v2$2);
      const denom = dot00 * dot11 - dot01 * dot01;
      if (denom === 0) {
        target.set(0, 0, 0);
        return null;
      }
      const invDenom = 1 / denom;
      const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
      const v = (dot00 * dot12 - dot01 * dot02) * invDenom;
      return target.set(1 - u - v, v, u);
    }
    static containsPoint(point, a, b, c) {
      if (this.getBarycoord(point, a, b, c, _v3$2) === null) {
        return false;
      }
      return _v3$2.x >= 0 && _v3$2.y >= 0 && _v3$2.x + _v3$2.y <= 1;
    }
    static getInterpolation(point, p1, p2, p3, v1, v2, v3, target) {
      if (this.getBarycoord(point, p1, p2, p3, _v3$2) === null) {
        target.x = 0;
        target.y = 0;
        if ("z" in target) target.z = 0;
        if ("w" in target) target.w = 0;
        return null;
      }
      target.setScalar(0);
      target.addScaledVector(v1, _v3$2.x);
      target.addScaledVector(v2, _v3$2.y);
      target.addScaledVector(v3, _v3$2.z);
      return target;
    }
    static getInterpolatedAttribute(attr, i1, i2, i3, barycoord, target) {
      _v40.setScalar(0);
      _v41.setScalar(0);
      _v42.setScalar(0);
      _v40.fromBufferAttribute(attr, i1);
      _v41.fromBufferAttribute(attr, i2);
      _v42.fromBufferAttribute(attr, i3);
      target.setScalar(0);
      target.addScaledVector(_v40, barycoord.x);
      target.addScaledVector(_v41, barycoord.y);
      target.addScaledVector(_v42, barycoord.z);
      return target;
    }
    static isFrontFacing(a, b, c, direction2) {
      _v0$2.subVectors(c, b);
      _v1$3.subVectors(a, b);
      return _v0$2.cross(_v1$3).dot(direction2) < 0 ? true : false;
    }
    set(a, b, c) {
      this.a.copy(a);
      this.b.copy(b);
      this.c.copy(c);
      return this;
    }
    setFromPointsAndIndices(points, i0, i1, i2) {
      this.a.copy(points[i0]);
      this.b.copy(points[i1]);
      this.c.copy(points[i2]);
      return this;
    }
    setFromAttributeAndIndices(attribute2, i0, i1, i2) {
      this.a.fromBufferAttribute(attribute2, i0);
      this.b.fromBufferAttribute(attribute2, i1);
      this.c.fromBufferAttribute(attribute2, i2);
      return this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(triangle3) {
      this.a.copy(triangle3.a);
      this.b.copy(triangle3.b);
      this.c.copy(triangle3.c);
      return this;
    }
    getArea() {
      _v0$2.subVectors(this.c, this.b);
      _v1$3.subVectors(this.a, this.b);
      return _v0$2.cross(_v1$3).length() * 0.5;
    }
    getMidpoint(target) {
      return target.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
    getNormal(target) {
      return Triangle.getNormal(this.a, this.b, this.c, target);
    }
    getPlane(target) {
      return target.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(point, target) {
      return Triangle.getBarycoord(point, this.a, this.b, this.c, target);
    }
    getInterpolation(point, v1, v2, v3, target) {
      return Triangle.getInterpolation(point, this.a, this.b, this.c, v1, v2, v3, target);
    }
    containsPoint(point) {
      return Triangle.containsPoint(point, this.a, this.b, this.c);
    }
    isFrontFacing(direction2) {
      return Triangle.isFrontFacing(this.a, this.b, this.c, direction2);
    }
    intersectsBox(box) {
      return box.intersectsTriangle(this);
    }
    closestPointToPoint(p, target) {
      const a = this.a, b = this.b, c = this.c;
      let v, w;
      _vab.subVectors(b, a);
      _vac.subVectors(c, a);
      _vap.subVectors(p, a);
      const d1 = _vab.dot(_vap);
      const d2 = _vac.dot(_vap);
      if (d1 <= 0 && d2 <= 0) {
        return target.copy(a);
      }
      _vbp.subVectors(p, b);
      const d3 = _vab.dot(_vbp);
      const d4 = _vac.dot(_vbp);
      if (d3 >= 0 && d4 <= d3) {
        return target.copy(b);
      }
      const vc = d1 * d4 - d3 * d2;
      if (vc <= 0 && d1 >= 0 && d3 <= 0) {
        v = d1 / (d1 - d3);
        return target.copy(a).addScaledVector(_vab, v);
      }
      _vcp.subVectors(p, c);
      const d5 = _vab.dot(_vcp);
      const d6 = _vac.dot(_vcp);
      if (d6 >= 0 && d5 <= d6) {
        return target.copy(c);
      }
      const vb = d5 * d2 - d1 * d6;
      if (vb <= 0 && d2 >= 0 && d6 <= 0) {
        w = d2 / (d2 - d6);
        return target.copy(a).addScaledVector(_vac, w);
      }
      const va = d3 * d6 - d5 * d4;
      if (va <= 0 && d4 - d3 >= 0 && d5 - d6 >= 0) {
        _vbc.subVectors(c, b);
        w = (d4 - d3) / (d4 - d3 + (d5 - d6));
        return target.copy(b).addScaledVector(_vbc, w);
      }
      const denom = 1 / (va + vb + vc);
      v = vb * denom;
      w = vc * denom;
      return target.copy(a).addScaledVector(_vab, v).addScaledVector(_vac, w);
    }
    equals(triangle3) {
      return triangle3.a.equals(this.a) && triangle3.b.equals(this.b) && triangle3.c.equals(this.c);
    }
  }
  const _colorKeywords = {
    "aliceblue": 15792383,
    "antiquewhite": 16444375,
    "aqua": 65535,
    "aquamarine": 8388564,
    "azure": 15794175,
    "beige": 16119260,
    "bisque": 16770244,
    "black": 0,
    "blanchedalmond": 16772045,
    "blue": 255,
    "blueviolet": 9055202,
    "brown": 10824234,
    "burlywood": 14596231,
    "cadetblue": 6266528,
    "chartreuse": 8388352,
    "chocolate": 13789470,
    "coral": 16744272,
    "cornflowerblue": 6591981,
    "cornsilk": 16775388,
    "crimson": 14423100,
    "cyan": 65535,
    "darkblue": 139,
    "darkcyan": 35723,
    "darkgoldenrod": 12092939,
    "darkgray": 11119017,
    "darkgreen": 25600,
    "darkgrey": 11119017,
    "darkkhaki": 12433259,
    "darkmagenta": 9109643,
    "darkolivegreen": 5597999,
    "darkorange": 16747520,
    "darkorchid": 10040012,
    "darkred": 9109504,
    "darksalmon": 15308410,
    "darkseagreen": 9419919,
    "darkslateblue": 4734347,
    "darkslategray": 3100495,
    "darkslategrey": 3100495,
    "darkturquoise": 52945,
    "darkviolet": 9699539,
    "deeppink": 16716947,
    "deepskyblue": 49151,
    "dimgray": 6908265,
    "dimgrey": 6908265,
    "dodgerblue": 2003199,
    "firebrick": 11674146,
    "floralwhite": 16775920,
    "forestgreen": 2263842,
    "fuchsia": 16711935,
    "gainsboro": 14474460,
    "ghostwhite": 16316671,
    "gold": 16766720,
    "goldenrod": 14329120,
    "gray": 8421504,
    "green": 32768,
    "greenyellow": 11403055,
    "grey": 8421504,
    "honeydew": 15794160,
    "hotpink": 16738740,
    "indianred": 13458524,
    "indigo": 4915330,
    "ivory": 16777200,
    "khaki": 15787660,
    "lavender": 15132410,
    "lavenderblush": 16773365,
    "lawngreen": 8190976,
    "lemonchiffon": 16775885,
    "lightblue": 11393254,
    "lightcoral": 15761536,
    "lightcyan": 14745599,
    "lightgoldenrodyellow": 16448210,
    "lightgray": 13882323,
    "lightgreen": 9498256,
    "lightgrey": 13882323,
    "lightpink": 16758465,
    "lightsalmon": 16752762,
    "lightseagreen": 2142890,
    "lightskyblue": 8900346,
    "lightslategray": 7833753,
    "lightslategrey": 7833753,
    "lightsteelblue": 11584734,
    "lightyellow": 16777184,
    "lime": 65280,
    "limegreen": 3329330,
    "linen": 16445670,
    "magenta": 16711935,
    "maroon": 8388608,
    "mediumaquamarine": 6737322,
    "mediumblue": 205,
    "mediumorchid": 12211667,
    "mediumpurple": 9662683,
    "mediumseagreen": 3978097,
    "mediumslateblue": 8087790,
    "mediumspringgreen": 64154,
    "mediumturquoise": 4772300,
    "mediumvioletred": 13047173,
    "midnightblue": 1644912,
    "mintcream": 16121850,
    "mistyrose": 16770273,
    "moccasin": 16770229,
    "navajowhite": 16768685,
    "navy": 128,
    "oldlace": 16643558,
    "olive": 8421376,
    "olivedrab": 7048739,
    "orange": 16753920,
    "orangered": 16729344,
    "orchid": 14315734,
    "palegoldenrod": 15657130,
    "palegreen": 10025880,
    "paleturquoise": 11529966,
    "palevioletred": 14381203,
    "papayawhip": 16773077,
    "peachpuff": 16767673,
    "peru": 13468991,
    "pink": 16761035,
    "plum": 14524637,
    "powderblue": 11591910,
    "purple": 8388736,
    "rebeccapurple": 6697881,
    "red": 16711680,
    "rosybrown": 12357519,
    "royalblue": 4286945,
    "saddlebrown": 9127187,
    "salmon": 16416882,
    "sandybrown": 16032864,
    "seagreen": 3050327,
    "seashell": 16774638,
    "sienna": 10506797,
    "silver": 12632256,
    "skyblue": 8900331,
    "slateblue": 6970061,
    "slategray": 7372944,
    "slategrey": 7372944,
    "snow": 16775930,
    "springgreen": 65407,
    "steelblue": 4620980,
    "tan": 13808780,
    "teal": 32896,
    "thistle": 14204888,
    "tomato": 16737095,
    "turquoise": 4251856,
    "violet": 15631086,
    "wheat": 16113331,
    "white": 16777215,
    "whitesmoke": 16119285,
    "yellow": 16776960,
    "yellowgreen": 10145074
  };
  const _hslA = { h: 0, s: 0, l: 0 };
  const _hslB = { h: 0, s: 0, l: 0 };
  function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * 6 * (2 / 3 - t);
    return p;
  }
  class Color {
    constructor(r, g, b) {
      this.isColor = true;
      this.r = 1;
      this.g = 1;
      this.b = 1;
      return this.set(r, g, b);
    }
    set(r, g, b) {
      if (g === void 0 && b === void 0) {
        const value = r;
        if (value && value.isColor) {
          this.copy(value);
        } else if (typeof value === "number") {
          this.setHex(value);
        } else if (typeof value === "string") {
          this.setStyle(value);
        }
      } else {
        this.setRGB(r, g, b);
      }
      return this;
    }
    setScalar(scalar) {
      this.r = scalar;
      this.g = scalar;
      this.b = scalar;
      return this;
    }
    setHex(hex, colorSpace = SRGBColorSpace) {
      hex = Math.floor(hex);
      this.r = (hex >> 16 & 255) / 255;
      this.g = (hex >> 8 & 255) / 255;
      this.b = (hex & 255) / 255;
      ColorManagement.toWorkingColorSpace(this, colorSpace);
      return this;
    }
    setRGB(r, g, b, colorSpace = ColorManagement.workingColorSpace) {
      this.r = r;
      this.g = g;
      this.b = b;
      ColorManagement.toWorkingColorSpace(this, colorSpace);
      return this;
    }
    setHSL(h, s, l, colorSpace = ColorManagement.workingColorSpace) {
      h = euclideanModulo(h, 1);
      s = clamp$1(s, 0, 1);
      l = clamp$1(l, 0, 1);
      if (s === 0) {
        this.r = this.g = this.b = l;
      } else {
        const p = l <= 0.5 ? l * (1 + s) : l + s - l * s;
        const q = 2 * l - p;
        this.r = hue2rgb(q, p, h + 1 / 3);
        this.g = hue2rgb(q, p, h);
        this.b = hue2rgb(q, p, h - 1 / 3);
      }
      ColorManagement.toWorkingColorSpace(this, colorSpace);
      return this;
    }
    setStyle(style, colorSpace = SRGBColorSpace) {
      function handleAlpha(string) {
        if (string === void 0) return;
        if (parseFloat(string) < 1) {
          console.warn("THREE.Color: Alpha component of " + style + " will be ignored.");
        }
      }
      let m;
      if (m = /^(\w+)\(([^\)]*)\)/.exec(style)) {
        let color2;
        const name = m[1];
        const components = m[2];
        switch (name) {
          case "rgb":
          case "rgba":
            if (color2 = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
              handleAlpha(color2[4]);
              return this.setRGB(
                Math.min(255, parseInt(color2[1], 10)) / 255,
                Math.min(255, parseInt(color2[2], 10)) / 255,
                Math.min(255, parseInt(color2[3], 10)) / 255,
                colorSpace
              );
            }
            if (color2 = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
              handleAlpha(color2[4]);
              return this.setRGB(
                Math.min(100, parseInt(color2[1], 10)) / 100,
                Math.min(100, parseInt(color2[2], 10)) / 100,
                Math.min(100, parseInt(color2[3], 10)) / 100,
                colorSpace
              );
            }
            break;
          case "hsl":
          case "hsla":
            if (color2 = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
              handleAlpha(color2[4]);
              return this.setHSL(
                parseFloat(color2[1]) / 360,
                parseFloat(color2[2]) / 100,
                parseFloat(color2[3]) / 100,
                colorSpace
              );
            }
            break;
          default:
            console.warn("THREE.Color: Unknown color model " + style);
        }
      } else if (m = /^\#([A-Fa-f\d]+)$/.exec(style)) {
        const hex = m[1];
        const size = hex.length;
        if (size === 3) {
          return this.setRGB(
            parseInt(hex.charAt(0), 16) / 15,
            parseInt(hex.charAt(1), 16) / 15,
            parseInt(hex.charAt(2), 16) / 15,
            colorSpace
          );
        } else if (size === 6) {
          return this.setHex(parseInt(hex, 16), colorSpace);
        } else {
          console.warn("THREE.Color: Invalid hex color " + style);
        }
      } else if (style && style.length > 0) {
        return this.setColorName(style, colorSpace);
      }
      return this;
    }
    setColorName(style, colorSpace = SRGBColorSpace) {
      const hex = _colorKeywords[style.toLowerCase()];
      if (hex !== void 0) {
        this.setHex(hex, colorSpace);
      } else {
        console.warn("THREE.Color: Unknown color " + style);
      }
      return this;
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(color2) {
      this.r = color2.r;
      this.g = color2.g;
      this.b = color2.b;
      return this;
    }
    copySRGBToLinear(color2) {
      this.r = SRGBToLinear(color2.r);
      this.g = SRGBToLinear(color2.g);
      this.b = SRGBToLinear(color2.b);
      return this;
    }
    copyLinearToSRGB(color2) {
      this.r = LinearToSRGB(color2.r);
      this.g = LinearToSRGB(color2.g);
      this.b = LinearToSRGB(color2.b);
      return this;
    }
    convertSRGBToLinear() {
      this.copySRGBToLinear(this);
      return this;
    }
    convertLinearToSRGB() {
      this.copyLinearToSRGB(this);
      return this;
    }
    getHex(colorSpace = SRGBColorSpace) {
      ColorManagement.fromWorkingColorSpace(_color.copy(this), colorSpace);
      return Math.round(clamp$1(_color.r * 255, 0, 255)) * 65536 + Math.round(clamp$1(_color.g * 255, 0, 255)) * 256 + Math.round(clamp$1(_color.b * 255, 0, 255));
    }
    getHexString(colorSpace = SRGBColorSpace) {
      return ("000000" + this.getHex(colorSpace).toString(16)).slice(-6);
    }
    getHSL(target, colorSpace = ColorManagement.workingColorSpace) {
      ColorManagement.fromWorkingColorSpace(_color.copy(this), colorSpace);
      const r = _color.r, g = _color.g, b = _color.b;
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let hue, saturation;
      const lightness = (min + max) / 2;
      if (min === max) {
        hue = 0;
        saturation = 0;
      } else {
        const delta = max - min;
        saturation = lightness <= 0.5 ? delta / (max + min) : delta / (2 - max - min);
        switch (max) {
          case r:
            hue = (g - b) / delta + (g < b ? 6 : 0);
            break;
          case g:
            hue = (b - r) / delta + 2;
            break;
          case b:
            hue = (r - g) / delta + 4;
            break;
        }
        hue /= 6;
      }
      target.h = hue;
      target.s = saturation;
      target.l = lightness;
      return target;
    }
    getRGB(target, colorSpace = ColorManagement.workingColorSpace) {
      ColorManagement.fromWorkingColorSpace(_color.copy(this), colorSpace);
      target.r = _color.r;
      target.g = _color.g;
      target.b = _color.b;
      return target;
    }
    getStyle(colorSpace = SRGBColorSpace) {
      ColorManagement.fromWorkingColorSpace(_color.copy(this), colorSpace);
      const r = _color.r, g = _color.g, b = _color.b;
      if (colorSpace !== SRGBColorSpace) {
        return `color(${colorSpace} ${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)})`;
      }
      return `rgb(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)})`;
    }
    offsetHSL(h, s, l) {
      this.getHSL(_hslA);
      return this.setHSL(_hslA.h + h, _hslA.s + s, _hslA.l + l);
    }
    add(color2) {
      this.r += color2.r;
      this.g += color2.g;
      this.b += color2.b;
      return this;
    }
    addColors(color1, color2) {
      this.r = color1.r + color2.r;
      this.g = color1.g + color2.g;
      this.b = color1.b + color2.b;
      return this;
    }
    addScalar(s) {
      this.r += s;
      this.g += s;
      this.b += s;
      return this;
    }
    sub(color2) {
      this.r = Math.max(0, this.r - color2.r);
      this.g = Math.max(0, this.g - color2.g);
      this.b = Math.max(0, this.b - color2.b);
      return this;
    }
    multiply(color2) {
      this.r *= color2.r;
      this.g *= color2.g;
      this.b *= color2.b;
      return this;
    }
    multiplyScalar(s) {
      this.r *= s;
      this.g *= s;
      this.b *= s;
      return this;
    }
    lerp(color2, alpha) {
      this.r += (color2.r - this.r) * alpha;
      this.g += (color2.g - this.g) * alpha;
      this.b += (color2.b - this.b) * alpha;
      return this;
    }
    lerpColors(color1, color2, alpha) {
      this.r = color1.r + (color2.r - color1.r) * alpha;
      this.g = color1.g + (color2.g - color1.g) * alpha;
      this.b = color1.b + (color2.b - color1.b) * alpha;
      return this;
    }
    lerpHSL(color2, alpha) {
      this.getHSL(_hslA);
      color2.getHSL(_hslB);
      const h = lerp(_hslA.h, _hslB.h, alpha);
      const s = lerp(_hslA.s, _hslB.s, alpha);
      const l = lerp(_hslA.l, _hslB.l, alpha);
      this.setHSL(h, s, l);
      return this;
    }
    setFromVector3(v) {
      this.r = v.x;
      this.g = v.y;
      this.b = v.z;
      return this;
    }
    applyMatrix3(m) {
      const r = this.r, g = this.g, b = this.b;
      const e = m.elements;
      this.r = e[0] * r + e[3] * g + e[6] * b;
      this.g = e[1] * r + e[4] * g + e[7] * b;
      this.b = e[2] * r + e[5] * g + e[8] * b;
      return this;
    }
    equals(c) {
      return c.r === this.r && c.g === this.g && c.b === this.b;
    }
    fromArray(array, offset = 0) {
      this.r = array[offset];
      this.g = array[offset + 1];
      this.b = array[offset + 2];
      return this;
    }
    toArray(array = [], offset = 0) {
      array[offset] = this.r;
      array[offset + 1] = this.g;
      array[offset + 2] = this.b;
      return array;
    }
    fromBufferAttribute(attribute2, index) {
      this.r = attribute2.getX(index);
      this.g = attribute2.getY(index);
      this.b = attribute2.getZ(index);
      return this;
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r;
      yield this.g;
      yield this.b;
    }
  }
  const _color = /* @__PURE__ */ new Color();
  Color.NAMES = _colorKeywords;
  const _vector$9 = /* @__PURE__ */ new Vector3();
  const _vector2$1 = /* @__PURE__ */ new Vector2();
  class BufferAttribute {
    constructor(array, itemSize, normalized = false) {
      if (Array.isArray(array)) {
        throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      }
      this.isBufferAttribute = true;
      this.name = "";
      this.array = array;
      this.itemSize = itemSize;
      this.count = array !== void 0 ? array.length / itemSize : 0;
      this.normalized = normalized;
      this.usage = StaticDrawUsage;
      this.updateRanges = [];
      this.gpuType = FloatType;
      this.version = 0;
    }
    onUploadCallback() {
    }
    set needsUpdate(value) {
      if (value === true) this.version++;
    }
    setUsage(value) {
      this.usage = value;
      return this;
    }
    addUpdateRange(start, count) {
      this.updateRanges.push({ start, count });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(source) {
      this.name = source.name;
      this.array = new source.array.constructor(source.array);
      this.itemSize = source.itemSize;
      this.count = source.count;
      this.normalized = source.normalized;
      this.usage = source.usage;
      this.gpuType = source.gpuType;
      return this;
    }
    copyAt(index1, attribute2, index2) {
      index1 *= this.itemSize;
      index2 *= attribute2.itemSize;
      for (let i = 0, l = this.itemSize; i < l; i++) {
        this.array[index1 + i] = attribute2.array[index2 + i];
      }
      return this;
    }
    copyArray(array) {
      this.array.set(array);
      return this;
    }
    applyMatrix3(m) {
      if (this.itemSize === 2) {
        for (let i = 0, l = this.count; i < l; i++) {
          _vector2$1.fromBufferAttribute(this, i);
          _vector2$1.applyMatrix3(m);
          this.setXY(i, _vector2$1.x, _vector2$1.y);
        }
      } else if (this.itemSize === 3) {
        for (let i = 0, l = this.count; i < l; i++) {
          _vector$9.fromBufferAttribute(this, i);
          _vector$9.applyMatrix3(m);
          this.setXYZ(i, _vector$9.x, _vector$9.y, _vector$9.z);
        }
      }
      return this;
    }
    applyMatrix4(m) {
      for (let i = 0, l = this.count; i < l; i++) {
        _vector$9.fromBufferAttribute(this, i);
        _vector$9.applyMatrix4(m);
        this.setXYZ(i, _vector$9.x, _vector$9.y, _vector$9.z);
      }
      return this;
    }
    applyNormalMatrix(m) {
      for (let i = 0, l = this.count; i < l; i++) {
        _vector$9.fromBufferAttribute(this, i);
        _vector$9.applyNormalMatrix(m);
        this.setXYZ(i, _vector$9.x, _vector$9.y, _vector$9.z);
      }
      return this;
    }
    transformDirection(m) {
      for (let i = 0, l = this.count; i < l; i++) {
        _vector$9.fromBufferAttribute(this, i);
        _vector$9.transformDirection(m);
        this.setXYZ(i, _vector$9.x, _vector$9.y, _vector$9.z);
      }
      return this;
    }
    set(value, offset = 0) {
      this.array.set(value, offset);
      return this;
    }
    getComponent(index, component) {
      let value = this.array[index * this.itemSize + component];
      if (this.normalized) value = denormalize(value, this.array);
      return value;
    }
    setComponent(index, component, value) {
      if (this.normalized) value = normalize$1(value, this.array);
      this.array[index * this.itemSize + component] = value;
      return this;
    }
    getX(index) {
      let x = this.array[index * this.itemSize];
      if (this.normalized) x = denormalize(x, this.array);
      return x;
    }
    setX(index, x) {
      if (this.normalized) x = normalize$1(x, this.array);
      this.array[index * this.itemSize] = x;
      return this;
    }
    getY(index) {
      let y = this.array[index * this.itemSize + 1];
      if (this.normalized) y = denormalize(y, this.array);
      return y;
    }
    setY(index, y) {
      if (this.normalized) y = normalize$1(y, this.array);
      this.array[index * this.itemSize + 1] = y;
      return this;
    }
    getZ(index) {
      let z = this.array[index * this.itemSize + 2];
      if (this.normalized) z = denormalize(z, this.array);
      return z;
    }
    setZ(index, z) {
      if (this.normalized) z = normalize$1(z, this.array);
      this.array[index * this.itemSize + 2] = z;
      return this;
    }
    getW(index) {
      let w = this.array[index * this.itemSize + 3];
      if (this.normalized) w = denormalize(w, this.array);
      return w;
    }
    setW(index, w) {
      if (this.normalized) w = normalize$1(w, this.array);
      this.array[index * this.itemSize + 3] = w;
      return this;
    }
    setXY(index, x, y) {
      index *= this.itemSize;
      if (this.normalized) {
        x = normalize$1(x, this.array);
        y = normalize$1(y, this.array);
      }
      this.array[index + 0] = x;
      this.array[index + 1] = y;
      return this;
    }
    setXYZ(index, x, y, z) {
      index *= this.itemSize;
      if (this.normalized) {
        x = normalize$1(x, this.array);
        y = normalize$1(y, this.array);
        z = normalize$1(z, this.array);
      }
      this.array[index + 0] = x;
      this.array[index + 1] = y;
      this.array[index + 2] = z;
      return this;
    }
    setXYZW(index, x, y, z, w) {
      index *= this.itemSize;
      if (this.normalized) {
        x = normalize$1(x, this.array);
        y = normalize$1(y, this.array);
        z = normalize$1(z, this.array);
        w = normalize$1(w, this.array);
      }
      this.array[index + 0] = x;
      this.array[index + 1] = y;
      this.array[index + 2] = z;
      this.array[index + 3] = w;
      return this;
    }
    onUpload(callback) {
      this.onUploadCallback = callback;
      return this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      const data = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.from(this.array),
        normalized: this.normalized
      };
      if (this.name !== "") data.name = this.name;
      if (this.usage !== StaticDrawUsage) data.usage = this.usage;
      return data;
    }
  }
  class Uint16BufferAttribute extends BufferAttribute {
    constructor(array, itemSize, normalized) {
      super(new Uint16Array(array), itemSize, normalized);
    }
  }
  class Uint32BufferAttribute extends BufferAttribute {
    constructor(array, itemSize, normalized) {
      super(new Uint32Array(array), itemSize, normalized);
    }
  }
  class Float32BufferAttribute extends BufferAttribute {
    constructor(array, itemSize, normalized) {
      super(new Float32Array(array), itemSize, normalized);
    }
  }
  let _id$3 = 0;
  const _m1$2 = /* @__PURE__ */ new Matrix4();
  const _obj = /* @__PURE__ */ new Object3D();
  const _offset = /* @__PURE__ */ new Vector3();
  const _box$2 = /* @__PURE__ */ new Box3();
  const _boxMorphTargets = /* @__PURE__ */ new Box3();
  const _vector$8 = /* @__PURE__ */ new Vector3();
  class BufferGeometry extends EventDispatcher {
    constructor() {
      super();
      this.isBufferGeometry = true;
      Object.defineProperty(this, "id", { value: _id$3++ });
      this.uuid = generateUUID();
      this.name = "";
      this.type = "BufferGeometry";
      this.index = null;
      this.attributes = {};
      this.morphAttributes = {};
      this.morphTargetsRelative = false;
      this.groups = [];
      this.boundingBox = null;
      this.boundingSphere = null;
      this.drawRange = { start: 0, count: Infinity };
      this.userData = {};
    }
    getIndex() {
      return this.index;
    }
    setIndex(index) {
      if (Array.isArray(index)) {
        this.index = new (arrayNeedsUint32(index) ? Uint32BufferAttribute : Uint16BufferAttribute)(index, 1);
      } else {
        this.index = index;
      }
      return this;
    }
    getAttribute(name) {
      return this.attributes[name];
    }
    setAttribute(name, attribute2) {
      this.attributes[name] = attribute2;
      return this;
    }
    deleteAttribute(name) {
      delete this.attributes[name];
      return this;
    }
    hasAttribute(name) {
      return this.attributes[name] !== void 0;
    }
    addGroup(start, count, materialIndex = 0) {
      this.groups.push({
        start,
        count,
        materialIndex
      });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(start, count) {
      this.drawRange.start = start;
      this.drawRange.count = count;
    }
    applyMatrix4(matrix) {
      const position = this.attributes.position;
      if (position !== void 0) {
        position.applyMatrix4(matrix);
        position.needsUpdate = true;
      }
      const normal = this.attributes.normal;
      if (normal !== void 0) {
        const normalMatrix = new Matrix3().getNormalMatrix(matrix);
        normal.applyNormalMatrix(normalMatrix);
        normal.needsUpdate = true;
      }
      const tangent = this.attributes.tangent;
      if (tangent !== void 0) {
        tangent.transformDirection(matrix);
        tangent.needsUpdate = true;
      }
      if (this.boundingBox !== null) {
        this.computeBoundingBox();
      }
      if (this.boundingSphere !== null) {
        this.computeBoundingSphere();
      }
      return this;
    }
    applyQuaternion(q) {
      _m1$2.makeRotationFromQuaternion(q);
      this.applyMatrix4(_m1$2);
      return this;
    }
    rotateX(angle) {
      _m1$2.makeRotationX(angle);
      this.applyMatrix4(_m1$2);
      return this;
    }
    rotateY(angle) {
      _m1$2.makeRotationY(angle);
      this.applyMatrix4(_m1$2);
      return this;
    }
    rotateZ(angle) {
      _m1$2.makeRotationZ(angle);
      this.applyMatrix4(_m1$2);
      return this;
    }
    translate(x, y, z) {
      _m1$2.makeTranslation(x, y, z);
      this.applyMatrix4(_m1$2);
      return this;
    }
    scale(x, y, z) {
      _m1$2.makeScale(x, y, z);
      this.applyMatrix4(_m1$2);
      return this;
    }
    lookAt(vector) {
      _obj.lookAt(vector);
      _obj.updateMatrix();
      this.applyMatrix4(_obj.matrix);
      return this;
    }
    center() {
      this.computeBoundingBox();
      this.boundingBox.getCenter(_offset).negate();
      this.translate(_offset.x, _offset.y, _offset.z);
      return this;
    }
    setFromPoints(points) {
      const position = [];
      for (let i = 0, l = points.length; i < l; i++) {
        const point = points[i];
        position.push(point.x, point.y, point.z || 0);
      }
      this.setAttribute("position", new Float32BufferAttribute(position, 3));
      return this;
    }
    computeBoundingBox() {
      if (this.boundingBox === null) {
        this.boundingBox = new Box3();
      }
      const position = this.attributes.position;
      const morphAttributesPosition = this.morphAttributes.position;
      if (position && position.isGLBufferAttribute) {
        console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this);
        this.boundingBox.set(
          new Vector3(-Infinity, -Infinity, -Infinity),
          new Vector3(Infinity, Infinity, Infinity)
        );
        return;
      }
      if (position !== void 0) {
        this.boundingBox.setFromBufferAttribute(position);
        if (morphAttributesPosition) {
          for (let i = 0, il = morphAttributesPosition.length; i < il; i++) {
            const morphAttribute = morphAttributesPosition[i];
            _box$2.setFromBufferAttribute(morphAttribute);
            if (this.morphTargetsRelative) {
              _vector$8.addVectors(this.boundingBox.min, _box$2.min);
              this.boundingBox.expandByPoint(_vector$8);
              _vector$8.addVectors(this.boundingBox.max, _box$2.max);
              this.boundingBox.expandByPoint(_vector$8);
            } else {
              this.boundingBox.expandByPoint(_box$2.min);
              this.boundingBox.expandByPoint(_box$2.max);
            }
          }
        }
      } else {
        this.boundingBox.makeEmpty();
      }
      if (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) {
        console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
      }
    }
    computeBoundingSphere() {
      if (this.boundingSphere === null) {
        this.boundingSphere = new Sphere();
      }
      const position = this.attributes.position;
      const morphAttributesPosition = this.morphAttributes.position;
      if (position && position.isGLBufferAttribute) {
        console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this);
        this.boundingSphere.set(new Vector3(), Infinity);
        return;
      }
      if (position) {
        const center = this.boundingSphere.center;
        _box$2.setFromBufferAttribute(position);
        if (morphAttributesPosition) {
          for (let i = 0, il = morphAttributesPosition.length; i < il; i++) {
            const morphAttribute = morphAttributesPosition[i];
            _boxMorphTargets.setFromBufferAttribute(morphAttribute);
            if (this.morphTargetsRelative) {
              _vector$8.addVectors(_box$2.min, _boxMorphTargets.min);
              _box$2.expandByPoint(_vector$8);
              _vector$8.addVectors(_box$2.max, _boxMorphTargets.max);
              _box$2.expandByPoint(_vector$8);
            } else {
              _box$2.expandByPoint(_boxMorphTargets.min);
              _box$2.expandByPoint(_boxMorphTargets.max);
            }
          }
        }
        _box$2.getCenter(center);
        let maxRadiusSq = 0;
        for (let i = 0, il = position.count; i < il; i++) {
          _vector$8.fromBufferAttribute(position, i);
          maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_vector$8));
        }
        if (morphAttributesPosition) {
          for (let i = 0, il = morphAttributesPosition.length; i < il; i++) {
            const morphAttribute = morphAttributesPosition[i];
            const morphTargetsRelative = this.morphTargetsRelative;
            for (let j = 0, jl = morphAttribute.count; j < jl; j++) {
              _vector$8.fromBufferAttribute(morphAttribute, j);
              if (morphTargetsRelative) {
                _offset.fromBufferAttribute(position, j);
                _vector$8.add(_offset);
              }
              maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_vector$8));
            }
          }
        }
        this.boundingSphere.radius = Math.sqrt(maxRadiusSq);
        if (isNaN(this.boundingSphere.radius)) {
          console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
        }
      }
    }
    computeTangents() {
      const index = this.index;
      const attributes = this.attributes;
      if (index === null || attributes.position === void 0 || attributes.normal === void 0 || attributes.uv === void 0) {
        console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
        return;
      }
      const positionAttribute = attributes.position;
      const normalAttribute = attributes.normal;
      const uvAttribute = attributes.uv;
      if (this.hasAttribute("tangent") === false) {
        this.setAttribute("tangent", new BufferAttribute(new Float32Array(4 * positionAttribute.count), 4));
      }
      const tangentAttribute = this.getAttribute("tangent");
      const tan1 = [], tan2 = [];
      for (let i = 0; i < positionAttribute.count; i++) {
        tan1[i] = new Vector3();
        tan2[i] = new Vector3();
      }
      const vA = new Vector3(), vB = new Vector3(), vC = new Vector3(), uvA = new Vector2(), uvB = new Vector2(), uvC = new Vector2(), sdir = new Vector3(), tdir = new Vector3();
      function handleTriangle(a, b, c) {
        vA.fromBufferAttribute(positionAttribute, a);
        vB.fromBufferAttribute(positionAttribute, b);
        vC.fromBufferAttribute(positionAttribute, c);
        uvA.fromBufferAttribute(uvAttribute, a);
        uvB.fromBufferAttribute(uvAttribute, b);
        uvC.fromBufferAttribute(uvAttribute, c);
        vB.sub(vA);
        vC.sub(vA);
        uvB.sub(uvA);
        uvC.sub(uvA);
        const r = 1 / (uvB.x * uvC.y - uvC.x * uvB.y);
        if (!isFinite(r)) return;
        sdir.copy(vB).multiplyScalar(uvC.y).addScaledVector(vC, -uvB.y).multiplyScalar(r);
        tdir.copy(vC).multiplyScalar(uvB.x).addScaledVector(vB, -uvC.x).multiplyScalar(r);
        tan1[a].add(sdir);
        tan1[b].add(sdir);
        tan1[c].add(sdir);
        tan2[a].add(tdir);
        tan2[b].add(tdir);
        tan2[c].add(tdir);
      }
      let groups = this.groups;
      if (groups.length === 0) {
        groups = [{
          start: 0,
          count: index.count
        }];
      }
      for (let i = 0, il = groups.length; i < il; ++i) {
        const group = groups[i];
        const start = group.start;
        const count = group.count;
        for (let j = start, jl = start + count; j < jl; j += 3) {
          handleTriangle(
            index.getX(j + 0),
            index.getX(j + 1),
            index.getX(j + 2)
          );
        }
      }
      const tmp = new Vector3(), tmp2 = new Vector3();
      const n = new Vector3(), n2 = new Vector3();
      function handleVertex(v) {
        n.fromBufferAttribute(normalAttribute, v);
        n2.copy(n);
        const t = tan1[v];
        tmp.copy(t);
        tmp.sub(n.multiplyScalar(n.dot(t))).normalize();
        tmp2.crossVectors(n2, t);
        const test = tmp2.dot(tan2[v]);
        const w = test < 0 ? -1 : 1;
        tangentAttribute.setXYZW(v, tmp.x, tmp.y, tmp.z, w);
      }
      for (let i = 0, il = groups.length; i < il; ++i) {
        const group = groups[i];
        const start = group.start;
        const count = group.count;
        for (let j = start, jl = start + count; j < jl; j += 3) {
          handleVertex(index.getX(j + 0));
          handleVertex(index.getX(j + 1));
          handleVertex(index.getX(j + 2));
        }
      }
    }
    computeVertexNormals() {
      const index = this.index;
      const positionAttribute = this.getAttribute("position");
      if (positionAttribute !== void 0) {
        let normalAttribute = this.getAttribute("normal");
        if (normalAttribute === void 0) {
          normalAttribute = new BufferAttribute(new Float32Array(positionAttribute.count * 3), 3);
          this.setAttribute("normal", normalAttribute);
        } else {
          for (let i = 0, il = normalAttribute.count; i < il; i++) {
            normalAttribute.setXYZ(i, 0, 0, 0);
          }
        }
        const pA = new Vector3(), pB = new Vector3(), pC = new Vector3();
        const nA = new Vector3(), nB = new Vector3(), nC = new Vector3();
        const cb = new Vector3(), ab = new Vector3();
        if (index) {
          for (let i = 0, il = index.count; i < il; i += 3) {
            const vA = index.getX(i + 0);
            const vB = index.getX(i + 1);
            const vC = index.getX(i + 2);
            pA.fromBufferAttribute(positionAttribute, vA);
            pB.fromBufferAttribute(positionAttribute, vB);
            pC.fromBufferAttribute(positionAttribute, vC);
            cb.subVectors(pC, pB);
            ab.subVectors(pA, pB);
            cb.cross(ab);
            nA.fromBufferAttribute(normalAttribute, vA);
            nB.fromBufferAttribute(normalAttribute, vB);
            nC.fromBufferAttribute(normalAttribute, vC);
            nA.add(cb);
            nB.add(cb);
            nC.add(cb);
            normalAttribute.setXYZ(vA, nA.x, nA.y, nA.z);
            normalAttribute.setXYZ(vB, nB.x, nB.y, nB.z);
            normalAttribute.setXYZ(vC, nC.x, nC.y, nC.z);
          }
        } else {
          for (let i = 0, il = positionAttribute.count; i < il; i += 3) {
            pA.fromBufferAttribute(positionAttribute, i + 0);
            pB.fromBufferAttribute(positionAttribute, i + 1);
            pC.fromBufferAttribute(positionAttribute, i + 2);
            cb.subVectors(pC, pB);
            ab.subVectors(pA, pB);
            cb.cross(ab);
            normalAttribute.setXYZ(i + 0, cb.x, cb.y, cb.z);
            normalAttribute.setXYZ(i + 1, cb.x, cb.y, cb.z);
            normalAttribute.setXYZ(i + 2, cb.x, cb.y, cb.z);
          }
        }
        this.normalizeNormals();
        normalAttribute.needsUpdate = true;
      }
    }
    normalizeNormals() {
      const normals = this.attributes.normal;
      for (let i = 0, il = normals.count; i < il; i++) {
        _vector$8.fromBufferAttribute(normals, i);
        _vector$8.normalize();
        normals.setXYZ(i, _vector$8.x, _vector$8.y, _vector$8.z);
      }
    }
    toNonIndexed() {
      function convertBufferAttribute(attribute2, indices2) {
        const array = attribute2.array;
        const itemSize = attribute2.itemSize;
        const normalized = attribute2.normalized;
        const array2 = new array.constructor(indices2.length * itemSize);
        let index = 0, index2 = 0;
        for (let i = 0, l = indices2.length; i < l; i++) {
          if (attribute2.isInterleavedBufferAttribute) {
            index = indices2[i] * attribute2.data.stride + attribute2.offset;
          } else {
            index = indices2[i] * itemSize;
          }
          for (let j = 0; j < itemSize; j++) {
            array2[index2++] = array[index++];
          }
        }
        return new BufferAttribute(array2, itemSize, normalized);
      }
      if (this.index === null) {
        console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.");
        return this;
      }
      const geometry2 = new BufferGeometry();
      const indices = this.index.array;
      const attributes = this.attributes;
      for (const name in attributes) {
        const attribute2 = attributes[name];
        const newAttribute = convertBufferAttribute(attribute2, indices);
        geometry2.setAttribute(name, newAttribute);
      }
      const morphAttributes = this.morphAttributes;
      for (const name in morphAttributes) {
        const morphArray = [];
        const morphAttribute = morphAttributes[name];
        for (let i = 0, il = morphAttribute.length; i < il; i++) {
          const attribute2 = morphAttribute[i];
          const newAttribute = convertBufferAttribute(attribute2, indices);
          morphArray.push(newAttribute);
        }
        geometry2.morphAttributes[name] = morphArray;
      }
      geometry2.morphTargetsRelative = this.morphTargetsRelative;
      const groups = this.groups;
      for (let i = 0, l = groups.length; i < l; i++) {
        const group = groups[i];
        geometry2.addGroup(group.start, group.count, group.materialIndex);
      }
      return geometry2;
    }
    toJSON() {
      const data = {
        metadata: {
          version: 4.6,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON"
        }
      };
      data.uuid = this.uuid;
      data.type = this.type;
      if (this.name !== "") data.name = this.name;
      if (Object.keys(this.userData).length > 0) data.userData = this.userData;
      if (this.parameters !== void 0) {
        const parameters = this.parameters;
        for (const key in parameters) {
          if (parameters[key] !== void 0) data[key] = parameters[key];
        }
        return data;
      }
      data.data = { attributes: {} };
      const index = this.index;
      if (index !== null) {
        data.data.index = {
          type: index.array.constructor.name,
          array: Array.prototype.slice.call(index.array)
        };
      }
      const attributes = this.attributes;
      for (const key in attributes) {
        const attribute2 = attributes[key];
        data.data.attributes[key] = attribute2.toJSON(data.data);
      }
      const morphAttributes = {};
      let hasMorphAttributes = false;
      for (const key in this.morphAttributes) {
        const attributeArray = this.morphAttributes[key];
        const array = [];
        for (let i = 0, il = attributeArray.length; i < il; i++) {
          const attribute2 = attributeArray[i];
          array.push(attribute2.toJSON(data.data));
        }
        if (array.length > 0) {
          morphAttributes[key] = array;
          hasMorphAttributes = true;
        }
      }
      if (hasMorphAttributes) {
        data.data.morphAttributes = morphAttributes;
        data.data.morphTargetsRelative = this.morphTargetsRelative;
      }
      const groups = this.groups;
      if (groups.length > 0) {
        data.data.groups = JSON.parse(JSON.stringify(groups));
      }
      const boundingSphere = this.boundingSphere;
      if (boundingSphere !== null) {
        data.data.boundingSphere = {
          center: boundingSphere.center.toArray(),
          radius: boundingSphere.radius
        };
      }
      return data;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(source) {
      this.index = null;
      this.attributes = {};
      this.morphAttributes = {};
      this.groups = [];
      this.boundingBox = null;
      this.boundingSphere = null;
      const data = {};
      this.name = source.name;
      const index = source.index;
      if (index !== null) {
        this.setIndex(index.clone(data));
      }
      const attributes = source.attributes;
      for (const name in attributes) {
        const attribute2 = attributes[name];
        this.setAttribute(name, attribute2.clone(data));
      }
      const morphAttributes = source.morphAttributes;
      for (const name in morphAttributes) {
        const array = [];
        const morphAttribute = morphAttributes[name];
        for (let i = 0, l = morphAttribute.length; i < l; i++) {
          array.push(morphAttribute[i].clone(data));
        }
        this.morphAttributes[name] = array;
      }
      this.morphTargetsRelative = source.morphTargetsRelative;
      const groups = source.groups;
      for (let i = 0, l = groups.length; i < l; i++) {
        const group = groups[i];
        this.addGroup(group.start, group.count, group.materialIndex);
      }
      const boundingBox2 = source.boundingBox;
      if (boundingBox2 !== null) {
        this.boundingBox = boundingBox2.clone();
      }
      const boundingSphere = source.boundingSphere;
      if (boundingSphere !== null) {
        this.boundingSphere = boundingSphere.clone();
      }
      this.drawRange.start = source.drawRange.start;
      this.drawRange.count = source.drawRange.count;
      this.userData = source.userData;
      return this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }
  const _vector1 = /* @__PURE__ */ new Vector3();
  const _vector2 = /* @__PURE__ */ new Vector3();
  const _normalMatrix = /* @__PURE__ */ new Matrix3();
  class Plane {
    constructor(normal = new Vector3(1, 0, 0), constant = 0) {
      this.isPlane = true;
      this.normal = normal;
      this.constant = constant;
    }
    set(normal, constant) {
      this.normal.copy(normal);
      this.constant = constant;
      return this;
    }
    setComponents(x, y, z, w) {
      this.normal.set(x, y, z);
      this.constant = w;
      return this;
    }
    setFromNormalAndCoplanarPoint(normal, point) {
      this.normal.copy(normal);
      this.constant = -point.dot(this.normal);
      return this;
    }
    setFromCoplanarPoints(a, b, c) {
      const normal = _vector1.subVectors(c, b).cross(_vector2.subVectors(a, b)).normalize();
      this.setFromNormalAndCoplanarPoint(normal, a);
      return this;
    }
    copy(plane) {
      this.normal.copy(plane.normal);
      this.constant = plane.constant;
      return this;
    }
    normalize() {
      const inverseNormalLength = 1 / this.normal.length();
      this.normal.multiplyScalar(inverseNormalLength);
      this.constant *= inverseNormalLength;
      return this;
    }
    negate() {
      this.constant *= -1;
      this.normal.negate();
      return this;
    }
    distanceToPoint(point) {
      return this.normal.dot(point) + this.constant;
    }
    distanceToSphere(sphere) {
      return this.distanceToPoint(sphere.center) - sphere.radius;
    }
    projectPoint(point, target) {
      return target.copy(point).addScaledVector(this.normal, -this.distanceToPoint(point));
    }
    intersectLine(line, target) {
      const direction2 = line.delta(_vector1);
      const denominator = this.normal.dot(direction2);
      if (denominator === 0) {
        if (this.distanceToPoint(line.start) === 0) {
          return target.copy(line.start);
        }
        return null;
      }
      const t = -(line.start.dot(this.normal) + this.constant) / denominator;
      if (t < 0 || t > 1) {
        return null;
      }
      return target.copy(line.start).addScaledVector(direction2, t);
    }
    intersectsLine(line) {
      const startSign = this.distanceToPoint(line.start);
      const endSign = this.distanceToPoint(line.end);
      return startSign < 0 && endSign > 0 || endSign < 0 && startSign > 0;
    }
    intersectsBox(box) {
      return box.intersectsPlane(this);
    }
    intersectsSphere(sphere) {
      return sphere.intersectsPlane(this);
    }
    coplanarPoint(target) {
      return target.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(matrix, optionalNormalMatrix) {
      const normalMatrix = optionalNormalMatrix || _normalMatrix.getNormalMatrix(matrix);
      const referencePoint = this.coplanarPoint(_vector1).applyMatrix4(matrix);
      const normal = this.normal.applyMatrix3(normalMatrix).normalize();
      this.constant = -referencePoint.dot(normal);
      return this;
    }
    translate(offset) {
      this.constant -= offset.dot(this.normal);
      return this;
    }
    equals(plane) {
      return plane.normal.equals(this.normal) && plane.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class DepthTexture extends Texture {
    constructor(width, height, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy, format = DepthFormat) {
      if (format !== DepthFormat && format !== DepthStencilFormat) {
        throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
      }
      if (type === void 0 && format === DepthFormat) type = UnsignedIntType;
      if (type === void 0 && format === DepthStencilFormat) type = UnsignedInt248Type;
      super(null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy);
      this.isDepthTexture = true;
      this.image = { width, height };
      this.magFilter = magFilter !== void 0 ? magFilter : NearestFilter;
      this.minFilter = minFilter !== void 0 ? minFilter : NearestFilter;
      this.flipY = false;
      this.generateMipmaps = false;
      this.compareFunction = null;
    }
    copy(source) {
      super.copy(source);
      this.compareFunction = source.compareFunction;
      return this;
    }
    toJSON(meta) {
      const data = super.toJSON(meta);
      if (this.compareFunction !== null) data.compareFunction = this.compareFunction;
      return data;
    }
  }
  class InterleavedBuffer {
    constructor(array, stride) {
      this.isInterleavedBuffer = true;
      this.array = array;
      this.stride = stride;
      this.count = array !== void 0 ? array.length / stride : 0;
      this.usage = StaticDrawUsage;
      this.updateRanges = [];
      this.version = 0;
      this.uuid = generateUUID();
    }
    onUploadCallback() {
    }
    set needsUpdate(value) {
      if (value === true) this.version++;
    }
    setUsage(value) {
      this.usage = value;
      return this;
    }
    addUpdateRange(start, count) {
      this.updateRanges.push({ start, count });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(source) {
      this.array = new source.array.constructor(source.array);
      this.count = source.count;
      this.stride = source.stride;
      this.usage = source.usage;
      return this;
    }
    copyAt(index1, attribute2, index2) {
      index1 *= this.stride;
      index2 *= attribute2.stride;
      for (let i = 0, l = this.stride; i < l; i++) {
        this.array[index1 + i] = attribute2.array[index2 + i];
      }
      return this;
    }
    set(value, offset = 0) {
      this.array.set(value, offset);
      return this;
    }
    clone(data) {
      if (data.arrayBuffers === void 0) {
        data.arrayBuffers = {};
      }
      if (this.array.buffer._uuid === void 0) {
        this.array.buffer._uuid = generateUUID();
      }
      if (data.arrayBuffers[this.array.buffer._uuid] === void 0) {
        data.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer;
      }
      const array = new this.array.constructor(data.arrayBuffers[this.array.buffer._uuid]);
      const ib = new this.constructor(array, this.stride);
      ib.setUsage(this.usage);
      return ib;
    }
    onUpload(callback) {
      this.onUploadCallback = callback;
      return this;
    }
    toJSON(data) {
      if (data.arrayBuffers === void 0) {
        data.arrayBuffers = {};
      }
      if (this.array.buffer._uuid === void 0) {
        this.array.buffer._uuid = generateUUID();
      }
      if (data.arrayBuffers[this.array.buffer._uuid] === void 0) {
        data.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer));
      }
      return {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride
      };
    }
  }
  const _vector$6 = /* @__PURE__ */ new Vector3();
  class InterleavedBufferAttribute {
    constructor(interleavedBuffer, itemSize, offset, normalized = false) {
      this.isInterleavedBufferAttribute = true;
      this.name = "";
      this.data = interleavedBuffer;
      this.itemSize = itemSize;
      this.offset = offset;
      this.normalized = normalized;
    }
    get count() {
      return this.data.count;
    }
    get array() {
      return this.data.array;
    }
    set needsUpdate(value) {
      this.data.needsUpdate = value;
    }
    applyMatrix4(m) {
      for (let i = 0, l = this.data.count; i < l; i++) {
        _vector$6.fromBufferAttribute(this, i);
        _vector$6.applyMatrix4(m);
        this.setXYZ(i, _vector$6.x, _vector$6.y, _vector$6.z);
      }
      return this;
    }
    applyNormalMatrix(m) {
      for (let i = 0, l = this.count; i < l; i++) {
        _vector$6.fromBufferAttribute(this, i);
        _vector$6.applyNormalMatrix(m);
        this.setXYZ(i, _vector$6.x, _vector$6.y, _vector$6.z);
      }
      return this;
    }
    transformDirection(m) {
      for (let i = 0, l = this.count; i < l; i++) {
        _vector$6.fromBufferAttribute(this, i);
        _vector$6.transformDirection(m);
        this.setXYZ(i, _vector$6.x, _vector$6.y, _vector$6.z);
      }
      return this;
    }
    getComponent(index, component) {
      let value = this.array[index * this.data.stride + this.offset + component];
      if (this.normalized) value = denormalize(value, this.array);
      return value;
    }
    setComponent(index, component, value) {
      if (this.normalized) value = normalize$1(value, this.array);
      this.data.array[index * this.data.stride + this.offset + component] = value;
      return this;
    }
    setX(index, x) {
      if (this.normalized) x = normalize$1(x, this.array);
      this.data.array[index * this.data.stride + this.offset] = x;
      return this;
    }
    setY(index, y) {
      if (this.normalized) y = normalize$1(y, this.array);
      this.data.array[index * this.data.stride + this.offset + 1] = y;
      return this;
    }
    setZ(index, z) {
      if (this.normalized) z = normalize$1(z, this.array);
      this.data.array[index * this.data.stride + this.offset + 2] = z;
      return this;
    }
    setW(index, w) {
      if (this.normalized) w = normalize$1(w, this.array);
      this.data.array[index * this.data.stride + this.offset + 3] = w;
      return this;
    }
    getX(index) {
      let x = this.data.array[index * this.data.stride + this.offset];
      if (this.normalized) x = denormalize(x, this.array);
      return x;
    }
    getY(index) {
      let y = this.data.array[index * this.data.stride + this.offset + 1];
      if (this.normalized) y = denormalize(y, this.array);
      return y;
    }
    getZ(index) {
      let z = this.data.array[index * this.data.stride + this.offset + 2];
      if (this.normalized) z = denormalize(z, this.array);
      return z;
    }
    getW(index) {
      let w = this.data.array[index * this.data.stride + this.offset + 3];
      if (this.normalized) w = denormalize(w, this.array);
      return w;
    }
    setXY(index, x, y) {
      index = index * this.data.stride + this.offset;
      if (this.normalized) {
        x = normalize$1(x, this.array);
        y = normalize$1(y, this.array);
      }
      this.data.array[index + 0] = x;
      this.data.array[index + 1] = y;
      return this;
    }
    setXYZ(index, x, y, z) {
      index = index * this.data.stride + this.offset;
      if (this.normalized) {
        x = normalize$1(x, this.array);
        y = normalize$1(y, this.array);
        z = normalize$1(z, this.array);
      }
      this.data.array[index + 0] = x;
      this.data.array[index + 1] = y;
      this.data.array[index + 2] = z;
      return this;
    }
    setXYZW(index, x, y, z, w) {
      index = index * this.data.stride + this.offset;
      if (this.normalized) {
        x = normalize$1(x, this.array);
        y = normalize$1(y, this.array);
        z = normalize$1(z, this.array);
        w = normalize$1(w, this.array);
      }
      this.data.array[index + 0] = x;
      this.data.array[index + 1] = y;
      this.data.array[index + 2] = z;
      this.data.array[index + 3] = w;
      return this;
    }
    clone(data) {
      if (data === void 0) {
        console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
        const array = [];
        for (let i = 0; i < this.count; i++) {
          const index = i * this.data.stride + this.offset;
          for (let j = 0; j < this.itemSize; j++) {
            array.push(this.data.array[index + j]);
          }
        }
        return new BufferAttribute(new this.array.constructor(array), this.itemSize, this.normalized);
      } else {
        if (data.interleavedBuffers === void 0) {
          data.interleavedBuffers = {};
        }
        if (data.interleavedBuffers[this.data.uuid] === void 0) {
          data.interleavedBuffers[this.data.uuid] = this.data.clone(data);
        }
        return new InterleavedBufferAttribute(data.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
      }
    }
    toJSON(data) {
      if (data === void 0) {
        console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
        const array = [];
        for (let i = 0; i < this.count; i++) {
          const index = i * this.data.stride + this.offset;
          for (let j = 0; j < this.itemSize; j++) {
            array.push(this.data.array[index + j]);
          }
        }
        return {
          itemSize: this.itemSize,
          type: this.array.constructor.name,
          array,
          normalized: this.normalized
        };
      } else {
        if (data.interleavedBuffers === void 0) {
          data.interleavedBuffers = {};
        }
        if (data.interleavedBuffers[this.data.uuid] === void 0) {
          data.interleavedBuffers[this.data.uuid] = this.data.toJSON(data);
        }
        return {
          isInterleavedBufferAttribute: true,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized
        };
      }
    }
  }
  class FramebufferTexture extends Texture {
    constructor(width, height) {
      super({ width, height });
      this.isFramebufferTexture = true;
      this.magFilter = NearestFilter;
      this.minFilter = NearestFilter;
      this.generateMipmaps = false;
      this.needsUpdate = true;
    }
  }
  const _startP = /* @__PURE__ */ new Vector3();
  const _startEnd = /* @__PURE__ */ new Vector3();
  class Line3 {
    constructor(start = new Vector3(), end = new Vector3()) {
      this.start = start;
      this.end = end;
    }
    set(start, end) {
      this.start.copy(start);
      this.end.copy(end);
      return this;
    }
    copy(line) {
      this.start.copy(line.start);
      this.end.copy(line.end);
      return this;
    }
    getCenter(target) {
      return target.addVectors(this.start, this.end).multiplyScalar(0.5);
    }
    delta(target) {
      return target.subVectors(this.end, this.start);
    }
    distanceSq() {
      return this.start.distanceToSquared(this.end);
    }
    distance() {
      return this.start.distanceTo(this.end);
    }
    at(t, target) {
      return this.delta(target).multiplyScalar(t).add(this.start);
    }
    closestPointToPointParameter(point, clampToLine) {
      _startP.subVectors(point, this.start);
      _startEnd.subVectors(this.end, this.start);
      const startEnd2 = _startEnd.dot(_startEnd);
      const startEnd_startP = _startEnd.dot(_startP);
      let t = startEnd_startP / startEnd2;
      if (clampToLine) {
        t = clamp$1(t, 0, 1);
      }
      return t;
    }
    closestPointToPoint(point, clampToLine, target) {
      const t = this.closestPointToPointParameter(point, clampToLine);
      return this.delta(target).multiplyScalar(t).add(this.start);
    }
    applyMatrix4(matrix) {
      this.start.applyMatrix4(matrix);
      this.end.applyMatrix4(matrix);
      return this;
    }
    equals(line) {
      return line.start.equals(this.start) && line.end.equals(this.end);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  function cyrb53(value, seed = 0) {
    let h1 = 3735928559 ^ seed, h2 = 1103547991 ^ seed;
    if (value instanceof Array) {
      for (let i = 0, val; i < value.length; i++) {
        val = value[i];
        h1 = Math.imul(h1 ^ val, 2654435761);
        h2 = Math.imul(h2 ^ val, 1597334677);
      }
    } else {
      for (let i = 0, ch; i < value.length; i++) {
        ch = value.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
      }
    }
    h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507);
    h1 ^= Math.imul(h2 ^ h2 >>> 13, 3266489909);
    h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507);
    h2 ^= Math.imul(h1 ^ h1 >>> 13, 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
  }
  const hash$1 = (...params) => cyrb53(params);
  function getCacheKey(object, force = false) {
    const values = [];
    if (object.isNode === true) {
      values.push(object.id);
      object = object.getSelf();
    }
    for (const { property: property2, childNode } of getNodeChildren(object)) {
      values.push(values, cyrb53(property2.slice(0, -4)), childNode.getCacheKey(force));
    }
    return cyrb53(values);
  }
  function* getNodeChildren(node, toJSON = false) {
    for (const property2 in node) {
      if (property2.startsWith("_") === true) continue;
      const object = node[property2];
      if (Array.isArray(object) === true) {
        for (let i = 0; i < object.length; i++) {
          const child = object[i];
          if (child && (child.isNode === true || toJSON && typeof child.toJSON === "function")) {
            yield { property: property2, index: i, childNode: child };
          }
        }
      } else if (object && object.isNode === true) {
        yield { property: property2, childNode: object };
      } else if (typeof object === "object") {
        for (const subProperty in object) {
          const child = object[subProperty];
          if (child && (child.isNode === true || toJSON && typeof child.toJSON === "function")) {
            yield { property: property2, index: subProperty, childNode: child };
          }
        }
      }
    }
  }
  function getValueType(value) {
    if (value === void 0 || value === null) return null;
    const typeOf = typeof value;
    if (value.isNode === true) {
      return "node";
    } else if (typeOf === "number") {
      return "float";
    } else if (typeOf === "boolean") {
      return "bool";
    } else if (typeOf === "string") {
      return "string";
    } else if (typeOf === "function") {
      return "shader";
    } else if (value.isVector2 === true) {
      return "vec2";
    } else if (value.isVector3 === true) {
      return "vec3";
    } else if (value.isVector4 === true) {
      return "vec4";
    } else if (value.isMatrix3 === true) {
      return "mat3";
    } else if (value.isMatrix4 === true) {
      return "mat4";
    } else if (value.isColor === true) {
      return "color";
    } else if (value instanceof ArrayBuffer) {
      return "ArrayBuffer";
    }
    return null;
  }
  function getValueFromType(type, ...params) {
    const last4 = type ? type.slice(-4) : void 0;
    if (params.length === 1) {
      if (last4 === "vec2") params = [params[0], params[0]];
      else if (last4 === "vec3") params = [params[0], params[0], params[0]];
      else if (last4 === "vec4") params = [params[0], params[0], params[0], params[0]];
    }
    if (type === "color") {
      return new Color(...params);
    } else if (last4 === "vec2") {
      return new Vector2(...params);
    } else if (last4 === "vec3") {
      return new Vector3(...params);
    } else if (last4 === "vec4") {
      return new Vector4(...params);
    } else if (last4 === "mat3") {
      return new Matrix3(...params);
    } else if (last4 === "mat4") {
      return new Matrix4(...params);
    } else if (type === "bool") {
      return params[0] || false;
    } else if (type === "float" || type === "int" || type === "uint") {
      return params[0] || 0;
    } else if (type === "string") {
      return params[0] || "";
    } else if (type === "ArrayBuffer") {
      return base64ToArrayBuffer(params[0]);
    }
    return null;
  }
  function arrayBufferToBase64(arrayBuffer) {
    let chars = "";
    const array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < array.length; i++) {
      chars += String.fromCharCode(array[i]);
    }
    return btoa(chars);
  }
  function base64ToArrayBuffer(base64) {
    return Uint8Array.from(atob(base64), (c) => c.charCodeAt(0)).buffer;
  }
  const NodeShaderStage = {
    VERTEX: "vertex"
  };
  const NodeUpdateType = {
    NONE: "none",
    FRAME: "frame",
    RENDER: "render",
    OBJECT: "object"
  };
  const vectorComponents = ["x", "y", "z", "w"];
  let _nodeId = 0;
  class Node extends EventDispatcher {
    static get type() {
      return "Node";
    }
    constructor(nodeType = null) {
      super();
      this.nodeType = nodeType;
      this.updateType = NodeUpdateType.NONE;
      this.updateBeforeType = NodeUpdateType.NONE;
      this.updateAfterType = NodeUpdateType.NONE;
      this.uuid = MathUtils.generateUUID();
      this.version = 0;
      this._cacheKey = null;
      this._cacheKeyVersion = 0;
      this.global = false;
      this.isNode = true;
      Object.defineProperty(this, "id", { value: _nodeId++ });
    }
    set needsUpdate(value) {
      if (value === true) {
        this.version++;
      }
    }
    get type() {
      return this.constructor.type;
    }
    onUpdate(callback, updateType) {
      this.updateType = updateType;
      this.update = callback.bind(this.getSelf());
      return this;
    }
    onFrameUpdate(callback) {
      return this.onUpdate(callback, NodeUpdateType.FRAME);
    }
    onRenderUpdate(callback) {
      return this.onUpdate(callback, NodeUpdateType.RENDER);
    }
    onObjectUpdate(callback) {
      return this.onUpdate(callback, NodeUpdateType.OBJECT);
    }
    onReference(callback) {
      this.updateReference = callback.bind(this.getSelf());
      return this;
    }
    getSelf() {
      return this.self || this;
    }
    updateReference() {
      return this;
    }
    isGlobal() {
      return this.global;
    }
    *getChildren() {
      for (const { childNode } of getNodeChildren(this)) {
        yield childNode;
      }
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    traverse(callback) {
      callback(this);
      for (const childNode of this.getChildren()) {
        childNode.traverse(callback);
      }
    }
    getCacheKey(force = false) {
      force = force || this.version !== this._cacheKeyVersion;
      if (force === true || this._cacheKey === null) {
        this._cacheKey = getCacheKey(this, force);
        this._cacheKeyVersion = this.version;
      }
      return this._cacheKey;
    }
    getScope() {
      return this;
    }
    getHash() {
      return this.uuid;
    }
    getUpdateType() {
      return this.updateType;
    }
    getUpdateBeforeType() {
      return this.updateBeforeType;
    }
    getUpdateAfterType() {
      return this.updateAfterType;
    }
    getElementType(builder) {
      const type = this.getNodeType(builder);
      const elementType = builder.getElementType(type);
      return elementType;
    }
    getNodeType(builder) {
      const nodeProperties = builder.getNodeProperties(this);
      if (nodeProperties.outputNode) {
        return nodeProperties.outputNode.getNodeType(builder);
      }
      return this.nodeType;
    }
    getShared(builder) {
      const hash = this.getHash(builder);
      const nodeFromHash = builder.getNodeFromHash(hash);
      return nodeFromHash || this;
    }
    setup(builder) {
      const nodeProperties = builder.getNodeProperties(this);
      let index = 0;
      for (const childNode of this.getChildren()) {
        nodeProperties["node" + index++] = childNode;
      }
      return null;
    }
    analyze(builder) {
      const usageCount = builder.increaseUsage(this);
      if (usageCount === 1) {
        const nodeProperties = builder.getNodeProperties(this);
        for (const childNode of Object.values(nodeProperties)) {
          if (childNode && childNode.isNode === true) {
            childNode.build(builder);
          }
        }
      }
    }
    generate(builder, output) {
      const { outputNode } = builder.getNodeProperties(this);
      if (outputNode && outputNode.isNode === true) {
        return outputNode.build(builder, output);
      }
    }
    updateBefore() {
      console.warn("Abstract function.");
    }
    updateAfter() {
      console.warn("Abstract function.");
    }
    update() {
      console.warn("Abstract function.");
    }
    build(builder, output = null) {
      const refNode = this.getShared(builder);
      if (this !== refNode) {
        return refNode.build(builder, output);
      }
      builder.addNode(this);
      builder.addChain(this);
      let result = null;
      const buildStage = builder.getBuildStage();
      if (buildStage === "setup") {
        this.updateReference(builder);
        const properties = builder.getNodeProperties(this);
        if (properties.initialized !== true) {
          const stackNodesBeforeSetup = builder.stack.nodes.length;
          properties.initialized = true;
          properties.outputNode = this.setup(builder);
          if (properties.outputNode !== null && builder.stack.nodes.length !== stackNodesBeforeSetup) ;
          for (const childNode of Object.values(properties)) {
            if (childNode && childNode.isNode === true) {
              childNode.build(builder);
            }
          }
        }
      } else if (buildStage === "analyze") {
        this.analyze(builder);
      } else if (buildStage === "generate") {
        const isGenerateOnce = this.generate.length === 1;
        if (isGenerateOnce) {
          const type = this.getNodeType(builder);
          const nodeData = builder.getDataFromNode(this);
          result = nodeData.snippet;
          if (result === void 0) {
            result = this.generate(builder) || "";
            nodeData.snippet = result;
          } else if (nodeData.flowCodes !== void 0 && builder.context.nodeBlock !== void 0) {
            builder.addFlowCodeHierarchy(this, builder.context.nodeBlock);
          }
          result = builder.format(result, type, output);
        } else {
          result = this.generate(builder, output) || "";
        }
      }
      builder.removeChain(this);
      return result;
    }
    getSerializeChildren() {
      return getNodeChildren(this);
    }
    serialize(json) {
      const nodeChildren = this.getSerializeChildren();
      const inputNodes = {};
      for (const { property: property2, index, childNode } of nodeChildren) {
        if (index !== void 0) {
          if (inputNodes[property2] === void 0) {
            inputNodes[property2] = Number.isInteger(index) ? [] : {};
          }
          inputNodes[property2][index] = childNode.toJSON(json.meta).uuid;
        } else {
          inputNodes[property2] = childNode.toJSON(json.meta).uuid;
        }
      }
      if (Object.keys(inputNodes).length > 0) {
        json.inputNodes = inputNodes;
      }
    }
    deserialize(json) {
      if (json.inputNodes !== void 0) {
        const nodes = json.meta.nodes;
        for (const property2 in json.inputNodes) {
          if (Array.isArray(json.inputNodes[property2])) {
            const inputArray = [];
            for (const uuid of json.inputNodes[property2]) {
              inputArray.push(nodes[uuid]);
            }
            this[property2] = inputArray;
          } else if (typeof json.inputNodes[property2] === "object") {
            const inputObject = {};
            for (const subProperty in json.inputNodes[property2]) {
              const uuid = json.inputNodes[property2][subProperty];
              inputObject[subProperty] = nodes[uuid];
            }
            this[property2] = inputObject;
          } else {
            const uuid = json.inputNodes[property2];
            this[property2] = nodes[uuid];
          }
        }
      }
    }
    toJSON(meta) {
      const { uuid, type } = this;
      const isRoot = meta === void 0 || typeof meta === "string";
      if (isRoot) {
        meta = {
          textures: {},
          images: {},
          nodes: {}
        };
      }
      let data = meta.nodes[uuid];
      if (data === void 0) {
        data = {
          uuid,
          type,
          meta,
          metadata: {
            version: 4.6,
            type: "Node",
            generator: "Node.toJSON"
          }
        };
        if (isRoot !== true) meta.nodes[data.uuid] = data;
        this.serialize(data);
        delete data.meta;
      }
      function extractFromCache(cache2) {
        const values = [];
        for (const key in cache2) {
          const data2 = cache2[key];
          delete data2.metadata;
          values.push(data2);
        }
        return values;
      }
      if (isRoot) {
        const textures = extractFromCache(meta.textures);
        const images = extractFromCache(meta.images);
        const nodes = extractFromCache(meta.nodes);
        if (textures.length > 0) data.textures = textures;
        if (images.length > 0) data.images = images;
        if (nodes.length > 0) data.nodes = nodes;
      }
      return data;
    }
  }
  class ArrayElementNode extends Node {
    static get type() {
      return "ArrayElementNode";
    }
    // @TODO: If extending from TempNode it breaks webgpu_compute
    constructor(node, indexNode) {
      super();
      this.node = node;
      this.indexNode = indexNode;
      this.isArrayElementNode = true;
    }
    getNodeType(builder) {
      return this.node.getElementType(builder);
    }
    generate(builder) {
      const nodeSnippet = this.node.build(builder);
      const indexSnippet = this.indexNode.build(builder, "uint");
      return `${nodeSnippet}[ ${indexSnippet} ]`;
    }
  }
  class ConvertNode extends Node {
    static get type() {
      return "ConvertNode";
    }
    constructor(node, convertTo) {
      super();
      this.node = node;
      this.convertTo = convertTo;
    }
    getNodeType(builder) {
      const requestType = this.node.getNodeType(builder);
      let convertTo = null;
      for (const overloadingType of this.convertTo.split("|")) {
        if (convertTo === null || builder.getTypeLength(requestType) === builder.getTypeLength(overloadingType)) {
          convertTo = overloadingType;
        }
      }
      return convertTo;
    }
    serialize(data) {
      super.serialize(data);
      data.convertTo = this.convertTo;
    }
    deserialize(data) {
      super.deserialize(data);
      this.convertTo = data.convertTo;
    }
    generate(builder, output) {
      const node = this.node;
      const type = this.getNodeType(builder);
      const snippet = node.build(builder, type);
      return builder.format(snippet, type, output);
    }
  }
  class TempNode extends Node {
    static get type() {
      return "TempNode";
    }
    constructor(type) {
      super(type);
      this.isTempNode = true;
    }
    hasDependencies(builder) {
      return builder.getDataFromNode(this).usageCount > 1;
    }
    build(builder, output) {
      const buildStage = builder.getBuildStage();
      if (buildStage === "generate") {
        const type = builder.getVectorType(this.getNodeType(builder, output));
        const nodeData = builder.getDataFromNode(this);
        if (nodeData.propertyName !== void 0) {
          return builder.format(nodeData.propertyName, type, output);
        } else if (type !== "void" && output !== "void" && this.hasDependencies(builder)) {
          const snippet = super.build(builder, type);
          const nodeVar = builder.getVarFromNode(this, null, type);
          const propertyName = builder.getPropertyName(nodeVar);
          builder.addLineFlowCode(`${propertyName} = ${snippet}`, this);
          nodeData.snippet = snippet;
          nodeData.propertyName = propertyName;
          return builder.format(nodeData.propertyName, type, output);
        }
      }
      return super.build(builder, output);
    }
  }
  class JoinNode extends TempNode {
    static get type() {
      return "JoinNode";
    }
    constructor(nodes = [], nodeType = null) {
      super(nodeType);
      this.nodes = nodes;
    }
    getNodeType(builder) {
      if (this.nodeType !== null) {
        return builder.getVectorType(this.nodeType);
      }
      return builder.getTypeFromLength(this.nodes.reduce((count, cur) => count + builder.getTypeLength(cur.getNodeType(builder)), 0));
    }
    generate(builder, output) {
      const type = this.getNodeType(builder);
      const nodes = this.nodes;
      const primitiveType = builder.getComponentType(type);
      const snippetValues = [];
      for (const input of nodes) {
        let inputSnippet = input.build(builder);
        const inputPrimitiveType = builder.getComponentType(input.getNodeType(builder));
        if (inputPrimitiveType !== primitiveType) {
          inputSnippet = builder.format(inputSnippet, inputPrimitiveType, primitiveType);
        }
        snippetValues.push(inputSnippet);
      }
      const snippet = `${builder.getType(type)}( ${snippetValues.join(", ")} )`;
      return builder.format(snippet, type, output);
    }
  }
  const stringVectorComponents = vectorComponents.join("");
  class SplitNode extends Node {
    static get type() {
      return "SplitNode";
    }
    constructor(node, components = "x") {
      super();
      this.node = node;
      this.components = components;
      this.isSplitNode = true;
    }
    getVectorLength() {
      let vectorLength = this.components.length;
      for (const c of this.components) {
        vectorLength = Math.max(vectorComponents.indexOf(c) + 1, vectorLength);
      }
      return vectorLength;
    }
    getComponentType(builder) {
      return builder.getComponentType(this.node.getNodeType(builder));
    }
    getNodeType(builder) {
      return builder.getTypeFromLength(this.components.length, this.getComponentType(builder));
    }
    generate(builder, output) {
      const node = this.node;
      const nodeTypeLength = builder.getTypeLength(node.getNodeType(builder));
      let snippet = null;
      if (nodeTypeLength > 1) {
        let type = null;
        const componentsLength = this.getVectorLength();
        if (componentsLength >= nodeTypeLength) {
          type = builder.getTypeFromLength(this.getVectorLength(), this.getComponentType(builder));
        }
        const nodeSnippet = node.build(builder, type);
        if (this.components.length === nodeTypeLength && this.components === stringVectorComponents.slice(0, this.components.length)) {
          snippet = builder.format(nodeSnippet, type, output);
        } else {
          snippet = builder.format(`${nodeSnippet}.${this.components}`, this.getNodeType(builder), output);
        }
      } else {
        snippet = node.build(builder, output);
      }
      return snippet;
    }
    serialize(data) {
      super.serialize(data);
      data.components = this.components;
    }
    deserialize(data) {
      super.deserialize(data);
      this.components = data.components;
    }
  }
  class SetNode extends TempNode {
    static get type() {
      return "SetNode";
    }
    constructor(sourceNode, components, targetNode) {
      super();
      this.sourceNode = sourceNode;
      this.components = components;
      this.targetNode = targetNode;
    }
    getNodeType(builder) {
      return this.sourceNode.getNodeType(builder);
    }
    generate(builder) {
      const { sourceNode, components, targetNode } = this;
      const sourceType = this.getNodeType(builder);
      const targetType = builder.getTypeFromLength(components.length, targetNode.getNodeType(builder));
      const targetSnippet = targetNode.build(builder, targetType);
      const sourceSnippet = sourceNode.build(builder, sourceType);
      const length2 = builder.getTypeLength(sourceType);
      const snippetValues = [];
      for (let i = 0; i < length2; i++) {
        const component = vectorComponents[i];
        if (component === components[0]) {
          snippetValues.push(targetSnippet);
          i += components.length - 1;
        } else {
          snippetValues.push(sourceSnippet + "." + component);
        }
      }
      return `${builder.getType(sourceType)}( ${snippetValues.join(", ")} )`;
    }
  }
  class FlipNode extends TempNode {
    static get type() {
      return "FlipNode";
    }
    constructor(sourceNode, components) {
      super();
      this.sourceNode = sourceNode;
      this.components = components;
    }
    getNodeType(builder) {
      return this.sourceNode.getNodeType(builder);
    }
    generate(builder) {
      const { components, sourceNode } = this;
      const sourceType = this.getNodeType(builder);
      const sourceSnippet = sourceNode.build(builder);
      const sourceCache = builder.getVarFromNode(this);
      const sourceProperty = builder.getPropertyName(sourceCache);
      builder.addLineFlowCode(sourceProperty + " = " + sourceSnippet, this);
      const length2 = builder.getTypeLength(sourceType);
      const snippetValues = [];
      let componentIndex = 0;
      for (let i = 0; i < length2; i++) {
        const component = vectorComponents[i];
        if (component === components[componentIndex]) {
          snippetValues.push("1.0 - " + (sourceProperty + "." + component));
          componentIndex++;
        } else {
          snippetValues.push(sourceProperty + "." + component);
        }
      }
      return `${builder.getType(sourceType)}( ${snippetValues.join(", ")} )`;
    }
  }
  class InputNode extends Node {
    static get type() {
      return "InputNode";
    }
    constructor(value, nodeType = null) {
      super(nodeType);
      this.isInputNode = true;
      this.value = value;
      this.precision = null;
    }
    getNodeType() {
      if (this.nodeType === null) {
        return getValueType(this.value);
      }
      return this.nodeType;
    }
    getInputType(builder) {
      return this.getNodeType(builder);
    }
    setPrecision(precision) {
      this.precision = precision;
      return this;
    }
    serialize(data) {
      super.serialize(data);
      data.value = this.value;
      if (this.value && this.value.toArray) data.value = this.value.toArray();
      data.valueType = getValueType(this.value);
      data.nodeType = this.nodeType;
      if (data.valueType === "ArrayBuffer") data.value = arrayBufferToBase64(data.value);
      data.precision = this.precision;
    }
    deserialize(data) {
      super.deserialize(data);
      this.nodeType = data.nodeType;
      this.value = Array.isArray(data.value) ? getValueFromType(data.valueType, ...data.value) : data.value;
      this.precision = data.precision || null;
      if (this.value && this.value.fromArray) this.value = this.value.fromArray(data.value);
    }
    generate() {
      console.warn("Abstract function.");
    }
  }
  class ConstNode extends InputNode {
    static get type() {
      return "ConstNode";
    }
    constructor(value, nodeType = null) {
      super(value, nodeType);
      this.isConstNode = true;
    }
    generateConst(builder) {
      return builder.generateConst(this.getNodeType(builder), this.value);
    }
    generate(builder, output) {
      const type = this.getNodeType(builder);
      return builder.format(this.generateConst(builder), type, output);
    }
  }
  let currentStack = null;
  const NodeElements = /* @__PURE__ */ new Map();
  function addMethodChaining(name, nodeElement) {
    if (NodeElements.has(name)) {
      console.warn(`Redefinition of method chaining ${name}`);
      return;
    }
    if (typeof nodeElement !== "function") throw new Error(`Node element ${name} is not a function`);
    NodeElements.set(name, nodeElement);
  }
  const parseSwizzle = (props) => props.replace(/r|s/g, "x").replace(/g|t/g, "y").replace(/b|p/g, "z").replace(/a|q/g, "w");
  const parseSwizzleAndSort = (props) => parseSwizzle(props).split("").sort().join("");
  const shaderNodeHandler = {
    setup(NodeClosure, params) {
      const inputs = params.shift();
      return NodeClosure(nodeObjects(inputs), ...params);
    },
    get(node, prop, nodeObj) {
      if (typeof prop === "string" && node[prop] === void 0) {
        if (node.isStackNode !== true && prop === "assign") {
          return (...params) => {
            currentStack.assign(nodeObj, ...params);
            return nodeObj;
          };
        } else if (NodeElements.has(prop)) {
          const nodeElement = NodeElements.get(prop);
          return node.isStackNode ? (...params) => nodeObj.add(nodeElement(...params)) : (...params) => nodeElement(nodeObj, ...params);
        } else if (prop === "self") {
          return node;
        } else if (prop.endsWith("Assign") && NodeElements.has(prop.slice(0, prop.length - "Assign".length))) {
          const nodeElement = NodeElements.get(prop.slice(0, prop.length - "Assign".length));
          return node.isStackNode ? (...params) => nodeObj.assign(params[0], nodeElement(...params)) : (...params) => nodeObj.assign(nodeElement(nodeObj, ...params));
        } else if (/^[xyzwrgbastpq]{1,4}$/.test(prop) === true) {
          prop = parseSwizzle(prop);
          return nodeObject(new SplitNode(nodeObj, prop));
        } else if (/^set[XYZWRGBASTPQ]{1,4}$/.test(prop) === true) {
          prop = parseSwizzleAndSort(prop.slice(3).toLowerCase());
          return (value) => nodeObject(new SetNode(node, prop, value));
        } else if (/^flip[XYZWRGBASTPQ]{1,4}$/.test(prop) === true) {
          prop = parseSwizzleAndSort(prop.slice(4).toLowerCase());
          return () => nodeObject(new FlipNode(nodeObject(node), prop));
        } else if (prop === "width" || prop === "height" || prop === "depth") {
          if (prop === "width") prop = "x";
          else if (prop === "height") prop = "y";
          else if (prop === "depth") prop = "z";
          return nodeObject(new SplitNode(node, prop));
        } else if (/^\d+$/.test(prop) === true) {
          return nodeObject(new ArrayElementNode(nodeObj, new ConstNode(Number(prop), "uint")));
        }
      }
      return Reflect.get(node, prop, nodeObj);
    },
    set(node, prop, value, nodeObj) {
      if (typeof prop === "string" && node[prop] === void 0) {
        if (/^[xyzwrgbastpq]{1,4}$/.test(prop) === true || prop === "width" || prop === "height" || prop === "depth" || /^\d+$/.test(prop) === true) {
          nodeObj[prop].assign(value);
          return true;
        }
      }
      return Reflect.set(node, prop, value, nodeObj);
    }
  };
  const nodeObjectsCacheMap = /* @__PURE__ */ new WeakMap();
  const nodeBuilderFunctionsCacheMap = /* @__PURE__ */ new WeakMap();
  const ShaderNodeObject = function(obj, altType = null) {
    const type = getValueType(obj);
    if (type === "node") {
      let nodeObject2 = nodeObjectsCacheMap.get(obj);
      if (nodeObject2 === void 0) {
        nodeObject2 = new Proxy(obj, shaderNodeHandler);
        nodeObjectsCacheMap.set(obj, nodeObject2);
        nodeObjectsCacheMap.set(nodeObject2, nodeObject2);
      }
      return nodeObject2;
    } else if (altType === null && (type === "float" || type === "boolean") || type && type !== "shader" && type !== "string") {
      return nodeObject(getConstNode(obj, altType));
    } else if (type === "shader") {
      return Fn(obj);
    }
    return obj;
  };
  const ShaderNodeObjects = function(objects, altType = null) {
    for (const name in objects) {
      objects[name] = nodeObject(objects[name], altType);
    }
    return objects;
  };
  const ShaderNodeArray = function(array, altType = null) {
    const len = array.length;
    for (let i = 0; i < len; i++) {
      array[i] = nodeObject(array[i], altType);
    }
    return array;
  };
  const ShaderNodeProxy = function(NodeClass, scope = null, factor = null, settings = null) {
    const assignNode = (node) => nodeObject(settings !== null ? Object.assign(node, settings) : node);
    if (scope === null) {
      return (...params) => {
        return assignNode(new NodeClass(...nodeArray(params)));
      };
    } else if (factor !== null) {
      factor = nodeObject(factor);
      return (...params) => {
        return assignNode(new NodeClass(scope, ...nodeArray(params), factor));
      };
    } else {
      return (...params) => {
        return assignNode(new NodeClass(scope, ...nodeArray(params)));
      };
    }
  };
  const ShaderNodeImmutable = function(NodeClass, ...params) {
    return nodeObject(new NodeClass(...nodeArray(params)));
  };
  class ShaderCallNodeInternal extends Node {
    constructor(shaderNode, inputNodes) {
      super();
      this.shaderNode = shaderNode;
      this.inputNodes = inputNodes;
    }
    getNodeType(builder) {
      return this.shaderNode.nodeType || this.getOutputNode(builder).getNodeType(builder);
    }
    call(builder) {
      const { shaderNode, inputNodes } = this;
      const properties = builder.getNodeProperties(shaderNode);
      if (properties.onceOutput) return properties.onceOutput;
      let result = null;
      if (shaderNode.layout) {
        let functionNodesCacheMap = nodeBuilderFunctionsCacheMap.get(builder.constructor);
        if (functionNodesCacheMap === void 0) {
          functionNodesCacheMap = /* @__PURE__ */ new WeakMap();
          nodeBuilderFunctionsCacheMap.set(builder.constructor, functionNodesCacheMap);
        }
        let functionNode = functionNodesCacheMap.get(shaderNode);
        if (functionNode === void 0) {
          functionNode = nodeObject(builder.buildFunctionNode(shaderNode));
          functionNodesCacheMap.set(shaderNode, functionNode);
        }
        if (builder.currentFunctionNode !== null) {
          builder.currentFunctionNode.includes.push(functionNode);
        }
        result = nodeObject(functionNode.call(inputNodes));
      } else {
        const jsFunc = shaderNode.jsFunc;
        const outputNode = inputNodes !== null ? jsFunc(inputNodes, builder) : jsFunc(builder);
        result = nodeObject(outputNode);
      }
      if (shaderNode.once) {
        properties.onceOutput = result;
      }
      return result;
    }
    getOutputNode(builder) {
      const properties = builder.getNodeProperties(this);
      if (properties.outputNode === null) {
        properties.outputNode = this.setupOutput(builder);
      }
      return properties.outputNode;
    }
    setup(builder) {
      return this.getOutputNode(builder);
    }
    setupOutput(builder) {
      builder.addStack();
      builder.stack.outputNode = this.call(builder);
      return builder.removeStack();
    }
    generate(builder, output) {
      const outputNode = this.getOutputNode(builder);
      return outputNode.build(builder, output);
    }
  }
  class ShaderNodeInternal extends Node {
    constructor(jsFunc, nodeType) {
      super(nodeType);
      this.jsFunc = jsFunc;
      this.layout = null;
      this.global = true;
      this.once = false;
    }
    setLayout(layout) {
      this.layout = layout;
      return this;
    }
    call(inputs = null) {
      nodeObjects(inputs);
      return nodeObject(new ShaderCallNodeInternal(this, inputs));
    }
    setup() {
      return this.call();
    }
  }
  const bools = [false, true];
  const uints = [0, 1, 2, 3];
  const ints = [-1, -2];
  const floats = [0.5, 1.5, 1 / 3, 1e-6, 1e6, Math.PI, Math.PI * 2, 1 / Math.PI, 2 / Math.PI, 1 / (Math.PI * 2), Math.PI / 2];
  const boolsCacheMap = /* @__PURE__ */ new Map();
  for (const bool2 of bools) boolsCacheMap.set(bool2, new ConstNode(bool2));
  const uintsCacheMap = /* @__PURE__ */ new Map();
  for (const uint2 of uints) uintsCacheMap.set(uint2, new ConstNode(uint2, "uint"));
  const intsCacheMap = new Map([...uintsCacheMap].map((el) => new ConstNode(el.value, "int")));
  for (const int2 of ints) intsCacheMap.set(int2, new ConstNode(int2, "int"));
  const floatsCacheMap = new Map([...intsCacheMap].map((el) => new ConstNode(el.value)));
  for (const float2 of floats) floatsCacheMap.set(float2, new ConstNode(float2));
  for (const float2 of floats) floatsCacheMap.set(-float2, new ConstNode(-float2));
  const cacheMaps = { bool: boolsCacheMap, uint: uintsCacheMap, ints: intsCacheMap, float: floatsCacheMap };
  const constNodesCacheMap = new Map([...boolsCacheMap, ...floatsCacheMap]);
  const getConstNode = (value, type) => {
    if (constNodesCacheMap.has(value)) {
      return constNodesCacheMap.get(value);
    } else if (value.isNode === true) {
      return value;
    } else {
      return new ConstNode(value, type);
    }
  };
  const safeGetNodeType = (node) => {
    try {
      return node.getNodeType();
    } catch (_) {
      return void 0;
    }
  };
  const ConvertType = function(type, cacheMap = null) {
    return (...params) => {
      if (params.length === 0 || !["bool", "float", "int", "uint"].includes(type) && params.every((param) => typeof param !== "object")) {
        params = [getValueFromType(type, ...params)];
      }
      if (params.length === 1 && cacheMap !== null && cacheMap.has(params[0])) {
        return nodeObject(cacheMap.get(params[0]));
      }
      if (params.length === 1) {
        const node = getConstNode(params[0], type);
        if (safeGetNodeType(node) === type) return nodeObject(node);
        return nodeObject(new ConvertNode(node, type));
      }
      const nodes = params.map((param) => getConstNode(param));
      return nodeObject(new JoinNode(nodes, type));
    };
  };
  const getConstNodeType = (value) => value !== void 0 && value !== null ? value.nodeType || value.convertTo || (typeof value === "string" ? value : null) : null;
  function ShaderNode(jsFunc, nodeType) {
    return new Proxy(new ShaderNodeInternal(jsFunc, nodeType), shaderNodeHandler);
  }
  const nodeObject = (val, altType = null) => (
    /* new */
    ShaderNodeObject(val, altType)
  );
  const nodeObjects = (val, altType = null) => new ShaderNodeObjects(val, altType);
  const nodeArray = (val, altType = null) => new ShaderNodeArray(val, altType);
  const nodeProxy = (...params) => new ShaderNodeProxy(...params);
  const nodeImmutable = (...params) => new ShaderNodeImmutable(...params);
  const Fn = (jsFunc, nodeType) => {
    const shaderNode = new ShaderNode(jsFunc, nodeType);
    const fn = (...params) => {
      let inputs;
      nodeObjects(params);
      if (params[0] && params[0].isNode) {
        inputs = [...params];
      } else {
        inputs = params[0];
      }
      return shaderNode.call(inputs);
    };
    fn.shaderNode = shaderNode;
    fn.setLayout = (layout) => {
      shaderNode.setLayout(layout);
      return fn;
    };
    fn.once = () => {
      shaderNode.once = true;
      return fn;
    };
    return fn;
  };
  addMethodChaining("toGlobal", (node) => {
    node.global = true;
    return node;
  });
  const If = (...params) => currentStack.If(...params);
  function append(node) {
    return node;
  }
  addMethodChaining("append", append);
  const color = new ConvertType("color");
  const float = new ConvertType("float", cacheMaps.float);
  const int = new ConvertType("int", cacheMaps.ints);
  const uint = new ConvertType("uint", cacheMaps.uint);
  const bool = new ConvertType("bool", cacheMaps.bool);
  const vec2 = new ConvertType("vec2");
  const ivec2 = new ConvertType("ivec2");
  const uvec2 = new ConvertType("uvec2");
  const bvec2 = new ConvertType("bvec2");
  const vec3 = new ConvertType("vec3");
  const ivec3 = new ConvertType("ivec3");
  const uvec3 = new ConvertType("uvec3");
  const bvec3 = new ConvertType("bvec3");
  const vec4 = new ConvertType("vec4");
  const ivec4 = new ConvertType("ivec4");
  const uvec4 = new ConvertType("uvec4");
  const bvec4 = new ConvertType("bvec4");
  const mat2 = new ConvertType("mat2");
  const mat3 = new ConvertType("mat3");
  const mat4 = new ConvertType("mat4");
  addMethodChaining("toColor", color);
  addMethodChaining("toFloat", float);
  addMethodChaining("toInt", int);
  addMethodChaining("toUint", uint);
  addMethodChaining("toBool", bool);
  addMethodChaining("toVec2", vec2);
  addMethodChaining("toIVec2", ivec2);
  addMethodChaining("toUVec2", uvec2);
  addMethodChaining("toBVec2", bvec2);
  addMethodChaining("toVec3", vec3);
  addMethodChaining("toIVec3", ivec3);
  addMethodChaining("toUVec3", uvec3);
  addMethodChaining("toBVec3", bvec3);
  addMethodChaining("toVec4", vec4);
  addMethodChaining("toIVec4", ivec4);
  addMethodChaining("toUVec4", uvec4);
  addMethodChaining("toBVec4", bvec4);
  addMethodChaining("toMat2", mat2);
  addMethodChaining("toMat3", mat3);
  addMethodChaining("toMat4", mat4);
  const element = /* @__PURE__ */ nodeProxy(ArrayElementNode);
  const convert = (node, types) => nodeObject(new ConvertNode(nodeObject(node), types));
  addMethodChaining("element", element);
  addMethodChaining("convert", convert);
  class UniformGroupNode extends Node {
    static get type() {
      return "UniformGroupNode";
    }
    constructor(name, shared = false, order = 1) {
      super("string");
      this.name = name;
      this.version = 0;
      this.shared = shared;
      this.order = order;
      this.isUniformGroup = true;
    }
    set needsUpdate(value) {
      if (value === true) this.version++;
    }
    serialize(data) {
      super.serialize(data);
      data.name = this.name;
      data.version = this.version;
      data.shared = this.shared;
    }
    deserialize(data) {
      super.deserialize(data);
      this.name = data.name;
      this.version = data.version;
      this.shared = data.shared;
    }
  }
  const uniformGroup = (name) => new UniformGroupNode(name);
  const sharedUniformGroup = (name, order = 0) => new UniformGroupNode(name, true, order);
  const renderGroup = /* @__PURE__ */ sharedUniformGroup("render");
  const objectGroup = /* @__PURE__ */ uniformGroup("object");
  class UniformNode extends InputNode {
    static get type() {
      return "UniformNode";
    }
    constructor(value, nodeType = null) {
      super(value, nodeType);
      this.isUniformNode = true;
      this.name = "";
      this.groupNode = objectGroup;
    }
    label(name) {
      this.name = name;
      return this;
    }
    setGroup(group) {
      this.groupNode = group;
      return this;
    }
    getGroup() {
      return this.groupNode;
    }
    getUniformHash(builder) {
      return this.getHash(builder);
    }
    onUpdate(callback, updateType) {
      const self2 = this.getSelf();
      callback = callback.bind(self2);
      return super.onUpdate((frame) => {
        const value = callback(frame, self2);
        if (value !== void 0) {
          this.value = value;
        }
      }, updateType);
    }
    generate(builder, output) {
      const type = this.getNodeType(builder);
      const hash = this.getUniformHash(builder);
      let sharedNode = builder.getNodeFromHash(hash);
      if (sharedNode === void 0) {
        builder.setHashNode(this, hash);
        sharedNode = this;
      }
      const sharedNodeType = sharedNode.getInputType(builder);
      const nodeUniform = builder.getUniformFromNode(sharedNode, sharedNodeType, builder.shaderStage, this.name || builder.context.label);
      const propertyName = builder.getPropertyName(nodeUniform);
      if (builder.context.label !== void 0) delete builder.context.label;
      return builder.format(propertyName, type, output);
    }
  }
  const uniform = (arg1, arg2) => {
    const nodeType = getConstNodeType(arg2 || arg1);
    const value = arg1 && arg1.isNode === true ? arg1.node && arg1.node.value || arg1.value : arg1;
    return nodeObject(new UniformNode(value, nodeType));
  };
  class PropertyNode extends Node {
    static get type() {
      return "PropertyNode";
    }
    constructor(nodeType, name = null, varying2 = false) {
      super(nodeType);
      this.name = name;
      this.varying = varying2;
      this.isPropertyNode = true;
    }
    getHash(builder) {
      return this.name || super.getHash(builder);
    }
    isGlobal() {
      return true;
    }
    generate(builder) {
      let nodeVar;
      if (this.varying === true) {
        nodeVar = builder.getVaryingFromNode(this, this.name);
        nodeVar.needsInterpolation = true;
      } else {
        nodeVar = builder.getVarFromNode(this, this.name);
      }
      return builder.getPropertyName(nodeVar);
    }
  }
  const property = (type, name) => nodeObject(new PropertyNode(type, name));
  const diffuseColor = /* @__PURE__ */ nodeImmutable(PropertyNode, "vec4", "DiffuseColor");
  class AssignNode extends TempNode {
    static get type() {
      return "AssignNode";
    }
    constructor(targetNode, sourceNode) {
      super();
      this.targetNode = targetNode;
      this.sourceNode = sourceNode;
    }
    hasDependencies() {
      return false;
    }
    getNodeType(builder, output) {
      return output !== "void" ? this.targetNode.getNodeType(builder) : "void";
    }
    needsSplitAssign(builder) {
      const { targetNode } = this;
      if (builder.isAvailable("swizzleAssign") === false && targetNode.isSplitNode && targetNode.components.length > 1) {
        const targetLength = builder.getTypeLength(targetNode.node.getNodeType(builder));
        const assignDiferentVector = vectorComponents.join("").slice(0, targetLength) !== targetNode.components;
        return assignDiferentVector;
      }
      return false;
    }
    generate(builder, output) {
      const { targetNode, sourceNode } = this;
      const needsSplitAssign = this.needsSplitAssign(builder);
      const targetType = targetNode.getNodeType(builder);
      const target = targetNode.context({ assign: true }).build(builder);
      const source = sourceNode.build(builder, targetType);
      const sourceType = sourceNode.getNodeType(builder);
      const nodeData = builder.getDataFromNode(this);
      let snippet;
      if (nodeData.initialized === true) {
        if (output !== "void") {
          snippet = target;
        }
      } else if (needsSplitAssign) {
        const sourceVar = builder.getVarFromNode(this, null, targetType);
        const sourceProperty = builder.getPropertyName(sourceVar);
        builder.addLineFlowCode(`${sourceProperty} = ${source}`, this);
        const targetRoot = targetNode.node.context({ assign: true }).build(builder);
        for (let i = 0; i < targetNode.components.length; i++) {
          const component = targetNode.components[i];
          builder.addLineFlowCode(`${targetRoot}.${component} = ${sourceProperty}[ ${i} ]`, this);
        }
        if (output !== "void") {
          snippet = target;
        }
      } else {
        snippet = `${target} = ${source}`;
        if (output === "void" || sourceType === "void") {
          builder.addLineFlowCode(snippet, this);
          if (output !== "void") {
            snippet = target;
          }
        }
      }
      nodeData.initialized = true;
      return builder.format(snippet, targetType, output);
    }
  }
  const assign = /* @__PURE__ */ nodeProxy(AssignNode);
  addMethodChaining("assign", assign);
  class FunctionCallNode extends TempNode {
    static get type() {
      return "FunctionCallNode";
    }
    constructor(functionNode = null, parameters = {}) {
      super();
      this.functionNode = functionNode;
      this.parameters = parameters;
    }
    setParameters(parameters) {
      this.parameters = parameters;
      return this;
    }
    getParameters() {
      return this.parameters;
    }
    getNodeType(builder) {
      return this.functionNode.getNodeType(builder);
    }
    generate(builder) {
      const params = [];
      const functionNode = this.functionNode;
      const inputs = functionNode.getInputs(builder);
      const parameters = this.parameters;
      if (Array.isArray(parameters)) {
        for (let i = 0; i < parameters.length; i++) {
          const inputNode = inputs[i];
          const node = parameters[i];
          params.push(node.build(builder, inputNode.type));
        }
      } else {
        for (const inputNode of inputs) {
          const node = parameters[inputNode.name];
          if (node !== void 0) {
            params.push(node.build(builder, inputNode.type));
          } else {
            throw new Error(`FunctionCallNode: Input '${inputNode.name}' not found in FunctionNode.`);
          }
        }
      }
      const functionName = functionNode.build(builder, "property");
      return `${functionName}( ${params.join(", ")} )`;
    }
  }
  const call = (func, ...params) => {
    params = params.length > 1 || params[0] && params[0].isNode === true ? nodeArray(params) : nodeObjects(params[0]);
    return nodeObject(new FunctionCallNode(nodeObject(func), params));
  };
  addMethodChaining("call", call);
  class OperatorNode extends TempNode {
    static get type() {
      return "OperatorNode";
    }
    constructor(op, aNode, bNode, ...params) {
      super();
      if (params.length > 0) {
        let finalOp = new OperatorNode(op, aNode, bNode);
        for (let i = 0; i < params.length - 1; i++) {
          finalOp = new OperatorNode(op, finalOp, params[i]);
        }
        aNode = finalOp;
        bNode = params[params.length - 1];
      }
      this.op = op;
      this.aNode = aNode;
      this.bNode = bNode;
    }
    getNodeType(builder, output) {
      const op = this.op;
      const aNode = this.aNode;
      const bNode = this.bNode;
      const typeA = aNode.getNodeType(builder);
      const typeB = typeof bNode !== "undefined" ? bNode.getNodeType(builder) : null;
      if (typeA === "void" || typeB === "void") {
        return "void";
      } else if (op === "%") {
        return typeA;
      } else if (op === "~" || op === "&" || op === "|" || op === "^" || op === ">>" || op === "<<") {
        return builder.getIntegerType(typeA);
      } else if (op === "!" || op === "==" || op === "&&" || op === "||" || op === "^^") {
        return "bool";
      } else if (op === "<" || op === ">" || op === "<=" || op === ">=") {
        const typeLength = output ? builder.getTypeLength(output) : Math.max(builder.getTypeLength(typeA), builder.getTypeLength(typeB));
        return typeLength > 1 ? `bvec${typeLength}` : "bool";
      } else {
        if (typeA === "float" && builder.isMatrix(typeB)) {
          return typeB;
        } else if (builder.isMatrix(typeA) && builder.isVector(typeB)) {
          return builder.getVectorFromMatrix(typeA);
        } else if (builder.isVector(typeA) && builder.isMatrix(typeB)) {
          return builder.getVectorFromMatrix(typeB);
        } else if (builder.getTypeLength(typeB) > builder.getTypeLength(typeA)) {
          return typeB;
        }
        return typeA;
      }
    }
    generate(builder, output) {
      const op = this.op;
      const aNode = this.aNode;
      const bNode = this.bNode;
      const type = this.getNodeType(builder, output);
      let typeA = null;
      let typeB = null;
      if (type !== "void") {
        typeA = aNode.getNodeType(builder);
        typeB = typeof bNode !== "undefined" ? bNode.getNodeType(builder) : null;
        if (op === "<" || op === ">" || op === "<=" || op === ">=" || op === "==") {
          if (builder.isVector(typeA)) {
            typeB = typeA;
          } else if (typeA !== typeB) {
            typeA = typeB = "float";
          }
        } else if (op === ">>" || op === "<<") {
          typeA = type;
          typeB = builder.changeComponentType(typeB, "uint");
        } else if (builder.isMatrix(typeA) && builder.isVector(typeB)) {
          typeB = builder.getVectorFromMatrix(typeA);
        } else if (builder.isVector(typeA) && builder.isMatrix(typeB)) {
          typeA = builder.getVectorFromMatrix(typeB);
        } else {
          typeA = typeB = type;
        }
      } else {
        typeA = typeB = type;
      }
      const a = aNode.build(builder, typeA);
      const b = typeof bNode !== "undefined" ? bNode.build(builder, typeB) : null;
      const outputLength = builder.getTypeLength(output);
      const fnOpSnippet = builder.getFunctionOperator(op);
      if (output !== "void") {
        if (op === "<" && outputLength > 1) {
          if (builder.useComparisonMethod) {
            return builder.format(`${builder.getMethod("lessThan", output)}( ${a}, ${b} )`, type, output);
          } else {
            return builder.format(`( ${a} < ${b} )`, type, output);
          }
        } else if (op === "<=" && outputLength > 1) {
          if (builder.useComparisonMethod) {
            return builder.format(`${builder.getMethod("lessThanEqual", output)}( ${a}, ${b} )`, type, output);
          } else {
            return builder.format(`( ${a} <= ${b} )`, type, output);
          }
        } else if (op === ">" && outputLength > 1) {
          if (builder.useComparisonMethod) {
            return builder.format(`${builder.getMethod("greaterThan", output)}( ${a}, ${b} )`, type, output);
          } else {
            return builder.format(`( ${a} > ${b} )`, type, output);
          }
        } else if (op === ">=" && outputLength > 1) {
          if (builder.useComparisonMethod) {
            return builder.format(`${builder.getMethod("greaterThanEqual", output)}( ${a}, ${b} )`, type, output);
          } else {
            return builder.format(`( ${a} >= ${b} )`, type, output);
          }
        } else if (op === "!" || op === "~") {
          return builder.format(`(${op}${a})`, typeA, output);
        } else if (fnOpSnippet) {
          return builder.format(`${fnOpSnippet}( ${a}, ${b} )`, type, output);
        } else {
          return builder.format(`( ${a} ${op} ${b} )`, type, output);
        }
      } else if (typeA !== "void") {
        if (fnOpSnippet) {
          return builder.format(`${fnOpSnippet}( ${a}, ${b} )`, type, output);
        } else {
          return builder.format(`${a} ${op} ${b}`, type, output);
        }
      }
    }
    serialize(data) {
      super.serialize(data);
      data.op = this.op;
    }
    deserialize(data) {
      super.deserialize(data);
      this.op = data.op;
    }
  }
  const add = /* @__PURE__ */ nodeProxy(OperatorNode, "+");
  const sub = /* @__PURE__ */ nodeProxy(OperatorNode, "-");
  const mul = /* @__PURE__ */ nodeProxy(OperatorNode, "*");
  const div = /* @__PURE__ */ nodeProxy(OperatorNode, "/");
  const modInt = /* @__PURE__ */ nodeProxy(OperatorNode, "%");
  const equal = /* @__PURE__ */ nodeProxy(OperatorNode, "==");
  const notEqual = /* @__PURE__ */ nodeProxy(OperatorNode, "!=");
  const lessThan = /* @__PURE__ */ nodeProxy(OperatorNode, "<");
  const greaterThan = /* @__PURE__ */ nodeProxy(OperatorNode, ">");
  const lessThanEqual = /* @__PURE__ */ nodeProxy(OperatorNode, "<=");
  const greaterThanEqual = /* @__PURE__ */ nodeProxy(OperatorNode, ">=");
  const and = /* @__PURE__ */ nodeProxy(OperatorNode, "&&");
  const or = /* @__PURE__ */ nodeProxy(OperatorNode, "||");
  const not = /* @__PURE__ */ nodeProxy(OperatorNode, "!");
  const xor = /* @__PURE__ */ nodeProxy(OperatorNode, "^^");
  const bitAnd = /* @__PURE__ */ nodeProxy(OperatorNode, "&");
  const bitNot = /* @__PURE__ */ nodeProxy(OperatorNode, "~");
  const bitOr = /* @__PURE__ */ nodeProxy(OperatorNode, "|");
  const bitXor = /* @__PURE__ */ nodeProxy(OperatorNode, "^");
  const shiftLeft = /* @__PURE__ */ nodeProxy(OperatorNode, "<<");
  const shiftRight = /* @__PURE__ */ nodeProxy(OperatorNode, ">>");
  addMethodChaining("add", add);
  addMethodChaining("sub", sub);
  addMethodChaining("mul", mul);
  addMethodChaining("div", div);
  addMethodChaining("modInt", modInt);
  addMethodChaining("equal", equal);
  addMethodChaining("notEqual", notEqual);
  addMethodChaining("lessThan", lessThan);
  addMethodChaining("greaterThan", greaterThan);
  addMethodChaining("lessThanEqual", lessThanEqual);
  addMethodChaining("greaterThanEqual", greaterThanEqual);
  addMethodChaining("and", and);
  addMethodChaining("or", or);
  addMethodChaining("not", not);
  addMethodChaining("xor", xor);
  addMethodChaining("bitAnd", bitAnd);
  addMethodChaining("bitNot", bitNot);
  addMethodChaining("bitOr", bitOr);
  addMethodChaining("bitXor", bitXor);
  addMethodChaining("shiftLeft", shiftLeft);
  addMethodChaining("shiftRight", shiftRight);
  const remainder = (...params) => {
    console.warn("TSL.OperatorNode: .remainder() has been renamed to .modInt().");
    return modInt(...params);
  };
  addMethodChaining("remainder", remainder);
  class MathNode extends TempNode {
    static get type() {
      return "MathNode";
    }
    constructor(method, aNode, bNode = null, cNode = null) {
      super();
      this.method = method;
      this.aNode = aNode;
      this.bNode = bNode;
      this.cNode = cNode;
    }
    getInputType(builder) {
      const aType = this.aNode.getNodeType(builder);
      const bType = this.bNode ? this.bNode.getNodeType(builder) : null;
      const cType = this.cNode ? this.cNode.getNodeType(builder) : null;
      const aLen = builder.isMatrix(aType) ? 0 : builder.getTypeLength(aType);
      const bLen = builder.isMatrix(bType) ? 0 : builder.getTypeLength(bType);
      const cLen = builder.isMatrix(cType) ? 0 : builder.getTypeLength(cType);
      if (aLen > bLen && aLen > cLen) {
        return aType;
      } else if (bLen > cLen) {
        return bType;
      } else if (cLen > aLen) {
        return cType;
      }
      return aType;
    }
    getNodeType(builder) {
      const method = this.method;
      if (method === MathNode.LENGTH || method === MathNode.DISTANCE || method === MathNode.DOT) {
        return "float";
      } else if (method === MathNode.CROSS) {
        return "vec3";
      } else if (method === MathNode.ALL) {
        return "bool";
      } else if (method === MathNode.EQUALS) {
        return builder.changeComponentType(this.aNode.getNodeType(builder), "bool");
      } else if (method === MathNode.MOD) {
        return this.aNode.getNodeType(builder);
      } else {
        return this.getInputType(builder);
      }
    }
    generate(builder, output) {
      const method = this.method;
      const type = this.getNodeType(builder);
      const inputType = this.getInputType(builder);
      const a = this.aNode;
      const b = this.bNode;
      const c = this.cNode;
      const isWebGL = builder.renderer.isWebGLRenderer === true;
      if (method === MathNode.TRANSFORM_DIRECTION) {
        let tA = a;
        let tB = b;
        if (builder.isMatrix(tA.getNodeType(builder))) {
          tB = vec4(vec3(tB), 0);
        } else {
          tA = vec4(vec3(tA), 0);
        }
        const mulNode = mul(tA, tB).xyz;
        return normalize(mulNode).build(builder, output);
      } else if (method === MathNode.NEGATE) {
        return builder.format("( - " + a.build(builder, inputType) + " )", type, output);
      } else if (method === MathNode.ONE_MINUS) {
        return sub(1, a).build(builder, output);
      } else if (method === MathNode.RECIPROCAL) {
        return div(1, a).build(builder, output);
      } else if (method === MathNode.DIFFERENCE) {
        return abs(sub(a, b)).build(builder, output);
      } else {
        const params = [];
        if (method === MathNode.CROSS || method === MathNode.MOD) {
          params.push(
            a.build(builder, type),
            b.build(builder, type)
          );
        } else if (isWebGL && method === MathNode.STEP) {
          params.push(
            a.build(builder, builder.getTypeLength(a.getNodeType(builder)) === 1 ? "float" : inputType),
            b.build(builder, inputType)
          );
        } else if (isWebGL && (method === MathNode.MIN || method === MathNode.MAX) || method === MathNode.MOD) {
          params.push(
            a.build(builder, inputType),
            b.build(builder, builder.getTypeLength(b.getNodeType(builder)) === 1 ? "float" : inputType)
          );
        } else if (method === MathNode.REFRACT) {
          params.push(
            a.build(builder, inputType),
            b.build(builder, inputType),
            c.build(builder, "float")
          );
        } else if (method === MathNode.MIX) {
          params.push(
            a.build(builder, inputType),
            b.build(builder, inputType),
            c.build(builder, builder.getTypeLength(c.getNodeType(builder)) === 1 ? "float" : inputType)
          );
        } else {
          params.push(a.build(builder, inputType));
          if (b !== null) params.push(b.build(builder, inputType));
          if (c !== null) params.push(c.build(builder, inputType));
        }
        return builder.format(`${builder.getMethod(method, type)}( ${params.join(", ")} )`, type, output);
      }
    }
    serialize(data) {
      super.serialize(data);
      data.method = this.method;
    }
    deserialize(data) {
      super.deserialize(data);
      this.method = data.method;
    }
  }
  MathNode.ALL = "all";
  MathNode.ANY = "any";
  MathNode.EQUALS = "equals";
  MathNode.RADIANS = "radians";
  MathNode.DEGREES = "degrees";
  MathNode.EXP = "exp";
  MathNode.EXP2 = "exp2";
  MathNode.LOG = "log";
  MathNode.LOG2 = "log2";
  MathNode.SQRT = "sqrt";
  MathNode.INVERSE_SQRT = "inversesqrt";
  MathNode.FLOOR = "floor";
  MathNode.CEIL = "ceil";
  MathNode.NORMALIZE = "normalize";
  MathNode.FRACT = "fract";
  MathNode.SIN = "sin";
  MathNode.COS = "cos";
  MathNode.TAN = "tan";
  MathNode.ASIN = "asin";
  MathNode.ACOS = "acos";
  MathNode.ATAN = "atan";
  MathNode.ABS = "abs";
  MathNode.SIGN = "sign";
  MathNode.LENGTH = "length";
  MathNode.NEGATE = "negate";
  MathNode.ONE_MINUS = "oneMinus";
  MathNode.DFDX = "dFdx";
  MathNode.DFDY = "dFdy";
  MathNode.ROUND = "round";
  MathNode.RECIPROCAL = "reciprocal";
  MathNode.TRUNC = "trunc";
  MathNode.FWIDTH = "fwidth";
  MathNode.BITCAST = "bitcast";
  MathNode.TRANSPOSE = "transpose";
  MathNode.ATAN2 = "atan2";
  MathNode.MIN = "min";
  MathNode.MAX = "max";
  MathNode.MOD = "mod";
  MathNode.STEP = "step";
  MathNode.REFLECT = "reflect";
  MathNode.DISTANCE = "distance";
  MathNode.DIFFERENCE = "difference";
  MathNode.DOT = "dot";
  MathNode.CROSS = "cross";
  MathNode.POW = "pow";
  MathNode.TRANSFORM_DIRECTION = "transformDirection";
  MathNode.MIX = "mix";
  MathNode.CLAMP = "clamp";
  MathNode.REFRACT = "refract";
  MathNode.SMOOTHSTEP = "smoothstep";
  MathNode.FACEFORWARD = "faceforward";
  const PI = /* @__PURE__ */ float(Math.PI);
  const all = /* @__PURE__ */ nodeProxy(MathNode, MathNode.ALL);
  const any = /* @__PURE__ */ nodeProxy(MathNode, MathNode.ANY);
  const equals = /* @__PURE__ */ nodeProxy(MathNode, MathNode.EQUALS);
  const radians = /* @__PURE__ */ nodeProxy(MathNode, MathNode.RADIANS);
  const degrees = /* @__PURE__ */ nodeProxy(MathNode, MathNode.DEGREES);
  const exp = /* @__PURE__ */ nodeProxy(MathNode, MathNode.EXP);
  const exp2 = /* @__PURE__ */ nodeProxy(MathNode, MathNode.EXP2);
  const log = /* @__PURE__ */ nodeProxy(MathNode, MathNode.LOG);
  const log2 = /* @__PURE__ */ nodeProxy(MathNode, MathNode.LOG2);
  const sqrt = /* @__PURE__ */ nodeProxy(MathNode, MathNode.SQRT);
  const inverseSqrt = /* @__PURE__ */ nodeProxy(MathNode, MathNode.INVERSE_SQRT);
  const floor = /* @__PURE__ */ nodeProxy(MathNode, MathNode.FLOOR);
  const ceil = /* @__PURE__ */ nodeProxy(MathNode, MathNode.CEIL);
  const normalize = /* @__PURE__ */ nodeProxy(MathNode, MathNode.NORMALIZE);
  const fract = /* @__PURE__ */ nodeProxy(MathNode, MathNode.FRACT);
  const sin = /* @__PURE__ */ nodeProxy(MathNode, MathNode.SIN);
  const cos = /* @__PURE__ */ nodeProxy(MathNode, MathNode.COS);
  const tan = /* @__PURE__ */ nodeProxy(MathNode, MathNode.TAN);
  const asin = /* @__PURE__ */ nodeProxy(MathNode, MathNode.ASIN);
  const acos = /* @__PURE__ */ nodeProxy(MathNode, MathNode.ACOS);
  const atan = /* @__PURE__ */ nodeProxy(MathNode, MathNode.ATAN);
  const abs = /* @__PURE__ */ nodeProxy(MathNode, MathNode.ABS);
  const sign = /* @__PURE__ */ nodeProxy(MathNode, MathNode.SIGN);
  const length = /* @__PURE__ */ nodeProxy(MathNode, MathNode.LENGTH);
  const negate = /* @__PURE__ */ nodeProxy(MathNode, MathNode.NEGATE);
  const oneMinus = /* @__PURE__ */ nodeProxy(MathNode, MathNode.ONE_MINUS);
  const dFdx = /* @__PURE__ */ nodeProxy(MathNode, MathNode.DFDX);
  const dFdy = /* @__PURE__ */ nodeProxy(MathNode, MathNode.DFDY);
  const round = /* @__PURE__ */ nodeProxy(MathNode, MathNode.ROUND);
  const reciprocal = /* @__PURE__ */ nodeProxy(MathNode, MathNode.RECIPROCAL);
  const trunc = /* @__PURE__ */ nodeProxy(MathNode, MathNode.TRUNC);
  const fwidth = /* @__PURE__ */ nodeProxy(MathNode, MathNode.FWIDTH);
  /* @__PURE__ */ nodeProxy(MathNode, MathNode.BITCAST);
  const transpose = /* @__PURE__ */ nodeProxy(MathNode, MathNode.TRANSPOSE);
  const atan2 = /* @__PURE__ */ nodeProxy(MathNode, MathNode.ATAN2);
  const min$1 = /* @__PURE__ */ nodeProxy(MathNode, MathNode.MIN);
  const max$1 = /* @__PURE__ */ nodeProxy(MathNode, MathNode.MAX);
  const mod = /* @__PURE__ */ nodeProxy(MathNode, MathNode.MOD);
  const step = /* @__PURE__ */ nodeProxy(MathNode, MathNode.STEP);
  const reflect = /* @__PURE__ */ nodeProxy(MathNode, MathNode.REFLECT);
  const distance = /* @__PURE__ */ nodeProxy(MathNode, MathNode.DISTANCE);
  const difference = /* @__PURE__ */ nodeProxy(MathNode, MathNode.DIFFERENCE);
  const dot = /* @__PURE__ */ nodeProxy(MathNode, MathNode.DOT);
  const cross = /* @__PURE__ */ nodeProxy(MathNode, MathNode.CROSS);
  const pow = /* @__PURE__ */ nodeProxy(MathNode, MathNode.POW);
  const pow2 = /* @__PURE__ */ nodeProxy(MathNode, MathNode.POW, 2);
  const pow3 = /* @__PURE__ */ nodeProxy(MathNode, MathNode.POW, 3);
  const pow4 = /* @__PURE__ */ nodeProxy(MathNode, MathNode.POW, 4);
  const transformDirection = /* @__PURE__ */ nodeProxy(MathNode, MathNode.TRANSFORM_DIRECTION);
  const cbrt = (a) => mul(sign(a), pow(abs(a), 1 / 3));
  const lengthSq = (a) => dot(a, a);
  const mix = /* @__PURE__ */ nodeProxy(MathNode, MathNode.MIX);
  const clamp = (value, low = 0, high = 1) => nodeObject(new MathNode(MathNode.CLAMP, nodeObject(value), nodeObject(low), nodeObject(high)));
  const saturate = (value) => clamp(value);
  const refract = /* @__PURE__ */ nodeProxy(MathNode, MathNode.REFRACT);
  const smoothstep = /* @__PURE__ */ nodeProxy(MathNode, MathNode.SMOOTHSTEP);
  const faceForward = /* @__PURE__ */ nodeProxy(MathNode, MathNode.FACEFORWARD);
  const rand = /* @__PURE__ */ Fn(([uv2]) => {
    const a = 12.9898, b = 78.233, c = 43758.5453;
    const dt = dot(uv2.xy, vec2(a, b)), sn = mod(dt, PI);
    return fract(sin(sn).mul(c));
  });
  const mixElement = (t, e1, e2) => mix(e1, e2, t);
  const smoothstepElement = (x, low, high) => smoothstep(low, high, x);
  addMethodChaining("all", all);
  addMethodChaining("any", any);
  addMethodChaining("equals", equals);
  addMethodChaining("radians", radians);
  addMethodChaining("degrees", degrees);
  addMethodChaining("exp", exp);
  addMethodChaining("exp2", exp2);
  addMethodChaining("log", log);
  addMethodChaining("log2", log2);
  addMethodChaining("sqrt", sqrt);
  addMethodChaining("inverseSqrt", inverseSqrt);
  addMethodChaining("floor", floor);
  addMethodChaining("ceil", ceil);
  addMethodChaining("normalize", normalize);
  addMethodChaining("fract", fract);
  addMethodChaining("sin", sin);
  addMethodChaining("cos", cos);
  addMethodChaining("tan", tan);
  addMethodChaining("asin", asin);
  addMethodChaining("acos", acos);
  addMethodChaining("atan", atan);
  addMethodChaining("abs", abs);
  addMethodChaining("sign", sign);
  addMethodChaining("length", length);
  addMethodChaining("lengthSq", lengthSq);
  addMethodChaining("negate", negate);
  addMethodChaining("oneMinus", oneMinus);
  addMethodChaining("dFdx", dFdx);
  addMethodChaining("dFdy", dFdy);
  addMethodChaining("round", round);
  addMethodChaining("reciprocal", reciprocal);
  addMethodChaining("trunc", trunc);
  addMethodChaining("fwidth", fwidth);
  addMethodChaining("atan2", atan2);
  addMethodChaining("min", min$1);
  addMethodChaining("max", max$1);
  addMethodChaining("mod", mod);
  addMethodChaining("step", step);
  addMethodChaining("reflect", reflect);
  addMethodChaining("distance", distance);
  addMethodChaining("dot", dot);
  addMethodChaining("cross", cross);
  addMethodChaining("pow", pow);
  addMethodChaining("pow2", pow2);
  addMethodChaining("pow3", pow3);
  addMethodChaining("pow4", pow4);
  addMethodChaining("transformDirection", transformDirection);
  addMethodChaining("mix", mixElement);
  addMethodChaining("clamp", clamp);
  addMethodChaining("refract", refract);
  addMethodChaining("smoothstep", smoothstepElement);
  addMethodChaining("faceForward", faceForward);
  addMethodChaining("difference", difference);
  addMethodChaining("saturate", saturate);
  addMethodChaining("cbrt", cbrt);
  addMethodChaining("transpose", transpose);
  addMethodChaining("rand", rand);
  class ConditionalNode extends Node {
    static get type() {
      return "ConditionalNode";
    }
    constructor(condNode, ifNode, elseNode = null) {
      super();
      this.condNode = condNode;
      this.ifNode = ifNode;
      this.elseNode = elseNode;
    }
    getNodeType(builder) {
      const ifType = this.ifNode.getNodeType(builder);
      if (this.elseNode !== null) {
        const elseType = this.elseNode.getNodeType(builder);
        if (builder.getTypeLength(elseType) > builder.getTypeLength(ifType)) {
          return elseType;
        }
      }
      return ifType;
    }
    setup(builder) {
      const condNode = this.condNode.cache();
      const ifNode = this.ifNode.cache();
      const elseNode = this.elseNode ? this.elseNode.cache() : null;
      const currentNodeBlock = builder.context.nodeBlock;
      builder.getDataFromNode(ifNode).parentNodeBlock = currentNodeBlock;
      if (elseNode !== null) builder.getDataFromNode(elseNode).parentNodeBlock = currentNodeBlock;
      const properties = builder.getNodeProperties(this);
      properties.condNode = condNode;
      properties.ifNode = ifNode.context({ nodeBlock: ifNode });
      properties.elseNode = elseNode ? elseNode.context({ nodeBlock: elseNode }) : null;
    }
    generate(builder, output) {
      const type = this.getNodeType(builder);
      const nodeData = builder.getDataFromNode(this);
      if (nodeData.nodeProperty !== void 0) {
        return nodeData.nodeProperty;
      }
      const { condNode, ifNode, elseNode } = builder.getNodeProperties(this);
      const needsOutput = output !== "void";
      const nodeProperty = needsOutput ? property(type).build(builder) : "";
      nodeData.nodeProperty = nodeProperty;
      const nodeSnippet = condNode.build(builder, "bool");
      builder.addFlowCode(`
${builder.tab}if ( ${nodeSnippet} ) {

`).addFlowTab();
      let ifSnippet = ifNode.build(builder, type);
      if (ifSnippet) {
        if (needsOutput) {
          ifSnippet = nodeProperty + " = " + ifSnippet + ";";
        } else {
          ifSnippet = "return " + ifSnippet + ";";
        }
      }
      builder.removeFlowTab().addFlowCode(builder.tab + "	" + ifSnippet + "\n\n" + builder.tab + "}");
      if (elseNode !== null) {
        builder.addFlowCode(" else {\n\n").addFlowTab();
        let elseSnippet = elseNode.build(builder, type);
        if (elseSnippet) {
          if (needsOutput) {
            elseSnippet = nodeProperty + " = " + elseSnippet + ";";
          } else {
            elseSnippet = "return " + elseSnippet + ";";
          }
        }
        builder.removeFlowTab().addFlowCode(builder.tab + "	" + elseSnippet + "\n\n" + builder.tab + "}\n\n");
      } else {
        builder.addFlowCode("\n\n");
      }
      return builder.format(nodeProperty, type, output);
    }
  }
  const select = /* @__PURE__ */ nodeProxy(ConditionalNode);
  addMethodChaining("select", select);
  const cond = (...params) => {
    console.warn("TSL.ConditionalNode: cond() has been renamed to select().");
    return select(...params);
  };
  addMethodChaining("cond", cond);
  class ContextNode extends Node {
    static get type() {
      return "ContextNode";
    }
    constructor(node, value = {}) {
      super();
      this.isContextNode = true;
      this.node = node;
      this.value = value;
    }
    getScope() {
      return this.node.getScope();
    }
    getNodeType(builder) {
      return this.node.getNodeType(builder);
    }
    analyze(builder) {
      this.node.build(builder);
    }
    setup(builder) {
      const previousContext = builder.getContext();
      builder.setContext({ ...builder.context, ...this.value });
      const node = this.node.build(builder);
      builder.setContext(previousContext);
      return node;
    }
    generate(builder, output) {
      const previousContext = builder.getContext();
      builder.setContext({ ...builder.context, ...this.value });
      const snippet = this.node.build(builder, output);
      builder.setContext(previousContext);
      return snippet;
    }
  }
  const context = /* @__PURE__ */ nodeProxy(ContextNode);
  const label = (node, name) => context(node, { label: name });
  addMethodChaining("context", context);
  addMethodChaining("label", label);
  class VarNode extends Node {
    static get type() {
      return "VarNode";
    }
    constructor(node, name = null) {
      super();
      this.node = node;
      this.name = name;
      this.global = true;
      this.isVarNode = true;
    }
    getHash(builder) {
      return this.name || super.getHash(builder);
    }
    getNodeType(builder) {
      return this.node.getNodeType(builder);
    }
    generate(builder) {
      const { node, name } = this;
      const nodeVar = builder.getVarFromNode(this, name, builder.getVectorType(this.getNodeType(builder)));
      const propertyName = builder.getPropertyName(nodeVar);
      const snippet = node.build(builder, nodeVar.type);
      builder.addLineFlowCode(`${propertyName} = ${snippet}`, this);
      return propertyName;
    }
  }
  const temp$1 = /* @__PURE__ */ nodeProxy(VarNode);
  addMethodChaining("temp", temp$1);
  addMethodChaining("toVar", (...params) => temp$1(...params).append());
  class VaryingNode extends Node {
    static get type() {
      return "VaryingNode";
    }
    constructor(node, name = null) {
      super();
      this.node = node;
      this.name = name;
      this.isVaryingNode = true;
    }
    isGlobal() {
      return true;
    }
    getHash(builder) {
      return this.name || super.getHash(builder);
    }
    getNodeType(builder) {
      return this.node.getNodeType(builder);
    }
    setupVarying(builder) {
      const properties = builder.getNodeProperties(this);
      let varying2 = properties.varying;
      if (varying2 === void 0) {
        const name = this.name;
        const type = this.getNodeType(builder);
        properties.varying = varying2 = builder.getVaryingFromNode(this, name, type);
        properties.node = this.node;
      }
      varying2.needsInterpolation || (varying2.needsInterpolation = builder.shaderStage === "fragment");
      return varying2;
    }
    setup(builder) {
      this.setupVarying(builder);
    }
    analyze(builder) {
      this.setupVarying(builder);
      return this.node.analyze(builder);
    }
    generate(builder) {
      const properties = builder.getNodeProperties(this);
      const varying2 = this.setupVarying(builder);
      if (properties.propertyName === void 0) {
        const type = this.getNodeType(builder);
        const propertyName = builder.getPropertyName(varying2, NodeShaderStage.VERTEX);
        builder.flowNodeFromShaderStage(NodeShaderStage.VERTEX, this.node, type, propertyName);
        properties.propertyName = propertyName;
      }
      return builder.getPropertyName(varying2);
    }
  }
  const varying = /* @__PURE__ */ nodeProxy(VaryingNode);
  addMethodChaining("varying", varying);
  const WORKING_COLOR_SPACE = "WorkingColorSpace";
  const OUTPUT_COLOR_SPACE = "OutputColorSpace";
  function getColorSpaceName(colorSpace) {
    let method = null;
    if (colorSpace === LinearSRGBColorSpace) {
      method = "Linear";
    } else if (colorSpace === SRGBColorSpace) {
      method = "sRGB";
    }
    return method;
  }
  function getColorSpaceMethod(source, target) {
    return getColorSpaceName(source) + "To" + getColorSpaceName(target);
  }
  class ColorSpaceNode extends TempNode {
    static get type() {
      return "ColorSpaceNode";
    }
    constructor(colorNode, source, target) {
      super("vec4");
      this.colorNode = colorNode;
      this.source = source;
      this.target = target;
    }
    getColorSpace(builder, colorSpace) {
      if (colorSpace === WORKING_COLOR_SPACE) {
        return ColorManagement.workingColorSpace;
      } else if (colorSpace === OUTPUT_COLOR_SPACE) {
        return builder.context.outputColorSpace || builder.renderer.outputColorSpace;
      }
      return colorSpace;
    }
    setup(builder) {
      const { renderer } = builder;
      const { colorNode } = this;
      const source = this.getColorSpace(builder, this.source);
      const target = this.getColorSpace(builder, this.target);
      if (source === target) return colorNode;
      const colorSpace = getColorSpaceMethod(source, target);
      let outputNode = null;
      const colorSpaceFn = renderer.nodes.library.getColorSpaceFunction(colorSpace);
      if (colorSpaceFn !== null) {
        outputNode = vec4(colorSpaceFn(colorNode.rgb), colorNode.a);
      } else {
        console.error("ColorSpaceNode: Unsupported Color Space configuration.", colorSpace);
        outputNode = colorNode;
      }
      return outputNode;
    }
  }
  const toOutputColorSpace = (node) => nodeObject(new ColorSpaceNode(nodeObject(node), WORKING_COLOR_SPACE, OUTPUT_COLOR_SPACE));
  const toWorkingColorSpace = (node) => nodeObject(new ColorSpaceNode(nodeObject(node), OUTPUT_COLOR_SPACE, WORKING_COLOR_SPACE));
  const workingToColorSpace = (node, colorSpace) => nodeObject(new ColorSpaceNode(nodeObject(node), WORKING_COLOR_SPACE, colorSpace));
  const colorSpaceToWorking = (node, colorSpace) => nodeObject(new ColorSpaceNode(nodeObject(node), colorSpace, WORKING_COLOR_SPACE));
  addMethodChaining("toOutputColorSpace", toOutputColorSpace);
  addMethodChaining("toWorkingColorSpace", toWorkingColorSpace);
  addMethodChaining("workingToColorSpace", workingToColorSpace);
  addMethodChaining("colorSpaceToWorking", colorSpaceToWorking);
  let ReferenceElementNode$1 = class ReferenceElementNode extends ArrayElementNode {
    static get type() {
      return "ReferenceElementNode";
    }
    constructor(referenceNode, indexNode) {
      super(referenceNode, indexNode);
      this.referenceNode = referenceNode;
      this.isReferenceElementNode = true;
    }
    getNodeType() {
      return this.referenceNode.uniformType;
    }
    generate(builder) {
      const snippet = super.generate(builder);
      const arrayType = this.referenceNode.getNodeType();
      const elementType = this.getNodeType();
      return builder.format(snippet, arrayType, elementType);
    }
  };
  class ReferenceBaseNode extends Node {
    static get type() {
      return "ReferenceBaseNode";
    }
    constructor(property2, uniformType, object = null, count = null) {
      super();
      this.property = property2;
      this.uniformType = uniformType;
      this.object = object;
      this.count = count;
      this.properties = property2.split(".");
      this.reference = object;
      this.node = null;
      this.group = null;
      this.updateType = NodeUpdateType.OBJECT;
    }
    setGroup(group) {
      this.group = group;
      return this;
    }
    element(indexNode) {
      return nodeObject(new ReferenceElementNode$1(this, nodeObject(indexNode)));
    }
    setNodeType(uniformType) {
      const node = uniform(null, uniformType).getSelf();
      if (this.group !== null) {
        node.setGroup(this.group);
      }
      this.node = node;
    }
    getNodeType(builder) {
      if (this.node === null) {
        this.updateReference(builder);
        this.updateValue();
      }
      return this.node.getNodeType(builder);
    }
    getValueFromReference(object = this.reference) {
      const { properties } = this;
      let value = object[properties[0]];
      for (let i = 1; i < properties.length; i++) {
        value = value[properties[i]];
      }
      return value;
    }
    updateReference(state) {
      this.reference = this.object !== null ? this.object : state.object;
      return this.reference;
    }
    setup() {
      this.updateValue();
      return this.node;
    }
    update() {
      this.updateValue();
    }
    updateValue() {
      if (this.node === null) this.setNodeType(this.uniformType);
      const value = this.getValueFromReference();
      if (Array.isArray(value)) {
        this.node.array = value;
      } else {
        this.node.value = value;
      }
    }
  }
  class RendererReferenceNode extends ReferenceBaseNode {
    static get type() {
      return "RendererReferenceNode";
    }
    constructor(property2, inputType, renderer = null) {
      super(property2, inputType, renderer);
      this.renderer = renderer;
      this.setGroup(renderGroup);
    }
    updateReference(state) {
      this.reference = this.renderer !== null ? this.renderer : state.renderer;
      return this.reference;
    }
  }
  const rendererReference = (name, type, renderer) => nodeObject(new RendererReferenceNode(name, type, renderer));
  class ToneMappingNode extends TempNode {
    static get type() {
      return "ToneMappingNode";
    }
    constructor(toneMapping2, exposureNode = toneMappingExposure, colorNode = null) {
      super("vec3");
      this.toneMapping = toneMapping2;
      this.exposureNode = exposureNode;
      this.colorNode = colorNode;
    }
    getCacheKey() {
      return hash$1(super.getCacheKey(), this.toneMapping);
    }
    setup(builder) {
      const colorNode = this.colorNode || builder.context.color;
      const toneMapping2 = this.toneMapping;
      if (toneMapping2 === NoToneMapping) return colorNode;
      let outputNode = null;
      const toneMappingFn = builder.renderer.nodes.library.getToneMappingFunction(toneMapping2);
      if (toneMappingFn !== null) {
        outputNode = vec4(toneMappingFn(colorNode.rgb, this.exposureNode), colorNode.a);
      } else {
        console.error("ToneMappingNode: Unsupported Tone Mapping configuration.", toneMapping2);
        outputNode = colorNode;
      }
      return outputNode;
    }
  }
  const toneMapping = (mapping, exposure, color2) => nodeObject(new ToneMappingNode(mapping, nodeObject(exposure), nodeObject(color2)));
  const toneMappingExposure = /* @__PURE__ */ rendererReference("toneMappingExposure", "float");
  addMethodChaining("toneMapping", (color2, mapping, exposure) => toneMapping(mapping, exposure, color2));
  class BufferAttributeNode extends InputNode {
    static get type() {
      return "BufferAttributeNode";
    }
    constructor(value, bufferType = null, bufferStride = 0, bufferOffset = 0) {
      super(value, bufferType);
      this.isBufferNode = true;
      this.bufferType = bufferType;
      this.bufferStride = bufferStride;
      this.bufferOffset = bufferOffset;
      this.usage = StaticDrawUsage;
      this.instanced = false;
      this.attribute = null;
      this.global = true;
      if (value && value.isBufferAttribute === true) {
        this.attribute = value;
        this.usage = value.usage;
        this.instanced = value.isInstancedBufferAttribute;
      }
    }
    getHash(builder) {
      if (this.bufferStride === 0 && this.bufferOffset === 0) {
        let bufferData = builder.globalCache.getData(this.value);
        if (bufferData === void 0) {
          bufferData = {
            node: this
          };
          builder.globalCache.setData(this.value, bufferData);
        }
        return bufferData.node.uuid;
      }
      return this.uuid;
    }
    getNodeType(builder) {
      if (this.bufferType === null) {
        this.bufferType = builder.getTypeFromAttribute(this.attribute);
      }
      return this.bufferType;
    }
    setup(builder) {
      if (this.attribute !== null) return;
      const type = this.getNodeType(builder);
      const array = this.value;
      const itemSize = builder.getTypeLength(type);
      const stride = this.bufferStride || itemSize;
      const offset = this.bufferOffset;
      const buffer2 = array.isInterleavedBuffer === true ? array : new InterleavedBuffer(array, stride);
      const bufferAttribute2 = new InterleavedBufferAttribute(buffer2, itemSize, offset);
      buffer2.setUsage(this.usage);
      this.attribute = bufferAttribute2;
      this.attribute.isInstancedBufferAttribute = this.instanced;
    }
    generate(builder) {
      const nodeType = this.getNodeType(builder);
      const nodeAttribute = builder.getBufferAttributeFromNode(this, nodeType);
      const propertyName = builder.getPropertyName(nodeAttribute);
      let output = null;
      if (builder.shaderStage === "vertex" || builder.shaderStage === "compute") {
        this.name = propertyName;
        output = propertyName;
      } else {
        const nodeVarying = varying(this);
        output = nodeVarying.build(builder, nodeType);
      }
      return output;
    }
    getInputType() {
      return "bufferAttribute";
    }
    setUsage(value) {
      this.usage = value;
      if (this.attribute && this.attribute.isBufferAttribute === true) {
        this.attribute.usage = value;
      }
      return this;
    }
    setInstanced(value) {
      this.instanced = value;
      return this;
    }
  }
  const bufferAttribute = (array, type, stride, offset) => nodeObject(new BufferAttributeNode(array, type, stride, offset));
  addMethodChaining("toAttribute", (bufferNode) => bufferAttribute(bufferNode.value));
  class ComputeNode extends Node {
    static get type() {
      return "ComputeNode";
    }
    constructor(computeNode, count, workgroupSize = [64]) {
      super("void");
      this.isComputeNode = true;
      this.computeNode = computeNode;
      this.count = count;
      this.workgroupSize = workgroupSize;
      this.dispatchCount = 0;
      this.version = 1;
      this.updateBeforeType = NodeUpdateType.OBJECT;
      this.updateDispatchCount();
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    set needsUpdate(value) {
      if (value === true) this.version++;
    }
    updateDispatchCount() {
      const { count, workgroupSize } = this;
      let size = workgroupSize[0];
      for (let i = 1; i < workgroupSize.length; i++)
        size *= workgroupSize[i];
      this.dispatchCount = Math.ceil(count / size);
    }
    onInit() {
    }
    updateBefore({ renderer }) {
      renderer.compute(this);
    }
    generate(builder) {
      const { shaderStage } = builder;
      if (shaderStage === "compute") {
        const snippet = this.computeNode.build(builder, "void");
        if (snippet !== "") {
          builder.addLineFlowCode(snippet, this);
        }
      }
    }
  }
  const compute = (node, count, workgroupSize) => nodeObject(new ComputeNode(nodeObject(node), count, workgroupSize));
  addMethodChaining("compute", compute);
  class CacheNode extends Node {
    static get type() {
      return "CacheNode";
    }
    constructor(node, parent = true) {
      super();
      this.node = node;
      this.parent = parent;
      this.isCacheNode = true;
    }
    getNodeType(builder) {
      return this.node.getNodeType(builder);
    }
    build(builder, ...params) {
      const previousCache = builder.getCache();
      const cache2 = builder.getCacheFromNode(this, this.parent);
      builder.setCache(cache2);
      const data = this.node.build(builder, ...params);
      builder.setCache(previousCache);
      return data;
    }
  }
  const cache = (node, ...params) => nodeObject(new CacheNode(nodeObject(node), ...params));
  addMethodChaining("cache", cache);
  class BypassNode extends Node {
    static get type() {
      return "BypassNode";
    }
    constructor(returnNode, callNode) {
      super();
      this.isBypassNode = true;
      this.outputNode = returnNode;
      this.callNode = callNode;
    }
    getNodeType(builder) {
      return this.outputNode.getNodeType(builder);
    }
    generate(builder) {
      const snippet = this.callNode.build(builder, "void");
      if (snippet !== "") {
        builder.addLineFlowCode(snippet, this);
      }
      return this.outputNode.build(builder);
    }
  }
  const bypass = /* @__PURE__ */ nodeProxy(BypassNode);
  addMethodChaining("bypass", bypass);
  class RemapNode extends Node {
    static get type() {
      return "RemapNode";
    }
    constructor(node, inLowNode, inHighNode, outLowNode = float(0), outHighNode = float(1)) {
      super();
      this.node = node;
      this.inLowNode = inLowNode;
      this.inHighNode = inHighNode;
      this.outLowNode = outLowNode;
      this.outHighNode = outHighNode;
      this.doClamp = true;
    }
    setup() {
      const { node, inLowNode, inHighNode, outLowNode, outHighNode, doClamp } = this;
      let t = node.sub(inLowNode).div(inHighNode.sub(inLowNode));
      if (doClamp === true) t = t.clamp();
      return t.mul(outHighNode.sub(outLowNode)).add(outLowNode);
    }
  }
  const remap = /* @__PURE__ */ nodeProxy(RemapNode, null, null, { doClamp: false });
  const remapClamp = /* @__PURE__ */ nodeProxy(RemapNode);
  addMethodChaining("remap", remap);
  addMethodChaining("remapClamp", remapClamp);
  class ExpressionNode extends Node {
    static get type() {
      return "ExpressionNode";
    }
    constructor(snippet = "", nodeType = "void") {
      super(nodeType);
      this.snippet = snippet;
    }
    generate(builder, output) {
      const type = this.getNodeType(builder);
      const snippet = this.snippet;
      if (type === "void") {
        builder.addLineFlowCode(snippet, this);
      } else {
        return builder.format(`( ${snippet} )`, type, output);
      }
    }
  }
  const expression = /* @__PURE__ */ nodeProxy(ExpressionNode);
  const Discard = (conditional) => (conditional ? select(conditional, expression("discard")) : expression("discard")).append();
  addMethodChaining("discard", Discard);
  class RenderOutputNode extends TempNode {
    static get type() {
      return "RenderOutputNode";
    }
    constructor(colorNode, toneMapping2, outputColorSpace) {
      super("vec4");
      this.colorNode = colorNode;
      this.toneMapping = toneMapping2;
      this.outputColorSpace = outputColorSpace;
      this.isRenderOutput = true;
    }
    setup({ context: context2 }) {
      let outputNode = this.colorNode || context2.color;
      const toneMapping2 = (this.toneMapping !== null ? this.toneMapping : context2.toneMapping) || NoToneMapping;
      const outputColorSpace = (this.outputColorSpace !== null ? this.outputColorSpace : context2.outputColorSpace) || NoColorSpace;
      if (toneMapping2 !== NoToneMapping) {
        outputNode = outputNode.toneMapping(toneMapping2);
      }
      if (outputColorSpace !== NoColorSpace && outputColorSpace !== ColorManagement.workingColorSpace) {
        outputNode = outputNode.workingToColorSpace(outputColorSpace);
      }
      return outputNode;
    }
  }
  const renderOutput = (color2, toneMapping2 = null, outputColorSpace = null) => nodeObject(new RenderOutputNode(nodeObject(color2), toneMapping2, outputColorSpace));
  addMethodChaining("renderOutput", renderOutput);
  class AttributeNode extends Node {
    static get type() {
      return "AttributeNode";
    }
    constructor(attributeName, nodeType = null) {
      super(nodeType);
      this.global = true;
      this._attributeName = attributeName;
    }
    getHash(builder) {
      return this.getAttributeName(builder);
    }
    getNodeType(builder) {
      let nodeType = this.nodeType;
      if (nodeType === null) {
        const attributeName = this.getAttributeName(builder);
        if (builder.hasGeometryAttribute(attributeName)) {
          const attribute2 = builder.geometry.getAttribute(attributeName);
          nodeType = builder.getTypeFromAttribute(attribute2);
        } else {
          nodeType = "float";
        }
      }
      return nodeType;
    }
    setAttributeName(attributeName) {
      this._attributeName = attributeName;
      return this;
    }
    getAttributeName() {
      return this._attributeName;
    }
    generate(builder) {
      const attributeName = this.getAttributeName(builder);
      const nodeType = this.getNodeType(builder);
      const geometryAttribute = builder.hasGeometryAttribute(attributeName);
      if (geometryAttribute === true) {
        const attribute2 = builder.geometry.getAttribute(attributeName);
        const attributeType = builder.getTypeFromAttribute(attribute2);
        const nodeAttribute = builder.getAttribute(attributeName, attributeType);
        if (builder.shaderStage === "vertex") {
          return builder.format(nodeAttribute.name, attributeType, nodeType);
        } else {
          const nodeVarying = varying(this);
          return nodeVarying.build(builder, nodeType);
        }
      } else {
        console.warn(`AttributeNode: Vertex attribute "${attributeName}" not found on geometry.`);
        return builder.generateConst(nodeType);
      }
    }
    serialize(data) {
      super.serialize(data);
      data.global = this.global;
      data._attributeName = this._attributeName;
    }
    deserialize(data) {
      super.deserialize(data);
      this.global = data.global;
      this._attributeName = data._attributeName;
    }
  }
  const attribute = (name, nodeType) => nodeObject(new AttributeNode(name, nodeType));
  const uv = (index) => attribute("uv" + (index > 0 ? index : ""), "vec2");
  class TextureSizeNode extends Node {
    static get type() {
      return "TextureSizeNode";
    }
    constructor(textureNode, levelNode = null) {
      super("uvec2");
      this.isTextureSizeNode = true;
      this.textureNode = textureNode;
      this.levelNode = levelNode;
    }
    generate(builder, output) {
      const textureProperty = this.textureNode.build(builder, "property");
      const level = this.levelNode === null ? "0" : this.levelNode.build(builder, "int");
      return builder.format(`${builder.getMethod("textureDimensions")}( ${textureProperty}, ${level} )`, this.getNodeType(builder), output);
    }
  }
  const textureSize = /* @__PURE__ */ nodeProxy(TextureSizeNode);
  class MaxMipLevelNode extends UniformNode {
    static get type() {
      return "MaxMipLevelNode";
    }
    constructor(textureNode) {
      super(0);
      this._textureNode = textureNode;
      this.updateType = NodeUpdateType.FRAME;
    }
    get textureNode() {
      return this._textureNode;
    }
    get texture() {
      return this._textureNode.value;
    }
    update() {
      const texture2 = this.texture;
      const images = texture2.images;
      const image = images && images.length > 0 ? images[0] && images[0].image || images[0] : texture2.image;
      if (image && image.width !== void 0) {
        const { width, height } = image;
        this.value = Math.log2(Math.max(width, height));
      }
    }
  }
  const maxMipLevel = /* @__PURE__ */ nodeProxy(MaxMipLevelNode);
  class TextureNode extends UniformNode {
    static get type() {
      return "TextureNode";
    }
    constructor(value, uvNode = null, levelNode = null, biasNode = null) {
      super(value);
      this.isTextureNode = true;
      this.uvNode = uvNode;
      this.levelNode = levelNode;
      this.biasNode = biasNode;
      this.compareNode = null;
      this.depthNode = null;
      this.gradNode = null;
      this.sampler = true;
      this.updateMatrix = false;
      this.updateType = NodeUpdateType.NONE;
      this.referenceNode = null;
      this._value = value;
      this._matrixUniform = null;
      this.setUpdateMatrix(uvNode === null);
    }
    set value(value) {
      if (this.referenceNode) {
        this.referenceNode.value = value;
      } else {
        this._value = value;
      }
    }
    get value() {
      return this.referenceNode ? this.referenceNode.value : this._value;
    }
    getUniformHash() {
      return this.value.uuid;
    }
    getNodeType() {
      if (this.value.isDepthTexture === true) return "float";
      if (this.value.type === UnsignedIntType) {
        return "uvec4";
      } else if (this.value.type === IntType) {
        return "ivec4";
      }
      return "vec4";
    }
    getInputType() {
      return "texture";
    }
    getDefaultUV() {
      return uv(this.value.channel);
    }
    updateReference() {
      return this.value;
    }
    getTransformedUV(uvNode) {
      if (this._matrixUniform === null) this._matrixUniform = uniform(this.value.matrix);
      return this._matrixUniform.mul(vec3(uvNode, 1)).xy;
    }
    setUpdateMatrix(value) {
      this.updateMatrix = value;
      this.updateType = value ? NodeUpdateType.FRAME : NodeUpdateType.NONE;
      return this;
    }
    setupUV(builder, uvNode) {
      const texture2 = this.value;
      if (builder.isFlipY() && (texture2.isRenderTargetTexture === true || texture2.isFramebufferTexture === true || texture2.isDepthTexture === true)) {
        if (this.sampler) {
          uvNode = uvNode.flipY();
        } else {
          uvNode = uvNode.setY(int(textureSize(this, this.levelNode).y).sub(uvNode.y).sub(1));
        }
      }
      return uvNode;
    }
    setup(builder) {
      const properties = builder.getNodeProperties(this);
      properties.referenceNode = this.referenceNode;
      let uvNode = this.uvNode;
      if ((uvNode === null || builder.context.forceUVContext === true) && builder.context.getUV) {
        uvNode = builder.context.getUV(this);
      }
      if (!uvNode) uvNode = this.getDefaultUV();
      if (this.updateMatrix === true) {
        uvNode = this.getTransformedUV(uvNode);
      }
      uvNode = this.setupUV(builder, uvNode);
      let levelNode = this.levelNode;
      if (levelNode === null && builder.context.getTextureLevel) {
        levelNode = builder.context.getTextureLevel(this);
      }
      properties.uvNode = uvNode;
      properties.levelNode = levelNode;
      properties.biasNode = this.biasNode;
      properties.compareNode = this.compareNode;
      properties.gradNode = this.gradNode;
      properties.depthNode = this.depthNode;
    }
    generateUV(builder, uvNode) {
      return uvNode.build(builder, this.sampler === true ? "vec2" : "ivec2");
    }
    generateSnippet(builder, textureProperty, uvSnippet, levelSnippet, biasSnippet, depthSnippet, compareSnippet, gradSnippet) {
      const texture2 = this.value;
      let snippet;
      if (levelSnippet) {
        snippet = builder.generateTextureLevel(texture2, textureProperty, uvSnippet, levelSnippet, depthSnippet);
      } else if (biasSnippet) {
        snippet = builder.generateTextureBias(texture2, textureProperty, uvSnippet, biasSnippet, depthSnippet);
      } else if (gradSnippet) {
        snippet = builder.generateTextureGrad(texture2, textureProperty, uvSnippet, gradSnippet, depthSnippet);
      } else if (compareSnippet) {
        snippet = builder.generateTextureCompare(texture2, textureProperty, uvSnippet, compareSnippet, depthSnippet);
      } else if (this.sampler === false) {
        snippet = builder.generateTextureLoad(texture2, textureProperty, uvSnippet, depthSnippet);
      } else {
        snippet = builder.generateTexture(texture2, textureProperty, uvSnippet, depthSnippet);
      }
      return snippet;
    }
    generate(builder, output) {
      const properties = builder.getNodeProperties(this);
      const texture2 = this.value;
      if (!texture2 || texture2.isTexture !== true) {
        throw new Error("TextureNode: Need a three.js texture.");
      }
      const textureProperty = super.generate(builder, "property");
      if (output === "sampler") {
        return textureProperty + "_sampler";
      } else if (builder.isReference(output)) {
        return textureProperty;
      } else {
        const nodeData = builder.getDataFromNode(this);
        let propertyName = nodeData.propertyName;
        if (propertyName === void 0) {
          const { uvNode, levelNode, biasNode, compareNode, depthNode, gradNode } = properties;
          const uvSnippet = this.generateUV(builder, uvNode);
          const levelSnippet = levelNode ? levelNode.build(builder, "float") : null;
          const biasSnippet = biasNode ? biasNode.build(builder, "float") : null;
          const depthSnippet = depthNode ? depthNode.build(builder, "int") : null;
          const compareSnippet = compareNode ? compareNode.build(builder, "float") : null;
          const gradSnippet = gradNode ? [gradNode[0].build(builder, "vec2"), gradNode[1].build(builder, "vec2")] : null;
          const nodeVar = builder.getVarFromNode(this);
          propertyName = builder.getPropertyName(nodeVar);
          const snippet2 = this.generateSnippet(builder, textureProperty, uvSnippet, levelSnippet, biasSnippet, depthSnippet, compareSnippet, gradSnippet);
          builder.addLineFlowCode(`${propertyName} = ${snippet2}`, this);
          nodeData.snippet = snippet2;
          nodeData.propertyName = propertyName;
        }
        let snippet = propertyName;
        const nodeType = this.getNodeType(builder);
        if (builder.needsToWorkingColorSpace(texture2)) {
          snippet = colorSpaceToWorking(expression(snippet, nodeType), texture2.colorSpace).setup(builder).build(builder, nodeType);
        }
        return builder.format(snippet, nodeType, output);
      }
    }
    setSampler(value) {
      this.sampler = value;
      return this;
    }
    getSampler() {
      return this.sampler;
    }
    // @TODO: Move to TSL
    uv(uvNode) {
      const textureNode = this.clone();
      textureNode.uvNode = nodeObject(uvNode);
      textureNode.referenceNode = this.getSelf();
      return nodeObject(textureNode);
    }
    blur(amountNode) {
      const textureNode = this.clone();
      textureNode.biasNode = nodeObject(amountNode).mul(maxMipLevel(textureNode));
      textureNode.referenceNode = this.getSelf();
      return nodeObject(textureNode);
    }
    level(levelNode) {
      const textureNode = this.clone();
      textureNode.levelNode = nodeObject(levelNode);
      textureNode.referenceNode = this.getSelf();
      return nodeObject(textureNode);
    }
    size(levelNode) {
      return textureSize(this, levelNode);
    }
    bias(biasNode) {
      const textureNode = this.clone();
      textureNode.biasNode = nodeObject(biasNode);
      textureNode.referenceNode = this.getSelf();
      return nodeObject(textureNode);
    }
    compare(compareNode) {
      const textureNode = this.clone();
      textureNode.compareNode = nodeObject(compareNode);
      textureNode.referenceNode = this.getSelf();
      return nodeObject(textureNode);
    }
    grad(gradNodeX, gradNodeY) {
      const textureNode = this.clone();
      textureNode.gradNode = [nodeObject(gradNodeX), nodeObject(gradNodeY)];
      textureNode.referenceNode = this.getSelf();
      return nodeObject(textureNode);
    }
    depth(depthNode) {
      const textureNode = this.clone();
      textureNode.depthNode = nodeObject(depthNode);
      textureNode.referenceNode = this.getSelf();
      return nodeObject(textureNode);
    }
    // --
    serialize(data) {
      super.serialize(data);
      data.value = this.value.toJSON(data.meta).uuid;
      data.sampler = this.sampler;
      data.updateMatrix = this.updateMatrix;
      data.updateType = this.updateType;
    }
    deserialize(data) {
      super.deserialize(data);
      this.value = data.meta.textures[data.value];
      this.sampler = data.sampler;
      this.updateMatrix = data.updateMatrix;
      this.updateType = data.updateType;
    }
    update() {
      const texture2 = this.value;
      const matrixUniform = this._matrixUniform;
      if (matrixUniform !== null) matrixUniform.value = texture2.matrix;
      if (texture2.matrixAutoUpdate === true) {
        texture2.updateMatrix();
      }
    }
    clone() {
      const newNode = new this.constructor(this.value, this.uvNode, this.levelNode, this.biasNode);
      newNode.sampler = this.sampler;
      return newNode;
    }
  }
  const texture = /* @__PURE__ */ nodeProxy(TextureNode);
  const cameraNear = /* @__PURE__ */ uniform("float").label("cameraNear").setGroup(renderGroup).onRenderUpdate(({ camera }) => camera.near);
  const cameraFar = /* @__PURE__ */ uniform("float").label("cameraFar").setGroup(renderGroup).onRenderUpdate(({ camera }) => camera.far);
  const cameraViewMatrix = /* @__PURE__ */ uniform("mat4").label("cameraViewMatrix").setGroup(renderGroup).onRenderUpdate(({ camera }) => camera.matrixWorldInverse);
  class Object3DNode extends Node {
    static get type() {
      return "Object3DNode";
    }
    constructor(scope, object3d = null) {
      super();
      this.scope = scope;
      this.object3d = object3d;
      this.updateType = NodeUpdateType.OBJECT;
      this._uniformNode = new UniformNode(null);
    }
    getNodeType() {
      const scope = this.scope;
      if (scope === Object3DNode.WORLD_MATRIX) {
        return "mat4";
      } else if (scope === Object3DNode.POSITION || scope === Object3DNode.VIEW_POSITION || scope === Object3DNode.DIRECTION || scope === Object3DNode.SCALE) {
        return "vec3";
      }
    }
    update(frame) {
      const object = this.object3d;
      const uniformNode = this._uniformNode;
      const scope = this.scope;
      if (scope === Object3DNode.WORLD_MATRIX) {
        uniformNode.value = object.matrixWorld;
      } else if (scope === Object3DNode.POSITION) {
        uniformNode.value = uniformNode.value || new Vector3();
        uniformNode.value.setFromMatrixPosition(object.matrixWorld);
      } else if (scope === Object3DNode.SCALE) {
        uniformNode.value = uniformNode.value || new Vector3();
        uniformNode.value.setFromMatrixScale(object.matrixWorld);
      } else if (scope === Object3DNode.DIRECTION) {
        uniformNode.value = uniformNode.value || new Vector3();
        object.getWorldDirection(uniformNode.value);
      } else if (scope === Object3DNode.VIEW_POSITION) {
        const camera = frame.camera;
        uniformNode.value = uniformNode.value || new Vector3();
        uniformNode.value.setFromMatrixPosition(object.matrixWorld);
        uniformNode.value.applyMatrix4(camera.matrixWorldInverse);
      }
    }
    generate(builder) {
      const scope = this.scope;
      if (scope === Object3DNode.WORLD_MATRIX) {
        this._uniformNode.nodeType = "mat4";
      } else if (scope === Object3DNode.POSITION || scope === Object3DNode.VIEW_POSITION || scope === Object3DNode.DIRECTION || scope === Object3DNode.SCALE) {
        this._uniformNode.nodeType = "vec3";
      }
      return this._uniformNode.build(builder);
    }
    serialize(data) {
      super.serialize(data);
      data.scope = this.scope;
    }
    deserialize(data) {
      super.deserialize(data);
      this.scope = data.scope;
    }
  }
  Object3DNode.WORLD_MATRIX = "worldMatrix";
  Object3DNode.POSITION = "position";
  Object3DNode.SCALE = "scale";
  Object3DNode.VIEW_POSITION = "viewPosition";
  Object3DNode.DIRECTION = "direction";
  /* @__PURE__ */ nodeProxy(Object3DNode, Object3DNode.DIRECTION);
  /* @__PURE__ */ nodeProxy(Object3DNode, Object3DNode.WORLD_MATRIX);
  /* @__PURE__ */ nodeProxy(Object3DNode, Object3DNode.POSITION);
  /* @__PURE__ */ nodeProxy(Object3DNode, Object3DNode.SCALE);
  /* @__PURE__ */ nodeProxy(Object3DNode, Object3DNode.VIEW_POSITION);
  class ModelNode extends Object3DNode {
    static get type() {
      return "ModelNode";
    }
    constructor(scope) {
      super(scope);
    }
    update(frame) {
      this.object3d = frame.object;
      super.update(frame);
    }
  }
  /* @__PURE__ */ nodeImmutable(ModelNode, ModelNode.DIRECTION);
  const modelWorldMatrix = /* @__PURE__ */ nodeImmutable(ModelNode, ModelNode.WORLD_MATRIX);
  /* @__PURE__ */ nodeImmutable(ModelNode, ModelNode.POSITION);
  /* @__PURE__ */ nodeImmutable(ModelNode, ModelNode.SCALE);
  /* @__PURE__ */ nodeImmutable(ModelNode, ModelNode.VIEW_POSITION);
  const modelNormalMatrix = /* @__PURE__ */ uniform(new Matrix3()).onObjectUpdate(({ object }, self2) => self2.value.getNormalMatrix(object.matrixWorld));
  const modelViewMatrix = /* @__PURE__ */ cameraViewMatrix.mul(modelWorldMatrix).toVar("modelViewMatrix_2");
  const positionGeometry = /* @__PURE__ */ attribute("position", "vec3");
  const positionLocal = /* @__PURE__ */ positionGeometry.varying("positionLocal");
  const positionView = /* @__PURE__ */ modelViewMatrix.mul(positionLocal).xyz.varying("v_positionView");
  const positionViewDirection = /* @__PURE__ */ positionView.negate().varying("v_positionViewDirection").normalize().toVar("positionViewDirection");
  class FrontFacingNode extends Node {
    static get type() {
      return "FrontFacingNode";
    }
    constructor() {
      super("bool");
      this.isFrontFacingNode = true;
    }
    generate(builder) {
      const { renderer, material } = builder;
      if (renderer.coordinateSystem === WebGLCoordinateSystem) {
        if (material.side === BackSide) {
          return "false";
        }
      }
      return builder.getFrontFacing();
    }
  }
  const frontFacing = /* @__PURE__ */ nodeImmutable(FrontFacingNode);
  const faceDirection = /* @__PURE__ */ float(frontFacing).mul(2).sub(1);
  const normalGeometry = /* @__PURE__ */ attribute("normal", "vec3");
  const normalLocal = /* @__PURE__ */ Fn((builder) => {
    if (builder.geometry.hasAttribute("normal") === false) {
      console.warn('TSL.NormalNode: Vertex attribute "normal" not found on geometry.');
      return vec3(0, 1, 0);
    }
    return normalGeometry;
  }, "vec3").once()().toVar("normalLocal");
  const normalFlat = /* @__PURE__ */ positionView.dFdx().cross(positionView.dFdy()).normalize().toVar("normalFlat");
  const normalView = /* @__PURE__ */ Fn((builder) => {
    let node;
    if (builder.material.flatShading === true) {
      node = normalFlat;
    } else {
      node = varying(transformNormalToView(normalLocal), "v_normalView").normalize();
    }
    return node;
  }, "vec3").once()().toVar("normalView");
  const transformedNormalView = /* @__PURE__ */ Fn((builder) => {
    return builder.context.setupNormal();
  }, "vec3").once()().mul(faceDirection).toVar("transformedNormalView");
  const transformNormalToView = /* @__PURE__ */ Fn(([normal], builder) => {
    const modelNormalViewMatrix = builder.renderer.nodes.modelNormalViewMatrix;
    if (modelNormalViewMatrix !== null) {
      return modelNormalViewMatrix.transformDirection(normal);
    }
    const transformedNormal = modelNormalMatrix.mul(normal);
    return cameraViewMatrix.transformDirection(transformedNormal);
  });
  const materialRefractionRatio = /* @__PURE__ */ uniform(0).onReference(({ material }) => material).onRenderUpdate(({ material }) => material.refractionRatio);
  const reflectView = /* @__PURE__ */ positionViewDirection.negate().reflect(transformedNormalView);
  const refractView = /* @__PURE__ */ positionViewDirection.negate().refract(transformedNormalView, materialRefractionRatio);
  const reflectVector = /* @__PURE__ */ reflectView.transformDirection(cameraViewMatrix).toVar("reflectVector");
  const refractVector = /* @__PURE__ */ refractView.transformDirection(cameraViewMatrix).toVar("reflectVector");
  class CubeTextureNode extends TextureNode {
    static get type() {
      return "CubeTextureNode";
    }
    constructor(value, uvNode = null, levelNode = null, biasNode = null) {
      super(value, uvNode, levelNode, biasNode);
      this.isCubeTextureNode = true;
    }
    getInputType() {
      return "cubeTexture";
    }
    getDefaultUV() {
      const texture2 = this.value;
      if (texture2.mapping === CubeReflectionMapping) {
        return reflectVector;
      } else if (texture2.mapping === CubeRefractionMapping) {
        return refractVector;
      } else {
        console.error('THREE.CubeTextureNode: Mapping "%s" not supported.', texture2.mapping);
        return vec3(0, 0, 0);
      }
    }
    setUpdateMatrix() {
    }
    // Ignore .updateMatrix for CubeTextureNode
    setupUV(builder, uvNode) {
      const texture2 = this.value;
      if (builder.renderer.coordinateSystem === WebGPUCoordinateSystem || !texture2.isRenderTargetTexture) {
        return vec3(uvNode.x.negate(), uvNode.yz);
      } else {
        return uvNode;
      }
    }
    generateUV(builder, cubeUV) {
      return cubeUV.build(builder, "vec3");
    }
  }
  const cubeTexture = /* @__PURE__ */ nodeProxy(CubeTextureNode);
  class BufferNode extends UniformNode {
    static get type() {
      return "BufferNode";
    }
    constructor(value, bufferType, bufferCount = 0) {
      super(value, bufferType);
      this.isBufferNode = true;
      this.bufferType = bufferType;
      this.bufferCount = bufferCount;
    }
    getElementType(builder) {
      return this.getNodeType(builder);
    }
    getInputType() {
      return "buffer";
    }
  }
  const buffer = (value, type, count) => nodeObject(new BufferNode(value, type, count));
  class UniformArrayElementNode extends ArrayElementNode {
    static get type() {
      return "UniformArrayElementNode";
    }
    constructor(arrayBuffer, indexNode) {
      super(arrayBuffer, indexNode);
      this.isArrayBufferElementNode = true;
    }
    generate(builder) {
      const snippet = super.generate(builder);
      const type = this.getNodeType();
      return builder.format(snippet, "vec4", type);
    }
  }
  class UniformArrayNode extends BufferNode {
    static get type() {
      return "UniformArrayNode";
    }
    constructor(value, elementType = null) {
      super(null, "vec4");
      this.array = value;
      this.elementType = elementType;
      this._elementType = null;
      this._elementLength = 0;
      this.updateType = NodeUpdateType.RENDER;
      this.isArrayBufferNode = true;
    }
    getElementType() {
      return this.elementType || this._elementType;
    }
    getElementLength() {
      return this._elementLength;
    }
    update() {
      const { array, value } = this;
      const elementLength = this.getElementLength();
      const elementType = this.getElementType();
      if (elementLength === 1) {
        for (let i = 0; i < array.length; i++) {
          const index = i * 4;
          value[index] = array[i];
        }
      } else if (elementType === "color") {
        for (let i = 0; i < array.length; i++) {
          const index = i * 4;
          const vector = array[i];
          value[index] = vector.r;
          value[index + 1] = vector.g;
          value[index + 2] = vector.b || 0;
        }
      } else {
        for (let i = 0; i < array.length; i++) {
          const index = i * 4;
          const vector = array[i];
          value[index] = vector.x;
          value[index + 1] = vector.y;
          value[index + 2] = vector.z || 0;
          value[index + 3] = vector.w || 0;
        }
      }
    }
    setup(builder) {
      const length2 = this.array.length;
      this._elementType = this.elementType === null ? getValueType(this.array[0]) : this.elementType;
      this._elementLength = builder.getTypeLength(this._elementType);
      let arrayType = Float32Array;
      if (this._elementType.charAt(0) === "i") arrayType = Int32Array;
      else if (this._elementType.charAt(0) === "u") arrayType = Uint32Array;
      this.value = new arrayType(length2 * 4);
      this.bufferCount = length2;
      this.bufferType = builder.changeComponentType("vec4", builder.getComponentType(this._elementType));
      return super.setup(builder);
    }
    element(indexNode) {
      return nodeObject(new UniformArrayElementNode(this, nodeObject(indexNode)));
    }
  }
  const uniformArray = (values, nodeType) => nodeObject(new UniformArrayNode(values, nodeType));
  class ReferenceElementNode extends ArrayElementNode {
    static get type() {
      return "ReferenceElementNode";
    }
    constructor(referenceNode, indexNode) {
      super(referenceNode, indexNode);
      this.referenceNode = referenceNode;
      this.isReferenceElementNode = true;
    }
    getNodeType() {
      return this.referenceNode.uniformType;
    }
    generate(builder) {
      const snippet = super.generate(builder);
      const arrayType = this.referenceNode.getNodeType();
      const elementType = this.getNodeType();
      return builder.format(snippet, arrayType, elementType);
    }
  }
  class ReferenceNode extends Node {
    static get type() {
      return "ReferenceNode";
    }
    constructor(property2, uniformType, object = null, count = null) {
      super();
      this.property = property2;
      this.uniformType = uniformType;
      this.object = object;
      this.count = count;
      this.properties = property2.split(".");
      this.reference = object;
      this.node = null;
      this.group = null;
      this.name = null;
      this.updateType = NodeUpdateType.OBJECT;
    }
    element(indexNode) {
      return nodeObject(new ReferenceElementNode(this, nodeObject(indexNode)));
    }
    setGroup(group) {
      this.group = group;
      return this;
    }
    label(name) {
      this.name = name;
      return this;
    }
    setNodeType(uniformType) {
      let node = null;
      if (this.count !== null) {
        node = buffer(null, uniformType, this.count);
      } else if (Array.isArray(this.getValueFromReference())) {
        node = uniformArray(null, uniformType);
      } else if (uniformType === "texture") {
        node = texture(null);
      } else if (uniformType === "cubeTexture") {
        node = cubeTexture(null);
      } else {
        node = uniform(null, uniformType);
      }
      if (this.group !== null) {
        node.setGroup(this.group);
      }
      if (this.name !== null) node.label(this.name);
      this.node = node.getSelf();
    }
    getNodeType(builder) {
      if (this.node === null) {
        this.updateReference(builder);
        this.updateValue();
      }
      return this.node.getNodeType(builder);
    }
    getValueFromReference(object = this.reference) {
      const { properties } = this;
      let value = object[properties[0]];
      for (let i = 1; i < properties.length; i++) {
        value = value[properties[i]];
      }
      return value;
    }
    updateReference(state) {
      this.reference = this.object !== null ? this.object : state.object;
      return this.reference;
    }
    setup() {
      this.updateValue();
      return this.node;
    }
    update() {
      this.updateValue();
    }
    updateValue() {
      if (this.node === null) this.setNodeType(this.uniformType);
      const value = this.getValueFromReference();
      if (Array.isArray(value)) {
        this.node.array = value;
      } else {
        this.node.value = value;
      }
    }
  }
  const reference = (name, type, object) => nodeObject(new ReferenceNode(name, type, object));
  class MaterialReferenceNode extends ReferenceNode {
    static get type() {
      return "MaterialReferenceNode";
    }
    constructor(property2, inputType, material = null) {
      super(property2, inputType, material);
      this.material = material;
      this.isMaterialReferenceNode = true;
    }
    /*setNodeType( node ) {
    
    			super.setNodeType( node );
    
    			this.node.groupNode = renderGroup;
    
    		}*/
    updateReference(state) {
      this.reference = this.material !== null ? this.material : state.material;
      return this.reference;
    }
  }
  const materialReference = (name, type, material) => nodeObject(new MaterialReferenceNode(name, type, material));
  const tangentGeometry = /* @__PURE__ */ Fn((builder) => {
    if (builder.geometry.hasAttribute("tangent") === false) {
      builder.geometry.computeTangents();
    }
    return attribute("tangent", "vec4");
  })();
  const tangentLocal = /* @__PURE__ */ tangentGeometry.xyz.toVar("tangentLocal");
  const tangentView = /* @__PURE__ */ modelViewMatrix.mul(vec4(tangentLocal, 0)).xyz.varying("v_tangentView").normalize().toVar("tangentView");
  const getBitangent = (crossNormalTangent) => crossNormalTangent.mul(tangentGeometry.w).xyz;
  const bitangentView = /* @__PURE__ */ varying(getBitangent(normalView.cross(tangentView)), "v_bitangentView").normalize().toVar("bitangentView");
  const TBNViewMatrix = /* @__PURE__ */ mat3(tangentView, bitangentView, normalView);
  const perturbNormal2Arb = /* @__PURE__ */ Fn((inputs) => {
    const { eye_pos, surf_norm, mapN, uv: uv2 } = inputs;
    const q0 = eye_pos.dFdx();
    const q1 = eye_pos.dFdy();
    const st0 = uv2.dFdx();
    const st1 = uv2.dFdy();
    const N = surf_norm;
    const q1perp = q1.cross(N);
    const q0perp = N.cross(q0);
    const T = q1perp.mul(st0.x).add(q0perp.mul(st1.x));
    const B = q1perp.mul(st0.y).add(q0perp.mul(st1.y));
    const det = T.dot(T).max(B.dot(B));
    const scale = faceDirection.mul(det.inverseSqrt());
    return add(T.mul(mapN.x, scale), B.mul(mapN.y, scale), N.mul(mapN.z)).normalize();
  });
  class NormalMapNode extends TempNode {
    static get type() {
      return "NormalMapNode";
    }
    constructor(node, scaleNode = null) {
      super("vec3");
      this.node = node;
      this.scaleNode = scaleNode;
      this.normalMapType = TangentSpaceNormalMap;
    }
    setup(builder) {
      const { normalMapType, scaleNode } = this;
      let normalMap2 = this.node.mul(2).sub(1);
      if (scaleNode !== null) {
        normalMap2 = vec3(normalMap2.xy.mul(scaleNode), normalMap2.z);
      }
      let outputNode = null;
      if (normalMapType === ObjectSpaceNormalMap) {
        outputNode = transformNormalToView(normalMap2);
      } else if (normalMapType === TangentSpaceNormalMap) {
        const tangent = builder.hasGeometryAttribute("tangent");
        if (tangent === true) {
          outputNode = TBNViewMatrix.mul(normalMap2).normalize();
        } else {
          outputNode = perturbNormal2Arb({
            eye_pos: positionView,
            surf_norm: normalView,
            mapN: normalMap2,
            uv: uv()
          });
        }
      }
      return outputNode;
    }
  }
  const normalMap = /* @__PURE__ */ nodeProxy(NormalMapNode);
  const dHdxy_fwd = Fn(({ textureNode, bumpScale }) => {
    const sampleTexture = (callback) => textureNode.cache().context({ getUV: (texNode) => callback(texNode.uvNode || uv()), forceUVContext: true });
    const Hll = float(sampleTexture((uvNode) => uvNode));
    return vec2(
      float(sampleTexture((uvNode) => uvNode.add(uvNode.dFdx()))).sub(Hll),
      float(sampleTexture((uvNode) => uvNode.add(uvNode.dFdy()))).sub(Hll)
    ).mul(bumpScale);
  });
  const perturbNormalArb = Fn((inputs) => {
    const { surf_pos, surf_norm, dHdxy } = inputs;
    const vSigmaX = surf_pos.dFdx().normalize();
    const vSigmaY = surf_pos.dFdy().normalize();
    const vN = surf_norm;
    const R1 = vSigmaY.cross(vN);
    const R2 = vN.cross(vSigmaX);
    const fDet = vSigmaX.dot(R1).mul(faceDirection);
    const vGrad = fDet.sign().mul(dHdxy.x.mul(R1).add(dHdxy.y.mul(R2)));
    return fDet.abs().mul(surf_norm).sub(vGrad).normalize();
  });
  class BumpMapNode extends TempNode {
    static get type() {
      return "BumpMapNode";
    }
    constructor(textureNode, scaleNode = null) {
      super("vec3");
      this.textureNode = textureNode;
      this.scaleNode = scaleNode;
    }
    setup() {
      const bumpScale = this.scaleNode !== null ? this.scaleNode : 1;
      const dHdxy = dHdxy_fwd({ textureNode: this.textureNode, bumpScale });
      return perturbNormalArb({
        surf_pos: positionView,
        surf_norm: normalView,
        dHdxy
      });
    }
  }
  const bumpMap = /* @__PURE__ */ nodeProxy(BumpMapNode);
  const _propertyCache = /* @__PURE__ */ new Map();
  class MaterialNode extends Node {
    static get type() {
      return "MaterialNode";
    }
    constructor(scope) {
      super();
      this.scope = scope;
    }
    getCache(property2, type) {
      let node = _propertyCache.get(property2);
      if (node === void 0) {
        node = materialReference(property2, type);
        _propertyCache.set(property2, node);
      }
      return node;
    }
    getFloat(property2) {
      return this.getCache(property2, "float");
    }
    getColor(property2) {
      return this.getCache(property2, "color");
    }
    getTexture(property2) {
      return this.getCache(property2 === "map" ? "map" : property2 + "Map", "texture");
    }
    setup(builder) {
      const material = builder.context.material;
      const scope = this.scope;
      let node = null;
      if (scope === MaterialNode.COLOR) {
        const colorNode = material.color !== void 0 ? this.getColor(scope) : vec3();
        if (material.map && material.map.isTexture === true) {
          node = colorNode.mul(this.getTexture("map"));
        } else {
          node = colorNode;
        }
      } else if (scope === MaterialNode.OPACITY) {
        const opacityNode = this.getFloat(scope);
        if (material.alphaMap && material.alphaMap.isTexture === true) {
          node = opacityNode.mul(this.getTexture("alpha"));
        } else {
          node = opacityNode;
        }
      } else if (scope === MaterialNode.SPECULAR_STRENGTH) {
        if (material.specularMap && material.specularMap.isTexture === true) {
          node = this.getTexture("specular").r;
        } else {
          node = float(1);
        }
      } else if (scope === MaterialNode.SPECULAR_INTENSITY) {
        const specularIntensity = this.getFloat(scope);
        if (material.specularMap) {
          node = specularIntensity.mul(this.getTexture(scope).a);
        } else {
          node = specularIntensity;
        }
      } else if (scope === MaterialNode.SPECULAR_COLOR) {
        const specularColorNode = this.getColor(scope);
        if (material.specularColorMap && material.specularColorMap.isTexture === true) {
          node = specularColorNode.mul(this.getTexture(scope).rgb);
        } else {
          node = specularColorNode;
        }
      } else if (scope === MaterialNode.ROUGHNESS) {
        const roughnessNode = this.getFloat(scope);
        if (material.roughnessMap && material.roughnessMap.isTexture === true) {
          node = roughnessNode.mul(this.getTexture(scope).g);
        } else {
          node = roughnessNode;
        }
      } else if (scope === MaterialNode.METALNESS) {
        const metalnessNode = this.getFloat(scope);
        if (material.metalnessMap && material.metalnessMap.isTexture === true) {
          node = metalnessNode.mul(this.getTexture(scope).b);
        } else {
          node = metalnessNode;
        }
      } else if (scope === MaterialNode.EMISSIVE) {
        const emissiveIntensityNode = this.getFloat("emissiveIntensity");
        const emissiveNode = this.getColor(scope).mul(emissiveIntensityNode);
        if (material.emissiveMap && material.emissiveMap.isTexture === true) {
          node = emissiveNode.mul(this.getTexture(scope));
        } else {
          node = emissiveNode;
        }
      } else if (scope === MaterialNode.NORMAL) {
        if (material.normalMap) {
          node = normalMap(this.getTexture("normal"), this.getCache("normalScale", "vec2"));
          node.normalMapType = material.normalMapType;
        } else if (material.bumpMap) {
          node = bumpMap(this.getTexture("bump").r, this.getFloat("bumpScale"));
        } else {
          node = normalView;
        }
      } else if (scope === MaterialNode.CLEARCOAT) {
        const clearcoatNode = this.getFloat(scope);
        if (material.clearcoatMap && material.clearcoatMap.isTexture === true) {
          node = clearcoatNode.mul(this.getTexture(scope).r);
        } else {
          node = clearcoatNode;
        }
      } else if (scope === MaterialNode.CLEARCOAT_ROUGHNESS) {
        const clearcoatRoughnessNode = this.getFloat(scope);
        if (material.clearcoatRoughnessMap && material.clearcoatRoughnessMap.isTexture === true) {
          node = clearcoatRoughnessNode.mul(this.getTexture(scope).r);
        } else {
          node = clearcoatRoughnessNode;
        }
      } else if (scope === MaterialNode.CLEARCOAT_NORMAL) {
        if (material.clearcoatNormalMap) {
          node = normalMap(this.getTexture(scope), this.getCache(scope + "Scale", "vec2"));
        } else {
          node = normalView;
        }
      } else if (scope === MaterialNode.SHEEN) {
        const sheenNode = this.getColor("sheenColor").mul(this.getFloat("sheen"));
        if (material.sheenColorMap && material.sheenColorMap.isTexture === true) {
          node = sheenNode.mul(this.getTexture("sheenColor").rgb);
        } else {
          node = sheenNode;
        }
      } else if (scope === MaterialNode.SHEEN_ROUGHNESS) {
        const sheenRoughnessNode = this.getFloat(scope);
        if (material.sheenRoughnessMap && material.sheenRoughnessMap.isTexture === true) {
          node = sheenRoughnessNode.mul(this.getTexture(scope).a);
        } else {
          node = sheenRoughnessNode;
        }
        node = node.clamp(0.07, 1);
      } else if (scope === MaterialNode.ANISOTROPY) {
        if (material.anisotropyMap && material.anisotropyMap.isTexture === true) {
          const anisotropyPolar = this.getTexture(scope);
          const anisotropyMat = mat2(materialAnisotropyVector.x, materialAnisotropyVector.y, materialAnisotropyVector.y.negate(), materialAnisotropyVector.x);
          node = anisotropyMat.mul(anisotropyPolar.rg.mul(2).sub(vec2(1)).normalize().mul(anisotropyPolar.b));
        } else {
          node = materialAnisotropyVector;
        }
      } else if (scope === MaterialNode.IRIDESCENCE_THICKNESS) {
        const iridescenceThicknessMaximum = reference("1", "float", material.iridescenceThicknessRange);
        if (material.iridescenceThicknessMap) {
          const iridescenceThicknessMinimum = reference("0", "float", material.iridescenceThicknessRange);
          node = iridescenceThicknessMaximum.sub(iridescenceThicknessMinimum).mul(this.getTexture(scope).g).add(iridescenceThicknessMinimum);
        } else {
          node = iridescenceThicknessMaximum;
        }
      } else if (scope === MaterialNode.TRANSMISSION) {
        const transmissionNode = this.getFloat(scope);
        if (material.transmissionMap) {
          node = transmissionNode.mul(this.getTexture(scope).r);
        } else {
          node = transmissionNode;
        }
      } else if (scope === MaterialNode.THICKNESS) {
        const thicknessNode = this.getFloat(scope);
        if (material.thicknessMap) {
          node = thicknessNode.mul(this.getTexture(scope).g);
        } else {
          node = thicknessNode;
        }
      } else if (scope === MaterialNode.IOR) {
        node = this.getFloat(scope);
      } else if (scope === MaterialNode.LIGHT_MAP) {
        node = this.getTexture(scope).rgb.mul(this.getFloat("lightMapIntensity"));
      } else if (scope === MaterialNode.AO_MAP) {
        node = this.getTexture(scope).r.sub(1).mul(this.getFloat("aoMapIntensity")).add(1);
      } else {
        const outputType = this.getNodeType(builder);
        node = this.getCache(scope, outputType);
      }
      return node;
    }
  }
  MaterialNode.ALPHA_TEST = "alphaTest";
  MaterialNode.COLOR = "color";
  MaterialNode.OPACITY = "opacity";
  MaterialNode.SHININESS = "shininess";
  MaterialNode.SPECULAR = "specular";
  MaterialNode.SPECULAR_STRENGTH = "specularStrength";
  MaterialNode.SPECULAR_INTENSITY = "specularIntensity";
  MaterialNode.SPECULAR_COLOR = "specularColor";
  MaterialNode.REFLECTIVITY = "reflectivity";
  MaterialNode.ROUGHNESS = "roughness";
  MaterialNode.METALNESS = "metalness";
  MaterialNode.NORMAL = "normal";
  MaterialNode.CLEARCOAT = "clearcoat";
  MaterialNode.CLEARCOAT_ROUGHNESS = "clearcoatRoughness";
  MaterialNode.CLEARCOAT_NORMAL = "clearcoatNormal";
  MaterialNode.EMISSIVE = "emissive";
  MaterialNode.ROTATION = "rotation";
  MaterialNode.SHEEN = "sheen";
  MaterialNode.SHEEN_ROUGHNESS = "sheenRoughness";
  MaterialNode.ANISOTROPY = "anisotropy";
  MaterialNode.IRIDESCENCE = "iridescence";
  MaterialNode.IRIDESCENCE_IOR = "iridescenceIOR";
  MaterialNode.IRIDESCENCE_THICKNESS = "iridescenceThickness";
  MaterialNode.IOR = "ior";
  MaterialNode.TRANSMISSION = "transmission";
  MaterialNode.THICKNESS = "thickness";
  MaterialNode.ATTENUATION_DISTANCE = "attenuationDistance";
  MaterialNode.ATTENUATION_COLOR = "attenuationColor";
  MaterialNode.LINE_SCALE = "scale";
  MaterialNode.LINE_DASH_SIZE = "dashSize";
  MaterialNode.LINE_GAP_SIZE = "gapSize";
  MaterialNode.LINE_WIDTH = "linewidth";
  MaterialNode.LINE_DASH_OFFSET = "dashOffset";
  MaterialNode.POINT_WIDTH = "pointWidth";
  MaterialNode.DISPERSION = "dispersion";
  MaterialNode.LIGHT_MAP = "light";
  MaterialNode.AO_MAP = "ao";
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.ALPHA_TEST);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.COLOR);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.SHININESS);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.EMISSIVE);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.OPACITY);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.SPECULAR);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.SPECULAR_INTENSITY);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.SPECULAR_COLOR);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.SPECULAR_STRENGTH);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.REFLECTIVITY);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.ROUGHNESS);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.METALNESS);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.CLEARCOAT);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.CLEARCOAT_ROUGHNESS);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.ROTATION);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.SHEEN);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.SHEEN_ROUGHNESS);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.ANISOTROPY);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.IRIDESCENCE);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.IRIDESCENCE_IOR);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.IRIDESCENCE_THICKNESS);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.TRANSMISSION);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.THICKNESS);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.IOR);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.ATTENUATION_DISTANCE);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.ATTENUATION_COLOR);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.LINE_SCALE);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.LINE_DASH_SIZE);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.LINE_GAP_SIZE);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.LINE_WIDTH);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.LINE_DASH_OFFSET);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.POINT_WIDTH);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.DISPERSION);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.LIGHT_MAP);
  /* @__PURE__ */ nodeImmutable(MaterialNode, MaterialNode.AO_MAP);
  const materialAnisotropyVector = /* @__PURE__ */ uniform(new Vector2()).onReference(function(frame) {
    return frame.material;
  }).onRenderUpdate(function({ material }) {
    this.value.set(material.anisotropy * Math.cos(material.anisotropyRotation), material.anisotropy * Math.sin(material.anisotropyRotation));
  });
  class IndexNode extends Node {
    static get type() {
      return "IndexNode";
    }
    constructor(scope) {
      super("uint");
      this.scope = scope;
      this.isInstanceIndexNode = true;
    }
    generate(builder) {
      const nodeType = this.getNodeType(builder);
      const scope = this.scope;
      let propertyName;
      if (scope === IndexNode.VERTEX) {
        propertyName = builder.getVertexIndex();
      } else if (scope === IndexNode.INSTANCE) {
        propertyName = builder.getInstanceIndex();
      } else if (scope === IndexNode.DRAW) {
        propertyName = builder.getDrawIndex();
      } else if (scope === IndexNode.INVOCATION_LOCAL) {
        propertyName = builder.getInvocationLocalIndex();
      } else if (scope === IndexNode.INVOCATION_SUBGROUP) {
        propertyName = builder.getInvocationSubgroupIndex();
      } else if (scope === IndexNode.SUBGROUP) {
        propertyName = builder.getSubgroupIndex();
      } else {
        throw new Error("THREE.IndexNode: Unknown scope: " + scope);
      }
      let output;
      if (builder.shaderStage === "vertex" || builder.shaderStage === "compute") {
        output = propertyName;
      } else {
        const nodeVarying = varying(this);
        output = nodeVarying.build(builder, nodeType);
      }
      return output;
    }
  }
  IndexNode.VERTEX = "vertex";
  IndexNode.INSTANCE = "instance";
  IndexNode.SUBGROUP = "subgroup";
  IndexNode.INVOCATION_LOCAL = "invocationLocal";
  IndexNode.INVOCATION_SUBGROUP = "invocationSubgroup";
  IndexNode.DRAW = "draw";
  /* @__PURE__ */ nodeImmutable(IndexNode, IndexNode.VERTEX);
  /* @__PURE__ */ nodeImmutable(IndexNode, IndexNode.INSTANCE);
  /* @__PURE__ */ nodeImmutable(IndexNode, IndexNode.SUBGROUP);
  /* @__PURE__ */ nodeImmutable(IndexNode, IndexNode.INVOCATION_SUBGROUP);
  /* @__PURE__ */ nodeImmutable(IndexNode, IndexNode.INVOCATION_LOCAL);
  /* @__PURE__ */ nodeImmutable(IndexNode, IndexNode.DRAW);
  class LoopNode extends Node {
    static get type() {
      return "LoopNode";
    }
    constructor(params = []) {
      super();
      this.params = params;
    }
    getVarName(index) {
      return String.fromCharCode("i".charCodeAt() + index);
    }
    getProperties(builder) {
      const properties = builder.getNodeProperties(this);
      if (properties.stackNode !== void 0) return properties;
      const inputs = {};
      for (let i = 0, l = this.params.length - 1; i < l; i++) {
        const param = this.params[i];
        const name = param.isNode !== true && param.name || this.getVarName(i);
        const type = param.isNode !== true && param.type || "int";
        inputs[name] = expression(name, type);
      }
      const stack = builder.addStack();
      properties.returnsNode = this.params[this.params.length - 1](inputs, stack, builder);
      properties.stackNode = stack;
      builder.removeStack();
      return properties;
    }
    getNodeType(builder) {
      const { returnsNode } = this.getProperties(builder);
      return returnsNode ? returnsNode.getNodeType(builder) : "void";
    }
    setup(builder) {
      this.getProperties(builder);
    }
    generate(builder) {
      const properties = this.getProperties(builder);
      const params = this.params;
      const stackNode = properties.stackNode;
      for (let i = 0, l = params.length - 1; i < l; i++) {
        const param = params[i];
        let start = null, end = null, name = null, type = null, condition = null, update = null;
        if (param.isNode) {
          type = "int";
          name = this.getVarName(i);
          start = "0";
          end = param.build(builder, type);
          condition = "<";
        } else {
          type = param.type || "int";
          name = param.name || this.getVarName(i);
          start = param.start;
          end = param.end;
          condition = param.condition;
          update = param.update;
          if (typeof start === "number") start = start.toString();
          else if (start && start.isNode) start = start.build(builder, type);
          if (typeof end === "number") end = end.toString();
          else if (end && end.isNode) end = end.build(builder, type);
          if (start !== void 0 && end === void 0) {
            start = start + " - 1";
            end = "0";
            condition = ">=";
          } else if (end !== void 0 && start === void 0) {
            start = "0";
            condition = "<";
          }
          if (condition === void 0) {
            if (Number(start) > Number(end)) {
              condition = ">=";
            } else {
              condition = "<";
            }
          }
        }
        const internalParam = { start, end };
        const startSnippet = internalParam.start;
        const endSnippet = internalParam.end;
        let declarationSnippet = "";
        let conditionalSnippet = "";
        let updateSnippet = "";
        if (!update) {
          if (type === "int" || type === "uint") {
            if (condition.includes("<")) update = "++";
            else update = "--";
          } else {
            if (condition.includes("<")) update = "+= 1.";
            else update = "-= 1.";
          }
        }
        declarationSnippet += builder.getVar(type, name) + " = " + startSnippet;
        conditionalSnippet += name + " " + condition + " " + endSnippet;
        updateSnippet += name + " " + update;
        const forSnippet = `for ( ${declarationSnippet}; ${conditionalSnippet}; ${updateSnippet} )`;
        builder.addFlowCode((i === 0 ? "\n" : "") + builder.tab + forSnippet + " {\n\n").addFlowTab();
      }
      const stackSnippet = stackNode.build(builder, "void");
      const returnsSnippet = properties.returnsNode ? properties.returnsNode.build(builder) : "";
      builder.removeFlowTab().addFlowCode("\n" + builder.tab + stackSnippet);
      for (let i = 0, l = this.params.length - 1; i < l; i++) {
        builder.addFlowCode((i === 0 ? "" : builder.tab) + "}\n\n").removeFlowTab();
      }
      builder.addFlowTab();
      return returnsSnippet;
    }
  }
  const Loop = (...params) => nodeObject(new LoopNode(nodeArray(params, "int"))).append();
  let screenSizeVec, viewportVec;
  class ScreenNode extends Node {
    static get type() {
      return "ScreenNode";
    }
    constructor(scope) {
      super();
      this.scope = scope;
      this.isViewportNode = true;
    }
    getNodeType() {
      if (this.scope === ScreenNode.VIEWPORT) return "vec4";
      else return "vec2";
    }
    getUpdateType() {
      let updateType = NodeUpdateType.NONE;
      if (this.scope === ScreenNode.SIZE || this.scope === ScreenNode.VIEWPORT) {
        updateType = NodeUpdateType.RENDER;
      }
      this.updateType = updateType;
      return updateType;
    }
    update({ renderer }) {
      const renderTarget = renderer.getRenderTarget();
      if (this.scope === ScreenNode.VIEWPORT) {
        if (renderTarget !== null) {
          viewportVec.copy(renderTarget.viewport);
        } else {
          renderer.getViewport(viewportVec);
          viewportVec.multiplyScalar(renderer.getPixelRatio());
        }
      } else {
        if (renderTarget !== null) {
          screenSizeVec.width = renderTarget.width;
          screenSizeVec.height = renderTarget.height;
        } else {
          renderer.getDrawingBufferSize(screenSizeVec);
        }
      }
    }
    setup() {
      const scope = this.scope;
      let output = null;
      if (scope === ScreenNode.SIZE) {
        output = uniform(screenSizeVec || (screenSizeVec = new Vector2()));
      } else if (scope === ScreenNode.VIEWPORT) {
        output = uniform(viewportVec || (viewportVec = new Vector4()));
      } else {
        output = vec2(screenCoordinate.div(screenSize));
      }
      return output;
    }
    generate(builder) {
      if (this.scope === ScreenNode.COORDINATE) {
        let coord = builder.getFragCoord();
        if (builder.isFlipY()) {
          const size = builder.getNodeProperties(screenSize).outputNode.build(builder);
          coord = `${builder.getType("vec2")}( ${coord}.x, ${size}.y - ${coord}.y )`;
        }
        return coord;
      }
      return super.generate(builder);
    }
  }
  ScreenNode.COORDINATE = "coordinate";
  ScreenNode.VIEWPORT = "viewport";
  ScreenNode.SIZE = "size";
  ScreenNode.UV = "uv";
  const screenUV = /* @__PURE__ */ nodeImmutable(ScreenNode, ScreenNode.UV);
  const screenSize = /* @__PURE__ */ nodeImmutable(ScreenNode, ScreenNode.SIZE);
  const screenCoordinate = /* @__PURE__ */ nodeImmutable(ScreenNode, ScreenNode.COORDINATE);
  const viewport = /* @__PURE__ */ nodeImmutable(ScreenNode, ScreenNode.VIEWPORT);
  viewport.zw;
  /* @__PURE__ */ screenCoordinate.sub(viewport.xy);
  const _size$9 = /* @__PURE__ */ new Vector2();
  class ViewportTextureNode extends TextureNode {
    static get type() {
      return "ViewportTextureNode";
    }
    constructor(uvNode = screenUV, levelNode = null, framebufferTexture = null) {
      if (framebufferTexture === null) {
        framebufferTexture = new FramebufferTexture();
        framebufferTexture.minFilter = LinearMipmapLinearFilter;
      }
      super(framebufferTexture, uvNode, levelNode);
      this.generateMipmaps = false;
      this.isOutputTextureNode = true;
      this.updateBeforeType = NodeUpdateType.FRAME;
    }
    updateBefore(frame) {
      const renderer = frame.renderer;
      renderer.getDrawingBufferSize(_size$9);
      const framebufferTexture = this.value;
      if (framebufferTexture.image.width !== _size$9.width || framebufferTexture.image.height !== _size$9.height) {
        framebufferTexture.image.width = _size$9.width;
        framebufferTexture.image.height = _size$9.height;
        framebufferTexture.needsUpdate = true;
      }
      const currentGenerateMipmaps = framebufferTexture.generateMipmaps;
      framebufferTexture.generateMipmaps = this.generateMipmaps;
      renderer.copyFramebufferToTexture(framebufferTexture);
      framebufferTexture.generateMipmaps = currentGenerateMipmaps;
    }
    clone() {
      const viewportTextureNode = new this.constructor(this.uvNode, this.levelNode, this.value);
      viewportTextureNode.generateMipmaps = this.generateMipmaps;
      return viewportTextureNode;
    }
  }
  let sharedDepthbuffer = null;
  class ViewportDepthTextureNode extends ViewportTextureNode {
    static get type() {
      return "ViewportDepthTextureNode";
    }
    constructor(uvNode = screenUV, levelNode = null) {
      if (sharedDepthbuffer === null) {
        sharedDepthbuffer = new DepthTexture();
      }
      super(uvNode, levelNode, sharedDepthbuffer);
    }
  }
  const viewportDepthTexture = /* @__PURE__ */ nodeProxy(ViewportDepthTextureNode);
  class ViewportDepthNode extends Node {
    static get type() {
      return "ViewportDepthNode";
    }
    constructor(scope, valueNode = null) {
      super("float");
      this.scope = scope;
      this.valueNode = valueNode;
      this.isViewportDepthNode = true;
    }
    generate(builder) {
      const { scope } = this;
      if (scope === ViewportDepthNode.DEPTH_BASE) {
        return builder.getFragDepth();
      }
      return super.generate(builder);
    }
    setup({ camera }) {
      const { scope } = this;
      const value = this.valueNode;
      let node = null;
      if (scope === ViewportDepthNode.DEPTH_BASE) {
        if (value !== null) {
          node = depthBase().assign(value);
        }
      } else if (scope === ViewportDepthNode.DEPTH) {
        if (camera.isPerspectiveCamera) {
          node = viewZToPerspectiveDepth(positionView.z, cameraNear, cameraFar);
        } else {
          node = viewZToOrthographicDepth(positionView.z, cameraNear, cameraFar);
        }
      } else if (scope === ViewportDepthNode.LINEAR_DEPTH) {
        if (value !== null) {
          if (camera.isPerspectiveCamera) {
            const viewZ = perspectiveDepthToViewZ(value, cameraNear, cameraFar);
            node = viewZToOrthographicDepth(viewZ, cameraNear, cameraFar);
          } else {
            node = value;
          }
        } else {
          node = viewZToOrthographicDepth(positionView.z, cameraNear, cameraFar);
        }
      }
      return node;
    }
  }
  ViewportDepthNode.DEPTH_BASE = "depthBase";
  ViewportDepthNode.DEPTH = "depth";
  ViewportDepthNode.LINEAR_DEPTH = "linearDepth";
  const viewZToOrthographicDepth = (viewZ, near, far) => viewZ.add(near).div(near.sub(far));
  const viewZToPerspectiveDepth = (viewZ, near, far) => near.add(viewZ).mul(far).div(far.sub(near).mul(viewZ));
  const perspectiveDepthToViewZ = (depth2, near, far) => near.mul(far).div(far.sub(near).mul(depth2).sub(far));
  const depthBase = /* @__PURE__ */ nodeProxy(ViewportDepthNode, ViewportDepthNode.DEPTH_BASE);
  const depth = /* @__PURE__ */ nodeImmutable(ViewportDepthNode, ViewportDepthNode.DEPTH);
  const linearDepth = /* @__PURE__ */ nodeProxy(ViewportDepthNode, ViewportDepthNode.LINEAR_DEPTH);
  /* @__PURE__ */ linearDepth(viewportDepthTexture());
  depth.assign = (value) => depthBase(value);
  class ClippingNode extends Node {
    static get type() {
      return "ClippingNode";
    }
    constructor(scope = ClippingNode.DEFAULT) {
      super();
      this.scope = scope;
    }
    setup(builder) {
      super.setup(builder);
      const clippingContext = builder.clippingContext;
      const { localClipIntersection, localClippingCount, globalClippingCount } = clippingContext;
      const numClippingPlanes = globalClippingCount + localClippingCount;
      const numUnionClippingPlanes = localClipIntersection ? numClippingPlanes - localClippingCount : numClippingPlanes;
      if (this.scope === ClippingNode.ALPHA_TO_COVERAGE) {
        return this.setupAlphaToCoverage(clippingContext.planes, numClippingPlanes, numUnionClippingPlanes);
      } else {
        return this.setupDefault(clippingContext.planes, numClippingPlanes, numUnionClippingPlanes);
      }
    }
    setupAlphaToCoverage(planes, numClippingPlanes, numUnionClippingPlanes) {
      return Fn(() => {
        const clippingPlanes = uniformArray(planes);
        const distanceToPlane = property("float", "distanceToPlane");
        const distanceGradient = property("float", "distanceToGradient");
        const clipOpacity = property("float", "clipOpacity");
        clipOpacity.assign(1);
        let plane;
        Loop(numUnionClippingPlanes, ({ i }) => {
          plane = clippingPlanes.element(i);
          distanceToPlane.assign(positionView.dot(plane.xyz).negate().add(plane.w));
          distanceGradient.assign(distanceToPlane.fwidth().div(2));
          clipOpacity.mulAssign(smoothstep(distanceGradient.negate(), distanceGradient, distanceToPlane));
          clipOpacity.equal(0).discard();
        });
        if (numUnionClippingPlanes < numClippingPlanes) {
          const unionClipOpacity = property("float", "unionclipOpacity");
          unionClipOpacity.assign(1);
          Loop({ start: numUnionClippingPlanes, end: numClippingPlanes }, ({ i }) => {
            plane = clippingPlanes.element(i);
            distanceToPlane.assign(positionView.dot(plane.xyz).negate().add(plane.w));
            distanceGradient.assign(distanceToPlane.fwidth().div(2));
            unionClipOpacity.mulAssign(smoothstep(distanceGradient.negate(), distanceGradient, distanceToPlane).oneMinus());
          });
          clipOpacity.mulAssign(unionClipOpacity.oneMinus());
        }
        diffuseColor.a.mulAssign(clipOpacity);
        diffuseColor.a.equal(0).discard();
      })();
    }
    setupDefault(planes, numClippingPlanes, numUnionClippingPlanes) {
      return Fn(() => {
        const clippingPlanes = uniformArray(planes);
        let plane;
        Loop(numUnionClippingPlanes, ({ i }) => {
          plane = clippingPlanes.element(i);
          positionView.dot(plane.xyz).greaterThan(plane.w).discard();
        });
        if (numUnionClippingPlanes < numClippingPlanes) {
          const clipped = property("bool", "clipped");
          clipped.assign(true);
          Loop({ start: numUnionClippingPlanes, end: numClippingPlanes }, ({ i }) => {
            plane = clippingPlanes.element(i);
            clipped.assign(positionView.dot(plane.xyz).greaterThan(plane.w).and(clipped));
          });
          clipped.discard();
        }
      })();
    }
  }
  ClippingNode.ALPHA_TO_COVERAGE = "alphaToCoverage";
  ClippingNode.DEFAULT = "default";
  vec3(0.04);
  float(1);
  const getDirection = /* @__PURE__ */ Fn(([uv_immutable, face]) => {
    const uv2 = uv_immutable.toVar();
    uv2.assign(mul(2, uv2).sub(1));
    const direction2 = vec3(uv2, 1).toVar();
    If(face.equal(0), () => {
      direction2.assign(direction2.zyx);
    }).ElseIf(face.equal(1), () => {
      direction2.assign(direction2.xzy);
      direction2.xz.mulAssign(-1);
    }).ElseIf(face.equal(2), () => {
      direction2.x.mulAssign(-1);
    }).ElseIf(face.equal(3), () => {
      direction2.assign(direction2.zyx);
      direction2.xz.mulAssign(-1);
    }).ElseIf(face.equal(4), () => {
      direction2.assign(direction2.xzy);
      direction2.xy.mulAssign(-1);
    }).ElseIf(face.equal(5), () => {
      direction2.z.mulAssign(-1);
    });
    return direction2;
  }).setLayout({
    name: "getDirection",
    type: "vec3",
    inputs: [
      { name: "uv", type: "vec2" },
      { name: "face", type: "float" }
    ]
  });
  Fn(({ texture: texture2, uv: uv2 }) => {
    const epsilon = 1e-4;
    const ret = vec3().toVar();
    If(uv2.x.lessThan(epsilon), () => {
      ret.assign(vec3(1, 0, 0));
    }).ElseIf(uv2.y.lessThan(epsilon), () => {
      ret.assign(vec3(0, 1, 0));
    }).ElseIf(uv2.z.lessThan(epsilon), () => {
      ret.assign(vec3(0, 0, 1));
    }).ElseIf(uv2.x.greaterThan(1 - epsilon), () => {
      ret.assign(vec3(-1, 0, 0));
    }).ElseIf(uv2.y.greaterThan(1 - epsilon), () => {
      ret.assign(vec3(0, -1, 0));
    }).ElseIf(uv2.z.greaterThan(1 - epsilon), () => {
      ret.assign(vec3(0, 0, -1));
    }).Else(() => {
      const step2 = 0.01;
      const x = texture2.uv(uv2.add(vec3(-step2, 0, 0))).r.sub(texture2.uv(uv2.add(vec3(step2, 0, 0))).r);
      const y = texture2.uv(uv2.add(vec3(0, -step2, 0))).r.sub(texture2.uv(uv2.add(vec3(0, step2, 0))).r);
      const z = texture2.uv(uv2.add(vec3(0, 0, -step2))).r.sub(texture2.uv(uv2.add(vec3(0, 0, step2))).r);
      ret.assign(vec3(x, y, z));
    });
    return ret.normalize();
  });
  const direction = getDirection(uv(), attribute("faceIndex")).normalize();
  vec3(direction.x, direction.y.negate(), direction.z);
  class TimerNode extends UniformNode {
    static get type() {
      return "TimerNode";
    }
    constructor(scope = TimerNode.LOCAL, scale = 1, value = 0) {
      super(value);
      this.scope = scope;
      this.scale = scale;
      this.updateType = NodeUpdateType.FRAME;
    }
    /*
    		@TODO:
    		getNodeType( builder ) {
    
    			const scope = this.scope;
    
    			if ( scope === TimerNode.FRAME ) {
    
    				return 'uint';
    
    			}
    
    			return 'float';
    
    		}
    	*/
    update(frame) {
      const scope = this.scope;
      const scale = this.scale;
      if (scope === TimerNode.LOCAL) {
        this.value += frame.deltaTime * scale;
      } else if (scope === TimerNode.DELTA) {
        this.value = frame.deltaTime * scale;
      } else if (scope === TimerNode.FRAME) {
        this.value = frame.frameId;
      } else {
        this.value = frame.time * scale;
      }
    }
    serialize(data) {
      super.serialize(data);
      data.scope = this.scope;
      data.scale = this.scale;
    }
    deserialize(data) {
      super.deserialize(data);
      this.scope = data.scope;
      this.scale = data.scale;
    }
  }
  TimerNode.LOCAL = "local";
  TimerNode.GLOBAL = "global";
  TimerNode.DELTA = "delta";
  TimerNode.FRAME = "frame";
  const timerLocal = (timeScale, value = 0) => nodeObject(new TimerNode(TimerNode.LOCAL, timeScale, value));
  class OscNode extends Node {
    static get type() {
      return "OscNode";
    }
    constructor(method = OscNode.SINE, timeNode = timerLocal()) {
      super();
      this.method = method;
      this.timeNode = timeNode;
    }
    getNodeType(builder) {
      return this.timeNode.getNodeType(builder);
    }
    setup() {
      const method = this.method;
      const timeNode = nodeObject(this.timeNode);
      let outputNode = null;
      if (method === OscNode.SINE) {
        outputNode = timeNode.add(0.75).mul(Math.PI * 2).sin().mul(0.5).add(0.5);
      } else if (method === OscNode.SQUARE) {
        outputNode = timeNode.fract().round();
      } else if (method === OscNode.TRIANGLE) {
        outputNode = timeNode.add(0.5).fract().mul(2).sub(1).abs();
      } else if (method === OscNode.SAWTOOTH) {
        outputNode = timeNode.fract();
      }
      return outputNode;
    }
    serialize(data) {
      super.serialize(data);
      data.method = this.method;
    }
    deserialize(data) {
      super.deserialize(data);
      this.method = data.method;
    }
  }
  OscNode.SINE = "sine";
  OscNode.SQUARE = "square";
  OscNode.TRIANGLE = "triangle";
  OscNode.SAWTOOTH = "sawtooth";
  /* @__PURE__ */ nodeProxy(OscNode, OscNode.SINE);
  /* @__PURE__ */ nodeProxy(OscNode, OscNode.SQUARE);
  /* @__PURE__ */ nodeProxy(OscNode, OscNode.TRIANGLE);
  /* @__PURE__ */ nodeProxy(OscNode, OscNode.SAWTOOTH);
  new Plane();
  new Vector3();
  new Vector3();
  new Vector3();
  new Matrix4();
  new Vector3(0, 0, -1);
  new Vector4();
  new Vector3();
  new Vector3();
  new Vector4();
  new Vector2();
  new RenderTarget();
  screenUV.flipX();
  class SceneNode extends Node {
    static get type() {
      return "SceneNode";
    }
    constructor(scope = SceneNode.BACKGROUND_BLURRINESS, scene = null) {
      super();
      this.scope = scope;
      this.scene = scene;
    }
    setup(builder) {
      const scope = this.scope;
      const scene = this.scene !== null ? this.scene : builder.scene;
      let output;
      if (scope === SceneNode.BACKGROUND_BLURRINESS) {
        output = reference("backgroundBlurriness", "float", scene);
      } else if (scope === SceneNode.BACKGROUND_INTENSITY) {
        output = reference("backgroundIntensity", "float", scene);
      } else {
        console.error("THREE.SceneNode: Unknown scope:", scope);
      }
      return output;
    }
  }
  SceneNode.BACKGROUND_BLURRINESS = "backgroundBlurriness";
  SceneNode.BACKGROUND_INTENSITY = "backgroundIntensity";
  /* @__PURE__ */ nodeImmutable(SceneNode, SceneNode.BACKGROUND_BLURRINESS);
  /* @__PURE__ */ nodeImmutable(SceneNode, SceneNode.BACKGROUND_INTENSITY);
  const _size$6 = /* @__PURE__ */ new Vector2();
  class PassTextureNode extends TextureNode {
    static get type() {
      return "PassTextureNode";
    }
    constructor(passNode, texture2) {
      super(texture2);
      this.passNode = passNode;
      this.setUpdateMatrix(false);
    }
    setup(builder) {
      if (builder.object.isQuadMesh) this.passNode.build(builder);
      return super.setup(builder);
    }
    clone() {
      return new this.constructor(this.passNode, this.value);
    }
  }
  class PassMultipleTextureNode extends PassTextureNode {
    static get type() {
      return "PassMultipleTextureNode";
    }
    constructor(passNode, textureName, previousTexture = false) {
      super(passNode, null);
      this.textureName = textureName;
      this.previousTexture = previousTexture;
    }
    updateTexture() {
      this.value = this.previousTexture ? this.passNode.getPreviousTexture(this.textureName) : this.passNode.getTexture(this.textureName);
    }
    setup(builder) {
      this.updateTexture();
      return super.setup(builder);
    }
    clone() {
      return new this.constructor(this.passNode, this.textureName, this.previousTexture);
    }
  }
  class PassNode extends TempNode {
    static get type() {
      return "PassNode";
    }
    constructor(scope, scene, camera, options = {}) {
      super("vec4");
      this.scope = scope;
      this.scene = scene;
      this.camera = camera;
      this.options = options;
      this._pixelRatio = 1;
      this._width = 1;
      this._height = 1;
      const depthTexture = new DepthTexture();
      depthTexture.isRenderTargetTexture = true;
      depthTexture.name = "depth";
      const renderTarget = new RenderTarget(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: HalfFloatType, ...options });
      renderTarget.texture.name = "output";
      renderTarget.depthTexture = depthTexture;
      this.renderTarget = renderTarget;
      this.updateBeforeType = NodeUpdateType.FRAME;
      this._textures = {
        output: renderTarget.texture,
        depth: depthTexture
      };
      this._textureNodes = {};
      this._linearDepthNodes = {};
      this._viewZNodes = {};
      this._previousTextures = {};
      this._previousTextureNodes = {};
      this._cameraNear = uniform(0);
      this._cameraFar = uniform(0);
      this._mrt = null;
      this.isPassNode = true;
    }
    setMRT(mrt) {
      this._mrt = mrt;
      return this;
    }
    getMRT() {
      return this._mrt;
    }
    isGlobal() {
      return true;
    }
    getTexture(name) {
      let texture2 = this._textures[name];
      if (texture2 === void 0) {
        const refTexture = this.renderTarget.texture;
        texture2 = refTexture.clone();
        texture2.isRenderTargetTexture = true;
        texture2.name = name;
        this._textures[name] = texture2;
        this.renderTarget.textures.push(texture2);
      }
      return texture2;
    }
    getPreviousTexture(name) {
      let texture2 = this._previousTextures[name];
      if (texture2 === void 0) {
        texture2 = this.getTexture(name).clone();
        texture2.isRenderTargetTexture = true;
        this._previousTextures[name] = texture2;
      }
      return texture2;
    }
    toggleTexture(name) {
      const prevTexture = this._previousTextures[name];
      if (prevTexture !== void 0) {
        const texture2 = this._textures[name];
        const index = this.renderTarget.textures.indexOf(texture2);
        this.renderTarget.textures[index] = prevTexture;
        this._textures[name] = prevTexture;
        this._previousTextures[name] = texture2;
        this._textureNodes[name].updateTexture();
        this._previousTextureNodes[name].updateTexture();
      }
    }
    getTextureNode(name = "output") {
      let textureNode = this._textureNodes[name];
      if (textureNode === void 0) {
        this._textureNodes[name] = textureNode = nodeObject(new PassMultipleTextureNode(this, name));
        this._textureNodes[name].updateTexture();
      }
      return textureNode;
    }
    getPreviousTextureNode(name = "output") {
      let textureNode = this._previousTextureNodes[name];
      if (textureNode === void 0) {
        if (this._textureNodes[name] === void 0) this.getTextureNode(name);
        this._previousTextureNodes[name] = textureNode = nodeObject(new PassMultipleTextureNode(this, name, true));
        this._previousTextureNodes[name].updateTexture();
      }
      return textureNode;
    }
    getViewZNode(name = "depth") {
      let viewZNode = this._viewZNodes[name];
      if (viewZNode === void 0) {
        const cameraNear2 = this._cameraNear;
        const cameraFar2 = this._cameraFar;
        this._viewZNodes[name] = viewZNode = perspectiveDepthToViewZ(this.getTextureNode(name), cameraNear2, cameraFar2);
      }
      return viewZNode;
    }
    getLinearDepthNode(name = "depth") {
      let linearDepthNode = this._linearDepthNodes[name];
      if (linearDepthNode === void 0) {
        const cameraNear2 = this._cameraNear;
        const cameraFar2 = this._cameraFar;
        const viewZNode = this.getViewZNode(name);
        this._linearDepthNodes[name] = linearDepthNode = viewZToOrthographicDepth(viewZNode, cameraNear2, cameraFar2);
      }
      return linearDepthNode;
    }
    setup({ renderer }) {
      this.renderTarget.samples = this.options.samples === void 0 ? renderer.samples : this.options.samples;
      if (renderer.backend.isWebGLBackend === true) {
        this.renderTarget.samples = 0;
      }
      this.renderTarget.depthTexture.isMultisampleRenderTargetTexture = this.renderTarget.samples > 1;
      return this.scope === PassNode.COLOR ? this.getTextureNode() : this.getLinearDepthNode();
    }
    updateBefore(frame) {
      const { renderer } = frame;
      const { scene, camera } = this;
      this._pixelRatio = renderer.getPixelRatio();
      const size = renderer.getSize(_size$6);
      this.setSize(size.width, size.height);
      const currentRenderTarget = renderer.getRenderTarget();
      const currentMRT = renderer.getMRT();
      this._cameraNear.value = camera.near;
      this._cameraFar.value = camera.far;
      for (const name in this._previousTextures) {
        this.toggleTexture(name);
      }
      renderer.setRenderTarget(this.renderTarget);
      renderer.setMRT(this._mrt);
      renderer.render(scene, camera);
      renderer.setRenderTarget(currentRenderTarget);
      renderer.setMRT(currentMRT);
    }
    setSize(width, height) {
      this._width = width;
      this._height = height;
      const effectiveWidth = this._width * this._pixelRatio;
      const effectiveHeight = this._height * this._pixelRatio;
      this.renderTarget.setSize(effectiveWidth, effectiveHeight);
    }
    setPixelRatio(pixelRatio) {
      this._pixelRatio = pixelRatio;
      this.setSize(this._width, this._height);
    }
    dispose() {
      this.renderTarget.dispose();
    }
  }
  PassNode.COLOR = "color";
  PassNode.DEPTH = "depth";
  Fn(({ depthTexture, shadowCoord }) => {
    return texture(depthTexture, shadowCoord.xy).compare(shadowCoord.z);
  });
  Fn(({ depthTexture, shadowCoord, shadow }) => {
    const depthCompare = (uv2, compare) => texture(depthTexture, uv2).compare(compare);
    const mapSize = reference("mapSize", "vec2", shadow).setGroup(renderGroup);
    const radius = reference("radius", "float", shadow).setGroup(renderGroup);
    const texelSize = vec2(1).div(mapSize);
    const dx0 = texelSize.x.negate().mul(radius);
    const dy0 = texelSize.y.negate().mul(radius);
    const dx1 = texelSize.x.mul(radius);
    const dy1 = texelSize.y.mul(radius);
    const dx2 = dx0.div(2);
    const dy2 = dy0.div(2);
    const dx3 = dx1.div(2);
    const dy3 = dy1.div(2);
    return add(
      depthCompare(shadowCoord.xy.add(vec2(dx0, dy0)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(0, dy0)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(dx1, dy0)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(dx2, dy2)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(0, dy2)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(dx3, dy2)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(dx0, 0)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(dx2, 0)), shadowCoord.z),
      depthCompare(shadowCoord.xy, shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(dx3, 0)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(dx1, 0)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(dx2, dy3)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(0, dy3)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(dx3, dy3)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(dx0, dy1)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(0, dy1)), shadowCoord.z),
      depthCompare(shadowCoord.xy.add(vec2(dx1, dy1)), shadowCoord.z)
    ).mul(1 / 17);
  });
  Fn(({ depthTexture, shadowCoord, shadow }) => {
    const depthCompare = (uv3, compare) => texture(depthTexture, uv3).compare(compare);
    const mapSize = reference("mapSize", "vec2", shadow).setGroup(renderGroup);
    const texelSize = vec2(1).div(mapSize);
    const dx = texelSize.x;
    const dy = texelSize.y;
    const uv2 = shadowCoord.xy;
    const f = fract(uv2.mul(mapSize).add(0.5));
    uv2.subAssign(f.mul(texelSize));
    return add(
      depthCompare(uv2, shadowCoord.z),
      depthCompare(uv2.add(vec2(dx, 0)), shadowCoord.z),
      depthCompare(uv2.add(vec2(0, dy)), shadowCoord.z),
      depthCompare(uv2.add(texelSize), shadowCoord.z),
      mix(
        depthCompare(uv2.add(vec2(dx.negate(), 0)), shadowCoord.z),
        depthCompare(uv2.add(vec2(dx.mul(2), 0)), shadowCoord.z),
        f.x
      ),
      mix(
        depthCompare(uv2.add(vec2(dx.negate(), dy)), shadowCoord.z),
        depthCompare(uv2.add(vec2(dx.mul(2), dy)), shadowCoord.z),
        f.x
      ),
      mix(
        depthCompare(uv2.add(vec2(0, dy.negate())), shadowCoord.z),
        depthCompare(uv2.add(vec2(0, dy.mul(2))), shadowCoord.z),
        f.y
      ),
      mix(
        depthCompare(uv2.add(vec2(dx, dy.negate())), shadowCoord.z),
        depthCompare(uv2.add(vec2(dx, dy.mul(2))), shadowCoord.z),
        f.y
      ),
      mix(
        mix(
          depthCompare(uv2.add(vec2(dx.negate(), dy.negate())), shadowCoord.z),
          depthCompare(uv2.add(vec2(dx.mul(2), dy.negate())), shadowCoord.z),
          f.x
        ),
        mix(
          depthCompare(uv2.add(vec2(dx.negate(), dy.mul(2))), shadowCoord.z),
          depthCompare(uv2.add(vec2(dx.mul(2), dy.mul(2))), shadowCoord.z),
          f.x
        ),
        f.y
      )
    ).mul(1 / 9);
  });
  Fn(({ depthTexture, shadowCoord }) => {
    const occlusion = float(1).toVar();
    const distribution = texture(depthTexture).uv(shadowCoord.xy).rg;
    const hardShadow = step(shadowCoord.z, distribution.x);
    If(hardShadow.notEqual(float(1)), () => {
      const distance2 = shadowCoord.z.sub(distribution.x);
      const variance = max$1(0, distribution.y.mul(distribution.y));
      let softnessProbability = variance.div(variance.add(distance2.mul(distance2)));
      softnessProbability = clamp(sub(softnessProbability, 0.3).div(0.95 - 0.3));
      occlusion.assign(clamp(max$1(hardShadow, softnessProbability)));
    });
    return occlusion;
  });
  Fn(({ samples, radius, size, shadowPass }) => {
    const mean = float(0).toVar();
    const squaredMean = float(0).toVar();
    const uvStride = samples.lessThanEqual(float(1)).select(float(0), float(2).div(samples.sub(1)));
    const uvStart = samples.lessThanEqual(float(1)).select(float(0), float(-1));
    Loop({ start: int(0), end: int(samples), type: "int", condition: "<" }, ({ i }) => {
      const uvOffset = uvStart.add(float(i).mul(uvStride));
      const depth2 = shadowPass.uv(add(screenCoordinate.xy, vec2(0, uvOffset).mul(radius)).div(size)).x;
      mean.addAssign(depth2);
      squaredMean.addAssign(depth2.mul(depth2));
    });
    mean.divAssign(samples);
    squaredMean.divAssign(samples);
    const std_dev = sqrt(squaredMean.sub(mean.mul(mean)));
    return vec2(mean, std_dev);
  });
  Fn(({ samples, radius, size, shadowPass }) => {
    const mean = float(0).toVar();
    const squaredMean = float(0).toVar();
    const uvStride = samples.lessThanEqual(float(1)).select(float(0), float(2).div(samples.sub(1)));
    const uvStart = samples.lessThanEqual(float(1)).select(float(0), float(-1));
    Loop({ start: int(0), end: int(samples), type: "int", condition: "<" }, ({ i }) => {
      const uvOffset = uvStart.add(float(i).mul(uvStride));
      const distribution = shadowPass.uv(add(screenCoordinate.xy, vec2(uvOffset, 0).mul(radius)).div(size));
      mean.addAssign(distribution.x);
      squaredMean.addAssign(add(distribution.y.mul(distribution.y), distribution.x.mul(distribution.x)));
    });
    mean.divAssign(samples);
    squaredMean.divAssign(samples);
    const std_dev = sqrt(squaredMean.sub(mean.mul(mean)));
    return vec2(mean, std_dev);
  });
  /* @__PURE__ */ mat3(vec3(1.6605, -0.1246, -0.0182), vec3(-0.5876, 1.1329, -0.1006), vec3(-0.0728, -83e-4, 1.1187));
  /* @__PURE__ */ mat3(vec3(0.6274, 0.0691, 0.0164), vec3(0.3293, 0.9195, 0.088), vec3(0.0433, 0.0113, 0.8956));
  class BarrierNode extends Node {
    constructor(scope) {
      super();
      this.scope = scope;
    }
    generate(builder) {
      const { scope } = this;
      const { renderer } = builder;
      if (renderer.backend.isWebGLBackend === true) {
        builder.addFlowCode(`	// ${scope}Barrier 
`);
      } else {
        builder.addLineFlowCode(`${scope}Barrier()`, this);
      }
    }
  }
  nodeProxy(BarrierNode);
  class AtomicFunctionNode extends TempNode {
    static get type() {
      return "AtomicFunctionNode";
    }
    constructor(method, pointerNode, valueNode, storeNode = null) {
      super("uint");
      this.method = method;
      this.pointerNode = pointerNode;
      this.valueNode = valueNode;
      this.storeNode = storeNode;
    }
    getInputType(builder) {
      return this.pointerNode.getNodeType(builder);
    }
    getNodeType(builder) {
      return this.getInputType(builder);
    }
    generate(builder) {
      const method = this.method;
      const type = this.getNodeType(builder);
      const inputType = this.getInputType(builder);
      const a = this.pointerNode;
      const b = this.valueNode;
      const params = [];
      params.push(`&${a.build(builder, inputType)}`);
      params.push(b.build(builder, inputType));
      const methodSnippet = `${builder.getMethod(method, type)}( ${params.join(", ")} )`;
      if (this.storeNode !== null) {
        const varSnippet = this.storeNode.build(builder, inputType);
        builder.addLineFlowCode(`${varSnippet} = ${methodSnippet}`, this);
      } else {
        builder.addLineFlowCode(methodSnippet, this);
      }
    }
  }
  AtomicFunctionNode.ATOMIC_LOAD = "atomicLoad";
  AtomicFunctionNode.ATOMIC_STORE = "atomicStore";
  AtomicFunctionNode.ATOMIC_ADD = "atomicAdd";
  AtomicFunctionNode.ATOMIC_SUB = "atomicSub";
  AtomicFunctionNode.ATOMIC_MAX = "atomicMax";
  AtomicFunctionNode.ATOMIC_MIN = "atomicMin";
  AtomicFunctionNode.ATOMIC_AND = "atomicAnd";
  AtomicFunctionNode.ATOMIC_OR = "atomicOr";
  AtomicFunctionNode.ATOMIC_XOR = "atomicXor";
  nodeProxy(AtomicFunctionNode);
  if (typeof __THREE_DEVTOOLS__ !== "undefined") {
    __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
      revision: REVISION
    } }));
  }
  if (typeof window !== "undefined") {
    try {
      if ({
        url: self.location.href
      }) {
        if (!window.__THREE__IMPORTS__) window.__THREE__IMPORTS__ = [];
        window.__THREE__IMPORTS__.push({ url: self.location.href, revision: REVISION });
      }
    } catch {
    }
    if (window.__THREE__) {
      console.warn("WARNING: Multiple instances of Three.js being imported. Existing: " + window.__THREE__ + ", new: " + REVISION);
      console.warn(window.__THREE__IMPORTS__);
    } else {
      window.__THREE__ = REVISION;
    }
  }
  const CENTER = 0;
  const AVERAGE = 1;
  const SAH = 2;
  const CONTAINED = 2;
  const TRIANGLE_INTERSECT_COST = 1.25;
  const TRAVERSAL_COST = 1;
  const BYTES_PER_NODE = 6 * 4 + 4 + 4;
  const IS_LEAFNODE_FLAG = 65535;
  const FLOAT32_EPSILON = Math.pow(2, -24);
  const SKIP_GENERATION = Symbol("SKIP_GENERATION");
  function getVertexCount(geo) {
    return geo.index ? geo.index.count : geo.attributes.position.count;
  }
  function getTriCount(geo) {
    return getVertexCount(geo) / 3;
  }
  function getIndexArray(vertexCount, BufferConstructor = ArrayBuffer) {
    if (vertexCount > 65535) {
      return new Uint32Array(new BufferConstructor(4 * vertexCount));
    } else {
      return new Uint16Array(new BufferConstructor(2 * vertexCount));
    }
  }
  function ensureIndex(geo, options) {
    if (!geo.index) {
      const vertexCount = geo.attributes.position.count;
      const BufferConstructor = options.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer;
      const index = getIndexArray(vertexCount, BufferConstructor);
      geo.setIndex(new BufferAttribute(index, 1));
      for (let i = 0; i < vertexCount; i++) {
        index[i] = i;
      }
    }
  }
  function getFullGeometryRange(geo, range) {
    const triCount = getTriCount(geo);
    const drawRange = range ? range : geo.drawRange;
    const start = drawRange.start / 3;
    const end = (drawRange.start + drawRange.count) / 3;
    const offset = Math.max(0, start);
    const count = Math.min(triCount, end) - offset;
    return [{
      offset: Math.floor(offset),
      count: Math.floor(count)
    }];
  }
  function getRootIndexRanges(geo, range) {
    if (!geo.groups || !geo.groups.length) {
      return getFullGeometryRange(geo, range);
    }
    const ranges = [];
    const rangeBoundaries = /* @__PURE__ */ new Set();
    const drawRange = range ? range : geo.drawRange;
    const drawRangeStart = drawRange.start / 3;
    const drawRangeEnd = (drawRange.start + drawRange.count) / 3;
    for (const group of geo.groups) {
      const groupStart = group.start / 3;
      const groupEnd = (group.start + group.count) / 3;
      rangeBoundaries.add(Math.max(drawRangeStart, groupStart));
      rangeBoundaries.add(Math.min(drawRangeEnd, groupEnd));
    }
    const sortedBoundaries = Array.from(rangeBoundaries.values()).sort((a, b) => a - b);
    for (let i = 0; i < sortedBoundaries.length - 1; i++) {
      const start = sortedBoundaries[i];
      const end = sortedBoundaries[i + 1];
      ranges.push({
        offset: Math.floor(start),
        count: Math.floor(end - start)
      });
    }
    return ranges;
  }
  function hasGroupGaps(geometry, range) {
    const vertexCount = getTriCount(geometry);
    const groups = getRootIndexRanges(geometry, range).sort((a, b) => a.offset - b.offset);
    const finalGroup = groups[groups.length - 1];
    finalGroup.count = Math.min(vertexCount - finalGroup.offset, finalGroup.count);
    let total = 0;
    groups.forEach(({ count }) => total += count);
    return vertexCount !== total;
  }
  function getBounds(triangleBounds, offset, count, target, centroidTarget) {
    let minx = Infinity;
    let miny = Infinity;
    let minz = Infinity;
    let maxx = -Infinity;
    let maxy = -Infinity;
    let maxz = -Infinity;
    let cminx = Infinity;
    let cminy = Infinity;
    let cminz = Infinity;
    let cmaxx = -Infinity;
    let cmaxy = -Infinity;
    let cmaxz = -Infinity;
    for (let i = offset * 6, end = (offset + count) * 6; i < end; i += 6) {
      const cx = triangleBounds[i + 0];
      const hx = triangleBounds[i + 1];
      const lx = cx - hx;
      const rx = cx + hx;
      if (lx < minx) minx = lx;
      if (rx > maxx) maxx = rx;
      if (cx < cminx) cminx = cx;
      if (cx > cmaxx) cmaxx = cx;
      const cy = triangleBounds[i + 2];
      const hy = triangleBounds[i + 3];
      const ly = cy - hy;
      const ry = cy + hy;
      if (ly < miny) miny = ly;
      if (ry > maxy) maxy = ry;
      if (cy < cminy) cminy = cy;
      if (cy > cmaxy) cmaxy = cy;
      const cz = triangleBounds[i + 4];
      const hz = triangleBounds[i + 5];
      const lz = cz - hz;
      const rz = cz + hz;
      if (lz < minz) minz = lz;
      if (rz > maxz) maxz = rz;
      if (cz < cminz) cminz = cz;
      if (cz > cmaxz) cmaxz = cz;
    }
    target[0] = minx;
    target[1] = miny;
    target[2] = minz;
    target[3] = maxx;
    target[4] = maxy;
    target[5] = maxz;
    centroidTarget[0] = cminx;
    centroidTarget[1] = cminy;
    centroidTarget[2] = cminz;
    centroidTarget[3] = cmaxx;
    centroidTarget[4] = cmaxy;
    centroidTarget[5] = cmaxz;
  }
  function computeTriangleBounds(geo, target = null, offset = null, count = null) {
    const posAttr = geo.attributes.position;
    const index = geo.index ? geo.index.array : null;
    const triCount = getTriCount(geo);
    const normalized = posAttr.normalized;
    let triangleBounds;
    if (target === null) {
      triangleBounds = new Float32Array(triCount * 6);
      offset = 0;
      count = triCount;
    } else {
      triangleBounds = target;
      offset = offset || 0;
      count = count || triCount;
    }
    const posArr = posAttr.array;
    const bufferOffset = posAttr.offset || 0;
    let stride = 3;
    if (posAttr.isInterleavedBufferAttribute) {
      stride = posAttr.data.stride;
    }
    const getters = ["getX", "getY", "getZ"];
    for (let tri = offset; tri < offset + count; tri++) {
      const tri3 = tri * 3;
      const tri6 = tri * 6;
      let ai = tri3 + 0;
      let bi = tri3 + 1;
      let ci = tri3 + 2;
      if (index) {
        ai = index[ai];
        bi = index[bi];
        ci = index[ci];
      }
      if (!normalized) {
        ai = ai * stride + bufferOffset;
        bi = bi * stride + bufferOffset;
        ci = ci * stride + bufferOffset;
      }
      for (let el = 0; el < 3; el++) {
        let a, b, c;
        if (normalized) {
          a = posAttr[getters[el]](ai);
          b = posAttr[getters[el]](bi);
          c = posAttr[getters[el]](ci);
        } else {
          a = posArr[ai + el];
          b = posArr[bi + el];
          c = posArr[ci + el];
        }
        let min = a;
        if (b < min) min = b;
        if (c < min) min = c;
        let max = a;
        if (b > max) max = b;
        if (c > max) max = c;
        const halfExtents = (max - min) / 2;
        const el2 = el * 2;
        triangleBounds[tri6 + el2 + 0] = min + halfExtents;
        triangleBounds[tri6 + el2 + 1] = halfExtents + (Math.abs(min) + halfExtents) * FLOAT32_EPSILON;
      }
    }
    return triangleBounds;
  }
  function arrayToBox(nodeIndex32, array, target) {
    target.min.x = array[nodeIndex32];
    target.min.y = array[nodeIndex32 + 1];
    target.min.z = array[nodeIndex32 + 2];
    target.max.x = array[nodeIndex32 + 3];
    target.max.y = array[nodeIndex32 + 4];
    target.max.z = array[nodeIndex32 + 5];
    return target;
  }
  function getLongestEdgeIndex(bounds) {
    let splitDimIdx = -1;
    let splitDist = -Infinity;
    for (let i = 0; i < 3; i++) {
      const dist = bounds[i + 3] - bounds[i];
      if (dist > splitDist) {
        splitDist = dist;
        splitDimIdx = i;
      }
    }
    return splitDimIdx;
  }
  function copyBounds(source, target) {
    target.set(source);
  }
  function unionBounds(a, b, target) {
    let aVal, bVal;
    for (let d = 0; d < 3; d++) {
      const d3 = d + 3;
      aVal = a[d];
      bVal = b[d];
      target[d] = aVal < bVal ? aVal : bVal;
      aVal = a[d3];
      bVal = b[d3];
      target[d3] = aVal > bVal ? aVal : bVal;
    }
  }
  function expandByTriangleBounds(startIndex, triangleBounds, bounds) {
    for (let d = 0; d < 3; d++) {
      const tCenter = triangleBounds[startIndex + 2 * d];
      const tHalf = triangleBounds[startIndex + 2 * d + 1];
      const tMin = tCenter - tHalf;
      const tMax = tCenter + tHalf;
      if (tMin < bounds[d]) {
        bounds[d] = tMin;
      }
      if (tMax > bounds[d + 3]) {
        bounds[d + 3] = tMax;
      }
    }
  }
  function computeSurfaceArea(bounds) {
    const d0 = bounds[3] - bounds[0];
    const d1 = bounds[4] - bounds[1];
    const d2 = bounds[5] - bounds[2];
    return 2 * (d0 * d1 + d1 * d2 + d2 * d0);
  }
  const BIN_COUNT = 32;
  const binsSort = (a, b) => a.candidate - b.candidate;
  const sahBins = new Array(BIN_COUNT).fill().map(() => {
    return {
      count: 0,
      bounds: new Float32Array(6),
      rightCacheBounds: new Float32Array(6),
      leftCacheBounds: new Float32Array(6),
      candidate: 0
    };
  });
  const leftBounds = new Float32Array(6);
  function getOptimalSplit(nodeBoundingData, centroidBoundingData, triangleBounds, offset, count, strategy) {
    let axis = -1;
    let pos = 0;
    if (strategy === CENTER) {
      axis = getLongestEdgeIndex(centroidBoundingData);
      if (axis !== -1) {
        pos = (centroidBoundingData[axis] + centroidBoundingData[axis + 3]) / 2;
      }
    } else if (strategy === AVERAGE) {
      axis = getLongestEdgeIndex(nodeBoundingData);
      if (axis !== -1) {
        pos = getAverage(triangleBounds, offset, count, axis);
      }
    } else if (strategy === SAH) {
      const rootSurfaceArea = computeSurfaceArea(nodeBoundingData);
      let bestCost = TRIANGLE_INTERSECT_COST * count;
      const cStart = offset * 6;
      const cEnd = (offset + count) * 6;
      for (let a = 0; a < 3; a++) {
        const axisLeft = centroidBoundingData[a];
        const axisRight = centroidBoundingData[a + 3];
        const axisLength = axisRight - axisLeft;
        const binWidth = axisLength / BIN_COUNT;
        if (count < BIN_COUNT / 4) {
          const truncatedBins = [...sahBins];
          truncatedBins.length = count;
          let b = 0;
          for (let c = cStart; c < cEnd; c += 6, b++) {
            const bin = truncatedBins[b];
            bin.candidate = triangleBounds[c + 2 * a];
            bin.count = 0;
            const {
              bounds,
              leftCacheBounds,
              rightCacheBounds
            } = bin;
            for (let d = 0; d < 3; d++) {
              rightCacheBounds[d] = Infinity;
              rightCacheBounds[d + 3] = -Infinity;
              leftCacheBounds[d] = Infinity;
              leftCacheBounds[d + 3] = -Infinity;
              bounds[d] = Infinity;
              bounds[d + 3] = -Infinity;
            }
            expandByTriangleBounds(c, triangleBounds, bounds);
          }
          truncatedBins.sort(binsSort);
          let splitCount = count;
          for (let bi = 0; bi < splitCount; bi++) {
            const bin = truncatedBins[bi];
            while (bi + 1 < splitCount && truncatedBins[bi + 1].candidate === bin.candidate) {
              truncatedBins.splice(bi + 1, 1);
              splitCount--;
            }
          }
          for (let c = cStart; c < cEnd; c += 6) {
            const center = triangleBounds[c + 2 * a];
            for (let bi = 0; bi < splitCount; bi++) {
              const bin = truncatedBins[bi];
              if (center >= bin.candidate) {
                expandByTriangleBounds(c, triangleBounds, bin.rightCacheBounds);
              } else {
                expandByTriangleBounds(c, triangleBounds, bin.leftCacheBounds);
                bin.count++;
              }
            }
          }
          for (let bi = 0; bi < splitCount; bi++) {
            const bin = truncatedBins[bi];
            const leftCount = bin.count;
            const rightCount = count - bin.count;
            const leftBounds2 = bin.leftCacheBounds;
            const rightBounds = bin.rightCacheBounds;
            let leftProb = 0;
            if (leftCount !== 0) {
              leftProb = computeSurfaceArea(leftBounds2) / rootSurfaceArea;
            }
            let rightProb = 0;
            if (rightCount !== 0) {
              rightProb = computeSurfaceArea(rightBounds) / rootSurfaceArea;
            }
            const cost = TRAVERSAL_COST + TRIANGLE_INTERSECT_COST * (leftProb * leftCount + rightProb * rightCount);
            if (cost < bestCost) {
              axis = a;
              bestCost = cost;
              pos = bin.candidate;
            }
          }
        } else {
          for (let i = 0; i < BIN_COUNT; i++) {
            const bin = sahBins[i];
            bin.count = 0;
            bin.candidate = axisLeft + binWidth + i * binWidth;
            const bounds = bin.bounds;
            for (let d = 0; d < 3; d++) {
              bounds[d] = Infinity;
              bounds[d + 3] = -Infinity;
            }
          }
          for (let c = cStart; c < cEnd; c += 6) {
            const triCenter = triangleBounds[c + 2 * a];
            const relativeCenter = triCenter - axisLeft;
            let binIndex = ~~(relativeCenter / binWidth);
            if (binIndex >= BIN_COUNT) binIndex = BIN_COUNT - 1;
            const bin = sahBins[binIndex];
            bin.count++;
            expandByTriangleBounds(c, triangleBounds, bin.bounds);
          }
          const lastBin = sahBins[BIN_COUNT - 1];
          copyBounds(lastBin.bounds, lastBin.rightCacheBounds);
          for (let i = BIN_COUNT - 2; i >= 0; i--) {
            const bin = sahBins[i];
            const nextBin = sahBins[i + 1];
            unionBounds(bin.bounds, nextBin.rightCacheBounds, bin.rightCacheBounds);
          }
          let leftCount = 0;
          for (let i = 0; i < BIN_COUNT - 1; i++) {
            const bin = sahBins[i];
            const binCount = bin.count;
            const bounds = bin.bounds;
            const nextBin = sahBins[i + 1];
            const rightBounds = nextBin.rightCacheBounds;
            if (binCount !== 0) {
              if (leftCount === 0) {
                copyBounds(bounds, leftBounds);
              } else {
                unionBounds(bounds, leftBounds, leftBounds);
              }
            }
            leftCount += binCount;
            let leftProb = 0;
            let rightProb = 0;
            if (leftCount !== 0) {
              leftProb = computeSurfaceArea(leftBounds) / rootSurfaceArea;
            }
            const rightCount = count - leftCount;
            if (rightCount !== 0) {
              rightProb = computeSurfaceArea(rightBounds) / rootSurfaceArea;
            }
            const cost = TRAVERSAL_COST + TRIANGLE_INTERSECT_COST * (leftProb * leftCount + rightProb * rightCount);
            if (cost < bestCost) {
              axis = a;
              bestCost = cost;
              pos = bin.candidate;
            }
          }
        }
      }
    } else {
      console.warn(`MeshBVH: Invalid build strategy value ${strategy} used.`);
    }
    return { axis, pos };
  }
  function getAverage(triangleBounds, offset, count, axis) {
    let avg = 0;
    for (let i = offset, end = offset + count; i < end; i++) {
      avg += triangleBounds[i * 6 + axis * 2];
    }
    return avg / count;
  }
  class MeshBVHNode {
    constructor() {
      this.boundingData = new Float32Array(6);
    }
  }
  function partition(indirectBuffer, index, triangleBounds, offset, count, split) {
    let left = offset;
    let right = offset + count - 1;
    const pos = split.pos;
    const axisOffset = split.axis * 2;
    while (true) {
      while (left <= right && triangleBounds[left * 6 + axisOffset] < pos) {
        left++;
      }
      while (left <= right && triangleBounds[right * 6 + axisOffset] >= pos) {
        right--;
      }
      if (left < right) {
        for (let i = 0; i < 3; i++) {
          let t0 = index[left * 3 + i];
          index[left * 3 + i] = index[right * 3 + i];
          index[right * 3 + i] = t0;
        }
        for (let i = 0; i < 6; i++) {
          let tb = triangleBounds[left * 6 + i];
          triangleBounds[left * 6 + i] = triangleBounds[right * 6 + i];
          triangleBounds[right * 6 + i] = tb;
        }
        left++;
        right--;
      } else {
        return left;
      }
    }
  }
  function partition_indirect(indirectBuffer, index, triangleBounds, offset, count, split) {
    let left = offset;
    let right = offset + count - 1;
    const pos = split.pos;
    const axisOffset = split.axis * 2;
    while (true) {
      while (left <= right && triangleBounds[left * 6 + axisOffset] < pos) {
        left++;
      }
      while (left <= right && triangleBounds[right * 6 + axisOffset] >= pos) {
        right--;
      }
      if (left < right) {
        let t = indirectBuffer[left];
        indirectBuffer[left] = indirectBuffer[right];
        indirectBuffer[right] = t;
        for (let i = 0; i < 6; i++) {
          let tb = triangleBounds[left * 6 + i];
          triangleBounds[left * 6 + i] = triangleBounds[right * 6 + i];
          triangleBounds[right * 6 + i] = tb;
        }
        left++;
        right--;
      } else {
        return left;
      }
    }
  }
  function IS_LEAF(n16, uint16Array2) {
    return uint16Array2[n16 + 15] === 65535;
  }
  function OFFSET(n32, uint32Array2) {
    return uint32Array2[n32 + 6];
  }
  function COUNT(n16, uint16Array2) {
    return uint16Array2[n16 + 14];
  }
  function LEFT_NODE(n32) {
    return n32 + 8;
  }
  function RIGHT_NODE(n32, uint32Array2) {
    return uint32Array2[n32 + 6];
  }
  function SPLIT_AXIS(n32, uint32Array2) {
    return uint32Array2[n32 + 7];
  }
  function BOUNDING_DATA_INDEX(n32) {
    return n32;
  }
  let float32Array, uint32Array, uint16Array, uint8Array;
  const MAX_POINTER = Math.pow(2, 32);
  function countNodes(node) {
    if ("count" in node) {
      return 1;
    } else {
      return 1 + countNodes(node.left) + countNodes(node.right);
    }
  }
  function populateBuffer(byteOffset, node, buffer2) {
    float32Array = new Float32Array(buffer2);
    uint32Array = new Uint32Array(buffer2);
    uint16Array = new Uint16Array(buffer2);
    uint8Array = new Uint8Array(buffer2);
    return _populateBuffer(byteOffset, node);
  }
  function _populateBuffer(byteOffset, node) {
    const stride4Offset = byteOffset / 4;
    const stride2Offset = byteOffset / 2;
    const isLeaf = "count" in node;
    const boundingData = node.boundingData;
    for (let i = 0; i < 6; i++) {
      float32Array[stride4Offset + i] = boundingData[i];
    }
    if (isLeaf) {
      if (node.buffer) {
        const buffer2 = node.buffer;
        uint8Array.set(new Uint8Array(buffer2), byteOffset);
        for (let offset = byteOffset, l = byteOffset + buffer2.byteLength; offset < l; offset += BYTES_PER_NODE) {
          const offset2 = offset / 2;
          if (!IS_LEAF(offset2, uint16Array)) {
            uint32Array[offset / 4 + 6] += stride4Offset;
          }
        }
        return byteOffset + buffer2.byteLength;
      } else {
        const offset = node.offset;
        const count = node.count;
        uint32Array[stride4Offset + 6] = offset;
        uint16Array[stride2Offset + 14] = count;
        uint16Array[stride2Offset + 15] = IS_LEAFNODE_FLAG;
        return byteOffset + BYTES_PER_NODE;
      }
    } else {
      const left = node.left;
      const right = node.right;
      const splitAxis = node.splitAxis;
      let nextUnusedPointer;
      nextUnusedPointer = _populateBuffer(byteOffset + BYTES_PER_NODE, left);
      if (nextUnusedPointer / 4 > MAX_POINTER) {
        throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");
      }
      uint32Array[stride4Offset + 6] = nextUnusedPointer / 4;
      nextUnusedPointer = _populateBuffer(nextUnusedPointer, right);
      uint32Array[stride4Offset + 7] = splitAxis;
      return nextUnusedPointer;
    }
  }
  function generateIndirectBuffer(geometry, useSharedArrayBuffer) {
    const triCount = (geometry.index ? geometry.index.count : geometry.attributes.position.count) / 3;
    const useUint32 = triCount > 2 ** 16;
    const byteCount = useUint32 ? 4 : 2;
    const buffer2 = useSharedArrayBuffer ? new SharedArrayBuffer(triCount * byteCount) : new ArrayBuffer(triCount * byteCount);
    const indirectBuffer = useUint32 ? new Uint32Array(buffer2) : new Uint16Array(buffer2);
    for (let i = 0, l = indirectBuffer.length; i < l; i++) {
      indirectBuffer[i] = i;
    }
    return indirectBuffer;
  }
  function buildTree(bvh, triangleBounds, offset, count, options) {
    const {
      maxDepth,
      verbose,
      maxLeafTris,
      strategy,
      onProgress,
      indirect
    } = options;
    const indirectBuffer = bvh._indirectBuffer;
    const geometry = bvh.geometry;
    const indexArray = geometry.index ? geometry.index.array : null;
    const partionFunc = indirect ? partition_indirect : partition;
    const totalTriangles = getTriCount(geometry);
    const cacheCentroidBoundingData = new Float32Array(6);
    let reachedMaxDepth = false;
    const root = new MeshBVHNode();
    getBounds(triangleBounds, offset, count, root.boundingData, cacheCentroidBoundingData);
    splitNode(root, offset, count, cacheCentroidBoundingData);
    return root;
    function triggerProgress(trianglesProcessed) {
      if (onProgress) {
        onProgress(trianglesProcessed / totalTriangles);
      }
    }
    function splitNode(node, offset2, count2, centroidBoundingData = null, depth2 = 0) {
      if (!reachedMaxDepth && depth2 >= maxDepth) {
        reachedMaxDepth = true;
        if (verbose) {
          console.warn(`MeshBVH: Max depth of ${maxDepth} reached when generating BVH. Consider increasing maxDepth.`);
          console.warn(geometry);
        }
      }
      if (count2 <= maxLeafTris || depth2 >= maxDepth) {
        triggerProgress(offset2 + count2);
        node.offset = offset2;
        node.count = count2;
        return node;
      }
      const split = getOptimalSplit(node.boundingData, centroidBoundingData, triangleBounds, offset2, count2, strategy);
      if (split.axis === -1) {
        triggerProgress(offset2 + count2);
        node.offset = offset2;
        node.count = count2;
        return node;
      }
      const splitOffset = partionFunc(indirectBuffer, indexArray, triangleBounds, offset2, count2, split);
      if (splitOffset === offset2 || splitOffset === offset2 + count2) {
        triggerProgress(offset2 + count2);
        node.offset = offset2;
        node.count = count2;
      } else {
        node.splitAxis = split.axis;
        const left = new MeshBVHNode();
        const lstart = offset2;
        const lcount = splitOffset - offset2;
        node.left = left;
        getBounds(triangleBounds, lstart, lcount, left.boundingData, cacheCentroidBoundingData);
        splitNode(left, lstart, lcount, cacheCentroidBoundingData, depth2 + 1);
        const right = new MeshBVHNode();
        const rstart = splitOffset;
        const rcount = count2 - lcount;
        node.right = right;
        getBounds(triangleBounds, rstart, rcount, right.boundingData, cacheCentroidBoundingData);
        splitNode(right, rstart, rcount, cacheCentroidBoundingData, depth2 + 1);
      }
      return node;
    }
  }
  function buildPackedTree(bvh, options) {
    const geometry = bvh.geometry;
    if (options.indirect) {
      bvh._indirectBuffer = generateIndirectBuffer(geometry, options.useSharedArrayBuffer);
      if (hasGroupGaps(geometry, options.range) && !options.verbose) {
        console.warn(
          'MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.'
        );
      }
    }
    if (!bvh._indirectBuffer) {
      ensureIndex(geometry, options);
    }
    const BufferConstructor = options.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer;
    const triangleBounds = computeTriangleBounds(geometry);
    const geometryRanges = options.indirect ? getFullGeometryRange(geometry, options.range) : getRootIndexRanges(geometry, options.range);
    bvh._roots = geometryRanges.map((range) => {
      const root = buildTree(bvh, triangleBounds, range.offset, range.count, options);
      const nodeCount = countNodes(root);
      const buffer2 = new BufferConstructor(BYTES_PER_NODE * nodeCount);
      populateBuffer(0, root, buffer2);
      return buffer2;
    });
  }
  class SeparatingAxisBounds {
    constructor() {
      this.min = Infinity;
      this.max = -Infinity;
    }
    setFromPointsField(points, field) {
      let min = Infinity;
      let max = -Infinity;
      for (let i = 0, l = points.length; i < l; i++) {
        const p = points[i];
        const val = p[field];
        min = val < min ? val : min;
        max = val > max ? val : max;
      }
      this.min = min;
      this.max = max;
    }
    setFromPoints(axis, points) {
      let min = Infinity;
      let max = -Infinity;
      for (let i = 0, l = points.length; i < l; i++) {
        const p = points[i];
        const val = axis.dot(p);
        min = val < min ? val : min;
        max = val > max ? val : max;
      }
      this.min = min;
      this.max = max;
    }
    isSeparated(other) {
      return this.min > other.max || other.min > this.max;
    }
  }
  SeparatingAxisBounds.prototype.setFromBox = (function() {
    const p = new Vector3();
    return function setFromBox(axis, box) {
      const boxMin = box.min;
      const boxMax = box.max;
      let min = Infinity;
      let max = -Infinity;
      for (let x = 0; x <= 1; x++) {
        for (let y = 0; y <= 1; y++) {
          for (let z = 0; z <= 1; z++) {
            p.x = boxMin.x * x + boxMax.x * (1 - x);
            p.y = boxMin.y * y + boxMax.y * (1 - y);
            p.z = boxMin.z * z + boxMax.z * (1 - z);
            const val = axis.dot(p);
            min = Math.min(val, min);
            max = Math.max(val, max);
          }
        }
      }
      this.min = min;
      this.max = max;
    };
  })();
  const closestPointLineToLine = (function() {
    const dir1 = new Vector3();
    const dir2 = new Vector3();
    const v02 = new Vector3();
    return function closestPointLineToLine2(l1, l2, result) {
      const v0 = l1.start;
      const v10 = dir1;
      const v2 = l2.start;
      const v32 = dir2;
      v02.subVectors(v0, v2);
      dir1.subVectors(l1.end, l1.start);
      dir2.subVectors(l2.end, l2.start);
      const d0232 = v02.dot(v32);
      const d3210 = v32.dot(v10);
      const d3232 = v32.dot(v32);
      const d0210 = v02.dot(v10);
      const d1010 = v10.dot(v10);
      const denom = d1010 * d3232 - d3210 * d3210;
      let d, d2;
      if (denom !== 0) {
        d = (d0232 * d3210 - d0210 * d3232) / denom;
      } else {
        d = 0;
      }
      d2 = (d0232 + d * d3210) / d3232;
      result.x = d;
      result.y = d2;
    };
  })();
  const closestPointsSegmentToSegment = (function() {
    const paramResult = new Vector2();
    const temp12 = new Vector3();
    const temp22 = new Vector3();
    return function closestPointsSegmentToSegment2(l1, l2, target1, target2) {
      closestPointLineToLine(l1, l2, paramResult);
      let d = paramResult.x;
      let d2 = paramResult.y;
      if (d >= 0 && d <= 1 && d2 >= 0 && d2 <= 1) {
        l1.at(d, target1);
        l2.at(d2, target2);
        return;
      } else if (d >= 0 && d <= 1) {
        if (d2 < 0) {
          l2.at(0, target2);
        } else {
          l2.at(1, target2);
        }
        l1.closestPointToPoint(target2, true, target1);
        return;
      } else if (d2 >= 0 && d2 <= 1) {
        if (d < 0) {
          l1.at(0, target1);
        } else {
          l1.at(1, target1);
        }
        l2.closestPointToPoint(target1, true, target2);
        return;
      } else {
        let p;
        if (d < 0) {
          p = l1.start;
        } else {
          p = l1.end;
        }
        let p2;
        if (d2 < 0) {
          p2 = l2.start;
        } else {
          p2 = l2.end;
        }
        const closestPoint = temp12;
        const closestPoint2 = temp22;
        l1.closestPointToPoint(p2, true, temp12);
        l2.closestPointToPoint(p, true, temp22);
        if (closestPoint.distanceToSquared(p2) <= closestPoint2.distanceToSquared(p)) {
          target1.copy(closestPoint);
          target2.copy(p2);
          return;
        } else {
          target1.copy(p);
          target2.copy(closestPoint2);
          return;
        }
      }
    };
  })();
  const sphereIntersectTriangle = (function() {
    const closestPointTemp = new Vector3();
    const projectedPointTemp = new Vector3();
    const planeTemp = new Plane();
    const lineTemp = new Line3();
    return function sphereIntersectTriangle2(sphere, triangle3) {
      const { radius, center } = sphere;
      const { a, b, c } = triangle3;
      lineTemp.start = a;
      lineTemp.end = b;
      const closestPoint1 = lineTemp.closestPointToPoint(center, true, closestPointTemp);
      if (closestPoint1.distanceTo(center) <= radius) return true;
      lineTemp.start = a;
      lineTemp.end = c;
      const closestPoint2 = lineTemp.closestPointToPoint(center, true, closestPointTemp);
      if (closestPoint2.distanceTo(center) <= radius) return true;
      lineTemp.start = b;
      lineTemp.end = c;
      const closestPoint3 = lineTemp.closestPointToPoint(center, true, closestPointTemp);
      if (closestPoint3.distanceTo(center) <= radius) return true;
      const plane = triangle3.getPlane(planeTemp);
      const dp = Math.abs(plane.distanceToPoint(center));
      if (dp <= radius) {
        const pp = plane.projectPoint(center, projectedPointTemp);
        const cp = triangle3.containsPoint(pp);
        if (cp) return true;
      }
      return false;
    };
  })();
  const ZERO_EPSILON = 1e-15;
  function isNearZero(value) {
    return Math.abs(value) < ZERO_EPSILON;
  }
  class ExtendedTriangle extends Triangle {
    constructor(...args) {
      super(...args);
      this.isExtendedTriangle = true;
      this.satAxes = new Array(4).fill().map(() => new Vector3());
      this.satBounds = new Array(4).fill().map(() => new SeparatingAxisBounds());
      this.points = [this.a, this.b, this.c];
      this.sphere = new Sphere();
      this.plane = new Plane();
      this.needsUpdate = true;
    }
    intersectsSphere(sphere) {
      return sphereIntersectTriangle(sphere, this);
    }
    update() {
      const a = this.a;
      const b = this.b;
      const c = this.c;
      const points = this.points;
      const satAxes = this.satAxes;
      const satBounds = this.satBounds;
      const axis0 = satAxes[0];
      const sab0 = satBounds[0];
      this.getNormal(axis0);
      sab0.setFromPoints(axis0, points);
      const axis1 = satAxes[1];
      const sab1 = satBounds[1];
      axis1.subVectors(a, b);
      sab1.setFromPoints(axis1, points);
      const axis2 = satAxes[2];
      const sab2 = satBounds[2];
      axis2.subVectors(b, c);
      sab2.setFromPoints(axis2, points);
      const axis3 = satAxes[3];
      const sab3 = satBounds[3];
      axis3.subVectors(c, a);
      sab3.setFromPoints(axis3, points);
      this.sphere.setFromPoints(this.points);
      this.plane.setFromNormalAndCoplanarPoint(axis0, a);
      this.needsUpdate = false;
    }
  }
  ExtendedTriangle.prototype.closestPointToSegment = (function() {
    const point1 = new Vector3();
    const point2 = new Vector3();
    const edge = new Line3();
    return function distanceToSegment(segment, target1 = null, target2 = null) {
      const { start, end } = segment;
      const points = this.points;
      let distSq;
      let closestDistanceSq = Infinity;
      for (let i = 0; i < 3; i++) {
        const nexti = (i + 1) % 3;
        edge.start.copy(points[i]);
        edge.end.copy(points[nexti]);
        closestPointsSegmentToSegment(edge, segment, point1, point2);
        distSq = point1.distanceToSquared(point2);
        if (distSq < closestDistanceSq) {
          closestDistanceSq = distSq;
          if (target1) target1.copy(point1);
          if (target2) target2.copy(point2);
        }
      }
      this.closestPointToPoint(start, point1);
      distSq = start.distanceToSquared(point1);
      if (distSq < closestDistanceSq) {
        closestDistanceSq = distSq;
        if (target1) target1.copy(point1);
        if (target2) target2.copy(start);
      }
      this.closestPointToPoint(end, point1);
      distSq = end.distanceToSquared(point1);
      if (distSq < closestDistanceSq) {
        closestDistanceSq = distSq;
        if (target1) target1.copy(point1);
        if (target2) target2.copy(end);
      }
      return Math.sqrt(closestDistanceSq);
    };
  })();
  ExtendedTriangle.prototype.intersectsTriangle = (function() {
    const saTri2 = new ExtendedTriangle();
    const arr1 = new Array(3);
    const arr2 = new Array(3);
    const cachedSatBounds = new SeparatingAxisBounds();
    const cachedSatBounds2 = new SeparatingAxisBounds();
    const cachedAxis = new Vector3();
    const dir = new Vector3();
    const dir1 = new Vector3();
    const dir2 = new Vector3();
    const tempDir = new Vector3();
    const edge = new Line3();
    const edge1 = new Line3();
    const edge2 = new Line3();
    const tempPoint = new Vector3();
    function triIntersectPlane(tri, plane, targetEdge) {
      const points = tri.points;
      let count = 0;
      let startPointIntersection = -1;
      for (let i = 0; i < 3; i++) {
        const { start, end } = edge;
        start.copy(points[i]);
        end.copy(points[(i + 1) % 3]);
        edge.delta(dir);
        const startIntersects = isNearZero(plane.distanceToPoint(start));
        if (isNearZero(plane.normal.dot(dir)) && startIntersects) {
          targetEdge.copy(edge);
          count = 2;
          break;
        }
        const doesIntersect = plane.intersectLine(edge, tempPoint);
        if (!doesIntersect && startIntersects) {
          tempPoint.copy(start);
        }
        if ((doesIntersect || startIntersects) && !isNearZero(tempPoint.distanceTo(end))) {
          if (count <= 1) {
            const point = count === 1 ? targetEdge.start : targetEdge.end;
            point.copy(tempPoint);
            if (startIntersects) {
              startPointIntersection = count;
            }
          } else if (count >= 2) {
            const point = startPointIntersection === 1 ? targetEdge.start : targetEdge.end;
            point.copy(tempPoint);
            count = 2;
            break;
          }
          count++;
          if (count === 2 && startPointIntersection === -1) {
            break;
          }
        }
      }
      return count;
    }
    return function intersectsTriangle(other, target = null, suppressLog = false) {
      if (this.needsUpdate) {
        this.update();
      }
      if (!other.isExtendedTriangle) {
        saTri2.copy(other);
        saTri2.update();
        other = saTri2;
      } else if (other.needsUpdate) {
        other.update();
      }
      const plane1 = this.plane;
      const plane2 = other.plane;
      if (Math.abs(plane1.normal.dot(plane2.normal)) > 1 - 1e-10) {
        const satBounds1 = this.satBounds;
        const satAxes1 = this.satAxes;
        arr2[0] = other.a;
        arr2[1] = other.b;
        arr2[2] = other.c;
        for (let i = 0; i < 4; i++) {
          const sb = satBounds1[i];
          const sa = satAxes1[i];
          cachedSatBounds.setFromPoints(sa, arr2);
          if (sb.isSeparated(cachedSatBounds)) return false;
        }
        const satBounds2 = other.satBounds;
        const satAxes2 = other.satAxes;
        arr1[0] = this.a;
        arr1[1] = this.b;
        arr1[2] = this.c;
        for (let i = 0; i < 4; i++) {
          const sb = satBounds2[i];
          const sa = satAxes2[i];
          cachedSatBounds.setFromPoints(sa, arr1);
          if (sb.isSeparated(cachedSatBounds)) return false;
        }
        for (let i = 0; i < 4; i++) {
          const sa1 = satAxes1[i];
          for (let i2 = 0; i2 < 4; i2++) {
            const sa2 = satAxes2[i2];
            cachedAxis.crossVectors(sa1, sa2);
            cachedSatBounds.setFromPoints(cachedAxis, arr1);
            cachedSatBounds2.setFromPoints(cachedAxis, arr2);
            if (cachedSatBounds.isSeparated(cachedSatBounds2)) return false;
          }
        }
        if (target) {
          if (!suppressLog) {
            console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0.");
          }
          target.start.set(0, 0, 0);
          target.end.set(0, 0, 0);
        }
        return true;
      } else {
        const count1 = triIntersectPlane(this, plane2, edge1);
        if (count1 === 1 && other.containsPoint(edge1.end)) {
          if (target) {
            target.start.copy(edge1.end);
            target.end.copy(edge1.end);
          }
          return true;
        } else if (count1 !== 2) {
          return false;
        }
        const count2 = triIntersectPlane(other, plane1, edge2);
        if (count2 === 1 && this.containsPoint(edge2.end)) {
          if (target) {
            target.start.copy(edge2.end);
            target.end.copy(edge2.end);
          }
          return true;
        } else if (count2 !== 2) {
          return false;
        }
        edge1.delta(dir1);
        edge2.delta(dir2);
        if (dir1.dot(dir2) < 0) {
          let tmp = edge2.start;
          edge2.start = edge2.end;
          edge2.end = tmp;
        }
        const s1 = edge1.start.dot(dir1);
        const e1 = edge1.end.dot(dir1);
        const s2 = edge2.start.dot(dir1);
        const e2 = edge2.end.dot(dir1);
        const separated1 = e1 < s2;
        const separated2 = s1 < e2;
        if (s1 !== e2 && s2 !== e1 && separated1 === separated2) {
          return false;
        }
        if (target) {
          tempDir.subVectors(edge1.start, edge2.start);
          if (tempDir.dot(dir1) > 0) {
            target.start.copy(edge1.start);
          } else {
            target.start.copy(edge2.start);
          }
          tempDir.subVectors(edge1.end, edge2.end);
          if (tempDir.dot(dir1) < 0) {
            target.end.copy(edge1.end);
          } else {
            target.end.copy(edge2.end);
          }
        }
        return true;
      }
    };
  })();
  ExtendedTriangle.prototype.distanceToPoint = (function() {
    const target = new Vector3();
    return function distanceToPoint(point) {
      this.closestPointToPoint(point, target);
      return point.distanceTo(target);
    };
  })();
  ExtendedTriangle.prototype.distanceToTriangle = (function() {
    const point = new Vector3();
    const point2 = new Vector3();
    const cornerFields = ["a", "b", "c"];
    const line1 = new Line3();
    const line2 = new Line3();
    return function distanceToTriangle(other, target1 = null, target2 = null) {
      const lineTarget = target1 || target2 ? line1 : null;
      if (this.intersectsTriangle(other, lineTarget)) {
        if (target1 || target2) {
          if (target1) lineTarget.getCenter(target1);
          if (target2) lineTarget.getCenter(target2);
        }
        return 0;
      }
      let closestDistanceSq = Infinity;
      for (let i = 0; i < 3; i++) {
        let dist;
        const field = cornerFields[i];
        const otherVec = other[field];
        this.closestPointToPoint(otherVec, point);
        dist = otherVec.distanceToSquared(point);
        if (dist < closestDistanceSq) {
          closestDistanceSq = dist;
          if (target1) target1.copy(point);
          if (target2) target2.copy(otherVec);
        }
        const thisVec = this[field];
        other.closestPointToPoint(thisVec, point);
        dist = thisVec.distanceToSquared(point);
        if (dist < closestDistanceSq) {
          closestDistanceSq = dist;
          if (target1) target1.copy(thisVec);
          if (target2) target2.copy(point);
        }
      }
      for (let i = 0; i < 3; i++) {
        const f11 = cornerFields[i];
        const f12 = cornerFields[(i + 1) % 3];
        line1.set(this[f11], this[f12]);
        for (let i2 = 0; i2 < 3; i2++) {
          const f21 = cornerFields[i2];
          const f22 = cornerFields[(i2 + 1) % 3];
          line2.set(other[f21], other[f22]);
          closestPointsSegmentToSegment(line1, line2, point, point2);
          const dist = point.distanceToSquared(point2);
          if (dist < closestDistanceSq) {
            closestDistanceSq = dist;
            if (target1) target1.copy(point);
            if (target2) target2.copy(point2);
          }
        }
      }
      return Math.sqrt(closestDistanceSq);
    };
  })();
  class OrientedBox {
    constructor(min, max, matrix) {
      this.isOrientedBox = true;
      this.min = new Vector3();
      this.max = new Vector3();
      this.matrix = new Matrix4();
      this.invMatrix = new Matrix4();
      this.points = new Array(8).fill().map(() => new Vector3());
      this.satAxes = new Array(3).fill().map(() => new Vector3());
      this.satBounds = new Array(3).fill().map(() => new SeparatingAxisBounds());
      this.alignedSatBounds = new Array(3).fill().map(() => new SeparatingAxisBounds());
      this.needsUpdate = false;
      if (min) this.min.copy(min);
      if (max) this.max.copy(max);
      if (matrix) this.matrix.copy(matrix);
    }
    set(min, max, matrix) {
      this.min.copy(min);
      this.max.copy(max);
      this.matrix.copy(matrix);
      this.needsUpdate = true;
    }
    copy(other) {
      this.min.copy(other.min);
      this.max.copy(other.max);
      this.matrix.copy(other.matrix);
      this.needsUpdate = true;
    }
  }
  OrientedBox.prototype.update = /* @__PURE__ */ (function() {
    return function update() {
      const matrix = this.matrix;
      const min = this.min;
      const max = this.max;
      const points = this.points;
      for (let x = 0; x <= 1; x++) {
        for (let y = 0; y <= 1; y++) {
          for (let z = 0; z <= 1; z++) {
            const i = (1 << 0) * x | (1 << 1) * y | (1 << 2) * z;
            const v = points[i];
            v.x = x ? max.x : min.x;
            v.y = y ? max.y : min.y;
            v.z = z ? max.z : min.z;
            v.applyMatrix4(matrix);
          }
        }
      }
      const satBounds = this.satBounds;
      const satAxes = this.satAxes;
      const minVec = points[0];
      for (let i = 0; i < 3; i++) {
        const axis = satAxes[i];
        const sb = satBounds[i];
        const index = 1 << i;
        const pi = points[index];
        axis.subVectors(minVec, pi);
        sb.setFromPoints(axis, points);
      }
      const alignedSatBounds = this.alignedSatBounds;
      alignedSatBounds[0].setFromPointsField(points, "x");
      alignedSatBounds[1].setFromPointsField(points, "y");
      alignedSatBounds[2].setFromPointsField(points, "z");
      this.invMatrix.copy(this.matrix).invert();
      this.needsUpdate = false;
    };
  })();
  OrientedBox.prototype.intersectsBox = (function() {
    const aabbBounds = new SeparatingAxisBounds();
    return function intersectsBox(box) {
      if (this.needsUpdate) {
        this.update();
      }
      const min = box.min;
      const max = box.max;
      const satBounds = this.satBounds;
      const satAxes = this.satAxes;
      const alignedSatBounds = this.alignedSatBounds;
      aabbBounds.min = min.x;
      aabbBounds.max = max.x;
      if (alignedSatBounds[0].isSeparated(aabbBounds)) return false;
      aabbBounds.min = min.y;
      aabbBounds.max = max.y;
      if (alignedSatBounds[1].isSeparated(aabbBounds)) return false;
      aabbBounds.min = min.z;
      aabbBounds.max = max.z;
      if (alignedSatBounds[2].isSeparated(aabbBounds)) return false;
      for (let i = 0; i < 3; i++) {
        const axis = satAxes[i];
        const sb = satBounds[i];
        aabbBounds.setFromBox(axis, box);
        if (sb.isSeparated(aabbBounds)) return false;
      }
      return true;
    };
  })();
  OrientedBox.prototype.intersectsTriangle = (function() {
    const saTri = new ExtendedTriangle();
    const pointsArr = new Array(3);
    const cachedSatBounds = new SeparatingAxisBounds();
    const cachedSatBounds2 = new SeparatingAxisBounds();
    const cachedAxis = new Vector3();
    return function intersectsTriangle(triangle3) {
      if (this.needsUpdate) {
        this.update();
      }
      if (!triangle3.isExtendedTriangle) {
        saTri.copy(triangle3);
        saTri.update();
        triangle3 = saTri;
      } else if (triangle3.needsUpdate) {
        triangle3.update();
      }
      const satBounds = this.satBounds;
      const satAxes = this.satAxes;
      pointsArr[0] = triangle3.a;
      pointsArr[1] = triangle3.b;
      pointsArr[2] = triangle3.c;
      for (let i = 0; i < 3; i++) {
        const sb = satBounds[i];
        const sa = satAxes[i];
        cachedSatBounds.setFromPoints(sa, pointsArr);
        if (sb.isSeparated(cachedSatBounds)) return false;
      }
      const triSatBounds = triangle3.satBounds;
      const triSatAxes = triangle3.satAxes;
      const points = this.points;
      for (let i = 0; i < 3; i++) {
        const sb = triSatBounds[i];
        const sa = triSatAxes[i];
        cachedSatBounds.setFromPoints(sa, points);
        if (sb.isSeparated(cachedSatBounds)) return false;
      }
      for (let i = 0; i < 3; i++) {
        const sa1 = satAxes[i];
        for (let i2 = 0; i2 < 4; i2++) {
          const sa2 = triSatAxes[i2];
          cachedAxis.crossVectors(sa1, sa2);
          cachedSatBounds.setFromPoints(cachedAxis, pointsArr);
          cachedSatBounds2.setFromPoints(cachedAxis, points);
          if (cachedSatBounds.isSeparated(cachedSatBounds2)) return false;
        }
      }
      return true;
    };
  })();
  OrientedBox.prototype.closestPointToPoint = /* @__PURE__ */ (function() {
    return function closestPointToPoint2(point, target1) {
      if (this.needsUpdate) {
        this.update();
      }
      target1.copy(point).applyMatrix4(this.invMatrix).clamp(this.min, this.max).applyMatrix4(this.matrix);
      return target1;
    };
  })();
  OrientedBox.prototype.distanceToPoint = (function() {
    const target = new Vector3();
    return function distanceToPoint(point) {
      this.closestPointToPoint(point, target);
      return point.distanceTo(target);
    };
  })();
  OrientedBox.prototype.distanceToBox = (function() {
    const xyzFields = ["x", "y", "z"];
    const segments1 = new Array(12).fill().map(() => new Line3());
    const segments2 = new Array(12).fill().map(() => new Line3());
    const point1 = new Vector3();
    const point2 = new Vector3();
    return function distanceToBox(box, threshold = 0, target1 = null, target2 = null) {
      if (this.needsUpdate) {
        this.update();
      }
      if (this.intersectsBox(box)) {
        if (target1 || target2) {
          box.getCenter(point2);
          this.closestPointToPoint(point2, point1);
          box.closestPointToPoint(point1, point2);
          if (target1) target1.copy(point1);
          if (target2) target2.copy(point2);
        }
        return 0;
      }
      const threshold2 = threshold * threshold;
      const min = box.min;
      const max = box.max;
      const points = this.points;
      let closestDistanceSq = Infinity;
      for (let i = 0; i < 8; i++) {
        const p = points[i];
        point2.copy(p).clamp(min, max);
        const dist = p.distanceToSquared(point2);
        if (dist < closestDistanceSq) {
          closestDistanceSq = dist;
          if (target1) target1.copy(p);
          if (target2) target2.copy(point2);
          if (dist < threshold2) return Math.sqrt(dist);
        }
      }
      let count = 0;
      for (let i = 0; i < 3; i++) {
        for (let i1 = 0; i1 <= 1; i1++) {
          for (let i2 = 0; i2 <= 1; i2++) {
            const nextIndex = (i + 1) % 3;
            const nextIndex2 = (i + 2) % 3;
            const index = i1 << nextIndex | i2 << nextIndex2;
            const index2 = 1 << i | i1 << nextIndex | i2 << nextIndex2;
            const p1 = points[index];
            const p2 = points[index2];
            const line1 = segments1[count];
            line1.set(p1, p2);
            const f1 = xyzFields[i];
            const f2 = xyzFields[nextIndex];
            const f3 = xyzFields[nextIndex2];
            const line2 = segments2[count];
            const start = line2.start;
            const end = line2.end;
            start[f1] = min[f1];
            start[f2] = i1 ? min[f2] : max[f2];
            start[f3] = i2 ? min[f3] : max[f2];
            end[f1] = max[f1];
            end[f2] = i1 ? min[f2] : max[f2];
            end[f3] = i2 ? min[f3] : max[f2];
            count++;
          }
        }
      }
      for (let x = 0; x <= 1; x++) {
        for (let y = 0; y <= 1; y++) {
          for (let z = 0; z <= 1; z++) {
            point2.x = x ? max.x : min.x;
            point2.y = y ? max.y : min.y;
            point2.z = z ? max.z : min.z;
            this.closestPointToPoint(point2, point1);
            const dist = point2.distanceToSquared(point1);
            if (dist < closestDistanceSq) {
              closestDistanceSq = dist;
              if (target1) target1.copy(point1);
              if (target2) target2.copy(point2);
              if (dist < threshold2) return Math.sqrt(dist);
            }
          }
        }
      }
      for (let i = 0; i < 12; i++) {
        const l1 = segments1[i];
        for (let i2 = 0; i2 < 12; i2++) {
          const l2 = segments2[i2];
          closestPointsSegmentToSegment(l1, l2, point1, point2);
          const dist = point1.distanceToSquared(point2);
          if (dist < closestDistanceSq) {
            closestDistanceSq = dist;
            if (target1) target1.copy(point1);
            if (target2) target2.copy(point2);
            if (dist < threshold2) return Math.sqrt(dist);
          }
        }
      }
      return Math.sqrt(closestDistanceSq);
    };
  })();
  class PrimitivePool {
    constructor(getNewPrimitive) {
      this._getNewPrimitive = getNewPrimitive;
      this._primitives = [];
    }
    getPrimitive() {
      const primitives = this._primitives;
      if (primitives.length === 0) {
        return this._getNewPrimitive();
      } else {
        return primitives.pop();
      }
    }
    releasePrimitive(primitive) {
      this._primitives.push(primitive);
    }
  }
  class ExtendedTrianglePoolBase extends PrimitivePool {
    constructor() {
      super(() => new ExtendedTriangle());
    }
  }
  const ExtendedTrianglePool = /* @__PURE__ */ new ExtendedTrianglePoolBase();
  class _BufferStack {
    constructor() {
      this.float32Array = null;
      this.uint16Array = null;
      this.uint32Array = null;
      const stack = [];
      let prevBuffer = null;
      this.setBuffer = (buffer2) => {
        if (prevBuffer) {
          stack.push(prevBuffer);
        }
        prevBuffer = buffer2;
        this.float32Array = new Float32Array(buffer2);
        this.uint16Array = new Uint16Array(buffer2);
        this.uint32Array = new Uint32Array(buffer2);
      };
      this.clearBuffer = () => {
        prevBuffer = null;
        this.float32Array = null;
        this.uint16Array = null;
        this.uint32Array = null;
        if (stack.length !== 0) {
          this.setBuffer(stack.pop());
        }
      };
    }
  }
  const BufferStack = new _BufferStack();
  let _box1, _box2;
  const boxStack = [];
  const boxPool = /* @__PURE__ */ new PrimitivePool(() => new Box3());
  function shapecast(bvh, root, intersectsBounds, intersectsRange, boundsTraverseOrder, byteOffset) {
    _box1 = boxPool.getPrimitive();
    _box2 = boxPool.getPrimitive();
    boxStack.push(_box1, _box2);
    BufferStack.setBuffer(bvh._roots[root]);
    const result = shapecastTraverse(0, bvh.geometry, intersectsBounds, intersectsRange, boundsTraverseOrder, byteOffset);
    BufferStack.clearBuffer();
    boxPool.releasePrimitive(_box1);
    boxPool.releasePrimitive(_box2);
    boxStack.pop();
    boxStack.pop();
    const length2 = boxStack.length;
    if (length2 > 0) {
      _box2 = boxStack[length2 - 1];
      _box1 = boxStack[length2 - 2];
    }
    return result;
  }
  function shapecastTraverse(nodeIndex32, geometry, intersectsBoundsFunc, intersectsRangeFunc, nodeScoreFunc = null, nodeIndexByteOffset = 0, depth2 = 0) {
    const { float32Array: float32Array2, uint16Array: uint16Array2, uint32Array: uint32Array2 } = BufferStack;
    let nodeIndex16 = nodeIndex32 * 2;
    const isLeaf = IS_LEAF(nodeIndex16, uint16Array2);
    if (isLeaf) {
      const offset = OFFSET(nodeIndex32, uint32Array2);
      const count = COUNT(nodeIndex16, uint16Array2);
      arrayToBox(BOUNDING_DATA_INDEX(nodeIndex32), float32Array2, _box1);
      return intersectsRangeFunc(offset, count, false, depth2, nodeIndexByteOffset + nodeIndex32, _box1);
    } else {
      let getLeftOffset = function(nodeIndex322) {
        const { uint16Array: uint16Array3, uint32Array: uint32Array3 } = BufferStack;
        let nodeIndex162 = nodeIndex322 * 2;
        while (!IS_LEAF(nodeIndex162, uint16Array3)) {
          nodeIndex322 = LEFT_NODE(nodeIndex322);
          nodeIndex162 = nodeIndex322 * 2;
        }
        return OFFSET(nodeIndex322, uint32Array3);
      }, getRightEndOffset = function(nodeIndex322) {
        const { uint16Array: uint16Array3, uint32Array: uint32Array3 } = BufferStack;
        let nodeIndex162 = nodeIndex322 * 2;
        while (!IS_LEAF(nodeIndex162, uint16Array3)) {
          nodeIndex322 = RIGHT_NODE(nodeIndex322, uint32Array3);
          nodeIndex162 = nodeIndex322 * 2;
        }
        return OFFSET(nodeIndex322, uint32Array3) + COUNT(nodeIndex162, uint16Array3);
      };
      const left = LEFT_NODE(nodeIndex32);
      const right = RIGHT_NODE(nodeIndex32, uint32Array2);
      let c1 = left;
      let c2 = right;
      let score1, score2;
      let box1, box2;
      if (nodeScoreFunc) {
        box1 = _box1;
        box2 = _box2;
        arrayToBox(BOUNDING_DATA_INDEX(c1), float32Array2, box1);
        arrayToBox(BOUNDING_DATA_INDEX(c2), float32Array2, box2);
        score1 = nodeScoreFunc(box1);
        score2 = nodeScoreFunc(box2);
        if (score2 < score1) {
          c1 = right;
          c2 = left;
          const temp5 = score1;
          score1 = score2;
          score2 = temp5;
          box1 = box2;
        }
      }
      if (!box1) {
        box1 = _box1;
        arrayToBox(BOUNDING_DATA_INDEX(c1), float32Array2, box1);
      }
      const isC1Leaf = IS_LEAF(c1 * 2, uint16Array2);
      const c1Intersection = intersectsBoundsFunc(box1, isC1Leaf, score1, depth2 + 1, nodeIndexByteOffset + c1);
      let c1StopTraversal;
      if (c1Intersection === CONTAINED) {
        const offset = getLeftOffset(c1);
        const end = getRightEndOffset(c1);
        const count = end - offset;
        c1StopTraversal = intersectsRangeFunc(offset, count, true, depth2 + 1, nodeIndexByteOffset + c1, box1);
      } else {
        c1StopTraversal = c1Intersection && shapecastTraverse(
          c1,
          geometry,
          intersectsBoundsFunc,
          intersectsRangeFunc,
          nodeScoreFunc,
          nodeIndexByteOffset,
          depth2 + 1
        );
      }
      if (c1StopTraversal) return true;
      box2 = _box2;
      arrayToBox(BOUNDING_DATA_INDEX(c2), float32Array2, box2);
      const isC2Leaf = IS_LEAF(c2 * 2, uint16Array2);
      const c2Intersection = intersectsBoundsFunc(box2, isC2Leaf, score2, depth2 + 1, nodeIndexByteOffset + c2);
      let c2StopTraversal;
      if (c2Intersection === CONTAINED) {
        const offset = getLeftOffset(c2);
        const end = getRightEndOffset(c2);
        const count = end - offset;
        c2StopTraversal = intersectsRangeFunc(offset, count, true, depth2 + 1, nodeIndexByteOffset + c2, box2);
      } else {
        c2StopTraversal = c2Intersection && shapecastTraverse(
          c2,
          geometry,
          intersectsBoundsFunc,
          intersectsRangeFunc,
          nodeScoreFunc,
          nodeIndexByteOffset,
          depth2 + 1
        );
      }
      if (c2StopTraversal) return true;
      return false;
    }
  }
  const temp = /* @__PURE__ */ new Vector3();
  const temp1$2 = /* @__PURE__ */ new Vector3();
  function closestPointToPoint(bvh, point, target = {}, minThreshold = 0, maxThreshold = Infinity) {
    const minThresholdSq = minThreshold * minThreshold;
    const maxThresholdSq = maxThreshold * maxThreshold;
    let closestDistanceSq = Infinity;
    let closestDistanceTriIndex = null;
    bvh.shapecast(
      {
        boundsTraverseOrder: (box) => {
          temp.copy(point).clamp(box.min, box.max);
          return temp.distanceToSquared(point);
        },
        intersectsBounds: (box, isLeaf, score) => {
          return score < closestDistanceSq && score < maxThresholdSq;
        },
        intersectsTriangle: (tri, triIndex) => {
          tri.closestPointToPoint(point, temp);
          const distSq = point.distanceToSquared(temp);
          if (distSq < closestDistanceSq) {
            temp1$2.copy(temp);
            closestDistanceSq = distSq;
            closestDistanceTriIndex = triIndex;
          }
          if (distSq < minThresholdSq) {
            return true;
          } else {
            return false;
          }
        }
      }
    );
    if (closestDistanceSq === Infinity) return null;
    const closestDistance = Math.sqrt(closestDistanceSq);
    if (!target.point) target.point = temp1$2.clone();
    else target.point.copy(temp1$2);
    target.distance = closestDistance, target.faceIndex = closestDistanceTriIndex;
    return target;
  }
  const IS_GT_REVISION_169 = parseInt(REVISION) >= 169;
  const _vA = /* @__PURE__ */ new Vector3();
  const _vB = /* @__PURE__ */ new Vector3();
  const _vC = /* @__PURE__ */ new Vector3();
  const _uvA = /* @__PURE__ */ new Vector2();
  const _uvB = /* @__PURE__ */ new Vector2();
  const _uvC = /* @__PURE__ */ new Vector2();
  const _normalA = /* @__PURE__ */ new Vector3();
  const _normalB = /* @__PURE__ */ new Vector3();
  const _normalC = /* @__PURE__ */ new Vector3();
  const _intersectionPoint = /* @__PURE__ */ new Vector3();
  function checkIntersection(ray, pA, pB, pC, point, side, near, far) {
    let intersect;
    if (side === BackSide) {
      intersect = ray.intersectTriangle(pC, pB, pA, true, point);
    } else {
      intersect = ray.intersectTriangle(pA, pB, pC, side !== DoubleSide, point);
    }
    if (intersect === null) return null;
    const distance2 = ray.origin.distanceTo(point);
    if (distance2 < near || distance2 > far) return null;
    return {
      distance: distance2,
      point: point.clone()
    };
  }
  function checkBufferGeometryIntersection(ray, position, normal, uv2, uv1, a, b, c, side, near, far) {
    _vA.fromBufferAttribute(position, a);
    _vB.fromBufferAttribute(position, b);
    _vC.fromBufferAttribute(position, c);
    const intersection = checkIntersection(ray, _vA, _vB, _vC, _intersectionPoint, side, near, far);
    if (intersection) {
      const barycoord = new Vector3();
      Triangle.getBarycoord(_intersectionPoint, _vA, _vB, _vC, barycoord);
      if (uv2) {
        _uvA.fromBufferAttribute(uv2, a);
        _uvB.fromBufferAttribute(uv2, b);
        _uvC.fromBufferAttribute(uv2, c);
        intersection.uv = Triangle.getInterpolation(_intersectionPoint, _vA, _vB, _vC, _uvA, _uvB, _uvC, new Vector2());
      }
      if (uv1) {
        _uvA.fromBufferAttribute(uv1, a);
        _uvB.fromBufferAttribute(uv1, b);
        _uvC.fromBufferAttribute(uv1, c);
        intersection.uv1 = Triangle.getInterpolation(_intersectionPoint, _vA, _vB, _vC, _uvA, _uvB, _uvC, new Vector2());
      }
      if (normal) {
        _normalA.fromBufferAttribute(normal, a);
        _normalB.fromBufferAttribute(normal, b);
        _normalC.fromBufferAttribute(normal, c);
        intersection.normal = Triangle.getInterpolation(_intersectionPoint, _vA, _vB, _vC, _normalA, _normalB, _normalC, new Vector3());
        if (intersection.normal.dot(ray.direction) > 0) {
          intersection.normal.multiplyScalar(-1);
        }
      }
      const face = {
        a,
        b,
        c,
        normal: new Vector3(),
        materialIndex: 0
      };
      Triangle.getNormal(_vA, _vB, _vC, face.normal);
      intersection.face = face;
      intersection.faceIndex = a;
      if (IS_GT_REVISION_169) {
        intersection.barycoord = barycoord;
      }
    }
    return intersection;
  }
  function intersectTri(geo, side, ray, tri, intersections, near, far) {
    const triOffset = tri * 3;
    let a = triOffset + 0;
    let b = triOffset + 1;
    let c = triOffset + 2;
    const index = geo.index;
    if (geo.index) {
      a = index.getX(a);
      b = index.getX(b);
      c = index.getX(c);
    }
    const { position, normal, uv: uv2, uv1 } = geo.attributes;
    const intersection = checkBufferGeometryIntersection(ray, position, normal, uv2, uv1, a, b, c, side, near, far);
    if (intersection) {
      intersection.faceIndex = tri;
      if (intersections) intersections.push(intersection);
      return intersection;
    }
    return null;
  }
  function setTriangle(tri, i, index, pos) {
    const ta = tri.a;
    const tb = tri.b;
    const tc = tri.c;
    let i0 = i;
    let i1 = i + 1;
    let i2 = i + 2;
    if (index) {
      i0 = index.getX(i0);
      i1 = index.getX(i1);
      i2 = index.getX(i2);
    }
    ta.x = pos.getX(i0);
    ta.y = pos.getY(i0);
    ta.z = pos.getZ(i0);
    tb.x = pos.getX(i1);
    tb.y = pos.getY(i1);
    tb.z = pos.getZ(i1);
    tc.x = pos.getX(i2);
    tc.y = pos.getY(i2);
    tc.z = pos.getZ(i2);
  }
  function intersectTris(bvh, side, ray, offset, count, intersections, near, far) {
    const { geometry, _indirectBuffer } = bvh;
    for (let i = offset, end = offset + count; i < end; i++) {
      intersectTri(geometry, side, ray, i, intersections, near, far);
    }
  }
  function intersectClosestTri(bvh, side, ray, offset, count, near, far) {
    const { geometry, _indirectBuffer } = bvh;
    let dist = Infinity;
    let res = null;
    for (let i = offset, end = offset + count; i < end; i++) {
      let intersection;
      intersection = intersectTri(geometry, side, ray, i, null, near, far);
      if (intersection && intersection.distance < dist) {
        res = intersection;
        dist = intersection.distance;
      }
    }
    return res;
  }
  function iterateOverTriangles(offset, count, bvh, intersectsTriangleFunc, contained, depth2, triangle3) {
    const { geometry } = bvh;
    const { index } = geometry;
    const pos = geometry.attributes.position;
    for (let i = offset, l = count + offset; i < l; i++) {
      let tri;
      tri = i;
      setTriangle(triangle3, tri * 3, index, pos);
      triangle3.needsUpdate = true;
      if (intersectsTriangleFunc(triangle3, tri, contained, depth2)) {
        return true;
      }
    }
    return false;
  }
  function refit(bvh, nodeIndices = null) {
    if (nodeIndices && Array.isArray(nodeIndices)) {
      nodeIndices = new Set(nodeIndices);
    }
    const geometry = bvh.geometry;
    const indexArr = geometry.index ? geometry.index.array : null;
    const posAttr = geometry.attributes.position;
    let buffer2, uint32Array2, uint16Array2, float32Array2;
    let byteOffset = 0;
    const roots = bvh._roots;
    for (let i = 0, l = roots.length; i < l; i++) {
      buffer2 = roots[i];
      uint32Array2 = new Uint32Array(buffer2);
      uint16Array2 = new Uint16Array(buffer2);
      float32Array2 = new Float32Array(buffer2);
      _traverse2(0, byteOffset);
      byteOffset += buffer2.byteLength;
    }
    function _traverse2(node32Index, byteOffset2, force = false) {
      const node16Index = node32Index * 2;
      const isLeaf = uint16Array2[node16Index + 15] === IS_LEAFNODE_FLAG;
      if (isLeaf) {
        const offset = uint32Array2[node32Index + 6];
        const count = uint16Array2[node16Index + 14];
        let minx = Infinity;
        let miny = Infinity;
        let minz = Infinity;
        let maxx = -Infinity;
        let maxy = -Infinity;
        let maxz = -Infinity;
        for (let i = 3 * offset, l = 3 * (offset + count); i < l; i++) {
          let index = indexArr[i];
          const x = posAttr.getX(index);
          const y = posAttr.getY(index);
          const z = posAttr.getZ(index);
          if (x < minx) minx = x;
          if (x > maxx) maxx = x;
          if (y < miny) miny = y;
          if (y > maxy) maxy = y;
          if (z < minz) minz = z;
          if (z > maxz) maxz = z;
        }
        if (float32Array2[node32Index + 0] !== minx || float32Array2[node32Index + 1] !== miny || float32Array2[node32Index + 2] !== minz || float32Array2[node32Index + 3] !== maxx || float32Array2[node32Index + 4] !== maxy || float32Array2[node32Index + 5] !== maxz) {
          float32Array2[node32Index + 0] = minx;
          float32Array2[node32Index + 1] = miny;
          float32Array2[node32Index + 2] = minz;
          float32Array2[node32Index + 3] = maxx;
          float32Array2[node32Index + 4] = maxy;
          float32Array2[node32Index + 5] = maxz;
          return true;
        } else {
          return false;
        }
      } else {
        const left = node32Index + 8;
        const right = uint32Array2[node32Index + 6];
        const offsetLeft = left + byteOffset2;
        const offsetRight = right + byteOffset2;
        let forceChildren = force;
        let includesLeft = false;
        let includesRight = false;
        if (nodeIndices) {
          if (!forceChildren) {
            includesLeft = nodeIndices.has(offsetLeft);
            includesRight = nodeIndices.has(offsetRight);
            forceChildren = !includesLeft && !includesRight;
          }
        } else {
          includesLeft = true;
          includesRight = true;
        }
        const traverseLeft = forceChildren || includesLeft;
        const traverseRight = forceChildren || includesRight;
        let leftChange = false;
        if (traverseLeft) {
          leftChange = _traverse2(left, byteOffset2, forceChildren);
        }
        let rightChange = false;
        if (traverseRight) {
          rightChange = _traverse2(right, byteOffset2, forceChildren);
        }
        const didChange = leftChange || rightChange;
        if (didChange) {
          for (let i = 0; i < 3; i++) {
            const lefti = left + i;
            const righti = right + i;
            const minLeftValue = float32Array2[lefti];
            const maxLeftValue = float32Array2[lefti + 3];
            const minRightValue = float32Array2[righti];
            const maxRightValue = float32Array2[righti + 3];
            float32Array2[node32Index + i] = minLeftValue < minRightValue ? minLeftValue : minRightValue;
            float32Array2[node32Index + i + 3] = maxLeftValue > maxRightValue ? maxLeftValue : maxRightValue;
          }
        }
        return didChange;
      }
    }
  }
  function intersectRay(nodeIndex32, array, ray, near, far) {
    let tmin, tmax, tymin, tymax, tzmin, tzmax;
    const invdirx = 1 / ray.direction.x, invdiry = 1 / ray.direction.y, invdirz = 1 / ray.direction.z;
    const ox = ray.origin.x;
    const oy = ray.origin.y;
    const oz = ray.origin.z;
    let minx = array[nodeIndex32];
    let maxx = array[nodeIndex32 + 3];
    let miny = array[nodeIndex32 + 1];
    let maxy = array[nodeIndex32 + 3 + 1];
    let minz = array[nodeIndex32 + 2];
    let maxz = array[nodeIndex32 + 3 + 2];
    if (invdirx >= 0) {
      tmin = (minx - ox) * invdirx;
      tmax = (maxx - ox) * invdirx;
    } else {
      tmin = (maxx - ox) * invdirx;
      tmax = (minx - ox) * invdirx;
    }
    if (invdiry >= 0) {
      tymin = (miny - oy) * invdiry;
      tymax = (maxy - oy) * invdiry;
    } else {
      tymin = (maxy - oy) * invdiry;
      tymax = (miny - oy) * invdiry;
    }
    if (tmin > tymax || tymin > tmax) return false;
    if (tymin > tmin || isNaN(tmin)) tmin = tymin;
    if (tymax < tmax || isNaN(tmax)) tmax = tymax;
    if (invdirz >= 0) {
      tzmin = (minz - oz) * invdirz;
      tzmax = (maxz - oz) * invdirz;
    } else {
      tzmin = (maxz - oz) * invdirz;
      tzmax = (minz - oz) * invdirz;
    }
    if (tmin > tzmax || tzmin > tmax) return false;
    if (tzmin > tmin || tmin !== tmin) tmin = tzmin;
    if (tzmax < tmax || tmax !== tmax) tmax = tzmax;
    return tmin <= far && tmax >= near;
  }
  function intersectTris_indirect(bvh, side, ray, offset, count, intersections, near, far) {
    const { geometry, _indirectBuffer } = bvh;
    for (let i = offset, end = offset + count; i < end; i++) {
      let vi = _indirectBuffer ? _indirectBuffer[i] : i;
      intersectTri(geometry, side, ray, vi, intersections, near, far);
    }
  }
  function intersectClosestTri_indirect(bvh, side, ray, offset, count, near, far) {
    const { geometry, _indirectBuffer } = bvh;
    let dist = Infinity;
    let res = null;
    for (let i = offset, end = offset + count; i < end; i++) {
      let intersection;
      intersection = intersectTri(geometry, side, ray, _indirectBuffer ? _indirectBuffer[i] : i, null, near, far);
      if (intersection && intersection.distance < dist) {
        res = intersection;
        dist = intersection.distance;
      }
    }
    return res;
  }
  function iterateOverTriangles_indirect(offset, count, bvh, intersectsTriangleFunc, contained, depth2, triangle3) {
    const { geometry } = bvh;
    const { index } = geometry;
    const pos = geometry.attributes.position;
    for (let i = offset, l = count + offset; i < l; i++) {
      let tri;
      tri = bvh.resolveTriangleIndex(i);
      setTriangle(triangle3, tri * 3, index, pos);
      triangle3.needsUpdate = true;
      if (intersectsTriangleFunc(triangle3, tri, contained, depth2)) {
        return true;
      }
    }
    return false;
  }
  function raycast(bvh, root, side, ray, intersects, near, far) {
    BufferStack.setBuffer(bvh._roots[root]);
    _raycast$1(0, bvh, side, ray, intersects, near, far);
    BufferStack.clearBuffer();
  }
  function _raycast$1(nodeIndex32, bvh, side, ray, intersects, near, far) {
    const { float32Array: float32Array2, uint16Array: uint16Array2, uint32Array: uint32Array2 } = BufferStack;
    const nodeIndex16 = nodeIndex32 * 2;
    const isLeaf = IS_LEAF(nodeIndex16, uint16Array2);
    if (isLeaf) {
      const offset = OFFSET(nodeIndex32, uint32Array2);
      const count = COUNT(nodeIndex16, uint16Array2);
      intersectTris(bvh, side, ray, offset, count, intersects, near, far);
    } else {
      const leftIndex = LEFT_NODE(nodeIndex32);
      if (intersectRay(leftIndex, float32Array2, ray, near, far)) {
        _raycast$1(leftIndex, bvh, side, ray, intersects, near, far);
      }
      const rightIndex = RIGHT_NODE(nodeIndex32, uint32Array2);
      if (intersectRay(rightIndex, float32Array2, ray, near, far)) {
        _raycast$1(rightIndex, bvh, side, ray, intersects, near, far);
      }
    }
  }
  const _xyzFields$1 = ["x", "y", "z"];
  function raycastFirst(bvh, root, side, ray, near, far) {
    BufferStack.setBuffer(bvh._roots[root]);
    const result = _raycastFirst$1(0, bvh, side, ray, near, far);
    BufferStack.clearBuffer();
    return result;
  }
  function _raycastFirst$1(nodeIndex32, bvh, side, ray, near, far) {
    const { float32Array: float32Array2, uint16Array: uint16Array2, uint32Array: uint32Array2 } = BufferStack;
    let nodeIndex16 = nodeIndex32 * 2;
    const isLeaf = IS_LEAF(nodeIndex16, uint16Array2);
    if (isLeaf) {
      const offset = OFFSET(nodeIndex32, uint32Array2);
      const count = COUNT(nodeIndex16, uint16Array2);
      return intersectClosestTri(bvh, side, ray, offset, count, near, far);
    } else {
      const splitAxis = SPLIT_AXIS(nodeIndex32, uint32Array2);
      const xyzAxis = _xyzFields$1[splitAxis];
      const rayDir = ray.direction[xyzAxis];
      const leftToRight = rayDir >= 0;
      let c1, c2;
      if (leftToRight) {
        c1 = LEFT_NODE(nodeIndex32);
        c2 = RIGHT_NODE(nodeIndex32, uint32Array2);
      } else {
        c1 = RIGHT_NODE(nodeIndex32, uint32Array2);
        c2 = LEFT_NODE(nodeIndex32);
      }
      const c1Intersection = intersectRay(c1, float32Array2, ray, near, far);
      const c1Result = c1Intersection ? _raycastFirst$1(c1, bvh, side, ray, near, far) : null;
      if (c1Result) {
        const point = c1Result.point[xyzAxis];
        const isOutside = leftToRight ? point <= float32Array2[c2 + splitAxis] : (
          // min bounding data
          point >= float32Array2[c2 + splitAxis + 3]
        );
        if (isOutside) {
          return c1Result;
        }
      }
      const c2Intersection = intersectRay(c2, float32Array2, ray, near, far);
      const c2Result = c2Intersection ? _raycastFirst$1(c2, bvh, side, ray, near, far) : null;
      if (c1Result && c2Result) {
        return c1Result.distance <= c2Result.distance ? c1Result : c2Result;
      } else {
        return c1Result || c2Result || null;
      }
    }
  }
  const boundingBox$1 = /* @__PURE__ */ new Box3();
  const triangle$1 = /* @__PURE__ */ new ExtendedTriangle();
  const triangle2$1 = /* @__PURE__ */ new ExtendedTriangle();
  const invertedMat$1 = /* @__PURE__ */ new Matrix4();
  const obb$4 = /* @__PURE__ */ new OrientedBox();
  const obb2$3 = /* @__PURE__ */ new OrientedBox();
  function intersectsGeometry(bvh, root, otherGeometry, geometryToBvh) {
    BufferStack.setBuffer(bvh._roots[root]);
    const result = _intersectsGeometry$1(0, bvh, otherGeometry, geometryToBvh);
    BufferStack.clearBuffer();
    return result;
  }
  function _intersectsGeometry$1(nodeIndex32, bvh, otherGeometry, geometryToBvh, cachedObb = null) {
    const { float32Array: float32Array2, uint16Array: uint16Array2, uint32Array: uint32Array2 } = BufferStack;
    let nodeIndex16 = nodeIndex32 * 2;
    if (cachedObb === null) {
      if (!otherGeometry.boundingBox) {
        otherGeometry.computeBoundingBox();
      }
      obb$4.set(otherGeometry.boundingBox.min, otherGeometry.boundingBox.max, geometryToBvh);
      cachedObb = obb$4;
    }
    const isLeaf = IS_LEAF(nodeIndex16, uint16Array2);
    if (isLeaf) {
      const thisGeometry = bvh.geometry;
      const thisIndex = thisGeometry.index;
      const thisPos = thisGeometry.attributes.position;
      const index = otherGeometry.index;
      const pos = otherGeometry.attributes.position;
      const offset = OFFSET(nodeIndex32, uint32Array2);
      const count = COUNT(nodeIndex16, uint16Array2);
      invertedMat$1.copy(geometryToBvh).invert();
      if (otherGeometry.boundsTree) {
        arrayToBox(BOUNDING_DATA_INDEX(nodeIndex32), float32Array2, obb2$3);
        obb2$3.matrix.copy(invertedMat$1);
        obb2$3.needsUpdate = true;
        const res = otherGeometry.boundsTree.shapecast({
          intersectsBounds: (box) => obb2$3.intersectsBox(box),
          intersectsTriangle: (tri) => {
            tri.a.applyMatrix4(geometryToBvh);
            tri.b.applyMatrix4(geometryToBvh);
            tri.c.applyMatrix4(geometryToBvh);
            tri.needsUpdate = true;
            for (let i = offset * 3, l = (count + offset) * 3; i < l; i += 3) {
              setTriangle(triangle2$1, i, thisIndex, thisPos);
              triangle2$1.needsUpdate = true;
              if (tri.intersectsTriangle(triangle2$1)) {
                return true;
              }
            }
            return false;
          }
        });
        return res;
      } else {
        for (let i = offset * 3, l = (count + offset) * 3; i < l; i += 3) {
          setTriangle(triangle$1, i, thisIndex, thisPos);
          triangle$1.a.applyMatrix4(invertedMat$1);
          triangle$1.b.applyMatrix4(invertedMat$1);
          triangle$1.c.applyMatrix4(invertedMat$1);
          triangle$1.needsUpdate = true;
          for (let i2 = 0, l2 = index.count; i2 < l2; i2 += 3) {
            setTriangle(triangle2$1, i2, index, pos);
            triangle2$1.needsUpdate = true;
            if (triangle$1.intersectsTriangle(triangle2$1)) {
              return true;
            }
          }
        }
      }
    } else {
      const left = nodeIndex32 + 8;
      const right = uint32Array2[nodeIndex32 + 6];
      arrayToBox(BOUNDING_DATA_INDEX(left), float32Array2, boundingBox$1);
      const leftIntersection = cachedObb.intersectsBox(boundingBox$1) && _intersectsGeometry$1(left, bvh, otherGeometry, geometryToBvh, cachedObb);
      if (leftIntersection) return true;
      arrayToBox(BOUNDING_DATA_INDEX(right), float32Array2, boundingBox$1);
      const rightIntersection = cachedObb.intersectsBox(boundingBox$1) && _intersectsGeometry$1(right, bvh, otherGeometry, geometryToBvh, cachedObb);
      if (rightIntersection) return true;
      return false;
    }
  }
  const tempMatrix$1 = /* @__PURE__ */ new Matrix4();
  const obb$3 = /* @__PURE__ */ new OrientedBox();
  const obb2$2 = /* @__PURE__ */ new OrientedBox();
  const temp1$1 = /* @__PURE__ */ new Vector3();
  const temp2$1 = /* @__PURE__ */ new Vector3();
  const temp3$1 = /* @__PURE__ */ new Vector3();
  const temp4$1 = /* @__PURE__ */ new Vector3();
  function closestPointToGeometry(bvh, otherGeometry, geometryToBvh, target1 = {}, target2 = {}, minThreshold = 0, maxThreshold = Infinity) {
    if (!otherGeometry.boundingBox) {
      otherGeometry.computeBoundingBox();
    }
    obb$3.set(otherGeometry.boundingBox.min, otherGeometry.boundingBox.max, geometryToBvh);
    obb$3.needsUpdate = true;
    const geometry = bvh.geometry;
    const pos = geometry.attributes.position;
    const index = geometry.index;
    const otherPos = otherGeometry.attributes.position;
    const otherIndex = otherGeometry.index;
    const triangle3 = ExtendedTrianglePool.getPrimitive();
    const triangle22 = ExtendedTrianglePool.getPrimitive();
    let tempTarget1 = temp1$1;
    let tempTargetDest1 = temp2$1;
    let tempTarget2 = null;
    let tempTargetDest2 = null;
    if (target2) {
      tempTarget2 = temp3$1;
      tempTargetDest2 = temp4$1;
    }
    let closestDistance = Infinity;
    let closestDistanceTriIndex = null;
    let closestDistanceOtherTriIndex = null;
    tempMatrix$1.copy(geometryToBvh).invert();
    obb2$2.matrix.copy(tempMatrix$1);
    bvh.shapecast(
      {
        boundsTraverseOrder: (box) => {
          return obb$3.distanceToBox(box);
        },
        intersectsBounds: (box, isLeaf, score) => {
          if (score < closestDistance && score < maxThreshold) {
            if (isLeaf) {
              obb2$2.min.copy(box.min);
              obb2$2.max.copy(box.max);
              obb2$2.needsUpdate = true;
            }
            return true;
          }
          return false;
        },
        intersectsRange: (offset, count) => {
          if (otherGeometry.boundsTree) {
            const otherBvh = otherGeometry.boundsTree;
            return otherBvh.shapecast({
              boundsTraverseOrder: (box) => {
                return obb2$2.distanceToBox(box);
              },
              intersectsBounds: (box, isLeaf, score) => {
                return score < closestDistance && score < maxThreshold;
              },
              intersectsRange: (otherOffset, otherCount) => {
                for (let i2 = otherOffset, l2 = otherOffset + otherCount; i2 < l2; i2++) {
                  setTriangle(triangle22, 3 * i2, otherIndex, otherPos);
                  triangle22.a.applyMatrix4(geometryToBvh);
                  triangle22.b.applyMatrix4(geometryToBvh);
                  triangle22.c.applyMatrix4(geometryToBvh);
                  triangle22.needsUpdate = true;
                  for (let i = offset, l = offset + count; i < l; i++) {
                    setTriangle(triangle3, 3 * i, index, pos);
                    triangle3.needsUpdate = true;
                    const dist = triangle3.distanceToTriangle(triangle22, tempTarget1, tempTarget2);
                    if (dist < closestDistance) {
                      tempTargetDest1.copy(tempTarget1);
                      if (tempTargetDest2) {
                        tempTargetDest2.copy(tempTarget2);
                      }
                      closestDistance = dist;
                      closestDistanceTriIndex = i;
                      closestDistanceOtherTriIndex = i2;
                    }
                    if (dist < minThreshold) {
                      return true;
                    }
                  }
                }
              }
            });
          } else {
            const triCount = getTriCount(otherGeometry);
            for (let i2 = 0, l2 = triCount; i2 < l2; i2++) {
              setTriangle(triangle22, 3 * i2, otherIndex, otherPos);
              triangle22.a.applyMatrix4(geometryToBvh);
              triangle22.b.applyMatrix4(geometryToBvh);
              triangle22.c.applyMatrix4(geometryToBvh);
              triangle22.needsUpdate = true;
              for (let i = offset, l = offset + count; i < l; i++) {
                setTriangle(triangle3, 3 * i, index, pos);
                triangle3.needsUpdate = true;
                const dist = triangle3.distanceToTriangle(triangle22, tempTarget1, tempTarget2);
                if (dist < closestDistance) {
                  tempTargetDest1.copy(tempTarget1);
                  if (tempTargetDest2) {
                    tempTargetDest2.copy(tempTarget2);
                  }
                  closestDistance = dist;
                  closestDistanceTriIndex = i;
                  closestDistanceOtherTriIndex = i2;
                }
                if (dist < minThreshold) {
                  return true;
                }
              }
            }
          }
        }
      }
    );
    ExtendedTrianglePool.releasePrimitive(triangle3);
    ExtendedTrianglePool.releasePrimitive(triangle22);
    if (closestDistance === Infinity) {
      return null;
    }
    if (!target1.point) {
      target1.point = tempTargetDest1.clone();
    } else {
      target1.point.copy(tempTargetDest1);
    }
    target1.distance = closestDistance, target1.faceIndex = closestDistanceTriIndex;
    if (target2) {
      if (!target2.point) target2.point = tempTargetDest2.clone();
      else target2.point.copy(tempTargetDest2);
      target2.point.applyMatrix4(tempMatrix$1);
      tempTargetDest1.applyMatrix4(tempMatrix$1);
      target2.distance = tempTargetDest1.sub(target2.point).length();
      target2.faceIndex = closestDistanceOtherTriIndex;
    }
    return target1;
  }
  function refit_indirect(bvh, nodeIndices = null) {
    if (nodeIndices && Array.isArray(nodeIndices)) {
      nodeIndices = new Set(nodeIndices);
    }
    const geometry = bvh.geometry;
    const indexArr = geometry.index ? geometry.index.array : null;
    const posAttr = geometry.attributes.position;
    let buffer2, uint32Array2, uint16Array2, float32Array2;
    let byteOffset = 0;
    const roots = bvh._roots;
    for (let i = 0, l = roots.length; i < l; i++) {
      buffer2 = roots[i];
      uint32Array2 = new Uint32Array(buffer2);
      uint16Array2 = new Uint16Array(buffer2);
      float32Array2 = new Float32Array(buffer2);
      _traverse2(0, byteOffset);
      byteOffset += buffer2.byteLength;
    }
    function _traverse2(node32Index, byteOffset2, force = false) {
      const node16Index = node32Index * 2;
      const isLeaf = uint16Array2[node16Index + 15] === IS_LEAFNODE_FLAG;
      if (isLeaf) {
        const offset = uint32Array2[node32Index + 6];
        const count = uint16Array2[node16Index + 14];
        let minx = Infinity;
        let miny = Infinity;
        let minz = Infinity;
        let maxx = -Infinity;
        let maxy = -Infinity;
        let maxz = -Infinity;
        for (let i = offset, l = offset + count; i < l; i++) {
          const t = 3 * bvh.resolveTriangleIndex(i);
          for (let j = 0; j < 3; j++) {
            let index = t + j;
            index = indexArr ? indexArr[index] : index;
            const x = posAttr.getX(index);
            const y = posAttr.getY(index);
            const z = posAttr.getZ(index);
            if (x < minx) minx = x;
            if (x > maxx) maxx = x;
            if (y < miny) miny = y;
            if (y > maxy) maxy = y;
            if (z < minz) minz = z;
            if (z > maxz) maxz = z;
          }
        }
        if (float32Array2[node32Index + 0] !== minx || float32Array2[node32Index + 1] !== miny || float32Array2[node32Index + 2] !== minz || float32Array2[node32Index + 3] !== maxx || float32Array2[node32Index + 4] !== maxy || float32Array2[node32Index + 5] !== maxz) {
          float32Array2[node32Index + 0] = minx;
          float32Array2[node32Index + 1] = miny;
          float32Array2[node32Index + 2] = minz;
          float32Array2[node32Index + 3] = maxx;
          float32Array2[node32Index + 4] = maxy;
          float32Array2[node32Index + 5] = maxz;
          return true;
        } else {
          return false;
        }
      } else {
        const left = node32Index + 8;
        const right = uint32Array2[node32Index + 6];
        const offsetLeft = left + byteOffset2;
        const offsetRight = right + byteOffset2;
        let forceChildren = force;
        let includesLeft = false;
        let includesRight = false;
        if (nodeIndices) {
          if (!forceChildren) {
            includesLeft = nodeIndices.has(offsetLeft);
            includesRight = nodeIndices.has(offsetRight);
            forceChildren = !includesLeft && !includesRight;
          }
        } else {
          includesLeft = true;
          includesRight = true;
        }
        const traverseLeft = forceChildren || includesLeft;
        const traverseRight = forceChildren || includesRight;
        let leftChange = false;
        if (traverseLeft) {
          leftChange = _traverse2(left, byteOffset2, forceChildren);
        }
        let rightChange = false;
        if (traverseRight) {
          rightChange = _traverse2(right, byteOffset2, forceChildren);
        }
        const didChange = leftChange || rightChange;
        if (didChange) {
          for (let i = 0; i < 3; i++) {
            const lefti = left + i;
            const righti = right + i;
            const minLeftValue = float32Array2[lefti];
            const maxLeftValue = float32Array2[lefti + 3];
            const minRightValue = float32Array2[righti];
            const maxRightValue = float32Array2[righti + 3];
            float32Array2[node32Index + i] = minLeftValue < minRightValue ? minLeftValue : minRightValue;
            float32Array2[node32Index + i + 3] = maxLeftValue > maxRightValue ? maxLeftValue : maxRightValue;
          }
        }
        return didChange;
      }
    }
  }
  function raycast_indirect(bvh, root, side, ray, intersects, near, far) {
    BufferStack.setBuffer(bvh._roots[root]);
    _raycast(0, bvh, side, ray, intersects, near, far);
    BufferStack.clearBuffer();
  }
  function _raycast(nodeIndex32, bvh, side, ray, intersects, near, far) {
    const { float32Array: float32Array2, uint16Array: uint16Array2, uint32Array: uint32Array2 } = BufferStack;
    const nodeIndex16 = nodeIndex32 * 2;
    const isLeaf = IS_LEAF(nodeIndex16, uint16Array2);
    if (isLeaf) {
      const offset = OFFSET(nodeIndex32, uint32Array2);
      const count = COUNT(nodeIndex16, uint16Array2);
      intersectTris_indirect(bvh, side, ray, offset, count, intersects, near, far);
    } else {
      const leftIndex = LEFT_NODE(nodeIndex32);
      if (intersectRay(leftIndex, float32Array2, ray, near, far)) {
        _raycast(leftIndex, bvh, side, ray, intersects, near, far);
      }
      const rightIndex = RIGHT_NODE(nodeIndex32, uint32Array2);
      if (intersectRay(rightIndex, float32Array2, ray, near, far)) {
        _raycast(rightIndex, bvh, side, ray, intersects, near, far);
      }
    }
  }
  const _xyzFields = ["x", "y", "z"];
  function raycastFirst_indirect(bvh, root, side, ray, near, far) {
    BufferStack.setBuffer(bvh._roots[root]);
    const result = _raycastFirst(0, bvh, side, ray, near, far);
    BufferStack.clearBuffer();
    return result;
  }
  function _raycastFirst(nodeIndex32, bvh, side, ray, near, far) {
    const { float32Array: float32Array2, uint16Array: uint16Array2, uint32Array: uint32Array2 } = BufferStack;
    let nodeIndex16 = nodeIndex32 * 2;
    const isLeaf = IS_LEAF(nodeIndex16, uint16Array2);
    if (isLeaf) {
      const offset = OFFSET(nodeIndex32, uint32Array2);
      const count = COUNT(nodeIndex16, uint16Array2);
      return intersectClosestTri_indirect(bvh, side, ray, offset, count, near, far);
    } else {
      const splitAxis = SPLIT_AXIS(nodeIndex32, uint32Array2);
      const xyzAxis = _xyzFields[splitAxis];
      const rayDir = ray.direction[xyzAxis];
      const leftToRight = rayDir >= 0;
      let c1, c2;
      if (leftToRight) {
        c1 = LEFT_NODE(nodeIndex32);
        c2 = RIGHT_NODE(nodeIndex32, uint32Array2);
      } else {
        c1 = RIGHT_NODE(nodeIndex32, uint32Array2);
        c2 = LEFT_NODE(nodeIndex32);
      }
      const c1Intersection = intersectRay(c1, float32Array2, ray, near, far);
      const c1Result = c1Intersection ? _raycastFirst(c1, bvh, side, ray, near, far) : null;
      if (c1Result) {
        const point = c1Result.point[xyzAxis];
        const isOutside = leftToRight ? point <= float32Array2[c2 + splitAxis] : (
          // min bounding data
          point >= float32Array2[c2 + splitAxis + 3]
        );
        if (isOutside) {
          return c1Result;
        }
      }
      const c2Intersection = intersectRay(c2, float32Array2, ray, near, far);
      const c2Result = c2Intersection ? _raycastFirst(c2, bvh, side, ray, near, far) : null;
      if (c1Result && c2Result) {
        return c1Result.distance <= c2Result.distance ? c1Result : c2Result;
      } else {
        return c1Result || c2Result || null;
      }
    }
  }
  const boundingBox = /* @__PURE__ */ new Box3();
  const triangle = /* @__PURE__ */ new ExtendedTriangle();
  const triangle2 = /* @__PURE__ */ new ExtendedTriangle();
  const invertedMat = /* @__PURE__ */ new Matrix4();
  const obb$2 = /* @__PURE__ */ new OrientedBox();
  const obb2$1 = /* @__PURE__ */ new OrientedBox();
  function intersectsGeometry_indirect(bvh, root, otherGeometry, geometryToBvh) {
    BufferStack.setBuffer(bvh._roots[root]);
    const result = _intersectsGeometry(0, bvh, otherGeometry, geometryToBvh);
    BufferStack.clearBuffer();
    return result;
  }
  function _intersectsGeometry(nodeIndex32, bvh, otherGeometry, geometryToBvh, cachedObb = null) {
    const { float32Array: float32Array2, uint16Array: uint16Array2, uint32Array: uint32Array2 } = BufferStack;
    let nodeIndex16 = nodeIndex32 * 2;
    if (cachedObb === null) {
      if (!otherGeometry.boundingBox) {
        otherGeometry.computeBoundingBox();
      }
      obb$2.set(otherGeometry.boundingBox.min, otherGeometry.boundingBox.max, geometryToBvh);
      cachedObb = obb$2;
    }
    const isLeaf = IS_LEAF(nodeIndex16, uint16Array2);
    if (isLeaf) {
      const thisGeometry = bvh.geometry;
      const thisIndex = thisGeometry.index;
      const thisPos = thisGeometry.attributes.position;
      const index = otherGeometry.index;
      const pos = otherGeometry.attributes.position;
      const offset = OFFSET(nodeIndex32, uint32Array2);
      const count = COUNT(nodeIndex16, uint16Array2);
      invertedMat.copy(geometryToBvh).invert();
      if (otherGeometry.boundsTree) {
        arrayToBox(BOUNDING_DATA_INDEX(nodeIndex32), float32Array2, obb2$1);
        obb2$1.matrix.copy(invertedMat);
        obb2$1.needsUpdate = true;
        const res = otherGeometry.boundsTree.shapecast({
          intersectsBounds: (box) => obb2$1.intersectsBox(box),
          intersectsTriangle: (tri) => {
            tri.a.applyMatrix4(geometryToBvh);
            tri.b.applyMatrix4(geometryToBvh);
            tri.c.applyMatrix4(geometryToBvh);
            tri.needsUpdate = true;
            for (let i = offset, l = count + offset; i < l; i++) {
              setTriangle(triangle2, 3 * bvh.resolveTriangleIndex(i), thisIndex, thisPos);
              triangle2.needsUpdate = true;
              if (tri.intersectsTriangle(triangle2)) {
                return true;
              }
            }
            return false;
          }
        });
        return res;
      } else {
        for (let i = offset, l = count + offset; i < l; i++) {
          const ti = bvh.resolveTriangleIndex(i);
          setTriangle(triangle, 3 * ti, thisIndex, thisPos);
          triangle.a.applyMatrix4(invertedMat);
          triangle.b.applyMatrix4(invertedMat);
          triangle.c.applyMatrix4(invertedMat);
          triangle.needsUpdate = true;
          for (let i2 = 0, l2 = index.count; i2 < l2; i2 += 3) {
            setTriangle(triangle2, i2, index, pos);
            triangle2.needsUpdate = true;
            if (triangle.intersectsTriangle(triangle2)) {
              return true;
            }
          }
        }
      }
    } else {
      const left = nodeIndex32 + 8;
      const right = uint32Array2[nodeIndex32 + 6];
      arrayToBox(BOUNDING_DATA_INDEX(left), float32Array2, boundingBox);
      const leftIntersection = cachedObb.intersectsBox(boundingBox) && _intersectsGeometry(left, bvh, otherGeometry, geometryToBvh, cachedObb);
      if (leftIntersection) return true;
      arrayToBox(BOUNDING_DATA_INDEX(right), float32Array2, boundingBox);
      const rightIntersection = cachedObb.intersectsBox(boundingBox) && _intersectsGeometry(right, bvh, otherGeometry, geometryToBvh, cachedObb);
      if (rightIntersection) return true;
      return false;
    }
  }
  const tempMatrix = /* @__PURE__ */ new Matrix4();
  const obb$1 = /* @__PURE__ */ new OrientedBox();
  const obb2 = /* @__PURE__ */ new OrientedBox();
  const temp1 = /* @__PURE__ */ new Vector3();
  const temp2 = /* @__PURE__ */ new Vector3();
  const temp3 = /* @__PURE__ */ new Vector3();
  const temp4 = /* @__PURE__ */ new Vector3();
  function closestPointToGeometry_indirect(bvh, otherGeometry, geometryToBvh, target1 = {}, target2 = {}, minThreshold = 0, maxThreshold = Infinity) {
    if (!otherGeometry.boundingBox) {
      otherGeometry.computeBoundingBox();
    }
    obb$1.set(otherGeometry.boundingBox.min, otherGeometry.boundingBox.max, geometryToBvh);
    obb$1.needsUpdate = true;
    const geometry = bvh.geometry;
    const pos = geometry.attributes.position;
    const index = geometry.index;
    const otherPos = otherGeometry.attributes.position;
    const otherIndex = otherGeometry.index;
    const triangle3 = ExtendedTrianglePool.getPrimitive();
    const triangle22 = ExtendedTrianglePool.getPrimitive();
    let tempTarget1 = temp1;
    let tempTargetDest1 = temp2;
    let tempTarget2 = null;
    let tempTargetDest2 = null;
    if (target2) {
      tempTarget2 = temp3;
      tempTargetDest2 = temp4;
    }
    let closestDistance = Infinity;
    let closestDistanceTriIndex = null;
    let closestDistanceOtherTriIndex = null;
    tempMatrix.copy(geometryToBvh).invert();
    obb2.matrix.copy(tempMatrix);
    bvh.shapecast(
      {
        boundsTraverseOrder: (box) => {
          return obb$1.distanceToBox(box);
        },
        intersectsBounds: (box, isLeaf, score) => {
          if (score < closestDistance && score < maxThreshold) {
            if (isLeaf) {
              obb2.min.copy(box.min);
              obb2.max.copy(box.max);
              obb2.needsUpdate = true;
            }
            return true;
          }
          return false;
        },
        intersectsRange: (offset, count) => {
          if (otherGeometry.boundsTree) {
            const otherBvh = otherGeometry.boundsTree;
            return otherBvh.shapecast({
              boundsTraverseOrder: (box) => {
                return obb2.distanceToBox(box);
              },
              intersectsBounds: (box, isLeaf, score) => {
                return score < closestDistance && score < maxThreshold;
              },
              intersectsRange: (otherOffset, otherCount) => {
                for (let i2 = otherOffset, l2 = otherOffset + otherCount; i2 < l2; i2++) {
                  const ti2 = otherBvh.resolveTriangleIndex(i2);
                  setTriangle(triangle22, 3 * ti2, otherIndex, otherPos);
                  triangle22.a.applyMatrix4(geometryToBvh);
                  triangle22.b.applyMatrix4(geometryToBvh);
                  triangle22.c.applyMatrix4(geometryToBvh);
                  triangle22.needsUpdate = true;
                  for (let i = offset, l = offset + count; i < l; i++) {
                    const ti = bvh.resolveTriangleIndex(i);
                    setTriangle(triangle3, 3 * ti, index, pos);
                    triangle3.needsUpdate = true;
                    const dist = triangle3.distanceToTriangle(triangle22, tempTarget1, tempTarget2);
                    if (dist < closestDistance) {
                      tempTargetDest1.copy(tempTarget1);
                      if (tempTargetDest2) {
                        tempTargetDest2.copy(tempTarget2);
                      }
                      closestDistance = dist;
                      closestDistanceTriIndex = i;
                      closestDistanceOtherTriIndex = i2;
                    }
                    if (dist < minThreshold) {
                      return true;
                    }
                  }
                }
              }
            });
          } else {
            const triCount = getTriCount(otherGeometry);
            for (let i2 = 0, l2 = triCount; i2 < l2; i2++) {
              setTriangle(triangle22, 3 * i2, otherIndex, otherPos);
              triangle22.a.applyMatrix4(geometryToBvh);
              triangle22.b.applyMatrix4(geometryToBvh);
              triangle22.c.applyMatrix4(geometryToBvh);
              triangle22.needsUpdate = true;
              for (let i = offset, l = offset + count; i < l; i++) {
                const ti = bvh.resolveTriangleIndex(i);
                setTriangle(triangle3, 3 * ti, index, pos);
                triangle3.needsUpdate = true;
                const dist = triangle3.distanceToTriangle(triangle22, tempTarget1, tempTarget2);
                if (dist < closestDistance) {
                  tempTargetDest1.copy(tempTarget1);
                  if (tempTargetDest2) {
                    tempTargetDest2.copy(tempTarget2);
                  }
                  closestDistance = dist;
                  closestDistanceTriIndex = i;
                  closestDistanceOtherTriIndex = i2;
                }
                if (dist < minThreshold) {
                  return true;
                }
              }
            }
          }
        }
      }
    );
    ExtendedTrianglePool.releasePrimitive(triangle3);
    ExtendedTrianglePool.releasePrimitive(triangle22);
    if (closestDistance === Infinity) {
      return null;
    }
    if (!target1.point) {
      target1.point = tempTargetDest1.clone();
    } else {
      target1.point.copy(tempTargetDest1);
    }
    target1.distance = closestDistance, target1.faceIndex = closestDistanceTriIndex;
    if (target2) {
      if (!target2.point) target2.point = tempTargetDest2.clone();
      else target2.point.copy(tempTargetDest2);
      target2.point.applyMatrix4(tempMatrix);
      tempTargetDest1.applyMatrix4(tempMatrix);
      target2.distance = tempTargetDest1.sub(target2.point).length();
      target2.faceIndex = closestDistanceOtherTriIndex;
    }
    return target1;
  }
  function isSharedArrayBufferSupported() {
    return typeof SharedArrayBuffer !== "undefined";
  }
  const _bufferStack1 = new BufferStack.constructor();
  const _bufferStack2 = new BufferStack.constructor();
  const _boxPool = new PrimitivePool(() => new Box3());
  const _leftBox1 = new Box3();
  const _rightBox1 = new Box3();
  const _leftBox2 = new Box3();
  const _rightBox2 = new Box3();
  let _active = false;
  function bvhcast(bvh, otherBvh, matrixToLocal, intersectsRanges) {
    if (_active) {
      throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");
    }
    _active = true;
    const roots = bvh._roots;
    const otherRoots = otherBvh._roots;
    let result;
    let offset1 = 0;
    let offset2 = 0;
    const invMat = new Matrix4().copy(matrixToLocal).invert();
    for (let i = 0, il = roots.length; i < il; i++) {
      _bufferStack1.setBuffer(roots[i]);
      offset2 = 0;
      const localBox = _boxPool.getPrimitive();
      arrayToBox(BOUNDING_DATA_INDEX(0), _bufferStack1.float32Array, localBox);
      localBox.applyMatrix4(invMat);
      for (let j = 0, jl = otherRoots.length; j < jl; j++) {
        _bufferStack2.setBuffer(otherRoots[j]);
        result = _traverse(
          0,
          0,
          matrixToLocal,
          invMat,
          intersectsRanges,
          offset1,
          offset2,
          0,
          0,
          localBox
        );
        _bufferStack2.clearBuffer();
        offset2 += otherRoots[j].length;
        if (result) {
          break;
        }
      }
      _boxPool.releasePrimitive(localBox);
      _bufferStack1.clearBuffer();
      offset1 += roots[i].length;
      if (result) {
        break;
      }
    }
    _active = false;
    return result;
  }
  function _traverse(node1Index32, node2Index32, matrix2to1, matrix1to2, intersectsRangesFunc, node1IndexByteOffset = 0, node2IndexByteOffset = 0, depth1 = 0, depth2 = 0, currBox = null, reversed = false) {
    let bufferStack1, bufferStack2;
    if (reversed) {
      bufferStack1 = _bufferStack2;
      bufferStack2 = _bufferStack1;
    } else {
      bufferStack1 = _bufferStack1;
      bufferStack2 = _bufferStack2;
    }
    const float32Array1 = bufferStack1.float32Array, uint32Array1 = bufferStack1.uint32Array, uint16Array1 = bufferStack1.uint16Array, float32Array2 = bufferStack2.float32Array, uint32Array2 = bufferStack2.uint32Array, uint16Array2 = bufferStack2.uint16Array;
    const node1Index16 = node1Index32 * 2;
    const node2Index16 = node2Index32 * 2;
    const isLeaf1 = IS_LEAF(node1Index16, uint16Array1);
    const isLeaf2 = IS_LEAF(node2Index16, uint16Array2);
    let result = false;
    if (isLeaf2 && isLeaf1) {
      if (reversed) {
        result = intersectsRangesFunc(
          OFFSET(node2Index32, uint32Array2),
          COUNT(node2Index32 * 2, uint16Array2),
          OFFSET(node1Index32, uint32Array1),
          COUNT(node1Index32 * 2, uint16Array1),
          depth2,
          node2IndexByteOffset + node2Index32,
          depth1,
          node1IndexByteOffset + node1Index32
        );
      } else {
        result = intersectsRangesFunc(
          OFFSET(node1Index32, uint32Array1),
          COUNT(node1Index32 * 2, uint16Array1),
          OFFSET(node2Index32, uint32Array2),
          COUNT(node2Index32 * 2, uint16Array2),
          depth1,
          node1IndexByteOffset + node1Index32,
          depth2,
          node2IndexByteOffset + node2Index32
        );
      }
    } else if (isLeaf2) {
      const newBox = _boxPool.getPrimitive();
      arrayToBox(BOUNDING_DATA_INDEX(node2Index32), float32Array2, newBox);
      newBox.applyMatrix4(matrix2to1);
      const cl1 = LEFT_NODE(node1Index32);
      const cr1 = RIGHT_NODE(node1Index32, uint32Array1);
      arrayToBox(BOUNDING_DATA_INDEX(cl1), float32Array1, _leftBox1);
      arrayToBox(BOUNDING_DATA_INDEX(cr1), float32Array1, _rightBox1);
      const intersectCl1 = newBox.intersectsBox(_leftBox1);
      const intersectCr1 = newBox.intersectsBox(_rightBox1);
      result = intersectCl1 && _traverse(
        node2Index32,
        cl1,
        matrix1to2,
        matrix2to1,
        intersectsRangesFunc,
        node2IndexByteOffset,
        node1IndexByteOffset,
        depth2,
        depth1 + 1,
        newBox,
        !reversed
      ) || intersectCr1 && _traverse(
        node2Index32,
        cr1,
        matrix1to2,
        matrix2to1,
        intersectsRangesFunc,
        node2IndexByteOffset,
        node1IndexByteOffset,
        depth2,
        depth1 + 1,
        newBox,
        !reversed
      );
      _boxPool.releasePrimitive(newBox);
    } else {
      const cl2 = LEFT_NODE(node2Index32);
      const cr2 = RIGHT_NODE(node2Index32, uint32Array2);
      arrayToBox(BOUNDING_DATA_INDEX(cl2), float32Array2, _leftBox2);
      arrayToBox(BOUNDING_DATA_INDEX(cr2), float32Array2, _rightBox2);
      const leftIntersects = currBox.intersectsBox(_leftBox2);
      const rightIntersects = currBox.intersectsBox(_rightBox2);
      if (leftIntersects && rightIntersects) {
        result = _traverse(
          node1Index32,
          cl2,
          matrix2to1,
          matrix1to2,
          intersectsRangesFunc,
          node1IndexByteOffset,
          node2IndexByteOffset,
          depth1,
          depth2 + 1,
          currBox,
          reversed
        ) || _traverse(
          node1Index32,
          cr2,
          matrix2to1,
          matrix1to2,
          intersectsRangesFunc,
          node1IndexByteOffset,
          node2IndexByteOffset,
          depth1,
          depth2 + 1,
          currBox,
          reversed
        );
      } else if (leftIntersects) {
        if (isLeaf1) {
          result = _traverse(
            node1Index32,
            cl2,
            matrix2to1,
            matrix1to2,
            intersectsRangesFunc,
            node1IndexByteOffset,
            node2IndexByteOffset,
            depth1,
            depth2 + 1,
            currBox,
            reversed
          );
        } else {
          const newBox = _boxPool.getPrimitive();
          newBox.copy(_leftBox2).applyMatrix4(matrix2to1);
          const cl1 = LEFT_NODE(node1Index32);
          const cr1 = RIGHT_NODE(node1Index32, uint32Array1);
          arrayToBox(BOUNDING_DATA_INDEX(cl1), float32Array1, _leftBox1);
          arrayToBox(BOUNDING_DATA_INDEX(cr1), float32Array1, _rightBox1);
          const intersectCl1 = newBox.intersectsBox(_leftBox1);
          const intersectCr1 = newBox.intersectsBox(_rightBox1);
          result = intersectCl1 && _traverse(
            cl2,
            cl1,
            matrix1to2,
            matrix2to1,
            intersectsRangesFunc,
            node2IndexByteOffset,
            node1IndexByteOffset,
            depth2,
            depth1 + 1,
            newBox,
            !reversed
          ) || intersectCr1 && _traverse(
            cl2,
            cr1,
            matrix1to2,
            matrix2to1,
            intersectsRangesFunc,
            node2IndexByteOffset,
            node1IndexByteOffset,
            depth2,
            depth1 + 1,
            newBox,
            !reversed
          );
          _boxPool.releasePrimitive(newBox);
        }
      } else if (rightIntersects) {
        if (isLeaf1) {
          result = _traverse(
            node1Index32,
            cr2,
            matrix2to1,
            matrix1to2,
            intersectsRangesFunc,
            node1IndexByteOffset,
            node2IndexByteOffset,
            depth1,
            depth2 + 1,
            currBox,
            reversed
          );
        } else {
          const newBox = _boxPool.getPrimitive();
          newBox.copy(_rightBox2).applyMatrix4(matrix2to1);
          const cl1 = LEFT_NODE(node1Index32);
          const cr1 = RIGHT_NODE(node1Index32, uint32Array1);
          arrayToBox(BOUNDING_DATA_INDEX(cl1), float32Array1, _leftBox1);
          arrayToBox(BOUNDING_DATA_INDEX(cr1), float32Array1, _rightBox1);
          const intersectCl1 = newBox.intersectsBox(_leftBox1);
          const intersectCr1 = newBox.intersectsBox(_rightBox1);
          result = intersectCl1 && _traverse(
            cr2,
            cl1,
            matrix1to2,
            matrix2to1,
            intersectsRangesFunc,
            node2IndexByteOffset,
            node1IndexByteOffset,
            depth2,
            depth1 + 1,
            newBox,
            !reversed
          ) || intersectCr1 && _traverse(
            cr2,
            cr1,
            matrix1to2,
            matrix2to1,
            intersectsRangesFunc,
            node2IndexByteOffset,
            node1IndexByteOffset,
            depth2,
            depth1 + 1,
            newBox,
            !reversed
          );
          _boxPool.releasePrimitive(newBox);
        }
      }
    }
    return result;
  }
  const obb = /* @__PURE__ */ new OrientedBox();
  const tempBox = /* @__PURE__ */ new Box3();
  const DEFAULT_OPTIONS = {
    strategy: CENTER,
    maxDepth: 40,
    maxLeafTris: 10,
    useSharedArrayBuffer: false,
    setBoundingBox: true,
    onProgress: null,
    indirect: false,
    verbose: true,
    range: null
  };
  class MeshBVH {
    static serialize(bvh, options = {}) {
      options = {
        cloneBuffers: true,
        ...options
      };
      const geometry = bvh.geometry;
      const rootData = bvh._roots;
      const indirectBuffer = bvh._indirectBuffer;
      const indexAttribute = geometry.getIndex();
      let result;
      if (options.cloneBuffers) {
        result = {
          roots: rootData.map((root) => root.slice()),
          index: indexAttribute ? indexAttribute.array.slice() : null,
          indirectBuffer: indirectBuffer ? indirectBuffer.slice() : null
        };
      } else {
        result = {
          roots: rootData,
          index: indexAttribute ? indexAttribute.array : null,
          indirectBuffer
        };
      }
      return result;
    }
    static deserialize(data, geometry, options = {}) {
      options = {
        setIndex: true,
        indirect: Boolean(data.indirectBuffer),
        ...options
      };
      const { index, roots, indirectBuffer } = data;
      const bvh = new MeshBVH(geometry, { ...options, [SKIP_GENERATION]: true });
      bvh._roots = roots;
      bvh._indirectBuffer = indirectBuffer || null;
      if (options.setIndex) {
        const indexAttribute = geometry.getIndex();
        if (indexAttribute === null) {
          const newIndex = new BufferAttribute(data.index, 1, false);
          geometry.setIndex(newIndex);
        } else if (indexAttribute.array !== index) {
          indexAttribute.array.set(index);
          indexAttribute.needsUpdate = true;
        }
      }
      return bvh;
    }
    get indirect() {
      return !!this._indirectBuffer;
    }
    constructor(geometry, options = {}) {
      if (!geometry.isBufferGeometry) {
        throw new Error("MeshBVH: Only BufferGeometries are supported.");
      } else if (geometry.index && geometry.index.isInterleavedBufferAttribute) {
        throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.");
      }
      options = Object.assign({
        ...DEFAULT_OPTIONS,
        // undocumented options
        // Whether to skip generating the tree. Used for deserialization.
        [SKIP_GENERATION]: false
      }, options);
      if (options.useSharedArrayBuffer && !isSharedArrayBufferSupported()) {
        throw new Error("MeshBVH: SharedArrayBuffer is not available.");
      }
      this.geometry = geometry;
      this._roots = null;
      this._indirectBuffer = null;
      if (!options[SKIP_GENERATION]) {
        buildPackedTree(this, options);
        if (!geometry.boundingBox && options.setBoundingBox) {
          geometry.boundingBox = this.getBoundingBox(new Box3());
        }
      }
      this.resolveTriangleIndex = options.indirect ? (i) => this._indirectBuffer[i] : (i) => i;
    }
    refit(nodeIndices = null) {
      const refitFunc = this.indirect ? refit_indirect : refit;
      return refitFunc(this, nodeIndices);
    }
    traverse(callback, rootIndex = 0) {
      const buffer2 = this._roots[rootIndex];
      const uint32Array2 = new Uint32Array(buffer2);
      const uint16Array2 = new Uint16Array(buffer2);
      _traverse2(0);
      function _traverse2(node32Index, depth2 = 0) {
        const node16Index = node32Index * 2;
        const isLeaf = uint16Array2[node16Index + 15] === IS_LEAFNODE_FLAG;
        if (isLeaf) {
          const offset = uint32Array2[node32Index + 6];
          const count = uint16Array2[node16Index + 14];
          callback(depth2, isLeaf, new Float32Array(buffer2, node32Index * 4, 6), offset, count);
        } else {
          const left = node32Index + BYTES_PER_NODE / 4;
          const right = uint32Array2[node32Index + 6];
          const splitAxis = uint32Array2[node32Index + 7];
          const stopTraversal = callback(depth2, isLeaf, new Float32Array(buffer2, node32Index * 4, 6), splitAxis);
          if (!stopTraversal) {
            _traverse2(left, depth2 + 1);
            _traverse2(right, depth2 + 1);
          }
        }
      }
    }
    /* Core Cast Functions */
    raycast(ray, materialOrSide = FrontSide, near = 0, far = Infinity) {
      const roots = this._roots;
      const geometry = this.geometry;
      const intersects = [];
      const isMaterial = materialOrSide.isMaterial;
      const isArrayMaterial = Array.isArray(materialOrSide);
      const groups = geometry.groups;
      const side = isMaterial ? materialOrSide.side : materialOrSide;
      const raycastFunc = this.indirect ? raycast_indirect : raycast;
      for (let i = 0, l = roots.length; i < l; i++) {
        const materialSide = isArrayMaterial ? materialOrSide[groups[i].materialIndex].side : side;
        const startCount = intersects.length;
        raycastFunc(this, i, materialSide, ray, intersects, near, far);
        if (isArrayMaterial) {
          const materialIndex = groups[i].materialIndex;
          for (let j = startCount, jl = intersects.length; j < jl; j++) {
            intersects[j].face.materialIndex = materialIndex;
          }
        }
      }
      return intersects;
    }
    raycastFirst(ray, materialOrSide = FrontSide, near = 0, far = Infinity) {
      const roots = this._roots;
      const geometry = this.geometry;
      const isMaterial = materialOrSide.isMaterial;
      const isArrayMaterial = Array.isArray(materialOrSide);
      let closestResult = null;
      const groups = geometry.groups;
      const side = isMaterial ? materialOrSide.side : materialOrSide;
      const raycastFirstFunc = this.indirect ? raycastFirst_indirect : raycastFirst;
      for (let i = 0, l = roots.length; i < l; i++) {
        const materialSide = isArrayMaterial ? materialOrSide[groups[i].materialIndex].side : side;
        const result = raycastFirstFunc(this, i, materialSide, ray, near, far);
        if (result != null && (closestResult == null || result.distance < closestResult.distance)) {
          closestResult = result;
          if (isArrayMaterial) {
            result.face.materialIndex = groups[i].materialIndex;
          }
        }
      }
      return closestResult;
    }
    intersectsGeometry(otherGeometry, geomToMesh) {
      let result = false;
      const roots = this._roots;
      const intersectsGeometryFunc = this.indirect ? intersectsGeometry_indirect : intersectsGeometry;
      for (let i = 0, l = roots.length; i < l; i++) {
        result = intersectsGeometryFunc(this, i, otherGeometry, geomToMesh);
        if (result) {
          break;
        }
      }
      return result;
    }
    shapecast(callbacks) {
      const triangle3 = ExtendedTrianglePool.getPrimitive();
      const iterateFunc = this.indirect ? iterateOverTriangles_indirect : iterateOverTriangles;
      let {
        boundsTraverseOrder,
        intersectsBounds,
        intersectsRange,
        intersectsTriangle
      } = callbacks;
      if (intersectsRange && intersectsTriangle) {
        const originalIntersectsRange = intersectsRange;
        intersectsRange = (offset, count, contained, depth2, nodeIndex) => {
          if (!originalIntersectsRange(offset, count, contained, depth2, nodeIndex)) {
            return iterateFunc(offset, count, this, intersectsTriangle, contained, depth2, triangle3);
          }
          return true;
        };
      } else if (!intersectsRange) {
        if (intersectsTriangle) {
          intersectsRange = (offset, count, contained, depth2) => {
            return iterateFunc(offset, count, this, intersectsTriangle, contained, depth2, triangle3);
          };
        } else {
          intersectsRange = (offset, count, contained) => {
            return contained;
          };
        }
      }
      let result = false;
      let byteOffset = 0;
      const roots = this._roots;
      for (let i = 0, l = roots.length; i < l; i++) {
        const root = roots[i];
        result = shapecast(this, i, intersectsBounds, intersectsRange, boundsTraverseOrder, byteOffset);
        if (result) {
          break;
        }
        byteOffset += root.byteLength;
      }
      ExtendedTrianglePool.releasePrimitive(triangle3);
      return result;
    }
    bvhcast(otherBvh, matrixToLocal, callbacks) {
      let {
        intersectsRanges,
        intersectsTriangles
      } = callbacks;
      const triangle1 = ExtendedTrianglePool.getPrimitive();
      const indexAttr1 = this.geometry.index;
      const positionAttr1 = this.geometry.attributes.position;
      const assignTriangle1 = this.indirect ? (i1) => {
        const ti = this.resolveTriangleIndex(i1);
        setTriangle(triangle1, ti * 3, indexAttr1, positionAttr1);
      } : (i1) => {
        setTriangle(triangle1, i1 * 3, indexAttr1, positionAttr1);
      };
      const triangle22 = ExtendedTrianglePool.getPrimitive();
      const indexAttr2 = otherBvh.geometry.index;
      const positionAttr2 = otherBvh.geometry.attributes.position;
      const assignTriangle2 = otherBvh.indirect ? (i2) => {
        const ti2 = otherBvh.resolveTriangleIndex(i2);
        setTriangle(triangle22, ti2 * 3, indexAttr2, positionAttr2);
      } : (i2) => {
        setTriangle(triangle22, i2 * 3, indexAttr2, positionAttr2);
      };
      if (intersectsTriangles) {
        const iterateOverDoubleTriangles = (offset1, count1, offset2, count2, depth1, index1, depth2, index2) => {
          for (let i2 = offset2, l2 = offset2 + count2; i2 < l2; i2++) {
            assignTriangle2(i2);
            triangle22.a.applyMatrix4(matrixToLocal);
            triangle22.b.applyMatrix4(matrixToLocal);
            triangle22.c.applyMatrix4(matrixToLocal);
            triangle22.needsUpdate = true;
            for (let i1 = offset1, l1 = offset1 + count1; i1 < l1; i1++) {
              assignTriangle1(i1);
              triangle1.needsUpdate = true;
              if (intersectsTriangles(triangle1, triangle22, i1, i2, depth1, index1, depth2, index2)) {
                return true;
              }
            }
          }
          return false;
        };
        if (intersectsRanges) {
          const originalIntersectsRanges = intersectsRanges;
          intersectsRanges = function(offset1, count1, offset2, count2, depth1, index1, depth2, index2) {
            if (!originalIntersectsRanges(offset1, count1, offset2, count2, depth1, index1, depth2, index2)) {
              return iterateOverDoubleTriangles(offset1, count1, offset2, count2, depth1, index1, depth2, index2);
            }
            return true;
          };
        } else {
          intersectsRanges = iterateOverDoubleTriangles;
        }
      }
      return bvhcast(this, otherBvh, matrixToLocal, intersectsRanges);
    }
    /* Derived Cast Functions */
    intersectsBox(box, boxToMesh) {
      obb.set(box.min, box.max, boxToMesh);
      obb.needsUpdate = true;
      return this.shapecast(
        {
          intersectsBounds: (box2) => obb.intersectsBox(box2),
          intersectsTriangle: (tri) => obb.intersectsTriangle(tri)
        }
      );
    }
    intersectsSphere(sphere) {
      return this.shapecast(
        {
          intersectsBounds: (box) => sphere.intersectsBox(box),
          intersectsTriangle: (tri) => tri.intersectsSphere(sphere)
        }
      );
    }
    closestPointToGeometry(otherGeometry, geometryToBvh, target1 = {}, target2 = {}, minThreshold = 0, maxThreshold = Infinity) {
      const closestPointToGeometryFunc = this.indirect ? closestPointToGeometry_indirect : closestPointToGeometry;
      return closestPointToGeometryFunc(
        this,
        otherGeometry,
        geometryToBvh,
        target1,
        target2,
        minThreshold,
        maxThreshold
      );
    }
    closestPointToPoint(point, target = {}, minThreshold = 0, maxThreshold = Infinity) {
      return closestPointToPoint(
        this,
        point,
        target,
        minThreshold,
        maxThreshold
      );
    }
    getBoundingBox(target) {
      target.makeEmpty();
      const roots = this._roots;
      roots.forEach((buffer2) => {
        arrayToBox(0, new Float32Array(buffer2), tempBox);
        target.union(tempBox);
      });
      return target;
    }
  }
  onmessage = ({ data }) => {
    let prevTime = performance.now();
    function onProgressCallback(progress) {
      progress = Math.min(progress, 1);
      const currTime = performance.now();
      if (currTime - prevTime >= 10 && progress !== 1) {
        postMessage({
          error: null,
          serialized: null,
          position: null,
          progress
        });
        prevTime = currTime;
      }
    }
    const { index, position, options } = data;
    try {
      const geometry = new BufferGeometry();
      geometry.setAttribute("position", new BufferAttribute(position, 3, false));
      if (index) {
        geometry.setIndex(new BufferAttribute(index, 1, false));
      }
      if (options.includedProgressCallback) {
        options.onProgress = onProgressCallback;
      }
      if (options.groups) {
        const groups = options.groups;
        for (const i in groups) {
          const group = groups[i];
          geometry.addGroup(group.start, group.count, group.materialIndex);
        }
      }
      const bvh = new MeshBVH(geometry, options);
      const serialized = MeshBVH.serialize(bvh, { copyIndexBuffer: false });
      let toTransfer = [position.buffer, ...serialized.roots];
      if (serialized.index) {
        toTransfer.push(serialized.index.buffer);
      }
      toTransfer = toTransfer.filter((v) => typeof SharedArrayBuffer === "undefined" || !(v instanceof SharedArrayBuffer));
      if (bvh._indirectBuffer) {
        toTransfer.push(serialized.indirectBuffer.buffer);
      }
      postMessage({
        error: null,
        serialized,
        position,
        progress: 1
      }, toTransfer);
    } catch (error) {
      postMessage({
        error,
        serialized: null,
        position: null,
        progress: 1
      });
    }
  };
})();
//# sourceMappingURL=generateMeshBVH.worker-gGixVAXV.js.map
