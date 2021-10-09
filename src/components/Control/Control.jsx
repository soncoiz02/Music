import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import './control.scss'

const Control = (props) => {
    const { handlePlay, isPlay, getNextIndex, getPrevIndex } = props
    return (
        <div className='control'>
            <div className="btn-prev" onClick={getPrevIndex}>
                <FontAwesomeIcon icon={faBackward} />
            </div>
            <div className="btn-play"
                onClick={handlePlay}
            >
                <FontAwesomeIcon icon={isPlay === true ? faPause : faPlay} />
            </div>
            <div className="btn-prev" onClick={getNextIndex}>
                <FontAwesomeIcon icon={faForward} />
            </div>
        </div>
    )
}

export default Control
