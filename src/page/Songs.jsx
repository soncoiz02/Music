import React, { useState, useEffect } from 'react'
import SearchForm from '../components/SearchForm/SearchForm'
import './Songs.scss'
import getTypeSongs from '../api/typeSongsApi'
import { useLocation } from 'react-router'
import queryString from 'query-string'
import ListSongs from '../components/ListSongs/ListSongs'
import Pagination from '../components/Pagination/Pagination'
import Loader from '../components/Loader/Loader'

const Songs = () => {
    const location = useLocation()
    const [songsData, setSongsData] = useState()
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
            console.log(response)
            setSongsData(response)
            activeButton()
            window.scrollTo(0, 0)
            setLoader(false)
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
        console.log(num, btn)
        const btnActive = document.querySelector('.btn-pagination.active')
        if (btnActive) btnActive.classList.remove('active')
        btn[num]?.classList.add('active')
    }

    return (
        <div className='list-songs-page'>
            <SearchForm />
            <div className="container">
                <div className='box'>
                    {
                        songsData &&
                        <ListSongs songsData={songsData} />
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
