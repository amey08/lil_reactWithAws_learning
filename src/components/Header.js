import React from "react";

import logo from './../logo.svg';

const Header = () => {

    return (
        <article>
            <header className="App-header">
                <h1> React App with AWS amplify </h1>
                <img src={logo} className="App-logo" alt="logo" />
                <p>Posted by Amey Parab</p>
                <p>Learn React with me. Need prior core JS knowledge.</p>
            </header>
        </article>
    );
}

export default Header;