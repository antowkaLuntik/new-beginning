import plus from "../image/plus.png";
import "../css/left.css";
import Monitoring from "./Monitoring";
import Settings from "./Settings";
import changeMainBlock from "../routes/Home";
import { useEffect } from "react";
import Home from "../routes/Home";

export default function Left() {
    
    return(
        <div className="left">
            <div className="block"
                onClick={() => <Home mainblock={<Monitoring />} />}
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
                onClick={() => <Home mainblock={<Monitoring />} />}
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