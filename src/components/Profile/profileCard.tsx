import axios from "axios";
import defaultUserImage from "../../assets/images/maleProfileImage.jpeg";
import React, { FunctionComponent, useEffect, useState } from "react";
import { getRequest } from "../../shared/service";
import { useModal } from "../PopUpModal/PopUpModal";
import { ConfirmationModal, Modal } from "../PopUpModal/PopUpModalComponents";
import { ButtonField } from "../SignUpForm/SignUpFormStyle";
import {
  ProfileCard,
  ProfileContainer,
  ProfileImage,
  DetailsComponent,
  DetailsContainerRow,
  TabTitleButton,
  TabBodyArea,
} from "./profile.style";
import { useHistory } from "react-router-dom";

type userPropIndex = {
  id: number;
};

type ProfileProps = {
  propertyAdded: userPropIndex[];
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  gender: string;
  dateOfBirth: string;
  password: string;
};

type profileType = {
  HeaderText: string;
  comp: JSX.Element;
  activeUser: string | null;
};

let data: ProfileProps;
let userPropertyIndex: number[] = [];

export const ProfilePage: FunctionComponent<profileType> = ({
  comp,
  HeaderText,
  activeUser,
}) => {
  const { isShown, toggle } = useModal();
  const history = useHistory();
  let [gotData, setData] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const url = "http://localhost:8080/users/" + activeUser;
      const result = await axios.get(url).then((response) => {
        data = response.data;
        for (var i = 0; i < data.propertyAdded.length; i++)
          userPropertyIndex.push(data.propertyAdded[i].id);
      });

      if (gotData === false) {
        setData(true);
      } else {
        setData(false);
      }

      console.log(gotData);
    };
    getData();
  }, []);

  function checkout() {
    history.push("/myProperty");
  }

  return (
    <ProfileContainer>
      <ProfileCard>
        <ProfileImage src={defaultUserImage} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "120%",
            margin: "2%",
          }}
        >
          <h1>Welcome Back, {gotData ? data.firstName : " "}!</h1>
        </div>

        <DetailsContainerRow>
          <div style={{ width: "20%" }}>
            <h2>Name:</h2>
          </div>
          <DetailsComponent>
            {gotData ? data.firstName : ""} {gotData ? data.lastName : " "}
          </DetailsComponent>
        </DetailsContainerRow>
        <DetailsContainerRow>
          <div style={{ width: "20%" }}>
            <h2>Email:</h2>
          </div>
          <DetailsComponent>{gotData ? data.email : " "} </DetailsComponent>
        </DetailsContainerRow>
        <DetailsContainerRow>
          <div style={{ width: "20%" }}>
            <h2>Mobile:</h2>
          </div>
          <DetailsComponent>{gotData ? data.mobile : " "}</DetailsComponent>
        </DetailsContainerRow>
        <DetailsContainerRow>
          <div style={{ width: "20%" }}>
            <h2>Gender:</h2>
          </div>
          <DetailsComponent>{gotData ? data.gender : " "}</DetailsComponent>
        </DetailsContainerRow>
        <DetailsContainerRow>
          <div style={{ width: "20%" }}>
            <h2>DOB:</h2>
          </div>
          <DetailsComponent>
            {gotData ? data.dateOfBirth : " "}
          </DetailsComponent>
        </DetailsContainerRow>
        <TabBodyArea>
          <TabTitleButton onClick={toggle} title="Edit Profile">
            Edit Profile
          </TabTitleButton>
          <Modal
            isShown={isShown}
            hide={toggle}
            headerText={HeaderText}
            modalContent={<ConfirmationModal message={comp} />}
          />

          <TabTitleButton onClick={checkout}>My Property</TabTitleButton>
        </TabBodyArea>
      </ProfileCard>
    </ProfileContainer>
  );
};
