import { WebhookInputConfig, createJob } from "terse-sdk"
import { z } from "zod"

const payloadSchema = z.object({ message: z.string().optional() })

// Register your job registry here, then import this file (for its side effects)
// from server.ts so it's loaded before requests arrive.
createJob({
    name: "Example webhook job",
    triggers: [new WebhookInputConfig()],
    onTrigger: async event => {
        const payload = payloadSchema.parse(event.body)
        console.log("Received trigger payload:", payload)
    }
})
