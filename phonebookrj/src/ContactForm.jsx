import { ShowContactsButton } from "./ShowContactsButton"
import { SaveButton } from "./SaveButton"
import img from './images/man1.jpg'

export function ContactForm({ getFirstName, getLastName, getNumber, handleContact, contactFirstName, contactLastName, contactPhoneNumber }){

    return (
        <>  
        <section className="contacts">
            <div className="container"> 
                <div className="contacts-title">Создать контакт</div>
                <nav className="contacts-nav">
                    <ShowContactsButton />
                    <SaveButton saveContact={handleContact} />
                </nav>
                <form className="contact-form">
                    <div className="contact-avatar-zoomed">
                        <img src={img} alt="аватар контакта"/>
                    </div>
                    <div className="contact-fields">
                        <div className="contact-field">
                            <label htmlFor="fName" className="contact-label">Имя</label>
                            <input 
                                value={contactFirstName}
                                onChange={e => getFirstName(e.target.value)} 
                                className="contact-input" 
                                type="text" 
                                id="fName" />
                        </div>
                        <div className="contact-field">
                            <label htmlFor="lName" className="contact-label">Фамилия</label>
                            <input 
                                value={contactLastName}
                                onChange={e => getLastName(e.target.value)} 
                                className="contact-input" 
                                type="text" 
                                id="lName" />
                        </div>
                        <div className="contact-field">
                            <label htmlFor="phoneNumber" className="contact-label">Номер телефона</label>
                            <input 
                                value={contactPhoneNumber}
                                onChange={e => getNumber(e.target.value)} 
                                className="contact-input" 
                                type="text" 
                                id="phoneNumber" />
                        </div>
                    </div>
                </form>
            </div>
            
        </section>
        </>
    )
}