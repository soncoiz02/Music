import { faBars, faSearch, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './SearchForm.scss'
const SearchForm = () => {
    const [searchValue, setSearchValue] = useState('')
    const [disable, setDisable] = useState(true)
    const [darkMode, setDarkMode] = useState(false)
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

    const handleDarkMode = () => {
        setDarkMode(!darkMode)
        const container = document.querySelector('.container')
        if (darkMode === false) {
            container.classList.add('dark')
        }
        else {
            container.classList.remove('dark')
        }
    }
    return (
        <div className="search-form">
            <div className="btn-bar">
                <FontAwesomeIcon icon={faBars} />
            </div>
            <form className="form" onSubmit={getQueryValue}>
                <input
                    type="text"
                    placeholder="Tìm tên bài hát hoặc ca sĩ..."
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
            <div className={darkMode === true ? "btn-dark-mode active" : "btn-dark-mode"} onClick={handleDarkMode}>
                <div className="button"></div>
                <FontAwesomeIcon icon={darkMode === true ? faSun : faMoon} />
            </div>
        </div>
    )
}

export default SearchForm
