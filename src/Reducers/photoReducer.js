import photoService from '../Services/photos'

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_PHOTOS':
            return state = action.data

        default:
            return state
    }
}

export const getPhotos = () => {
    return async dispatch => {
        const photos = await photoService.getAll()
        dispatch({
            type: 'GET_PHOTOS',
            data: photos
        })
    }
}

export default reducer