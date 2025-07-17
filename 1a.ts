import { Buffer } from "node:buffer";
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
export class FNV1a {
	get [Symbol.toStringTag](): string {
		return `FNV1a-${this.#size}`;
	}
	#freezed: boolean = false;
	#hash: bigint;
	#hashBase16: string | null = null;
	#hashBase32Hex: string | null = null;
	#hashBase36: string | null = null;
	#hashBase64: string | null = null;
	#hashBase64URL: string | null = null;
	#prime: bigint;
	#size: FNVBitsSize;
	/**
	 * Initialize.
	 * @param {FNVBitsSize} size Bits size of the non-cryptographic hash.
	 * @param {FNVAcceptDataType} [data] Data. Can append later via the method {@linkcode FNV1a.update}.
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
		this.#hashBase64 = null;
		this.#hashBase64URL = null;
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
	 * Get the non-cryptographic hash of the data, in Base64.
	 * @returns {string}
	 */
	hashBase64(): string {
		this.#hashBase64 ??= this.hashBuffer().toString("base64");
		return this.#hashBase64;
	}
	/**
	 * Get the non-cryptographic hash of the data, in Base64URL.
	 * @returns {string}
	 */
	hashBase64URL(): string {
		this.#hashBase64URL ??= this.hashBuffer().toString("base64url");
		return this.#hashBase64URL;
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
	 * @deprecated Use method {@linkcode FNV1a.hashBigInt} instead.
	 */
	hashBigInteger: () => bigint = this.hashBigInt;
	/**
	 * Get the non-cryptographic hash of the data, in Buffer.
	 * @returns {Buffer}
	 */
	hashBuffer(): Buffer {
		return Buffer.from(this.hashBase16(), "hex");
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
			this.#hash = BigInt.asUintN(this.#size, (this.#hash ^ BigInt(byte)) * this.#prime);
		}
		return this;
	}
	/**
	 * Initialize from the readable stream.
	 * @param {FNVBitsSize} size Bits size of the non-cryptographic hash.
	 * @param {ReadableStream<FNVAcceptDataType>} stream Readable stream.
	 * @returns {Promise<FNV1a>}
	 */
	static async fromStream(size: FNVBitsSize, stream: ReadableStream<FNVAcceptDataType>): Promise<FNV1a> {
		const instance: FNV1a = new this(size);
		for await (const chunk of stream) {
			instance.update(chunk);
		}
		return instance;
	}
}
export default FNV1a;
