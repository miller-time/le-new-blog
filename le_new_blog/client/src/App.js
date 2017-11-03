import React from 'react';

import SiteNav from './components/SiteNav';
import Posts from './containers/Posts';

function App() {
  return (
    <div>
      <SiteNav />
      <div className="container">
        <Posts />
      </div>
    </div>
  );
}

export default App;
