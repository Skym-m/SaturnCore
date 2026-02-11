export const TRIP_STATUS = {
    DRAFT: "draft",
    LOCKED: "locked",
    COMPLETED: "completed",
    COMPLETED_WITH_ISSUE: "completed_with_issue",
    CANCELLED: "cancelled",
} as const;

export type TripsStatus =
    typeof TRIP_STATUS[keyof typeof TRIP_STATUS];

export const TRIP_ACTIVE_STATUSES: TripsStatus[] = [
    TRIP_STATUS.DRAFT,
    TRIP_STATUS.LOCKED,
];

export const TRIP_FINAL_STATUSES: TripsStatus[] = [
    TRIP_STATUS.COMPLETED,
    TRIP_STATUS.COMPLETED_WITH_ISSUE,
    TRIP_STATUS.CANCELLED,
];

export const TRIP_STATUS_TEXT: Record<TripsStatus, string> = {
    draft: "Trajet en préparation",
    locked: "Trajet verrouillé",
    completed: "Trajet terminé",
    completed_with_issue: "Trajet terminé avec incident",
    cancelled: "Trajet annulé",
};
