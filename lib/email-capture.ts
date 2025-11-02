// Fire-and-forget email capture; never blocks UI
export function captureEmail(email: string, source: string, packageType?: string) {
  const payload = JSON.stringify({ email, source, packageType });

  try {
    // Prefer sendBeacon when available for background delivery
    if (typeof navigator !== 'undefined' && 'sendBeacon' in navigator) {
      const blob = new Blob([payload], { type: 'application/json' });
      (navigator as any).sendBeacon('/api/email-capture', blob);
      return { ok: true };
    }
  } catch (err) {
    // fall back to fetch
  }

  // Fallback: non-blocking fetch (no await)
  try {
    void fetch('/api/email-capture', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload,
      keepalive: true,
    }).catch(() => {});
  } catch (_) {}

  return { ok: true };
}

// Email validation function
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
