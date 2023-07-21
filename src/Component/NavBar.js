import React from "react";
import { Link } from "react-router-dom";



function NavBar(props) {


    return (
        <header className="header">
            <div className="mycontact-logo">
                <img className="header-img" src="https://www.svgrepo.com/show/13641/phone-call.svg" alt="contact" />
                <h3>MY CONTACT</h3>
            </div>
            <Link to=""><h3 className="home1">Home</h3></Link>
            <Link to="/form"><h3 className="home1">Forms</h3></Link>
            <Link to="/contact"><h3 className="home1">Contact</h3></Link>
            <button onClick={props.click} className="header-buton">{props.isLogin ? `Welcome` : "Login"}</button>
        </header>
    )

}

export default NavBar 
