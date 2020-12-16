import photoService from '../Services/photos'

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_PHOTOS':
            return state = action.data

        default:
            return state
    }
}

<<<<<<< HEAD
export const getPhotos = (limiter) => {
    return async dispatch => {
        const photos = await photoService.get(limiter.start, limiter.limit)
        console.log('photosReducer', photos);
=======
export const getPhotos = () => {
    return async dispatch => {
        const photos = await photoService.getAll()
>>>>>>> 56afb5c (Kaikki kuvat palvelimelta. Tilan päivitys reduxilla)
        dispatch({
            type: 'GET_PHOTOS',
            data: photos
        })
    }
}

export default reducer