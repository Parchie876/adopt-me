import React, { useState, lazy, Suspense } from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import ThemeContext from './ThemeContext';
import Loader from './Loader';

const Details = lazy(() => import('./Details'));
const SearchParams = lazy(() => import('./SearchParams'));

const App = () => {
  const themeHook = useState('darkblue'); //* Can also be a object
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <Suspense fallback={<Loader />}>
          <header>
            <Link to="/" id="root">
              Adopt Me
            </Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
