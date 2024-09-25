/* Copyright 2024 Marimo. All rights reserved. */
export interface ChatClientMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface SendMessageRequest {
  messages: ChatClientMessage[];
  config: {
    max_tokens?: number;
    temperature?: number;
    top_p?: number;
    top_k?: number;
    frequency_penalty?: number;
    presence_penalty?: number;
  };
}
