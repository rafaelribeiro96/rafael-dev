# Testing Infrastructure

**Analyzed:** 2026-06-19

## Test Frameworks

**Unit/Integration:** none found in `package.json`.
**E2E:** none found.
**Coverage:** none found.
**Static validation:** `npm run lint` runs `next lint`.

## Test Organization

No test files were found with `rg --files -g '*test*' -g '*spec*'`.

## Existing Quality Gates

| Gate Level | When to Use | Command |
| ---------- | ----------- | ------- |
| Lint | Any JavaScript/React change | `npm run lint` |
| Build | Before deploy or after data/API changes | `npm run build` |
| Dev smoke | Manual UI/admin validation | `npm run dev` |

## Recommended Coverage Matrix

| Code Layer | Required Test Type | Location Pattern | Run Command |
| ---------- | ------------------ | ---------------- | ----------- |
| `src/lib/auth.js` | Unit | `src/lib/*.test.js` | Not configured |
| `src/lib/content.js` | Unit/integration with temp fixture content | `src/lib/*.test.js` | Not configured |
| `src/lib/github.js` | Unit with mocked `fetch` | `src/lib/*.test.js` | Not configured |
| `src/pages/api/content/*` | API integration with mocked session and storage | `src/pages/api/**/*.test.js` | Not configured |
| Admin UI components | Component tests | `src/components/Admin/*.test.jsx` | Not configured |
| Public homepage | E2E smoke | `tests/e2e/*.spec.*` | Not configured |

## Parallelism Assessment

| Test Type | Parallel-Safe? | Isolation Model | Evidence |
| --------- | -------------- | --------------- | -------- |
| Current lint | Yes | Static analysis only | `next lint` |
| Future API tests using real `content/` | No by default | Shared filesystem JSON | API routes write directly to `content/` locally |
| Future unit tests with mocks/fixtures | Yes | Isolated temp dirs and mocked fetch | Requires test harness setup |

## Notes

- Behavior-changing work should at least run `npm run lint` and `npm run build`.
- Before adding large CMS/API changes, add a test runner such as Vitest or Jest.
- API route tests should not mutate real `content/` unless they create and clean isolated fixtures.
