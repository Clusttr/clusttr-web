import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Spline from "@splinetool/react-spline";
import NavBar from "./views/components/nev_bar";
import HeroView from "./views/landing_page/hero";
import Features from "./views/landing_page/features";
import Social from "./views/landing_page/social_proof";
import Landing from "./views/landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/former" element={
          <Base>
            <NavBar />
            <HeroView />
            <Features />
            <Social />
          </Base>
        } />
      </Routes>
    </Router>
  );
}

export default App;

const Base = styled.div`
  /* background-color: green; */
`;