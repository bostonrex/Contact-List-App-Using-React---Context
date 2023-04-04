import React, { useContext } from "react";
import { ContactContext } from "./App.jsx";
import { useNavigate } from "react-router";

const Contact = () => {
    const { contacts, removeContact, handleEditContact } = useContext(ContactContext)

    const navigate = useNavigate()
    const handleEdit = (indice) => {
        handleEditContact(indice)
        navigate("/edit")
    }

    return (
        <div className="container my-5">
            <div className="d-flex justify-content-end p-2 me-5" >
                <button className="btn btn-success" onClick={() => navigate("/")}> Add Contact</button>
            </div>
            <div>
                {contacts.map((contact, index) => {
                    return (
                    <div className="container">
                        <div className="d-flex border tarjeta my-2" key={index}>
                            <div className="mb-3">
                                <img src="https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14046.jpg" className="imagen" alt="..."></img>
                            </div>
                            <div className="datos col-8 mt-5">
                                <ul>
                                    <li className="text-dark"><h2 className="ms-1" > {contact.fullname} </h2></li>
                                    <li> <i className="fas fa-envelope me-2 text-dark p-2"> </i>{contact.email}</li>
                                    <li> <i className="fas fa-phone me-1 text-dark p-2"></i> {contact.phone}</li>
                                    <li> <i className="fas fa-map-marker-alt me-2 text-dark p-2"></i> {contact.adress}</li>
                                </ul>
                            </div>
                            <div>
                                <div className="logo1"> <button className="botoneditar mt-2 bg-white border border-0 p-2" onClick={() => handleEdit(index)}><i className="fas fa-edit"></i></button> </div>
                                <div className="logo2"> <button className="eliminar bg-white border border-0 p-2" onClick={() => removeContact(index)}><i className="fas fa-times"></i></button> </div>
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        </div >
    );
};

export default Contact;
