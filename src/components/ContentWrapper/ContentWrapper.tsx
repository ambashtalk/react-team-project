import styled from "styled-components";

const ContentWrapper = styled.section`
  margin-top: 5rem;
  height: calc(100vh - 5rem);
  width: 100%;
  @media (max-width: 572px) {
    margin-top: 14rem;
    height: calc(100vh - 14rem);
  }
`;

export default ContentWrapper;
