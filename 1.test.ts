import { deepStrictEqual } from "node:assert";
import { FNV1 } from "./1.ts";
import type { FNVBitsSize } from "./base.ts";
const sizes: readonly FNVBitsSize[] = [32, 64, 128, 256, 512, 1024];
async function testerStream(t: Deno.TestContext, filePath: string): Promise<void> {
	for (const size of sizes) {
		await t.step(`${size} Bits`, async () => {
			const hashText = new FNV1({ size }).update(await Deno.readFile(filePath)).hash();
			await using sampleFile = await Deno.open(filePath);
			const hashStream = (await new FNV1({ size }).updateFromStream(sampleFile.readable)).hash();
			deepStrictEqual(hashText, hashStream);
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
