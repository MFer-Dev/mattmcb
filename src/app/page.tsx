"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SideNav from "@/components/SideNav";
import MobileNav from "@/components/MobileNav";
import { sections } from "@/lib/sections";

const overviewBullets = [
  "C-1 executive reporting to a CTO/CDO; board-level accountability for delivery performance, operational risk, and capability strategy.",
  "Leads globally distributed teams across 20+ countries delivering in hybrid, on-site, and remote models.",
  "Specializes in AI-enabled transformation, business and enterprise architecture, and operating-model execution.",
  "Hands-on leader on high-risk programs when complexity and ambiguity exceed standard delivery models.",
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
      "Good governance isn’t overhead — it’s how risk is reduced and value is protected at scale.",
  },
  {
    title: "Execution is strategy when stakes are high",
    detail:
      "In complex transformations, the quality of execution is the strategy.",
  },
];

const focusAreas = [
  "AI-enabled operating models",
  "Enterprise transformation delivery",
  "Experience-led change",
];

const experience = [
  {
    title: "SVP, Digital Strategy & Innovation — SoftServe",
    dates: "2021–Present",
    framing:
      "Lead a horizontal strategy and delivery organization brought in when complexity is high and failure is not an option.",
    modules: [
      {
        label: "Scope",
        value:
          "Global Digital Strategy & Innovation organization operating across industries, geographies, and delivery segments.",
      },
      {
        label: "Accountability",
        value:
          "Accountable for delivery outcomes, operational risk, and capability strategy in executive and board contexts.",
      },
      {
        label: "Operating Model",
        value:
          "Cross-functional org spanning experience design, business analysis, product management, solution consulting, transformation management, organizational change, and embedded architecture.",
      },
      {
        label: "Delivery Reality",
        value:
          "Owns strategy and oversight for complex, multi-year programs where ambiguity and risk are high.",
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
          "Built and governed what became the IBM Carbon Design System for consistency at scale.",
      },
      {
        label: "Delivery Reality",
        value:
          "Partnered with enterprise customers through IBM Garage-style engagements driving adoption.",
      },
    ],
  },
];

export default function Home() {
  const [activeId, setActiveId] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
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
          className="h-full bg-white/60"
          style={{ width: `${Math.round(scrollProgress * 100)}%` }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 pb-16 pt-12 lg:grid-cols-[240px_minmax(0,760px)_260px]">
        <SideNav
          activeId={activeId}
          onNavigate={handleNavigate}
          className="enter enter-nav"
        />

        <div className="w-full enter enter-main">
          <div className="flex items-center justify-between md:hidden">
            <MobileNav
              activeId={activeId}
              isOpen={isMenuOpen}
              onToggle={setIsMenuOpen}
              onNavigate={handleNavigate}
            />
          </div>

          <section ref={openingRef} className="pb-12 pt-6">
            <div className="max-w-[640px] space-y-5 text-base leading-7 text-slate-300">
              <p>Hi. I’m Matthew.</p>
              <p>
                I’ve spent my career working in the space between ambition and
                reality—where new technology meets real organizations, real
                people, and real constraints.
              </p>
              <p>
                My work is about turning complexity into something usable and
                sustainable: shaping operating models, governance, and delivery
                so advanced capability can actually take root and endure.
              </p>
            </div>
          </section>

          <div className="border-t border-white/10" />

          <section id="overview" className="scroll-mt-24 pb-14 pt-6">
            <p
              className="hero-appear text-xs font-mono uppercase tracking-[0.3em] text-slate-500"
              style={{ transitionDelay: "80ms" }}
            >
              Snapshot
            </p>
            <p
              className="hero-appear mt-3 text-sm text-slate-400"
              style={{ transitionDelay: "140ms" }}
            >
              This is a working snapshot of how I lead, think, and deliver today.
            </p>
            <div className="mt-6 max-w-[720px]">
              <p
                className="hero-appear text-2xl font-semibold text-white sm:text-3xl"
                style={{ transitionDelay: "260ms" }}
              >
                Enterprise AI adoption and operating-model execution at global scale.
              </p>
              <p
                className="hero-appear mt-5 text-base leading-7 text-slate-300"
                style={{ transitionDelay: "380ms" }}
              >
                I help organizations make advanced technology useful, usable, and
                valuable at enterprise scale. My work focuses on turning complex
                capability — including AI — into outcomes companies can govern,
                deliver, and sustain.
              </p>
              <ul
                className="hero-appear mt-6 space-y-3 text-base text-slate-300"
                style={{ transitionDelay: "500ms" }}
              >
                {overviewBullets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div
                className="hero-appear mt-6 flex flex-wrap gap-4 text-xs font-mono uppercase tracking-[0.25em] text-slate-400"
                style={{ transitionDelay: "620ms" }}
              >
                <a
                  href="https://www.linkedin.com/in/mattmcb"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-white/20 pb-1 transition hover:border-white/60 hover:text-slate-200"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:matt@mattmcb.me"
                  className="border-b border-white/20 pb-1 transition hover:border-white/60 hover:text-slate-200"
                >
                  Email
                </a>
                <a
                  href="#contact"
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavigate("contact");
                  }}
                  className="border-b border-white/20 pb-1 transition hover:border-white/60 hover:text-slate-200"
                >
                  Resume
                </a>
              </div>
            </div>
          </section>

          <section
            id="now"
            className="scroll-mt-24 border-t border-white/10 py-12"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500">
              Focus
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Current focus
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Right now I’m focused on enterprise AI adoption: turning advanced
              capability into repeatable delivery—governance, operating models,
              and outcomes.
            </p>
            <ul className="mt-6 space-y-3 text-base text-slate-300">
              {focusAreas.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section
            id="how-i-work"
            className="scroll-mt-24 border-t border-white/10 py-12"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500">
              Method
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              How I operate
            </h2>
            <div className="mt-6 space-y-6">
              {howIWork.map((item) => (
                <div key={item.title} className="border-l border-white/10 pl-5">
                  <p className="text-sm font-semibold text-slate-200">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="experience"
            className="scroll-mt-24 border-t border-white/10 py-12"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500">
              Impact
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              What I’ve built
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

          <section
            id="contact"
            className="scroll-mt-24 border-t border-white/10 py-12"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500">
              Contact
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Get in touch
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Best way to reach me is email. I’m open to roles where delivery
              discipline meets frontier technology.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono uppercase tracking-[0.25em] text-slate-400">
              <a
                href="mailto:matt@mattmcb.me"
                className="border-b border-white/20 pb-1 transition hover:border-white/60 hover:text-slate-200"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/mattmcb"
                target="_blank"
                rel="noreferrer"
                className="border-b border-white/20 pb-1 transition hover:border-white/60 hover:text-slate-200"
              >
                LinkedIn
              </a>
              <a
                href="mailto:matt@mattmcb.me?subject=Short%20bio%20request"
                className="border-b border-white/20 pb-1 transition hover:border-white/60 hover:text-slate-200"
              >
                Download short bio
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
