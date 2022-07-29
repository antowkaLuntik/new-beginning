import logo from "../image/logo.png";
import avatar from "../image/avatar.png";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import "../css/header.css";

function tick() {
    const element = (
        <div>
            <span>{new Date().toLocaleTimeString()}</span>
            <span> / </span>
            <span>{new Date().toLocaleDateString()}</span>
        </div>
    );
    ReactDOM.render(element, document.getElementById('time'));
}

setInterval(tick, 1000);

export default class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="logo">
                    <img src={logo}
                         alt=""
                         height={130}
                         width={130}
                    />
                </div>

                <div className="rows">
                    <div className="row1">
                        <div className="search">
                            <input type="text"
                                   placeholder={'Введите значение'}
                            />
                            <div className="btn">Поиск</div>
                        </div>

                        <div className="language">
                            RU | EN
                        </div>
                    </div>

                    <div className="row2">
                        <div className="print">
                            <span>Печать</span>
                        </div>

                        <div className="time">
                            <div id="time"/>
                        </div>

                        <div className="question">
                            <span>?</span>
                        </div>

                        <div className="avatar">
                            <img src={avatar}
                                 alt=""
                                 height={60}
                                 width={60}
                            />
                        </div>

                        <div className="exit">
                            Выход
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

