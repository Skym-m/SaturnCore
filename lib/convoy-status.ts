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

export const CONVOY_STATUS_TEXT: Record<ConvoyStatus, string> = {
    new: "Demande envoyée",
    in_review: "En cours d’instruction",
    scheduled: "Livraison planifiée",
    assigned: "Véhicule assigné à un transporteur",
    completed: "Véhicule livré",
    incomplete: "Problème de livraison",
    archived: "Demande archivée",
};

export function isActionnableConvoyStatus(status: ConvoyStatus) {
    return (
        status === CONVOY_STATUS.ASSIGNED ||
        status === CONVOY_STATUS.COMPLETED) ||
        status === CONVOY_STATUS.INCOMPLETE;
}
