import "../css/header.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const logo = require("../image/logo.png");
const avatar = require("../image/avatar.png");

const DateTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <div>
      <span>{`${time.toLocaleTimeString()} / ${time.toLocaleDateString()}`}</span>
    </div>
  );
};

const searchElement: any = [
  <input type="text" placeholder={"Введите значение"} key="element1" />,
  <div className="btn" key="element2">
    Поиск
  </div>,
];

const elements = {
  logo: <img src={logo} alt="" height={130} width={130} />,
  search: searchElement,
  language: "RU / EN",
  print: <span>Печать</span>,
  time: <DateTime />,
  question: <span>?</span>,
  avatar: <img src={avatar} alt="" height={60} width={60} />,
  exit: <Link to="/login">Выход</Link>,
};

interface PropsRowElement {
  className: string;
  value: any;
}

const RowElement: React.FC<PropsRowElement> = ({ className, value }) => {
  return <div className={className}>{value}</div>;
};

interface Props {
  className: string;
  rowsClass: string;
}

const Header: React.FC<Props> = ({ className, rowsClass }) => {
  return (
    <div className={className}>
      {<RowElement className="logo" value={elements.logo} />}

      <div className={rowsClass}>
        <div className="row1">
          {<RowElement className="search" value={elements.search} />}
          {<RowElement className="language" value={elements.language} />}
        </div>

        <div className="row2">
          {<RowElement className="print" value={elements.print} />}
          {<RowElement className="time" value={elements.time} />}
          {<RowElement className="question" value={elements.question} />}
          {<RowElement className="avatar" value={elements.avatar} />}
          {<RowElement className="exit" value={elements.exit} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
