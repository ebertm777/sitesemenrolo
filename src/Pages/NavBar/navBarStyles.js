import styled from "styled-components";

import siteLogo from '../../Assets/Image/sitelogo.jpg'

export const Nav = styled.div`
  display: flex;
  width: 100%;
  height: 182px;
  justify-content: center;
  background: linear-gradient(
    #fd004c,
    #fe9000,
    #fff020,
    #3edf4b,
    #3363ff,
    #b102b7,
    #fd004c
  );
 
  position: sticky;
  background-size: 2000% 2000%;
  animation: rainbow 3s ease infinite;
  overflow: hidden;

  @keyframes rainbow {
    0% {
      background-position: 0% 82%;
    }
    50% {
      background-position: 100% 19%;
    }
    100% {
      background-position: 0% 82%;
    }
  }

  :after {
    content: "";
    position: absolute;
    background-color: #111111;
    height: 95%;
    width: 100%;
  }
`;

export const Logo = styled.div`
  display: flex;
  max-height: 120px;
  width: 165px;
  color: #fff;
  z-index: 9999;
  margin-top: 12px;
  background-image: url(${siteLogo});
  background-size: contain;
  background-repeat: no-repeat;
`;
