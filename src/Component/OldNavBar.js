import React from "react";

function OldNavBar({ onChangePage }) {

    function handleLinkClick(e) {
        e.preventDefault()
        onChangePage(e.target.pathname)
    }

    return (
        <nav>
            <a onClick={handleLinkClick} href="/">Home</a>
            <a onClick={handleLinkClick} href="/form">Form</a>
            <a onClick={handleLinkClick} href="/contact">Contact</a>
        </nav>
    );
}

export default OldNavBar;