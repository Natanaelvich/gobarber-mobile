import { persistStore } from 'redux-persist';
import createSagaMiddlaware from 'redux-saga';

import persitReducers from './persistReducers';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddlaware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(persitReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
