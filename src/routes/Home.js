import { useState } from "react";
import Header from "../components/Header";
import Left from "../components/Left";
import Monitoring from "../components/Monitoring";

export default function Home() {
    let [block, changeBlock] = useState(<Monitoring />);

    return (
        <div className="home">
            <Header />
            <div className="wrapper">
                <div className="leftBlock" id="leftBlock">
                    <Left />
                </div>
                <div className="mainBlock" id="mainBlock">
                    {block}
                </div>
            </div>
        </div>
    );
}