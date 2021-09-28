import axiosClient from './axiosClient'

const getTypeSongs = {
    getAll: (param) => {
        const url = `/${param}`
        return axiosClient.get(url)
    }
}
export default getTypeSongs