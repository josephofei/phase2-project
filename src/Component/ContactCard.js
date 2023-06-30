import React from "react"
import "../index.css"

function CantactCard({ contact }) {
    console.log(contact.img)
    return (
        < div className="main-contact" >
            <img id="contact-img" src={contact.img} alt="image" />
            <h3 className="contact-name">{contact.name}</h3>
            <div className="contact-info">
                <p>{contact.number}</p>
                <p>{contact.email}</p>
                <p>{contact.address}</p>
            </div>
        </div >
    )
}

export default CantactCard