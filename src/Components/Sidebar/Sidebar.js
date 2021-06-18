import React, { useState } from "react";

//All the svg files
import Home from "../../assets/home-solid.svg";
import Team from "../../assets/social.svg";
import Calender from "../../assets/sceduled.svg";
import Projects from "../../assets/starred.svg";
import Documents from "../../assets/draft.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  z-index: 9999;

  .active {
    border-right: 4px solid var(--white);
    @media only screen and (max-width: 600px) {
      border-right: none;
    }

    img {
      filter: invert(17%) sepia(60%) saturate(2119%) hue-rotate(245deg)
        brightness(97%) contrast(105%);
    }
  }
`;

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  box-shadow: 0 0px 10px 5px rgba(0, 0, 0, 0.08);

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  ${"" /* background-color: var(--black); */}
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  height: 85vh;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);
  box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.1);

  padding: 2rem 0;

  position: absolute;
  top: 0;
  left: 0;

  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;

  @media only screen and (max-width: 600px) {
    width: ${(props) => (props.clicked ? "12rem" : "0rem")};
    transition: all 0.5s ease;
  }
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;

  display: flex;
  padding-left: 1rem;

  &:hover {
    border-right: 4px solid var(--white);

    img {
      filter: invert(17%) sepia(60%) saturate(2119%) hue-rotate(245deg)
        brightness(97%) contrast(105%);
    }
  }

  img {
    width: 1.2rem;
    height: auto;
    filter: invert(33%) sepia(47%) saturate(6242%) hue-rotate(251deg)
      brightness(91%) contrast(104%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Container>
      <Button clicked={click} onClick={() => handleClick()}></Button>
      <SidebarContainer>
        <SlickBar clicked={click}>
          <Item
            // onClick={() => setClick(false)}
            exact
            activeClassName="active"
            to="/"
          >
            <img src={Home} alt="Home" />
            <Text clicked={click}>Analytics</Text>
          </Item>
          <Item activeClassName="active" to="/team">
            <img src={Team} alt="Team" />
            <Text clicked={click}>Profile</Text>
          </Item>
          <Item activeClassName="active" to="/calender">
            <img src={Calender} alt="Calender" />
            <Text clicked={click}>Posts</Text>
          </Item>
          <Item activeClassName="active" to="/documents">
            <img src={Documents} alt="Documents" />
            <Text clicked={click}>Documents</Text>
          </Item>
          <Item activeClassName="active" to="/projects">
            <img src={Projects} alt="Projects" />
            <Text clicked={click}>Projects</Text>
          </Item>
          <Item activeClassName="active" to="/projects">
            <img src={Projects} alt="Projects1" />
            <Text clicked={click}>Projects</Text>
          </Item>
          <Item activeClassName="active" to="/projects">
            <img src={Projects} alt="Projects2" />
            <Text clicked={click}>Projects</Text>
          </Item>
          <Item activeClassName="active" to="/projects">
            <img src={Projects} alt="Projects3" />
            <Text clicked={click}>Projects</Text>
          </Item>
          <Item activeClassName="active" to="/projects">
            <img src={Projects} alt="Projects4" />
            <Text clicked={click}>Projects</Text>
          </Item>
          <Item activeClassName="active" to="/projects">
            <img src={Projects} alt="Projects5" />
            <Text clicked={click}>Projects</Text>
          </Item>
        </SlickBar>
      </SidebarContainer>
    </Container>
  );
};

export default Sidebar;
