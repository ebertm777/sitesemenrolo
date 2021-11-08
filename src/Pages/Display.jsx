import React from "react";

import { NavBar } from "../Pages/NavBar/NavBar";
import { Footer } from "../Pages/Footer/Footer";
import { CenterIt, Container, Expose, Menu, Text, Title } from "./styles";

export const Display = () => {
  return (
    <Container>
      <NavBar />
      <CenterIt>
        {/* <Menu>Veja Exemplos</Menu> */}
        <Expose>
          <Title> Lorem Ipsum </Title>
          <Text>
           <p style={{maxWidth: "700px", textAlign: "center"}}> Lorem ipsum mauris libero eros erat ac maecenas metus justo proin,
            blandit auctor interdum aptent metus ac sociosqu urna volutpat,
            suspendisse cubilia eget facilisis nisl curabitur tortor senectus
            euismod. dolor porttitor pharetra non vivamus pretium tellus dui,
            arcu vitae dui neque ac habitant aliquam non, vel curabitur potenti
            mauris diam phasellus. adipiscing fringilla nibh dui mauris at nisi,
            elit justo augue litora vitae metus elit, conubia facilisis
            adipiscing iaculis sed. morbi dui euismod feugiat accumsan tortor
            consequat inceptos, pretium quis porta duis etiam sit, curae eu
            volutpat maecenas aptent phasellus.{" "}
            </p>
          </Text>
        </Expose>
      </CenterIt>
      <Footer />
    </Container>
  );
};
