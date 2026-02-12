"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRIP_STATUS_TEXT = exports.TRIP_FINAL_STATUSES = exports.TRIP_ACTIVE_STATUSES = exports.TRIP_STATUS = void 0;
exports.TRIP_STATUS = {
    DRAFT: "draft",
    LOCKED: "locked",
    COMPLETED: "completed",
    COMPLETED_WITH_ISSUE: "completed_with_issue",
    CANCELLED: "cancelled",
};
exports.TRIP_ACTIVE_STATUSES = [
    exports.TRIP_STATUS.DRAFT,
    exports.TRIP_STATUS.LOCKED,
];
exports.TRIP_FINAL_STATUSES = [
    exports.TRIP_STATUS.COMPLETED,
    exports.TRIP_STATUS.COMPLETED_WITH_ISSUE,
    exports.TRIP_STATUS.CANCELLED,
];
exports.TRIP_STATUS_TEXT = {
    draft: "Trajet en préparation",
    locked: "Trajet verrouillé",
    completed: "Trajet terminé",
    completed_with_issue: "Trajet terminé avec incident",
    cancelled: "Trajet annulé",
};
