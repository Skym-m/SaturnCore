export declare const LOC_STATUS: {
    readonly NEW: "new";
    readonly BROADCASTED: "broadcasted";
    readonly FOUND: "found";
    readonly CLOSED: "closed";
};
export type LocalizationStatus = typeof LOC_STATUS[keyof typeof LOC_STATUS];
export declare const LOC_ACTIVE_STATUSES: LocalizationStatus[];
export declare const LOC_FINAL_STATUSES: LocalizationStatus[];
export declare const LOC_STATUS_TEXT: Record<LocalizationStatus, string>;
export declare function isActiveLocalizationStatus(status: LocalizationStatus): boolean;
export declare function isFinalLocalizationStatus(status: LocalizationStatus): boolean;
export declare function isActionableLocalizationStatus(status: LocalizationStatus): status is "new" | "broadcasted";
