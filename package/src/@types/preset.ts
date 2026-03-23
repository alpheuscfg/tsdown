import type { UserConfig } from "tsdown";

/**
 * Preset options.
 */
type PresetContext = {
    /**
     * tsdown configuration.
     */
    config: UserConfig;
};

/**
 * Preset result.
 */
type PresetResult = {
    /**
     * tsdown configuration.
     */
    config?: UserConfig | UserConfig[];
};

/**
 * Preset for the tsdown configuration.
 */
type Preset = (context: PresetContext) => PresetResult;

export type { Preset, PresetContext, PresetResult };
