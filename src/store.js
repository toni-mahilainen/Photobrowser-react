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
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import photoReducer from './Reducers/photoReducer'

const store = createStore(
    photoReducer,
>>>>>>> 56afb5c (Kaikki kuvat palvelimelta. Tilan päivitys reduxilla)
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store