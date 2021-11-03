import React from 'react'
import PropTypes from 'prop-types'
import './ListSongs.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc, faPlay } from '@fortawesome/free-solid-svg-icons'
import { setActiveName, setDetail } from '../../action/songs'
import { useSelector } from 'react-redux'
import LazyLoad from 'react-lazyload'

const Loading = () => (
    <div className="loading">
        <div className="loading-img"></div>
    </div>
)

const ListSongs = props => {
    const { songsData, dispatch } = props
    const activeSongName = useSelector(state => state.songs.activeName)

    const handleDetailSongData = (currentIndex) => {
        const detailSong = songsData[currentIndex]
        console.log(detailSong);
        dispatch(setDetail(detailSong))
        dispatch(setActiveName(detailSong.name))
    }

    return (
        <div className='list-songs'>
            {
                songsData &&
                songsData.map((item, index) => (
                    <LazyLoad placeholder={<Loading />} key={index}>
                        <div className={item.name === activeSongName ? 'song active' : 'song'} onClick={() => handleDetailSongData(index)} >
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
                    </LazyLoad>
                ))
            }
        </div>
    )
}

ListSongs.propTypes = {
    songsData: PropTypes.array,
}

export default ListSongs
