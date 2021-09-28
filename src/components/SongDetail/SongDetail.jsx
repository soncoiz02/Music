import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './SongDetail.scss'
import ProgressBar from '../Progress/ProgressBar'
import Control from '../Control/Control'


const SongDetail = props => {
    const { audio, img, name, singer } = props
    const [percent, setPercent] = useState(0)
    const [isPlay, setIsPlay] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [progressValue, setProgressValue] = useState(0)
    const audioRef = useRef()

    const getPercent = (e) => {
        const seekTime = audioRef.current.duration / 100 * e.target.value
        audioRef.current.currentTime = seekTime
        setPercent(e.target.value)
    }

    const handlePlay = () => {
        const songAudio = audioRef.current
        const rotateImg = document.querySelector('.img').animate(
            [{ transform: 'rotate(360deg)' }],
            {
                duration: duration * 1000,
                interation: Infinity
            }
        )
        if (isPlay === true) {
            songAudio.pause()
            setIsPlay(!isPlay)
            rotateImg.pause()
        }
        else {
            songAudio.play()
            setIsPlay(!isPlay)
            rotateImg.play()
        }
    }

    const getCurrentTime = (e) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
        const time = e.currentTarget.currentTime
        setPercent(percent)
        setProgressValue(percent)
        setCurrentTime(time.toFixed(2))
        if (time === e.currentTarget.duration) setIsPlay(!isPlay)
    }

    const loadedData = (e) => {
        const duration = e.currentTarget.duration.toFixed(2)
        setDuration(duration)
    }

    return (
        <div className='song-detail'>
            <div className="img">
                <img src={img} alt='' />
            </div>
            <div className="detail">
                <div className="name">{name}</div>
                <div className="singer">{singer}</div>
                <audio
                    src={audio}
                    className="audio"
                    ref={audioRef}
                    onLoadedData={loadedData}
                    onTimeUpdate={getCurrentTime}
                ></audio>
                <div className="control-panel">
                    <ProgressBar
                        onChange={getPercent}
                        percent={percent}
                        value={progressValue}
                    />
                    <Control
                        handlePlay={handlePlay}
                        duration={duration}
                        currentTime={currentTime}
                        isPlay={isPlay}
                    />
                </div>
            </div>
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
