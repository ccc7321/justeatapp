import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Display from './components/Display';
import SearchForm from './components/SearchForm';

function App() {
  const [isSearched, setIsSearched] = useState(false);

  if (isSearched) {
    return (
      <>
        <div> Just Eat App</div>
      </>
    );
  }
  return (
    <div>
      <div> Just Eat App</div>

      <SearchForm />
      <Display />
    </div>
  );
}

export default App;
