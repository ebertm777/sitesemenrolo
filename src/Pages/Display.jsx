import React from 'react';

import { NavBar } from '../Pages/NavBar/NavBar'
import { CenterIt, Container, Expose } from './styles';


export const Display = () => {
  return (
   <Container>
    <NavBar/>
    <CenterIt>
    <Expose>
      TESTE
      TESTE
      TESTE
      TESTE
    </Expose>
    </CenterIt>
   </Container>
  );
}