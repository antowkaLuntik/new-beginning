import {Link, NavLink, To} from "react-router-dom";
import "../css/login.css";
import React from "react";

interface Field {
    className: string
    value: string
    inputClassName: string
    inputPlaceHolder: string
}

interface Btn {
    className: string
    value: string
    isLink: boolean
    linkRoute: string
}

interface Login {
    className: string
    height?: number
    width?: number
}

const Field: React.FC<Field> = ({className,value,inputClassName,inputPlaceHolder}) => {
    return (
        <div className={className}>
            {value}
            <input className={inputClassName} placeholder={inputPlaceHolder} />
        </div>
    );
}

const Btn: React.FC<Btn> = ({className,value,isLink,linkRoute}) => {
    return (
        <div className={className}>
            {!isLink && value}
            {isLink && <Link to={linkRoute}>{value}</Link>}
        </div>
    );
}

const Login: React.FC<Login> = (props: Login) => {
    const {
        className,
        height,
        width
    } = props;
    const logo = require("../image/logo.png");

    return (
        <div className={className}>
            <img src={logo} height={height} width={width} alt="None"/>
            <div className="fields">
                {<Field className="fieldLog" value="Login" inputClassName="log" inputPlaceHolder="Введите логин" />}
                {<Field className="fieldPass" value="Password" inputClassName="pass" inputPlaceHolder="Введите пароль" />}
                <div className="btns">
                    {<Btn className="btnLog" value="Login" isLink={true} linkRoute="/home" />}
                    {<Btn className="btnExit" value="Exit" isLink={false} linkRoute=""/>}
                </div>
            </div>
        </div>
    );
}

export default Login;