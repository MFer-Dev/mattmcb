"use client";

import { useCallback, useEffect, useState } from "react";
import SideNav from "@/components/SideNav";
import MobileNav from "@/components/MobileNav";
import { sections } from "@/lib/sections";

const overviewBullets = [
  "C-1 executive reporting to a CTO/CDO; board-level accountability for delivery performance, operational risk, and capability strategy.",
  "Leads globally distributed teams across 20+ countries delivering in hybrid, on-site, and remote models.",
  "Specializes in AI-enabled transformation, business and enterprise architecture, and operating-model execution.",
  "Hands-on leader on high-risk programs when complexity and ambiguity exceed standard delivery models.",
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
    bullets: [
      "Global leader for a horizontal Digital Strategy & Innovation organization operating across industries, geographies, and delivery segments.",
      "Leads a cross-functional org spanning experience design, business analysis, product management, solution consulting, transformation management, organizational change, and embedded business/enterprise architecture.",
      "Shapes solution strategy and oversees delivery of highly complex, multi-year programs; accountable for outcomes, not just execution.",
      "Partners with hyperscalers and the AI ecosystem; drives AI advisory and AI-enabled transformation motions in collaboration with internal partnership leaders.",
      "Regularly presents delivery health, operational performance, and capability strategy in executive and board contexts.",
    ],
  },
  {
    title: "VP, Digital Strategy & Design — SoftServe",
    dates: "2020–2021",
    bullets: [
      "Ran global design plus digital strategy & transformation consulting as a single executive scope.",
      "Founded and built the digital strategy function and organizational change management capability.",
      "Led enterprise transformation programs across employee, customer, and business experience—before BA/PM/architecture consolidated into the broader org.",
    ],
  },
  {
    title: "VP, Global Experience Design — SoftServe",
    dates: "2016–2021",
    bullets: [
      "Recruited to build and scale SoftServe’s global experience design capability from an early-stage team into a global practice.",
      "Helped shift the company’s go-to-market from technology-first delivery to experience-led transformation focused on business and human outcomes.",
      "Built design operations, leadership structures, and delivery models that positioned experience as a strategic differentiator.",
    ],
  },
  {
    title: "Senior Manager, Platform Experience — IBM Cloud / IBM Design",
    dates: "2015–2016",
    bullets: [
      "Led a cross-functional platform team spanning design, engineering, and architecture to define IBM Cloud’s experience architecture and governance.",
      "Built and governed what became the IBM Carbon Design System, enabling consistent delivery across cloud products and services.",
      "Partnered with enterprise customers through IBM Garage-style engagements: co-creation, workshops, innovation programs driving adoption.",
    ],
  },
];

const selectedWork = [
  "Enterprise marketing and operating model transformation",
  "AI-enabled product and platform strategy",
  "Global experience modernization across complex portfolios",
  "Governance and adoption frameworks for large transformations",
];

export default function Home() {
  const [activeId, setActiveId] = useState<string>(
    sections[0]?.id ?? "overview",
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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
    const targets = sections
      .map((section) => document.getElementById(section.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (targets.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
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

    return () => observer.disconnect();
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

  return (
    <div className="min-h-screen bg-[#0b0c0f] text-slate-100">
      <div className="fixed left-0 top-0 z-50 h-[2px] w-full bg-white/5">
        <div
          className="h-full bg-white/60"
          style={{ width: `${Math.round(scrollProgress * 100)}%` }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 pb-16 pt-12 lg:grid-cols-[240px_minmax(0,760px)_260px]">
        <SideNav activeId={activeId} onNavigate={handleNavigate} />

        <div className="w-full">
          <div className="flex items-center justify-between md:hidden">
            <MobileNav
              activeId={activeId}
              isOpen={isMenuOpen}
              onToggle={setIsMenuOpen}
              onNavigate={handleNavigate}
            />
          </div>

          <section id="overview" className="scroll-mt-24 pb-14 pt-6">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500">
              Overview
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Matthew McBride
            </h1>
            <p className="mt-3 text-base font-semibold text-slate-300">
              Digital services executive • enterprise AI-enabled transformation
            </p>
            <p className="mt-6 text-base leading-7 text-slate-300">
              I lead global, cross-functional teams that sit between strategy,
              technology, and delivery—helping enterprises make technology
              useful, usable, and valuable in the real world.
            </p>
            <ul className="mt-6 space-y-3 text-base text-slate-300">
              {overviewBullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono uppercase tracking-[0.25em] text-slate-400">
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
          </section>

          <section
            id="now"
            className="scroll-mt-24 border-t border-white/10 py-12"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500">
              Now
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Now</h2>
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
            id="experience"
            className="scroll-mt-24 border-t border-white/10 py-12"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500">
              Experience
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Experience</h2>
            <div className="mt-6 space-y-8">
              {experience.map((item) => (
                <div key={item.title} className="border-t border-white/10 pt-6">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs font-mono uppercase tracking-[0.2em] text-slate-500">
                    {item.dates}
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-600" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section
            id="selected-work"
            className="scroll-mt-24 border-t border-white/10 py-12"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500">
              Selected Work
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Selected Work
            </h2>
            <ul className="mt-6 space-y-3 text-base text-slate-300">
              {selectedWork.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section
            id="contact"
            className="scroll-mt-24 border-t border-white/10 py-12"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500">
              Contact
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Contact</h2>
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
