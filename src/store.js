<<<<<<< HEAD
<<<<<<< HEAD
import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import limiterReducer from './Reducers/limiterReducer'
import photoReducer from './Reducers/photoReducer'

const reducer = combineReducers({
    photos: photoReducer,
    limiter: limiterReducer
})

const store = createStore(
    reducer,
=======
import { applyMiddleware, createStore } from "redux";
=======
import { applyMiddleware, createStore, combineReducers } from "redux";
>>>>>>> c3f2200 (Sivun vaihto kesken)
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import photoReducer from './Reducers/photoReducer'
import pageReducer from './Reducers/pageReducer'

const reducer = combineReducers({
    photos: photoReducer,
    page: pageReducer
})

const store = createStore(
<<<<<<< HEAD
    photoReducer,
>>>>>>> 56afb5c (Kaikki kuvat palvelimelta. Tilan päivitys reduxilla)
=======
    reducer,
>>>>>>> c3f2200 (Sivun vaihto kesken)
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store