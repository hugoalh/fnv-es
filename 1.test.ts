import { deepStrictEqual } from "node:assert";
import { FNV1 } from "./1.ts";
Deno.test("Stream 1 32", {
	permissions: {
		read: true
	}
}, async () => {
	const sampleFilePath = "./README.md";
	const sampleText = await Deno.readTextFile(sampleFilePath);
	const hashFromText = new FNV1(32, sampleText).hash();
	await using sampleFile = await Deno.open(sampleFilePath);
	const hashFromStream = (await new FNV1(32).updateFromStream(sampleFile.readable)).hash();
	deepStrictEqual(hashFromText, hashFromStream);
});
Deno.test("Stream 1 64", {
	permissions: {
		read: true
	}
}, async () => {
	const sampleFilePath = "./README.md";
	const sampleText = await Deno.readTextFile(sampleFilePath);
	const hashFromText = new FNV1(64, sampleText).hash();
	await using sampleFile = await Deno.open(sampleFilePath);
	const hashFromStream = (await new FNV1(64).updateFromStream(sampleFile.readable)).hash();
	deepStrictEqual(hashFromText, hashFromStream);
});
Deno.test("Stream 1 128", {
	permissions: {
		read: true
	}
}, async () => {
	const sampleFilePath = "./README.md";
	const sampleText = await Deno.readTextFile(sampleFilePath);
	const hashFromText = new FNV1(128, sampleText).hash();
	await using sampleFile = await Deno.open(sampleFilePath);
	const hashFromStream = (await new FNV1(128).updateFromStream(sampleFile.readable)).hash();
	deepStrictEqual(hashFromText, hashFromStream);
});
Deno.test("Stream 1 256", {
	permissions: {
		read: true
	}
}, async () => {
	const sampleFilePath = "./README.md";
	const sampleText = await Deno.readTextFile(sampleFilePath);
	const hashFromText = new FNV1(256, sampleText).hash();
	await using sampleFile = await Deno.open(sampleFilePath);
	const hashFromStream = (await new FNV1(256).updateFromStream(sampleFile.readable)).hash();
	deepStrictEqual(hashFromText, hashFromStream);
});
Deno.test("Stream 1 512", {
	permissions: {
		read: true
	}
}, async () => {
	const sampleFilePath = "./README.md";
	const sampleText = await Deno.readTextFile(sampleFilePath);
	const hashFromText = new FNV1(512, sampleText).hash();
	await using sampleFile = await Deno.open(sampleFilePath);
	const hashFromStream = (await new FNV1(512).updateFromStream(sampleFile.readable)).hash();
	deepStrictEqual(hashFromText, hashFromStream);
});
Deno.test("Stream 1 1024", {
	permissions: {
		read: true
	}
}, async () => {
	const sampleFilePath = "./README.md";
	const sampleText = await Deno.readTextFile(sampleFilePath);
	const hashFromText = new FNV1(1024, sampleText).hash();
	await using sampleFile = await Deno.open(sampleFilePath);
	const hashFromStream = (await new FNV1(1024).updateFromStream(sampleFile.readable)).hash();
	deepStrictEqual(hashFromText, hashFromStream);
});
