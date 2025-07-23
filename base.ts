export type FNVVariant =
	| "0"
	| "1"
	| "1a";
const variants: readonly FNVVariant[] = [
	"0",
	"1",
	"1a"
];
export type FNVBitsSize =
	| 32
	| 64
	| 128
	| 256
	| 512
	| 1024;
interface FNVBitsParameters {
	offset: bigint;
	prime: bigint;
}
const bitsParameters: Map<FNVBitsSize, Readonly<FNVBitsParameters>> = new Map<FNVBitsSize, Readonly<FNVBitsParameters>>([
	[32, {
		offset: 2_166_136_261n,
		prime: 16_777_619n
	}],
	[64, {
		offset: 14_695_981_039_346_656_037n,
		prime: 1_099_511_628_211n
	}],
	[128, {
		offset: 144_066_263_297_769_815_596_495_629_667_062_367_629n,
		prime: 309_485_009_821_345_068_724_781_371n
	}],
	[256, {
		offset: 100_029_257_958_052_580_907_070_968_620_625_704_837_092_796_014_241_193_945_225_284_501_741_471_925_557n,
		prime: 374_144_419_156_711_147_060_143_317_175_368_453_031_918_731_002_211n
	}],
	[512, {
		offset: 9_659_303_129_496_669_498_009_435_400_716_310_466_090_418_745_672_637_896_108_374_329_434_462_657_994_582_932_197_716_438_449_813_051_892_206_539_805_784_495_328_239_340_083_876_191_928_701_583_869_517_785n,
		prime: 35_835_915_874_844_867_368_919_076_489_095_108_449_946_327_955_754_392_558_399_825_615_420_669_938_882_575_126_094_039_892_345_713_852_759n
	}],
	[1024, {
		offset: 14_197_795_064_947_621_068_722_070_641_403_218_320_880_622_795_441_933_960_878_474_914_617_582_723_252_296_732_303_717_722_150_864_096_521_202_355_549_365_628_174_669_108_571_814_760_471_015_076_148_029_755_969_804_077_320_157_692_458_563_003_215_304_957_150_157_403_644_460_363_550_505_412_711_285_966_361_610_267_868_082_893_823_963_790_439_336_411_086_884_584_107_735_010_676_915n,
		prime: 5_016_456_510_113_118_655_434_598_811_035_278_955_030_765_345_404_790_744_303_017_523_831_112_055_108_147_451_509_157_692_220_295_382_716_162_651_878_526_895_249_385_292_291_816_524_375_083_746_691_371_804_094_271_873_160_484_737_966_720_260_389_217_684_476_157_468_082_573n
	}]
]);
export type FNVAcceptDataType =
	| string
	| Uint8Array
	| Uint16Array
	| Uint32Array;
/**
 * Get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV).
 */
export class FNV {
	get [Symbol.toStringTag](): string {
		return `FNV-${this.#variant}-${this.#size}`;
	}
	#freezed: boolean = false;
	#hash: bigint = 0n;
	#hashBase16: string | null = null;
	#hashUint8Array: Uint8Array | null = null;
	#prime: bigint;
	#size: FNVBitsSize;
	#variant: FNVVariant;
	/**
	 * Initialize.
	 * @param {FNVVariant} variant Variant of the FNV.
	 * @param {FNVBitsSize} size Bits size of the FNV.
	 * @param {FNVAcceptDataType} [data] Data. Can append later via the method {@linkcode FNV.update} and {@linkcode FNV.updateFromStream}.
	 */
	constructor(variant: FNVVariant, size: FNVBitsSize, data?: FNVAcceptDataType) {
		if (!variants.includes(variant)) {
			throw new RangeError(`\`${variant}\` is not a valid FNV variant! Only accept these values: ${variants.join(", ")}`);
		}
		this.#variant = variant;
		const parameter: Readonly<FNVBitsParameters> | undefined = bitsParameters.get(size);
		if (typeof parameter === "undefined") {
			throw new RangeError(`\`${size}\` is not a valid FNV hash bits size! Only accept these values: ${Array.from(bitsParameters.keys()).join(", ")}`);
		}
		const {
			offset,
			prime
		}: Readonly<FNVBitsParameters> = parameter;
		if (this.#variant !== "0") {
			this.#hash = offset;
		}
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
	 * Bits size of the FNV.
	 * @returns {FNVBitsSize}
	 */
	get size(): FNVBitsSize {
		return this.#size;
	}
	/**
	 * Variant of the FNV.
	 * @returns {FNVVariant}
	 */
	get variant(): FNVVariant {
		return this.#variant;
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
	 * Get the non-cryptographic hash of the data, in big integer.
	 * @returns {bigint}
	 */
	hashBigInt(): bigint {
		return this.hash();
	}
	/**
	 * Get the non-cryptographic hash of the data, in hexadecimal with padding.
	 * @returns {string}
	 */
	hashHex(): string {
		return this.hashBase16().padStart(this.#size / 4, "0");
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
		const dataFmt: Uint8Array = (typeof data === "string") ? new TextEncoder().encode(data) : Uint8Array.from(data);
		for (const byte of dataFmt) {
			this.#hash = (this.#variant === "1a")
				? BigInt.asUintN(this.#size, (this.#hash ^ BigInt(byte)) * this.#prime)
				: BigInt.asUintN(this.#size, (this.#hash * this.#prime) ^ BigInt(byte));
		}
		return this;
	}
	/**
	 * Append data from the readable stream.
	 * @param {ReadableStream<FNVAcceptDataType>} stream Data from the readable stream.
	 * @returns {Promise<this>}
	 */
	async updateFromStream(stream: ReadableStream<FNVAcceptDataType>): Promise<this> {
		for await (const chunk of stream) {
			this.update(chunk);
		}
		return this;
	}
}
