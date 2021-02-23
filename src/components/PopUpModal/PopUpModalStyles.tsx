import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  @media (min-width: 768px) {
    width: 60%;
  }
  @media (min-width: 1024px) {
    width: 40%;
  }
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: 60%;
  outline: 0;
`;

export const ConfirmationButtons = styled.div`
  display: flex;
  justify-content: center;
`;

export const Message = styled.div`
  font-size: 0.9rem;
  margin-bottom: 10px;
  text-align: center;
`;

export const YesButton = styled.button`
  width: 6rem;
`;

export const NoButton = styled.button`
  width: 3rem;
  margin-left: 10px;
`;

// export const Wrapper = styled.div`
// 	position: fixed;
// 	top: 50%;
// 	left: 50%;
// 	transform: translate(-50%, -50%);
// 	z-index: 700;
// 	width: 60%;
// 	outline: 0;
// `;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;

export const StyledModal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;
  border-radius: 8px;
`;

export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`;

export const HeaderText = styled.p`
  align-self: center;
  font-size: 2rem;
  margin: 0.5rem;
  padding: 0.4rem 1rem 0.4rem 1.6rem;
  color: #b52829;
`;

export const CloseButton = styled.button`
  outline: none;
  border: 1px solid black;
  border-radius: 3px;
  margin: 0.5rem;
  padding: 0.4rem 1rem 0.4rem 1rem;
  background: none;
  color: #b52829;
  :hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  padding: 0px 10px 10px 10px;
  max-height: 50rem;
  overflow: scroll;
`;
