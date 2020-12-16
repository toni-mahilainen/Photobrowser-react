import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from './Reducers/photoReducer';
import './App.css'
import Photos from './Components/Photos'

const App = () => {
    const dispatch = useDispatch()
    const photos = useSelector(state => state)
    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch]);

    return (
        <div>
            <Photos photos={photos} />
        </div>
    )
}

export default App