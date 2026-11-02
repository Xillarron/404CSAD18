# 404CSAD18 — build-engineer

## Дані студента

- **ПІБ:** Плювак Назарій
- **Група:** КІ-404
- **Варіант:** 6 — TypeScript, npm scripts, Vitest

## Про проєкт

`build-engineer` — агент-оркестратор для автоматизації типових задач розробки
TypeScript-проєкту: підготовки структури, запуску збірки й тестів, а також
перевірки GitHub Actions. Агент передає результати кожного етапу наступному,
перевіряє помилки й підсумовує виконану роботу.

### Skills

- `project-scaffold` — аналіз і створення структури проєкту.
- `build-and-test` — запуск збірки, перевірок TypeScript і тестів Vitest.
- `github-actions` — перегляд конфігурацій і результатів GitHub Actions.

### Команди

Команди проєкту:

- `npm ci` — встановити зафіксовані залежності з `package-lock.json`.
- `npm run build` — зібрати TypeScript-проєкт.
- `npm test` — одноразово запустити тести Vitest.
- `npm run typecheck` і `npm run lint` — виконати перевірки, якщо ці scripts
  налаштовані в `package.json`.

Для перегляду GitHub Actions через GitHub CLI:

- `gh workflow list` — перелік workflows.
- `gh run list` — останні запуски.
- `gh run view <run-id> --log` — журнал вибраного запуску.

TypeScript-проєкт, npm scripts, Vitest тести та GitHub Actions workflow
ініціалізовані. Щоб відтворити CI локально, запустіть `bash scripts/ci.sh`
на Linux/macOS або `scripts\ci.bat` у Windows.

## Запуск

Див. [інструкцію запуску та взаємодії етапів](docs/architecture.md#запуск).
Команди Copilot Chat і ручний запуск описані в [docs/usage.md](docs/usage.md).
