import React, { useState, useCallback } from 'react';
import { Route } from 'react-router-dom';
import Responsive from './components/common/Responsive';
import styled from 'styled-components';

//pages
import mainPage from './pages/mainPage';
import aboutPage from './pages/aboutPage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

const Main = styled(Responsive)`
  min-height: calc(100vh - 14rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const App = () => {
  const [menu, setMenu] = useState('MAIN');
  const onSelect = useCallback((menu) => setMenu(menu), []);

  return (
    <>
      <Header menu={menu} onSelect={onSelect} />
      <Main>
        <Route component={mainPage} path="/" exact={true} />
        <Route component={aboutPage} path="/about" />
      </Main>
      <Footer />
    </>
  );
};

export default App;
