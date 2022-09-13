import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import Home from "./routes/Home";
import Login from "./routes/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login className="login" height={300} width={300}/>} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login className="login"/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
