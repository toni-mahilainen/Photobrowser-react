import React, { useEffect } from 'react'
<<<<<<< HEAD
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Components/Header';
import PageNav from './Components/PageNav';
import PhotoDetails from './Components/PhotoDetails';
import Photos from './Components/Photos'
import { getPhotos } from './Reducers/photoReducer';
import backgroundImage from './images/background.jpg'
import './App.css'

const App = () => {
    const dispatch = useDispatch()
    const photos = useSelector(state => state.photos)
    const limiter = useSelector(state => state.limiter)

    useEffect(() => {
        dispatch(getPhotos(limiter))
    }, [dispatch]);

    const style = {
        backgroundImage: `url(${backgroundImage})`,
        height: '100vh',
        color: 'white'
    }

    return (
        <div style={style}>
            <Header text='Photo Browser' />
            <Switch>
                <Route path='/photo/:id'>
                    <Header text='Photo Details' />
                    <PhotoDetails photos={photos} />
                </Route>
                <Route exact path='/'>
                    <PageNav limiter={limiter}/>
                    <Photos photos={photos} />
                </Route>
            </Switch>
=======
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
<<<<<<< HEAD
            <Photos photos={photos} />
>>>>>>> 56afb5c (Kaikki kuvat palvelimelta. Tilan päivitys reduxilla)
=======
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
>>>>>>> c3f2200 (Sivun vaihto kesken)
        </div>
    )
}

export default App