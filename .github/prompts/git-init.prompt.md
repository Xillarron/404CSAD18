---
description: "Check Git repository status and safely create or update .gitignore for common generated files."
agent: build-engineer
---

# Git repository preparation

Inspect the current repository state before making changes:

1. Run `git rev-parse --show-toplevel` and `git status --short`. If this is not
   a Git repository, report that fact; do not initialize a repository unless
   the user explicitly asks.
2. Inspect the existing `.gitignore`, if present. Create it if missing, or
   update it while preserving all existing entries and comments.
3. Ensure these exact ignore patterns are present, adding only missing
   entries:

   ```gitignore
   node_modules/
   dist/
   *.log
   .DS_Store
   ```

4. Do not remove files, stage changes, commit, or alter Git history.
5. Run `git status --short` and report the repository state and any changes
   made to `.gitignore`.

The operation must be idempotent: rerunning it must not duplicate patterns or
change an already-correct `.gitignore`.
