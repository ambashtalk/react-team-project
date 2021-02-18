import React from 'react';
import {createGlobalStyle} from 'styled-components';

import AllProperties from './AllProperties'

const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;



function App() {
  return (
    <>
      <GlobalStyle />
      <AllProperties></AllProperties>
    
      
    </>
  );
}

export default App;
