"use client";

import { getSupabaseBrowserClient } from "@/lib/browser-client";

export async function signout() {
    const supabase = getSupabaseBrowserClient();
    await supabase.auth.signOut();
    location.reload();
}