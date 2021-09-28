import React from 'react'
import { useLocation } from 'react-router'
import { useEffect, useState } from 'react/cjs/react.development'
import getDetailSong from '../api/detailApi'
import Loader from '../components/Loader/Loader'
import SearchForm from '../components/SearchForm/SearchForm'
import SongDetail from '../components/SongDetail/SongDetail'
import TopSongs from '../components/TopSongs/TopSongs'
import './Player.scss'

const Player = () => {
    const location = useLocation()
    const [songData, setSongData] = useState()
    const [loader, setLoader] = useState(true)

    const param = location.search
    useEffect(() => {
        getData()
    }, [param])

    const getData = async () => {
        try {
            const detailSong = await getDetailSong.get(param)
            setSongData(detailSong)
            window.scrollTo(0, 0)
            setLoader(false)
        } catch (error) {
            console.log('Failed to get song data, error: ', error)
        }
    }


    return (
        <div className="player">
            <SearchForm />
            <div className="container">
                <div className="box">
                    {
                        songData &&
                        songData.slice(0, 1).map((item, index) => (
                            <SongDetail key={index}
                                name={item.name}
                                audio={item.music}
                                singer={item.creator}
                                img={item.avatar}
                            />
                        ))
                    }
                    <TopSongs />
                </div>
            </div>
            {
                loader === true &&
                <Loader />
            }
        </div>
    )
}

export default Player
