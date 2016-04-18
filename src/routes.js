import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/content/home';
import About from './components/content/about';
import SimpleForm from './components/content/sign-in-form';
import SignIn from './containers/SignIn';

const routes = (
<Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
    <Route path="signin" component={SignIn}/>
    <Route path="simple" component={SimpleForm} />
</Route>
);

export default routes;