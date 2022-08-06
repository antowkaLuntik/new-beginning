import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import Home from "./routes/Home";
import Login from "./routes/Login";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Monitoring from './components/Monitoring';

ReactDOM.render((
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="home" element={<Home mainblock={<Monitoring />} />} />
            <Route path="login" element={<Login />} />
        </Routes>
    </BrowserRouter>
    ), document.getElementById('root')
);