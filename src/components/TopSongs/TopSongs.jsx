import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Topsongs.scss'
import getTopSongApi from '../../api/topSongsApi'

const TopSongs = (props) => {
    const { setLoader } = props
    const [songsData, setSongsData] = useState()
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await getTopSongApi.getAll()
                console.log(response)
                setSongsData(response)
                setLoader()
            } catch (error) {
                console.log("Failed to get data, error: ", error)
            }
        }
        getData()
    }, [])

    return (
        <div className="top-songs">
            <h2>Top 10 popular Songs</h2>
            <div className='list-songs'>
                {
                    songsData &&
                    songsData.map((item, index) => (
                        <Link to={`/player?name=${item.name}`} className="link" key={index}>
                            <div className="top">{index + 1}</div>
                            <div className="top-song-detail">
                                <div className="song-img">
                                    <img src={item.avatar} alt="" />
                                </div>
                                <div className="detail">
                                    <h5 className="song-name">{item.name}</h5>
                                    <div className="singer">{item.singer}</div>
                                </div>
                            </div>
                        </Link>

                    ))
                }
            </div>

        </div>
    )
}

TopSongs.propTypes = {
    name: PropTypes.string,
    singer: PropTypes.string,
    img: PropTypes.string,
}

export default TopSongs
