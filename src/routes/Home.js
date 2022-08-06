import { useEffect, useState, useMemo } from "react";
import Header from "../components/Header";
import Left from "../components/Left";
import Monitoring from "../components/Monitoring";

export default function Home(props) {
    return (
        <div className="home">
            <Header />
            <div className="wrapper">
                <div className="leftBlock" id="leftBlock">
                    <Left />
                </div>
                <div className="mainBlock" id="mainBlock">
                    {props.mainblock}
                </div>
            </div>
        </div>
    );
}