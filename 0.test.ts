import { deepStrictEqual } from "node:assert";
import { FNV0 } from "./0.ts";
Deno.test("Stream 1 32", {
	permissions: {
		read: true
	}
}, async () => {
	const sampleFilePath = "./README.md";
	const sampleText = await Deno.readTextFile(sampleFilePath);
	const hashFromText = new FNV0(32, sampleText).hash();
	await using sampleFile = await Deno.open(sampleFilePath);
	const hashFromStream = (await new FNV0(32).updateFromStream(sampleFile.readable)).hash();
	deepStrictEqual(hashFromText, hashFromStream);
});
Deno.test("Stream 1 64", {
	permissions: {
		read: true
	}
}, async () => {
	const sampleFilePath = "./README.md";
	const sampleText = await Deno.readTextFile(sampleFilePath);
	const hashFromText = new FNV0(64, sampleText).hash();
	await using sampleFile = await Deno.open(sampleFilePath);
	const hashFromStream = (await new FNV0(64).updateFromStream(sampleFile.readable)).hash();
	deepStrictEqual(hashFromText, hashFromStream);
});
Deno.test("Stream 1 128", {
	permissions: {
		read: true
	}
}, async () => {
	const sampleFilePath = "./README.md";
	const sampleText = await Deno.readTextFile(sampleFilePath);
	const hashFromText = new FNV0(128, sampleText).hash();
	await using sampleFile = await Deno.open(sampleFilePath);
	const hashFromStream = (await new FNV0(128).updateFromStream(sampleFile.readable)).hash();
	deepStrictEqual(hashFromText, hashFromStream);
});
Deno.test("Stream 1 256", {
	permissions: {
		read: true
	}
}, async () => {
	const sampleFilePath = "./README.md";
	const sampleText = await Deno.readTextFile(sampleFilePath);
	const hashFromText = new FNV0(256, sampleText).hash();
	await using sampleFile = await Deno.open(sampleFilePath);
	const hashFromStream = (await new FNV0(256).updateFromStream(sampleFile.readable)).hash();
	deepStrictEqual(hashFromText, hashFromStream);
});
Deno.test("Stream 1 512", {
	permissions: {
		read: true
	}
}, async () => {
	const sampleFilePath = "./README.md";
	const sampleText = await Deno.readTextFile(sampleFilePath);
	const hashFromText = new FNV0(512, sampleText).hash();
	await using sampleFile = await Deno.open(sampleFilePath);
	const hashFromStream = (await new FNV0(512).updateFromStream(sampleFile.readable)).hash();
	deepStrictEqual(hashFromText, hashFromStream);
});
Deno.test("Stream 1 1024", {
	permissions: {
		read: true
	}
}, async () => {
	const sampleFilePath = "./README.md";
	const sampleText = await Deno.readTextFile(sampleFilePath);
	const hashFromText = new FNV0(1024, sampleText).hash();
	await using sampleFile = await Deno.open(sampleFilePath);
	const hashFromStream = (await new FNV0(1024).updateFromStream(sampleFile.readable)).hash();
	deepStrictEqual(hashFromText, hashFromStream);
});
