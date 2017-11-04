import React from 'react';
import { Route } from 'react-router-dom';

import SiteNav from './containers/SiteNav';
import Posts from './containers/Posts';
import NewPost from './containers/NewPost';
import EditPost from './containers/EditPost';

function App() {
  return (
    <div>
      <SiteNav />
      <div className="container">
        <Route exact path="/" component={Posts} />
        <Route exact path="/new" component={NewPost} />
        <Route path="/edit/:id" component={EditPost} />
      </div>
    </div>
  );
}

export default App;
