import type { VerifyResult } from "../index.js";

export function verify(_options?: { dryRun?: boolean }): VerifyResult {
  return { ok: false, reason: "not-implemented" };
}
