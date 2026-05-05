# RAGSBUILD Deploy Command
# Usage: /deploy or /rb-deploy

This command deploys the current project to various targets.

**Usage:**
```
/deploy              # Auto-detect target
/deploy vercel       # Deploy to Vercel
/deploy docker       # Build Docker image
/deploy electron     # Build Electron app
/deploy extension    # Build Chrome extension
/deploy flutter      # Build mobile apps
```

**Pre-deployment checks:**
1. TypeScript compilation
2. Security audit (npm audit)
3. Test coverage (if tests exist)
4. Lighthouse score (optional)

**Post-deployment:**
1. Run health check on deployed URL
2. Create n8n webhook notification
3. Trigger E2E smoke tests
4. Save deployment log

**Script:**
Uses `~/.claude/skills/ragsbuild/scripts/deploy.sh`

**Start:**
1. Detect project type
2. Run pre-deployment checks
3. Check for --dry-run flag
4. Deploy to selected target
5. Verify deployment
6. Show URLs and next steps
