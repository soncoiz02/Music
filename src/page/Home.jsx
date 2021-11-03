import React, { useEffect, useState } from 'react'
import getTypeSongs from '../api/typeSongsApi'
import ListCate from '../components/ListCate/ListCate'
import Loader from '../components/Loader/Loader'
import TopSongs from '../components/TopSongs/TopSongs'
import './Home.scss'
const Home = () => {
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        const getAllSongs = async () => {
            try {
                const data = await getTypeSongs.getAll('all-songs')
                localStorage.setItem('all-songs', JSON.stringify(data))
                setLoader(false)
            } catch (error) {
                console.log(error);
            }
        }
        getAllSongs()
    }, [])

    return (
        <div className="home">
            <div className="container">
                <div className="intro">
                    <h1>Wellcom to <span>SMUSIC</span></h1>
                    <p className="dsc">Where you can listen to music Free</p>
                    <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, fugiat consequatur dolore sequi eos laborum quod voluptas voluptates molestiae aspernatur! Minus, sit expedita! Debitis expedita sequi est consequatur nulla error!</p>
                </div>
                <ListCate />
                <TopSongs />
            </div>
            {
                loader === true &&
                <Loader />
            }
        </div>
    )
}

export default Home
