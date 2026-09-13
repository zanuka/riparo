import type { ScanResult } from "../index.js";

export function scan(_options?: { dryRun?: boolean }): ScanResult {
  return { ok: false, reason: "not-implemented" };
}
