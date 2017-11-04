import React from 'react';
import { Route } from 'react-router-dom';

import SiteNav from './containers/SiteNav';
import Posts from './containers/Posts';
import NewPost from './containers/NewPost';

function App() {
  return (
    <div>
      <SiteNav />
      <div className="container">
        <Route exact path="/" component={Posts} />
        <Route exact path="/new" component={NewPost} />
      </div>
    </div>
  );
}

export default App;
