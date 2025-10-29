import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Accueil from "./pages/accueil";
import ChapterPage from "./pages/ChapterPage";
import NotFound from "./pages/NotFound";
import SectionPage from "./pages/sectionPage";
import ExerciseRenderer from "./pages/exerciseRenderer";

export default function App(): React.JSX.Element {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/chapitres/:chapterId" element={<ChapterPage />}>
          </Route>
          <Route path="/chapitres/:chapterId/sections/:sectionId" element={<SectionPage />} />
          <Route path="/chapitres/:chapterId/exercices/:exerciseId" element={<ExerciseRenderer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
