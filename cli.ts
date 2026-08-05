#!/usr/bin/env -S deno run
import { exit } from "node:process";
import {
	parseArgs,
	styleText
} from "node:util";
import {
	FNV,
	type FNVBitsSize,
	type FNVVariant
} from "./base.ts";
if (!import.meta.main) {
	throw new Error(`This entrypoint is for command line only!`);
}
addEventListener("unhandledrejection", (event: PromiseRejectionEvent): void => {
	event.preventDefault();
	let message: string;
	if (event.reason instanceof Error) {
		message = event.reason.message;
		if ((event.reason.stack ?? "").length > 0) {
			message += `\n${event.reason.stack}`;
		}
	} else {
		message = String(event.reason);
	}
	console.error(`${styleText(["red"], "ERROR", { validateStream: false })}\t${message}`);
	exit(1);
}, { capture: true });
const {
	positionals,
	values: {
		file: fromFile = false,
		size = "1024",
		stdin: fromStdin = false,
		variant = "1a"
	}
} = parseArgs({
	allowPositionals: true,
	options: {
		file: {
			type: "boolean"
		},
		size: {
			type: "string",
		},
		stdin: {
			type: "boolean"
		},
		variant: {
			type: "string"
		}
	}
});
if (fromFile && fromStdin) {
	throw new SyntaxError(`Unable to request resource from file and stdin together!`);
}
const expectArgumentsLength: number = fromStdin ? 0 : 1;
if (positionals.length !== expectArgumentsLength) {
	throw new SyntaxError(`Invalid arguments length! Expect: ${expectArgumentsLength}, Current: ${positionals.length}.`);
}
const instance: FNV = new FNV(variant as FNVVariant, Number(size) as FNVBitsSize);
if (fromFile) {
	await using file: Deno.FsFile = await Deno.open(positionals[0]);
	await instance.updateFromStream(file.readable);
} else if (fromStdin) {
	await instance.updateFromStream(Deno.stdin.readable);
} else {
	instance.update(positionals[0]);
}
console.log(instance.hashHex());
