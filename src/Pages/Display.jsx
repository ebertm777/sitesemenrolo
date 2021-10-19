import React from "react";

import { NavBar } from "../Pages/NavBar/NavBar";
import { Footer } from "../Pages/Footer/Footer";
import { CenterIt, Container, Expose, Menu } from "./styles";

export const Display = () => {
  return (
    <Container>
      <NavBar />
      <CenterIt>
        <Menu>Veja Exemplos</Menu>
        <Expose>CLICK AQUI PARA BAIXAR MEMORIA RAM</Expose>
      </CenterIt>
      <Footer/>
    </Container>
  );
};
