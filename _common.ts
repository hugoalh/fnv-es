export type FNVBitsSize = 32 | 64 | 128 | 256 | 512 | 1024;
const fnvBitsSizes: readonly FNVBitsSize[] = [32, 64, 128, 256, 512, 1024];
export interface FNVParameter {
	offset: bigint;
	prime: bigint;
}
const fnvParameters: Readonly<Record<FNVBitsSize, Readonly<FNVParameter>>> = {
	32: {
		offset: 2_166_136_261n,
		prime: 16_777_619n
	},
	64: {
		offset: 14_695_981_039_346_656_037n,
		prime: 1_099_511_628_211n
	},
	128: {
		offset: 144_066_263_297_769_815_596_495_629_667_062_367_629n,
		prime: 309_485_009_821_345_068_724_781_371n
	},
	256: {
		offset: 100_029_257_958_052_580_907_070_968_620_625_704_837_092_796_014_241_193_945_225_284_501_741_471_925_557n,
		prime: 374_144_419_156_711_147_060_143_317_175_368_453_031_918_731_002_211n
	},
	512: {
		offset: 9_659_303_129_496_669_498_009_435_400_716_310_466_090_418_745_672_637_896_108_374_329_434_462_657_994_582_932_197_716_438_449_813_051_892_206_539_805_784_495_328_239_340_083_876_191_928_701_583_869_517_785n,
		prime: 35_835_915_874_844_867_368_919_076_489_095_108_449_946_327_955_754_392_558_399_825_615_420_669_938_882_575_126_094_039_892_345_713_852_759n
	},
	1024: {
		offset: 14_197_795_064_947_621_068_722_070_641_403_218_320_880_622_795_441_933_960_878_474_914_617_582_723_252_296_732_303_717_722_150_864_096_521_202_355_549_365_628_174_669_108_571_814_760_471_015_076_148_029_755_969_804_077_320_157_692_458_563_003_215_304_957_150_157_403_644_460_363_550_505_412_711_285_966_361_610_267_868_082_893_823_963_790_439_336_411_086_884_584_107_735_010_676_915n,
		prime: 5_016_456_510_113_118_655_434_598_811_035_278_955_030_765_345_404_790_744_303_017_523_831_112_055_108_147_451_509_157_692_220_295_382_716_162_651_878_526_895_249_385_292_291_816_524_375_083_746_691_371_804_094_271_873_160_484_737_966_720_260_389_217_684_476_157_468_082_573n
	}
};
export function resolveFNVParameter(size: FNVBitsSize): Readonly<FNVParameter> {
	if (!fnvBitsSizes.includes(size)) {
		throw new RangeError(`\`${size}\` is not a valid FNV hash bits size! Only accept these values: ${fnvBitsSizes.join(", ")}`);
	}
	return fnvParameters[size];
}
export type FNVAcceptDataType = string | Uint8Array | Uint16Array | Uint32Array;
