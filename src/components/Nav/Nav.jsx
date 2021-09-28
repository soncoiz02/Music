import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Nav.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faHome, faMusic, faPodcast, faHeadphones } from '@fortawesome/free-solid-svg-icons'

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
                path: "/list-music?vn-pop",
                text: "Pop Music",
            },
            {
                path: "/list-music?vn-rap",
                text: "Rap Music",
            },
            {
                path: "/list-music?vn-remix",
                text: "Remix",
            }
        ]
    },
    {
        text: "US-UK Music",
        icon: <FontAwesomeIcon icon={faPodcast} />,
        subNav: [
            {
                path: "/list-music?us-pop",
                text: "Pop Music",
            },
            {
                path: "/list-music?us-edm",
                text: "EDM",
            },
            {
                path: "/list-music?us-rap",
                text: "Rap Music",
            }
        ]
    },
    {
        path: "/list-music?korea",
        text: "Korean Music",
        icon: <FontAwesomeIcon icon={faSpotify} />
    },
    {
        path: "/list-music?china",
        text: "Chinese Music",
        icon: <FontAwesomeIcon icon={faHeadphones} />
    }
]

const SubNav = props => {
    const { subNavData } = props
    return (
        <Link to={subNavData.path}>
            {subNavData.text}
        </Link>
    )
}

const Nav = () => {
    useEffect(() => {
        activeLink()
    }, [])
    const activeLink = () => {
        const links = document.querySelectorAll('.link')
        const subNav = document.querySelectorAll('.sub-nav')
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
                subNav[3].classList.remove('active')
                subNav[4].classList.remove('active')
            }
        }
    }
    return (
        <div className="nav">
            <ul className="nav__link">
                {navData.map((data, index) => (
                    <>
                        <li className={'link'}>
                            {
                                data.path ?
                                    <NavLink to={data.path}>{data.icon} {data.text}</NavLink>
                                    : <a href="#">{data.icon} {data.text}</a>
                            }
                        </li>
                        <div className="sub-nav">
                            {data?.subNav?.map((data, index) => (<SubNav subNavData={data} key={index} />))}
                        </div>
                    </>
                ))}
            </ul>
        </div >
    )
}

export default Nav