import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Pagination.scss'

const Pagination = props => {
    const { data, getPageNum } = props
    const [page, setPage] = useState([])
    useEffect(() => {
        const dataLength = data.length
        const totalPage = Math.ceil(dataLength / 20)
        const page = []
        for (let i = 0; i < totalPage; i++) {
            page.push(i + 1)
        }
        setPage(page)
    }, [])

    return (
        <div className='pagination'>
            {
                page &&
                page.map((num, index) => (
                    <button className="btn-pagination" key={index} onClick={() => getPageNum(num)}>{num}</button>
                ))
            }
        </div>
    )
}

Pagination.propTypes = {
    data: PropTypes.array,
    getPageNum: PropTypes.func,
}

export default Pagination
