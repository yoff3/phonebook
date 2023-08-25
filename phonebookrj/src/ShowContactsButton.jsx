import {FaArrowLeft} from "react-icons/fa"

export function ShowContactsButton({getContacts}){
    return (
        <button onClick={getContacts} className="btn btn-show">
            <div className="icon-show"><FaArrowLeft/></div> Показать контакты
        </button>
    )

}