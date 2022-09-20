import { Link } from "react-router-dom";
import "../css/login.css";
import React from "react";

interface PropsField {
  className: string;
  value: string;
  inputClassName: string;
  inputPlaceHolder: string;
}

const Field: React.FC<PropsField> = ({
  className,
  value,
  inputClassName,
  inputPlaceHolder,
}) => {
  return (
    <div className={className}>
      {value}
      <input className={inputClassName} placeholder={inputPlaceHolder} />
    </div>
  );
};

interface PropsBtn {
  className: string;
  value: string;
  isLink: boolean;
  linkRoute: string;
}

const Btn: React.FC<PropsBtn> = ({ className, value, isLink, linkRoute }) => {
  return (
    <div className={className}>
      {!isLink && value}
      {isLink && <Link to={linkRoute}>{value}</Link>}
    </div>
  );
};

interface Props {
  className: string;
  height?: number;
  width?: number;
}

const Login: React.FC<Props> = (props: Props) => {
  const { className, height, width } = props;
  const logo = require("../image/logo.png");

  return (
    <div className={className}>
      <img src={logo} height={height} width={width} alt="None" />
      <div className="fields">
        {
          <Field
            className="fieldLog"
            value="Login"
            inputClassName="log"
            inputPlaceHolder="Введите логин"
          />
        }
        {
          <Field
            className="fieldPass"
            value="Password"
            inputClassName="pass"
            inputPlaceHolder="Введите пароль"
          />
        }
        <div className="btns">
          {
            <Btn
              className="btnLog"
              value="Login"
              isLink={true}
              linkRoute="/home"
            />
          }
          {<Btn className="btnExit" value="Exit" isLink={false} linkRoute="" />}
        </div>
      </div>
    </div>
  );
};

export default Login;
