const initialState = {
    list: [],
    detail: {
        name: '',
        audio: '',
        singer: '',
        avatar: ''
    },
    activeName: '',
    isPlay: true,
    searchValue: ''
}

const songReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SONGS':
            const newList = action.payload
            return {
                ...state,
                list: newList
            }

        case 'SET_DETAIL':
            const newDetail = action.payload
            return {
                ...state,
                detail: newDetail
            }

        case 'SET_ACTIVE_NAME':
            const newActiveName = action.payload
            return {
                ...state,
                activeName: newActiveName
            }

        case 'SET_SEARCH_VALUE':
            const newSearchValue = action.payload
            return {
                ...state,
                searchValue: newSearchValue
            }

        case 'SET_IS_PLAY':
            const isPlay = action.payload
            return {
                ...state,
                isPlay: isPlay
            }

        default:
            return state
    }
}

export default songReducer