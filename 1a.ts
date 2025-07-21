import {
	FNV,
	type FNVAcceptDataType,
	type FNVBitsSize
} from "./base.ts";
export type {
	FNVAcceptDataType,
	FNVBitsSize
};
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1a.
 */
export class FNV1a extends FNV {
	/**
	 * Initialize.
	 * @param {FNVBitsSize} size Bits size of the FNV-1a.
	 * @param {FNVAcceptDataType} [data] Data. Can append later via the method {@linkcode FNV1a.update} and {@linkcode FNV1a.updateFromStream}.
	 */
	constructor(size: FNVBitsSize, data?: FNVAcceptDataType) {
		super("1a", size, data);
	}
}
export default FNV1a;
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1a-32.
 */
export class FNV1a_32 extends FNV1a {
	/**
	 * Initialize.
	 * @param {FNVAcceptDataType} [data] Data. Can append later via the method {@linkcode FNV1a_32.update} and {@linkcode FNV1a_32.updateFromStream}.
	 */
	constructor(data?: FNVAcceptDataType) {
		super(32, data);
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1a-64.
 */
export class FNV1a_64 extends FNV1a {
	/**
	 * Initialize.
	 * @param {FNVAcceptDataType} [data] Data. Can append later via the method {@linkcode FNV1a_64.update} and {@linkcode FNV1a_64.updateFromStream}.
	 */
	constructor(data?: FNVAcceptDataType) {
		super(64, data);
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1a-128.
 */
export class FNV1a_128 extends FNV1a {
	/**
	 * Initialize.
	 * @param {FNVAcceptDataType} [data] Data. Can append later via the method {@linkcode FNV1a_128.update} and {@linkcode FNV1a_128.updateFromStream}.
	 */
	constructor(data?: FNVAcceptDataType) {
		super(128, data);
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1a-256.
 */
export class FNV1a_256 extends FNV1a {
	/**
	 * Initialize.
	 * @param {FNVAcceptDataType} [data] Data. Can append later via the method {@linkcode FNV1a_256.update} and {@linkcode FNV1a_256.updateFromStream}.
	 */
	constructor(data?: FNVAcceptDataType) {
		super(256, data);
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1a-512.
 */
export class FNV1a_512 extends FNV1a {
	/**
	 * Initialize.
	 * @param {FNVAcceptDataType} [data] Data. Can append later via the method {@linkcode FNV1a_512.update} and {@linkcode FNV1a_512.updateFromStream}.
	 */
	constructor(data?: FNVAcceptDataType) {
		super(512, data);
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1a-1024.
 */
export class FNV1a_1024 extends FNV1a {
	/**
	 * Initialize.
	 * @param {FNVAcceptDataType} [data] Data. Can append later via the method {@linkcode FNV1a_1024.update} and {@linkcode FNV1a_1024.updateFromStream}.
	 */
	constructor(data?: FNVAcceptDataType) {
		super(1024, data);
	}
}
