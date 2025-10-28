import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Accueil from "./pages/accueil";
import Chap1 from "./pages/chap1";
import Section from "./pages/section";

export default function App(): React.JSX.Element {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/chapitres/chapitre-1" element={<Chap1 />} />
          <Route
            path="/chapitres/chapitre-1/:sectionId"
            element={<Section />}
          />
        </Routes>
      </main>
    </div>
  );
}
