import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { sections } from "./sections";
import  SectionRenderer  from "../../../pages/sectionRenderer";
type SectionModule = {
  default: React.ComponentType;
};
const sectionModules = import.meta.glob<SectionModule>("./sections/section-*.tsx", { eager: true });

export default function Chapter1Index(): React.JSX.Element {
  return (
    <div className="surfaces">
      <ol>
        {sections.map((section) => (
          <li className="bg-background rounded-2xl m-3.5 p-3" key={section.id}>
            <p className="text-lg font-semibold py-2 pl-3">{section.title}</p>
            <Link className="py-2 px-4 prim-btn mx-2" to={`/chapitres/chapitre-1/sections/${section.id}`}>Méthode</Link>
            <Link className="py-2 px-4 scnd-btn" to={`/chapitres/chapitre-1/exercices/${section.id}`}>Exercices</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}