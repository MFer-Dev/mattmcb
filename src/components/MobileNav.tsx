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
        className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label="Open menu"
      >
        Menu
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm">
          <div className="absolute inset-x-4 top-6 border border-white/10 bg-slate-950 p-6 shadow-lg">
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => onToggle(false)}
                className="border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 transition hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                Close
              </button>
            </div>
            <nav className="mt-6 space-y-2">
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
