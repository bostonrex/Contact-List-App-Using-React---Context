
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { ContactContext } from "./App.jsx";
import { Link } from "react-router-dom";

function Landing() {
    const { addContact, editingContact, setEditingContact } = useContext(ContactContext);

    useEffect(() => {
        if (editingContact) {
            setValues(editingContact);
        }
    }, [editingContact]);

    function handleSubmit(evt) {
        evt.preventDefault();

        if (editingContact) {
            // Actualiza el contacto en lugar de agregar uno nuevo
            updateContact(editingContact.id, values);
        } else {
            addContact(values);
        }

        navigate("/contact");
    }

    const [values, setValues] = useState({
        fullname: "",
        email: "",
        phone: "",
        adress: "",
    });

    const navigate = useNavigate()

    function handleSubmit(evt) {

        evt.preventDefault();

        addContact(values)

        navigate("/contact")

    }

    function handleChange(evt) {

        const { target } = evt;
        const { name, value } = target;

        const newValues = {
            ...values,
            [name]: value,
        };

        setValues(newValues);
        console.log(evt);
    }

    const saveNewContact = () => {
        navigate("/contact");
    };

    return (
        <div className="container d-flex justify-content-center align-self-center mt-5 rounded-4">
            <form onSubmit={handleSubmit} className="bg-white row p-5 col-8 rounded-4"> <h1 className="d-flex justify-content-center ">ADD NEW CONTACT</h1>

                <label htmlFor="fullname">Full Name</label>
                <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    value={values.fullname}
                    onChange={handleChange}
                    placeholder=""
                    className="border border-light-subtle"
                />

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder=""
                    className="border border-light-subtle"
                />

                <label htmlFor="phonenumber">Phone Number</label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={handleChange}
                    placeholder=""
                    className="border border-light-subtle"
                />

                <label htmlFor="adress">Address</label>
                <input
                    id="adress"
                    name="adress"
                    type="text"
                    value={values.adress}
                    onChange={handleChange}
                    placeholder=""
                    className="border border-light-subtle"
                />

                <button type="submit" className="mt-4 bg-primary text-white border border-white border-start-0 rounded" >save me</button>
                <div>
                    <Link to={"/contact"} className="link">or get back to contacts</Link>
                </div>
            </form>
        </div>

    );
}

export default Landing;