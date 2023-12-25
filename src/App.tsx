import styled from "styled-components";
// import Spline from "@splinetool/react-spline";
import NavBar from "./views/components/nev_bar";
import HeroView from "./views/landing_page/hero";

function App() {
  return (
    <Base>
    {/* <p>Hello world</p> */}
      <NavBar />
      <HeroView />
    </Base>
  );
}

export default App;

const Base = styled.div`
  /* background-color: green; */
`;
