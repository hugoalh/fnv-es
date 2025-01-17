import {
	resolveFNVParameter,
	type FNVAcceptDataType,
	type FNVBitsSize
} from "./_common.ts";
export type {
	FNVAcceptDataType,
	FNVBitsSize
};
export class FNV0 {
	get [Symbol.toStringTag](): string {
		return "FNV0";
	}
	#freezed: boolean = false;
	#hash: bigint = 0n;
	#prime: bigint;
	#size: FNVBitsSize;
	/**
	 * Initialize.
	 * @param {FNVBitsSize} size Bits size of the non-cryptographic hash.
	 * @param {FNVAcceptDataType} [data] Data. Can append later via the method {@linkcode FNV0.update}.
	 */
	constructor(size: FNVBitsSize, data?: FNVAcceptDataType) {
		const {
			prime,
			size: sizeFmt
		} = resolveFNVParameter(size);
		this.#prime = prime;
		this.#size = sizeFmt;
		if (typeof data !== "undefined") {
			this.update(data);
		}
	}
	/**
	 * Freeze the instance to prevent any update.
	 * @returns {this}
	 */
	freeze(): this {
		this.#freezed = true;
		return this;
	}
	/**
	 * Whether the instance is freezed.
	 * @returns {boolean}
	 */
	get freezed(): boolean {
		return this.#freezed;
	}
	/**
	 * Get the non-cryptographic hash of the data, in original format.
	 * @returns {bigint}
	 */
	hash(): bigint {
		return this.#hash;
	}
	/**
	 * Get the non-cryptographic hash of the data, in Base16.
	 * @returns {string}
	 */
	hashBase16(): string {
		return this.hashBigInt().toString(16).toUpperCase();
	}
	/**
	 * Get the non-cryptographic hash of the data, in Base32Hex ({@link https://datatracker.ietf.org/doc/html/rfc4648#section-7 RFC 4648 §7}).
	 * @returns {string}
	 */
	hashBase32Hex(): string {
		return this.hashBigInt().toString(32).toUpperCase();
	}
	/**
	 * Get the non-cryptographic hash of the data, in Base36.
	 * @returns {string}
	 */
	hashBase36(): string {
		return this.hashBigInt().toString(36).toUpperCase();
	}
	/**
	 * Get the non-cryptographic hash of the data, in big integer.
	 * @returns {bigint}
	 */
	hashBigInt(): bigint {
		return this.hash();
	}
	/**
	 * Get the non-cryptographic hash of the data, in big integer.
	 * @returns {bigint}
	 */
	hashBigInteger: () => bigint = this.hashBigInt;
	/**
	 * Get the non-cryptographic hash of the data, in hex/hexadecimal without padding.
	 * @returns {string}
	 */
	hashHex(): string {
		return this.hashBase16();
	}
	/**
	 * Get the non-cryptographic hash of the data, in hex/hexadecimal with padding.
	 * @returns {string}
	 */
	hashHexPadding(): string {
		return this.hashHex().padStart(this.#size / 4, "0");
	}
	/**
	 * Append data.
	 * @param {FNVAcceptDataType} data Data.
	 * @returns {this}
	 */
	update(data: FNVAcceptDataType): this {
		if (this.#freezed) {
			throw new Error(`Instance is freezed!`);
		}
		for (const byte of (
			(data instanceof Uint8Array) ? data
				: ((typeof data === "string") ? new TextEncoder().encode(data)
					: new Uint8Array(data)
				)
		)) {
			this.#hash = BigInt.asUintN(this.#size, (this.#hash * this.#prime) ^ BigInt(byte));
		}
		return this;
	}
	/**
	 * Initialize from the readable stream, asynchronously.
	 * @param {FNVBitsSize} size Bits size of the non-cryptographic hash.
	 * @param {ReadableStream<FNVAcceptDataType>} stream Readable stream.
	 * @returns {Promise<FNV0>}
	 */
	static async fromStream(size: FNVBitsSize, stream: ReadableStream<FNVAcceptDataType>): Promise<FNV0> {
		const instance: FNV0 = new this(size);
		for await (const chunk of stream) {
			instance.update(chunk);
		}
		return instance;
	}
}
export default FNV0;
