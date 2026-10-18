---
description: "Orchestrate the complete project initialization lifecycle: Git ignore setup, TypeScript scaffold, Vitest build, CI workflow, and read-only validation."
agent: build-engineer
---

# Initialize the project

Run the full project setup lifecycle in the exact order below. Treat each
linked prompt as the procedure for its stage and carry its actual results and
changed-file list into the next stage:

1. [git-init](./git-init.prompt.md)
2. [create-project](./create-project.prompt.md)
3. [create-build](./create-build.prompt.md)
4. [create-actions](./create-actions.prompt.md)
5. [check](./check.prompt.md)

Execute each stage's instructions as part of this orchestration; do not stop
after merely listing the prompts or asking the user to invoke them separately.
Before each stage, inspect its preconditions and current files. Respect the
referenced skills, preserve compatible existing work, and make changes
idempotently: rerunning initialization should not duplicate ignore patterns or
scripts, replace unrelated configuration, or introduce unnecessary changes.

Stop immediately if any stage encounters an error, a conflicting user change,
or a missing prerequisite that prevents safe continuation. Do not start later
stages after a failed stage. Report the stage, action/command, error and
relevant diagnostics, completed earlier stages, and the remaining stages not
run. Do not report validation or hosted CI as successful unless their checks
actually completed successfully.

When all stages complete, report the resulting files, commands actually run,
validation results, and any checks that remain unavailable.
