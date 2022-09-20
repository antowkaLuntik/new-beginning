import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Home from "./routes/Home";
import Login from "./routes/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Login className="login" height={300} width={300} />}
      />
      <Route
        path="home"
        element={
          <Home
            className="home"
            wrapperClass="wrapper"
            leftClass="leftBlock"
            leftId="leftBlock"
            mainClass="mainBlock"
            mainId="mainBlock"
          />
        }
      />
      <Route
        path="login"
        element={<Login className="login" height={300} width={300} />}
      />
    </Routes>
  </BrowserRouter>
);
