import React from "react";
import { Link, Route, Routes } from "react-router-dom";
//import { sections } from "./chap1";
import  SectionRenderer  from "../../../pages/sectionRenderer";
const sectionsEl = import.meta.glob("./sections/section-*.tsx", { eager: true });

export default function Chapter1Index(): React.JSX.Element {
  return (
    <div>
      CHAP2
    </div>
  );
}