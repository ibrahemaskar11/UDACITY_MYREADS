import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MyReadsProvider from "./Store/MyReadsProvider";
//first we create the root in the index.html fike and that root is then used to render the App component
const root = ReactDOM.createRoot(document.getElementById("root"));
//App is wrapped withing MyReadsProvider so that App component could have access to the context
root.render(
  <MyReadsProvider>
    <App />
  </MyReadsProvider>
);
