import type { PatchPlan } from "../index.js";

export function patch(_options?: { dryRun?: boolean }): PatchPlan {
  return { ok: false, reason: "not-implemented" };
}
