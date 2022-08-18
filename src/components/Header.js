import logo from "../image/logo.png";
import avatar from "../image/avatar.png";
import "../css/header.css";
import { useEffect, useState } from "react";

export default function Header() {

    const DateTime = () => {
        const [dateTime, setDateTime] = useState(new Date());
    
        useEffect(() => {
            const timer = setInterval(() => setDateTime(new Date()), 1000);
            return () => {
                clearInterval(timer);
            }
        }, []);

        return (
            <div>
                <span>{`${dateTime.toLocaleTimeString()} / ${dateTime.toLocaleDateString()}`}</span>
            </div>
            
        );
    
    }
    
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
                        {DateTime()}
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

