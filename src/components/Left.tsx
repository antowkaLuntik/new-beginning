import "../css/left.css";
import React from "react";

const plus = require("../image/plus.png");

const leftBlockName: string[] = [
  "Мониторинг",
  "Проблемы",
  "Погодные условия",
  "Карты",
  "Настройки",
  "Анализ данных",
];

interface Props {
  className: string;
  blockClass: string;
  changeBlock: any;
}

const Left: React.FC<Props> = ({ className, blockClass, changeBlock }) => {
  return (
    <div className={className}>
      {leftBlockName.map((blockName) => {
        return (
          <div
            className={blockClass}
            key={blockName}
            onClick={() => changeBlock(blockName)}
          >
            <img src={plus} alt="" height={35} width={35} />
            <div>{blockName}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Left;
