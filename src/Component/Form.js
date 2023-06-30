import React, { useState } from "react";

function Form({ handleNewObj }) {

    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        const newContact = {
            img: image,
            name: name,
            email: email,
            number: number,
            address: address
        }
        fetch("http://localhost:3000/contacts", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newContact)
        })
            .then(res => res.json())
            .then(data => handleNewObj(data))


        console.log(newContact)
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add Image"
                className="form--input"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />

            <input
                type="text"
                placeholder="Add Name"
                className="form--input"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <input
                type="text"
                placeholder="Add Phone Number"
                className="form--input"
                onChange={(e) => setNumber(e.target.value)}
                value={number}
            />
            <input
                type="text"
                placeholder="Add Email"
                className="form--input"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <input
                type="text"
                placeholder="Add Address"
                className="form--input"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
            />

            <button type="submit" className="form--input">Submit </button>
        </form>
    )
}

export default Form