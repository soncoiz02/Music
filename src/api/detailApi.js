import axiosClient from './axiosClient'

const getDetailSong = {
    get: (param) => {
        const url = `/all-songs${param}`
        return axiosClient.get(url)
    }
}
export default getDetailSong