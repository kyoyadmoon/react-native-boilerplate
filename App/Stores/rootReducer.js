import { combineReducers } from 'redux'
import { reducer as ExampleReducer } from './Example/Reducers'
import RouteReducer from './Router/Reducers'

const rootReducer = combineReducers({
  /**
   * Register your reducers here.
   * @see https://redux.js.org/api-reference/combinereducers
   */
  example: ExampleReducer,
  router: RouteReducer,
})

export default rootReducer;