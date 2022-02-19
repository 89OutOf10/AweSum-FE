import React from 'react';
import { Route } from 'react-router-dom';
import mainPage from './pages/mainPage';
import aboutPage from './pages/aboutPage';

const App = () => {
  return (
    <>
      <Route component={mainPage} path="/" exact={true} />
      <Route component={aboutPage} path="/about" />
    </>
  );
};

export default App;
