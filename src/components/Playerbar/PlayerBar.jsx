import React, { useEffect, useRef, useState } from 'react'
import './PlayerBar.scss'
import ProgressBar from '../Progress/ProgressBar'
import Control from '../Control/Control'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronCircleUp, faMusic } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveName, setDetail, setIsPlay } from '../../action/songs'
const PlayerBar = () => {
    const songDetail = useSelector(state => state.songs.detail)
    const listSongs = useSelector(state => state.songs.list)
    const isPlay = useSelector(state => state.songs.isPlay)
    const dispatch = useDispatch()

    const [percent, setPercent] = useState(0)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [progressValue, setProgressValue] = useState(0)
    const audioRef = useRef()

    useEffect(() => {
        const songAudio = audioRef.current
        if (songAudio) isPlay === true ? songAudio.play() : songAudio.pause()
    }, [isPlay])

    const getPercent = (e) => {
        const seekTime = audioRef.current.duration / 100 * e.target.value
        audioRef.current.currentTime = seekTime
        setPercent(e.target.value)
    }

    const getCurrentTime = (e) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
        const time = e.currentTarget.currentTime
        setPercent(percent)
        setProgressValue(percent)
        setCurrentTime(time.toFixed(2))
        if (time >= e.currentTarget.duration) {
            const newSongIndex = listSongs.indexOf(songDetail) + 1
            updateSongDetail(newSongIndex)
        }
    }

    const loadedData = (e) => {
        const duration = e.currentTarget.duration.toFixed(2)
        setDuration(duration)
    }

    const handleChange = (action) => {
        if (action === 'NEXT') {
            const nextSongIndex = listSongs.indexOf(songDetail) + 1
            if (nextSongIndex > listSongs.length - 1) return
            updateSongDetail(nextSongIndex)
        }
        else if (action === 'PREV') {
            const prevSongIndex = listSongs.indexOf(songDetail) - 1
            if (prevSongIndex < 0) return
            updateSongDetail(prevSongIndex)
        }
    }

    const updateSongDetail = (newIndex) => {
        const newSongDetail = listSongs[newIndex]
        dispatch(setDetail(newSongDetail))
        dispatch(setActiveName(newSongDetail.name))
    }

    return (
        <>
            <div className="player-bar">
                {
                    songDetail.name !== '' &&
                    <div className='song-detail'>
                        <div className="detail">
                            <div className="img">
                                <img src={songDetail.avatar} alt="" />
                            </div>
                            <div className="main">
                                <div className="name">{songDetail.name}</div>
                                <div className="singer">{songDetail.singer}</div>
                            </div>
                        </div>
                        <div className="control-bar ">
                            <audio
                                src={songDetail.audio}
                                className="audio"
                                ref={audioRef}
                                onLoadedData={loadedData}
                                onTimeUpdate={getCurrentTime}
                                autoPlay
                                onPlay={() => setIsPlay(true)}
                                onPause={() => setIsPlay(false)}
                            ></audio>
                            <Control
                                handleChange={handleChange}
                            />
                            <ProgressBar
                                onChange={getPercent}
                                percent={percent}
                                value={progressValue}
                                duration={duration}
                                currentTime={currentTime}
                            />
                        </div>
                        <div className="song-detail-img">
                            <img src={songDetail.avatar} alt='' />
                        </div>
                        <div className="note-animation">
                            <FontAwesomeIcon icon={faMusic} className="note" />
                            <FontAwesomeIcon icon={faMusic} className="note" />
                            <FontAwesomeIcon icon={faMusic} className="note" />
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default PlayerBar
