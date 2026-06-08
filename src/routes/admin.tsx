import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Lock, Plus, RotateCcw, Save, Trash2 } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import {
  defaultSiteContent,
  getStoredSiteContent,
  saveStoredSiteContent,
  type SiteContent,
} from "@/data/siteContent";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [{ title: "Admin CMS — Sagar Sharma Portfolio" }],
  }),
  component: AdminPage,
});

type SectionKey = keyof SiteContent;
type EditablePrimitive = string | number | boolean | null;
type EditableValue = EditablePrimitive | EditableObject | EditableValue[];
type EditableObject = { [key: string]: EditableValue };

const ADMIN_PASSWORD = "admin123";
const ADMIN_SESSION_KEY = "sagar-portfolio-admin-auth";

const sections: Array<{ key: SectionKey; label: string }> = [
  { key: "header", label: "Header" },
  { key: "hero", label: "Hero" },
  { key: "metrics", label: "Metrics" },
  { key: "leadership", label: "Leadership" },
  { key: "ecosystem", label: "Ecosystem" },
  { key: "projects", label: "Projects" },
  { key: "journey", label: "Journey" },
  { key: "futureVision", label: "Future Vision" },
  { key: "assistant", label: "Assistant" },
  { key: "contact", label: "Contact" },
  { key: "footer", label: "Footer" },
];

function titleFromKey(key: string) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function cloneContent(content: SiteContent): SiteContent {
  return structuredClone(content);
}

function toEditable(value: unknown): EditableValue {
  if (Array.isArray(value)) return value.map(toEditable);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, nextValue]) => [key, toEditable(nextValue)]),
    );
  }
  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    value === null
  ) {
    return value;
  }
  return "";
}

function setAtPath(value: EditableValue, path: Array<string | number>, nextValue: EditableValue) {
  if (path.length === 0) return nextValue;

  const [head, ...rest] = path;
  if (Array.isArray(value)) {
    return value.map((item, index) =>
      index === head ? setAtPath(item, rest, nextValue) : item,
    ) as EditableValue;
  }

  if (value && typeof value === "object") {
    return { ...value, [head]: setAtPath(value[String(head)], rest, nextValue) };
  }

  return value;
}

function removeAtPath(value: EditableValue, path: Array<string | number>) {
  const [head, ...rest] = path;
  if (path.length === 1 && Array.isArray(value)) {
    return value.filter((_, index) => index !== head);
  }

  if (Array.isArray(value)) {
    return value.map((item, index) => (index === head ? removeAtPath(item, rest) : item));
  }

  if (value && typeof value === "object") {
    return { ...value, [head]: removeAtPath(value[String(head)], rest) };
  }

  return value;
}

function addAtPath(value: EditableValue, path: Array<string | number>, template: EditableValue) {
  if (path.length === 0 && Array.isArray(value)) {
    return [...value, template];
  }

  const [head, ...rest] = path;
  if (Array.isArray(value)) {
    return value.map((item, index) => (index === head ? addAtPath(item, rest, template) : item));
  }

  if (value && typeof value === "object") {
    return { ...value, [head]: addAtPath(value[String(head)], rest, template) };
  }

  return value;
}

function getAtPath(value: EditableValue, path: Array<string | number>): EditableValue {
  return path.reduce<EditableValue>((current, segment) => {
    if (Array.isArray(current)) return current[Number(segment)] ?? "";
    if (current && typeof current === "object") return current[String(segment)] ?? "";
    return "";
  }, value);
}

function emptyFromTemplate(template: EditableValue): EditableValue {
  if (Array.isArray(template)) return [];
  if (template && typeof template === "object") {
    return Object.fromEntries(
      Object.entries(template).map(([key, value]) => [key, emptyFromTemplate(value)]),
    );
  }
  if (typeof template === "number") return 0;
  if (typeof template === "boolean") return false;
  return "";
}

function FieldEditor({
  label,
  value,
  path,
  onChange,
  onAdd,
  onRemove,
}: {
  label: string;
  value: EditableValue;
  path: Array<string | number>;
  onChange: (path: Array<string | number>, value: EditableValue) => void;
  onAdd: (path: Array<string | number>, template: EditableValue) => void;
  onRemove: (path: Array<string | number>) => void;
}) {
  if (Array.isArray(value)) {
    const template = value[0] ? emptyFromTemplate(value[0]) : "";

    return (
      <div className="rounded-[8px] border border-border bg-white p-4">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-foreground">{titleFromKey(label)}</div>
            <div className="mt-1 text-xs text-muted-foreground">{value.length} items</div>
          </div>
          <button
            type="button"
            onClick={() => onAdd(path, template)}
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-foreground/16 px-3 text-xs font-medium transition hover:border-foreground/40"
          >
            <Plus className="h-4 w-4" />
            Add
          </button>
        </div>
        <div className="grid gap-4">
          {value.map((item, index) => (
            <div key={index} className="rounded-[8px] border border-border bg-secondary/35 p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  Item {index + 1}
                </div>
                <button
                  type="button"
                  onClick={() => onRemove([...path, index])}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-foreground/30 hover:text-foreground"
                  aria-label={`Delete ${label} item ${index + 1}`}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <FieldEditor
                label={`${label} ${index + 1}`}
                value={item}
                path={[...path, index]}
                onChange={onChange}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (value && typeof value === "object") {
    return (
      <div className="grid gap-4">
        {Object.entries(value).map(([key, nextValue]) => (
          <FieldEditor
            key={key}
            label={key}
            value={nextValue}
            path={[...path, key]}
            onChange={onChange}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ))}
      </div>
    );
  }

  const isLongText = typeof value === "string" && (value.length > 80 || value.includes("\n"));

  return (
    <label className="grid gap-2">
      <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {titleFromKey(label)}
      </span>
      {typeof value === "number" ? (
        <input
          type="number"
          value={value}
          onChange={(event) => onChange(path, Number(event.target.value))}
          className="min-h-11 rounded-[8px] border border-border bg-white px-3 text-sm outline-none transition focus:border-foreground/40"
        />
      ) : isLongText ? (
        <textarea
          value={String(value ?? "")}
          onChange={(event) => onChange(path, event.target.value)}
          rows={4}
          className="min-h-28 rounded-[8px] border border-border bg-white px-3 py-3 text-sm leading-relaxed outline-none transition focus:border-foreground/40"
        />
      ) : (
        <input
          value={String(value ?? "")}
          onChange={(event) => onChange(path, event.target.value)}
          className="min-h-11 rounded-[8px] border border-border bg-white px-3 text-sm outline-none transition focus:border-foreground/40"
        />
      )}
    </label>
  );
}

function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => typeof window !== "undefined" && window.sessionStorage.getItem(ADMIN_SESSION_KEY) === "1",
  );
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [content, setContent] = useState<SiteContent>(() => getStoredSiteContent());
  const [activeSection, setActiveSection] = useState<SectionKey>("header");
  const [savedSection, setSavedSection] = useState<SectionKey | null>(null);

  const activeConfig = useMemo(
    () => sections.find((section) => section.key === activeSection) ?? sections[0],
    [activeSection],
  );

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password === ADMIN_PASSWORD) {
      window.sessionStorage.setItem(ADMIN_SESSION_KEY, "1");
      setIsAuthenticated(true);
      setAuthError("");
      return;
    }
    setAuthError("Invalid password.");
  }

  function updateActiveSection(nextSection: EditableValue) {
    setContent((current) => ({ ...current, [activeSection]: nextSection }) as SiteContent);
    setSavedSection(null);
  }

  function handleChange(path: Array<string | number>, nextValue: EditableValue) {
    const editableSection = toEditable(content[activeSection]);
    updateActiveSection(setAtPath(editableSection, path, nextValue));
  }

  function handleAdd(path: Array<string | number>, template: EditableValue) {
    const editableSection = toEditable(content[activeSection]);
    updateActiveSection(addAtPath(editableSection, path, template));
  }

  function handleRemove(path: Array<string | number>) {
    const editableSection = toEditable(content[activeSection]);
    const parentPath = path.slice(0, -1);
    updateActiveSection(
      setAtPath(
        editableSection,
        parentPath,
        removeAtPath(getAtPath(editableSection, parentPath), [path[path.length - 1]]),
      ),
    );
  }

  function saveSection() {
    saveStoredSiteContent(content);
    setSavedSection(activeSection);
    window.setTimeout(() => setSavedSection(null), 1800);
  }

  function resetSection() {
    const nextContent = cloneContent(content);
    nextContent[activeSection] = cloneContent(defaultSiteContent)[activeSection] as never;
    setContent(nextContent);
    saveStoredSiteContent(nextContent);
    setSavedSection(activeSection);
    window.setTimeout(() => setSavedSection(null), 1800);
  }

  if (!isAuthenticated) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm rounded-[8px] border border-border bg-white p-6 shadow-[0_24px_80px_oklch(0.18_0.01_260/0.12)]"
        >
          <div className="grid h-11 w-11 place-items-center rounded-full bg-foreground text-background">
            <Lock className="h-4 w-4" />
          </div>
          <h1 className="mt-5 font-display text-3xl leading-tight">Admin CMS</h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Enter the temporary admin password to manage portfolio content.
          </p>
          <label className="mt-6 grid gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="min-h-11 rounded-[8px] border border-border px-3 outline-none transition focus:border-foreground/40"
            />
          </label>
          {authError && <p className="mt-3 text-sm text-destructive">{authError}</p>}
          <button
            type="submit"
            className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition hover:opacity-90"
          >
            Unlock Dashboard
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Private CMS
            </div>
            <h1 className="mt-2 font-display text-3xl leading-tight md:text-4xl">
              Portfolio Admin
            </h1>
          </div>
          <Link
            to="/"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-border px-5 text-sm font-medium transition hover:border-foreground/35"
          >
            View Website
          </Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[16rem_1fr] lg:py-8">
        <aside className="lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)]">
          <nav className="grid gap-1 rounded-[8px] border border-border bg-white p-2">
            {sections.map((section) => (
              <button
                key={section.key}
                type="button"
                onClick={() => setActiveSection(section.key)}
                className={`min-h-11 rounded-[8px] px-3 text-left text-sm font-medium transition ${
                  activeSection === section.key
                    ? "bg-foreground text-background"
                    : "text-foreground/72 hover:bg-muted hover:text-foreground"
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </aside>

        <section className="min-w-0 rounded-[8px] border border-border bg-white">
          <div className="flex flex-col gap-4 border-b border-border px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Editing
              </div>
              <h2 className="mt-1 font-display text-2xl leading-tight">{activeConfig.label}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {savedSection === activeSection && (
                <div className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-3 text-xs font-medium text-foreground">
                  <Check className="h-4 w-4" />
                  Saved
                </div>
              )}
              <button
                type="button"
                onClick={resetSection}
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-4 text-xs font-medium transition hover:border-foreground/35"
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </button>
              <button
                type="button"
                onClick={saveSection}
                className="inline-flex min-h-10 items-center gap-2 rounded-full bg-foreground px-4 text-xs font-medium text-background transition hover:opacity-90"
              >
                <Save className="h-4 w-4" />
                Save
              </button>
            </div>
          </div>

          <div className="grid gap-5 bg-secondary/25 p-4 sm:p-6">
            <FieldEditor
              label={String(activeSection)}
              value={toEditable(content[activeSection])}
              path={[]}
              onChange={handleChange}
              onAdd={handleAdd}
              onRemove={handleRemove}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
