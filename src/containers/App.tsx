import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import TitleBar from "../components/TitleBar/TitleBar";
import AllProperties from "../components/AllProperties/AllProperties";
import { FloatButtonArea } from "../components/SignUpForm/SignUpFormComponents";
import { Route, Switch, useHistory } from "react-router-dom";
import { SignUpForm } from "../components/SignUpForm/SignUpForm";
import Profile from "../components/Profile/Profile";


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
  //Check if user is currently online
  let [userIsLoggedIn, setUserIsLoggedIn] = useState(
    window.localStorage.getItem("userIsLoggedIn")
  );
  const toogleUserIsLoggedIn = () => {
    setUserIsLoggedIn((prevState) => {
      if (prevState === "true") {
        window.localStorage.setItem("userIsLoggedIn", "false");
        return "false";
      } else {
        window.localStorage.setItem("userIsLoggedIn", "true");
        return "true";
      }
    });
  };
  console.log(userIsLoggedIn);

  return (
    <>
      <GlobalStyle />
      <TitleBar
        userIsLoggedIn={userIsLoggedIn}
        sessionManager={toogleUserIsLoggedIn}
      />
      <ContentWrapper>
        <Switch>
          <Route exact path="/">
            <AllProperties activeUser={"2"}></AllProperties>
            <FloatButtonArea />
          </Route>
          <Route exact path="/auth">
            <SignUpForm
              toogleUserIsLoggedIn={toogleUserIsLoggedIn}
            ></SignUpForm>
          </Route>
          {/* <Route exact path="/logout"></Route> */}
          <Route exact path="/profile">
            <Profile activeuser="2"></Profile>
            <FloatButtonArea />
          </Route>
        </Switch>
      </ContentWrapper>
    </>
  );
}

export default App;