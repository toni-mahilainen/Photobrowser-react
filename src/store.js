import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import photoReducer from './Reducers/photoReducer'

const store = createStore(
    photoReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store