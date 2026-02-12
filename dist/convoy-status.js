"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONVOY_STATUS_TEXT = exports.FINAL_STATUSES = exports.ACTIVE_STATUSES = exports.CONVOY_STATUS = void 0;
exports.isActionnableConvoyStatus = isActionnableConvoyStatus;
exports.CONVOY_STATUS = {
    NEW: "new",
    IN_REVIEW: "in_review",
    SCHEDULED: "scheduled",
    ASSIGNED: "assigned",
    COMPLETED: "completed",
    INCOMPLETE: "incomplete",
    ARCHIVED: "archived",
};
exports.ACTIVE_STATUSES = [
    exports.CONVOY_STATUS.NEW,
    exports.CONVOY_STATUS.IN_REVIEW,
    exports.CONVOY_STATUS.SCHEDULED,
    exports.CONVOY_STATUS.ASSIGNED,
];
exports.FINAL_STATUSES = [
    exports.CONVOY_STATUS.COMPLETED,
    exports.CONVOY_STATUS.INCOMPLETE,
    exports.CONVOY_STATUS.ARCHIVED,
];
exports.CONVOY_STATUS_TEXT = {
    new: "Demande envoyée",
    in_review: "En cours d’instruction",
    scheduled: "Livraison planifiée",
    assigned: "Véhicule assigné à un transporteur",
    completed: "Véhicule livré",
    incomplete: "Problème de livraison",
    archived: "Demande archivée",
};
function isActionnableConvoyStatus(status) {
    return (status === exports.CONVOY_STATUS.ASSIGNED ||
        status === exports.CONVOY_STATUS.COMPLETED) ||
        status === exports.CONVOY_STATUS.INCOMPLETE;
}
