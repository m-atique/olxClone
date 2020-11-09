//-=-=-=-=-=---------------------------------------- Import multiple reducer in to Store


import { combineReducers} from 'redux'
import appReducers from './appReducer'
import class_reducer from './class_reducer'

export default combineReducers({
    app: appReducers,
    class:class_reducer
})
