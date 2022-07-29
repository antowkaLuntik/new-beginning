import React, {Component} from "react";
import logo from "../image/logo.png";
import {Link} from "react-router-dom";
import "../css/login.css";

export default class Login extends Component {
    render() {
        return(
            <div className="login">
                <img src={logo} height={300} width={300}/>
                <div className="fields">
                    <div className="fieldLog">
                        Login
                        <input className="log" placeholder="Введите логин"/>
                    </div>
                    <div className="fieldPass">
                        Password
                        <input className="pass" placeholder="Введите пароль"/>
                    </div>
                    <div className="btns">
                        <div className="btnLog">
                            <Link to="/home">Login</Link>
                        </div>
                        <div className="btnExit">
                            Exit
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

