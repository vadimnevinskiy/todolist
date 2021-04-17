import React from "react";
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="blue darken-3 px1">
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">Todolist</NavLink></li>
                    <li><NavLink to="/about">Информация</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
