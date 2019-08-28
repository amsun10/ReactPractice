import React from "react";
import './App.css';
import {Link} from "react-router-dom";

function Welcome() {
    return (
        <div className="App">
            <header className="App-header">
                <img src="logo.png" className="App-logo" alt="logo" />
                <p>
                    Have Fun !!!
                </p>
                <Link to="/Game">
                    Welcome To Play Tic Tac Toe 2
                </Link>
            </header>
        </div>
    );
}

export default Welcome;