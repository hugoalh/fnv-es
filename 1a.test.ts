import { deepStrictEqual } from "node:assert";
import { FNV1a } from "./1a.ts";
const sample1 = "";
Deno.test("Raw 1 32", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(32, sample1).hash(), 2_166_136_261n);
});
Deno.test("Raw 1 64", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(64, sample1).hash(), 14_695_981_039_346_656_037n);
});
Deno.test("Raw 1 128", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(128, sample1).hash(), 144_066_263_297_769_815_596_495_629_667_062_367_629n);
});
Deno.test("Raw 1 256", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(256, sample1).hash(), 100_029_257_958_052_580_907_070_968_620_625_704_837_092_796_014_241_193_945_225_284_501_741_471_925_557n);
});
Deno.test("Raw 1 512", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(512, sample1).hash(), 9_659_303_129_496_669_498_009_435_400_716_310_466_090_418_745_672_637_896_108_374_329_434_462_657_994_582_932_197_716_438_449_813_051_892_206_539_805_784_495_328_239_340_083_876_191_928_701_583_869_517_785n);
});
Deno.test("Raw 1 1024", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(1024, sample1).hash(), 14_197_795_064_947_621_068_722_070_641_403_218_320_880_622_795_441_933_960_878_474_914_617_582_723_252_296_732_303_717_722_150_864_096_521_202_355_549_365_628_174_669_108_571_814_760_471_015_076_148_029_755_969_804_077_320_157_692_458_563_003_215_304_957_150_157_403_644_460_363_550_505_412_711_285_966_361_610_267_868_082_893_823_963_790_439_336_411_086_884_584_107_735_010_676_915n);
});
Deno.test("Raw 2", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(32, "h").hash(), 3_977_000_791n);
});
Deno.test("Raw 3", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(32, "he").hash(), 1_547_363_254n);
});
Deno.test("Raw 4", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(32, "hel").hash(), 179_613_742n);
});
Deno.test("Raw 5", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(32, "hell").hash(), 477_198_310n);
});
const sample6 = "hello";
Deno.test("Raw 6 32", { permissions: "none" }, () => {
	const instance = new FNV1a(32, sample6);
	deepStrictEqual(instance.hash(), 1_335_831_723n);
	deepStrictEqual(instance.hashHexPadding(), "4F9F2CAB");
});
Deno.test("Raw 6 64", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(64, sample6).hash(), 11_831_194_018_420_276_491n);
});
Deno.test("Raw 6 128", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(128, sample6).hash(), 302_907_886_228_425_533_802_623_465_673_358_913_971n);
});
Deno.test("Raw 6 256", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(256, sample6).hash(), 24_621_739_307_028_566_391_642_840_221_992_687_346_817_534_817_626_804_975_463_790_541_119_213_691_899n);
});
Deno.test("Raw 6 512", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(512, sample6).hash(), 7_892_563_648_106_928_388_641_744_747_901_962_995_816_211_260_805_030_760_135_011_933_811_709_338_702_442_123_338_016_979_459_597_105_834_714_497_783_048_560_046_644_182_143_206_509_375_819_400_532_849_111n);
});
Deno.test("Raw 6 1024", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(1024, sample6).hash(), 162_599_568_807_828_018_278_740_454_090_851_618_076_261_791_243_547_429_330_845_926_617_440_124_701_815_376_483_262_958_546_407_611_470_083_720_486_420_160_817_850_263_303_428_987_405_974_668_389_046_941_240_548_898_833_919_126_704_680_456_253_506_816_487_407_186_600_714_845_619_389_901_326_326_498_663_678_676_823_405_702_541_932_736_634_507_371_229_190_999_806_123_793_839_783_784_715_844_873_833n);
});
Deno.test("Raw 7", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(32, "hello ").hash(), 3_801_292_497n);
});
Deno.test("Raw 8", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(32, "hello w").hash(), 1_402_552_146n);
});
Deno.test("Raw 9", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(32, "hello wo").hash(), 3_611_200_775n);
});
Deno.test("Raw 10", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(32, "hello wor").hash(), 1_282_977_583n);
});
Deno.test("Raw 11", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(32, "hello worl").hash(), 2_767_971_961n);
});
const sample12 = "hello world";
Deno.test("Raw 12 32", { permissions: "none" }, () => {
	const instance = new FNV1a(32, sample12);
	deepStrictEqual(instance.hash(), 3_582_672_807n);
	deepStrictEqual(instance.hashHexPadding(), "D58B3FA7");
});
Deno.test("Raw 12 64", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(64, sample12).hashHexPadding(), "779A65E7023CD2E7");
});
Deno.test("Raw 12 128", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(128, sample12).hashHexPadding(), "6C155799FDC8EEC4B91523808E7726B7");
});
Deno.test("Raw 12 256", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(256, sample12).hashHexPadding(), "ECC3CF2E0EDFCCD3D87F21EC0883AAD4DB43EEAD66CE09EB4A97E04E1A184527");
});
Deno.test("Raw 12 512", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(512, sample12).hashHexPadding(), "2B9C19EC56CCF98DA0F227CC82BFAACBD8350928BD2CEACAE7BC8AA13E747F5C43CA4E2E98FC25E94E4E805675545EE95A3B968C0ACFAECB90AEA2FDBCD4DE0F");
});
Deno.test("Raw 12 1024", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(1024, sample12).hashHexPadding(), "3FA9D253E52AE80105B382C80A01E27A53D7BC1D201EFB47B38F4D6E465489829D7D272127D20E1076129C00000000000000000000000000000000000000000000000000000000000000000000000000000253EB20F42A7228AF9022D9F35ECE5BB71E40FCD8717B80D164AB921709996E5C43AAE801418E878CDDF968D4616F");
});
Deno.test("Raw 13", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(32, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.").hash(), 2_964_896_417n);
});
Deno.test("Raw 14", { permissions: "none" }, () => {
	const instance = new FNV1a(32, "🦄🌈");
	deepStrictEqual(instance.hash(), 2_868_248_295n);
	deepStrictEqual(instance.hashHexPadding(), "AAF5FEE7");
});
Deno.test("Raw 15", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(32, "\u{0000}\u{0080}\u{0100}\u{0180}\u{0250}\u{02B0}\u{0300}\u{0370}\u{0400}\u{0500}\u{0530}\u{0590}\u{0600}\u{0700}\u{0780}\u{0900}\u{0980}\u{0A00}\u{0A80}\u{0B00}\u{0B80}\u{0C00}\u{0C80}\u{0D00}\u{0D80}\u{0E00}\u{0E80}\u{0F00}\u{1000}\u{10A0}\u{1100}\u{1200}\u{13A0}\u{1400}\u{1680}\u{16A0}\u{1700}\u{1720}\u{1740}\u{1760}\u{1780}\u{1800}\u{1900}\u{1950}\u{19E0}\u{1D00}\u{1E00}\u{1F00}\u{2000}\u{2070}\u{20A0}\u{20D0}\u{2100}\u{2150}\u{2190}\u{2200}\u{2300}\u{2400}\u{2440}\u{2460}\u{2500}\u{2580}\u{25A0}\u{2600}\u{2700}\u{27C0}\u{27F0}\u{2800}\u{2900}\u{2980}\u{2A00}\u{2B00}\u{2E80}\u{2F00}\u{2FF0}\u{3000}\u{3040}\u{30A0}\u{3100}\u{3130}\u{3190}\u{31A0}\u{31F0}\u{3200}\u{3300}\u{3400}\u{4DC0}\u{4E00}\u{A000}\u{A490}\u{AC00}\u{D800}\u{DC00}\u{E000}\u{F900}\u{FB00}\u{FB50}\u{FE00}\u{FE20}\u{FE30}\u{FE50}\u{FE70}\u{FF00}\u{FFF0}\u{10000}\u{10080}\u{10100}\u{10300}\u{10330}\u{10380}\u{10400}\u{10450}\u{10480}\u{10800}\u{1D000}\u{1D100}\u{1D300}\u{1D400}\u{20000}\u{2F800}\u{E0000}\u{E0100}").hashHexPadding(), "983FDF05");
});
Deno.test("Stream 1 32", {
	permissions: {
		read: true
	}
}, async () => {
	await using file = await Deno.open("./README.md");
	const instance = await new FNV1a(32).updateFromStream(file.readable);
	console.log(instance.hashHexPadding());
});
Deno.test("Stream 1 64", {
	permissions: {
		read: true
	}
}, async () => {
	await using file = await Deno.open("./README.md");
	const instance = await new FNV1a(64).updateFromStream(file.readable);
	console.log(instance.hashHexPadding());
});
Deno.test("Stream 1 128", {
	permissions: {
		read: true
	}
}, async () => {
	await using file = await Deno.open("./README.md");
	const instance = await new FNV1a(128).updateFromStream(file.readable);
	console.log(instance.hashHexPadding());
});
Deno.test("Stream 1 256", {
	permissions: {
		read: true
	}
}, async () => {
	await using file = await Deno.open("./README.md");
	const instance = await new FNV1a(256).updateFromStream(file.readable);
	console.log(instance.hashHexPadding());
});
Deno.test("Stream 1 512", {
	permissions: {
		read: true
	}
}, async () => {
	await using file = await Deno.open("./README.md");
	const instance = await new FNV1a(512).updateFromStream(file.readable);
	console.log(instance.hashHexPadding());
});
Deno.test("Stream 1 1024", {
	permissions: {
		read: true
	}
}, async () => {
	await using file = await Deno.open("./README.md");
	const instance = await new FNV1a(1024).updateFromStream(file.readable);
	console.log(instance.hashHexPadding());
});
