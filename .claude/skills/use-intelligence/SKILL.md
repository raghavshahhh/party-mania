# use-intelligence

Activate RAGS Intelligence Layer - Auto-load skills, track execution, log costs.

## Usage

```bash
# Get system status
/use-intelligence status

# Enable skills injection for current session
/use-intelligence enable-skills

# Get next action suggestion based on priority
/use-intelligence suggest

# Run with full tracking
/use-intelligence execute <agent_type> <task>
```

## What It Does

1. **Skills Injection** - Automatically loads relevant skills from 105 skill library
2. **Feedback Logging** - Tracks which agents work best
3. **Cost Tracking** - Monitors token usage and API costs
4. **Revenue Tracking** - Time per project for ROI calculation
5. **Auto-suggestion** - Recommends highest priority next task

## Examples

```bash
# See what's working
/use-intelligence status

# Get your next action
/use-intelligence suggest

# Execute with tracking
/use-intelligence execute security-reviewer "Review auth code"
```

## Modules Activated

- `skills_bridge.py` - Auto-injects skills
- `agent_feedback.py` - Execution tracking
- `cost_tracker.py` - Cost monitoring
- `revenue_tracker.py` - Time/ROI tracking
- `system_integration.py` - Unified interface

---

Run `python3 ~/.claude/intelligence/system_integration.py` for detailed status.
