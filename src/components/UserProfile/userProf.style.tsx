import styled from 'styled-components';

export const Div = styled.div`
  ${(props) =>
    props.className === "wrapper"
      ? "{display: flex;flex-direction: column;align-items: center;justify-content: flex-start;width: 100%;width: 100%;height: auto;min-height: 100vh;padding: 50px 20px;display: flex;background-image: linear-gradient(-20deg, #ff2846 0%, #6944ff 100%);display: flex;background-image: linear-gradient(-20deg, #ff2846 0%, #6944ff 100%);@media screen and (max-width: 768px) {height: auto;min-height: 100vh;padding-top: 100px;}}"
      : " "};
  ${(props) =>
    props.className === "profile-card js-profile-card"
      ? "{}"
      : " "};

    
    ${(props) =>
        props.className === "profile-card__name"
            ? "{}"
            : " "};


    ${(props) =>
        props.className === "profile-card__txt"
            ? "{}"
            : " "};


    ${(props) =>
        props.className === "profile-card-loc"
            ? "{}"
            : " "};

    ${(props) =>
        props.className === "profile-card-loc__txt"
            ? "{}"
            : " "};

                                                                                        
    ${(props) =>
        props.className === "profile-card__button button--blue js-message-btn"
            ? "{}"
            : " "};

    ${(props) =>
        props.className === "profile-card-ctr"
            ? "{}"
            : " "};


    ${(props) =>
        props.className === "profile-card-inf__title"
            ? "{}"
            : " "}; 
            
            
    ${(props) =>
        props.className === "profile-card-inf__item"
            ? "{}"
            : " "};            
`;

export const Img = styled.img`

    width: 150px;
    height: 150px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    overflow: hidden;
    background-size : cover;
    position: relative;
    z-index: 4;
    box-shadow: 0px 5px 50px 0px rgb(108, 68, 252), 0px 0px 0px 7px rgba(107, 74, 255, 0.5);

    @media screen and (max-width: 576px) {
      width: 120px;
      height: 120px;
    }
`