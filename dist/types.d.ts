import { ConvoyStatus } from "./convoy-status";
import { TripsStatus } from "./trips-status";
import { LocalizationStatus } from "./loc-status";
/**
 * =========================
 * CONVOY
 * =========================
 */
export type Concession = {
    id: string;
    organization_id: string;
    name: string;
};
export type ConvoyRequest = {
    id: string;
    organization_id: string;
    reference_number: number;
    brand: string;
    model: string;
    chassis: string | null;
    license_plate: string | null;
    color?: string | null;
    vehicle_type: "VO" | "VN";
    status: ConvoyStatus;
    requested_arrival_date: string | null;
    scheduled_date: string | null;
    created_at: string;
    departure_concession_id: string;
    arrival_concession_id: string;
    departure_concession?: Concession;
    arrival_concession?: Concession;
};
/**
 * =========================
 * USER / ROLE
 * =========================
 */
export type Role = "seller" | "manager_vo" | "manager_vn" | "transporter" | "driver" | "admin";
export type User = {
    id: string;
    organization_id: string;
    email: string;
};
export type Organization = {
    id: string;
    slug: string;
    name: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
};
export type OrganizationBranding = {
    organization_id: string;
    app_name: string | null;
    logo_url: string | null;
    login_background_url: string | null;
    login_title: string | null;
    login_subtitle: string | null;
    footer_text: string | null;
    meta_title: string | null;
    meta_description: string | null;
    primary_color: string | null;
    updated_at: string;
};
export type OrganizationSettings = {
    organization_id: string;
    settings: Record<string, unknown>;
    feature_flags: Record<string, boolean>;
    updated_at: string;
};
/**
 * =========================
 * LOCALIZATION
 * =========================
 */
export type VehicleType = "VO" | "VN";
export type LocalizationResponse = "pending" | "yes" | "no";
export type LocalizationItem = {
    __type: "sent" | "received";
    organization_id: string;
    requestId: string;
    responseId: string | null;
    response: LocalizationResponse | null;
    status: LocalizationStatus;
    brand: string;
    model: string;
    chassis?: string | null;
    vehicle_type: VehicleType;
    license_plate?: string | null;
    color?: string | null;
    created_at: string;
    target_concession?: Concession;
    target_concession_id?: string;
};
/**
 * =========================
 * TRIPS
 * =========================
 */
export type Trip = {
    id: string;
    organization_id: string;
    transporter_id: string;
    driver_first_name: string;
    driver_last_name: string;
    departure_concession_id: string;
    arrival_concession_id: string;
    departure_concession?: Concession;
    arrival_concession?: Concession;
    capacity: number;
    trip_date: string;
    status: TripsStatus;
    created_at: string;
};
export type TripAssignment = {
    id: string;
    organization_id: string;
    trip_id: string;
    convoy_request_id: string;
    created_at: string;
};
