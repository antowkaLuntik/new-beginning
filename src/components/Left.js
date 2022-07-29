import React, {Component} from "react";
import plus from "../image/plus.png";
import "../css/left.css";
import ReactDOM from "react-dom";
import Settings from "./Settings";
import Monitoring from "./Monitoring";

function openSettings() {
    ReactDOM.render(<Settings />, document.getElementById("mainBlock"));
}

function openMonitoring() {
    ReactDOM.render(<Monitoring />, document.getElementById("mainBlock"));
}

export default class Left extends Component {
    render() {
        return(
            <div className="left">
                <div className="block"
                     onClick={openMonitoring}
                >
                    <img src={plus}
                         alt=""
                         height={35}
                         width={35}
                    />
                    <div>
                        Мониторинг
                    </div>
                </div>
                <div className="block">
                    <img src={plus}
                         alt=""
                         height={35}
                         width={35}
                    />
                    <div>Проблемы</div>
                </div>
                <div className="block">
                    <img src={plus}
                         alt=""
                         height={35}
                         width={35}
                    />
                    <div>Погодные условия</div>
                </div>
                <div className="block">
                    <img src={plus}
                         alt=""
                         height={35}
                         width={35}
                    />
                    <div>Карты</div>
                </div>
                <div className="block"
                     onClick={openSettings}
                >
                    <img src={plus}
                         alt=""
                         height={35}
                         width={35}
                    />
                    <div>Настройки</div>
                </div>
                <div className="block">
                    <img src={plus}
                         alt=""
                         height={35}
                         width={35}
                    />
                    <div>Анализ данных</div>
                </div>
            </div>
        );
    }
}