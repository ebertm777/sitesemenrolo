import styled from "styled-components";

export const FooterBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100px;
  width: 100%;
  background-color: #111111;

  @media screen and (max-width: 980px) {
    flex-direction: column;
  }
`;

export const WhatsappIcon = styled.div`
  display: flex;
  align-items: center;
  max-width: 200px;
  height: 50px;
  color: #fff;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 2px;

  @media screen and (max-width: 980px) {
    margin-left: 5px
  }
`;

export const EmailIcon = styled.div`
  display: flex;
  align-items: center;
  max-width: 200px;
  height: 50px;
  color: #fff;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: 2px;

  @media screen and (max-width: 980px) {
    margin-left: 5px
  }
`;
