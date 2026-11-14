# Project & Agent Instructions

## Toolchain & Verification
- **Project Type & Stack:** Static browser JavaScript/HTML/CSS indexed-image editor targeting TRS-80 Color Computer 3 assets; ES modules bundled with esbuild (IIFE); Bootstrap 5.
- **Build & Test Command:** `npx esbuild js/app.js --bundle --format=iife --platform=browser --outfile=js/bundle.js`
- **Runtime Verification:** Open `index.html` in a browser (including `file://`); verify editor startup, tools, disk import and exports. No automated test suite or package manifest exists.
- **Emulator Verification:** For CoCo binaries, test changes in `xroar-dev` (`~/.xroar`) before marking a task complete.
- **CoCo Hardware Corpus:** For any 6809/6309 assembly, GIME, VDG, SAM, PIA, BASIC, or disk work, read from `$HOME/CoCo-Skills` (pre-installed by container setup; do NOT re-clone if present). Only if missing, run `gh repo clone CarlosCamacho/CoCo-Skills "$HOME/CoCo-Skills" -- --depth 1`. Start with `coco-router/SKILL.md` and load only needed child skills.

## Standing Rules
- **CoCoSDC Required:** Every CoCo program must support CoCoSDC (and DriveWire via DSKCON) and must never hang without a disk controller, unless explicitly excluded. This applies to any future native CoCo code, not the browser app itself.
- **Hardware Discipline:** Preserve Direct Page (`DP`) state across interrupts/subroutines and strictly respect 8KB MMU bank boundaries in any native CoCo code.
- **Context Hygiene:** Keep edits focused on the assigned task; do not refactor unrelated files.
- **Bundle Discipline:** Edit `js/*.js` source modules and regenerate `js/bundle.js`; the HTML loads the bundle, not source modules.
- **Format Integrity:** Keep indexed palette, resolution, packing, DSK granule chains, and import/export behavior consistent; test with real and synthetic images.

## Mandatory Session Handoff Rule
- Before ending your session, closing out, or opening a PR, you MUST overwrite root `HANDOFF.md` (strictly under 35 lines) with:
  1. Current branch/commit status and what builds cleanly
  2. Immediate next backlog task
  3. Dead ends / failed approaches tried this session that must not be repeated
- Always include updated `HANDOFF.md` in your commit/PR.
