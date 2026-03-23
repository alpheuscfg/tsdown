import type { UserConfig } from "tsdown";

import { defineConfig } from "@apst/tsdown";
import {
    cjsPreset,
    dtsPreset,
    esmPreset,
    iifePreset,
} from "@apst/tsdown/presets";

const config: UserConfig = {
    entry: {
        index: "./src/index.ts",
    },
};

const iifeDevConfig: UserConfig = {
    entry: {
        init: "./src/init.ts",
    },
};

const iifePrdConfig: UserConfig = {
    entry: {
        "init.min": "./src/init.ts",
    },
    minify: true,
};

export default defineConfig([
    esmPreset(config),
    cjsPreset(config),
    dtsPreset(config),
    iifePreset(iifeDevConfig),
    iifePreset(iifePrdConfig),
]);
