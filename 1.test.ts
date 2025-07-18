import { FNV1 } from "./1.ts";
Deno.test("Stream 1 32", {
	permissions: {
		read: true
	}
}, async () => {
	await using file = await Deno.open("./README.md");
	const instance = await new FNV1(32).updateFromStream(file.readable);
	console.log(instance.hashHexPadding());
});
Deno.test("Stream 1 64", {
	permissions: {
		read: true
	}
}, async () => {
	await using file = await Deno.open("./README.md");
	const instance = await new FNV1(64).updateFromStream(file.readable);
	console.log(instance.hashHexPadding());
});
Deno.test("Stream 1 128", {
	permissions: {
		read: true
	}
}, async () => {
	await using file = await Deno.open("./README.md");
	const instance = await new FNV1(128).updateFromStream(file.readable);
	console.log(instance.hashHexPadding());
});
Deno.test("Stream 1 256", {
	permissions: {
		read: true
	}
}, async () => {
	await using file = await Deno.open("./README.md");
	const instance = await new FNV1(256).updateFromStream(file.readable);
	console.log(instance.hashHexPadding());
});
Deno.test("Stream 1 512", {
	permissions: {
		read: true
	}
}, async () => {
	await using file = await Deno.open("./README.md");
	const instance = await new FNV1(512).updateFromStream(file.readable);
	console.log(instance.hashHexPadding());
});
Deno.test("Stream 1 1024", {
	permissions: {
		read: true
	}
}, async () => {
	await using file = await Deno.open("./README.md");
	const instance = await new FNV1(1024).updateFromStream(file.readable);
	console.log(instance.hashHexPadding());
});
