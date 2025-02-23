import { createOpenAI } from "@ai-sdk/openai";
import { createDeepSeek } from "@ai-sdk/deepseek";
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from "ai";

export const DEFAULT_CHAT_MODEL: string = "chat-model-small";

const openai = createDeepSeek({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL,
});

const kimi = createOpenAI({
  apiKey: process.env.KIMI_API_KEY,
  baseURL: process.env.KIMI_BASE_URL,
});
//deepseek('qwen-omni-turbo'),
export const myProvider = customProvider({
  languageModels: {
    "chat-model-small": wrapLanguageModel({
      model: openai("qwen-omni-turbo"),
      middleware: extractReasoningMiddleware({ tagName: "think" }),
    }),
    "chat-model-large": wrapLanguageModel({
      model: openai("qwen-omni-turbo"),
      middleware: extractReasoningMiddleware({ tagName: "think" }),
    }),
    "chat-model-reasoning": wrapLanguageModel({
      model: openai("qwen-omni-turbo"),
      middleware: extractReasoningMiddleware({ tagName: "think" }),
    }),
    "title-model": kimi("moonshot-v1-8k"),
    "artifact-model": wrapLanguageModel({
      model: openai("qwen-omni-turbo"),
      middleware: extractReasoningMiddleware({ tagName: "think" }),
    }),
    "write-model": kimi("moonshot-v1-128k"),
  },
  // imageModels: {
  //   "small-model": openai.image("qwen-omni-turbo"),
  //   "large-model": openai.image("qwen-omni-turbo"),
  // },
});

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: "chat-model-small",
    name: "Small model",
    description: "Small model for fast, lightweight tasks",
  },
  {
    id: "chat-model-large",
    name: "Large model",
    description: "Large model for complex, multi-step tasks",
  },
  {
    id: "write-model",
    name: "Kimi model",
    description: "Kimi for writing",
  },
  {
    id: "chat-model-reasoning",
    name: "Reasoning model",
    description: "Uses advanced reasoning",
  },
];
