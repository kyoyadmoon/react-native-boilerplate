import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import rootReducer from './rootReducer';

export default () => configureStore(rootReducer, rootSaga);

