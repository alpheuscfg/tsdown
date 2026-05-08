[@apst/tsdown](../../README.md) / [core](../README.md) / defineConfig

# Function: defineConfig()

## Call Signature

```ts
function defineConfig(presets?): UserConfig[];
```

Defined in: [functions/define.ts:93](https://github.com/alpheuscfg/tsdown/blob/d5e92a7e0e98e900a23336bdc59290a94fd02901/package/src/functions/define.ts#L93)

Define tsdown configuration.

### Example

```ts
import type { UserConfig } from "tsdown";

import { defineConfig } from "@apst/tsdown";
import {
    esmPreset,
    cjsPreset,
    dtsPreset,
    iifePreset,
} from "@apst/tsdown/presets";

const options: UserConfig = {
    entry: {
        index: "./src/index.ts",
    },
};

const iifeOptions: UserConfig = {
    entry: {
        init: "./src/init.ts",
    },
};

export default defineConfig([
    esmPreset(options),
    cjsPreset(options),
    dtsPreset(options),
    iifePreset(iifeOptions),
]);
```

### Parameters

#### presets?

[`Preset`](../../presets/type-aliases/Preset.md)[]

### Returns

`UserConfig`[]

## Call Signature

```ts
function defineConfig(config?, presets?): UserConfig[];
```

Defined in: [functions/define.ts:118](https://github.com/alpheuscfg/tsdown/blob/d5e92a7e0e98e900a23336bdc59290a94fd02901/package/src/functions/define.ts#L118)

Define tsdown configuration.

### Example

```ts
import { defineConfig } from "@apst/tsdown";
import { esmPreset, cjsPreset, dtsPreset } from "@apst/tsdown/presets";

export default defineConfig(
    {
        entry: {
            index: "./src/index.ts",
        },
    },
    [
        esmPreset(),
        cjsPreset(),
        dtsPreset(),
    ],
);
```

### Parameters

#### config?

`UserConfig`

#### presets?

[`Preset`](../../presets/type-aliases/Preset.md)[]

### Returns

`UserConfig`[]
