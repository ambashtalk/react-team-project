import styled from "styled-components";

export const FloatButton = styled.button`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: white;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  box-shadow: 4px 3px 3px 0px #999;
  background-image: url(https://www.gstatic.com/images/icons/material/colored_icons/2x/create_32dp.png);
  background-position: center;
  outline: none;
  border: none;
  background-size: contain;

  &:hover {
    cursor: pointer;
    outline: none;
    transition: all 0.1s;
    transform: scaleX(1.3) scaleY(1.3);
  }
`;

export const ButtonField = styled.button`
  background: #4caf50;
  color: white;
  width: 50%;
  padding: 14px 20px;
  float: center;
  margin: auto;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;

  &:hover,
  &:focus {
    background-color: #45a049;
    outline: none;
  }
`;

export const FormField = styled.form`
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DivField = styled.div`
  ${(props) =>
    props.className === "Main"
      ? "{margin: 0 10%; display: flex; flex-direction: column;justify-content: center;}"
      : " "};
  ${(props) =>
    props.className === "TypeA"
      ? "{background-color:#f7f7f7;padding: 12px;box-sizing: border-box;}"
      : " "};
  ${(props) =>
    props.className === "TypeB"
      ? "{display: flex;flex-direction: row;justify-content: space-between; @media screen and (max-width : 576px){display: flex;flex-direction: column;justify-content: center;}}"
      : ""};
  ${(props) =>
    props.className === "TypeC"
      ? "{background-color: #f7f7f7;padding: 12px;box-sizing: border-box;width: 50%;@media screen and (max-width : 576px){width:100%}"
      : ""};
  ${(props) =>
    props.className === "TypeD"
      ? "{background-color:#f7f7f7;padding: 12px;box-sizing: border-box;width: 100%;}"
      : ""};
  ${(props) =>
    props.className === "TypeE"
      ? "{margin: 15px;display: flex;justify-content: center;}"
      : ""};
`;

export const InputField = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1.5px solid #88bee6;
  border-radius: 5px;
  height: 40px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  &:hover,
  &:focus {
    border: 1.5px solid #88bee6;
    outline: none;
    transition: all 0.4s;
    transform: scaleX(1.1) scaleY(1.3);
  }
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: 400;
  font-style: normal;
`;

export const Span = styled.span`
  font-size: 12px;
  color: red;
`;
