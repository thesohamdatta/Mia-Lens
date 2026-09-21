# Mia Lens

Mia Lens is a local-first project intelligence cockpit inspired by the engineering workflow and state model of MIA.

It visualizes project health, workflow state, recent events, learnings, checkpoints, and the next recommended action without requiring API keys or a backend service.

> Companion/demo product inspired by MIA. It is not the Mia CLI itself.

## Stack

- Bun
- TypeScript
- Vite
- Vanilla TypeScript + CSS
- Bun test

## Run

```bash
bun install
bun run dev
```

## Verify

```bash
bun test
bun run typecheck
bun run build
```

## Data

The app ships with deterministic sample data. Use **Import events.jsonl** to load a local MIA-style event stream in the browser. No data is uploaded.

## Workflow

```text
intent → grill → plan → execute → review → ship → learn
```

## Relation to MIA

Mia Lens follows MIA's local-first philosophy and its append-only JSONL event model while presenting that state as a visual product.
