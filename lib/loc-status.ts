export const LOC_STATUS = {
    NEW: "new",
    BROADCASTED: "broadcasted",
    FOUND: "found",
    CLOSED: "closed",
} as const;

export type LocalizationStatus =
    typeof LOC_STATUS[keyof typeof LOC_STATUS];

export const LOC_ACTIVE_STATUSES: LocalizationStatus[] = [
    LOC_STATUS.NEW,
    LOC_STATUS.BROADCASTED,
];

export const LOC_FINAL_STATUSES: LocalizationStatus[] = [
    LOC_STATUS.FOUND,
    LOC_STATUS.CLOSED,
];

export const LOC_STATUS_TEXT: Record<LocalizationStatus, string> = {
    new: "Demande envoyée à la concession ciblée",
    broadcasted: "Recherche étendue aux autres concessions",
    found: "Véhicule localisé",
    closed: "Demande clôturée",
};

/* =========================
   HELPERS
========================= */
export function isActiveLocalizationStatus(
    status: LocalizationStatus
) {
    return LOC_ACTIVE_STATUSES.includes(status);
}

export function isFinalLocalizationStatus(
    status: LocalizationStatus
) {
    return LOC_FINAL_STATUSES.includes(status);
}

export function isActionableLocalizationStatus(
    status: LocalizationStatus
) {
    return status === LOC_STATUS.NEW ||
        status === LOC_STATUS.BROADCASTED;
}
