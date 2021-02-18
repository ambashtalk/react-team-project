import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  height: 6rem;
  background-image: linear-gradient(to right, #ed213a, #93291e);
  padding: 0 1rem;
  justify-content: space-between;

  @media (max-width: 440px) {
    background-image: linear-gradient(to bottom, #ed213a, #93291e);
    flex-direction: column;
    height: auto;
  }
`;

export const StyledNavHeading = styled.h1`
  align-self: center;
  font-size: 3rem;
`;

export const StyledUserDropDown = styled.div`
  display: block;
  margin: auto 0;
`;

export const StyledUserImage = styled.img`
  border: none;
  border-radius: 50%;
  height: 5rem;
  width: auto;
  align-self: center;
`;

export const StyledUserName = styled.a`
  color: white;
  font-size: 1.5rem;
  padding: 0 1rem;
  flex: 1;
  text-align: center;
  margin: auto 0;
  padding: auto;
`;

export const StyledUserOption = styled(StyledUserName)`
  padding: 1rem;
`;

export const StyledLogoutOption = styled(StyledUserOption)`
  &:hover {
    color: white;
  }
`;

export const StyledUserBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 6rem;
  &:hover {
    cursor: pointer;
    background-color: #e42a41;
  }
`;

export const StyledOptionBox = styled(StyledUserBox)`
  background-color: black;
  color: white;

  &:hover {
    background-color: whitesmoke;
    color: black;
  }

  &:hover > * {
    color:black;
  }
`;

export const StyledLogoutOptionBox = styled(StyledUserBox)`
  background-color: orange;
  color: white;

  &:hover {
    background-color: #e42a41;
  }
`;
