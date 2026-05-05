# Proxy Health

Check Claude proxy status and restart if needed.

## Usage
/proxy-health

## Steps
1. Check proxy: `curl -s http://localhost:8082/health`
2. If down, restart: `cd ~/free-claude-code && python3 -m uv run uvicorn server:app --host 0.0.0.0 --port 8082 &`
3. Verify: Test with message

## Examples
```
/proxy-health
```