# RAGSBUILD Plan Command
# Usage: /build-plan or /rb-plan

This command runs the planning phase of RAGSBUILD.

**When to use:**
- Before starting a new project
- For complex features that need architecture planning
- When you need a detailed breakdown before building

**Process:**
1. Phase 0: Auto-detect project type from folder/cwd
2. Phase 1: Research competitors via Exa + market analysis
3. Phase 2: Create architecture.md with tech decisions
4. Phase 3: Generate file structure plan
5. Phase 3.5: Design complexity detection (3D, animations, illustrations)

**Output:**
- `docs/architecture.md` - Technical decisions
- `docs/design-spec.md` - Visual design plan
- `docs/phases.md` - Phase-by-phase breakdown

**Reference:** Load `~/.claude/skills/ragsbuild/references/planning.md` for full phase documentation.

Start now:
1. Detect project type from current directory
2. Ask user for project name if not provided
3. Run research via Exa
4. Create plan documents
5. Show summary and next steps
