import { FNV0 } from "./0.ts";
Deno.test("Stream 1 32", {
	permissions: {
		read: true
	}
}, async () => {
	using file = await Deno.open("./README.md");
	console.log((await FNV0.fromStream(32, file.readable)).hashHexPadding());
});
Deno.test("Stream 1 64", {
	permissions: {
		read: true
	}
}, async () => {
	using file = await Deno.open("./README.md");
	console.log((await FNV0.fromStream(64, file.readable)).hashHexPadding());
});
Deno.test("Stream 1 128", {
	permissions: {
		read: true
	}
}, async () => {
	using file = await Deno.open("./README.md");
	console.log((await FNV0.fromStream(128, file.readable)).hashHexPadding());
});
Deno.test("Stream 1 256", {
	permissions: {
		read: true
	}
}, async () => {
	using file = await Deno.open("./README.md");
	console.log((await FNV0.fromStream(256, file.readable)).hashHexPadding());
});
Deno.test("Stream 1 512", {
	permissions: {
		read: true
	}
}, async () => {
	using file = await Deno.open("./README.md");
	console.log((await FNV0.fromStream(512, file.readable)).hashHexPadding());
});
Deno.test("Stream 1 1024", {
	permissions: {
		read: true
	}
}, async () => {
	using file = await Deno.open("./README.md");
	console.log((await FNV0.fromStream(1024, file.readable)).hashHexPadding());
});
