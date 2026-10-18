---
description: "Configure npm build and Vitest test scripts and add tests for add and hello."
agent: build-engineer
---

# Configure TypeScript build and Vitest

Follow the [build-and-test skill](../skills/build-and-test/SKILL.md). Inspect
and preserve the existing `package.json`, lock file, source files, and tests.

1. Add `typescript` and `vitest` to `devDependencies`. Use the package manager
   represented by the existing lock file; if there is no lock file, report
   that before installing and use npm only when appropriate.
2. Add or update these scripts without discarding unrelated scripts:

   ```json
   {
     "build": "tsc",
     "test": "vitest run"
   }
   ```

3. Ensure `src/index.ts` exports `add(a: number, b: number): number` and
   `hello(): string`, where `hello()` returns `"Hello, world!"`. Preserve
   existing exports.
4. Create or extend `tests/index.test.ts` with Vitest tests that assert
   `add(2, 3)` equals `5` and `hello()` equals `"Hello, world!"`. Preserve
   existing coverage.
5. Run `npm run build` and `npm test`; report each command's result and
   relevant diagnostics. Fix failures caused by these changes.

Do not claim success for commands that were not run. Do not delete files or
run destructive Git commands.
