import React, { useState, useEffect } from 'react'
import './Songs.scss'
import getTypeSongs from '../api/typeSongsApi'
import { useLocation } from 'react-router'
import queryString from 'query-string'
import ListSongs from '../components/ListSongs/ListSongs'
import Pagination from '../components/Pagination/Pagination'
import Loader from '../components/Loader/Loader'
import vnRap from '../assets/img/rap-vn.jpg'
import vnPop from '../assets/img/pop-vn.jpg'
import vnEdm from '../assets/img/edm-vn.jpg'
import usPop from '../assets/img/pop-us.jpg'
import usRap from '../assets/img/rap-us.jpg'
import usEdm from '../assets/img/edm-us.jpg'
import korea from '../assets/img/korea.jpg'
import china from '../assets/img/china.jpg'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setSongs } from '../action/songs'

const data = [
    {
        id: 'vn-pop',
        img: vnPop,
        title: 'Top 100 V-POP'
    },
    {
        id: 'vn-rap',
        img: vnRap,
        title: 'Top 100 Vietnamese Rap'
    },
    {
        id: 'vn-edm',
        img: vnEdm,
        title: 'Top 100 Vietnamese EDM'
    },
    {
        id: 'us-pop',
        img: usPop,
        title: 'Top 100 US/UK-POP'
    },
    {
        id: 'us-rap',
        img: usRap,
        title: 'Top 100 US/UK Rap'
    },
    {
        id: 'us-edm',
        img: usEdm,
        title: 'Top 100 US/UK EDM'
    },
    {
        id: 'korea',
        img: korea,
        title: 'Top 100 Korean'
    },
    {
        id: 'china',
        img: china,
        title: 'Top 100 Chinese'
    }
]

const Songs = () => {
    const location = useLocation()
    const listSongs = useSelector(state => state.songs.list)
    const dispatch = useDispatch()

    const [allData, setAllData] = useState()
    const [loader, setLoader] = useState(true)

    const typeParam = location.search.slice(1)
    const [filter, setFilter] = useState({
        _limit: 20,
        _page: 1
    })

    useEffect(() => {
        const getData = async () => {
            const paramString = queryString.stringify(filter)
            const response = await getTypeSongs.getAll(`${typeParam}?${paramString}`)
            dispatch(setSongs(response))
            setLoader(false)
            activeButton()
            window.scrollTo(0, 0)
        }
        getData()
    }, [filter, typeParam])

    useEffect(() => {
        const getAllData = async () => {
            const typeParam = location.search.slice(1)
            const response = await getTypeSongs.getAll(typeParam)
            setAllData(response)
        }
        getAllData()
    }, [])

    const getPageNum = (num) => {
        setFilter({ ...filter, _page: num })
    }

    const activeButton = () => {
        const btn = document.querySelectorAll('.btn-pagination')
        const num = filter._page - 1
        const btnActive = document.querySelector('.btn-pagination.active')
        if (btnActive) btnActive.classList.remove('active')
        btn[num]?.classList.add('active')
    }

    return (
        <div className='list-songs-page'>
            <div className="container">
                {
                    data.filter(item => item.id === location.search.slice(1)).map((item, index) => (
                        <div className="left-side" key={index}>
                            <h2>{item.title}</h2>
                            <div className="title-img">
                                <img src={item.img} alt="" />
                            </div>
                        </div>
                    ))
                }
                <div className='box'>
                    {
                        listSongs &&
                        <ListSongs
                            songsData={listSongs}
                            pageNum={filter._page}
                            dispatch={dispatch}
                        />
                    }
                    {
                        allData &&
                        <Pagination
                            data={allData}
                            getPageNum={getPageNum}
                        />
                    }
                </div>
            </div>
            {
                loader === true &&
                <Loader />
            }
        </div>
    )
}

export default Songs
