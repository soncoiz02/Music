import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './Topsongs.scss'
import getTopSongApi from '../../api/topSongsApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc, faPlay } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveName, setDetail, setSongs } from '../../action/songs'

const TopSongs = () => {

    const listSongs = useSelector(state => state.songs.list)
    const activeSongName = useSelector(state => state.songs.activeName)
    const dispatch = useDispatch()

    useEffect(() => {
        getTopSongsData()
    }, [])

    const getTopSongsData = async () => {
        try {
            const response = await getTopSongApi.getTopSongs()
            dispatch(setSongs(response))
        } catch (error) {
            console.log("Failed to get data, error: ", error)
        }
    }


    const handleDetailSongData = (currentIndex) => {
        const detailSong = listSongs[currentIndex]
        dispatch(setDetail(detailSong))
        dispatch(setActiveName(detailSong.name))
    }

    return (
        <div className="top-songs">
            <h2>Top 10 popular Songs</h2>
            <div className='list-songs'>
                {
                    listSongs.length > 0 &&
                    listSongs.map((item, index) => (
                        <div className="item" key={index}>
                            <div className="top">{index + 1}</div>
                            <div className={item.name === activeSongName ? 'song active' : 'song'} onClick={() => handleDetailSongData(index)}>
                                <div className="main">
                                    <div className="song-img">
                                        <img src={item.avatar} alt="" />
                                    </div>
                                    <div className="detail">
                                        <h5 className="song-name">{item.name}</h5>
                                        <p className="singer">{item.singer}</p>
                                    </div>
                                </div>
                                <div className="play-btn">
                                    <FontAwesomeIcon icon={faPlay} />
                                </div>
                                <div className="rotate-animation">
                                    <FontAwesomeIcon icon={faCompactDisc} />
                                </div>
                            </div>
                        </div>


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
