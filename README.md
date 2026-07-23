# Terse Data Plane Starter

A minimal, deployable example of a self-hosted [Terse](https://useterse.ai) data plane: a Node
process that registers jobs with `createJob()` and exposes the SDK's trigger webhook so the Terse
Cloud control plane can deliver events to it. See
[Self-hosting the data plane](https://docs.useterse.ai/self-hosting) for the full guide.

Unlike self-hosting the [control plane](https://github.com/TerseAI/Terse), the data plane needs no
database and no Redis — it's a single web service.

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

## Setup

1. From this project (or your own repo with this structure), run `terse attach` to link it to a
   Terse project. This writes `terse.config.json` with `selfHosted: true`.
2. Set `remoteServerUrl` in `terse.config.json` to this service's public URL once deployed.
3. Copy `.env.example` to `.env` and fill in `TERSE_API_KEY` and `TERSE_SIGNING_SECRET` from your
   Terse project settings (or deploy first, then set them as environment variables on the Render
   service — `terse attach` and the first `terse deploy` print both values).
4. `npm install && npm run dev` to run locally, or deploy (e.g. the Render button above) and then
   run `terse deploy` to register your jobs against the control plane.

## Local development

```bash
npm install
cp .env.example .env
npm run dev
```

## Deploying

Deploy this repo anywhere you'd normally ship a Node service (Render, Fly, ECS, your own
Kubernetes, ...). `render.yaml` provisions a single web service with no attached database — set
`TERSE_API_KEY` and `TERSE_SIGNING_SECRET` in the service's environment after deploying, then point
`remoteServerUrl` in `terse.config.json` at the deployed URL and run `terse deploy`.
