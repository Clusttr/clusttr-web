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
      <div>
        <Lottie
          options={defaultOptions}
          height={200}
          width={180}
        />
      </div>
      <div>
        <Text.Headline style={{marginBottom: "16px"}}>Be the first to know when we launch</Text.Headline>
        <WaitListForm />
      </div>
    </Body>
  );
}

export default WaitList;

const Body = styled.div`
  display: flex;
  margin-inline: 10%;
  margin: 0px;
  align-items: center;
  justify-content: center;
`;
