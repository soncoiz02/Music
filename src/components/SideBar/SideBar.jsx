import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLocation } from 'react-router'
import './SideBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faHome, faMusic, faPodcast } from '@fortawesome/free-solid-svg-icons'
import Songs from '../../page/Songs'

const navData = [
    {
        path: "/",
        text: "Home",
        icon: <FontAwesomeIcon icon={faHome} />
    },
    {
        text: "Vietnamese Music",
        icon: <FontAwesomeIcon icon={faMusic} />,
        subNav: [
            {
                path: "/list-songs?vn-pop",
                text: "Pop Music",
            },
            {
                path: "/list-songs?vn-rap",
                text: "Rap Music",
            },
            {
                path: "/list-songs?vn-edm",
                text: "Remix",
            }
        ]
    },
    {
        text: "US-UK Music",
        icon: <FontAwesomeIcon icon={faPodcast} />,
        subNav: [
            {
                path: "/list-songs?us-pop",
                text: "Pop Music",
            },
            {
                path: "/list-songs?us-edm",
                text: "EDM",
            },
            {
                path: "/list-songs?us-rap",
                text: "Rap Music",
            }
        ]
    },
    {
        text: "Asian Music",
        icon: <FontAwesomeIcon icon={faSpotify} />,
        subNav: [
            {
                path: "/list-songs?korea",
                text: "Korean Music",
            },
            {
                path: "/list-songs?china",
                text: "Chinese Music",
            }
        ]
    }
]

const SubNav = props => {
    const { subNavData, onclick } = props
    return (
        <Link to={subNavData.path} onClick={onclick} className="sub-link">
            {subNavData.text}
        </Link>
    )
}

const SideBar = () => {
    useEffect(() => {
        activeLink()
    }, [])
    const activeLink = () => {
        const links = document.querySelectorAll('.link')
        const subNav = document.querySelectorAll('.sub-nav')
        const subLink = document.querySelectorAll('.sub-link')
        links[0].classList.add('active')
        for (let i = 0; i < links.length; i++) {
            links[i].onclick = () => {
                const activeLink = document.querySelector('.link.active')
                const activeSubNav = document.querySelector('.sub-nav.active')
                if (activeLink) {
                    activeLink.classList.remove('active')
                }
                if (activeSubNav) {
                    activeSubNav.classList.remove('active')
                }

                links[i].classList.add('active')
                subNav[i].classList.add('active')
                subNav[0].classList.remove('active')
            }
        }
        subLink.forEach(e => {
            e.onclick = () => {
                const activeLink = document.querySelector('.sub-link.active')
                if (activeLink) activeLink.classList.remove('active')
                e.classList.add('active')
            }
        })
    }

    const handleClick = () => {
        const listSong = document.querySelectorAll('.song')
        if (listSong) {
            listSong.forEach(e => {
                e.classList.remove('active')
            })
        }
    }

    const removeActive = () => {
        const navActive = document.querySelector('.nav.active')
        const navCoverActive = document.querySelector('.nav-cover.active')
        navActive.classList.remove('active')
        navCoverActive.classList.remove('active')
    }

    return (
        <div className="nav-cover" onTouchStart={removeActive}>
            <div className="nav">
                <ul className="nav__link">
                    {navData.map((data, index) => (
                        <>
                            <li className='link'>
                                {
                                    data.path ?
                                        <NavLink to={data.path}>{data.icon} {data.text}</NavLink>
                                        : <a href="#">{data.icon} {data.text}</a>
                                }
                            </li>
                            <div className="sub-nav">
                                {data?.subNav?.map((data, index) => (<SubNav subNavData={data} key={index} onclick={handleClick} />))}
                            </div>
                        </>
                    ))}
                </ul>
            </div>
        </div >
    )
}

export default SideBar