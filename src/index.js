import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

let store = createStore(reducer);

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
), document.getElementById('app'));
