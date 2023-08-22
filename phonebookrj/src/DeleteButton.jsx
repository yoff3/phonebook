import {FaTrashAlt} from "react-icons/fa"

export function DeleteButton(){
    return (
        <button className="btn btn-delete">
            <div className="icon-delete"><FaTrashAlt/></div> Удалить
        </button>
    )

}