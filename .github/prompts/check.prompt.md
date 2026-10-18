---
description: "Validate the required TypeScript, npm, Vitest, and CI files without editing project files."
agent: build-engineer
---

# Validate project (read-only)

This is a validation-only command. Do not create, edit, delete, format, stage,
or commit project files. Capture `git status --short` before and after checks
and report any status change; do not remove generated files as cleanup.

1. Verify that the required files exist:
   - `package.json`, `tsconfig.json`, `.gitignore`
   - `src/index.ts`, `tests/index.test.ts`
   - `scripts/ci.sh`, `scripts/ci.bat`
   - `.github/workflows/ci.yml`
2. Validate `package.json` as JSON. Parse `tsconfig.json` with the TypeScript
   configuration parser (for example, `npx tsc --showConfig --pretty false`),
   since TypeScript configuration permits JSONC syntax. Report missing tooling
   rather than installing dependencies.
3. Validate `ci.yml` with an installed YAML or GitHub Actions validator if
   available. Also inspect that it has the exact runner matrix
   `ubuntu-latest`, `windows-latest`, `macos-latest` and invokes
   `scripts/ci.sh` on Ubuntu/macOS and `scripts\ci.bat` on Windows. If no
   validator is installed, report the structural checks separately and do not
   claim formal YAML validation.
4. If dependencies are installed and the scripts exist, run the build without
   emitting generated output using `npm run build -- --noEmit`. Report this
   clearly as a no-emit TypeScript build check. Do not run the CI wrapper
   scripts because they can reinstall packages or generate build artifacts.
5. If Vitest is installed and `npm test` exists, run `npm test`. Report the
   actual exit status and test results. Do not install missing packages.
6. Summarize every required file, syntax/configuration check, build check, test,
   workflow check, and unavailable prerequisite as pass, fail, or not run.

If a check fails, report its command and diagnostic output. Do not modify the
project to fix failures; use the relevant creation prompt separately.
