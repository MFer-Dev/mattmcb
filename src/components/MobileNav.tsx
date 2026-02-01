import { useMemo } from "react";
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
  const activeLabel = useMemo(() => {
    return sections.find((section) => section.id === activeId)?.label ?? "Overview";
  }, [activeId]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => onToggle(true)}
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        Menu
        <span className="text-xs font-normal text-slate-500">{activeLabel}</span>
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm">
          <div className="absolute inset-x-4 top-6 rounded-2xl bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Navigation
              </p>
              <button
                type="button"
                onClick={() => onToggle(false)}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:border-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
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
                    className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${
                      isActive
                        ? "bg-slate-100 text-slate-900"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {section.label}
                    {isActive ? (
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
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
