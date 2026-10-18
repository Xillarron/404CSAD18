---
description: "Create the minimal strict TypeScript project scaffold using the project-scaffold skill."
agent: build-engineer
---

# Create TypeScript project scaffold

Follow the [project-scaffold skill](../skills/project-scaffold/SKILL.md).
Inspect existing files before editing and preserve compatible user changes.

Ensure the project has:

- A valid `package.json` with `"type": "module"`, `"private": true`, and a
  package name corresponding to `404CSAD18`.
- A `tsconfig.json` with `"strict": true`, `"target": "ES2022"`,
  `"module": "NodeNext"`, and `"moduleResolution": "NodeNext"`. Set `"module"`
  as well as `"moduleResolution"` to `NodeNext`, since TypeScript requires
  compatible NodeNext settings.
- `src/index.ts` exporting `add(a: number, b: number): number` and
  `hello(): string`. The greeting should be `"Hello, world!"`.
- A `.gitignore` that excludes at least `node_modules/`, `dist/`, `*.log`,
  `.DS_Store`, and `.env`, while preserving existing entries.

**Package-name constraint:** npm package names must be lowercase. Use
`"name": "404csad18"` rather than the invalid uppercase `"404CSAD18"` so the
manifest remains valid for npm. Preserve the project identifier's spelling
elsewhere in documentation.

Validate JSON syntax and the TypeScript configuration when tooling is
available. Report conflicts, invalid existing configuration, and any
validation that could not be run. Do not delete files or run destructive Git
commands.
