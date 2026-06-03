import { AnimatePresence, motion } from "framer-motion";
import { Send, X } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

const suggestedQuestions = [
  "Who is Sagar Sharma?",
  "What is his role at SR18?",
  "What systems has he architected?",
  "What is his leadership philosophy?",
  "What are his core technology skills?",
  "What certifications does he hold?",
  "What is his future vision?",
  "How can I contact him?",
];

const knowledgeBase = {
  name: "Sagar Sharma",
  title: "Chief Technology Officer, SR18 Group",
  location: "Dubai, UAE",
  headline:
    "Technology Leader | AI & Cloud Architect | Building Future-Ready Digital Ecosystems",
  bio: "Sagar Sharma is an experienced technology strategist with 10+ years in software engineering, cloud architecture, cybersecurity, and scalable digital infrastructure. He began as a developer in India, building backend systems and solving complex technical problems. His work expanded into AI, automation, enterprise architecture, and digital transformation.",
  mission:
    "To build technology that does not just work, but evolves, adapts, and leads industries into the future.",
  philosophy: "Innovation must be reliable, secure, and human-driven.",
  achievements: [
    "Built SR18 Gaming's next-generation AI gaming engine",
    "Architected SR18 Technologies' cloud infrastructure across UAE and India",
    "Implemented enterprise-level cybersecurity models",
    "Created automated systems that reduced operational costs by 40%",
    "Led multiple cross-border tech teams",
    "Delivered 50+ enterprise technology systems",
  ],
  experience: [
    "CTO, SR18 Group, 2023-Present, Dubai UAE",
    "Head of Engineering, TechSol India Pvt Ltd, 2019-2023",
    "Senior Software Engineer, CodeSphere Technologies, 2016-2019",
  ],
  education:
    "B.Tech in Computer Science Engineering, Delhi Technological University, 2012-2016",
  certifications: [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Architect",
    "Certified Ethical Hacker",
    "Machine Learning, Stanford Online",
  ],
  skills: [
    "Cloud Architecture",
    "AI & ML",
    "Cybersecurity",
    "Backend Engineering",
    "DevOps",
    "Data Engineering",
    "Scalable Systems Design",
    "API Architecture",
    "Product Strategy",
    "Technical Leadership",
    "Software Development",
    "Project Management",
    "System Optimization",
    "Blockchain/Web3 basics",
    "Team Leadership",
  ],
  projects: [
    "SR18 Gaming Platform: Chief Architect for an AI engine, cloud infrastructure, and security layers. Result: stable scalable platform built for global usage.",
    "SR18 Technologies Cloud System: Lead Architect for a multi-layered cloud ecosystem for enterprise clients across UAE and India.",
    "Enterprise Automation Systems: reduced operational costs by 40% through automation and analytics.",
  ],
  contact: "Email: sagar.sharma@sr18group.com. Website: www.sr18group.com.",
};

function includesAny(value: string, terms: string[]) {
  return terms.some((term) => value.includes(term));
}

function getAssistantResponse(question: string) {
  const q = question.toLowerCase();

  if (includesAny(q, ["contact", "email", "reach", "website", "connect"])) {
    return `You can contact Sagar Sharma at ${knowledgeBase.contact}`;
  }

  if (includesAny(q, ["who", "profile", "bio", "about", "sagar"])) {
    return `${knowledgeBase.name} is ${knowledgeBase.title}, based in ${knowledgeBase.location}. ${knowledgeBase.bio}`;
  }

  if (includesAny(q, ["sr18", "role", "cto", "current"])) {
    return `Sagar Sharma serves as ${knowledgeBase.title} in ${knowledgeBase.location}, leading technology strategy, AI, cloud infrastructure, cybersecurity, automation, and scalable digital ecosystems.`;
  }

  if (includesAny(q, ["system", "project", "architect", "built", "platform"])) {
    return knowledgeBase.projects.join(" ");
  }

  if (includesAny(q, ["philosophy", "leadership", "principle", "mission"])) {
    return `${knowledgeBase.philosophy} His mission is ${knowledgeBase.mission}`;
  }

  if (includesAny(q, ["skill", "technology", "tech stack", "expertise", "capability"])) {
    return `Sagar's core skills include ${knowledgeBase.skills.join(", ")}.`;
  }

  if (includesAny(q, ["certification", "certified", "certificate"])) {
    return `His certifications include ${knowledgeBase.certifications.join(", ")}.`;
  }

  if (includesAny(q, ["future", "vision", "2030"])) {
    return "Sagar's future vision is to build intelligent, secure, and borderless technology ecosystems that connect UAE, India, and global markets through AI, automation, cloud infrastructure, cybersecurity, and enterprise innovation.";
  }

  if (includesAny(q, ["experience", "career", "journey", "work", "education"])) {
    return `Experience: ${knowledgeBase.experience.join("; ")}. Education: ${knowledgeBase.education}.`;
  }

  if (includesAny(q, ["achievement", "impact", "result", "accomplishment"])) {
    return `Key achievements include: ${knowledgeBase.achievements.join("; ")}.`;
  }

  return "I can only answer questions related to Sagar Sharma's professional profile, projects, leadership, and contact information.";
}

export function FloatingAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [activeQuestion, setActiveQuestion] = useState(suggestedQuestions[0]);

  const response = useMemo(() => getAssistantResponse(activeQuestion), [activeQuestion]);

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
    <div className="fixed bottom-5 right-5 z-50 md:bottom-7 md:right-7">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="absolute bottom-16 right-0 w-[calc(100vw-2.5rem)] max-w-xl overflow-hidden rounded-3xl border border-foreground/14 bg-white shadow-[0_24px_80px_oklch(0.18_0.01_260/0.16)]"
          >
            <div className="border-b border-border px-5 py-5 md:px-6">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="text-lg font-semibold tracking-normal text-foreground">
                    Ask Sagar's Assistant
                  </div>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    Explore Sagar Sharma's experience, technology leadership, projects, and future
                    vision.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-foreground/30 hover:text-foreground"
                  aria-label="Close assistant"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="max-h-[min(680px,calc(100vh-9rem))] overflow-y-auto px-5 py-5 md:px-6">
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => ask(item)}
                    className={`rounded-full border px-3.5 py-2 text-xs transition ${
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
                  placeholder="Ask about Sagar's profile, work, or vision"
                  className="min-w-0 flex-1 rounded-full border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-foreground/45"
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
        className="rounded-full border border-foreground bg-foreground px-5 py-3 text-sm font-medium text-background shadow-[0_16px_42px_oklch(0.18_0.01_260/0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_54px_oklch(0.18_0.01_260/0.22)]"
        aria-expanded={isOpen}
      >
        Ask the CTO
      </motion.button>
    </div>
  );
}
