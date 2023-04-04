import React, { useContext, useState, useEffect } from "react";
import { ContactContext } from "./App.jsx";
import { Link, useNavigate } from "react-router-dom";

const EditContact = () => {
    const {
        updateContact,
        editingContact,
        setEditingContact,
    } = useContext(ContactContext);

    const [values, setValues] = useState({
        fullname: "",
        email: "",
        phone: "",
        adress: "",
    });

    useEffect(() => {
        if (editingContact) {
            setValues({
                fullname: editingContact.fullname,
                email: editingContact.email,
                phone: editingContact.phone,
                adress: editingContact.adress,
            });
        }
    }, [editingContact]);

    const navigate = useNavigate();

    const handleChange = (evt) => {
        const { target } = evt;
        const { name, value } = target;

        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (editingContact !== null) {
            updateContact(editingContact, values);
        }

        setEditingContact(null);
        navigate("/contact");
    };

    return (
        <div className="container d-flex justify-content-center align-self-center mt-5 rounded-4">
            <form onSubmit={handleSubmit} className="bg-white row p-5 col-8 rounded-4">
                <h1 className="d-flex justify-content-center text-danger ">EDIT CONTACT</h1>
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

                <button type="submit" className="mt-4 bg-primary text-white border border-white border-start-0 rounded">
                    Save Changes
                </button>
                <div>
                    <Link to={"/contact"} className="link">
                        or get back to contacts
                    </Link>
                </div>
            </form>
        </div>

    );
};

export default EditContact;