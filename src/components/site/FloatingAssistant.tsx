import { AnimatePresence, motion } from "framer-motion";
import { Send, X } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import type { SiteContent } from "@/data/siteContent";

function includesAny(value: string, terms: string[]) {
  return terms.some((term) => value.includes(term));
}

function getAssistantResponse(question: string, content: SiteContent["assistant"]) {
  const q = question.toLowerCase();
  const answer = content.knowledgeBaseAnswers.find((entry) =>
    includesAny(
      q,
      entry.keywords
        .split(",")
        .map((keyword) => keyword.trim().toLowerCase())
        .filter(Boolean),
    ),
  );

  return answer?.answer ?? content.fallbackResponse;
}

export function FloatingAssistant({ content }: { content: SiteContent["assistant"] }) {
  const suggestedQuestions = content.suggestedQuestions;
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [activeQuestion, setActiveQuestion] = useState(suggestedQuestions[0] ?? "");

  const response = useMemo(
    () => getAssistantResponse(activeQuestion, content),
    [activeQuestion, content],
  );

  function ask(nextQuestion: string) {
    const trimmed = nextQuestion.trim();

    if (!trimmed) return;

    setActiveQuestion(trimmed);
    setQuestion("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ask(question);
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-5 sm:right-5 md:bottom-7 md:right-7">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="fixed inset-x-3 bottom-20 max-h-[calc(100dvh-6.5rem)] overflow-hidden rounded-[8px] border border-foreground/14 bg-white shadow-[0_24px_80px_oklch(0.18_0.01_260/0.16)] sm:absolute sm:inset-x-auto sm:bottom-16 sm:right-0 sm:w-[min(36rem,calc(100vw-2.5rem))] sm:max-w-xl"
          >
            <div className="border-b border-border px-4 py-4 sm:px-5 sm:py-5 md:px-6">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="text-base font-semibold tracking-normal text-foreground sm:text-lg">
                    {content.title}
                  </div>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {content.subtitle}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-foreground/30 hover:text-foreground"
                  aria-label="Close assistant"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="max-h-[calc(100dvh-13rem)] overflow-y-auto overscroll-contain px-4 py-4 sm:max-h-[min(680px,calc(100vh-9rem))] sm:px-5 sm:py-5 md:px-6">
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => ask(item)}
                    className={`min-h-10 rounded-full border px-3.5 py-2 text-xs transition sm:min-h-0 ${
                      activeQuestion === item
                        ? "border-foreground bg-foreground text-background"
                        : "border-border text-muted-foreground hover:border-foreground/35 hover:text-foreground"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="mt-6 border-t border-border pt-5">
                <div className="rounded-2xl bg-muted px-4 py-3 text-sm leading-relaxed text-foreground">
                  {activeQuestion}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeQuestion}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="mt-4 border-l border-foreground/24 pl-4 text-sm leading-relaxed text-foreground/82"
                  >
                    {response}
                  </motion.div>
                </AnimatePresence>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 flex gap-2 border-t border-border pt-5">
                <input
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                  placeholder={content.placeholder}
                  className="min-h-11 min-w-0 flex-1 rounded-full border border-border bg-white px-4 py-3 text-base text-foreground outline-none transition placeholder:text-muted-foreground focus:border-foreground/45 sm:text-sm"
                />
                <button
                  type="submit"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-foreground text-background transition hover:opacity-90"
                  aria-label="Ask question"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        whileTap={{ scale: 0.98 }}
        className="min-h-11 rounded-full border border-foreground bg-foreground px-5 py-3 text-sm font-medium text-background shadow-[0_16px_42px_oklch(0.18_0.01_260/0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_54px_oklch(0.18_0.01_260/0.22)]"
        aria-expanded={isOpen}
      >
        {content.buttonText}
      </motion.button>
    </div>
  );
}
