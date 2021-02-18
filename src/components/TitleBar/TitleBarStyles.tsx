import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  height: 5rem;
  background-image: linear-gradient(to right, #ed213a, #93291e);
  padding: 0 1rem;
  justify-content: space-between;

  @media (max-width: 572px) {
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
  display: flex;
  justify-content: center;
  @media (max-width: 572px) {
    flex-direction: column;
  }
`;

export const StyledUserProfileBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const StyledUserProfileImage = styled.img`
  border: none;
  border-radius: 50%;
  height: 5rem;
  width: auto;
  margin: 0 0.5rem;
  align-self: center;
`;

export const StyledUserProfileName = styled.p`
  font-size: 2rem;
  color: white;
  align-self: center;
`;

export const StyledUserDropDownMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 1rem;
  flex: 1;
`;

export const StyledUserDropDownButton = styled.button`
  background-color: #e42a41;
  outline: 0;
  border: none;
  color: white;
  flex: 1;
  font-size: 1.5rem;
  min-height: 5rem;
  padding: 1rem 2rem;
  &:hover {
    background-color: whitesmoke;
    color: black;
  }
`;

type styledUserDropDownItems_proptype = {
  isClickedDropDownButton: boolean;
};
export const StyledUserDropDownItems = styled.div`
  display: ${(props: styledUserDropDownItems_proptype) =>
    props.isClickedDropDownButton ? "flex" : "none"};
  flex-direction: column;
  @media (max-width: 572px) {
    flex-direction: row;
  }
`;

export const StyledUserDropDownItem = styled.a`
  color: white;
  background-color: black;
  flex: 1;
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    color: black;
    background-color: white;
  }
`;

export const StyledUserDropDownLogoutItem = styled(StyledUserDropDownItem)`
  background-color: orange;
  &:hover {
    background-color: red;
    color: white;
  }
`;
