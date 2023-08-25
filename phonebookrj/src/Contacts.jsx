import { ShowContactsButton } from "./ShowContactsButton";
import { AddButton } from "./AddButton";
import { SearchContact } from "./SearchContact";
import { ContactForm } from "./ContactForm";
import { useEffect, useState } from "react";
import img1 from './images/man1.jpg'
import { DeleteButton } from "./DeleteButton";

export function Contacts(){

    const [contactFirstName, setContactFirstName] = useState("")
    const [contactLastName, setContactLastName] = useState("")
    const [contactPhoneNumber, setContactPhoneNumber] = useState("")   
	const [contactsList, setcontactsList] = useState(() => {
        const localValue = localStorage.getItem("CONTACTS")
        if (localValue == null) return []

        return JSON.parse(localValue)
    })

    const [contacts, setContact] = useState([])

    useEffect(() => {
        localStorage.setItem("CONTACTS", JSON.stringify(contactsList))
    }, [contactsList])

	const [searchInput, setSearchInput] = useState("")
 

	function showContacts(){
		setContact(() => contactsList)
	}


	function searchContact(searchingWord){
		setSearchInput(searchingWord) 
		let value = searchingWord.toLowerCase()
		
		let filteredContacts = contactsList.filter((contact) => {
			const contactFullName = contact.firstName.toLowerCase() + " " + contact.lastName.toLowerCase()
			return contactFullName.indexOf(value) !== -1
		})

		setContact(filteredContacts)
	}

	function setEditFromFields(editingContact){

		console.log("hi im working fine")
		console.log(editingContact)
		console.log(editingContact.id, editingContact.firstName, editingContact.lastName)

		setContactFirstName(editingContact.firstName)
		setContactLastName(editingContact.lastName)
		setContactPhoneNumber(editingContact.phoneNumber)

		return <ContactForm  
						getFirstName={setContactFirstName} 
						getLastName={setContactLastName}
						getNumber={setContactPhoneNumber}
						contactFirstName={contactFirstName} 
						contactLastName={contactLastName}
						contactPhoneNumber={contactPhoneNumber}
						handleContact={addContact}/>
		
	}


    function addContact(){
		if(!contactFirstName && !contactPhoneNumber && !contactLastName){
			return
		}
		let correctedFirstName = contactFirstName[0].toLocaleUpperCase() + contactFirstName.slice(1).toLowerCase()
		let correctedLastName = contactLastName[0].toLocaleUpperCase() + contactLastName.slice(1).toLowerCase()
		
		setcontactsList((current) =>{
            return (
                [...current, {id: crypto.randomUUID(), firstName: correctedFirstName,
                    lastName: correctedLastName, phoneNumber: contactPhoneNumber}]
            )
        })

		setContact((current) =>{
            return (
                [...current, {id: crypto.randomUUID(), firstName: correctedFirstName,
                    lastName: correctedLastName, phoneNumber: contactPhoneNumber}]
            )
        })

        setContactFirstName("")
        setContactLastName("")
        setContactPhoneNumber("")
    }


    function deleteContact(id){
        setcontactsList((currentContact)=>{
            return currentContact.filter((contact => contact.id !== id))
        })

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
                    <ShowContactsButton getContacts={showContacts}/>
                    <AddButton />
                </nav>
                <SearchContact contatsList={contacts} setSearch={searchContact} searchUserInput={searchInput} />
                <ul className="contacts-list">
                    {contacts.map(contact => {
                        return (
                            <li key={contact.id} >
                                <div className="contact" >
                                    <div className="contact-info" onClick={() => setEditFromFields(contact)}>
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
        {<ContactForm 
            getFirstName={setContactFirstName} 
            getLastName={setContactLastName}
            getNumber={setContactPhoneNumber}
            contactFirstName={contactFirstName} 
            contactLastName={contactLastName}
            contactPhoneNumber={contactPhoneNumber}
            handleContact={addContact}
			/> }
        </>
    )

}