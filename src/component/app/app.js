import React from 'react';
import { Normalize } from 'styled-normalize';
import { GlobalStyles } from '../../styles/global';
import Main from '../main'

const App = () => {
  return (
    <>
      <Normalize />
      <GlobalStyles />
      <Main />
    </>
  );
}

export default App

