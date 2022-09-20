import React, { ReactNode, useState } from "react";
import Monitoring from "../components/Monitoring";
import Settings from "../components/Settings";
import Header from "../components/Header";
import Left from "../components/Left";

interface Props {
  className: string;
  wrapperClass: string;
  leftClass: string;
  leftId: string;
  mainClass: string;
  mainId: string;
}

const Home: React.FC<Props> = (props: Props) => {
  const { className, wrapperClass, leftClass, leftId, mainClass, mainId } =
    props;

  let [block, changeBlock] = useState("Мониторинг");

  const showBlock = (): ReactNode => {
    switch (block) {
      case "Мониторинг":
        return (
          <Monitoring
            className="monitoring"
            classHead="head"
            titleName="Мониторинг"
            classContent="content"
            idGraph="graph"
          />
        );
      case "Настройки":
        return (
          <Settings
            className="settings"
            classTitle="head"
            classContent="content"
            value="Настройки"
          />
        );
      default:
        return (
          <Monitoring
            className="monitoring"
            classHead="head"
            titleName="Мониторинг"
            classContent="content"
            idGraph="graph"
          />
        );
    }
  };

  return (
    <div className={className}>
      <Header className="header" rowsClass="rows" />
      <div className={wrapperClass}>
        <div className={leftClass} id={leftId}>
          <Left className="left" blockClass="block" changeBlock={changeBlock} />
        </div>
        <div className={mainClass} id={mainId}>
          {showBlock()}
        </div>
      </div>
    </div>
  );
};

export default Home;
