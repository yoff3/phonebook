import {FaSearch} from 'react-icons/fa'

export function SearchContact(){
    return (
        <div className="searchBox">
            <div className="searchBar">
                <input className="searchBox__input" type="text" id="contactSearch" placeholder="Поиск..." />
            </div>
        </div>
    )
}