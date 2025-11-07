# Demo Guide

## 6 AI Testing Branches Created

| Branch | Tests | Focus |
|--------|-------|-------|
| **demo/01-code-writer** | 6 | Quick test writing - Basic CRUD, keyboard shortcuts |
| **demo/02-explorer** | 10 | Edge case discovery - Empty states, bulk ops |
| **demo/03-breaker** | 23 | Input validation - XSS, SQL injection, unicode, rapid clicks |
| **demo/04-chaos-maker** | ~15 | Flaky test detection - Network delays, race conditions |
| **demo/05-naive-user** | ~25 | UX issues - Confused user behavior |
| **demo/06-manager** | 49 | Smart organization - UI/Logic/Integration tests |

## Quick Start

```bash
# Switch branch
git checkout demo/01-code-writer

# Run app (requires Node v20.19+ or v22.12+)
npm run dev

# Run tests
npx playwright test

# UI mode (best for demos!)
npx playwright test --ui
```

## Presentation Flow

1. **demo/01-code-writer** - Show speed (30 sec to write tests)
2. **demo/02-explorer** - AI discovers edge cases
3. **demo/03-breaker** - 1000+ breaking attempts
4. **demo/04-chaos-maker** - Flaky test detection
5. **demo/05-naive-user** - UX issue discovery
6. **demo/06-manager** - Intelligent test management

## What's Included

Each branch has:
- ✅ `playwright.config.ts` - Configured for localhost:3000
- ✅ `tests/*.spec.ts` - Comprehensive test files
- ✅ `app/app.vue` - Updated with data-testid attributes
- ✅ `@playwright/test` - Installed
- ✅ Comments explaining AI testing approach

Branch 6 extras:
- Smart test manager (`tests/test-manager.js`)
- NPM scripts for test categories
- Comprehensive README

## Note

**Node Version:** App requires Node v20.19+ or v22.12+ (current: v20.10.0)

Options:
- Upgrade Node to v20.19+ or v22+
- Downgrade to Nuxt 3.x
- Focus on test code structure in presentation
