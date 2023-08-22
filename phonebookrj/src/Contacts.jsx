import { BackButton } from "./BackButton";
import { AddButton } from "./AddButton";
import { SearchContact } from "./SearchContact";
import { ContactForm } from "./ContactForm";
import { useState } from "react";
import img1 from './images/man1.jpg'
import img2 from './images/man2.jpg'
import img3 from './images/man3.jpg'

export function Contacts(){
    const [contactFirstName, setContactFirstName] = useState("")
    const [contactLastName, setContactLastName] = useState("")
    const [contactPhoneNumber, setContactPhoneNumber] = useState("")    
    const [contacts, setContact] = useState([])

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
                                    <div className="contact-avatar">
                                        <img src={img1} alt=""/>
                                    </div>
                                    <div>{contact.firstName}</div>
                                    <div>{contact.lastName}</div>
                                </div>
                            </li>
                        )
                    })}
                    
                    {/* <li>
                        <div className="contact">
                            <div className="contact-avatar">
                                    <img src={img2} alt=""/>
                            </div>
                            <div>Геннадий</div>
                            <div>Абрунов</div>
                        </div>
                    </li>
                    <li>
                        <div className="contact">
                            <div className="contact-avatar">
                                <img src={img3} alt=""/>
                            </div>
                            <div>Никита</div>
                            <div>Ворошилов</div>
                        </div>
                    </li>
                    <li>
                        <div className="contact"></div>
                    </li> */}
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