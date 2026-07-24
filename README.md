# Terse Data Plane Starter

This is a template for [Terse](https://useterse.ai) users to self host their Data Plane.

Just clone this, and run:

```bash
terse attach
```

See [Self-hosting the data plane](https://docs.useterse.ai/self-hosting) for the full guide.

Here is a neat button that will quickly deploy this in Render

<p>
  <a href="https://render.com/deploy?repo=https://github.com/TerseAI/terse-data-plane-starter">
    <img src="https://render.com/images/deploy-to-render-button.svg" alt="Deploy to Render" />
  </a>
</p>

## What's here

- `src/terse.jobs.ts` — one example job with a webhook trigger. Replace this with your own
  `createJob()` calls.
- `src/server.ts` — an Express server that mounts `TERSE_JOB_WEBHOOK_TRIGGER_PATH` and calls
  `terse.handleTrigger()` on every incoming request, per the SDK's signed-webhook contract.