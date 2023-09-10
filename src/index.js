import React from "react";
//import ReactDOM from "react-dom";
import App from "./App";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const mainRoot = createRoot(container); // createRoot(container!) if you use TypeScript
mainRoot.render(<App tab="home" />);
