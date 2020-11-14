//-=-=-=-=-=---------------------------------------- Import multiple reducer in to Store


import { combineReducers} from 'redux'
import appReducers from './appReducer'
import modalReducer from './modalReducer'
import userReducer from './userReducer'
import postReducer from './postReducer'
import CatageryReducer from './CatageryReducer'
export default combineReducers({
    app: appReducers,
   
    modal:modalReducer,
    user:userReducer,
    add: postReducer,
    Catagery: CatageryReducer
})
