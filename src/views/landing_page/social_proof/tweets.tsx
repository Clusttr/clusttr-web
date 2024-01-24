import styled from "styled-components";
import x_logo from "../../../assets/x-logo.png";
import { Tweet } from "react-tweet";
import Text from "../../components/texts";
import colors from "../../components/colors";

function Tweets() {
  return (
    <Body>
      <Main>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <Text.Title style={{color: colors.grey3}}>Testimonial</Text.Title>
          {/* <TwitterButton style={{backgroundColor: colors.blue2}}>
            <XImage src={x_logo} />
            <Text.Caption style={{color: "white"}}>
              Follow Clusttr
            </Text.Caption>
          </TwitterButton> */}
        </div>
        <Text.Description style={{color: colors.grey2}}>
          Here’s what some users who have to say about Clustrr
        </Text.Description>

      <div style={{display: "flex", flexWrap: "wrap", alignItems: 'center'}}>
        <TweetList >
          <Tweet id="1720448733433770333" />
          {/* <Tweet id="1730717325244977239" /> */}
          <Tweet id="1730014717958131910" />
          <Tweet id="1733976874437529978" />
        </TweetList>
      </div>
      </Main>
    </Body>
  );
}

export default Tweets;

// const Body = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding-top: 60px;
// `;
const Body = styled.div`
  margin-left: 100px;
  margin-right: 50px;
  padding-top: 90px;
  //height: 100vh;
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
  //scale: 0.8;
  //height: 475px;
   display: flex;
  // flex-wrap: wrap;
  gap: 20px;
  // margin: 0px;
  //margin-top: -25px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 584px;
  height: 100%;
  justify-content: center;
`;
