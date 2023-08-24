import { ShowContactsButton } from "./ShowContactsButton";
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
	const [allBook, setBook] = useState(() => {
        const localValue = localStorage.getItem("CONTACTS")
        if (localValue == null) return []

        return JSON.parse(localValue)
    })

    const [contacts, setContact] = useState([])

    useEffect(() => {
        localStorage.setItem("CONTACTS", JSON.stringify(allBook))
    }, [allBook])

	const [searchInput, setSearchInput] = useState("")
    
    console.log(searchInput)
    console.log(contacts) //массив контактов который мне надо отфильтровать
    //searchContact(contacts)

	function showContacts(){
		setContact(() => allBook)
	}

	function searchContact(searchingWord){
		setSearchInput(searchingWord) // отображает вводимые символы в поисковой строке
		let value = searchingWord.toLowerCase()
		
		let filteredContacts = allBook.filter((contact) => {
			const contactFullName = contact.firstName.toLowerCase() + " " + contact.lastName.toLowerCase()
			console.log(contactFullName, value)
			console.log(contactFullName.indexOf(value))
			return contactFullName.indexOf(value) !== -1
		})

		setContact(filteredContacts)
	}


    function addContact(e){
        e.preventDefault();

        setBook((current) =>{
            return (
                [...current, {id: crypto.randomUUID(), firstName: contactFirstName,
                    lastName: contactLastName, phoneNumber: contactPhoneNumber}]
            )
        })

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
        setBook((currentContact)=>{
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