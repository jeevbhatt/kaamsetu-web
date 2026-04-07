/**
 * Supabase client initialization for web
 */

import { initSupabase, type TypedSupabaseClient } from "@shram-sewa/shared/api";

let supabaseClient: TypedSupabaseClient | null = null;

function isSupabaseEnabled(): boolean {
  return import.meta.env.VITE_ENABLE_SUPABASE === "true";
}

function getSupabaseAnonKey(): string | undefined {
  return (
    import.meta.env.VITE_SUPABASE_ANON_KEY ||
    import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY
  );
}

/**
 * Initialize and get Supabase client
 * Call once at app startup
 */
export function getSupabaseClient(): TypedSupabaseClient {
  if (!isSupabaseEnabled()) {
    throw new Error(
      "Supabase access is disabled. Set VITE_ENABLE_SUPABASE=true to enable backend calls.",
    );
  }

  if (!supabaseClient) {
    const url = import.meta.env.VITE_SUPABASE_URL;
    const anonKey = getSupabaseAnonKey();

    if (!url || !anonKey) {
      throw new Error(
        "Missing Supabase environment variables. " +
          "Create a .env.local file with VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (or VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY)",
      );
    }

    supabaseClient = initSupabase({
      url,
      anonKey,
      options: {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
        },
      },
    });
  }

  return supabaseClient;
}

/**
 * Helper to check if Supabase is configured
 */
export function isSupabaseConfigured(): boolean {
  return !!(
    isSupabaseEnabled() &&
    import.meta.env.VITE_SUPABASE_URL &&
    getSupabaseAnonKey()
  );
}
