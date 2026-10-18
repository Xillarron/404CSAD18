---
description: "Create cross-platform GitHub Actions CI with dedicated Bash and Windows batch runner scripts."
agent: build-engineer
---

# Create cross-platform GitHub Actions CI

Follow the [github-actions skill](../skills/github-actions/SKILL.md). Inspect
existing workflows, scripts, npm scripts, and lock files first. Preserve
unrelated workflow configuration and user changes.

Create or update `scripts/ci.sh` to stop on the first failure and execute, in
order:

```sh
npm ci
npm run build
npm test
```

Create or update `scripts/ci.bat` to execute the same commands in the same
order, stopping and returning a nonzero exit code on any failure.

Create or update `.github/workflows/ci.yml` with a matrix containing exactly
`ubuntu-latest`, `windows-latest`, and `macos-latest`. Check out the repository
and set up Node.js. The workflow must invoke the created scripts:

- On Ubuntu and macOS, run `bash scripts/ci.sh`.
- On Windows, use the `cmd` shell to run `scripts\ci.bat`.

Do not inline or duplicate the npm build/test commands in the workflow instead
of calling these runner scripts. Confirm `package-lock.json` is available for
`npm ci`; report if this prerequisite is missing rather than claiming the
workflow is ready. Validate the matrix, platform-to-script mapping, and
available local checks. Hosted matrix results can only be reported after the
workflow actually runs on GitHub Actions.

Do not delete files, overwrite unrelated workflows, or run destructive Git
commands.
