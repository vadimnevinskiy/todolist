import React, {useState} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";

import {ITodo} from "./interfaces";
import {BrowserRouter, Route} from "react-router-dom";
import {TodoListPage} from "./pages/TodoListPage";
import {AboutPage} from "./pages/AboutPage";

function App() {


    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <div className="container">
                    <Route component={TodoListPage} path={'/'} exact />
                    <Route component={AboutPage} path={'/about'} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
