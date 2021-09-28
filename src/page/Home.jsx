import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader/Loader'
import SearchForm from '../components/SearchForm/SearchForm'
import TopSongs from '../components/TopSongs/TopSongs'
import './Home.scss'
const Home = () => {
    document.title = 'SMusic'
    const [loader, setLoader] = useState(true)
    const removeLoader = () => {
        setLoader(false)
    }

    return (
        <div className="home">
            <SearchForm />
            <div className="container">
                <div className="intro">
                    <h1>Wellcom to <span>SMUSIC</span></h1>
                    <p className="dsc">Where you can listen to music Free</p>
                    <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, fugiat consequatur dolore sequi eos laborum quod voluptas voluptates molestiae aspernatur! Minus, sit expedita! Debitis expedita sequi est consequatur nulla error!</p>
                </div>
                <TopSongs setLoader={removeLoader} />
            </div>
            {
                loader === true &&
                <Loader />
            }
        </div>
    )
}

export default Home
