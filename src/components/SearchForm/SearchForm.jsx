import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './SearchForm.scss'
const SearchForm = () => {
    const [searchValue, setSearchValue] = useState('')
    const [disable, setDisable] = useState(true)
    const setValue = (e) => {
        const value = e.target.value
        setSearchValue(value)
        setDisable(false)
    }

    const getQueryValue = (e) => {
        e.preventDefault()
        localStorage.setItem('search-name', searchValue)
        window.location.assign(`/search?q=${searchValue}`)
    }

    return (
        <div className="search-form">
            <form className="form" onSubmit={getQueryValue}>
                <input
                    type="text"
                    placeholder="Search a song..."
                    value={searchValue}
                    onChange={setValue}
                />
                <button
                    type="submit"
                    disabled={disable}
                    onClick={getQueryValue}
                    className="btn-search"
                >
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </div>
    )
}

export default SearchForm
