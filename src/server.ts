import express from "express"
import { TERSE_JOB_WEBHOOK_TRIGGER_PATH, Terse } from "terse-sdk"

import "./terse.jobs.js"

const app = express()
app.use(express.json())

const terse = new Terse()

app.post(TERSE_JOB_WEBHOOK_TRIGGER_PATH, async (req, res) => {
    try {
        const result = await terse.handleTrigger(req.body, req.headers)
        res.json(result)
    } catch (err) {
        res.status(401).json({ error: (err as Error).message })
    }
})

app.get("/healthz", (_req, res) => res.status(200).send("ok"))

const port = process.env.PORT ? Number(process.env.PORT) : 3000
app.listen(port, () => console.log(`Terse data plane listening on :${port}`))
