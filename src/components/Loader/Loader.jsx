import React from 'react'
import './Loader.scss'

const Loader = () => {
    return (
        <div className="loader-animation">
            <div className="circle">
                <div className="loader">
                    <div className="loader">
                        <div className="loader">
                            <div className="loader"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader
