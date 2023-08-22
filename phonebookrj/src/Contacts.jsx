import { BackButton } from "./BackButton";
import { AddButton } from "./AddButton";
import { SearchContact } from "./SearchContact";
import { ContactForm } from "./ContactForm";
import img1 from './images/man1.jpg'
import img2 from './images/man2.jpg'
import img3 from './images/man3.jpg'

export function Contacts(){
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
                <li>
                    <div className="contact">
                        <div className="contact-avatar">
                            <img src={img1} alt=""/>
                        </div>
                        <div>Василий</div>
                        <div>Новиков</div>
                    </div>
                </li>
                <li>
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
                </li>
            </ul>
        </div>
    </section>
    <section>
        <ContactForm/>
    </section>
    </>
)

}