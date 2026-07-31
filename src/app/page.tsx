"use client";

import { useCallback, useEffect, useState } from "react";
import { sections, type SectionId } from "@/lib/sections";

type PageId = "home" | SectionId;

const allPages: { id: PageId; question: string }[] = [
  { id: "home", question: "Home." },
  ...sections,
];

const snapshotRows = [
  {
    title: "Operates at C-1",
    detail:
      "Partnering with CTO and CDO organizations on AI strategy, delivery performance, operational risk, and capability.",
  },
  {
    title: "Leads at every layer",
    detail:
      "Strategy, design, and execution — having come up through delivery and design before strategy.",
  },
  {
    title: "Designs for humans and agents",
    detail:
      "Keeping AI in service of the people it affects — agent experience without abandoning the human one.",
  },
  {
    title: "Owns enterprise architecture",
    detail:
      "Tying business value to technology decisions across the entire group.",
  },
  {
    title: "Runs globally distributed teams",
    detail: "20+ countries — hybrid, on-site, and remote delivery.",
  },
  {
    title: "Steps into the hard ones",
    detail:
      "High-stakes programs where complexity is high and failure isn’t an option.",
  },
];

const brands = [
  "Microsoft",
  "Google",
  "Amazon",
  "IBM",
  "NVIDIA",
  "Samsung",
  "Berkshire Hathaway",
  "BP",
  "Deloitte",
  "McKinsey & Co.",
  "DBS",
  "Resorts World Sentosa",
  "Panasonic",
  "VMware",
  "Atlassian",
  "Discover",
  "7-Eleven",
  "KFC",
  "Dairy Queen",
];

const metrics = [
  { value: "20+", label: "Years leading enterprise transformation" },
  { value: "500+", label: "Practitioners led" },
  { value: "20+", label: "Countries" },
  { value: "Fortune 100", label: "Enterprise clients" },
];

const arc = [
  { i: "01", label: "Human behavior", sub: "Psychology & cognition" },
  { i: "02", label: "Design & experience", sub: "Craft to product" },
  { i: "03", label: "Business & consulting", sub: "Delivery & advisory" },
  { i: "04", label: "Enterprise strategy", sub: "Operating models" },
  { i: "05", label: "AI & the autonomous enterprise", sub: "What’s next" },
];

const focusPillars = [
  {
    title: "Enterprise AI strategy",
    detail:
      "A cohesive strategy with the foresight to set direction and the governance to make it real — not a pile of disconnected pilots.",
  },
  {
    title: "The autonomous enterprise",
    detail:
      "Redesigning operating models, workflows, and decision rights for an enterprise where AI agents and people work as one system.",
  },
  {
    title: "Human + agent experience",
    detail:
      "Designing for both the people and the agents in the loop — AI for humanity, with experience as the measure of success.",
  },
  {
    title: "Governance & execution",
    detail:
      "Treating governance, trust, and disciplined execution as the product — so AI scales safely and actually ships.",
  },
];

const howIWork = [
  {
    title: "Make adoption executable",
    detail:
      "Technology only matters if it fits the operating model, incentives, and delivery reality of the organization adopting it.",
  },
  {
    title: "Treat governance as a product",
    detail:
      "Good governance isn’t overhead — it’s how risk is reduced and value is protected as AI scales.",
  },
  {
    title: "Execution is strategy when stakes are high",
    detail:
      "In complex transformations, the quality of execution is the strategy.",
  },
];

const experience = [
  {
    title: "SVP, Digital Strategy & Innovation — SoftServe",
    dates: "2021–Present",
    framing:
      "Lead a horizontal strategy and delivery organization in the Office of the CTO — now being refocused on enterprise AI strategy and the autonomous enterprise.",
    modules: [
      {
        label: "Scope",
        value:
          "A matrixed global Digital Strategy & Innovation organization whose capabilities deploy across the full project lifecycle — pre-sales, strategy, solution, and delivery — spanning industries and geographies.",
      },
      {
        label: "Accountability",
        value:
          "Own delivery outcomes, operational risk, and capability strategy in executive and board contexts; report to the CTO/CDO with quarterly board governance.",
      },
      {
        label: "Operating Model",
        value:
          "Everything but pure technology — design and experience, business analysis, product management, consulting, value realization, digital strategy, enterprise architecture, change management, and transformation program management (governance).",
      },
      {
        label: "Delivery Reality",
        value:
          "Set strategy and oversight for complex, multi-year programs where ambiguity and risk are high.",
      },
    ],
  },
  {
    title: "VP, Digital Strategy & Design — SoftServe",
    dates: "2020–2021",
    framing:
      "Built the strategic foundation for enterprise transformation work and scaled advisory delivery.",
    modules: [
      {
        label: "Scope",
        value:
          "Global design plus digital strategy & transformation consulting under a single executive remit.",
      },
      {
        label: "Accountability",
        value:
          "Founded the digital strategy function and organizational change management capability.",
      },
      {
        label: "Delivery Reality",
        value:
          "Led transformation programs across employee, customer, and business experience.",
      },
    ],
  },
  {
    title: "VP, Global Experience Design — SoftServe",
    dates: "2016–2021",
    framing:
      "Scaled experience design into a global capability that shifted go-to-market focus.",
    modules: [
      {
        label: "Scope",
        value:
          "Built and scaled the global experience design practice from early stage.",
      },
      {
        label: "Operating Model",
        value:
          "Established design operations, leadership structures, and delivery models.",
      },
      {
        label: "Accountability",
        value:
          "Positioned experience as a strategic differentiator for enterprise transformation.",
      },
    ],
  },
  {
    title: "Senior Manager, Platform Experience — IBM Cloud / IBM Design",
    dates: "2015–2016",
    framing:
      "Defined platform experience governance to align distributed product ecosystems.",
    modules: [
      {
        label: "Scope",
        value:
          "Led cross-functional platform team spanning design, engineering, and architecture.",
      },
      {
        label: "Accountability",
        value:
          "Hired to build and govern what became the IBM Carbon Design System for consistency at scale.",
      },
      {
        label: "Delivery Reality",
        value:
          "Partnered with enterprise customers through IBM Garage-style engagements driving adoption.",
      },
    ],
  },
  {
    title: "Earlier — Creative & Design Leadership",
    dates: "2004–2015",
    framing:
      "Before IBM and SoftServe, I came up through agencies and brands — Associate Creative Director at FCB Global (Fortune 500 financial services), Digital Design Director at Eyemart Express, and Design Director / Partner at SCDS Worldwide — building the craft and execution foundation the later design, strategy, and transformation work is built on.",
    modules: [],
  },
];

const credentials = [
  "MBA — International University Isabel I de Castilla",
  "M.S., Artificial Intelligence for Business — Escuela de Negocios Europea de Barcelona",
  "MFA — Academy of Art University",
  "B.A., Psychology & Biology — Rhodes College",
  "MicroMasters, Business Leadership — University of Queensland",
  "Prosci Certified Change Practitioner",
];

const speakingTopics = [
  {
    title: "The Paradoxical Nature of AI as the Key to our Digital Well-Being",
    venue: "IT Arena 2019, Lviv",
  },
  {
    title: "Perception Design: Shaping the Future of Reality",
    venue: "IT Weekend Ukraine 2017, Kyiv",
  },
  {
    title: "Culture Change with DesignOps at Scale",
    venue: "Iteracia by Projector",
  },
  {
    title: "Bluemix Design System (now IBM Carbon)",
    venue: "IBM InterConnect 2016, Las Vegas",
  },
];

/* --- Shared building blocks --------------------------------------------- */

function QuestionHeadline({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="pt-14 text-[clamp(3rem,10vw,6.5rem)] font-bold leading-[0.98] tracking-[-0.04em] text-[#f4f2ec] sm:pt-20">
      {children}
    </h1>
  );
}

function Statement({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-3xl font-semibold leading-[1.12] tracking-[-0.02em] text-[#f4f2ec] sm:text-5xl">
      {children}
    </p>
  );
}

function Rule() {
  return <div className="border-t border-white/15" />;
}

export default function Home() {
  const [page, setPage] = useState<PageId>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverPage, setHoverPage] = useState<PageId | null>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    const apply = () => {
      const hash = window.location.hash.replace("#", "");
      setPage(
        sections.some((section) => section.id === hash)
          ? (hash as SectionId)
          : "home",
      );
      window.scrollTo(0, 0);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const navigate = useCallback((id: PageId) => {
    setMenuOpen(false);
    if (id === "home") {
      history.pushState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
      setPage("home");
      window.scrollTo(0, 0);
    } else {
      window.location.hash = id;
    }
  }, []);

  const pageIndex =
    page === "home" ? -1 : sections.findIndex((s) => s.id === page);
  const prev: PageId | null =
    pageIndex === -1 ? null : pageIndex === 0 ? "home" : sections[pageIndex - 1].id;
  const next: PageId | null =
    pageIndex === -1 || pageIndex === sections.length - 1
      ? null
      : sections[pageIndex + 1].id;

  return (
    <div className="min-h-screen bg-[#121210] text-[#f4f2ec]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1360px] flex-col px-6 sm:px-10">
        {/* Top bar — name left, page circles right */}
        <header className="flex items-center justify-between gap-4 pt-6 sm:pt-8">
          <button
            type="button"
            onClick={() => navigate("home")}
            className="text-left text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:text-base"
          >
            <span className="font-semibold tracking-tight text-[#f4f2ec]">
              Matthew McBride
            </span>
            <span className="hidden text-[#7c7973] md:inline">
              {" "}
              · Enterprise AI &amp; Transformation Executive
            </span>
          </button>
          {/* Desktop — horizontal page indicator */}
          <div className="hidden items-center gap-5 md:flex">
            <span
              aria-hidden="true"
              className="w-[200px] truncate text-right font-mono text-[10px] uppercase tracking-[0.25em] text-[#7c7973]"
            >
              {allPages.find((p) => p.id === (hoverPage ?? page))?.question}
            </span>
            <nav className="flex items-center gap-2" aria-label="Pages">
              {allPages.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigate(item.id)}
                  onMouseEnter={() => setHoverPage(item.id)}
                  onMouseLeave={() => setHoverPage(null)}
                  onFocus={() => setHoverPage(item.id)}
                  onBlur={() => setHoverPage(null)}
                  aria-label={item.question}
                  aria-current={page === item.id ? "page" : undefined}
                  className="group flex h-8 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  <span
                    className={`h-[3px] rounded-full transition-all duration-300 ${
                      page === item.id
                        ? "w-12 bg-[#f4f2ec]"
                        : "w-7 bg-white/25 group-hover:bg-white/70"
                    }`}
                  />
                </button>
              ))}
            </nav>
          </div>

          {/* Mobile — menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            className="font-mono text-xs uppercase tracking-[0.3em] text-[#d9d6cd] transition hover:text-[#f4f2ec] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 md:hidden"
          >
            Menu
          </button>
        </header>

        {/* Full-screen menu — desktop and mobile */}
        {menuOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            className="fixed inset-0 z-50 overflow-y-auto bg-[#121210]"
          >
            <div className="mx-auto flex w-full max-w-[1360px] flex-col px-6 sm:px-10">
              <div className="flex items-center justify-between gap-4 pt-6 sm:pt-8">
                <span className="text-sm font-semibold tracking-tight text-[#f4f2ec] sm:text-base">
                  Matthew McBride
                </span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-xs uppercase tracking-[0.3em] text-[#d9d6cd] transition hover:text-[#f4f2ec] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  Close
                </button>
              </div>
              <nav className="mt-14 pb-16 sm:mt-20" aria-label="Pages">
                {allPages.map(
                  (item) => (
                    <div key={item.id}>
                      <Rule />
                      <button
                        type="button"
                        onClick={() => navigate(item.id)}
                        aria-current={page === item.id ? "page" : undefined}
                        className={`flex w-full justify-end py-6 text-right text-3xl font-bold tracking-[-0.03em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:py-8 sm:text-5xl ${
                          page === item.id
                            ? "text-[#f4f2ec]"
                            : "text-[#7c7973] hover:text-[#f4f2ec]"
                        }`}
                      >
                        {item.question}
                      </button>
                    </div>
                  ),
                )}
                <Rule />
              </nav>
            </div>
          </div>
        )}

        <main key={page} className="page-enter flex flex-1 flex-col pb-10">
          {/* ------------------------------------------------ HOME */}
          {page === "home" && (
            <>
              <div className="pt-16 sm:pt-24">
                <p className="text-lg text-[#a3a099] sm:text-xl">
                  Hi, I’m Matthew.
                </p>
                <h1 className="mt-6 max-w-[1200px] text-[clamp(2.8rem,8.5vw,6.2rem)] font-bold leading-[1.0] tracking-[-0.04em] text-[#f4f2ec]">
                  AI strategy is cheap.
                  <br />
                  Operating reality isn’t.
                </h1>
                <p className="mt-10 max-w-[900px] text-2xl font-medium leading-[1.25] tracking-[-0.01em] text-[#d9d6cd] sm:text-4xl">
                  I help large enterprises make AI real — and build toward the
                  autonomous enterprise.
                </p>
              </div>

              {/* Question index — the navigation */}
              <div className="mt-16 sm:mt-24">
                {sections.map((section) => (
                  <div key={section.id}>
                    <Rule />
                    <button
                      type="button"
                      onClick={() => navigate(section.id)}
                      className="group flex w-full items-center justify-between gap-6 py-7 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:py-9"
                    >
                      <span
                        aria-hidden="true"
                        className="text-2xl font-semibold text-[#7c7973] transition group-hover:translate-x-1 group-hover:text-[#f4f2ec] sm:text-4xl"
                      >
                        →
                      </span>
                      <span className="text-right text-2xl font-semibold tracking-[-0.02em] text-[#f4f2ec] transition group-hover:translate-x-[-4px] sm:text-4xl">
                        {section.question}
                      </span>
                    </button>
                  </div>
                ))}
                <Rule />
              </div>
            </>
          )}

          {/* ------------------------------------------------ 1. SNAPSHOT */}
          {page === "snapshot" && (
            <>
              <QuestionHeadline>The short version.</QuestionHeadline>
              <div className="mt-16 sm:mt-24">
                <Rule />
                <div className="py-10 sm:py-14">
                  <Statement>
                    From human behavior,
                    <br />
                    through design and business,
                    <br />
                    to enterprise AI.
                  </Statement>
                  <p className="mt-8 max-w-[760px] text-lg leading-relaxed text-[#d9d6cd] sm:text-xl">
                    I help enterprises adopt AI through a cohesive strategy —
                    one with the foresight, governance, and execution to hold up
                    in the real world, not just on a slide.
                  </p>
                  <p className="mt-5 max-w-[760px] text-lg leading-relaxed text-[#d9d6cd] sm:text-xl">
                    And the work stays pointed at people. We already design for
                    agent experience — without abandoning the human one.
                  </p>
                </div>
                {snapshotRows.map((row) => (
                  <div key={row.title}>
                    <Rule />
                    <div className="flex flex-col gap-2 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10">
                      <p className="text-2xl font-semibold tracking-[-0.02em] text-[#f4f2ec] sm:text-3xl">
                        {row.title}
                      </p>
                      <p className="max-w-[520px] text-base leading-relaxed text-[#a3a099] sm:text-right">
                        {row.detail}
                      </p>
                    </div>
                  </div>
                ))}
                <Rule />
              </div>
            </>
          )}

          {/* ------------------------------------------------ 2. FOCUS */}
          {page === "focus" && (
            <>
              <QuestionHeadline>The mandate.</QuestionHeadline>
              <div className="mt-16 sm:mt-24">
                <Rule />
                <div className="py-10 sm:py-14">
                  <Statement>
                    Enterprise AI — run as one system.
                    <br />
                    Agents and people together.
                  </Statement>
                  <p className="mt-8 max-w-[760px] text-lg leading-relaxed text-[#d9d6cd] sm:text-xl">
                    I’m leading a refocus of my organization around enterprise
                    AI — setting the strategy, governance, and operating model
                    for an autonomous enterprise. The throughline is human: even
                    as we design for agent experience, the work exists to
                    improve the human experience, not replace it.
                  </p>
                  <p className="mt-5 max-w-[760px] text-lg leading-relaxed text-[#d9d6cd] sm:text-xl">
                    And I’m running it inside my own organization first —
                    rebuilding each practice AI-first. The autonomous enterprise
                    isn’t a thesis I advise on; it’s one I’m operating.
                  </p>
                </div>
                {focusPillars.map((pillar) => (
                  <div key={pillar.title}>
                    <Rule />
                    <div className="flex flex-col gap-2 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10">
                      <p className="text-2xl font-semibold tracking-[-0.02em] text-[#f4f2ec] sm:text-3xl">
                        {pillar.title}
                      </p>
                      <p className="max-w-[520px] text-base leading-relaxed text-[#a3a099] sm:text-right">
                        {pillar.detail}
                      </p>
                    </div>
                  </div>
                ))}
                <Rule />
              </div>
            </>
          )}

          {/* ------------------------------------------------ 3. METHOD */}
          {page === "method" && (
            <>
              <QuestionHeadline>How I work.</QuestionHeadline>
              <div className="mt-16 sm:mt-24">
                <Rule />
                <div className="py-10 sm:py-14">
                  <Statement>
                    Three rules,
                    <br />
                    learned the hard way.
                  </Statement>
                </div>
                {howIWork.map((item) => (
                  <div key={item.title}>
                    <Rule />
                    <div className="py-8">
                      <p className="text-2xl font-semibold tracking-[-0.02em] text-[#f4f2ec] sm:text-3xl">
                        {item.title}
                      </p>
                      <p className="mt-3 max-w-[720px] text-base leading-relaxed text-[#a3a099] sm:text-lg">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
                <Rule />
              </div>
            </>
          )}

          {/* ------------------------------------------------ 4. IMPACT */}
          {page === "impact" && (
            <>
              <QuestionHeadline>The track record.</QuestionHeadline>
              <div className="mt-16 sm:mt-24">
                <Rule />
                <div className="py-10 sm:py-14">
                  <Statement>
                    The numbers tell it
                    <br />
                    faster than I can.
                  </Statement>
                  <p className="mt-8 max-w-[760px] text-lg leading-relaxed text-[#d9d6cd] sm:text-xl">
                    What began as a sub-20-person design team, I now lead as a
                    ~500-person global organization — effectively everything but
                    pure technology inside a full-service digital services firm,
                    across retail, life sciences, financial services, energy,
                    and hi-tech.
                  </p>
                </div>
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <Rule />
                    <div className="flex items-baseline justify-between gap-6 py-7">
                      <p className="text-3xl font-semibold tracking-[-0.02em] text-[#f4f2ec] sm:text-5xl">
                        {metric.value}
                      </p>
                      <p className="text-base text-[#a3a099] sm:text-xl">
                        {metric.label}
                      </p>
                    </div>
                  </div>
                ))}
                <Rule />

                <div className="py-10">
                  <p className="eyebrow">Selected organizations served</p>
                  <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
                    {brands.map((brand) => (
                      <span key={brand} className="brandmark">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
                <Rule />

                {/* Career arc */}
                <div className="py-10">
                  <p className="eyebrow">The throughline</p>
                  <div className="mt-8 hidden sm:flex">
                    {arc.map((s, i) => (
                      <div key={s.label} className="flex-1">
                        <div className="flex items-center">
                          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#f4f2ec]" />
                          {i < arc.length - 1 && (
                            <span
                              className="h-px flex-1 bg-white/25"
                              aria-hidden="true"
                            />
                          )}
                        </div>
                        <p className="mt-3 text-[10px] font-mono uppercase tracking-[0.25em] text-[#7c7973]">
                          {s.i}
                        </p>
                        <p className="mt-2 pr-4 text-base font-semibold text-[#f4f2ec]">
                          {s.label}
                        </p>
                        <p className="mt-1 pr-4 text-sm text-[#7c7973]">
                          {s.sub}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 space-y-4 sm:hidden">
                    {arc.map((s) => (
                      <div key={s.label} className="flex items-center gap-3">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-[#f4f2ec]" />
                        <div>
                          <p className="text-base font-semibold text-[#f4f2ec]">
                            {s.label}
                          </p>
                          <p className="text-sm text-[#7c7973]">{s.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <Rule />

                {/* Experience */}
                {experience.map((item) => (
                  <div key={item.title}>
                    <div className="py-10">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10">
                        <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#f4f2ec] sm:text-3xl">
                          {item.title}
                        </h3>
                        <p className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-[#7c7973]">
                          {item.dates}
                        </p>
                      </div>
                      <p className="mt-4 max-w-[820px] text-base leading-relaxed text-[#d9d6cd] sm:text-lg">
                        {item.framing}
                      </p>
                      {item.modules.length > 0 && (
                        <div className="mt-6 grid gap-5 sm:grid-cols-2">
                          {item.modules.map((module) => (
                            <div key={module.label}>
                              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#7c7973]">
                                {module.label}
                              </p>
                              <p className="mt-2 text-sm leading-relaxed text-[#a3a099]">
                                {module.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <Rule />
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ------------------------------------------------ 5. CREDENTIALS */}
          {page === "credentials" && (
            <>
              <QuestionHeadline>The foundation.</QuestionHeadline>
              <div className="mt-16 sm:mt-24">
                <Rule />
                <div className="py-10 sm:py-14">
                  <Statement>
                    A foundation in human behavior, design, and business — the
                    throughline behind keeping AI in service of people.
                  </Statement>
                </div>
                {credentials.map((item) => (
                  <div key={item}>
                    <Rule />
                    <p className="py-6 text-xl font-medium tracking-[-0.01em] text-[#f4f2ec] sm:text-2xl">
                      {item}
                    </p>
                  </div>
                ))}
                <Rule />

                <div className="grid gap-12 py-12 sm:grid-cols-2">
                  <div>
                    <p className="eyebrow">Speaking</p>
                    <p className="mt-5 max-w-[480px] text-base leading-relaxed text-[#d9d6cd] sm:text-lg">
                      Internationally recognized keynote speaker on AI, design,
                      and the future of work — IBM InterConnect, IT Arena, IT
                      Weekend, and more.
                    </p>
                    <ul className="mt-5 space-y-3">
                      {speakingTopics.map((talk) => (
                        <li key={talk.title} className="text-base">
                          <span className="font-medium text-[#f4f2ec]">
                            {talk.title}
                          </span>
                          <span className="text-[#7c7973]"> — {talk.venue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-10">
                    <div>
                      <p className="eyebrow">Teaching</p>
                      <ul className="mt-5 space-y-2 text-base text-[#d9d6cd] sm:text-lg">
                        <li>Adjunct Professor — Academy of Art University</li>
                        <li>Instructor — Chicago Portfolio School</li>
                      </ul>
                    </div>
                    <div>
                      <p className="eyebrow">Board</p>
                      <p className="mt-5 max-w-[480px] text-base leading-relaxed text-[#d9d6cd] sm:text-lg">
                        Member, Board of Directors — The Attention Exchange and
                        Zedosh, sister companies behind the world’s first
                        regulated Attention Exchange® (2020–2025).
                      </p>
                    </div>
                  </div>
                </div>
                <Rule />
              </div>
            </>
          )}

          {/* ------------------------------------------------ 6. CONTACT */}
          {page === "contact" && (
            <>
              <QuestionHeadline>Let’s talk.</QuestionHeadline>
              <div className="mt-16 sm:mt-24">
                <Rule />
                <div className="py-10 sm:py-14">
                  <p className="text-lg text-[#a3a099] sm:text-xl">
                    Email is the fastest way to reach me.
                  </p>
                  <div className="mt-8">
                    <Statement>
                      I’m always open to executive-level conversations around
                      digital, AI, transformation — and where they’re all
                      headed.
                    </Statement>
                  </div>
                </div>
                <Rule />
                <div className="flex flex-col items-end gap-6 py-12">
                  <a
                    href="mailto:matt@mattmcb.me"
                    className="text-right text-3xl font-semibold tracking-[-0.03em] text-[#f4f2ec] underline-offset-8 transition hover:underline sm:text-6xl"
                  >
                    matt@mattmcb.me
                  </a>
                  <div className="flex gap-6 font-mono text-xs uppercase tracking-[0.25em] text-[#a3a099]">
                    <a
                      href="https://www.linkedin.com/in/mattmcb"
                      target="_blank"
                      rel="noreferrer"
                      className="border-b border-white/25 pb-1 transition hover:border-white hover:text-white"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="mailto:matt@mattmcb.me?subject=R%C3%A9sum%C3%A9%20request"
                      className="border-b border-white/25 pb-1 transition hover:border-white hover:text-white"
                    >
                      Request résumé
                    </a>
                  </div>
                </div>
                <Rule />
                <p className="pt-8 text-sm text-[#7c7973]">
                  Selective public profile. © {new Date().getFullYear()} Matthew
                  McBride
                </p>
              </div>
            </>
          )}

          {/* Previous / Next — every section page */}
          {page !== "home" && (
            <div className="mt-auto pt-16">
              <div className="flex items-center justify-between border-t border-white/15 py-10 text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                {prev !== null ? (
                  <button
                    type="button"
                    onClick={() => navigate(prev)}
                    className="group flex items-center gap-3 text-[#f4f2ec] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    <span
                      aria-hidden="true"
                      className="transition group-hover:-translate-x-1"
                    >
                      ←
                    </span>
                    Previous
                  </button>
                ) : (
                  <span />
                )}
                {next !== null ? (
                  <button
                    type="button"
                    onClick={() => navigate(next)}
                    className="group flex items-center gap-3 text-[#f4f2ec] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    Next
                    <span
                      aria-hidden="true"
                      className="transition group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </button>
                ) : (
                  <span />
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
