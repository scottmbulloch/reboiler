import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './components/home';
import About from './components/about';
import NotFoundPage from './components/NotFoundPage';

// 'App' is the Layout 'view'.
// The default component it shows is Home (the IndexRoute).
// About is a basic page, and everything else goes to NotFoundPage.
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
