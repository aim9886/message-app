
import React from "react";
import { createRoot } from "react-dom/client"
import './index.css';
import App from "./message-app-client/App.jsx";
// import global from "./global.css"

createRoot(document.getElementById("root")).render(<App/>)