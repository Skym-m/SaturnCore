export declare const CONVOY_STATUS: {
    readonly NEW: "new";
    readonly IN_REVIEW: "in_review";
    readonly SCHEDULED: "scheduled";
    readonly ASSIGNED: "assigned";
    readonly COMPLETED: "completed";
    readonly INCOMPLETE: "incomplete";
    readonly ARCHIVED: "archived";
};
export type ConvoyStatus = typeof CONVOY_STATUS[keyof typeof CONVOY_STATUS];
export declare const ACTIVE_STATUSES: ConvoyStatus[];
export declare const FINAL_STATUSES: ConvoyStatus[];
export declare const ACTIONABLE_CONVOY_STATUSES: ConvoyStatus[];
export declare const CONVOY_STATUS_TEXT: Record<ConvoyStatus, string>;
export declare function isActionableConvoyStatus(status: ConvoyStatus): boolean;
export declare const isActionnableConvoyStatus: typeof isActionableConvoyStatus;
