# RAGSBUILD Build Command
# Usage: /build or /rb or /ragsbuild

This command executes the full RAGSBUILD 36-phase protocol.

**When to use:**
- Starting a new project
- Fixing a broken project
- Adding features to existing project

**Phases executed:**
- Phases 0-3.5: Detection, setup, structure (auto-skip if exists)
- Phases 4-20: Web stack (pages, forms, APIs, DB, auth, SEO, 3D, illustrations, E2E)
- Phases 21-22: Mobile/desktop (if detected)
- Phases 23-24: AI agents, real-time (if detected)
- Phases 25-30: Microservices, PWA, GraphQL, Edge
- Phases 31-36: Security, monitoring, Web3, ML, WebRTC (if needed)

**Auto-execute rules:**
1. Run security-scan before any build
2. Parallelize independent phases
3. Auto-compact at 70% context
4. Spawn subagents for intensive tasks (3D, AI, testing)
5. Start dev server and provide link

**References:**
- Web: `~/.claude/skills/ragsbuild/references/web-stack.md`
- Multi-platform: `~/.claude/skills/ragsbuild/references/multi-platform.md`
- Advanced: `~/.claude/skills/ragsbuild/references/advanced.md`

**Start immediately:**
```
/b ragsbuild "${input:project-name}"
```
