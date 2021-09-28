import axiosClient from './axiosClient'

const getSearchResult = {
    get: (param) => {
        const url = `/all-songs${param}`
        return axiosClient.get(url)
    }
}
export default getSearchResult