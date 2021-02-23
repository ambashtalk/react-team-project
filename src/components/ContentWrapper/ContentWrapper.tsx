import styled from "styled-components";

const ContentWrapper = styled.section`
  margin-top: 6rem;
  /* height: calc(100vh - 6rem); */
  width: 100%;
  @media (max-width: 440px) {
    margin-top: 9.5rem;
    /* height: calc(100vh - 10rem); */
  }
`;

export default ContentWrapper;
