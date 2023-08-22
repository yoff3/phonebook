import {FaSave} from "react-icons/fa"

export function SaveButton({saveContact}){
    return (
        <button onClick={saveContact} className="btn btn-save">
            <div className="icon-save"><FaSave/></div> Сохранить
        </button>
    )

}