import type { Role } from "@/lib/types";

export type NavItem = {
    label: string;
    href: string;
    key: string;
};

type NavConfig = Record<Role, NavItem[] | null>;

const transporterNav: NavItem[] = [
    { label: "Dashboard Convoyeur", href: "/dashboard-transport", key: "transporter" },
    { label: "Dashboard Dispatcher", href: "/dashboard-dispatch", key: "dispatch" },
];

const adminNav: NavItem[] = [
    ...transporterNav,
    { label: "Dashboard Admin", href: "/dashboard-admin", key: "admin" },
    { label: "Dashboard Vendeur", href: "/dashboard-seller", key: "seller" },
];

export const navConfig: NavConfig = {
    admin: adminNav,
    transporter: transporterNav,
    seller: null,
    manager_vo: null,
    manager_vn: null,
};
