import type { UserConfig } from "tsdown";

import type { Preset, PresetResult } from "#/@types/preset";

import { toMerged } from "es-toolkit";

/**
 * Config for the IIFE preset.
 */
type PresetConfigIIFE = UserConfig;

/**
 * IIFE preset.
 *
 * This preset includes the default IIFE config.
 */
const iifePreset = (config?: PresetConfigIIFE): Preset => {
    return ({ config: internalConfig }): PresetResult => {
        const cfgPreset: UserConfig = {
            unbundle: false,
            outputOptions: {
                entryFileNames: ({ name }) => `${name}.js`,
            },
        };

        const cfgBase: UserConfig = toMerged(internalConfig, cfgPreset);

        const cfg: UserConfig = toMerged(cfgBase, config ?? {});

        return {
            config: {
                ...cfg,
                format: "iife",
            },
        };
    };
};

export type { PresetConfigIIFE };
export { iifePreset };
