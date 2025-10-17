import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ModeProvider } from "./context/ModeContext.jsx";
import { ProfileProvider } from "./context/ProfileContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ModeProvider>
      <ProfileProvider>
        <App />
      </ProfileProvider>
    </ModeProvider>
  </BrowserRouter>
);
