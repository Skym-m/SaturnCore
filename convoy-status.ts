export const CONVOY_STATUS = {
    NEW: "new",
    IN_REVIEW: "in_review",
    SCHEDULED: "scheduled",
    ASSIGNED: "assigned",
    COMPLETED: "completed",
    INCOMPLETE: "incomplete",
    ARCHIVED: "archived",
} as const;

export type ConvoyStatus =
    typeof CONVOY_STATUS[keyof typeof CONVOY_STATUS];

export const ACTIVE_STATUSES: ConvoyStatus[] = [
    CONVOY_STATUS.NEW,
    CONVOY_STATUS.IN_REVIEW,
    CONVOY_STATUS.SCHEDULED,
    CONVOY_STATUS.ASSIGNED,
];

export const FINAL_STATUSES: ConvoyStatus[] = [
    CONVOY_STATUS.COMPLETED,
    CONVOY_STATUS.INCOMPLETE,
    CONVOY_STATUS.ARCHIVED,
];

export const ACTIONABLE_CONVOY_STATUSES: ConvoyStatus[] = [
    CONVOY_STATUS.ASSIGNED,
    CONVOY_STATUS.COMPLETED,
    CONVOY_STATUS.INCOMPLETE,
];

export const CONVOY_STATUS_TEXT: Record<ConvoyStatus, string> = {
    new: "Demande envoyée",
    in_review: "En cours d’instruction",
    scheduled: "Livraison planifiée",
    assigned: "Véhicule assigné à un transporteur",
    completed: "Véhicule livré",
    incomplete: "Problème de livraison",
    archived: "Demande archivée",
};

export function isActionableConvoyStatus(status: ConvoyStatus) {
    return ACTIONABLE_CONVOY_STATUSES.includes(status);
}

// Backward-compatibility alias (kept for existing imports).
export const isActionnableConvoyStatus = isActionableConvoyStatus;
