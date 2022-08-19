import arrow from "../image/arrow.png";
import graph1 from "../image/graph1.png";
import graph2 from "../image/graph2.png";
import "../css/monitoring.css";
import React from "react";
import { useState } from "react";

export default function Monitoring() {
  let [value, valueChange] = useState(graph1);

  return (
    <div className="monitoring">
      <div className="head">
        <img
          src={arrow}
          alt=""
          height={35}
          width={40}
          onClick={handleChangeGraph}
        />
        <h3>Мониторинг</h3>
        <img
          src={arrow}
          alt=""
          height={35}
          width={40}
          className="arrow2"
          onClick={handleChangeGraph}
        />
      </div>
      <div className="content">
        <div id="graph">
          <img src={value} alt="" />
        </div>
      </div>
    </div>
  );

  function handleChangeGraph() {
    if (value === graph1) {
      valueChange(graph2);
    }
    if (value === graph2) {
      valueChange(graph1);
    }
  }
}
