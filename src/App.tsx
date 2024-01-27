import styled from "styled-components";
import LandingPage from "./views/landing_page";
import NavBar from "./views/components/nev_bar";

function App() {
  return (
    // <Base>
    //   <NavContainer>
    //     <NavBar />
    //   </NavContainer>
    //   <LandingPage />
    // </Base>
    <>
      <NavBar />
      <LandingPage />
    </>
  );
}

export default App;

// const Base = styled.div``;

// const NavContainer = styled.div`
//   position: absolute;
//   width: 100%;
//   top: 0px;
// `;
