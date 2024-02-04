import styled from "styled-components";
import x_logo from "../../../assets/x-logo.png";
import { Tweet } from "react-tweet";
import Text from "../../components/texts";
import colors from "../../components/colors";

function Tweets() {
  return (
    <Body>
      <Main>
        <Testimonial style={{ display: "flex", alignItems: "baseline" }}>
          <Text.Title style={{color: colors.grey3}}>Testimonial</Text.Title>
          <TwitterButton target="_blank" href="https://twitter.com/clusttr_io" style={{backgroundColor: colors.blue2}}>
            <XImage src={x_logo} />
            <Text.Caption style={{color: "white"}}>
              Follow Clusttr
            </Text.Caption>
          </TwitterButton>
        </Testimonial>
        <Text.Description style={{color: colors.grey2}}>
          Here’s what some users who have to say about Clustrr
        </Text.Description>

        <TweetList >
          <TweetContainer>
            <Tweet id="1720448733433770333" />
          </TweetContainer>
          <TweetContainer>
            <Tweet id="1730717325244977239" />
          </TweetContainer>
          <TweetContainer>
            <Tweet id="1730014717958131910" />
          </TweetContainer>
          <TweetContainer>
            <Tweet id="1733976874437529978" />
          </TweetContainer>
        </TweetList>
      </Main>
    </Body>
  );
}

export default Tweets;

const Body = styled.div`
  // margin-left: 100px;
  // margin-right: 50px;
  // padding-top: 90px;
  //height: 100vh;
  margin-left: 4rem;
  margin-right: 2rem;
  padding-top: 3rem;
  margin-top: 100px;
`;

const Heading = styled.div`
  margin-inline: 10%;
`;

const TwitterButton = styled.a`
  height: 30px;
  margin-left: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: gray;
  border-radius: 18px;
  text-decoration: none;
`;

const XImage = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 8px;
`;


const TweetList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8rem;
  @media (min-width: 768px) {
    gap: 0.2rem;
  }
`;

const TweetContainer = styled.div`
  //flex: 1;
  min-width: 0; /* Allow the container to shrink on smaller screens */
  height: 300px; /* Set a fixed height for each tweet container */
  flex: 1 0 calc(100% - 1rem); /* Adjust width based on the number of tweets you want in a row */
  
  @media (min-width: 768px) {
    flex: 1
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const Testimonial  = styled.div`
`