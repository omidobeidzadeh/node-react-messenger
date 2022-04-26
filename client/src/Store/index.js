import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './Reducers/index'
import sagaApi from './Saga/index'
import makeSagaMiddleware from 'redux-saga'
const sagaMiddleware = makeSagaMiddleware()

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(sagaApi)

export default store;