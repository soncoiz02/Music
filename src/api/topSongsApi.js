import axiosClient from './axiosClient'

const getTopSong = {
    getTopSongs: () => {
        const url = '/Top10'
        return axiosClient.get(url)
    }
}
export default getTopSong