import {CONVOY_STATUS, ConvoyStatus} from "./convoy-status";
import {TripsStatus} from "./trips-status";
import {LocalizationStatus} from "./loc-status";


/**
 * =========================
 * CONVOY
 * =========================
 */

export type Concession = {
    id: string;
    name: string;
};

export type ConvoyRequest = {
    id: string;
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

export type ConvoyCreateModalProps = {
    firstName: string;
    lastName: string;

    brand: string;
    setBrand: React.Dispatch<React.SetStateAction<string>>;

    model: string;
    setModel: React.Dispatch<React.SetStateAction<string>>;

    chassis: string;
    setChassis: React.Dispatch<React.SetStateAction<string>>;

    licensePlate: string;
    setLicensePlate: React.Dispatch<React.SetStateAction<string>>;

    color: string;
    setColor: React.Dispatch<React.SetStateAction<string>>;

    vehicleType: VehicleType | "";
    setVehicleType: React.Dispatch<React.SetStateAction<VehicleType | "">>;

    departureConcessionId: string;
    setDepartureConcessionId: React.Dispatch<React.SetStateAction<string>>;

    arrivalConcessionId: string;
    setArrivalConcessionId: React.Dispatch<React.SetStateAction<string>>;

    requestedArrivalDate: string;
    setRequestedArrivalDate: React.Dispatch<React.SetStateAction<string>>;

    concessions: Concession[];

    statusMessage: string;

    onClose: () => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type ConvoyDetailsModalProps = {
    request: ConvoyRequest;
    onClose: () => void;
    onConfirm: (
        requestId: string,
        status: typeof CONVOY_STATUS.COMPLETED | typeof CONVOY_STATUS.INCOMPLETE
    ) => void;
};


/**
 * =========================
 * USER / ROLE
 * =========================
 */

export type Role =
    | "seller"
    | "manager_vo"
    | "manager_vn"
    | "transporter"
    | "admin";

export type User = {
    id: string;
    email: string;
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

export type LocalizationCreateModalProps = {
    vehicleType: VehicleType | "";
    setVehicleType: React.Dispatch<React.SetStateAction<VehicleType | "">>;

    brand: string;
    setBrand: React.Dispatch<React.SetStateAction<string>>;

    model: string;
    setModel: React.Dispatch<React.SetStateAction<string>>;

    chassis: string;
    setChassis: React.Dispatch<React.SetStateAction<string>>;

    color: string;
    setColor: React.Dispatch<React.SetStateAction<string>>;

    licensePlate: string;
    setLicensePlate: React.Dispatch<React.SetStateAction<string>>;

    departureConcessionId: string;
    setDepartureConcessionId: React.Dispatch<React.SetStateAction<string>>;

    concessions: Concession[];

    onClose: () => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type LocalizationDetailsModalProps = {
    localization: LocalizationItem;
    onClose: () => void;
    onRespond?: (responseId: string, response: "yes" | "no") => void;
    onCreateConvoy?: (loc: LocalizationItem) => void;
};


/**
 * =========================
 * TRIPS
 * =========================
 */

export type Trip = {
    id: string;

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
    trip_id: string;
    convoy_request_id: string;
    created_at: string;
};

export type TripCreateModalProps = {
    driverFirstName: string;
    setDriverFirstName: React.Dispatch<React.SetStateAction<string>>;

    driverLastName: string;
    setDriverLastName: React.Dispatch<React.SetStateAction<string>>;

    departureConcessionId: string;
    setDepartureConcessionId: React.Dispatch<React.SetStateAction<string>>;

    arrivalConcessionId: string;
    setArrivalConcessionId: React.Dispatch<React.SetStateAction<string>>;

    capacity: number;
    setCapacity: React.Dispatch<React.SetStateAction<number>>;

    tripDate: string;
    setTripDate: React.Dispatch<React.SetStateAction<string>>;

    concessions: Concession[];

    statusMessage: string;

    onClose: () => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
