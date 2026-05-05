# Multi-Agent Command

## Description

Run multiple Claude agents in parallel for code review, planning, or implementation tasks. Spawns specialized subagents for efficient parallel execution.

## Usage

```
/multi-agent [workflow] [target]
```

## Workflows

| Workflow | Description | Agents Used |
|----------|-------------|-------------|
| `review` | Parallel code review on multiple files | reviewer-agent (×3) |
| `plan` | Architecture planning | planner-agent |
| `implement` | Full implementation | planner → coder → reviewer → tester |
| `audit` | Security audit | reviewer-agent (security focus) |

## Examples

```
# Review all auth-related files
/multi-agent review auth

# Plan a new feature
/multi-agent plan "revenue dashboard"

# Full implementation of a feature
/multi-agent implement "task management system"

# Security audit
/multi-agent audit "payment processing"
```

## How It Works

1. **Discovery**: Find relevant files based on target
2. **Parallel Spawn**: Launch multiple reviewer agents simultaneously
3. **Aggregation**: Collect and merge results
4. **Report**: Present findings with severity levels

## Agent Definitions

Uses agents from `~/.claude/agents/`:
- `planner-agent.json` - Architecture and planning
- `coder-agent.json` - Implementation
- `reviewer-agent.json` - Code review
- `tester-agent.json` - Testing

## Implementation

```python
# Get target files
target = "{target}"
workflow = "{workflow}"

# For review workflow:
if workflow == "review":
    files = find_files(target)  # Glob search
    tasks = []
    for i, file in enumerate(files[:3]):  # Max 3 parallel
        tasks.append({
            "agent_id": f"reviewer-{i}",
            "agent_config": "~/.claude/agents/reviewer-agent.json",
            "task": f"Review {file} for security, quality, and consistency"
        })

    # Spawn in parallel
    results = []
    for task in tasks:
        result = spawn_agent(task)
        results.append(result)

    # Aggregate and report
    report = aggregate_results(results)
    display(report)
```

## Output Format

```
MULTI-AGENT RESULTS
===================

✅ reviewer-0: auth/login.ts
   Score: 85/100
   Issues: 2 medium

✅ reviewer-1: auth/middleware.ts
   Score: 92/100
   Issues: 0

❌ reviewer-2: auth/tokens.ts
   Score: 65/100
   Issues: 1 critical, 2 high
   CRITICAL: Hardcoded JWT secret on line 23

SUMMARY: 2/3 passed, 1 critical issue found
```
