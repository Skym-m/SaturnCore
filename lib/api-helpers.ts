import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { User } from "@supabase/supabase-js";
import { createSupabaseServerClient } from "@/lib/server-client";
import type { Role } from "@/lib/types";

type AuthProfile = {
    user_id: string;
    role: Role;
    concession_id: string | null;
};

function getRequiredEnvVar(name: string): string {
    const value = process.env[name];

    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }

    return value;
}

export function createSupabaseAdminClient(): SupabaseClient {
    return createClient(
        getRequiredEnvVar("NEXT_PUBLIC_SUPABASE_URL"),
        getRequiredEnvVar("SUPABASE_SERVICE_ROLE_KEY"),
    );
}

export async function getAuthenticatedUser(): Promise<User> {
    const supabase = await createSupabaseServerClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        throw new Error("UNAUTHENTICATED");
    }

    return user;
}

export async function getAuthenticatedProfile(): Promise<AuthProfile> {
    const user = await getAuthenticatedUser();
    const supabase = await createSupabaseServerClient();

    const { data: profile, error } = await supabase
        .from("profiles")
        .select("user_id, role, concession_id")
        .eq("user_id", user.id)
        .single();

    if (error || !profile) {
        throw new Error("PROFILE_NOT_FOUND");
    }

    return profile as AuthProfile;
}

export async function assertRole(allowedRoles: Role[]): Promise<AuthProfile> {
    const profile = await getAuthenticatedProfile();

    if (!allowedRoles.includes(profile.role)) {
        throw new Error("FORBIDDEN");
    }

    return profile;
}

export async function parseJsonBody<T>(req: Request): Promise<T> {
    try {
        return (await req.json()) as T;
    } catch {
        throw new Error("INVALID_JSON");
    }
}

export function toErrorResponse(error: unknown): Response {
    if (!(error instanceof Error)) {
        return Response.json({ error: "Erreur serveur" }, { status: 500 });
    }

    switch (error.message) {
        case "UNAUTHENTICATED":
            return Response.json({ error: "Not authenticated" }, { status: 401 });
        case "FORBIDDEN":
            return Response.json({ error: "Forbidden" }, { status: 403 });
        case "PROFILE_NOT_FOUND":
            return Response.json({ error: "Profile missing for authenticated user" }, { status: 500 });
        case "INVALID_JSON":
            return Response.json({ error: "Payload JSON invalide" }, { status: 400 });
        default:
            return Response.json({ error: "Erreur serveur" }, { status: 500 });
    }
}
