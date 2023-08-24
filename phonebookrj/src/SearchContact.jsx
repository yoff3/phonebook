import {FaSearch} from 'react-icons/fa'
import { useState } from 'react'

export function SearchContact({contatsList, setSearch, searchUserInput}){

    return (
        <>
        <div className="searchBox">
            <div className="searchBar">
                <input 
                    value={searchUserInput}
                    onChange={e => setSearch(e.target.value)}
                    className="searchBox__input" 
                    type="text" id="contactSearch" 
                    placeholder="Поиск..." />
            </div>
        </div>
        </>
    )
}