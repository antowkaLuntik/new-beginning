import React, {Component} from "react";
import Header from "../components/Header";
import Monitoring from "../components/Monitoring";
import Left from "../components/Left";

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Header />
                <div className="wrapper">
                    <div className="leftBlock" id="leftBlock">
                        <Left />
                    </div>
                    <div className="mainBlock" id="mainBlock">
                        <Monitoring />
                    </div>
                </div>
            </div>
        );
    }
}