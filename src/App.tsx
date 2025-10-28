import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Accueil from "./pages/accueil";
import Chap1 from "./pages/chap1";
import { chapitre1Routes } from "./pages/chapitre-1/routes";
import NotFound from "./pages/NotFound";

export default function App(): React.JSX.Element {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/chapitres/chapitre-1/*" element={<Chap1 />}>
            {/* Nested routes will be imported from chapitre-1/routes.tsx */}
            {chapitre1Routes}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
