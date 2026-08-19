import {
	FNV,
	type FNVOptions
} from "./base.ts";
export type {
	FNVAcceptDataType,
	FNVOptions
} from "./base.ts";
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1.
 */
export class FNV1 extends FNV {
	/**
	 * Initialize.
	 * @param {Omit<FNVOptions, "variant">} [options={}] options.
	 */
	constructor(options: Omit<FNVOptions, "variant"> = {}) {
		super({
			...options,
			variant: "1"
		});
	}
}
export default FNV1;
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1-32.
 */
export class FNV1_32 extends FNV1 {
	/**
	 * Initialize.
	 */
	constructor() {
		super({ size: 32 });
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1-64.
 */
export class FNV1_64 extends FNV1 {
	/**
	 * Initialize.
	 */
	constructor() {
		super({ size: 64 });
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1-128.
 */
export class FNV1_128 extends FNV1 {
	/**
	 * Initialize.
	 */
	constructor() {
		super({ size: 128 });
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1-256.
 */
export class FNV1_256 extends FNV1 {
	/**
	 * Initialize.
	 */
	constructor() {
		super({ size: 256 });
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1-512.
 */
export class FNV1_512 extends FNV1 {
	/**
	 * Initialize.
	 */
	constructor() {
		super({ size: 512 });
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1-1024.
 */
export class FNV1_1024 extends FNV1 {
	/**
	 * Initialize.
	 */
	constructor() {
		super({ size: 1024 });
	}
}
