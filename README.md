# Riparo

**The shelter that notices a breach and mends it.**

Riparo (Italian for shelter / “I repair”): watch npm dependencies for security holes, apply the smallest safe fix, prove it, then open a reviewable PR.

## Goal

Monitor security vulnerabilities in a project’s npm dependencies, apply patches automatically, verify the patch with [no-mistakes](https://github.com/kunchenguid/no-mistakes), then open a Dependabot-style pull request for the security fix.

[![License: MIT (planned)](https://img.shields.io/badge/License-MIT%20(planned)-lightgrey.svg)]()
[![Status: Early](https://img.shields.io/badge/Status-Early%20%2F%20Public-orange)]()

---

## The Problem

npm advisories pile up while lockfiles stay unpatched.

Dependabot-style bots open a flood of PRs that are noisy, incomplete, or break the build.

A bump that “fixes” the advisory but fails tests is not a fix.

Teams still choose between ignoring the hole, merging blindly, or doing the same careful patch-and-prove work by hand every time.

## The Vision

Riparo is the **shelter** in the same Italian-named tool family as Nocciolo (kernel / company-brain config), Strumentario (instrument tray), and Maglio (forging hammer).

It watches lockfiles and manifests, applies the minimal safe bump or patch, proves the change with no-mistakes, and opens a focused PR a human can review.

Nocciolo supplies durable context; Strumentario instruments the work; Maglio forges the factory.
Riparo notices the breach and mends it.

## What Riparo Does

- **Scan** npm dependencies against published advisories (**planned**; npm audit / OSV / GitHub Advisory are sources to consider later)
- **Propose and apply** the smallest viable fix: a version bump or a patch (**planned**)
- **Verify** the change with [no-mistakes](https://github.com/kunchenguid/no-mistakes) before anything reaches the real remote (**planned**)
- **Open** a focused security PR, Dependabot-style (**planned**)
- **Stay local-first and explicit**: dry-run by default until configured otherwise (**planned**)

The CLI today is a stub: known commands print `not implemented` and do not scan, mutate, or open PRs.

## Quick Start

The CLI is **not published yet**.
This is a sketch of the intended surface, not a working workflow.

From a Riparo clone after `pnpm install && pnpm build`:

```bash
pnpm riparo scan --dry-run
pnpm riparo patch --dry-run
pnpm riparo verify   # no-mistakes gate
pnpm riparo pr
```

Requires Node.js 20+.
`pnpm riparo --help` prints usage.
Commands other than `--help` currently exit 0 with `not implemented`.

## Core Principles

- **Durable over noisy**: one focused security change beats a stack of advisory tickets
- **Smallest safe change**: prefer the minimal bump or patch that closes the hole
- **Verify before publish**: no-mistakes is the gate that the patch worked and the PR is clean
- **Human-reviewable PRs**: Dependabot-style, scoped, and meant to be read
- **Local control**: dry-run by default; you decide when anything mutates or leaves the machine
- **No secret leakage**: never commit tokens, audit dumps, or `.env` files

## Status

Riparo is in the earliest public stage.
We are building in the open.

This repository is a TypeScript + Vite library/CLI scaffold.
Scan, patch, verify, and PR behavior are not implemented yet.

## Author

Created by [zanuka](https://github.com/zanuka) (Michael Delucchi)

## License

Copyright © 2026 Michael Delucchi.
MIT license planned.
