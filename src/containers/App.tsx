import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import TitleBar from "../components/TitleBar/TitleBar";
import AllProperties from "../components/AllProperties/AllProperties";
import { FloatButtonArea } from "../components/SignUpForm/SignUpFormComponents";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import {
  AddProperty,
  EditProfile,
  LoginForm,
  SignUpForm,
} from "../components/SignUpForm/SignUpForm";
import { TabArea } from "../components/Profile/userProfile";
import { ProfilePage } from "../components/Profile/profileCard";
import { UserProperty } from "../components/Profile/PropertyCard";

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
  const history = useHistory();
  //Check if user is currently online
  let [userIsLoggedIn, setUserIsLoggedIn] = useState(
    localStorage.getItem("userIsLoggedIn")
  );
  const toogleUserIsLoggedIn = () => {
    setUserIsLoggedIn((prevState) => {
      if (prevState === "true") {
        localStorage.setItem("userIsLoggedIn", "false");
        localStorage.clear();
        // history.push("/login");
        return "false";
      } else {
        localStorage.setItem("userIsLoggedIn", "true");
        return "true";
      }
    });
  };
  console.log("userIsLoggedIn: " + userIsLoggedIn);

  let [activeUser, setActiveUser] = useState(
    localStorage.getItem("activeUser")
  );
  const makeActive = (id: string | null) => {
    setActiveUser((prevState) => {
      localStorage.setItem("activeUser", id ? id : "");
      return id;
    });
  };

  return (
    <>
      <GlobalStyle />
      <TitleBar
        userIsLoggedIn={userIsLoggedIn ? userIsLoggedIn : ""}
        sessionManager={toogleUserIsLoggedIn}
      />
      <ContentWrapper>
        <Switch>
          <Route exact path="/">
            <SignUpForm
              toogleUserIsLoggedIn={toogleUserIsLoggedIn}
              makeActive={makeActive}
              activeUser={activeUser}
            ></SignUpForm>
          </Route>
          <Route exact path="/home">
            {/* <AllProperties activeUser={localStorage.getItem('activeUser')}></AllProperties> */}
            <AllProperties activeUser={activeUser}></AllProperties>
            <FloatButtonArea
              HeaderText="Add Property"
              comp={
                <AddProperty activeUser={localStorage.getItem("activeUser")} />
              }
            />
          </Route>
          {/* <Route exact path="/logout"></Route> */}

          <Route exact path="/profile">
            {/* <ProfilePage activeUser={localStorage.getItem('activeUser')} HeaderText="Edit Profile" comp={<EditProfile></EditProfile>}></ProfilePage> */}
            {
              userIsLoggedIn ?
              <ProfilePage
                activeUser={activeUser}
                HeaderText="Edit Profile"
                comp={<EditProfile activeUser={activeUser}></EditProfile>}
              ></ProfilePage> : <Redirect to="/login" />
            }
            {/* <FloatButtonArea /> */}
          </Route>

          <Route exact path="/login">
            {userIsLoggedIn ? (
              <Redirect to="/profile" />
            ) : (
              <LoginForm
                toogleUserIsLoggedIn={toogleUserIsLoggedIn}
                makeActive={makeActive}
                activeUser={activeUser}
              ></LoginForm>
            )}
          </Route>

          <Route exact path="/myProperty">
            {/* <UserProperty activeUser={localStorage.getItem('activeUser') }></UserProperty> */}
            <UserProperty activeUser={activeUser}></UserProperty>
          </Route>
        </Switch>
      </ContentWrapper>
    </>
  );
}

export default App;
