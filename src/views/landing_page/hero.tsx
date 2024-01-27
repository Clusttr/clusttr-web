import styled from "styled-components";
import bubble from "../../assets/bubble.png";
import gradient from "../../assets/gradient.png";
import WaitListForm from "./components/waitlist_form";
import Text from "../components/texts";
import colors from "../components/colors";

function HeroView() {
  return (
    <Body>
      <Main>
        <Text.LargeTitle style={{ color: colors.grey3 }}>
          Real Estate Ownership for everyone
        </Text.LargeTitle>
        <Text.Headline style={{ color: colors.grey2, marginBottom: "40px" }}>
          Experience hassle-free property investment with clusttr's fractional
          ownership.
        </Text.Headline>
        <WaitListForm />
      </Main>
      {/* <Image src={bubble} />
      <BackgroundGradient src={gradient} /> */}
    </Body>
  );
}

export default HeroView;

const Body = styled.div`
  margin-left: 4rem;
  margin-right: 2rem;
  padding-top: 3rem;
  height: 100vh;
  display: flex;
  position: relative; /* Add this line to set position relative */

  ::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%; /* Adjusted to 100% */
    width: 100%; /* Adjusted to 100% */
    background-image: url('../../assets/bubble.png');
    background-size: cover;
    background-position: right;
    opacity: 0.8; /* Adjust the overlay opacity if needed */
    z-index: -1; /* Ensure the overlay is behind the content */
  }
`;


const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 100%;
  justify-content: center;
`;

const Image = styled.img`
  position: absolute;
  z-index: 1;
  top: 25%;
  right: 0;
  height: 50%;
  width: 50%;
  // margin-top: -15%;
  object-fit: contain;
`;
const BackgroundGradient = styled.img`
  // position: absolute;
  // top: 0px;
  // right: 0%;
  // height: 100vh;
  opacity: 0.5;
`;
