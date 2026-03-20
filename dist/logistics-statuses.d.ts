export declare const CONVOY_REQUEST_STATUS: {
    readonly OPEN: "open";
    readonly PLANNED: "planned";
    readonly ASSIGNED: "assigned";
    readonly DELIVERED_OK: "delivered_ok";
    readonly DELIVERED_ISSUE: "delivered_issue";
    readonly DELIVERY_FAILED: "delivery_failed";
    readonly CANCELLED: "cancelled";
};
export type ConvoyRequestStatus = typeof CONVOY_REQUEST_STATUS[keyof typeof CONVOY_REQUEST_STATUS];
export declare const CONVOY_REQUEST_STATUS_TEXT: Record<ConvoyRequestStatus, string>;
export declare const MOVEMENT_STATUS: {
    readonly PLANNED: "planned";
    readonly IN_TRANSIT: "in_transit";
    readonly DELIVERED_OK: "delivered_ok";
    readonly DELIVERED_ISSUE_RECEIVED: "delivered_issue_received";
    readonly DELIVERY_FAILED: "delivery_failed";
    readonly CANCELLED: "cancelled";
};
export type MovementStatus = typeof MOVEMENT_STATUS[keyof typeof MOVEMENT_STATUS];
export declare const MOVEMENT_STATUS_TEXT: Record<MovementStatus, string>;
export declare const VEHICLE_STATUS: {
    readonly ACTIVE: "active";
    readonly BLOCKED: "blocked";
    readonly ARCHIVED: "archived";
};
export type VehicleStatus = typeof VEHICLE_STATUS[keyof typeof VEHICLE_STATUS];
export declare const VEHICLE_STATUS_TEXT: Record<VehicleStatus, string>;
export declare const VEHICLE_LOGISTICS_STATE: {
    readonly FREE: "free";
    readonly ENGAGED: "engaged";
    readonly PLANNED: "planned";
    readonly ASSIGNED: "assigned";
    readonly IN_TRANSIT: "in_transit";
    readonly BLOCKED: "blocked";
    readonly ARCHIVED: "archived";
};
export type VehicleLogisticsState = typeof VEHICLE_LOGISTICS_STATE[keyof typeof VEHICLE_LOGISTICS_STATE];
export declare const VEHICLE_LOGISTICS_STATE_TEXT: Record<VehicleLogisticsState, string>;
export declare const TRIP_LOGISTICS_STATUS: {
    readonly DRAFT: "draft";
    readonly LOCKED: "locked";
    readonly CANCELLED: "cancelled";
};
export type TripLogisticsStatus = typeof TRIP_LOGISTICS_STATUS[keyof typeof TRIP_LOGISTICS_STATUS];
export declare const TRIP_LOGISTICS_STATUS_TEXT: Record<TripLogisticsStatus, string>;
export declare function isConvoyRequestStatus(value: unknown): value is ConvoyRequestStatus;
export declare function isMovementStatus(value: unknown): value is MovementStatus;
export declare function isVehicleStatus(value: unknown): value is VehicleStatus;
export declare function isVehicleLogisticsState(value: unknown): value is VehicleLogisticsState;
export declare function isTripLogisticsStatus(value: unknown): value is TripLogisticsStatus;
export declare function deriveVehicleLogisticsState(params: {
    vehicleStatus?: string | null;
    movementStatus?: string | null;
    convoyRequestStatus?: string | null;
    hasTripAssignment?: boolean;
}): VehicleLogisticsState;
