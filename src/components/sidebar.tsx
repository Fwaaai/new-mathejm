import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar(): React.JSX.Element {
  const location = useLocation();

  const [theme, setTheme] = React.useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const chapters = [
    {
      title: "Accueil",
      link: "/",
    },
    {
      title: "Chapitre 1 — Polynômes du second degré",
      link: "/chapitres/chapitre-1",
    },
    {
      title: "Chapitre 2 — Notion de dérivée et équation de la tangente",
      link: "/chapitres/chapitre-2",
    },
    {
      title: "Chapitre 3 — Probabilités conditionnelles et indépendance",
      link: "/chapitres/chapitre-3",
    },
  ];
  return (
    <aside
      aria-label="Navigation des chapitres"
      className="
        group
        fixed top-0 left-0 bottom-0
        w-[min(300px,80vw)]
        bg-surface
        border-r border-border
        shadow-[0_12px_40px_rgba(28,28,44,0.12)]
        translate-x-[calc(-100%+48px)]
        transition-transform duration-300 ease-[ease]
        flex flex-col
        gap-6
        pl-10 pr-8 py-8
        z-10

        hover:translate-x-0 focus-within:translate-x-0

        max-[720px]:static
        max-[720px]:translate-x-0
        max-[720px]:w-auto
        max-[720px]:shadow-none
        max-[720px]:border-r-0
        max-[720px]:border-b
        max-[720px]:pl-5 max-[720px]:pr-5 max-[720px]:py-6
      "
    >
      {/* Vertical tab */}
      <span
        aria-hidden="true"
        className="
          absolute top-1/2 -right-12 -translate-y-1/2
          inline-flex items-center justify-center
          w-12 h-[180px]
          bg-accent text-white font-semibold tracking-wider uppercase
          [writing-mode:vertical-rl]
          rounded-r-lg
          shadow-[0_8px_24px_rgba(80,96,255,0.35)]
          cursor-pointer
          max-[720px]:hidden
        "
      >
        Chapitres
      </span>

      <div className="flex flex-col gap-6">
        <p className="m-0 text-[1.125rem] font-semibold">Chapitres</p>

        <nav className="flex flex-col gap-3">
          {chapters.map((chapter) => (
            <Link
              key={chapter.title}
              to={chapter.link}
              className={`sidebar-item transition-colors ${
                location.pathname === chapter.link
                  ? "bg-[rgba(80,96,255,0.08)] text-accent"
                  : "hover:bg-[rgba(80,96,255,0.04)] hover:text-accent"
              }`}
            >
              {chapter.title}
            </Link>
          ))}
        </nav>
      </div>

      {/* Theme toggle */}
      <div className="mt-auto pt-4 border-t border-border">
        <button
          type="button"
          onClick={toggleTheme}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[rgba(80,96,255,0.06)] hover:bg-[rgba(80,96,255,0.16)] text-text focus:outline-none"
          aria-label={theme === "dark" ? "Passer en thème clair" : "Passer en thème sombre"}
        >
          <span aria-hidden>
            {theme === "dark" ? "☀️" : "🌙"}
          </span>
          <span className="font-medium">
            {theme === "dark" ? "Thème clair (stable)" : "Thème sombre (expérimental)"}
          </span>
        </button>
      </div>
    </aside>
  );
}
