import React from 'react'
import { ImCross } from "react-icons/im";
import { GiTongue } from "react-icons/gi";

function Header() {

    const hour = new Date().getHours()
        let greeting
        if (hour < 10) {
                greeting = "Good morning"
            } else if (hour < 18) {
                greeting = "Good Day"
            } else if (hour < 21) {
                greeting = "Good Evening"
             } else {
                greeting = "Good Night"
            }

    return (
        <div>
            <header className="App-header">
                <h1>
                    <ImCross className="App-logo" alt="logo"/>
                    <ImCross className="App-logo" alt="logo"/> <br /> <br />
                    <GiTongue className="App-logo2" alt="logo" />
                </h1>
                <p>{greeting}</p>
                <a
                    className="App-link"
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    X-ing
                </a>
            </header>
        </div>
    )
}

export default Header
