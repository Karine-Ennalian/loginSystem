import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import Home from "../pages/home/home.js";
import Login from "../pages/login/login.js";
import Signup from "../pages/signup/signup.js";

const Private = ({ Item }) => {
    const { signed } = useAuth();
    
    if (signed > 0) {
        return <Item/>;
    }else {
        return <Login/>;
    }
};

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private Item={Home}/>}/>
                    <Route path="/" element={<Login/>}/>
                    <Route exact path="/signup" element={<Signup/>}/>
                    <Route path="*" element={<Login/>}/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;