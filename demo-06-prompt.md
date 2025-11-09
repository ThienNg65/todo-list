# Demo 06: Playwright MCP - The Bridge 🌉

## Objective
Demonstrate how **Playwright MCP** acts as the bridge between Claude AI and Playwright, enabling Claude to:
1. **Discover** what tests exist
2. **Run** tests directly (not just write them)
3. **Analyze** test results in real-time
4. **Debug** failures by re-running and inspecting
5. **Interact** with the browser through Playwright

This showcases the **MCP advantage**: Claude can actively participate in testing, not just be a passive code generator.

## What Makes This Different

**WITHOUT MCP:** Claude can only write test code. You run it manually and tell Claude what failed.

**WITH MCP:** Claude can:
- Run tests via Bash (`npx playwright test`)
- Open a browser and investigate failures interactively
- Combine automated testing with manual debugging
- Work completely autonomously from discovery to fix

## Your Task as AI

**NOTE:** One test is intentionally broken to demonstrate the full MCP workflow (discover → run → fail → fix → re-run).

You have access to **TWO types of Playwright tools**:
1. **Bash** - To run Playwright test files (`npx playwright test`)
2. **MCP Browser Automation** - To interact with the browser directly (`mcp__playwright__browser_*` tools)

Use them together to demonstrate the complete testing workflow:

### Step 1: Discovery Phase
1. List all available test files in the `tests/` directory
2. Identify the test file for this demo: `tests/06-smart-manager-demo.spec.ts`
3. Show what tests are inside by reading the files

### Step 2: Initial Test Execution (via Bash)
1. Run the tests using **Bash**: `npx playwright test`
2. Observe the test execution in real-time
3. Report which tests passed/failed

### Step 3: Interactive Debugging Phase (via MCP Browser Tools)
**When tests fail:**
1. Use **MCP browser automation** to investigate the issue:
   - Navigate to the app (`mcp__playwright__browser_navigate`)
   - Take snapshots to see the current state (`mcp__playwright__browser_snapshot`)
   - Interact with elements to reproduce the failure
   - Take screenshots if helpful (`mcp__playwright__browser_take_screenshot`)
2. **Determine the root cause** - Is this a real bug or a test setup issue?
   - **Real Bug**: The app doesn't work as expected (e.g., counter shows wrong value, button doesn't respond)
   - **Test Setup Issue**: The app works fine, but the test has problems (e.g., timing issues, wrong selectors, race conditions, insufficient waits)
3. Analyze what you observe and **report the issue verbally**:
   - "The app is actually working correctly, but the test is failing due to [timing/selector/race condition]..."
   - OR "The app has a real bug: [description of the actual problem]..."
4. Read the test code to understand what's expected vs. what's happening

### Step 4: Fix & Verify Phase
1. Make necessary code changes based on your investigation
2. **Re-run tests via Bash** to verify the fix
3. **If still failing**: Repeat Step 3 (use MCP browser to debug again)
4. Iterate until all tests pass

**Key Innovation**: You're combining automated test execution (Bash) with interactive debugging (MCP browser tools) - showing AI can both run tests AND investigate failures like a human developer would.

---

## Practical Guidance: When to Use Which Tool

**Use Bash (`npx playwright test`) when:**
- Running the full test suite
- Verifying if tests pass/fail
- Re-running tests after making fixes
- Getting structured test output and error messages

**Use MCP Browser Tools (`mcp__playwright__browser_*`) when:**
- A test fails and you need to understand WHY
- You want to see what the app actually looks like
- You need to reproduce the failure manually
- You want to inspect the current state of UI elements
- You're investigating timing issues or race conditions
- **You need to distinguish between real bugs vs. test setup issues**

**Example Browser Investigation Flow:**
```
1. Navigate to app → mcp__playwright__browser_navigate to http://localhost:3000
2. See what's there → mcp__playwright__browser_snapshot (shows accessible elements)
3. Interact with it → mcp__playwright__browser_click, browser_type, etc.
4. Take screenshots → mcp__playwright__browser_take_screenshot (visual evidence)
5. Diagnose the issue → Is the app broken, or is the test flaky/incorrectly written?
6. Verbally report → "The app works correctly, but the test expects the counter to
   update immediately. This is a timing issue - we need to add a wait..."
```

**Important Notes:**
- The app runs on **http://localhost:3000** (automatically started by Playwright's webServer config)
- Browser will be **visible** (headless: false) with **slowMo: 800ms** for demo visibility
- When you navigate with MCP, the audience will actually SEE the browser opening and interacting

---

### Step 5: Final Report
Provide a summary showing:
- Total tests discovered
- Tests executed
- Pass/fail status
- **Root cause analysis**: For each failure, clearly state whether it was:
  - A **real bug** in the application code, OR
  - A **test setup issue** (timing, race conditions, wrong selectors, insufficient waits, etc.)
- What you fixed (if anything)
- **Key point**: Emphasize how MCP enabled you to do all this autonomously

## Key MCP Capabilities to Highlight

Throughout your work, **clearly distinguish** which tool you're using:
- ✅ "Running tests via Bash: npx playwright test..."
- ✅ "Bash reports that test X failed with error Y..."
- ✅ "Now using MCP browser automation to investigate..."
- ✅ "Navigating to the app via MCP browser tools..."
- ✅ "MCP browser snapshot shows [description of what you see]..."
- ✅ "Based on MCP browser investigation, the issue is [explanation]..."
- ✅ **"This is a [real bug / test setup issue] because [reasoning]..."**
- ✅ "Re-running tests via Bash to verify fix..."

## Success Criteria

You should demonstrate that with Playwright MCP, you can:
1. Work **autonomously** from discovery to verification
2. **Run** tests, not just write them (via Bash)
3. **Debug interactively** like a human developer (via MCP browser tools)
4. **Iterate** quickly (run → investigate → fix → re-run)
5. Provide **real-time feedback** about test status
6. **Combine automated and manual testing** in one workflow

This is what makes Playwright MCP powerful: The AI becomes an active testing partner who can both run automated tests AND manually investigate issues in the browser - just like a human QA engineer or developer would.

---

## Demo Script (for presenter)

**Presenter says:** "Now let's see how Playwright MCP works. I'm going to ask Claude to handle all the testing for Demo 06. Watch how Claude combines automated test execution with interactive browser debugging - just like a real QA engineer would."

**Then launch the AI agent with this prompt loaded.**

The audience should see:
1. **Discovery**: Claude finding test files
2. **Execution**: Claude running tests via Bash (`npx playwright test`)
3. **Test Failure**: Some tests fail with error messages
4. **Interactive Investigation**: Claude opens a browser using MCP tools and investigates the issue
5. **Analysis**: Claude explains what's wrong based on browser observations
6. **Fix**: Claude makes code changes
7. **Verification**: Claude re-runs tests via Bash to confirm the fix
8. **(If needed)**: Repeat browser investigation until all tests pass

**Key message:** "This is the power of MCP - Claude isn't just writing code. It can run automated tests AND manually debug in a browser like a human developer. It's combining the best of both worlds - automation and interactive investigation."
