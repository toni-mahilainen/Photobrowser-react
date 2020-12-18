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
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store