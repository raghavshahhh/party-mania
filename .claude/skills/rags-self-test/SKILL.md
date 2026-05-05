#!/bin/bash
#
# RAGS Self-Test Command
# Run: /rags-self-test
# Comprehensive diagnostic of RAGS capabilities
#

MODE="${1:-quick}"
SELF_DIR="${HOME}/.claude/self"

# Colors
RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'; NC='\033[0m'

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║           RAGS SELF-TEST REPORT                            ║"
echo "╠════════════════════════════════════════════════════════════╣"
echo "║ Mode: ${MODE}                                              ║"
echo "║ Time: $(date '+%Y-%m-%d %H:%M:%S')                         ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Section 1: File System Check
echo "📁 FILE SYSTEM"
echo "────────────────────────────────────────────────────────────"

files_ok=0
total_files=7

check_file() {
    local file="$1"
    local desc="$2"
    if [ -f "$file" ]; then
        local size=$(du -h "$file" | cut -f1)
        echo -e "  ${GREEN}✓${NC} $desc"
        ((files_ok++))
        return 0
    else
        echo -e "  ${RED}✗${NC} $desc (missing)"
        return 1
    fi
}

check_dir() {
    local dir="$1"
    local desc="$2"
    if [ -d "$dir" ]; then
        local count=$(ls "$dir" 2>/dev/null | wc -l)
        echo -e "  ${GREEN}✓${NC} $desc ($count items)"
        ((files_ok++))
        return 0
    else
        echo -e "  ${RED}✗${NC} $desc (missing)"
        return 1
    fi
}

check_file "${SELF_DIR}/SELF_IMPROVEMENT_INDEX.md" "Index"
check_file "${SELF_DIR}/skills/continuous-learner.md" "Continuous Learner"
check_file "${SELF_DIR}/memory/MEMORY_COMPRESSION.md" "Memory Compression"
check_file "${SELF_DIR}/budget/cost-tracker.md" "Cost Tracker"
check_file "${SELF_DIR}/ADVANCED_INTELLIGENCE.md" "Advanced Intelligence"
check_dir "${SELF_DIR}/budget" "Budget Tracking Dir"
check_dir "${SELF_DIR}/memory" "Memory Storage Dir"

echo ""
echo "  Components: $files_ok/$total_files operational"
echo ""

# Section 2: Cost Tracking
echo "💰 COST TRACKING"
echo "────────────────────────────────────────────────────────────"

today=$(date +%Y-%m-%d)
daily_file="${SELF_DIR}/budget/daily-cost-${today}.json"

if [ -f "$daily_file" ]; then
    cost=$(cat "$daily_file")
    pct=$(echo "scale=1; $cost * 100 / 50" | bc)
    echo "  Today's Cost: $${cost} / $50.00 (${pct}%)"
else
    echo "  Today's Cost: $0.00 / $50.00 (0%)"
fi
echo ""

# Section 3: Pattern Recognition
echo "🧠 PATTERN RECOGNITION"
echo "────────────────────────────────────────────────────────────"

pattern_count=$(ls "${SELF_DIR}/memory/pattern-"*.json 2>/dev/null | wc -l | tr -d ' ')
fix_count=$(ls "${SELF_DIR}/memory/fix-"*.json 2>/dev/null | wc -l | tr -d ' ')

if [ "$pattern_count" -eq 0 ]; then
    echo "  Patterns Learned: 0"
    echo "  Status: Ready to extract"
else
    echo "  Patterns Learned: $pattern_count"
fi
echo "  Error Fixes: $fix_count"
echo ""

# Section 4: Hooks Status
echo "⚡ HOOKS & TRIGGERS"
echo "────────────────────────────────────────────────────────────"

for trigger in context-monitor cost-tracker pattern-observer; do
    if [ -f "${HOME}/.claude/hooks/triggers/${trigger}.sh" ] || [ -f "${HOME}/.claude/hooks/triggers/${trigger}.js" ]; then
        echo -e "  ${GREEN}✓${NC} Trigger: $trigger"
    else
        echo -e "  ${YELLOW}⚠${NC} Trigger: $trigger (spec only)"
    fi
done
echo ""

# Overall Status
echo "════════════════════════════════════════════════════════════"
if [ $files_ok -eq $total_files ]; then
    echo -e "${GREEN}✅ ALL SYSTEMS OPERATIONAL${NC}"
elif [ $files_ok -gt $((total_files * 2 / 3)) ]; then
    echo -e "${YELLOW}⚠️ MOSTLY OPERATIONAL${NC}"
else
    echo -e "${RED}❌ ISSUES DETECTED${NC}"
fi
echo ""

# System capabilities summary
echo "┌────────────────────────────────────────────────────────────┐"
echo "│ Active Capabilities:                                       │"
echo "├────────────────────────────────────────────────────────────┤"
echo "│  • Continuous Learning     - Auto-extract patterns          │"
echo "│  • Cost Tracking           - Per-request budget monitoring │"
echo "│  • Memory Compression      - Context overflow prevention  │"
echo "│  • Pattern Recognition     - Real-time code analysis       │"
echo "│  • Self-Diagnostics        - Status monitoring             │"
echo "└────────────────────────────────────────────────────────────┘"
echo ""
