---
name: ragsbuild
description: RAGSBUILD - Full project build system (plan → build → deploy)
---

# RAGSBUILD Command

RAGSBUILD is a 36-phase autonomous build system. Use sub-commands or run full build.

## Usage

```
/ragsbuild          # Full build (plan + build + deploy)
/ragsbuild plan     # Planning phase only
/ragsbuild build    # Build phase only
/ragsbuild deploy   # Deploy phase only
```

## Sub-Commands Available

| Command | Purpose |
|---------|---------|
| `/ragsbuild-plan` | Architecture planning, research, design spec |
| `/ragsbuild-build` | Full 36-phase build execution |
| `/ragsbuild-deploy` | Deploy to Vercel/Docker/Electron/etc |

## Quick Start

1. **Detect project type** from current directory
2. **If no project detected** → ask user for project name and type
3. **Run full pipeline:**

### Phase 0-3.5: Setup
- Auto-detect project type (nextjs/flutter/electron/ai/extension)
- Research competitors
- Create architecture.md
- Generate file structure plan

### Phase 4-20: Web Stack
- Pages, forms, APIs, database, auth, SEO, 3D, illustrations, E2E

### Phase 21-36: Advanced (if detected)
- Mobile/desktop, AI agents, real-time, microservices, PWA, GraphQL, security, monitoring

## References
- Planning: `~/.claude/skills/ragsbuild/references/planning.md`
- Web Stack: `~/.claude/skills/ragsbuild/references/web-stack.md`
- Multi-platform: `~/.claude/skills/ragsbuild/references/multi-platform.md`
- Advanced: `~/.claude/skills/ragsbuild/references/advanced.md`
- Deploy Script: `~/.claude/skills/ragsbuild/scripts/deploy.sh`
- SKILL.md: `~/.claude/skills/ragsbuild/SKILL.md`

## Auto-execute Rules
1. Run security-scan before any build
2. Parallelize independent phases
3. Auto-compact at 70% context
4. Start dev server and provide link

**Start immediately:** Detect project type → Run appropriate phases
