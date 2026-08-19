import {
	FNV,
	type FNVOptions
} from "./base.ts";
export type {
	FNVAcceptDataType,
	FNVOptions
} from "./base.ts";
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 0.
 */
export class FNV0 extends FNV {
	/**
	 * Initialize.
	 * @param {Omit<FNVOptions, "variant">} [options={}] options.
	 */
	constructor(options: Omit<FNVOptions, "variant"> = {}) {
		super({
			...options,
			variant: "0"
		});
	}
}
export default FNV0;
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 0-32.
 */
export class FNV0_32 extends FNV0 {
	/**
	 * Initialize.
	 */
	constructor() {
		super({ size: 32 });
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 0-64.
 */
export class FNV0_64 extends FNV0 {
	/**
	 * Initialize.
	 */
	constructor() {
		super({ size: 64 });
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 0-128.
 */
export class FNV0_128 extends FNV0 {
	/**
	 * Initialize.
	 */
	constructor() {
		super({ size: 128 });
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 0-256.
 */
export class FNV0_256 extends FNV0 {
	/**
	 * Initialize.
	 */
	constructor() {
		super({ size: 256 });
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 0-512.
 */
export class FNV0_512 extends FNV0 {
	/**
	 * Initialize.
	 */
	constructor() {
		super({ size: 512 });
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 0-1024.
 */
export class FNV0_1024 extends FNV0 {
	/**
	 * Initialize.
	 */
	constructor() {
		super({ size: 1024 });
	}
}
