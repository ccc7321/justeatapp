import { useState } from 'react';
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
