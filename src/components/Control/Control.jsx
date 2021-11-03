import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import './control.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setIsPlay } from '../../action/songs'

const Control = ({ handleChange }) => {
    const isPlay = useSelector(state => state.songs.isPlay)
    const dispatch = useDispatch()
    const handlePlay = () => {
        isPlay === true ? dispatch(setIsPlay(false)) : dispatch(setIsPlay(true))
    }
    return (
        <div className='control'>
            <div className="btn-prev" onClick={() => handleChange('PREV')}>
                <FontAwesomeIcon icon={faBackward} />
            </div>
            <div className="btn-play"
                onClick={handlePlay}
            >
                <FontAwesomeIcon icon={isPlay === true ? faPause : faPlay} />
            </div>
            <div className="btn-prev" onClick={() => handleChange('NEXT')}>
                <FontAwesomeIcon icon={faForward} />
            </div>
        </div>
    )
}

export default Control
