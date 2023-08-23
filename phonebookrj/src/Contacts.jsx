import { BackButton } from "./BackButton";
import { AddButton } from "./AddButton";
import { SearchContact } from "./SearchContact";
import { ContactForm } from "./ContactForm";
import { useEffect, useState } from "react";
import img1 from './images/man1.jpg'
import img2 from './images/man2.jpg'
import img3 from './images/man3.jpg'
import { DeleteButton } from "./DeleteButton";

export function Contacts(){
    const [contactFirstName, setContactFirstName] = useState("")
    const [contactLastName, setContactLastName] = useState("")
    const [contactPhoneNumber, setContactPhoneNumber] = useState("")    
    const [contacts, setContact] = useState(() => {
        const localValue = localStorage.getItem("CONTACTS")
        if (localValue == null) return []

        return JSON.parse(localValue)
    })


    useEffect(() => {
        localStorage.setItem("CONTACTS", JSON.stringify(contacts))
    }, [contacts])


    function addContact(e){
        e.preventDefault();

        setContact((current) =>{
            return (
                [...current, {id: crypto.randomUUID(), firstName: contactFirstName,
                    lastName: contactLastName, phoneNumber: contactPhoneNumber}]
            )
        })

        setContactFirstName("")
        setContactLastName("")
        setContactPhoneNumber("")
    }


    function deleteContact(id){
        setContact((currentContact)=>{
            return currentContact.filter((contact => contact.id !== id))
        })
    }


    return (
        <>  
        <section className="contacts">
            <div className="container">
                <div className="contacts-title">Контакты</div>
                <nav className="contacts-nav">
                    <BackButton />
                    <AddButton />
                </nav>
                <SearchContact />
                <ul className="contats-list">
                    {contacts.map(contact => {
                        return (
                            <li key={contact.id}>
                                <div className="contact">
                                    <div className="contact-info">
                                        <div className="contact-avatar">
                                            <img src={img1} alt=""/>
                                        </div>
                                        <div>{contact.firstName}</div>
                                        <div>{contact.lastName}</div>
                                    </div>
                                    <div className="btn delete-btn">
                                        <DeleteButton deleteOnClick={deleteContact} deletedContact={contact}/>
                                    </div>
                                </div>
                                
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
        <ContactForm 
            getFirstName={setContactFirstName} 
            getLastName={setContactLastName}
            getNumber={setContactPhoneNumber}
            contactFirstName={contactFirstName} 
            contactLastName={contactLastName}
            contactPhoneNumber={contactPhoneNumber}
            handleContact={addContact}/>
        </>
    )

}