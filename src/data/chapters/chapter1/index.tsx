import React from "react";
import { Link } from "react-router-dom";
import { sections } from "./sections";

export default function Chapter1Index(): React.JSX.Element {
  return (
    <div className="surfaces">
      <ol>
        {sections.map((section) => (
          <li
            className="bg-background rounded-2xl m-3.5 p-3"
            key={section.slug}
          >
            <p className="text-lg font-semibold py-2 pl-3 pr-4">
              {section.title}
            </p>
            <Link
              className="py-2 px-4 prim-btn mx-2"
              to={`/chapitres/chapitre-1/sections/${section.slug}`}
            >
              Méthode
            </Link>
            <Link
              className="py-2 px-4 scnd-btn"
              to={`/chapitres/chapitre-1/exercices/${section.slug}`}
            >
              Exercices
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
