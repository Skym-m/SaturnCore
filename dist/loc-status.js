export const LOC_STATUS = {
    NEW: "new",
    BROADCASTED: "broadcasted",
    FOUND: "found",
    CLOSED: "closed",
};
export const LOC_ACTIVE_STATUSES = [
    LOC_STATUS.NEW,
    LOC_STATUS.BROADCASTED,
];
export const LOC_FINAL_STATUSES = [
    LOC_STATUS.FOUND,
    LOC_STATUS.CLOSED,
];
export const LOC_STATUS_TEXT = {
    new: "Demande envoyée à la concession ciblée",
    broadcasted: "Recherche étendue aux autres concessions",
    found: "Véhicule localisé",
    closed: "Demande clôturée",
};
/* =========================
   HELPERS
========================= */
export function isActiveLocalizationStatus(status) {
    return LOC_ACTIVE_STATUSES.includes(status);
}
export function isFinalLocalizationStatus(status) {
    return LOC_FINAL_STATUSES.includes(status);
}
export function isActionableLocalizationStatus(status) {
    return status === LOC_STATUS.NEW ||
        status === LOC_STATUS.BROADCASTED;
}
