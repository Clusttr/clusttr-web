import styled from "styled-components";
// import Spline from "@splinetool/react-spline";
import NavBar from "./views/components/nev_bar";
import HeroView from "./views/landing_page/hero";
import Features from "./views/landing_page/features";
import Social from "./views/landing_page/social_proof";
import Footer from "./views/landing_page/footer";

function App() {
  return (
    <Base>
    {/* <p>Hello world</p> */}
      <NavBar />
      <HeroView />
      <Features />
      <Social />
      <Footer />
    </Base>
  );
}

export default App;

const Base = styled.div`
  /* background-color: green; */
`;