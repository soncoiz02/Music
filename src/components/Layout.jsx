import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../routes/Routes'
import Nav from '../components/Nav/Nav'

const Layout = () => {
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoader(!loader)
        }, 5000)
    }, [])
    return (
        <Router>
            <div className="container">
                <Nav />
                <Routes />
            </div>
        </Router>
    )
}

export default Layout
