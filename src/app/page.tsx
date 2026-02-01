const highlights = [
  {
    title: "Product-led engineering",
    description:
      "I turn ambitious ideas into focused releases with clear metrics, fast feedback, and reliable delivery.",
  },
  {
    title: "Systems that scale",
    description:
      "From architecture to observability, I build resilient systems that keep teams shipping confidently.",
  },
  {
    title: "Design-forward UI",
    description:
      "Clean interfaces, strong hierarchy, and thoughtful motion to keep products feeling effortless.",
  },
];

const projects = [
  {
    name: "Railway-ready SaaS starter",
    summary:
      "A production template with auth, billing, and monitoring baked in from day one.",
    tags: ["Next.js", "Postgres", "Stripe", "Railway"],
  },
  {
    name: "Customer insights dashboard",
    summary:
      "Real-time product analytics with cohort tracking, retention alerts, and narrative summaries.",
    tags: ["TypeScript", "Data viz", "Edge", "Jobs"],
  },
  {
    name: "Growth experiments studio",
    summary:
      "A rapid experimentation tool for marketing and product teams to test ideas weekly.",
    tags: ["Design systems", "A/B testing", "AI"],
  },
];

const milestones = [
  {
    role: "Product Engineer",
    company: "Independent",
    detail: "Helping startups ship, measure, and grow their core product loops.",
  },
  {
    role: "Engineering Lead",
    company: "Studio Team",
    detail: "Built modern platforms with tight iteration cycles and strong UX focus.",
  },
  {
    role: "Full-stack Builder",
    company: "Remote",
    detail: "Delivered web apps for ambitious founders and mission-driven teams.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/5 bg-slate-950/60 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-sm font-semibold tracking-[0.2em] text-slate-300">
            MATT MCB
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#work">
              Work
            </a>
            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
          <a
            className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/50"
            href="#contact"
          >
            Let&apos;s talk
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6">
        <section className="py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
                Public website
              </p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Building thoughtful product experiences for ambitious teams.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                I&apos;m Matt McB, a product-minded engineer who partners with
                founders to design, build, and ship modern web platforms. I care
                about craft, clarity, and momentum.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                  href="#contact"
                >
                  Start a project
                </a>
                <a
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50"
                  href="#projects"
                >
                  See my work
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-white/10 p-8">
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Based in
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    North America, remote-ready
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Focus
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Next.js, TypeScript, product strategy
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Availability
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Booking new build &amp; redesign work
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-sm text-slate-300">
                  Recent launch: New public site on Railway with a fast, minimal
                  stack and polished UX.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-16">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Selected projects
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Recent builds and collaborations
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/40 p-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {project.summary}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                About
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                A partner for founders and teams
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                I work at the intersection of product strategy and engineering.
                That means aligning scope, focusing on outcomes, and delivering
                the roadmap with care. I thrive in early-stage environments and
                love turning complex problems into simple, elegant experiences.
              </p>
            </div>
            <div className="space-y-4">
              {milestones.map((item) => (
                <div
                  key={item.role}
                  className="rounded-2xl border border-white/10 bg-slate-900/40 p-6"
                >
                  <p className="text-sm font-semibold text-white">
                    {item.role}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                    {item.company}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Contact
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-white">
                  Let&apos;s build something together.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Send a note with what you&apos;re building and the timeline.
                  I&apos;ll reply quickly with next steps, availability, and a
                  plan that fits.
                </p>
              </div>
              <div className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/60 p-6">
                <p className="text-sm text-slate-300">Email</p>
                <a
                  className="block text-lg font-semibold text-white transition hover:text-slate-200"
                  href="mailto:hello@mattmcb.com"
                >
                  hello@mattmcb.com
                </a>
                <p className="text-xs text-slate-400">
                  I typically respond within 1-2 business days.
                </p>
                <a
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950"
                  href="mailto:hello@mattmcb.com"
                >
                  Start the conversation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 text-sm text-slate-400 md:flex-row">
          <p>© 2026 Matt McB. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
