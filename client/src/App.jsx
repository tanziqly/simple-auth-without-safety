import React from "react";
import AppRoutes from "./AppRoutes";

export const App = () => {
  return (
    <>
      <div className="bg-neutral-900 min-h-screen text-white">
        <AppRoutes />
      </div>
    </>
  );
};
