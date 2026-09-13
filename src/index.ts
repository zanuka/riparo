import packageJson from "../package.json" with { type: "json" };

export const version: string = packageJson.version;

export interface ScanResult {
  ok: boolean;
  reason?: string;
}

export interface PatchPlan {
  ok: boolean;
  reason?: string;
}

export interface VerifyResult {
  ok: boolean;
  reason?: string;
}

export { patch } from "./patch/index.js";
export { pr } from "./pr/index.js";
export { scan } from "./scan/index.js";
export { verify } from "./verify/index.js";

