import React from "react";
import ReactDOM from "react-dom/client";
import { ALL_SLIDES } from "./constants";
import { Slides } from "./Slides";

function renderApp(app) {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(app);
}

renderApp(<Slides slides={ALL_SLIDES} />);
