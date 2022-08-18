import { useState } from "react";
import Header from "../components/Header";
import Left from "../components/Left";
import Monitoring from "../components/Monitoring";
import Settings from "../components/Settings";

export default function Home() {
    let [block, changeBlock] = useState("monitoring");

    return (
        <div className="home">
            <Header />
            <div className="wrapper">
                <div className="leftBlock" id="leftBlock">
                    <Left onChangeBlock={changeBlock}/>
                </div>
                <div className="mainBlock" id="mainBlock">
                    {block === "monitoring" && <Monitoring />}
                    {block === "settings" && <Settings />}
                </div>
            </div>
        </div>
    );
}