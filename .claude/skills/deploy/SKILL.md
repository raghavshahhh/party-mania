# Deploy Command

Deploy the current project to production.

## Usage
/deploy

## Steps
1. Check git status - ensure all changes committed
2. Run build: `npm run build` or `python -m build`
3. Deploy based on project type:
   - Next.js: `vercel --prod`
   - Python: `railway deploy`
   - Supabase: `supabase db push`
4. Verify deployment with health check

## Examples
```
/deploy
```