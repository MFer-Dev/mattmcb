"use client";

import { useCallback, useEffect, useState } from "react";
import SideNav from "@/components/SideNav";
import MobileNav from "@/components/MobileNav";
import { sections } from "@/lib/sections";

const overviewBullets = [
  "Enterprise operating model and capability design",
  "Business and technology alignment across complex portfolios",
  "Adoption of AI and advanced technology in enterprise environments",
  "Delivery governance, value realization, and execution systems",
  "Cross-functional leadership across strategy, architecture, product, and delivery",
];

const approachBullets = [
  "Make technology useful, usable, and valuable",
  "Favor clarity over theater",
  "Design for accountability, not just alignment",
  "Build operating systems that can survive change",
  "Stay close to delivery reality and constraints",
];

export default function Home() {
  const [activeId, setActiveId] = useState<string>(
    sections[0]?.id ?? "overview",
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl gap-10 px-6 py-10 lg:gap-16">
        <SideNav activeId={activeId} onNavigate={handleNavigate} />
        <div className="w-full max-w-[900px]">
          <div className="flex items-center justify-between md:hidden">
            <MobileNav
              activeId={activeId}
              isOpen={isMenuOpen}
              onToggle={setIsMenuOpen}
              onNavigate={handleNavigate}
            />
          </div>

          <header className="mt-8 md:mt-0">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Matthew McBride
            </h1>
            <p className="mt-4 text-lg text-slate-200">
              Strategy, architecture, and delivery leadership for enterprise
              transformation and technology adoption.
            </p>
            <p className="mt-5 text-base leading-7 text-slate-300">
              I build and operate global teams that help organizations make
              technology genuinely useful, usable, and valuable. My work sits at
              the intersection of operating models, execution, and governance.
              I&apos;m most often brought in when the problem is complex,
              cross-functional, and high consequence.
            </p>
          </header>

          <section id="overview" className="scroll-mt-24 py-12">
            <h2 className="text-2xl font-semibold text-white">Overview</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Most organizations don&apos;t struggle because they lack technology.
              They struggle because adoption collides with fragmented ownership,
              unclear operating models, and delivery systems that can&apos;t
              sustain change. I focus on that gap. The goal is simple: make
              advanced capability deployable in the real world, with clarity,
              accountability, and durable execution.
            </p>
          </section>

          <section id="what-i-do" className="scroll-mt-24 py-12">
            <h2 className="text-2xl font-semibold text-white">What I do</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              I lead and support transformation work that sits between strategy
              and execution, especially where governance and delivery discipline
              are the difference between progress and noise.
            </p>
            <ul className="mt-6 space-y-3 text-base text-slate-200">
              {overviewBullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="how-i-work" className="scroll-mt-24 py-12">
            <h2 className="text-2xl font-semibold text-white">
              How I work
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              My approach is pragmatic and built for scale. The emphasis is
              always on clarity, decision-making, and execution under real
              constraints.
            </p>
            <ul className="mt-6 space-y-3 text-base text-slate-200">
              {approachBullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="background" className="scroll-mt-24 py-12">
            <h2 className="text-2xl font-semibold text-white">Background</h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-300">
              <p>
                I&apos;ve spent the last decade building and operating global
                capabilities in digital strategy, transformation, experience,
                and enterprise execution. The common thread has been helping
                organizations translate advanced technology into real outcomes
                without losing integrity at scale.
              </p>
              <p>
                Earlier in my career, I led platform experience and governance
                work inside enterprise cloud environments, including building
                systems and standards that enabled teams to ship consistently
                across large, distributed product ecosystems.
              </p>
            </div>
          </section>

          <section id="contact" className="scroll-mt-24 py-12">
            <h2 className="text-2xl font-semibold text-white">Contact</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              This site is intentionally minimal by design. For professional
              inquiries, the best way to reach me is email.
            </p>
            <div className="mt-6 flex flex-wrap gap-6 text-sm font-medium text-slate-200">
              <a
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                href="https://www.linkedin.com/in/mattmcb"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                href="mailto:matt@mattmcb.me"
              >
                matt@mattmcb.me
              </a>
            </div>
          </section>

          <footer className="border-t border-white/10 py-10 text-sm text-slate-500">
            © {new Date().getFullYear()} Matthew McBride · mattmcb.me ·
            Intentionally minimal
          </footer>
        </div>
      </div>
    </div>
  );
}
