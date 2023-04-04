import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact.jsx";
import Landing from "./Landing.jsx";
import EditContact from "./EditContact.jsx";

export const ContactContext = createContext();

const App = () => {
    const [contacts, setContacts] = useState([]);

    const addContact = (contact) => {
        setContacts([...contacts, contact]);
    };

    const updateContact = (id, updatedContact) => {
        setContacts(
            contacts.map((contact, index) =>
                index === id ? { ...updatedContact, id } : contact
            )
        );
    };

    const removeContact = (id) => {
        setContacts(contacts.filter((contact, indice) => indice !== id));
    };

    const [editingContact, setEditingContact] = useState(null);

    const handleEditContact = (index) => {
        setEditingContact(index) 
        console.log(handleEditContact);
    };
    return (
        <ContactContext.Provider
            value={{
                contacts,
                addContact,
                updateContact,
                removeContact,
                handleEditContact,
                EditContact,
                editingContact,
                setEditingContact,
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/edit" element={<EditContact />} />
                </Routes>
            </BrowserRouter>
        </ContactContext.Provider>
    );
};

export default App;
