import { put } from 'redux-saga/effects'
import ExampleActions from 'App/Stores/Example/Actions'
import { Actions } from 'react-native-router-flux';

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* startup() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(ExampleActions.fetchUser())

  // Add more operations you need to do at startup here
  // ...

  // When those operations are finished we redirect to the main screen
  Actions.main('reset');
}
