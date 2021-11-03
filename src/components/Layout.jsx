import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../routes/Routes'
import SideBar from './SideBar/SideBar'
import SearchForm from './SearchForm/SearchForm'
import PlayerBar from './Playerbar/PlayerBar'

const Layout = () => {
    return (
        <Router>
            <div className="container">
                <SideBar />
                <div className="main">
                    <SearchForm />
                    <Routes />
                </div>
                <PlayerBar />
            </div>
        </Router>
    )
}

export default Layout
