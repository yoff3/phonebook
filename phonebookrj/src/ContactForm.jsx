import { BackButton } from "./BackButton"
import { SaveButton } from "./SaveButton"
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
                            <label className="contact-label">Имя
                                <input className="contact-input" type="text" id="fName" />
                            </label>
                        </div>
                        <div>
                            <label className="contact-label">Фамилия
                                <input className="contact-input" type="text" id="lName" />
                            </label>
                        </div>
                        <div>
                            <label className="contact-label">Номер телефона
                                <input className="contact-input" type="text" id="phoneNumber" />
                            </label>
                        </div>
                        <div>
                            <label className="contact-label">Удалить пользователя</label>
                            <button type="submit">Удалить</button>
                        </div>
                    </div>
                </form>
            </div>
            
        </section>
        </>
    )
}