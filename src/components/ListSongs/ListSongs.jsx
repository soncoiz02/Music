import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './ListSongs.scss'

const ListSongs = props => {
    const { songsData } = props
    return (
        <div className='list-songs'>
            {
                songsData &&
                songsData.map((item, index) => (
                    <Link className='song' key={index} to={`/player?name=${item.name}`} >
                        <div className="song-img">
                            <img src={item.avatar} alt="" />
                        </div>
                        <div className="detail">
                            <h5 className="name">{item.name}</h5>
                            <p className="singer">{item.creator}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

ListSongs.propTypes = {
    songsData: PropTypes.array,
}

export default ListSongs
