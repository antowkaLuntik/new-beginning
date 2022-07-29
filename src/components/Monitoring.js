import React, {Component} from "react";
import arrow from "../image/arrow.png";
import graph1 from "../image/graph1.png";
import graph2 from "../image/graph2.png";
import ReactDOM from "react-dom";
import "../css/monitoring.css";

function nextGraph() {
    const element1 = <img src={graph1}
                          alt=""
                          id="graph1"
    />;
    const element2 = <img src={graph2}
                          alt=""
                          id="graph2"
    />;
    if((document.getElementById("graph").firstElementChild.id) === "graph1") {
        ReactDOM.render(element2, document.getElementById("graph"));
    } else {
        ReactDOM.render(element1, document.getElementById("graph"));
    }
}

export default class Monitoring extends Component {
    render() {
        return(
            <div className="monitoring">
                <div className="head">
                    <img src={arrow}
                         alt=""
                         height={35}
                         width={40}
                         onClick={nextGraph}
                    />
                    <h3>Мониторинг</h3>
                    <img src={arrow}
                         alt=""
                         height={35}
                         width={40}
                         className="arrow2"
                         onClick={nextGraph}
                    />
                </div>
                <div className="content">
                    <div id="graph">
                        <img src={graph1}
                             alt=""
                             id="graph1"
                        />
                    </div>
                </div>
            </div>
        );
    }
}