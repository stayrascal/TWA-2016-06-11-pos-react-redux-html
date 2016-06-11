import { combineReducers } from 'redux'
import cartItems from './cartItems'
import items from './items'
import receipt from './receipt'

const rootReducer = combineReducers({items, cartItems, receipt});

export default rootReducer