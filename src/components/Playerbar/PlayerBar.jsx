import React, { useEffect, useState } from 'react'
import './PlayerBar.scss'
import getTypeSongs from '../../api/typeSongsApi'
import SongDetail from '../SongDetail/SongDetail'

const PlayerBar = (props) => {
    const { songType, currentIndex, pageNum } = props
    const [songsData, setSongsData] = useState()
    const [songIndex, setSongIndex] = useState(0)
    const [listSongs, setListSongs] = useState()
    useEffect(() => {
        getSongsData()
    }, [])
    useEffect(() => {
        setSongIndex(currentIndex)
        getListSong()
    }, [songType, currentIndex])

    const getListSong = async () => {
        const perPage = 20
        let start = (pageNum - 1) * perPage
        let end = pageNum * perPage
        if (songsData) {
            let listSong = await songsData.filter(e => e.type === songType)
            let newList = []
            listSong.forEach((item, index) => {
                if (index >= start && index < end) {
                    newList.push(item)
                }
            })
            setListSongs(newList)
        }
    }
    const getSongsData = async () => {
        try {
            const data = await getTypeSongs.getAll('all-songs')
            setSongsData(data)
        }
        catch (error) {
            console.log('Failed to get songs data, error: ', error)
        }
    }

    const getPrevIndex = () => {
        let newIndex = songIndex - 1
        if (newIndex < 0) return
        setSongIndex(newIndex)
    }

    const getNextIndex = () => {
        let newIndex = songIndex + 1
        setSongIndex(newIndex)
    }

    return (
        <div className="player-bar">
            {
                listSongs ?
                    <SongDetail songsData={listSongs} currentIndex={songIndex} getPrevIndex={getPrevIndex} getNextIndex={getNextIndex} />
                    : ""
            }
        </div>
    )
}

export default PlayerBar
