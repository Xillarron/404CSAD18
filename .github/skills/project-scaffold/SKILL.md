---
name: project-scaffold
description: "Create or validate a safe TypeScript project scaffold. Use when initializing project files, generating package.json, configuring strict TypeScript, adding src/index.ts, or setting up .gitignore."
---

# Project Scaffold

Prepare a minimal TypeScript project structure while preserving existing user
files and configuration.

## Inputs

- The user's project purpose and requested structure.
- The repository's current files, package manager, runtime constraints, and
  existing configuration.
- Any requested module format or project conventions.

## Procedure

1. Inspect the repository root and any existing `package.json`, lock files,
   `tsconfig.json`, `src/`, and `.gitignore`.
2. Create only missing files. Before changing an existing file, inspect it and
   preserve its dependencies, scripts, and settings. Do not replace a
   conflicting file blindly.
3. If no manifest exists, create a minimal `package.json` with a suitable
   package name, `"private": true`, and `"type": "module"`. Do not invent
   dependencies or unrelated scripts; the build-and-test skill configures
   those.
4. If no TypeScript configuration exists, create `tsconfig.json` with
   `"compilerOptions": { "strict": true }` and appropriate ES module settings.
   Include `src` as the source directory and exclude generated output and
   dependencies.
5. If absent, create `src/index.ts` as the source entry point. Keep it minimal;
   the build-and-test skill can add the `add` and `hello` exports needed by its
   tests.
6. If absent, create `.gitignore` entries for at least `node_modules/`,
   `dist/`, and `.env`. Do not ignore the package lock file.
7. Validate that generated JSON parses, TypeScript configuration is coherent,
   and the expected files exist. If dependencies are already installed and a
   build script is available, run it; otherwise report that build validation
   requires the build-and-test setup.

## Validation and errors

- Report invalid JSON, incompatible existing settings, missing prerequisites,
  and command failures explicitly.
- Do not claim validation succeeded unless it was performed.
- Do not delete files or run destructive Git commands. Preserve existing files;
  if safe integration is unclear, stop and describe the conflict instead of
  overwriting it.
