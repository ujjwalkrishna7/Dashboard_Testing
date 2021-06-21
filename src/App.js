import { Route, Switch, useLocation } from "react-router";
import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import SidebarRight from "./Components/SidebarRight/SidebarRight";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard";
import Settings from "./Pages/Settings";
import Profile from "./Pages/Profile";
import Appointments from "./Pages/Appointments";
import Chats from "./Pages/Chats";
import Blogs from "./Pages/Blogs";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { AnimatePresence } from "framer-motion";

const Pages = styled.div`
  padding-top: 90px;

  h1 {
    font-size: 3rem;
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const toggle = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };
  const location = useLocation();
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar />
      <SidebarRight sidebarIsOpen={sidebarIsOpen} toggle={toggle} />
      <Pages>
        <Container>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Dashboard} />
              <Route path="/profile" component={Profile} />
              <Route path="/appointments" component={Appointments} />
              <Route path="/chats" component={Chats} />
              <Route path="/blogs" component={Blogs} />
              <Route path="/settings" component={Settings} />
            </Switch>
          </AnimatePresence>
        </Container>
      </Pages>
    </>
  );
}

export default App;
