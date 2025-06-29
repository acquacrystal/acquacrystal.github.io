import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {" "}
    {/* ✅ Wrap App with Router */}
    <App />
  </React.StrictMode>
);
