import {
	FNV,
	type FNVAcceptDataType,
	type FNVBitsSize
} from "./base.ts";
export type {
	FNVAcceptDataType,
	FNVBitsSize
} from "./base.ts";
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1.
 */
export class FNV1 extends FNV {
	/**
	 * Initialize.
	 * @param {FNVBitsSize} size Bits size of the FNV-1.
	 * @param {FNVAcceptDataType} [data] Data. Can append later via the method {@linkcode FNV1.update} and {@linkcode FNV1.updateFromStream}.
	 */
	constructor(size: FNVBitsSize, data?: FNVAcceptDataType) {
		super("1", size, data);
	}
}
export default FNV1;
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1-32.
 */
export class FNV1_32 extends FNV1 {
	/**
	 * Initialize.
	 * @param {FNVAcceptDataType} [data] Data. Can append later via the method {@linkcode FNV1_32.update} and {@linkcode FNV1_32.updateFromStream}.
	 */
	constructor(data?: FNVAcceptDataType) {
		super(32, data);
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1-64.
 */
export class FNV1_64 extends FNV1 {
	/**
	 * Initialize.
	 * @param {FNVAcceptDataType} [data] Data. Can append later via the method {@linkcode FNV1_64.update} and {@linkcode FNV1_64.updateFromStream}.
	 */
	constructor(data?: FNVAcceptDataType) {
		super(64, data);
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1-128.
 */
export class FNV1_128 extends FNV1 {
	/**
	 * Initialize.
	 * @param {FNVAcceptDataType} [data] Data. Can append later via the method {@linkcode FNV1_128.update} and {@linkcode FNV1_128.updateFromStream}.
	 */
	constructor(data?: FNVAcceptDataType) {
		super(128, data);
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1-256.
 */
export class FNV1_256 extends FNV1 {
	/**
	 * Initialize.
	 * @param {FNVAcceptDataType} [data] Data. Can append later via the method {@linkcode FNV1_256.update} and {@linkcode FNV1_256.updateFromStream}.
	 */
	constructor(data?: FNVAcceptDataType) {
		super(256, data);
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1-512.
 */
export class FNV1_512 extends FNV1 {
	/**
	 * Initialize.
	 * @param {FNVAcceptDataType} [data] Data. Can append later via the method {@linkcode FNV1_512.update} and {@linkcode FNV1_512.updateFromStream}.
	 */
	constructor(data?: FNVAcceptDataType) {
		super(512, data);
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1-1024.
 */
export class FNV1_1024 extends FNV1 {
	/**
	 * Initialize.
	 * @param {FNVAcceptDataType} [data] Data. Can append later via the method {@linkcode FNV1_1024.update} and {@linkcode FNV1_1024.updateFromStream}.
	 */
	constructor(data?: FNVAcceptDataType) {
		super(1024, data);
	}
}
