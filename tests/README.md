# AI Smart Test Manager - Demo 06

This directory contains an intelligent test management system that demonstrates how AI can optimize test execution.

## Overview

The Smart Test Manager analyzes code changes and intelligently selects which tests to run, saving time and computational resources.

## Test Organization

Tests are organized into three categories:

### 1. UI Tests (`06-smart-manager-demo.ui.spec.ts`)
- **Focus:** Visual elements, layout, styling, responsive design
- **Speed:** Fast (~15 seconds)
- **Run when:** UI files change (`.vue`, `.css`, styling)
- **Tags:** `@ui`, `@fast`, `@visual`, `@responsive`

### 2. Logic Tests (`06-smart-manager-demo.logic.spec.ts`)
- **Focus:** Business logic, data manipulation, state management
- **Speed:** Medium (~30 seconds)
- **Run when:** Functions change (`addTask`, `deleteTask`, computed properties)
- **Tags:** `@logic`, `@critical`, `@validation`, `@counter`

### 3. Integration Tests (`06-smart-manager-demo.integration.spec.ts`)
- **Focus:** Complex workflows, state consistency, edge cases
- **Speed:** Slow (~60 seconds)
- **Run when:** Major changes, multiple files changed, pre-deployment
- **Tags:** `@integration`, `@critical`, `@state`, `@performance`, `@a11y`

## Usage

### Using NPM Scripts

```bash
# Run smart test selection (analyzes git changes)
npm run test:smart

# Run specific test categories
npm run test:ui            # UI tests only (~15s)
npm run test:logic         # Logic tests only (~30s)
npm run test:integration   # Integration tests only (~60s)

# Run by priority
npm run test:smoke         # Quick smoke tests (~5s)
npm run test:critical      # Critical tests only (~40s)
npm run test:fast          # Fast tests only (~20s)

# Run all tests
npm test

# Debug mode
npm run test:debug
npm run test:headed
```

### Using Test Manager Directly

```bash
# Analyze current git changes
node tests/test-manager.js

# Analyze specific files
node tests/test-manager.js app/app.vue
node tests/test-manager.js styles.css
node tests/test-manager.js app/app.vue package.json
```

### Using Playwright Projects

```bash
# Run only UI tests (via project config)
npx playwright test --project=ui-only

# Run only logic tests
npx playwright test --project=logic-only

# Run only integration tests
npx playwright test --project=integration-only
```

## Smart Test Selection

The AI Test Manager makes intelligent decisions:

### Example 1: CSS Changed
```
Files changed: styles.css
AI Decision: Run @ui tests only
Reason: Visual changes don't affect logic
Time saved: 105s (88%)
```

### Example 2: Logic Function Changed
```
Files changed: app/app.vue (addTask function)
AI Decision: Run @logic and @integration tests
Reason: Core functionality affected
Time saved: 15s (12%)
```

### Example 3: Test Files Changed
```
Files changed: *.spec.ts
AI Decision: Run ALL tests
Reason: Test changes require full validation
Time saved: 0s (0%)
```

## Test Tags

Tests are tagged for flexible selection:

- `@smoke` - Quick sanity checks (5s)
- `@critical` - Must-pass tests (40s)
- `@fast` - Quick tests (20s)
- `@ui` - UI component tests (15s)
- `@logic` - Business logic tests (30s)
- `@integration` - Integration tests (60s)
- `@visual` - Visual/styling tests
- `@responsive` - Responsive design tests
- `@validation` - Input validation tests
- `@counter` - Counter accuracy tests
- `@state` - State management tests
- `@performance` - Performance/stress tests
- `@a11y` - Accessibility tests
- `@edge` - Edge case tests
- `@timing` - Timing/race condition tests

## AI Optimization Features

1. **Change Analysis**
   - Analyzes git diff automatically
   - Maps file changes to test suites
   - Detects function modifications

2. **Intelligent Selection**
   - Runs only relevant tests
   - Prioritizes critical tests
   - Optimizes for speed vs coverage

3. **Time Estimation**
   - Predicts execution time
   - Shows time saved
   - Compares to full suite

4. **Reasoning Transparency**
   - Explains why tests were selected
   - Shows impact of changes
   - Provides alternative commands

## Example Output

```
╔═══════════════════════════════════════════════════════════════════╗
║         AI SMART TEST MANAGER - Intelligent Test Selection       ║
╚═══════════════════════════════════════════════════════════════════╝

Analyzing changed files:
  - app/app.vue

Recommendation: Run 2 test suite(s)
Estimated time: 90 seconds

Business Logic Tests
  Priority: HIGH
  Time: 30s
  Description: Core functionality, data manipulation, state management
  Why:
    - Function addTask modified
    - Function toggleTask modified

Integration Tests
  Priority: CRITICAL
  Time: 60s
  Description: Complex workflows, state consistency, edge cases
  Why:
    - app/app.vue changed

Recommended command:
  npx playwright test --grep "(@logic|@integration)"

Time Saved:
  Running 90s of tests instead of 120s
  Time saved: 30s (25%)
```

## Benefits

- **Faster CI/CD:** Run only necessary tests
- **Developer Productivity:** Quick feedback loops
- **Cost Savings:** Fewer compute resources
- **Better Coverage:** Strategic test selection
- **Learning System:** AI improves over time

## Future Enhancements

- Test result history analysis
- Flaky test detection
- Coverage-based selection
- Machine learning predictions
- Automatic test generation
- Risk-based prioritization
