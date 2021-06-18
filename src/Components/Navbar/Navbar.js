import React from "react";

import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  background-color: var(--black);
  top: -10px;
  width: 100%;
  height: 65px;
  border-radius: 20px;
  z-index: 999;
  box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.05);
`;

const Title = styled.div`
  position: relative;
  top: 20px;
  left: 75px;
  color: var(--white);

  font-size: 1.5rem;
`;

const Navbar = () => {
  return (
    <Container>
      <Title>Company Dashboard</Title>
    </Container>
  );
};

export default Navbar;
