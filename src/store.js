import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import photoReducer from './Reducers/photoReducer'
import pageReducer from './Reducers/pageReducer'

const reducer = combineReducers({
    photos: photoReducer,
    page: pageReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store