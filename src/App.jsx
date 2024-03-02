import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Display from './components/Display';
import SearchForm from './components/SearchForm';

function App() {
  const [isSearched, setIsSearched] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

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
