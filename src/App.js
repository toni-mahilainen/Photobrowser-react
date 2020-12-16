import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from './Reducers/photoReducer';
import { nextPage, prevPage } from './Reducers/pageReducer';
import './App.css'
import Photos from './Components/Photos'
import Header from './Components/Header';
import { Route, Switch } from 'react-router-dom';
import PhotoDetails from './Components/PhotoDetails';
import Button from './Components/Button';

const App = () => {
    const dispatch = useDispatch()
    const photos = useSelector(state => state.photos)
    const page = useSelector(state => state.page)
    useEffect(() => {
        dispatch(getPhotos({ start: 0, limit: 20 }))
    }, [dispatch]);

    const next = () => {
        const newLimiter = {
            start: page.start + 20,
            limit: page.limit + 20
        }
        dispatch(nextPage(newLimiter))
    }

    const prev = () => {
        const newLimiter = {
            start: page.start - 20,
            limit: page.limit - 20
        }
        dispatch(prevPage(newLimiter))
    }

    return (
        <div>
            <Header text='Photo Browser' />
            <Switch>
                <Route path='/photo/:id'>
                    <Header text='Photo Details' />
                    <PhotoDetails photos={photos} />
                </Route>
                <Route exact path='/'>
                    <Photos photos={photos} />
                    <div className='change-page'>
                        <Button text='Back' onClick={prev} />
                        <Button text='Forward' onClick={next} />
                    </div>
                </Route>
            </Switch>
        </div>
    )
}

export default App