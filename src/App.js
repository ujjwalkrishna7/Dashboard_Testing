import { Route, Switch, useLocation } from "react-router";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Calender from "./Pages/Calender";
import Documents from "./Pages/Documents";
import Projects from "./Pages/Projects";
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
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Sidebar />
      <Pages>
        <Container>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Home} />
              <Route path="/team" component={Team} />
              <Route path="/calender" component={Calender} />
              <Route path="/documents" component={Documents} />
              <Route path="/projects" component={Projects} />
            </Switch>
          </AnimatePresence>
        </Container>
      </Pages>
    </>
  );
}

export default App;
