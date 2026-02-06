"use client";

import type { ReactNode } from "react";
import { useMemo, useRef, useState } from "react";
import { defaultAnswer, qaItems } from "./chatbotData";

type Message = {
  id: string;
  role: "user" | "bot";
  content: ReactNode;
};

const starterQuestions = [
  "What is your research focus?",
  "How can I contact you?",
  "Where can I download your CV?",
  "Where are you based?",
  "Show me your publications.",
];

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9\s]/g, " ").trim();

const findAnswer = (question: string): ReactNode => {
  const normalized = normalize(question);
  const matched = qaItems.find((item) => item.keywords.some((keyword) => normalized.includes(normalize(keyword))));
  return matched?.answer ?? defaultAnswer;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "intro",
      role: "bot",
      content: "Hi! Ask me anything about Mohamed Ech-Chebaby’s research, publications, or contact info.",
    },
  ]);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const canSend = input.trim().length > 0;

  const suggestedButtons = useMemo(
    () => starterQuestions.map((question) => ({ id: question, label: question })),
    []
  );

  const pushMessage = (role: Message["role"], content: React.ReactNode) => {
    setMessages((prev) => [...prev, { id: `${role}-${prev.length}-${Date.now()}`, role, content }]);
  };
  
  const resetChat = () => {
    setMessages([
      {
        id: "intro",
        role: "bot",
        content: "Hi! Ask me anything about Mohamed Ech-Chebaby’s research, publications, or contact info.",
      },
    ]);
  };

  const handleSubmit = (question: string) => {
    const trimmed = question.trim();
    if (!trimmed) return;
    pushMessage("user", trimmed);
    const answer = findAnswer(trimmed);
    pushMessage("bot", answer);
    setInput("");
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-[340px] overflow-hidden rounded-3xl border border-white/40 bg-white/70 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.6)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/70">
          <div className="flex items-center justify-between gap-3 border-b border-white/40 bg-gradient-to-r from-sky-500/10 via-cyan-500/10 to-transparent px-4 py-3 text-sm font-semibold text-ink dark:border-slate-800/70 dark:text-mist">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[rgb(var(--accent))] text-sm font-semibold text-white shadow-soft">
                M
              </span>
              <div className="leading-tight">
                <p>Ask about Mohamed</p>
                <p className="text-xs font-normal text-slate-500 dark:text-slate-400">Research · Publications · CV</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={resetChat}
                className="rounded-full border border-slate-200/70 bg-white/70 px-2.5 py-1 text-xs text-slate-600 shadow-sm transition hover:text-accent dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-slate-200/70 bg-white/70 px-2.5 py-1 text-xs text-slate-600 shadow-sm transition hover:text-accent dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300"
              >
                Close
              </button>
            </div>
          </div>
          <div ref={scrollRef} className="max-h-[320px] space-y-3 overflow-y-auto px-4 py-4 text-sm">
            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.role === "user"
                    ? "ml-auto w-fit max-w-[85%] rounded-2xl bg-[rgb(var(--accent))] px-3 py-2 text-white shadow-[0_10px_30px_-20px_rgba(15,23,42,0.8)]"
                    : "w-fit max-w-[85%] rounded-2xl border border-white/60 bg-white/80 px-3 py-2 text-slate-700 shadow-sm dark:border-slate-800/60 dark:bg-slate-900/70 dark:text-slate-200"
                }
              >
                {message.content}
              </div>
            ))}
          </div>
          <div className="border-t border-slate-200/70 bg-white/60 px-4 py-3 text-xs text-slate-500 dark:border-slate-800/70 dark:bg-slate-950/40">
            <p className="mb-2 font-semibold text-slate-600 dark:text-slate-300">Quick questions</p>
            <div className="flex flex-wrap gap-2">
              {suggestedButtons.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs text-slate-600 shadow-sm transition hover:border-accent hover:text-accent dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300"
                  onClick={() => handleSubmit(item.label)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <form
            className="flex items-center gap-2 border-t border-slate-200/70 bg-white/70 px-4 py-3 dark:border-slate-800/70 dark:bg-slate-950/40"
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit(input);
            }}
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask a question..."
              className="flex-1 rounded-full border border-white/70 bg-white/80 px-3 py-2 text-sm text-slate-700 shadow-sm outline-none focus:border-accent dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
            />
            <button
              type="submit"
              disabled={!canSend}
              className="rounded-full bg-[rgb(var(--accent))] px-3 py-2 text-xs font-semibold text-white shadow-soft transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-full bg-[rgb(var(--accent))] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-24px_rgba(15,23,42,0.7)] transition hover:-translate-y-0.5"
          aria-label="Open chat assistant"
        >
          Chat
          <span aria-hidden>💬</span>
        </button>
      )}
    </div>
  );
}
