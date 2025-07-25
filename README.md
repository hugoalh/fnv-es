# Fowler-Noll-Vo (FNV) (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh/fnv-es](https://img.shields.io/github/v/release/hugoalh/fnv-es?label=hugoalh/fnv-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh/fnv-es")](https://github.com/hugoalh/fnv-es)
[![JSR: @hugoalh/fnv](https://img.shields.io/jsr/v/@hugoalh/fnv?label=@hugoalh/fnv&labelColor=F7DF1E&logo=jsr&logoColor=000000&style=flat "JSR: @hugoalh/fnv")](https://jsr.io/@hugoalh/fnv)
[![NPM: @hugoalh/fnv](https://img.shields.io/npm/v/@hugoalh/fnv?label=@hugoalh/fnv&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/fnv")](https://www.npmjs.com/package/@hugoalh/fnv)

An ECMAScript (JavaScript & TypeScript) module to get the non-cryptographic hash of the data with algorithm Fowler-Noll-Vo (FNV).

## 🌟 Features

- Support bits size of 32, 64, 128, 256, 512, and 1024.
- Support variants of 0, 1, and 1a.

## 🔰 Begin

### 🎯 Targets

| **Targets** | **Remote** | **JSR** | **NPM** |
|:--|:-:|:-:|:-:|
| **[Bun](https://bun.sh/)** >= v1.1.0 | ❌ | ✔️ | ✔️ |
| **[Deno](https://deno.land/)** >= v2.1.0 | ✔️ | ✔️ | ✔️ |
| **[NodeJS](https://nodejs.org/)** >= v20.9.0 | ❌ | ✔️ | ✔️ |

> [!NOTE]
> - It is possible to use this module in other methods/ways which not listed in here, however those methods/ways are not officially supported, and should beware maybe cause security issues.

### #️⃣ Resources Identifier

- **Remote - GitHub Raw:**
  ```
  https://raw.githubusercontent.com/hugoalh/fnv-es/{Tag}/mod.ts
  ```
- **JSR:**
  ```
  [jsr:]@hugoalh/fnv[@{Tag}]
  ```
- **NPM:**
  ```
  [npm:]@hugoalh/fnv[@{Tag}]
  ```

> [!NOTE]
> - For usage of remote resources, it is recommended to import the entire module with the main path `mod.ts`, however it is also able to import part of the module with sub path if available, but do not import if:
>
>   - it's path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`), or
>   - it is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`), or
>   - it's symbol has an underscore prefix (e.g.: `_bar`, `_foo`).
>
>   These elements are not considered part of the public API, thus no stability is guaranteed for them.
> - For usage of JSR or NPM resources, it is recommended to import the entire module with the main entrypoint, however it is also able to import part of the module with sub entrypoint if available, please visit the [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub entrypoints.
> - It is recommended to use this module with tag for immutability.

### 🛡️ Runtime Permissions

*This module does not request any runtime permission.*

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
>   - [Deno CLI `deno doc`](https://docs.deno.com/runtime/reference/cli/documentation_generator/)
>   - [JSR](https://jsr.io/@hugoalh/fnv)

## ✍️ Examples

- ```ts
  new FNV1a(32, "hello").hashHex();
  //=> "4F9F2CAB"
  ```
