const {createStore} = require('redux')
import { reducer } from './reducers'
import * as action from './actions'

export const store = createStore(reducer)

store.dispatch(action.setName("Arnold"))
store.dispatch(action.setAge(30))
store.dispatch(action.setTemp(36))
store.dispatch(action.setFeverLength(3))
