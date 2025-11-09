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

**WITHOUT MCP:** Claude can only write test code. You run it manually.
**WITH MCP:** Claude can discover, run, analyze, debug, and fix tests autonomously.

## Your Task as AI

You have access to Playwright MCP tools. Use them to demonstrate the complete testing workflow:

### Step 1: Discovery Phase
1. List all available test files in the `tests/` directory
2. Identify the test file for this demo: `tests/06-smart-manager-demo.spec.ts`
3. Show what tests are inside using MCP tools

### Step 2: Execution Phase
1. Run the tests using Playwright MCP
2. Observe the test execution in real-time
3. Report which tests passed/failed

### Step 3: Analysis Phase
1. If any tests fail:
   - Use MCP to get detailed error information
   - Analyze the failure reason
   - Read the test code to understand what's expected

### Step 4: Debug & Fix Phase (if needed)
1. Make necessary code changes to fix failures
2. Re-run tests using MCP to verify the fix
3. Repeat until all tests pass

### Step 5: Final Report
Provide a summary showing:
- Total tests discovered
- Tests executed
- Pass/fail status
- What you fixed (if anything)
- **Key point**: Emphasize how MCP enabled you to do all this autonomously

## Key MCP Capabilities to Highlight

Throughout your work, point out when you're using Playwright MCP:
- ✅ "Using Playwright MCP to discover tests..."
- ✅ "Running tests through MCP..."
- ✅ "MCP reports that test X failed with error Y..."
- ✅ "Re-running via MCP to verify fix..."

## Success Criteria

You should demonstrate that with Playwright MCP, you can:
1. Work **autonomously** from discovery to verification
2. **Run** tests, not just write them
3. **Iterate** quickly (run → analyze → fix → re-run)
4. Provide **real-time feedback** about test status

This is what makes Playwright MCP powerful: The AI becomes an active testing partner, not just a code assistant.

---

## Demo Script (for presenter)

**Presenter says:** "Now let's see how Playwright MCP works. I'm going to ask Claude to handle all the testing for Demo 06. Watch how Claude uses MCP to discover, run, and verify tests - all without me running a single command."

**Then launch the AI agent with this prompt loaded.**

The audience should see:
1. Claude discovering tests using MCP tools
2. Claude running tests through MCP
3. Claude analyzing results
4. Claude fixing any issues
5. Claude re-running to verify

**Key message:** "This is the power of MCP - Claude isn't just writing code, it's actively running and managing tests like a team member."
