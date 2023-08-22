import { BackButton } from "./BackButton"
import { SaveButton } from "./SaveButton"
import { DeleteButton } from "./DeleteButton"
import img from './images/man1.jpg'

export function ContactForm(){
    return (
        <>  
        <section className="contacts">
            <div className="container">
                <div className="contacts-title">Контакты</div>
                <nav className="contacts-nav">
                    <BackButton />
                    <SaveButton />
                </nav>
                <form className="contact-form">
                    <div className="contact-avatar-zoomed">
                        <img src={img} alt="аватар контакта"/>
                    </div>
                    <div className="contact-fields">
                        <div className="contact-field">
                            <label for="fName" className="contact-label">Имя</label>
                            <input className="contact-input" type="text" id="fName" />
                        </div>
                        <div className="contact-field">
                            <label for="lName" className="contact-label">Фамилия</label>
                            <input className="contact-input" type="text" id="lName" />
                        </div>
                        <div className="contact-field">
                            <label for="phoneNumber" className="contact-label">Номер телефона</label>
                            <input className="contact-input" type="text" id="phoneNumber" />
                        </div>
                        <div className="contact-field delete-contact">
                            <label className="contact-label">Удалить контакт</label>
                            <DeleteButton />
                        </div>
                    </div>
                </form>
            </div>
            
        </section>
        </>
    )
}