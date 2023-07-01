import React from "react";
import CantactCard from "./ContactCard";



function Contacts({ contacts }) {

    const contactCard = contacts?.map((contact) => {
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