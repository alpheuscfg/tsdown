# tsdown Configuration

A shareable tsdown configuration.

## Installation

Install this package as a dependency in the project:

```sh
# npm
npm i @apst/tsdown

# Yarn
yarn add @apst/tsdown

# pnpm
pnpm add @apst/tsdown

# Bun
bun add @apst/tsdown
```

## Usage

Implement the preset into `tsdown.config.ts`:

```ts
import { defineConfig } from "@apst/tsdown";
import { 
    cjsPreset,
    esmPreset,
    dtsPreset,
} from "@apst/tsdown/presets";

export default defineConfig(
    {
        entry: {
            index: "./src/index.ts",
        },
    },
    [
        cjsPreset(),
        esmPreset(),
        dtsPreset(),
    ],
);
```

With IIFE output:

```ts
import type { UserConfig } from "tsdown";

import { defineConfig } from "@apst/tsdown";
import { 
    cjsPreset,
    esmPreset,
    dtsPreset,
    iifePreset,
} from "@apst/tsdown/presets";

const config: UserConfig = {
    entry: {
        index: "./src/index.ts",
    },
};

const iifeConfig: UserConfig = {
    entry: {
        init: "./src/init.ts",
    },
    deps: {
        alwaysBundle: [
            /** ... */
        ],
    },
};

export default defineConfig([
    esmPreset(config),
    cjsPreset(config),
    dtsPreset(config),
    iifePreset(iifeConfig),
]);
```

## APIs

For the APIs, please refer to the [APIs](./apis/README.md).

## License

This project is licensed under the terms of the MIT license.
