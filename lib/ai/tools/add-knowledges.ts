import { tool } from "ai";
import { z } from "zod";
import { createResource } from "@/lib/db/actions/resources";

export const addKnowledge = tool({
  description: `add a resource to your knowledge base.If the user provides a random piece of knowledge unprompted, use this tool when asking for add knowledge.`,
  parameters: z.object({
    content: z
      .string()
      .describe("the content or resource to add to the knowledge base"),
  }),
  execute: async ({ content }) => createResource({ content }),
});