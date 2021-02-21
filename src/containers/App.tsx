import React from "react";
import { createGlobalStyle } from "styled-components";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import TitleBar from "../components/TitleBar/TitleBar";

import AllProperties from '../components/AllProperties/AllPropertiesComponent/AllProperties'

const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
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
      
    
      
      <TitleBar />
      <ContentWrapper>
      <AllProperties activeUser={"2"}></AllProperties>
      </ContentWrapper>
    </>
  );
}

export default App;
