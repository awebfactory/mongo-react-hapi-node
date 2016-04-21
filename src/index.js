import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {reducer as formReducer} from 'redux-form';
import reducer from './reducers';

const reducers = {
    reducer,
    form: formReducer
}

const theReducer = combineReducers(reducers);


let store = createStore(theReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
