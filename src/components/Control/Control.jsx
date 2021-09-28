import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import './control.scss'

const Control = (props) => {
    const { handlePlay, isPlay, currentTime, duration } = props

    const secondsToHms = (seconds) => {
        if (!seconds) return '00 : 00'
        let duration = seconds

        let hours = duration / 3600
        duration = duration % 3600

        let min = parseInt(duration / 60)
        duration = duration % 60

        let sec = parseInt(duration)

        if (min < 10) {
            min = `0${min}`
        }
        if (sec < 10) {
            sec = `0${sec}`
        }

        if (parseInt(hours, 10) > 0) {
            return `${parseInt(hours)} : ${min} : ${sec}`
        }
        else if (min === 0) {
            return `00 : ${sec}`
        }
        else {
            return `${min} : ${sec}`
        }
    }

    return (
        <div className='control'>
            <div className="timer">
                {secondsToHms(currentTime)}
            </div>
            <div className="btn-play"
                onClick={handlePlay}
            >
                <FontAwesomeIcon icon={isPlay === true ? faPause : faPlay} />
            </div>
            <div className="timer">
                {secondsToHms(duration)}
            </div>
        </div>
    )
}

export default Control
