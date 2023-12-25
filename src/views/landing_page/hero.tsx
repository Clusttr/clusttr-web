import styled from "styled-components";
import bubble from "../../assets/bubble.png";
import gradient from "../../assets/gradient.png";
import WaitListForm from "./components/waitlist_form";

function HeroView() {
  return (
    <Body>
      <Main>
        <Phrase>Fractional property ownership for everyone</Phrase>
        <Explainer>
          Experience hassle-free property investment with clusttr's fractional
          ownership Your future hub for easy and accessible real estate
          investing. We're in the process of building an experience where anyone
          can be part of the property market. And that's not all - we're
          branching out to offer dynamic financial services. Want to be ahead of
          the pack? Enter your email and we'll keep you posted on the Clusttr
          journey.
        </Explainer>
        <WaitListForm />
      </Main>
      <Image src={bubble} />
      <BackgroundGradient src={gradient} />
    </Body>
  );
}

export default HeroView;

const Body = styled.div`
  margin-left: 100px;
  margin-right: 50px;
  padding-top: 90px;
  height: 100vh;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 584px;
  height: 100%;
  justify-content: center;
`;

const Phrase = styled.text`
  font-family: "Telex";
  font-size: 57px;
`;

const Explainer = styled.text`
  font-family: "Telex";
  font-size: 16px;
  line-height: 161.5%;
  color: #6c6c6c;
  padding-top: 16px;
`;

const Image = styled.img`
  position: absolute;
  z-index: 1;
  top: 50%;
  right: 100px;
  height: 50%;
  width: 50%;
  margin-top: -15%;
  object-fit: contain;
`;
const BackgroundGradient = styled.img`
  position: absolute;
  top: -20px;
  right: 0%;
  height: 100vh;
  opacity: 0.5;
`;
