import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../routes/Routes'
import SideBar from '../components/SideBar/SideBar'
import SearchForm from './SearchForm/SearchForm'
import PlayerBar from '../components/Playerbar/PlayerBar'

const Layout = () => {
    const [songDetail, setSongDetail] = useState({})
    const [loader, setLoader] = useState(true)

    const getSongDetail = (detail) => {
        setSongDetail(detail)
        console.log(songDetail)
    }

    const setLoaderValue = () => {
        console.log(true);
        setLoader(true)
    }

    return (
        <Router>
            <div className="container">
                <SideBar setLoader={setLoaderValue} />
                <div className="main">
                    <SearchForm />
                    <Routes getSongDetail={getSongDetail} loader={loader} setLoader={setLoader} />
                </div>
                {
                    songDetail &&
                    <PlayerBar songType={songDetail.type} currentIndex={songDetail.currentIndex} pageNum={songDetail.pageNum} />
                }
            </div>
        </Router>
    )
}

export default Layout
