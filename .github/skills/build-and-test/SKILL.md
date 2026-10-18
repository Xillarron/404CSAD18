---
name: build-and-test
description: "Configure and validate TypeScript npm build scripts and Vitest tests. Use when adding TypeScript or Vitest devDependencies, setting up build/test scripts, or testing add and hello functions."
---

# Build and Test

Configure an npm-based TypeScript build and Vitest test workflow, preserving
existing dependencies and scripts.

## Inputs

- The scaffolded project, especially `package.json`, `tsconfig.json`, and
  `src/index.ts`.
- Existing npm lock file, scripts, dependencies, and test conventions.
- The requested functions and expected behavior.

## Procedure

1. Inspect the manifest, lock file, TypeScript source, tests, and existing test
   configuration. Preserve existing settings and avoid replacing unrelated
   scripts.
2. Add `typescript` and `vitest` as development dependencies using
   `npm install --save-dev typescript vitest`. Preserve and update the npm lock
   file; do not install packages if the user has asked for documentation-only
   changes.
3. Configure the `build` script as `tsc` and the `test` script as
   `vitest run`. Merge these scripts with existing scripts rather than
   discarding them.
4. Ensure `src/index.ts` exports:

   - `add(a: number, b: number): number`, returning the sum.
   - `hello(): string`, returning `"Hello, world!"`.

   Preserve other exports and behavior already present.
5. Create `tests/index.test.ts` if it does not exist. It should contain Vitest
   tests that verify both functions, for example:

   ```ts
   import { describe, expect, it } from 'vitest';
   import { add, hello } from '../src/index.js';

   describe('add', () => {
     it('adds two numbers', () => {
       expect(add(2, 3)).toBe(5);
     });
   });

   describe('hello', () => {
     it('returns a greeting', () => {
       expect(hello()).toBe('Hello, world!');
     });
   });
   ```

   If tests already exist, extend them without removing existing coverage.
6. Run `npm run build` and `npm test`. Review the exit codes and output; fix
   failures caused by this change and report any remaining failures.

## Validation and errors

- Confirm both development dependencies and both npm scripts are present.
- Report dependency installation, build, or test failures explicitly, including
  the failing command and relevant diagnostics.
- Do not report a passing build or test suite unless that command completed
  successfully.
- If network access or a required package manager is unavailable, leave the
  manifest changes clear, state what could not be validated, and do not
  fabricate a successful install.
