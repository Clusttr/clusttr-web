import styled from "styled-components";
import HeroView from "./hero";
import Features from "./features";
import Social from "./social_proof";
import Footer from "./footer";
import colors from "../components/colors";

function LandingPage() {
  return (
    <Base style={{backgroundColor: colors.brown1}}>
      <HeroView />
      <Features />
      <Social />
      <Footer />
    </Base>
  );
}

export default LandingPage;

const Base = styled.div`
`;