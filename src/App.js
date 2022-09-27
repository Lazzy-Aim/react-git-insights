import React from 'react';
import FavoriteList from './components/FavoriteList';

import SearchUser from './components/SearchUser';

const App = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <SearchUser />
      <FavoriteList />
    </div>
  );
}

export default App;
