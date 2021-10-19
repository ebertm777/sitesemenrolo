import styled from "styled-components";
import Whatsapp from "../../Assets/Image/whatsapp.png";

export const FooterBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: #111111;
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 50px;
  background-image: url(${Whatsapp});
  background-size: 50px;
  background-repeat: no-repeat;
  color: #fff;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  letter-spacing: 2px;
`;
