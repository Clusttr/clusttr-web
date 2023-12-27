import styled from "styled-components";
import x_logo from "../../../assets/x-logo.png";
import { Tweet } from "react-tweet";

function Tweets() {
  return (
    <Body>
      <Heading>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <Headline>Testimonial</Headline>
          <TwitterButton>
            <XImage src={x_logo} />
            <p style={{ color: "white", padding: "0px", margin: "0px" }}>
              Follow Clusttr
            </p>
          </TwitterButton>
        </div>
        <SubHeadline>
          Here’s what some users who have hopped on the PocketApp train have to
          say.
        </SubHeadline>
      </Heading>

      <TweetList>
        <Tweet id="1720448733433770333" />
        <Tweet id="1730717325244977239" />
        <Tweet id="1730014717958131910" />
        <Tweet id="1733976874437529978" />
      </TweetList>
    </Body>
  );
}

export default Tweets;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;

const Heading = styled.div`
  margin-inline: 10%;
`;

const Headline = styled.p`
  font-size: 72px;
  font-weight: 800;
  margin: 0px;
  padding: 0px;
`;

const SubHeadline = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin: 0px;
`;

const TwitterButton = styled.div`
  height: 30px;
  margin-left: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: gray;
  border-radius: 18px;
`;

const XImage = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 8px;
`;

const TweetList = styled.div`
  scale: 0.8;
  height: 475px;
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  margin: 0px;
  margin-top: -25px;
`;
