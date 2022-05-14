import React, { useState, useCallback } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import ScrollToTop from './components/common/ScrollToTop';

//pages
import mainPage from './pages/MainPage';
import aboutPage from './pages/AboutPage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

const Main = styled.div`
  margin-top: 0;
`;

const App = () => {
  const [menu, setMenu] = useState('HOME');
  const onSelect = useCallback((menu) => setMenu(menu), []);

  return (
    <>
      <Header menu={menu} onSelect={onSelect} />
      <Main>
        <ScrollToTop />
        <Route component={mainPage} path="/" exact={true} />
        <Route component={aboutPage} path="/about" />
      </Main>
      <Footer />
    </>
  );
};

export default App;
