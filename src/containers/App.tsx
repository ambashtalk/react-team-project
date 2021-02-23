import React from "react";
import { createGlobalStyle } from "styled-components";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import TitleBar from "../components/TitleBar/TitleBar";

import AllProperties from "../components/AllProperties/AllProperties";

import { Tab } from "../components/UserProfile/userProfileComponents";
import { TabArea } from "../components/UserProfile/userProfile";
import { FloatButtonArea } from "../components/SignUpForm/SignUpFormComponents";
import { EditProfile, LoginForm } from "../components/SignUpForm/SignUpForm";
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
          <EditProfile></EditProfile>
          {/* <LoginForm></LoginForm> */}
        {/* <AllProperties activeUser={"2"}></AllProperties> */}
        {/* <FloatButtonArea /> */}
      </ContentWrapper>
    </>
  );
}

export default App;
