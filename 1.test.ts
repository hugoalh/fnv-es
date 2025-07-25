import { deepStrictEqual } from "node:assert";
import {
	FNV1,
	type FNVBitsSize
} from "./1.ts";
async function testerStream(t: Deno.TestContext, filePath: string): Promise<void> {
	const sizes: readonly FNVBitsSize[] = [32, 64, 128, 256, 512, 1024];
	for (const size of sizes) {
		await t.step(`${size} Bits`, async () => {
			const sampleText = await Deno.readTextFile(filePath);
			const hashFromText = new FNV1(size, sampleText).hash();
			await using sampleFile = await Deno.open(filePath);
			const hashFromStream = (await new FNV1(size).updateFromStream(sampleFile.readable)).hash();
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
