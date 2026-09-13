#!/usr/bin/env node

import { patch } from "./patch/index.js";
import { pr } from "./pr/index.js";
import { scan } from "./scan/index.js";
import { verify } from "./verify/index.js";

const COMMANDS = new Set(["scan", "patch", "verify", "pr"]);

function printHelp(): void {
  process.stdout.write(`Usage: riparo <command> [options]

Commands:
  scan     Scan npm dependencies for advisories (planned)
  patch    Propose and apply the smallest viable fix (planned)
  verify   Verify the change with no-mistakes (planned)
  pr       Open a focused security PR (planned)

Options:
  --dry-run   Preview without mutating package.json, lockfiles, git, or remotes
  --help      Show this help

The CLI is not published yet. Commands are stubs.
`);
}

export function run(argv: string[]): number {
  const args = argv.slice(2);
  if (args.includes("--help") || args.includes("-h") || args.length === 0) {
    printHelp();
    return 0;
  }

  const command = args.find((arg) => !arg.startsWith("-"));
  if (command === undefined) {
    printHelp();
    return 1;
  }

  if (!COMMANDS.has(command)) {
    process.stderr.write(`Unknown command: ${command}\n`);
    printHelp();
    return 1;
  }

  const dryRun = args.includes("--dry-run");

  switch (command) {
    case "scan":
      scan({ dryRun });
      break;
    case "patch":
      patch({ dryRun });
      break;
    case "verify":
      verify({ dryRun });
      break;
    case "pr":
      pr({ dryRun });
      break;
    default:
      process.stderr.write(`Unknown command: ${command}\n`);
      printHelp();
      return 1;
  }

  process.stdout.write("not implemented\n");
  return 0;
}

function main(): void {
  const code = run(process.argv);
  process.exit(code);
}

main();
