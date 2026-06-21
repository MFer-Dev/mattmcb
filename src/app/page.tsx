"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SideNav from "@/components/SideNav";
import MobileNav from "@/components/MobileNav";
import { sections } from "@/lib/sections";

const snapshotBullets = [
  "Operate at the C-1 level, partnering with CTO and CDO organizations on AI strategy, delivery performance, operational risk, and capability.",
  "Lead at every layer — strategy, design, and execution — having come up through delivery and design before strategy.",
  "Design for both human and agent experience, keeping AI in service of the people it affects.",
  "Lead globally distributed teams across 20+ countries — hybrid, on-site, and remote delivery.",
  "Step directly into high-stakes programs when complexity is high and failure isn’t an option.",
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

const metrics: { value: string; label: string; small?: boolean }[] = [
  { value: "500+", label: "Practitioners led" },
  { value: "20+", label: "Countries" },
  { value: "2,500+", label: "Programs delivered" },
  { value: "Fortune 100", label: "Enterprise clients", small: true },
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
          "Global Digital Strategy & Innovation organization operating across industries, geographies, and delivery segments.",
      },
      {
        label: "Accountability",
        value:
          "Own delivery outcomes, operational risk, and capability strategy in executive and board contexts; report to the CTO/CDO with quarterly board governance.",
      },
      {
        label: "Operating Model",
        value:
          "Everything but pure technology — design and experience, business analysis, product management, consulting, digital strategy, change management, and transformation program management (governance).",
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
];

const credentials = [
  "MBA — Universidad Isabel I",
  "M.S., Artificial Intelligence for Business — ENEB",
  "Prosci Certified Change Practitioner",
  "MicroMasters, Business Leadership — University of Queensland",
  "MFA — Academy of Art University",
  "B.A., Psychology & Biology — Rhodes College",
];

const speakingTopics = [
  "Perception Design — Shaping the Future of Reality",
  "The Paradoxical Nature of AI and Digital Well-Being",
  "Culture Change with DesignOps at Scale",
];

export default function Home() {
  const [activeId, setActiveId] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [photoOk, setPhotoOk] = useState(true);
  const openingRef = useRef<HTMLDivElement | null>(null);
  const openingEndRef = useRef(0);

  const handleNavigate = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    element.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  }, []);

  useEffect(() => {
    const updateOpeningEnd = () => {
      if (!openingRef.current) return;
      const rect = openingRef.current.getBoundingClientRect();
      openingEndRef.current = rect.bottom + window.scrollY;
    };

    updateOpeningEnd();
    window.addEventListener("resize", updateOpeningEnd);

    const targets = sections
      .map((section) => document.getElementById(section.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (targets.length === 0) {
      window.removeEventListener("resize", updateOpeningEnd);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < openingEndRef.current) {
          return;
        }
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateOpeningEnd);
    };
  }, []);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const maxScroll = scrollHeight - clientHeight;
      setScrollProgress(maxScroll > 0 ? scrollTop / maxScroll : 0);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#0b0c0f] text-slate-100"
      data-mounted={mounted ? "true" : "false"}
    >
      <div className="top-fade" aria-hidden="true" />
      <div className="fixed left-0 top-0 z-50 h-[2px] w-full bg-white/5">
        <div
          className="h-full"
          style={{
            width: `${Math.round(scrollProgress * 100)}%`,
            backgroundColor: "var(--accent)",
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-10 px-6 pb-16 pt-12 lg:grid-cols-[240px_minmax(0,860px)_260px]">
        <SideNav
          activeId={activeId}
          onNavigate={handleNavigate}
          className="enter enter-nav"
        />

        <div className="w-full enter enter-main pt-16 md:pt-12 lg:pt-0">
          <div className="flex items-center justify-between md:hidden">
            <MobileNav
              activeId={activeId}
              isOpen={isMenuOpen}
              onToggle={setIsMenuOpen}
              onNavigate={handleNavigate}
            />
          </div>

          {/* Hero */}
          <section ref={openingRef} className="pb-14 pt-6">
            <div
              className="hero-appear mb-8 h-20 w-20 overflow-hidden rounded-full border border-white/15"
              style={{ transitionDelay: "20ms" }}
            >
              {photoOk ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src="/matt.jpg"
                  alt="Matthew McBride"
                  className="h-full w-full object-cover grayscale"
                  onError={() => setPhotoOk(false)}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-white/5 text-base font-semibold tracking-wide text-slate-300">
                  MM
                </div>
              )}
            </div>
            <p
              className="hero-appear eyebrow eyebrow-rule"
              style={{ transitionDelay: "60ms" }}
            >
              Enterprise AI &amp; Transformation
            </p>
            <p
              className="hero-appear mt-7 text-base text-slate-400"
              style={{ transitionDelay: "140ms" }}
            >
              Hi, I’m Matthew.
            </p>
            <h1
              className="hero-appear mt-4 max-w-[780px] text-3xl font-semibold leading-tight tracking-tight text-white sm:text-[2.6rem] sm:leading-[1.12]"
              style={{ transitionDelay: "240ms" }}
            >
              I Help Large Enterprises Turn AI Into Operating Reality — And Build
              Toward The <span className="accent-text">Autonomous Enterprise</span>.
            </h1>
            <p
              className="hero-appear mt-7 max-w-[660px] text-base leading-7 text-slate-300"
              style={{ transitionDelay: "360ms" }}
            >
              I make technology useful, usable, and valuable for organizations
              operating at scale. My work focuses on shaping the right solutions
              first — then making sure they can be executed, governed, and adopted
              in real operating environments, where success depends as much on
              judgment and execution as on the technology itself.
            </p>
            <div
              className="hero-appear mt-8 flex flex-wrap gap-5 text-xs font-mono uppercase tracking-[0.25em] text-slate-400"
              style={{ transitionDelay: "460ms" }}
            >
              <a
                href="https://www.linkedin.com/in/mattmcb"
                target="_blank"
                rel="noreferrer"
                className="border-b border-white/20 pb-1 transition hover:border-[color:var(--accent)] hover:text-slate-100"
              >
                LinkedIn
              </a>
              <a
                href="mailto:matt@mattmcb.me"
                className="border-b border-white/20 pb-1 transition hover:border-[color:var(--accent)] hover:text-slate-100"
              >
                Email
              </a>
              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigate("contact");
                }}
                className="border-b border-white/20 pb-1 transition hover:border-[color:var(--accent)] hover:text-slate-100"
              >
                Résumé
              </a>
            </div>
          </section>

          {/* Scale */}
          <section className="border-t border-white/10 py-10">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.label}>
                  <p
                    className={`${
                      m.small ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"
                    } whitespace-nowrap font-semibold leading-tight text-white`}
                  >
                    {m.value}
                  </p>
                  <p className="mt-2 text-[11px] font-mono uppercase tracking-[0.2em] text-slate-500">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-[760px] text-sm leading-6 text-slate-400">
              What began as a sub-20-person design team, I now lead as a
              ~500-person global organization — design and experience, business
              analysis, product management, consulting, digital strategy, change
              management, and transformation governance. Effectively everything
              but pure technology inside a full-service digital services firm,
              across retail, life sciences, financial services, energy, and
              hi-tech.
            </p>
            <p className="mt-4 max-w-[760px] text-sm leading-6 text-slate-400">
              The team blends homegrown international talent with senior hires
              from the best of the design and consulting world — frog design,
              AKQA, FCB Global, IBM, Accenture, Deloitte, McKinsey, and PwC among
              many others.
            </p>
          </section>

          {/* Brand wall */}
          <section className="border-t border-white/10 py-10">
            <p className="eyebrow">Selected organizations served</p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
              {brands.map((brand) => (
                <span key={brand} className="brandmark">
                  {brand}
                </span>
              ))}
            </div>
          </section>

          {/* Snapshot */}
          <section id="overview" className="scroll-mt-24 border-t border-white/10 py-12">
            <p className="eyebrow">Snapshot</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Enterprise AI In Service Of The Human Experience
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              I help enterprises adopt AI through a cohesive strategy — one with
              the foresight, governance, and execution to hold up in the real
              world, not just on a slide. Having come up through execution and
              design before strategy, I lead at every layer: shaping what should
              be built, then making sure it can be delivered, adopted, and
              operated to create durable value.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-300">
              And I keep the work pointed at people. Even as we begin designing
              for agent experience, we don’t abandon the human one — the goal is
              AI that makes organizations, and the people inside them, measurably
              better.
            </p>
            <ul className="mt-7 space-y-3 text-base text-slate-300">
              {snapshotBullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Focus */}
          <section id="focus" className="scroll-mt-24 border-t border-white/10 py-12">
            <p className="eyebrow">The mandate</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Enterprise AI &amp; The Autonomous Enterprise
            </h2>
            <p className="mt-4 max-w-[680px] text-base leading-7 text-slate-300">
              I’m leading a refocus of my organization around enterprise AI —
              setting the strategy, governance, and operating model for an
              autonomous enterprise where AI agents and people work as one system.
              The throughline is human: even as we design for agent experience,
              the work exists to improve the human experience, not replace it.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {focusPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="lift rounded-sm border border-white/10 p-5"
                >
                  <p className="text-sm font-semibold text-slate-100">
                    {pillar.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Method */}
          <section id="method" className="scroll-mt-24 border-t border-white/10 py-12">
            <p className="eyebrow">Method</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">How I Work</h2>
            <div className="mt-6 space-y-6">
              {howIWork.map((item) => (
                <div
                  key={item.title}
                  className="border-l pl-5"
                  style={{ borderColor: "rgba(95,198,214,0.35)" }}
                >
                  <p className="text-sm font-semibold text-slate-100">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Impact */}
          <section id="impact" className="scroll-mt-24 border-t border-white/10 py-12">
            <p className="eyebrow">Impact</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Experience
            </h2>
            <div className="mt-6 space-y-10">
              {experience.map((item) => (
                <div key={item.title} className="border-t border-white/10 pt-6">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs font-mono uppercase tracking-[0.2em] text-slate-500">
                    {item.dates}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    {item.framing}
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {item.modules.map((module) => (
                      <div
                        key={module.label}
                        className="border-l border-white/10 pl-4"
                      >
                        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-500">
                          {module.label}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {module.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Credentials */}
          <section
            id="credentials"
            className="scroll-mt-24 border-t border-white/10 py-12"
          >
            <p className="eyebrow">Credibility</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Credentials &amp; Recognition
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-500">
                  Education &amp; certifications
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  {credentials.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: "var(--accent)" }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-6 text-slate-400">
                  A foundation in human behavior and cognition, design, and
                  business — the throughline behind keeping AI in service of
                  people.
                </p>
              </div>
              <div className="space-y-8">
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-500">
                    Speaking
                  </p>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    Internationally recognized keynote speaker on AI, design, and
                    the future of work — at events including IT Arena and IT
                    Weekend. Selected talks:
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-400">
                    {speakingTopics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-500">
                    Board
                  </p>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    Member, Board of Directors — The Attention Exchange and
                    Zedosh, sister companies behind the world’s first regulated
                    Attention Exchange® (2020–2025).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-24 border-t border-white/10 py-12">
            <p className="eyebrow">Connect</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Contact</h2>
            <p className="mt-4 max-w-[640px] text-base leading-7 text-slate-300">
              Best way to reach me is email. I’m always open and interested in
              executive-level conversations around digital, AI, transformation,
              and where they’re all headed.
            </p>
            <div className="mt-6 flex flex-wrap gap-5 text-xs font-mono uppercase tracking-[0.25em] text-slate-400">
              <a
                href="mailto:matt@mattmcb.me"
                className="border-b border-white/20 pb-1 transition hover:border-[color:var(--accent)] hover:text-slate-100"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/mattmcb"
                target="_blank"
                rel="noreferrer"
                className="border-b border-white/20 pb-1 transition hover:border-[color:var(--accent)] hover:text-slate-100"
              >
                LinkedIn
              </a>
              <a
                href="mailto:matt@mattmcb.me?subject=R%C3%A9sum%C3%A9%20request"
                className="border-b border-white/20 pb-1 transition hover:border-[color:var(--accent)] hover:text-slate-100"
              >
                Request résumé
              </a>
            </div>
          </section>

          <footer className="mt-12 border-t border-white/10 py-10 text-xs text-slate-500">
            <p>Selective public profile.</p>
            <p className="mt-2">© {new Date().getFullYear()} Matthew McBride</p>
          </footer>
        </div>

        <div className="hidden lg:block" aria-hidden="true" />
      </div>
    </div>
  );
}
