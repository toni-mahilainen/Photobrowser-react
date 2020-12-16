import photoService from '../Services/photos'
import { getPhotos } from './photoReducer'

const initialState = {
    start: 0,
    limit: 20
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEXT_PAGE':
            return state = action.data

        case 'PREV_PAGE':
            return state = action.data

        default:
            return state
    }
}

export const nextPage = (limiter) => {
    return async dispatch => {
        dispatch(getPhotos(limiter))
        dispatch({
            type: 'NEXT_PAGE',
            data: limiter
        })
    }
}

export const prevPage = (limiter) => {
    return async dispatch => {
        dispatch(getPhotos(limiter))
        dispatch({
            type: 'PREV_PAGE',
            data: limiter
        })
    }
}

export default reducer