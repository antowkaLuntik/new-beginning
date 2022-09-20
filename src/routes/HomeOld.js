import { useState } from "react";
import Header from "../components/HeaderOld";
import Left from "../components/LeftOld";
import Monitoring from "../components/MonitoringOld";
import Settings from "../components/SettingsOld";

export default function Home() {
  let [block, changeBlock] = useState("monitoring");

  return (
    <div className="home">
      <Header />
      <div className="wrapper">
        <div className="leftBlock" id="leftBlock">
          <Left onChangeBlock={changeBlock} />
        </div>
        <div className="mainBlock" id="mainBlock">
          {block === "monitoring" && <Monitoring />}
          {block === "settings" && <Settings />}
        </div>
      </div>
    </div>
  );
}
