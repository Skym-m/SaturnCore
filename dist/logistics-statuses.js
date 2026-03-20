"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRIP_LOGISTICS_STATUS_TEXT = exports.TRIP_LOGISTICS_STATUS = exports.VEHICLE_LOGISTICS_STATE_TEXT = exports.VEHICLE_LOGISTICS_STATE = exports.VEHICLE_STATUS_TEXT = exports.VEHICLE_STATUS = exports.MOVEMENT_STATUS_TEXT = exports.MOVEMENT_STATUS = exports.CONVOY_REQUEST_STATUS_TEXT = exports.CONVOY_REQUEST_STATUS = void 0;
exports.isConvoyRequestStatus = isConvoyRequestStatus;
exports.isMovementStatus = isMovementStatus;
exports.isVehicleStatus = isVehicleStatus;
exports.isVehicleLogisticsState = isVehicleLogisticsState;
exports.isTripLogisticsStatus = isTripLogisticsStatus;
exports.deriveVehicleLogisticsState = deriveVehicleLogisticsState;
function normalizeToken(value) {
    if (typeof value !== "string") {
        return null;
    }
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : null;
}
exports.CONVOY_REQUEST_STATUS = {
    OPEN: "open",
    PLANNED: "planned",
    ASSIGNED: "assigned",
    DELIVERED_OK: "delivered_ok",
    DELIVERED_ISSUE: "delivered_issue",
    DELIVERY_FAILED: "delivery_failed",
    CANCELLED: "cancelled",
};
exports.CONVOY_REQUEST_STATUS_TEXT = {
    open: "Demande ouverte",
    planned: "Demande planifiée",
    assigned: "Demande assignée",
    delivered_ok: "Véhicule livré",
    delivered_issue: "Livraison avec anomalie",
    delivery_failed: "Livraison échouée",
    cancelled: "Demande annulée",
};
exports.MOVEMENT_STATUS = {
    PLANNED: "planned",
    IN_TRANSIT: "in_transit",
    DELIVERED_OK: "delivered_ok",
    DELIVERED_ISSUE_RECEIVED: "delivered_issue_received",
    DELIVERY_FAILED: "delivery_failed",
    CANCELLED: "cancelled",
};
exports.MOVEMENT_STATUS_TEXT = {
    planned: "Mouvement planifié",
    in_transit: "En transit",
    delivered_ok: "Livré",
    delivered_issue_received: "Livré avec anomalie",
    delivery_failed: "Échec de livraison",
    cancelled: "Mouvement annulé",
};
exports.VEHICLE_STATUS = {
    ACTIVE: "active",
    BLOCKED: "blocked",
    ARCHIVED: "archived",
};
exports.VEHICLE_STATUS_TEXT = {
    active: "Actif",
    blocked: "Bloqué",
    archived: "Archivé",
};
exports.VEHICLE_LOGISTICS_STATE = {
    FREE: "free",
    ENGAGED: "engaged",
    PLANNED: "planned",
    ASSIGNED: "assigned",
    IN_TRANSIT: "in_transit",
    BLOCKED: "blocked",
    ARCHIVED: "archived",
};
exports.VEHICLE_LOGISTICS_STATE_TEXT = {
    free: "Libre",
    engaged: "Engagé",
    planned: "Planifié",
    assigned: "Assigné",
    in_transit: "En transit",
    blocked: "Bloqué",
    archived: "Archivé",
};
exports.TRIP_LOGISTICS_STATUS = {
    DRAFT: "draft",
    LOCKED: "locked",
    CANCELLED: "cancelled",
};
exports.TRIP_LOGISTICS_STATUS_TEXT = {
    draft: "Trajet en préparation",
    locked: "Trajet verrouillé",
    cancelled: "Trajet annulé",
};
function isConvoyRequestStatus(value) {
    return (typeof value === "string" &&
        Object.values(exports.CONVOY_REQUEST_STATUS).includes(value));
}
function isMovementStatus(value) {
    return (typeof value === "string" &&
        Object.values(exports.MOVEMENT_STATUS).includes(value));
}
function isVehicleStatus(value) {
    return (typeof value === "string" &&
        Object.values(exports.VEHICLE_STATUS).includes(value));
}
function isVehicleLogisticsState(value) {
    return (typeof value === "string" &&
        Object.values(exports.VEHICLE_LOGISTICS_STATE).includes(value));
}
function isTripLogisticsStatus(value) {
    return (typeof value === "string" &&
        Object.values(exports.TRIP_LOGISTICS_STATUS).includes(value));
}
function deriveVehicleLogisticsState(params) {
    const vehicleStatus = normalizeToken(params.vehicleStatus);
    if (vehicleStatus === exports.VEHICLE_STATUS.ARCHIVED) {
        return exports.VEHICLE_LOGISTICS_STATE.ARCHIVED;
    }
    if (vehicleStatus === exports.VEHICLE_STATUS.BLOCKED) {
        return exports.VEHICLE_LOGISTICS_STATE.BLOCKED;
    }
    const movementStatus = normalizeToken(params.movementStatus);
    if (movementStatus === exports.MOVEMENT_STATUS.IN_TRANSIT) {
        return exports.VEHICLE_LOGISTICS_STATE.IN_TRANSIT;
    }
    if (movementStatus === exports.MOVEMENT_STATUS.PLANNED ||
        movementStatus === "allocated" ||
        movementStatus === "loaded") {
        return exports.VEHICLE_LOGISTICS_STATE.PLANNED;
    }
    const convoyRequestStatus = normalizeToken(params.convoyRequestStatus);
    if (params.hasTripAssignment || convoyRequestStatus === exports.CONVOY_REQUEST_STATUS.ASSIGNED) {
        return exports.VEHICLE_LOGISTICS_STATE.ASSIGNED;
    }
    if (convoyRequestStatus === exports.CONVOY_REQUEST_STATUS.PLANNED ||
        convoyRequestStatus === "scheduled") {
        return exports.VEHICLE_LOGISTICS_STATE.PLANNED;
    }
    if (convoyRequestStatus === exports.CONVOY_REQUEST_STATUS.OPEN ||
        convoyRequestStatus === "new" ||
        convoyRequestStatus === "in_review") {
        return exports.VEHICLE_LOGISTICS_STATE.ENGAGED;
    }
    return exports.VEHICLE_LOGISTICS_STATE.FREE;
}
