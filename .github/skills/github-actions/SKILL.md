---
name: github-actions
description: "Create or validate GitHub Actions CI workflows with an Ubuntu, Windows, and macOS matrix and platform-specific npm scripts. Use when generating ci.yml or configuring cross-platform CI."
---

# GitHub Actions

Create a cross-platform CI workflow for the TypeScript npm build and Vitest
tests. The workflow must invoke separate shell and batch scripts on the
appropriate runners.

## Inputs

- The repository's `package.json`, npm scripts, and lock file.
- Existing `.github/workflows/` files and `scripts/` files.
- The requested Node.js version and CI triggers, if specified.

## Procedure

1. Inspect existing workflows and scripts. Preserve existing triggers,
   permissions, and jobs that are outside the requested change.
2. Create or update `.github/workflows/ci.yml` with a job matrix of exactly
   `ubuntu-latest`, `windows-latest`, and `macos-latest`.
3. Check out the repository and set up Node.js using the lock file's supported
   version or the version specified by the user.
4. Make the workflow call the platform-specific CI script:
   - Ubuntu and macOS: `bash scripts/ci.sh`.
   - Windows: `scripts\ci.bat` using the Windows command shell.
5. Create each script if missing; do not leave the workflow pointing to
   nonexistent files:
   - `scripts/ci.sh` should stop on errors, run `npm ci`, `npm run build`, and
     `npm test`.
   - `scripts/ci.bat` should stop on errors and run the same three npm
     commands, returning a nonzero exit code if any command fails.
6. Ensure `package-lock.json` exists for `npm ci`. If it does not, report that
   prerequisite and use an appropriate non-destructive setup step only when
   authorized; do not make CI fail silently or substitute a false success.
7. Validate the workflow structure, matrix entries, script paths, and platform
   command selection. Run locally available checks for the shell script and
   npm commands when possible; state clearly that hosted matrix runs require
   GitHub Actions.

## Validation and errors

- Report invalid workflow configuration, absent scripts, missing lock files,
  and failed commands explicitly.
- Do not claim the remote matrix passed unless the workflow actually ran and
  its result was observed.
- Do not delete or overwrite unrelated workflow files. Preserve user changes
  and stop if a safe integration cannot be determined.
