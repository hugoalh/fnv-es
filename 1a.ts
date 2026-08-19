import {
	FNV,
	type FNVOptions
} from "./base.ts";
export type {
	FNVAcceptDataType,
	FNVOptions
} from "./base.ts";
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1a.
 */
export class FNV1a extends FNV {
	/**
	 * Initialize.
	 * @param {Omit<FNVOptions, "variant">} [options={}] options.
	 */
	constructor(options: Omit<FNVOptions, "variant"> = {}) {
		super({
			...options,
			variant: "1a"
		});
	}
}
export default FNV1a;
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1a-32.
 */
export class FNV1a_32 extends FNV1a {
	/**
	 * Initialize.
	 */
	constructor() {
		super({ size: 32 });
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1a-64.
 */
export class FNV1a_64 extends FNV1a {
	/**
	 * Initialize.
	 */
	constructor() {
		super({ size: 64 });
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1a-128.
 */
export class FNV1a_128 extends FNV1a {
	/**
	 * Initialize.
	 */
	constructor() {
		super({ size: 128 });
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1a-256.
 */
export class FNV1a_256 extends FNV1a {
	/**
	 * Initialize.
	 */
	constructor() {
		super({ size: 256 });
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1a-512.
 */
export class FNV1a_512 extends FNV1a {
	/**
	 * Initialize.
	 */
	constructor() {
		super({ size: 512 });
	}
}
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV) 1a-1024.
 */
export class FNV1a_1024 extends FNV1a {
	/**
	 * Initialize.
	 */
	constructor() {
		super({ size: 1024 });
	}
}
