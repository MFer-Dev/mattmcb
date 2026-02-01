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
      className={`sticky top-16 hidden h-[calc(100vh-8rem)] w-[240px] shrink-0 border-r border-white/10 pr-6 lg:flex lg:flex-col ${
        className ?? ""
      }`}
    >
      <div className="brand-appear pb-6">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-400 opacity-70">
          MATTHEW MCBRIDE
        </p>
        <p className="mt-2 text-xs text-slate-500 opacity-70">
          Strategy • Operating models • Delivery
        </p>
      </div>
      <div className="border-t border-white/10 pt-8">
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
