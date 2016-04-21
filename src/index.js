import React from 'react';
import ReactDOM from 'react-dom';
import { createHistory } from 'react-router/node_modules/history';
import { Router, useRouterHistory } from 'react-router';
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

const browserHistory = useRouterHistory(createHistory)({
            basename: '/'
        });

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
