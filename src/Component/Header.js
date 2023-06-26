import React, { useState } from "react";
import data from "../db.json"


function Header(props) {

    // generate a random name from the db.json and display as the user
    const contact = data.contact
    const generateRandomName = Math.floor(Math.random() * contact.length)
    const name = contact[generateRandomName].name

    return (
        <header>
            <h3>MY CONTACT</h3>
            <nav>
                <h3>Home</h3>
                <h3>Forms</h3>
                <button onClick={props.click}>{props.isLogin ? `Welcome ${name}` : "Login"}</button>
            </nav>
        </header>
    )

}

export default Header 
