import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import NotFoundPage from './components/NotFoundPage';

class EmptyComponent extends React.Component {
  render() {
    return;
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={EmptyComponent} />
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
