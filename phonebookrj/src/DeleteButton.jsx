import {FaTrashAlt} from "react-icons/fa"

export function DeleteButton({ deleteOnClick, deletedContact }){
    return (
        <button onClick={() => deleteOnClick(deletedContact.id)} className="btn btn-delete">
            <div className="icon-delete"><FaTrashAlt/></div> Удалить
        </button>
    )

}