import { deepStrictEqual } from "node:assert";
import {
	FNV1a,
	type FNVAcceptDataType,
	type FNVBitsSize
} from "./1a.ts";
async function testerDirect(t: Deno.TestContext, data: FNVAcceptDataType, expects: readonly (readonly [size: FNVBitsSize, hex: string])[]): Promise<void> {
	for (const [size, hex] of expects) {
		await t.step(`${size} Bits`, () => {
			deepStrictEqual(new FNV1a(size, data).hashHex(), hex);
		});
	}
}
Deno.test("Direct 1", { permissions: "none" }, async (t) => {
	await testerDirect(t, "", [
		[32, "811C9DC5"],
		[64, "CBF29CE484222325"],
		[128, "6C62272E07BB014262B821756295C58D"],
		[256, "DD268DBCAAC550362D98C384C4E576CCC8B1536847B6BBB31023B4C8CAEE0535"],
		[512, "B86DB0B1171F4416DCA1E50F309990ACAC87D059C90000000000000000000D21E948F68A34C192F62EA79BC942DBE7CE182036415F56E34BAC982AAC4AFE9FD9"],
		[1024, "0000000000000000005F7A76758ECC4D32E56D5A591028B74B29FC4223FDADA16C3BF34EDA3674DA9A21D9000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004C6D7EB6E73802734510A555F256CC005AE556BDE8CC9C6A93B21AFF4B16C71EE90B3"]
	]);
});
Deno.test("Direct 2", { permissions: "none" }, () => {
	const instance = new FNV1a(32);
	deepStrictEqual(instance.update("h").hashHex(), "ED0C3757");
	deepStrictEqual(instance.update("e").hashHex(), "5C3AE3B6");
	deepStrictEqual(instance.update("l").hashHex(), "0AB4B02E");
	deepStrictEqual(instance.update("l").hashHex(), "1C7177E6");
	deepStrictEqual(instance.update("o").hashHex(), "4F9F2CAB");
	deepStrictEqual(instance.update(" ").hashHex(), "E2931ED1");
	deepStrictEqual(instance.update("w").hashHex(), "53993F52");
	deepStrictEqual(instance.update("o").hashHex(), "D73E8D07");
	deepStrictEqual(instance.update("r").hashHex(), "4C78AF2F");
	deepStrictEqual(instance.update("l").hashHex(), "A4FBE679");
	deepStrictEqual(instance.update("d").hashHex(), "D58B3FA7");
});
Deno.test("Direct 3", { permissions: "none" }, async (t) => {
	await testerDirect(t, "hello", [
		[32, "4F9F2CAB"],
		[64, "A430D84680AABD0B"],
		[128, "E3E1EFD54283D94F7081314B599D31B3"],
		[256, "366F691CC853A0E0020CDD8BB803C3D04E05F6CC9133D72745659A3B744E63FB"],
		[512, "96B20C29347DFB41B5E3EBF2C34D2678EAC99926DF0000000038B4561715D5E5A4BD279918ADECBCD2F439C85E285847A4345F1BFDE8F24A625FEE4CC209F1D7"],
		[1024, "00000003E27F563B2CA82D6F6B22A35117DDFB386BAB86B4E52A63E0AA457BA1B5D6C2505292B0BC04D6DF0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002AD7E6EDEA236C5ABDFF1BCE07F9C3B45C98F798E3B69B8E2F946B142B391BBFDC39460EA1AC6E69"]
	]);
});
Deno.test("Direct 4", { permissions: "none" }, async (t) => {
	await testerDirect(t, "hello world", [
		[32, "D58B3FA7"],
		[64, "779A65E7023CD2E7"],
		[128, "6C155799FDC8EEC4B91523808E7726B7"],
		[256, "ECC3CF2E0EDFCCD3D87F21EC0883AAD4DB43EEAD66CE09EB4A97E04E1A184527"],
		[512, "2B9C19EC56CCF98DA0F227CC82BFAACBD8350928BD2CEACAE7BC8AA13E747F5C43CA4E2E98FC25E94E4E805675545EE95A3B968C0ACFAECB90AEA2FDBCD4DE0F"],
		[1024, "3FA9D253E52AE80105B382C80A01E27A53D7BC1D201EFB47B38F4D6E465489829D7D272127D20E1076129C00000000000000000000000000000000000000000000000000000000000000000000000000000253EB20F42A7228AF9022D9F35ECE5BB71E40FCD8717B80D164AB921709996E5C43AAE801418E878CDDF968D4616F"]
	]);
});
Deno.test("Direct 5", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(32, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.").hashHex(), "B0B8BAA1");
});
Deno.test("Direct 6", { permissions: "none" }, async (t) => {
	await testerDirect(t, "🦄🌈", [
		[32, "AAF5FEE7"],
		[128, "0A25841AE4659905B36CB0D359FAD39F"]
	]);
});
Deno.test("Direct 7", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(32, "\u{0000}\u{0080}\u{0100}\u{0180}\u{0250}\u{02B0}\u{0300}\u{0370}\u{0400}\u{0500}\u{0530}\u{0590}\u{0600}\u{0700}\u{0780}\u{0900}\u{0980}\u{0A00}\u{0A80}\u{0B00}\u{0B80}\u{0C00}\u{0C80}\u{0D00}\u{0D80}\u{0E00}\u{0E80}\u{0F00}\u{1000}\u{10A0}\u{1100}\u{1200}\u{13A0}\u{1400}\u{1680}\u{16A0}\u{1700}\u{1720}\u{1740}\u{1760}\u{1780}\u{1800}\u{1900}\u{1950}\u{19E0}\u{1D00}\u{1E00}\u{1F00}\u{2000}\u{2070}\u{20A0}\u{20D0}\u{2100}\u{2150}\u{2190}\u{2200}\u{2300}\u{2400}\u{2440}\u{2460}\u{2500}\u{2580}\u{25A0}\u{2600}\u{2700}\u{27C0}\u{27F0}\u{2800}\u{2900}\u{2980}\u{2A00}\u{2B00}\u{2E80}\u{2F00}\u{2FF0}\u{3000}\u{3040}\u{30A0}\u{3100}\u{3130}\u{3190}\u{31A0}\u{31F0}\u{3200}\u{3300}\u{3400}\u{4DC0}\u{4E00}\u{A000}\u{A490}\u{AC00}\u{D800}\u{DC00}\u{E000}\u{F900}\u{FB00}\u{FB50}\u{FE00}\u{FE20}\u{FE30}\u{FE50}\u{FE70}\u{FF00}\u{FFF0}\u{10000}\u{10080}\u{10100}\u{10300}\u{10330}\u{10380}\u{10400}\u{10450}\u{10480}\u{10800}\u{1D000}\u{1D100}\u{1D300}\u{1D400}\u{20000}\u{2F800}\u{E0000}\u{E0100}").hashHex(), "983FDF05");
});
Deno.test("Direct 8", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(32, "foobar").hashHex(), "BF9CF968");
});
Deno.test("Direct 9", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(32, "a").hashHex(), "E40C292C");
});
Deno.test("Direct 10", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(32, "foobar\x00").hashHex(), "0C1C9EB8");
});
Deno.test("Direct 11", { permissions: "none" }, () => {
	deepStrictEqual(new FNV1a(32, "node.js").hashHex(), "B896180E");
});
async function testerStream(t: Deno.TestContext, filePath: string): Promise<void> {
	const sizes: readonly FNVBitsSize[] = [32, 64, 128, 256, 512, 1024];
	for (const size of sizes) {
		await t.step(`${size} Bits`, async () => {
			const sampleText = await Deno.readTextFile(filePath);
			const hashFromText = new FNV1a(size, sampleText).hash();
			await using sampleFile = await Deno.open(filePath);
			const hashFromStream = (await new FNV1a(size).updateFromStream(sampleFile.readable)).hash();
			deepStrictEqual(hashFromText, hashFromStream);
		});
	}
}
Deno.test("Stream 1", {
	permissions: {
		read: true
	}
}, async (t) => {
	await testerStream(t, "./LICENSE.md");
});
Deno.test("Stream 2", {
	permissions: {
		read: true
	}
}, async (t) => {
	await testerStream(t, "./README.md");
});
Deno.test("Stream 3", {
	permissions: {
		read: true
	}
}, async (t) => {
	await testerStream(t, "./deno.jsonc");
});
