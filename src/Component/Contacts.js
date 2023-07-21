import React from "react";
import CantactCard from "./ContactCard";



function Contacts({ contacts }) {

    console.log(typeof (contacts))
    const contactCard = contacts.map((contact) => {
        console.log("is this working")
        return (
            <CantactCard key={contact.id} contact={contact} />
        )
    })

    return (
        <div className="main-div">
            {contactCard}
        </div>
    )
}

export default Contacts