import Link from "next/link";
import { sections } from "@/lib/sections";

type SideNavProps = {
  activeId: string;
  onNavigate: (id: string) => void;
  className?: string;
};

export default function SideNav({
  activeId,
  onNavigate,
  className,
}: SideNavProps) {
  return (
    <aside
      className={`sticky top-12 hidden h-[calc(100vh-6rem)] w-[240px] shrink-0 border-r border-white/10 pr-6 md:flex md:flex-col ${
        className ?? ""
      }`}
    >
      <div className="brand-appear pb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-xs font-mono text-slate-200">
            MM
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-300">
              MATTHEW MCBRIDE
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Strategy • Operating models • Delivery
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 pt-6">
      <nav className="space-y-2">
        {sections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <Link
              key={section.id}
              href={`#${section.id}`}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(section.id);
              }}
              className={`flex w-full items-center border-l-2 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${
                isActive
                  ? "border-white/70 text-white"
                  : "border-transparent text-slate-500 hover:text-slate-200"
              }`}
            >
              {section.label}
            </Link>
          );
        })}
      </nav>
      </div>
    </aside>
  );
}
