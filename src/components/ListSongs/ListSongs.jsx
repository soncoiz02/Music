import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './ListSongs.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const ListSongs = props => {
    const { songsData, getDetail, pageNum } = props
    const handleDetailSongData = (type, currentIndex) => {
        getDetail(type, currentIndex, pageNum)
        activeSong(currentIndex)
    }
    const activeSong = (index) => {
        const listSongs = document.querySelectorAll('.song')
        const songActive = document.querySelector('.song.active')
        if (songActive) songActive.classList.remove('active')
        listSongs[index].classList.add('active')
    }
    return (
        <div className='list-songs'>
            {
                songsData &&
                songsData.map((item, index) => (
                    <div className="song">
                        <div className="main">
                            <div className="song-img">
                                <img src={item.avatar} alt="" />
                            </div>
                            <div className="detail">
                                <h5 className="name">{item.name}</h5>
                                <p className="singer">{item.singer}</p>
                            </div>
                        </div>
                        <div className="play-btn">
                            <FontAwesomeIcon icon={faPlay} onClick={() => handleDetailSongData(item.type, index, pageNum)} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

ListSongs.propTypes = {
    songsData: PropTypes.array,
}

export default ListSongs
