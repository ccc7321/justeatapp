import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Display from './components/Display';
import SearchForm from './components/SearchForm';

function App() {
  const [isSearched, setIsSearched] = useState(false);

  return (
    <div>
      <SearchForm />
      <Display />
    </div>
  );
}

export default App;
