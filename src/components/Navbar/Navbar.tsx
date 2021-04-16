import React from "react";

export const Navbar = () => {
    return (
        <nav className="blue darken-3 px1">
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Todolist</a></li>
                    <li><a href="/">Информация</a></li>
                </ul>
            </div>
        </nav>
    )
}
