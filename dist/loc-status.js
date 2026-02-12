"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOC_STATUS_TEXT = exports.LOC_FINAL_STATUSES = exports.LOC_ACTIVE_STATUSES = exports.LOC_STATUS = void 0;
exports.isActiveLocalizationStatus = isActiveLocalizationStatus;
exports.isFinalLocalizationStatus = isFinalLocalizationStatus;
exports.isActionableLocalizationStatus = isActionableLocalizationStatus;
exports.LOC_STATUS = {
    NEW: "new",
    BROADCASTED: "broadcasted",
    FOUND: "found",
    CLOSED: "closed",
};
exports.LOC_ACTIVE_STATUSES = [
    exports.LOC_STATUS.NEW,
    exports.LOC_STATUS.BROADCASTED,
];
exports.LOC_FINAL_STATUSES = [
    exports.LOC_STATUS.FOUND,
    exports.LOC_STATUS.CLOSED,
];
exports.LOC_STATUS_TEXT = {
    new: "Demande envoyée à la concession ciblée",
    broadcasted: "Recherche étendue aux autres concessions",
    found: "Véhicule localisé",
    closed: "Demande clôturée",
};
/* =========================
   HELPERS
========================= */
function isActiveLocalizationStatus(status) {
    return exports.LOC_ACTIVE_STATUSES.includes(status);
}
function isFinalLocalizationStatus(status) {
    return exports.LOC_FINAL_STATUSES.includes(status);
}
function isActionableLocalizationStatus(status) {
    return status === exports.LOC_STATUS.NEW ||
        status === exports.LOC_STATUS.BROADCASTED;
}
