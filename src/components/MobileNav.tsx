import { sections } from "@/lib/sections";

type MobileNavProps = {
  activeId: string;
  isOpen: boolean;
  onToggle: (open: boolean) => void;
  onNavigate: (id: string) => void;
};

export default function MobileNav({
  activeId,
  isOpen,
  onToggle,
  onNavigate,
}: MobileNavProps) {
  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => onToggle(true)}
        className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-slate-200 transition hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label="Open navigation"
      >
        <span className="sr-only">Open navigation</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4 text-slate-200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M4 7h16M4 12h16M4 17h10" />
        </svg>
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 bg-black/90">
          <div className="flex h-full flex-col px-6 pb-10 pt-8">
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => onToggle(false)}
                className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-slate-200 transition hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                aria-label="Close navigation"
              >
                <span className="sr-only">Close navigation</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <path d="M6 6l12 12M18 6l-12 12" />
                </svg>
              </button>
            </div>
            <nav className="mt-10 space-y-2">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => {
                      onNavigate(section.id);
                      onToggle(false);
                    }}
                    className={`flex w-full items-center justify-between border-l-2 px-3 py-2 text-left text-xs font-semibold uppercase tracking-[0.2em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${
                      isActive
                        ? "border-white/70 text-white"
                        : "border-transparent text-slate-400 hover:text-white"
                    }`}
                  >
                    {section.label}
                    {isActive ? (
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Active
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
}
