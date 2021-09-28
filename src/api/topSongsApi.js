import axiosClient from './axiosClient'

const getTopSong = {
    getAll: () => {
        const url = '/Top10'
        return axiosClient.get(url)
    }
}
export default getTopSong