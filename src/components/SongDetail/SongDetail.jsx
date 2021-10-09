import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './SongDetail.scss'
import ProgressBar from '../Progress/ProgressBar'
import Control from '../Control/Control'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'


const SongDetail = props => {
    const { songsData, currentIndex, getNextIndex, getPrevIndex } = props
    const [percent, setPercent] = useState(0)
    const [isPlay, setIsPlay] = useState(true)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [progressValue, setProgressValue] = useState(0)
    const [rotateImg, setRotateImg] = useState()
    const audioRef = useRef()
    useEffect(() => {
        const rotateImg = document.querySelector('.song-detail-img').animate(
            [{ transform: 'rotate(360deg)' }],
            {
                duration: 10000,
                iterations: Infinity
            }
        )
        setRotateImg(rotateImg)
    }, [currentIndex])
    const getPercent = (e) => {
        const seekTime = audioRef.current.duration / 100 * e.target.value
        audioRef.current.currentTime = seekTime
        setPercent(e.target.value)
    }

    const handlePlay = () => {
        const songAudio = audioRef.current
        if (isPlay === true) {
            songAudio.pause()
            setIsPlay(!isPlay)
        }
        else {
            songAudio.play()
            setIsPlay(!isPlay)
        }
    }

    const playAnimation = () => {
        rotateImg.play()
    }
    const pauseAnumation = () => {
        rotateImg.pause()
    }

    const getCurrentTime = (e) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
        const time = e.currentTarget.currentTime
        setPercent(percent)
        setProgressValue(percent)
        setCurrentTime(time.toFixed(2))
        if (time >= e.currentTarget.duration) getNextIndex()
    }

    const loadedData = (e) => {
        const duration = e.currentTarget.duration.toFixed(2)
        setDuration(duration)
    }

    return (
        <div className='song-detail'>
            {
                songsData &&
                <>
                    <div className="detail">
                        <div className="name">{songsData[currentIndex].name}</div>
                        <div className="singer">{songsData[currentIndex].singer}</div>
                    </div>
                    <div className="control-bar ">
                        <audio
                            src={songsData[currentIndex].audio}
                            className="audio"
                            ref={audioRef}
                            onLoadedData={loadedData}
                            onTimeUpdate={getCurrentTime}
                            autoPlay
                            onPlay={playAnimation}
                            onPause={pauseAnumation}
                        ></audio>
                        <Control
                            handlePlay={handlePlay}
                            duration={duration}
                            currentTime={currentTime}
                            isPlay={isPlay}
                            getNextIndex={getNextIndex}
                            getPrevIndex={getPrevIndex}
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
                        <img src={songsData[currentIndex].avatar} alt='' />
                    </div>
                    <div className="note-animation">
                        <FontAwesomeIcon icon={faMusic} className="note" />
                        <FontAwesomeIcon icon={faMusic} className="note" />
                        <FontAwesomeIcon icon={faMusic} className="note" />
                    </div>
                </>
            }
        </div>
    )
}

SongDetail.propTypes = {
    audio: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    singer: PropTypes.string,
}

export default SongDetail
