import React from 'react'
import { Link } from 'react-router-dom'
import vnRap from '../../assets/img/rap-vn.jpg'
import vnPop from '../../assets/img/pop-vn.jpg'
import vnEdm from '../../assets/img/edm-vn.jpg'
import usPop from '../../assets/img/pop-us.jpg'
import usRap from '../../assets/img/rap-us.jpg'
import usEdm from '../../assets/img/edm-us.jpg'
import korea from '../../assets/img/korea.jpg'
import china from '../../assets/img/china.jpg'
import './ListCate.scss'
const cateData = [
    {
        title: "Top 100 Vietnam",
        list: [
            {
                name: "Top 100 V-POP",
                img: vnPop,
                path: '/list-songs?vn-pop',
            },
            {
                name: "Top 100 Vietnamese Rap",
                img: vnRap,
                path: '/list-songs?vn-rap',
            },
            {
                name: "Top 100 Vietnamese EDM",
                img: vnEdm,
                path: '/list-songs?vn-remix',
            }
        ]
    },
    {
        title: "Top 100 US/UK",
        list: [
            {
                name: "Top 100 US/UK-POP",
                img: usPop,
                path: '/list-songs?us-pop',
            },
            {
                name: "Top 100 US/UK Rap",
                img: usRap,
                path: '/list-songs?us-rap',
            },
            {
                name: "Top 100 US/UK EDM",
                img: usEdm,
                path: '/list-songs?us-edm',
            }
        ]
    },
    {
        title: "Top 100 Asian",
        list: [
            {
                name: "Top 100 Korean",
                img: korea,
                path: '/list-songs?korea',
            },
            {
                name: "Top 100 Chinese",
                img: china,
                path: '/list-songs?china',
            }
        ]
    }
]
const ListCate = () => {
    return (
        <div className="categories">
            <h2>Top 100</h2>
            <div className="list-cate">
                {
                    cateData.map((cate, index) => (
                        <div className="item" key={index}>
                            <div className="title">{cate.title}</div>
                            <div className="list">
                                {
                                    cate.list &&
                                    cate.list.map((item, index) => (
                                        <div className="box" key={index}>
                                            <Link to={item.path} className="img">
                                                <img src={item.img} alt="" />
                                            </Link>
                                            <Link to={item.path} className="name">{item.name}</Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ListCate
