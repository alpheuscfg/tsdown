import type { UserConfig } from "tsdown";

import type { Preset, PresetResult } from "#/@types/preset";

/**
 * Blank preset.
 *
 * This preset does not include any default options.
 */
const blankPreset = (config?: UserConfig): Preset => {
    return (): PresetResult => {
        return {
            config,
        };
    };
};

export { blankPreset };
