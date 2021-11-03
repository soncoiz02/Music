export const setSongs = (songs) => {
    return {
        type: 'SET_SONGS',
        payload: songs
    }
}

export const setDetail = (detail) => {
    return {
        type: 'SET_DETAIL',
        payload: detail
    }
}

export const setActiveName = (name) => {
    return {
        type: 'SET_ACTIVE_NAME',
        payload: name
    }
}

export const setSearchValue = (value) => {
    return {
        type: 'SET_SEARCH_VALUE',
        payload: value
    }
}

export const setIsPlay = (value) => {
    return {
        type: 'SET_IS_PLAY',
        payload: value
    }
}
