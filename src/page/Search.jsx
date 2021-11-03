import React, { useEffect } from 'react'
import notFound from '../assets/img/not-found.jpg'
import './Search.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc, faPlay } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setActiveName, setDetail, setSearchValue, setSongs } from '../action/songs'

const Search = () => {
    const searchValue = useSelector(state => state.songs.searchValue)
    const listSongs = useSelector(state => state.songs.list)
    const activeSongName = useSelector(state => state.songs.activeName)
    const dispatch = useDispatch()
    const allSongs = JSON.parse(localStorage.getItem('all-songs'))

    useEffect(() => {
        filterSongs()
    }, [searchValue])

    const filterSongs = () => {
        try {
            if (searchValue !== '') {
                const filterSongs = allSongs.filter(e => {
                    return e.name.toLowerCase().includes(searchValue.toLowerCase()) || e.singer.toLowerCase().includes(searchValue.toLowerCase())
                })
                console.log(filterSongs);
                dispatch(setSongs(filterSongs))
            }
            else {
                setSearchValue('')
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleDetailSongData = (currentIndex) => {
        const detailSong = listSongs[currentIndex]
        dispatch(setDetail(detailSong))
        dispatch(setActiveName(detailSong.name))
    }

    return (
        <div className="search-page">
            <div className="container">
                {
                    listSongs?.length > 0 && searchValue !== '' ?
                        <div className="box">
                            <h2>Result for <span>"{searchValue}"</span> </h2>
                            <div className="list-result">
                                {
                                    listSongs.map((item, index) => (
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
                                    ))

                                }
                            </div>
                        </div>
                        :
                        <div className="box">
                            <h2>No result for <span>"{searchValue}"</span> </h2>
                            <div className="not-found">
                                <img src={notFound} alt="" />
                            </div>
                        </div>
                }
            </div>
        </div >
    )
}

export default Search
