import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import getSearchResult from '../api/searchResultApi'
import notFound from '../assets/img/not-found.jpg'
import './Search.scss'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import SearchForm from '../components/SearchForm/SearchForm'

const Search = () => {
    const location = useLocation()
    const [searchResult, setSearchResult] = useState([])
    const [loader, setLoader] = useState(true)
    const searchQuery = location.search

    useEffect(() => {
        const getSearchResults = async () => {
            try {
                const response = await getSearchResult.get(searchQuery)
                console.log(response)
                setSearchResult(response)
                setLoader(false)
            } catch (error) {
                console.log('Fail to get search result, error: ', error)
            }
        }
        getSearchResults()
    }, [searchQuery])

    return (
        <div className="search-page">
            <SearchForm />
            <div className="container">
                {
                    searchResult.length > 0 ?
                        <div className="box">
                            <h2>Result for <span>"{localStorage.getItem('search-name')}"</span> </h2>
                            <div className="list-result">
                                {
                                    searchResult.map((item, index) => (
                                        <Link className="song" key={index} to={`/player?name=${item.name}`}>
                                            <div className="img">
                                                <img src={item.avatar} alt="" />
                                            </div>
                                            <div className="detail">
                                                <h5 className="name">{item.name}</h5>
                                                <p className="singer">{item.creator}</p>
                                            </div>
                                        </Link>
                                    ))

                                }
                            </div>
                        </div>
                        :
                        <div className="box">
                            <h2>No result for <span>"{localStorage.getItem('search-name')}"</span> </h2>
                            <div className="not-found">
                                <img src={notFound} alt="" />
                            </div>
                        </div>
                }
            </div>
            {
                loader === true &&
                < Loader />
            }
        </div >
    )
}

export default Search
