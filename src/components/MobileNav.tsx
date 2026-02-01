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
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => onToggle(!isOpen)}
        className="fixed right-4 top-4 z-[70] inline-flex h-10 w-10 items-center justify-center text-slate-200 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
      >
        <span className="sr-only">
          {isOpen ? "Close navigation" : "Open navigation"}
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4 text-slate-200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          {isOpen ? (
            <path d="M6 6l12 12M18 6l-12 12" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h10" />
          )}
        </svg>
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-40 bg-black/90">
          <div className="flex h-full flex-col px-6 pb-10 pt-20">
            <nav className="space-y-3">
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
                    className={`flex w-full items-center justify-between border-l-2 px-3 py-3 text-left text-xs font-semibold uppercase tracking-[0.2em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${
                      isActive
                        ? "border-white/70 text-white"
                        : "border-transparent text-slate-400 hover:text-white"
                    }`}
                  >
                    {section.label}
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
