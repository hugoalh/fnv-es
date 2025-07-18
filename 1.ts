import {
	resolveFNVBitsParameter,
	type FNVAcceptDataType,
	type FNVBitsParameter,
	type FNVBitsSize
} from "./_common.ts";
export type {
	FNVAcceptDataType,
	FNVBitsSize
};
export class FNV1 {
	get [Symbol.toStringTag](): string {
		return `FNV1-${this.#size}`;
	}
	#freezed: boolean = false;
	#hash: bigint;
	#hashBase16: string | null = null;
	#hashBase32Hex: string | null = null;
	#hashBase36: string | null = null;
	#hashUint8Array: Uint8Array | null = null;
	#prime: bigint;
	#size: FNVBitsSize;
	/**
	 * Initialize.
	 * @param {FNVBitsSize} size Bits size of the non-cryptographic hash.
	 * @param {FNVAcceptDataType} [data] Data. Can append later via the method {@linkcode FNV1.update} and {@linkcode FNV1.updateFromStream}.
	 */
	constructor(size: FNVBitsSize, data?: FNVAcceptDataType) {
		const {
			offset,
			prime
		}: Readonly<FNVBitsParameter> = resolveFNVBitsParameter(size);
		this.#hash = offset;
		this.#prime = prime;
		this.#size = size;
		if (typeof data !== "undefined") {
			this.update(data);
		}
	}
	#clearStorage(): void {
		if (this.#freezed) {
			throw new Error(`Instance is freezed!`);
		}
		this.#hashBase16 = null;
		this.#hashBase32Hex = null;
		this.#hashBase36 = null;
		this.#hashUint8Array = null;
	}
	/**
	 * Whether the instance is freezed.
	 * @returns {boolean}
	 */
	get freezed(): boolean {
		return this.#freezed;
	}
	/**
	 * Bits size of the hash.
	 * @returns {FNVBitsSize}
	 */
	get size(): FNVBitsSize {
		return this.#size;
	}
	/**
	 * Freeze the instance to prevent any further update.
	 * @returns {this}
	 */
	freeze(): this {
		this.#freezed = true;
		return this;
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
		this.#hashBase16 ??= this.hashBigInt().toString(16).toUpperCase();
		return this.#hashBase16;
	}
	/**
	 * Get the non-cryptographic hash of the data, in Base32Hex ({@link https://datatracker.ietf.org/doc/html/rfc4648#section-7 RFC 4648 §7}).
	 * @returns {string}
	 */
	hashBase32Hex(): string {
		this.#hashBase32Hex ??= this.hashBigInt().toString(32).toUpperCase();
		return this.#hashBase32Hex;
	}
	/**
	 * Get the non-cryptographic hash of the data, in Base36.
	 * @returns {string}
	 */
	hashBase36(): string {
		this.#hashBase36 ??= this.hashBigInt().toString(36).toUpperCase();
		return this.#hashBase36;
	}
	/**
	 * Get the non-cryptographic hash of the data, in big integer.
	 * @returns {bigint}
	 */
	hashBigInt(): bigint {
		return this.hash();
	}
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
	 * Get the non-cryptographic hash of the data, in Uint8Array.
	 * @returns {Uint8Array}
	 */
	hashUint8Array(): Uint8Array {
		if (this.#hashUint8Array === null) {
			const hex: string = this.hashHex();
			const hexFmt: string = (hex.length % 2 === 0) ? hex : `0${hex}`;
			const bytes: string[] = [];
			for (let index: number = 0; index < hexFmt.length; index += 2) {
				bytes.push(hexFmt.slice(index, index + 2));
			}
			this.#hashUint8Array = Uint8Array.from(bytes.map((byte: string): number => {
				return Number.parseInt(byte, 16);
			}));
		}
		return Uint8Array.from(this.#hashUint8Array);
	}
	/**
	 * Append data.
	 * @param {FNVAcceptDataType} data Data.
	 * @returns {this}
	 */
	update(data: FNVAcceptDataType): this {
		this.#clearStorage();
		const dataFmt: Uint8Array = (data instanceof Uint8Array) ? data : (
			(typeof data === "string")
				? new TextEncoder().encode(data)
				: new Uint8Array(data)
		);
		for (const byte of dataFmt) {
			this.#hash = BigInt.asUintN(this.#size, (this.#hash * this.#prime) ^ BigInt(byte));
		}
		return this;
	}
	/**
	 * Append data from the readable stream.
	 * @param {ReadableStream<FNVAcceptDataType>} stream Readable stream.
	 * @returns {Promise<this>}
	 */
	async updateFromStream(stream: ReadableStream<FNVAcceptDataType>): Promise<this> {
		for await (const chunk of stream) {
			this.update(chunk);
		}
		return this;
	}
}
export default FNV1;
