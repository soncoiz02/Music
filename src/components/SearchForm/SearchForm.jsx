import { faBars, faSearch, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { setSearchValue } from '../../action/songs'
import './SearchForm.scss'
const SearchForm = () => {
    const history = useHistory()

    const dispatch = useDispatch()

    const [value, setValue] = useState('')
    const [disable, setDisable] = useState(true)
    const [darkMode, setDarkMode] = useState(false)
    const getValue = (e) => {
        const value = e.target.value
        setValue(value)
        setDisable(false)
    }

    const getSearchValue = (e) => {
        e.preventDefault()
        dispatch(setSearchValue(value))
        setValue('')
        history.push('/search')
    }

    const handleActive = () => {
        const nav = document.querySelector('.nav')
        const navCover = document.querySelector('.nav-cover')
        nav.classList.add('active')
        navCover.classList.add('active')
    }

    return (
        <div className="search-form">
            <form className="form" onSubmit={getSearchValue}>
                <input
                    type="text"
                    placeholder="Tìm tên bài hát hoặc ca sĩ..."
                    value={value}
                    onChange={getValue}
                />
                <button
                    type="submit"
                    disabled={disable}
                    onClick={getSearchValue}
                    className="btn-search"
                >
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
            <div className="btn-bar" onTouchStart={handleActive}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
    )
}

export default SearchForm
