import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #fff;
`;

export const CenterIt = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100%;
`;

export const Expose = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: #f3f3f3;
  align-items: center;
  border: 1px solid #a9a9a9;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  width: 10%;
  flex-direction: column;
`;

export const Title = styled.h1`
  display: flex;
  color: #111111;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;

export const Text = styled.p`
  display: flex;
  color: #111111;
`;
