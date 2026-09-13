import { describe, expect, it } from "vitest";
import { version as packageVersion } from "../package.json";
import { scan, version } from "./index.js";

describe("riparo", () => {
  it("exports a version string and a quiet scan stub", () => {
    expect(version).toBe(packageVersion);
    expect(scan({ dryRun: true })).toEqual({
      ok: false,
      reason: "not-implemented",
    });
  });
});
