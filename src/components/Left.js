import plus from "../image/plus.png";
import "../css/left.css";
import Monitoring from "./Monitoring";
import Settings from "./Settings";

export default function Left(props) {
    const leftBlockName = ["Мониторинг", "Проблемы", "Погодные условия", "Карты", "Настройки", "Анализ данных"];
    const leftBlocks = leftBlockName.map((leftBlockName) => 
        <div className="block">
            <img src={plus}
                    alt=""
                    height={35}
                    width={35}
            />
            <div>{leftBlockName}</div>
        </div>
    );

    leftBlocks[0] = (
        <div className="block"
            onClick={() => props.onChangeBlock(<Monitoring />)}
        >
            <img src={plus}
                    alt=""
                    height={35}
                    width={35}
            />
            <div>{leftBlockName[0]}</div>
        </div>
    );

    leftBlocks[4] = (
        <div className="block"
            onClick={() => props.onChangeBlock(<Settings />)}
        >
            <img src={plus}
                    alt=""
                    height={35}
                    width={35}
            />
            <div>{leftBlockName[4]}</div>
        </div>
    );

    return(
        <div className="left">
            {leftBlocks}
        </div>
    );
}