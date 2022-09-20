import "../css/monitoring.css";
import React from "react";
import { useState } from "react";

const arrow = require("../image/arrow.png");
const graph1 = require("../image/graph1.png");
const graph2 = require("../image/graph2.png");

const imageArrow = (handleChangeGraph: any, arrowClass: string) => {
  return (
    <img
      src={arrow}
      alt=""
      height={35}
      width={40}
      className={arrowClass}
      onClick={handleChangeGraph}
    />
  );
};

interface Props {
  className: string;
  classHead: string;
  titleName: string;
  classContent: string;
  idGraph: string;
}

const Monitoring: React.FC<Props> = (props: Props) => {
  const { className, classHead, titleName, classContent, idGraph } = props;

  let [value, valueChange] = useState(graph1);

  function handleChangeGraph() {
    if (value === graph1) {
      valueChange(graph2);
    } else {
      valueChange(graph1);
    }
  }

  return (
    <div className={className}>
      <div className={classHead}>
        {imageArrow(handleChangeGraph, "arrow1")}
        {titleName}
        {imageArrow(handleChangeGraph, "arrow2")}
      </div>
      <div className={classContent}>
        <div id={idGraph}>
          <img src={value} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
