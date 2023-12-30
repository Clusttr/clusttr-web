import styled from "styled-components";
import x_logo from "../../../assets/x-logo.png";
import { Tweet } from "react-tweet";
import Text from "../../components/texts";

function Tweets() {
  return (
    <Body>
      <Heading>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <Text.Title>Testimonial</Text.Title>
          <TwitterButton>
            <XImage src={x_logo} />
            <p
              style={{
                color: "white",
                padding: "0px",
                margin: "0px",
                fontSize: "12px",
                fontWeight: "800",
              }}
            >
              Follow Clusttr
            </p>
          </TwitterButton>
        </div>
        <Text.Headline>
          Here’s what some users who have hopped on the PocketApp train have to
          say.
        </Text.Headline>
      </Heading>

      <div style={{display: "flex", gap: "12px", width: "100%", justifyContent: "left"}}>
        <TweetList>
          <Tweet id="1720448733433770333" />
          <Tweet id="1730717325244977239" />
          <Tweet id="1730014717958131910" />
          <Tweet id="1733976874437529978" />
        </TweetList>
      </div>
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
  width: 12px;
  height: 12px;
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
