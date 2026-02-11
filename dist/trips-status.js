export const TRIP_STATUS = {
    DRAFT: "draft",
    LOCKED: "locked",
    COMPLETED: "completed",
    COMPLETED_WITH_ISSUE: "completed_with_issue",
    CANCELLED: "cancelled",
};
export const TRIP_ACTIVE_STATUSES = [
    TRIP_STATUS.DRAFT,
    TRIP_STATUS.LOCKED,
];
export const TRIP_FINAL_STATUSES = [
    TRIP_STATUS.COMPLETED,
    TRIP_STATUS.COMPLETED_WITH_ISSUE,
    TRIP_STATUS.CANCELLED,
];
export const TRIP_STATUS_TEXT = {
    draft: "Trajet en préparation",
    locked: "Trajet verrouillé",
    completed: "Trajet terminé",
    completed_with_issue: "Trajet terminé avec incident",
    cancelled: "Trajet annulé",
};
