import React from "react";
import { Link } from "react-router-dom";

export default function Footer(): React.JSX.Element {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-12 border-t border-border px-6 py-8 text-sm text-muted">
      <div className="max-w-5xl mx-auto flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-text font-semibold">Maths EJM</span>
          <a href="https://www.gnu.org/licenses/agpl-3.0.html">© {year} — AGPL-3.0</a>
        </div>
        <nav className="flex flex-wrap items-center gap-4">
          <Link to="/" className="hover:text-accent">
            Accueil
          </Link>
        </nav>
        <div className="text-[0.9rem]">
          Construit avec React, Vite, Tailwind CSS et KaTeX.
        </div>
        <Link to="/probleme" className = "hover:text-accent">Des Questions?</Link>
      </div>
    </footer>
  );
}
