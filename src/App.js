import React, { useEffect } from 'react'
<<<<<<< HEAD
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
=======
>>>>>>> 305840b (Valmis julkaisuun)
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
<<<<<<< HEAD
        <div>
<<<<<<< HEAD
            <Photos photos={photos} />
>>>>>>> 56afb5c (Kaikki kuvat palvelimelta. Tilan päivitys reduxilla)
=======
=======
        <div style={style}>
>>>>>>> 305840b (Valmis julkaisuun)
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
>>>>>>> c3f2200 (Sivun vaihto kesken)
        </div>
    )
}

export default App