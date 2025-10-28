import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Accueil from "./pages/accueil";
import Chap1 from "./pages/chap1";
import TheorySection from "./pages/TheorySection";
import ExerciseSection from "./pages/ExerciseSection";
import NotFound from "./pages/NotFound";

export default function App(): React.JSX.Element {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/chapitres/chapitre-1" element={<Chap1 />} />
          <Route
            path="/chapitres/chapitre-1/sections/:sectionId"
            element={<TheorySection />}
          />
          <Route
            path="/chapitres/chapitre-1/exercices/:sectionId"
            element={<ExerciseSection />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
