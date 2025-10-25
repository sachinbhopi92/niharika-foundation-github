import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { initCleanup } from "./utils/cleanupWidgets";

// Initialize cleanup for unwanted widgets
document.addEventListener("DOMContentLoaded", () => {
  initCleanup();
});

// Also run cleanup when the React app mounts
window.addEventListener("load", () => {
  initCleanup();
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
