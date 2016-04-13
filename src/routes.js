import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/content/home';
import About from './components/content/about';
import SignIn from './containers/SignIn';

const routes = (
<Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
    <Route path="signin" component={SignIn}/>
</Route>
);

export default routes;