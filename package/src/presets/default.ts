import type { UserConfig } from "tsdown";

import type { Preset, PresetResult } from "#/@types/preset";

import { toMerged } from "es-toolkit";

/**
 * Default preset.
 *
 * This preset includes the default options only.
 */
const defaultPreset = (config?: UserConfig): Preset => {
    return ({ config: internalConfig }): PresetResult => {
        const cfg: UserConfig = toMerged(internalConfig, config ?? {});

        return {
            config: cfg,
        };
    };
};

export { defaultPreset };
