import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(): React.JSX.Element {
  return (
    // Outer container to take full height and center content
    <div className="min-h-screen w-full flex items-center justify-center">
      {/* Content container */}
      <div className="surfaces text-5xl rounded-4xl p-10 text-center text-red-900">
        404 Page non trouvée
        <br />
        <span className="text-2xl block mt-4">
          Retournez sur le site:
          <Link to="/" className="prim-btn py-3 px-4 m-4 inline-block text-lg">
            Vers l'Accueil
          </Link>
        </span>
      </div>
    </div>
  );
}
