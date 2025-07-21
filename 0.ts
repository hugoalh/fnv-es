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
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 0.
 */
export class FNV0 extends FNV {
	/**
	 * Initialize.
	 * @param {FNVBitsSize} size Bits size of the FNV-0.
	 * @param {FNVAcceptDataType} [data] Data. Can append later via the method {@linkcode FNV0.update} and {@linkcode FNV0.updateFromStream}.
	 */
	constructor(size: FNVBitsSize, data?: FNVAcceptDataType) {
		super("0", size, data);
	}
}
export default FNV0;
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 0-32.
 */
export class FNV0_32 extends FNV0 {
	/**
	 * Initialize.
	 * @param {FNVAcceptDataType} [data] Data. Can append later via the method {@linkcode FNV0_32.update} and {@linkcode FNV0_32.updateFromStream}.
	 */
	constructor(data?: FNVAcceptDataType) {
		super(32, data);
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 0-64.
 */
export class FNV0_64 extends FNV0 {
	/**
	 * Initialize.
	 * @param {FNVAcceptDataType} [data] Data. Can append later via the method {@linkcode FNV0_64.update} and {@linkcode FNV0_64.updateFromStream}.
	 */
	constructor(data?: FNVAcceptDataType) {
		super(64, data);
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 0-128.
 */
export class FNV0_128 extends FNV0 {
	/**
	 * Initialize.
	 * @param {FNVAcceptDataType} [data] Data. Can append later via the method {@linkcode FNV0_128.update} and {@linkcode FNV0_128.updateFromStream}.
	 */
	constructor(data?: FNVAcceptDataType) {
		super(128, data);
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 0-256.
 */
export class FNV0_256 extends FNV0 {
	/**
	 * Initialize.
	 * @param {FNVAcceptDataType} [data] Data. Can append later via the method {@linkcode FNV0_256.update} and {@linkcode FNV0_256.updateFromStream}.
	 */
	constructor(data?: FNVAcceptDataType) {
		super(256, data);
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 0-512.
 */
export class FNV0_512 extends FNV0 {
	/**
	 * Initialize.
	 * @param {FNVAcceptDataType} [data] Data. Can append later via the method {@linkcode FNV0_512.update} and {@linkcode FNV0_512.updateFromStream}.
	 */
	constructor(data?: FNVAcceptDataType) {
		super(512, data);
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 0-1024.
 */
export class FNV0_1024 extends FNV0 {
	/**
	 * Initialize.
	 * @param {FNVAcceptDataType} [data] Data. Can append later via the method {@linkcode FNV0_1024.update} and {@linkcode FNV0_1024.updateFromStream}.
	 */
	constructor(data?: FNVAcceptDataType) {
		super(1024, data);
	}
}
