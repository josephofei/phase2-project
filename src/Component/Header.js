import React from "react";



function Header(props) {

    // generate a random name from the db.json and display as the user



    return (
        <header className="header">
            <div className="mycontact-logo">
                <img className="header-img" src="https://www.svgrepo.com/show/13641/phone-call.svg" alt="contact" />
                <h3>MY CONTACT</h3>
            </div>

            <h3 className="home">Home</h3>
            <h3 className="header-form">Forms</h3>
            <h3 className="header-contact">Contact</h3>
            <button onClick={props.click} className="header-buton">{props.isLogin ? `Welcome` : "Login"}</button>
        </header>
    )

}

export default Header 
