import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import GameModeProvider from "./utils/context/GameModeProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GameModeProvider>
      <App />
    </GameModeProvider>
  </React.StrictMode>
);
