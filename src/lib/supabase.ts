/**
 * Supabase client initialization for web
 */

import { initSupabase, type TypedSupabaseClient } from "@shram-sewa/shared/api";

let supabaseClient: TypedSupabaseClient | null = null;

function isSupabaseEnabled(): boolean {
  const raw = import.meta.env.PUBLIC_ENABLE_SUPABASE;

  if (typeof raw !== "string") {
    // Default to enabled in production builds. Explicitly set false to opt out.
    return true;
  }

  const value = raw.trim().toLowerCase();
  if (!value) {
    return true;
  }

  return !["false", "0", "off", "no"].includes(value);
}

function getSupabaseAnonKey(): string | undefined {
  return (
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY ||
    import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY
  );
}

/**
 * Initialize and get Supabase client
 * Call once at app startup
 */
export function getSupabaseClient(): TypedSupabaseClient {
  if (!isSupabaseEnabled()) {
    throw new Error(
      import.meta.env.DEV
        ? "Backend access is disabled. Set PUBLIC_ENABLE_SUPABASE=true to enable backend calls."
        : "Service is temporarily unavailable.",
    );
  }

  if (!supabaseClient) {
    const url = import.meta.env.PUBLIC_SUPABASE_URL;
    const anonKey = getSupabaseAnonKey();

    if (!url || !anonKey) {
      throw new Error(
        import.meta.env.DEV
          ? "Missing backend environment variables. Add PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY (or PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY)."
          : "Service is temporarily unavailable.",
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
    import.meta.env.PUBLIC_SUPABASE_URL &&
    getSupabaseAnonKey()
  );
}
