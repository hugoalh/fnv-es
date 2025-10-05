# Fowler-Noll-Vo (FNV) (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh/fnv-es](https://img.shields.io/github/v/release/hugoalh/fnv-es?label=hugoalh/fnv-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh/fnv-es")](https://github.com/hugoalh/fnv-es)
[![JSR: @hugoalh/fnv](https://img.shields.io/jsr/v/@hugoalh/fnv?label=@hugoalh/fnv&labelColor=F7DF1E&logo=jsr&logoColor=000000&style=flat "JSR: @hugoalh/fnv")](https://jsr.io/@hugoalh/fnv)
[![NPM: @hugoalh/fnv](https://img.shields.io/npm/v/@hugoalh/fnv?label=@hugoalh/fnv&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/fnv")](https://www.npmjs.com/package/@hugoalh/fnv)

An ECMAScript module to get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV).

## 🌟 Features

- Support bits size of 32, 64, 128, 256, 512, and 1024.
- Support variants of 0, 1, and 1a.

## 🎯 Targets

| **Runtime \\ Source** | **GitHub Raw** | **JSR** | **NPM** |
|:--|:-:|:-:|:-:|
| **[Bun](https://bun.sh/)** >= v1.1.0 | ❌ | ✔️ | ✔️ |
| **[Deno](https://deno.land/)** >= v2.1.0 | ✔️ | ✔️ | ✔️ |
| **[NodeJS](https://nodejs.org/)** >= v20.9.0 | ❌ | ✔️ | ✔️ |

## 🛡️ Runtime Permissions

This does not request any runtime permission.

## #️⃣ Sources

- GitHub Raw
  ```
  https://raw.githubusercontent.com/hugoalh/fnv-es/{Tag}/mod.ts
  ```
- JSR
  ```
  jsr:@hugoalh/fnv[@{Tag}]
  ```
- NPM
  ```
  npm:@hugoalh/fnv[@{Tag}]
  ```

> [!NOTE]
> - It is recommended to include tag for immutability.
> - These are not part of the public APIs hence should not be used:
>   - Benchmark/Test file (e.g.: `example.bench.ts`, `example.test.ts`).
>   - Entrypoint name or path include any underscore prefix (e.g.: `_example.ts`, `foo/_example.ts`).
>   - Identifier/Namespace/Symbol include any underscore prefix (e.g.: `_example`, `Foo._example`).

## ⤵️ Entrypoints

| **Name** | **Path** | **Description** |
|:--|:--|:--|
| `.` | `./mod.ts` | Default. |
| `./0` | `./0.ts` | Variant of 0. |
| `./1` | `./1.ts` | Variant of 1. |
| `./1a` | `./1a.ts` | Variant of 1a. |
| `./base` | `./base.ts` | Base of FNV. |

## 🧩 APIs

- ```ts
  class FNV {
    constructor(variant: FNVVariant, size: FNVBitsSize, data?: FNVAcceptDataType);
    get freezed(): boolean;
    get size(): FNVBitsSize;
    get variant(): FNVVariant;
    freeze(): this;
    hash(): Uint8Array;
    hashHex(): string;
    update(data: FNVAcceptDataType): this;
    updateFromStream(stream: ReadableStream<FNVAcceptDataType>): Promise<this>;
  }
  ```
- ```ts
  class FNV0 extends FNV {
    constructor(size: FNVBitsSize, data?: FNVAcceptDataType);
  }
  ```
- ```ts
  class FNV1 extends FNV {
    constructor(size: FNVBitsSize, data?: FNVAcceptDataType);
  }
  ```
- ```ts
  class FNV1a extends FNV {
    constructor(size: FNVBitsSize, data?: FNVAcceptDataType);
  }
  ```
- ```ts
  type FNVAcceptDataType =
    | string
    | Uint8Array
    | Uint16Array
    | Uint32Array;
  ```
- ```ts
  type FNVBitsSize =
    | 32
    | 64
    | 128
    | 256
    | 512
    | 1024;
  ```
- ```ts
  type FNVVariant =
    | "0"
    | "1"
    | "1a";
  ```

> [!NOTE]
> - For the full or prettier documentation, can visit via:
>   - [Deno CLI `deno doc`](https://docs.deno.com/runtime/reference/cli/doc/)
>   - [JSR](https://jsr.io/@hugoalh/fnv)

## ✍️ Examples

- ```ts
  new FNV1a(32, "hello").hashHex();
  //=> "4F9F2CAB"
  ```
