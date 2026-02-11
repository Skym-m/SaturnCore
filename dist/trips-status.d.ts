export declare const TRIP_STATUS: {
    readonly DRAFT: "draft";
    readonly LOCKED: "locked";
    readonly COMPLETED: "completed";
    readonly COMPLETED_WITH_ISSUE: "completed_with_issue";
    readonly CANCELLED: "cancelled";
};
export type TripsStatus = typeof TRIP_STATUS[keyof typeof TRIP_STATUS];
export declare const TRIP_ACTIVE_STATUSES: TripsStatus[];
export declare const TRIP_FINAL_STATUSES: TripsStatus[];
export declare const TRIP_STATUS_TEXT: Record<TripsStatus, string>;
