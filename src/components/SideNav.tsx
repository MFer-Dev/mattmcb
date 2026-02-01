import Link from "next/link";
import { sections } from "@/lib/sections";

type SideNavProps = {
  activeId: string;
  onNavigate: (id: string) => void;
};

export default function SideNav({ activeId, onNavigate }: SideNavProps) {
  return (
    <aside className="sticky top-10 hidden h-[calc(100vh-5rem)] w-[240px] shrink-0 border-r border-white/10 pr-6 md:flex md:flex-col">
      <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500">
        Navigation
      </p>
      <nav className="mt-6 space-y-2">
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
    </aside>
  );
}
