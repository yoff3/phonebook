import {FaArrowLeft} from "react-icons/fa"

export function ShowContactsButton({getContacts}){
    return (
        <button onClick={getContacts} className="btn btn-back">
            <div className="icon-back"><FaArrowLeft/></div> Показать контакты
        </button>
    )

}