# Current Baton Pass
- **Current State:** `main` at `a046cd7` before handoff setup; Kroma Paint v1.0.8 is a static browser JS editor whose `index.html` loads `js/bundle.js`. Recent commits added four screenshots and README links; code has not changed in those commits. Automated tests are absent; build and runtime verification have not been executed in this handoff.
- **Immediate Next Step:**
  - Prioritize MGE/DSK importer compatibility and validation, including real MGE samples, RLE edge cases, file-size checks and disk-directory robustness; assign the highest-priority Issue number after issue audit.
  - Rebuild bundle after source changes and smoke-test local `index.html`.
- **Dead Ends / Do Not Repeat:** No `claude.md`/`CLAUDE.md` found on any of the three branches; do not attempt deletion without rechecking. Do not treat viewer executables (`.BIN`) as embedded MGE pictures. Prior synthetic MGE tests were not proof of full Color Max 3 compatibility.
- **Verification:** Run `npx esbuild js/app.js --bundle --format=iife --platform=browser --outfile=js/bundle.js` and confirm zero errors before committing; smoke-test the browser app.
