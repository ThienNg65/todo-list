---
marp: true
theme: default
paginate: true
backgroundColor: #ffffff
style: |
  section {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  h1 {
    color: #2E5CFF;
    font-size: 2.5em;
  }
  h2 {
    color: #333;
    font-size: 1.8em;
  }
  h3 {
    font-size: 1.4em;
    margin-bottom: 0.8em;
  }
  .lead h1 {
    font-size: 3em;
  }
  .emoji-large {
    font-size: 5em;
    text-align: center;
    margin: 0.2em 0;
  }
  .emoji-medium {
    font-size: 3em;
  }
  .columns {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  .three-columns {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    text-align: center;
  }
  .comparison {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 2rem;
    align-items: center;
    text-align: center;
  }
  .metric-box {
    background: #f0f7ff;
    border-left: 4px solid #2E5CFF;
    padding: 0.8em;
    margin: 0.4em 0;
  }
  .highlight-red {
    color: #EF4444;
    font-weight: bold;
  }
  .highlight-green {
    color: #10B981;
    font-weight: bold;
  }
  .icon-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin: 2em 0;
  }
  .icon-box {
    text-align: center;
    padding: 1em;
    border-radius: 8px;
    background: #f8f9fa;
  }
  .icon-box-blue { background: #E3F2FD; }
  .icon-box-purple { background: #F3E5F5; }
  .icon-box-red { background: #FFEBEE; }
  .icon-box-orange { background: #FFF3E0; }
  .icon-box-yellow { background: #FFFDE7; }
  .icon-box-green { background: #E8F5E9; }
  .checklist {
    font-size: 0.9em;
  }
  .timeline {
    display: flex;
    justify-content: space-around;
    margin: 2em 0;
  }
  .timeline-item {
    text-align: center;
    flex: 1;
  }
  strong {
    color: #2E5CFF;
  }
  pre {
    text-align: left;
  }
  code {
    font-size: 0.85em;
  }
  section.compact {
    font-size: 0.9em;
  }
  section.compact h2 {
    font-size: 1.6em;
    margin-bottom: 0.4em;
  }
  section.compact h3 {
    font-size: 1.3em;
    margin-bottom: 0.4em;
  }
  section.compact .columns {
    gap: 0.9rem;
  }
  section.compact .metric-box {
    padding: 0.7em;
    margin: 0.35em 0;
  }
---

<!-- _class: lead -->

# Stop Fighting Your Tests 🛑

## MCP + AI: From ~50% Maintenance to ~10%

<div class="emoji-large">

🤖 ⚡ 🎭

</div>

**Your Name**
**November 2025**

---

<!-- _class: lead -->

## Quick Question 🤔

<div style="font-size: 1.5em; margin: 2em 0;">

**Who spent more time this week**
**FIXING tests than WRITING tests?**

</div>

<div style="font-size: 0.9em; color: #666;">

*(Keep your hands up... yeah, most of you. That's what we're fixing today.)*

</div>

---

## The Real Problem 😰

### Your Week in Automation Testing

<div class="comparison">
<div>

**BEFORE**

⏰ **50%**
of your week

😤

</div>
<div>

vs

</div>
<div>

**AFTER**

⚡ **10%**
of your week

😊

</div>
</div>

---

<!-- _class: lead -->

## The Simple Truth

<div class="emoji-large">

🔧

</div>

<div style="font-size: 1.3em; margin: 2em;">

You're a **mechanic** spending half the week
**fixing tools** instead of **fixing cars**

</div>

---

## The Simple Solution ✨

### What if AI did the boring stuff?

<div class="comparison">
<div>

**TRADITIONAL**
⏰
30 min/test
😰
50% maintenance

</div>
<div>

<div class="emoji-medium">

→ 🤖 →

</div>

</div>
<div>

**WITH MCP**
⚡
3 min/test
😊
10% maintenance

</div>
</div>

---

## What is Playwright MCP?

<div style="text-align: center; margin: 3em 0;">

<div style="font-size: 3em; margin: 1em 0;">

👤 ↔️ 🤖 ↔️ 🎭 ↔️ 💻

</div>

<div style="font-size: 1.2em;">

**You** ↔️ **Claude AI** ↔️ **Playwright** ↔️ **Your App**

</div>

</div>

**Model Context Protocol (MCP)** = The bridge

**Simple idea:** AI can actually **RUN** your tests, not just write them.

> Like having a junior engineer who never sleeps ☕

---

<!-- _class: lead -->

# Meet Your 6 AI Teammates

<div class="emoji-large">

🤝

</div>

---

## 6 AI Teammates

<div class="icon-grid" style="margin: 1em 0;">

<div class="icon-box icon-box-blue">
<div style="font-size: 2.5em;">🔧</div>
<strong>#1: Code Writer</strong>
"You describe, I write"
</div>

<div class="icon-box icon-box-purple">
<div style="font-size: 2.5em;">👀</div>
<strong>#2: Explorer</strong>
"I find what to test"
</div>

<div class="icon-box icon-box-red">
<div style="font-size: 2.5em;">👊</div>
<strong>#3: Breaker</strong>
"I break 1000 ways"
</div>

<div class="icon-box icon-box-orange">
<div style="font-size: 2.5em;">🌀</div>
<strong>#4: Chaos Maker</strong>
"I find flaky tests"
</div>

<div class="icon-box icon-box-yellow">
<div style="font-size: 2.5em;">😇</div>
<strong>#5: Naive User</strong>
"Like your grandma"
</div>

<div class="icon-box icon-box-green">
<div style="font-size: 2.5em;">🧠</div>
<strong>#6: Manager</strong>
"I run everything"
</div>

</div>

---

## AI #1: Code Writer 🔧

### Your Starting Point

<div class="columns">
<div>

**What you say:**

> "Create a test: user logs in with wrong password, sees error"

<div style="margin-top: 2em;">

⏰ **Before:** 30 minutes
⚡ **After:** 30 seconds
👁️ **You:** Review (2 min)

</div>

</div>
<div>

**What AI does:**

```javascript
test('login fails', async ({ page }) => {
  await page.goto('/login');
  await page.fill('[data-testid="email"]',
    'test@example.com');
  await page.fill('[data-testid="password"]',
    'wrongpass');
  await page.click('button[type="submit"]');
  await expect(page.locator('.error-message'))
    .toContainText('Invalid password');
});
```

</div>
</div>

---

## AI #1: Time Saved 💰

<div style="text-align: center; margin: 3em 0;">

<div style="font-size: 2em; margin: 1em;">

28 min saved per test

</div>

<div style="font-size: 1.5em;">

× 10 tests/week

</div>

<div style="font-size: 3em; color: #10B981; margin: 1em;">

= **4.6 hours/week**

</div>

</div>

**Start here.** This is your entry point. 🚀

---

## AI #2: Explorer 👀

### Finds What You Missed

<div class="columns">
<div>

**You tested:**
✅ Happy path
✅ User buys product

**You missed:**
❌ Delete from cart
❌ Promo code
❌ Change quantity
❌ Leave & come back

</div>
<div>

**What AI does:**

```
You: "Explore checkout"

AI: [Clicks everything 5 min]
    
    📋 Found:
    - 3 forms (no validation)
    - 2 buttons (do nothing)
    - 1 error (no test)
    - 1 race condition
    
    💡 Suggested:
    12 new test cases
```

</div>
</div>

<div style="text-align: center; margin-top: 1em; font-size: 1.2em;">

🐛 **Bugs you didn't know existed**

</div>

---

## AI #3: Breaker 👊

### Tries to Break Everything

<div class="comparison">
<div>

**You test:**

```js
await page.fill(
  '#email',
  'test@test.com'
)
```

✅ Normal input

</div>
<div>

<div class="emoji-medium">

💥

</div>

</div>
<div>

**AI tests:**

```
'test@test..com'
'a'.repeat(10000)+'@x.com'
'💩@test.com'
'<script>alert(1)</script>'
' test@test.com '
...997 more
```

🔥 1000+ variations

</div>
</div>

---

## AI #3: Breaker 👊 (Results 🎯)

<div style="text-align: center; margin: 3em 0;">

<div style="font-size: 2em; margin: 1em;">

🐛 Finds **15 edge cases** that crash your app

</div>

<div class="comparison">
<div>

**Manual:**
Never
(too boring)

</div>
<div>

vs

</div>
<div>

**AI:**
2 minutes
(not bored)

</div>
</div>

</div>


> Humans can't think of 1000 ways to break a form. AI doesn't get bored.

---

## AI #4: Chaos Maker 🌀

<div class="columns">
<div>

**The Problem:**

|Day      |Result        |
|---------|--------------|
|Monday   |✅ Pass        |
|Tuesday  |✅ Pass        |
|Wednesday|❌ **FAIL**    |
|Thursday |✅ Pass        |
|Friday   |😤 "Just rerun"|

</div>
<div>

**AI Solution:**

```
You: "Run 100x with chaos"

AI: [Tests with]:
    - Slow network 🐌
    - Fast clicks ⚡
    - Random delays ⏱️
    - CPU stress 🔥
    
    Failed 7/100 times
    
    Root cause:
    Missing wait for animation
    
    Fix provided ✅
```

</div>
</div>

---

## AI #5: Naive User 😇

### Tests Like Your Grandparent

<div class="columns">
<div>

**Your test:**
Click login
→ Email
→ Password
→ Submit

<div style="margin-top: 1em; padding: 0.8em; background: #E8F5E9; border-radius: 8px;">

✅ Perfect user
📖 Reads instructions
🎯 Follows path

</div>

</div>
<div>

**Real user:**
Click submit first
→ See error
→ Get confused
→ Type in wrong field
→ Use spaces
→ Give up
→ Call support

<div style="margin-top: 1em; padding: 0.8em; background: #FFEBEE; border-radius: 8px;">

❌ Confused user
🚫 Ignores docs
🎲 Random path

</div>

</div>
</div>

---

## AI #5: What It Finds 🔍

```
You: "Test login like confused user"

AI: [Random actions]:
    ✓ Clicks submit with empty fields
    ✓ Types email with spaces before/after
    ✓ Uses Tab key in weird order
    ✓ Copy/paste with formatting
    ✓ Goes back and forward
    ✓ Tries to submit twice
    
    🐛 Found bugs:
    - App crashes on double submit
    - Spaces in email not trimmed
    - Tab order is backwards
```

---

## AI #6: Manager 🧠 (Ruler)

<div class="columns">
<div>

**The Problem:**

📊 You have: **500 tests**
⏰ Run all: **2 hours**
💻 Change: **1 line CSS**

**Question:**
Run all 500? (slow) 🐌
Or guess? (risky) 🎲

</div>
<div>

**AI Solution:**

```
Commit: "fix: header align"

AI analyzes:
  📁 Changed: header.css
  🔍 Affected: 3 components
  🎯 Related: 47 tests
  
AI runs: 47 tests (12 min)

3 fail:
  ✅ AI fixes 2 auto
  👁️ AI flags 1 for review

Total: 15 min vs 2+ hours
```

</div>
</div>

---

<!-- _class: lead -->

# Live Demo 🎬

<div class="emoji-large">

💻

</div>

<div style="font-size: 1.2em;">

**This is live. No tricks.**

AI controls browser, finds problems,
writes code, runs tests.

**In real-time.**

</div>

---

## Demo Plan 📋

<div class="timeline">

<div class="timeline-item">
<div style="font-size: 2em;">1️⃣</div>
<div style="font-size: 1.2em; font-weight: bold;">💬 You Speak</div>
<div>"Create test for login"</div>
<div style="color: #666; font-size: 0.8em;">2 minutes</div>
</div>

<div class="timeline-item">
<div style="font-size: 2em;">2️⃣</div>
<div style="font-size: 1.2em; font-weight: bold;">🤖 AI Codes</div>
<div>Complete test + run</div>
<div style="color: #666; font-size: 0.8em;">2 minutes</div>
</div>

<div class="timeline-item">
<div style="font-size: 2em;">3️⃣</div>
<div style="font-size: 1.2em; font-weight: bold;">🔧 AI Fixes</div>
<div>Break test → AI repairs</div>
<div style="color: #666; font-size: 0.8em;">1 minute</div>
</div>

</div>

<div style="text-align: center; margin-top: 2em; font-size: 0.9em; color: #666;">

*Backup video ready if live demo fails*

</div>

---

## Demo Execution Guide 🎮

### How to Coordinate the Live Demos

**Prerequisites:**
- Dev server running: `npm run dev` (port 3000)
- 6 demo branches ready: `demo/01-code-writer` through `demo/06-manager`
- Each branch has `demo-XX-prompt.md` with AI instructions
- Playwright configured with headed mode (`headless: false`, `slowMo: 800`)

**Demo Workflow (Per Branch):**

<div class="columns">
<div>

**Step 1: Sonnet Coordinator**
```
git checkout demo/XX-xxx

Launch Sonnet agent:
- Check current tests
- Run tests to identify issues
- Report: PASS or FAIL with details
```

</div>
<div>

**Step 2: Haiku Executor**
```
If tests FAIL:

Launch Haiku agent:
- Read demo-XX-prompt.md
- Follow instructions to fix tests
- Run tests to verify
- Report: Success or failure
```

</div>
</div>

**Manual Coordination:**
1. **Switch branch**: `git checkout demo/XX-xxx`
2. **Launch Sonnet**: Let it run and report test status
3. **If failures exist**: Launch Haiku with prompt guidance
4. **Watch live**: Browser visible, 800ms slowMo for audience
5. **Next demo**: Reset changes (`git reset --hard`), repeat

---

## Real Numbers 📊

### What Teams Actually Get

|Metric        |Before                                |After                                   |Impact                                              |
|--------------|--------------------------------------|----------------------------------------|----------------------------------------------------|
|📝 Write test  |30 min                                |3 min                                   |<span class="highlight-green">10x faster</span>     |
|🔧 Fix selector|15 min                                |Auto                                    |<span class="highlight-green">100% automated</span> |
|🎲 Find flaky  |Never                                 |Auto                                    |<span class="highlight-green">Catch before CI</span>|
|🔍 Debug fail  |45 min                                |5 min                                   |<span class="highlight-green">9x faster</span>      |
|⏰ Maintenance |<span class="highlight-red">50%</span>|<span class="highlight-green"><10%</span>|<span class="highlight-green">40%+ saved</span>      |

---

## Real Numbers: Money 💰

<div style="text-align: center;">

**In money terms:**

<div class="metric-box" style="font-size: 1.1em; margin: 2em auto; max-width: 600px;">

3 QA engineers × 40 hrs/week = **120 hours**

Save 38% = **45.6 hours/week** freed up

= **1.14 full-time people** worth of capacity

= **~$60K+/year** in value

</div>

<div style="font-size: 1.3em; color: #10B981; font-weight: bold;">

**MCP pays for itself in 1-2 months** 📈

</div>

</div>

<div style="font-size: 0.9em; color: #666; margin-top: 1em;">

*Real teams, publicly documented results*

</div>

---

<!-- _class: lead -->

## Your Plan 📅

<div class="emoji-large">

🗺️

</div>

### Dead Simple

---

## Week 1: Baby Steps 👶

<div class="timeline">

<div class="timeline-item">
<div style="font-size: 2em;">📦</div>
<strong>Day 1</strong>
Install MCP
<div style="color: #10B981;">5 min</div>
</div>

<div class="timeline-item">
<div style="font-size: 2em;">🤖</div>
<strong>Day 2</strong>
First test
<div style="color: #10B981;">15 min</div>
</div>

<div class="timeline-item">
<div style="font-size: 2em;">🔍</div>
<strong>Day 3</strong>
Explore app
<div style="color: #10B981;">10 min</div>
</div>

<div class="timeline-item">
<div style="font-size: 2em;">🔧</div>
<strong>Day 4</strong>
Fix test
<div style="color: #10B981;">10 min</div>
</div>

<div class="timeline-item">
<div style="font-size: 2em;">🎉</div>
<strong>Day 5</strong>
Show team
<div style="color: #10B981;">5 min</div>
</div>

</div>

<div style="text-align: center; margin-top: 2em; font-size: 1.2em;">

**That's it. Don't overthink it.** 🎯

</div>

---

## The Roadmap 🗓️

<div class="icon-grid">

<div class="icon-box icon-box-blue">
<div style="font-size: 2em;">📅 Month 1</div>
<strong>AI #1: Code Writer</strong>
Save 5 hrs/week
</div>

<div class="icon-box icon-box-purple">
<div style="font-size: 2em;">📅 Month 2</div>
<strong>Add AI #2: Explorer</strong>
Find coverage gaps
</div>

<div class="icon-box icon-box-orange">
<div style="font-size: 2em;">📅 Month 3</div>
<strong>Add AI #4: Chaos</strong>
Kill flaky tests
</div>

<div class="icon-box icon-box-green" style="grid-column: 1 / -1;">
<div style="font-size: 2em;">📅 Month 4+</div>
<strong>Add AI #6: Manager</strong>
Full automation - 80% coverage
</div>

</div>

---

## Getting Started Today 🚀

### Playwright MCP Setup (5 minutes)

**Step 1: Install**

```bash
npm install @anthropic/mcp-playwright
```

**Step 2: Configure Claude Desktop**

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@anthropic/mcp-playwright"]
    }
  }
}
```

**Step 3: Start Using**

- Open Claude Desktop
- Say: "Help me with Playwright testing"
- Done! ✅

---

<!-- _class: lead -->

## "But What About…" 🤔

---

## FAQs ❓

<div style="font-size: 0.8em;">

<div class="columns">
<div>

**❓ Will AI replace me?**

<div class="metric-box">
<em>No, calculator didn't replace mathematicians.</em>
</div>

**❓ What if AI makes mistakes?**

<div class="metric-box">
You review AI code like junior engineer code.
You're still in control.
</div>

**❓ Isn't it expensive?**

<div class="metric-box">
$20-50/engineer/month. Coffee budget.
ROI in weeks.
</div>

</div>
<div>

**❓ Does it work with our setup?**

<div class="metric-box">
Yes. Works with existing Playwright tests.
No rewrite needed.
</div>

**❓ Do I need to learn AI?**

<div class="metric-box">
No. You just talk to it in English.
Like talking to a person.
</div>

**❓ What if it breaks tests?**

<div class="metric-box">
Start small. You have Git.
</div>

</div>
</div>

</div>

---

<!-- _class: lead -->

# Do This Monday 📅

<div class="emoji-large">

🚀

</div>

---

<!-- _class: lead -->

## Simple Rule

<div style="font-size: 1.5em; margin: 2em; line-height: 1.5;">

If you're **not using AI** by next Monday,

you're doing **extra work**

for **no reason**

</div>

<div class="emoji-large">

🤷

</div>

---

## Cheat Sheet 📋

<div class="icon-grid">

<div class="icon-box icon-box-blue">
🔧 <strong>#1: Writer</strong><br>
Quick wins<br>
→ Testim, Copilot
</div>

<div class="icon-box icon-box-purple">
👀 <strong>#2: Explorer</strong><br>
Coverage<br>
→ Mabl, Applitools
</div>

<div class="icon-box icon-box-red">
👊 <strong>#3: Breaker</strong><br>
Security<br>
→ OSS-Fuzz, Mayhem
</div>

<div class="icon-box icon-box-orange">
🌀 <strong>#4: Chaos</strong><br>
Resilience<br>
→ Gremlin, Chaos Monkey
</div>

<div class="icon-box icon-box-yellow">
😇 <strong>#5: User Sim</strong><br>
UX testing<br>
→ test.ai, Rainforest
</div>

<div class="icon-box icon-box-green">
🧠 <strong>#6: Manager</strong><br>
Full auto<br>
→ Katalon, Sauce Labs
</div>

</div>

---

<!-- _class: lead -->

# Questions? 🙋

---

<!-- _class: lead -->

# Remember

<div style="font-size: 1.8em; line-height: 1.6; margin: 2em;">

**Start small** → **Learn** → **Scale**

</div>

<div style="font-size: 1.4em; margin: 2em;">

Start Monday.
Use Tuesday.
Never go back.

</div>

<div style="font-size: 1.8em; font-weight: bold; color: #2E5CFF;">

**It's that simple.** ✨

</div>

---

<!-- _class: lead -->

<div class="emoji-large">

🚀

</div>

# Thank You!

**Let's make testing fun again**

---

## Resources & Citations 📚

<div style="font-size: 0.75em;">

<div class="columns">
<div>

**Statistics & Research:**
- [World Quality Report 2022-2023](https://www.itconvergence.com/blog/true-cost-breakdown-of-implementing-and-supporting-test-automation/#:~:text=in%20test%20automation.-,Script%20Maintenance,-Test%20scripts%20require) - 50% maintenance cost
- [DevOps Survey: IT Disruptions](https://devops.com/survey-it-teams-spend-about-a-third-of-time-responding-to-disruptions/) - 55% teams spend 20+ hrs/week

**Playwright MCP:**
- [Microsoft: Playwright E2E with AI](https://developer.microsoft.com/blog/the-complete-playwright-end-to-end-story-tools-ai-and-real-world-workflows)
- [GitHub - microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp)

</div>
<div>

**Case Studies:**
- [SuperAGI: Playwright-MCP Case Study](https://superagi.com/case-study-how-microsofts-playwright-mcp-server-is-transforming-ai-agent-capabilities-in-real-world-scenarios/)

**Community Guides:**
- [ExecuteAutomation: Playwright + Claude MCP](https://medium.com/executeautomation/make-playwright-ui-testing-smart-with-model-context-protocol-of-claude-ai-18c26892193d)
- [Modern Test Automation with AI & Playwright MCP](https://kailash-pathak.medium.com/modern-test-automation-with-ai-llm-and-playwright-mcp-model-context-protocol-0c311292c7fb)

</div>
</div>

</div>
