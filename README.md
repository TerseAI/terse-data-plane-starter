# Terse Data Plane Starter

This is a template for [Terse](https://useterse.ai) users to self host their Data Plane.

Just fork this repository, then clone your fork and do the following command in the root of the cloned project.

```bash
terse attach
```

Then you can make change to your Terse project and deploy them.

See [Self-hosting the data plane](https://docs.useterse.ai/self-hosting) for the full guide.

This repo includes a `render.yaml`, so you can deploy your fork on Render as a
[Blueprint](https://render.com/docs/blueprint-spec): in the Render dashboard, choose
**New > Blueprint**, connect your GitHub account, and select your fork. Render will
detect `render.yaml` and provision the service from it.

## What's here

- `src/terse.jobs.ts` — one example job with a webhook trigger. Replace this with your own
  `createJob()` calls.
- `src/server.ts` — an Express server that mounts `TERSE_JOB_WEBHOOK_TRIGGER_PATH` and calls
  `terse.handleTrigger()` on every incoming request, per the SDK's signed-webhook contract.