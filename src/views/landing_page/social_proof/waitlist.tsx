import styled from "styled-components";
import Text from "../../components/texts";
import Lottie from "react-lottie";
import animationData from "../../../assets/news-animation.json";
import WaitListForm from "../components/waitlist_form";

function WaitList() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Body>
      <ContentContainer>
        <Lottie
          options={defaultOptions}
          height={200}
          width={180}
        />
      </ContentContainer>
      <ContentContainer>
        <Text.Headline style={{marginBottom: "16px"}}>Be the first to know when we launch</Text.Headline>
        <WaitListForm />
      </ContentContainer>
    </Body>
  );
}

export default WaitList;

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  margin-inline: 10%;
  margin: 0px;
  align-items: center;
  justify-content: center;
`;


const ContentContainer = styled.div``