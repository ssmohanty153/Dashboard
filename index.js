import React from "react";
import { createRoot } from "react-dom/client";
import "./public/style.css";
import Dashboard from "./src/Dashboard.js";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Dashboard />);
