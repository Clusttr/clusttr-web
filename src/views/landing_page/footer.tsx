import styled from "styled-components";
import Text from "../components/texts";
import colors from "../components/colors";

function Footer() {
  return (
    <Body style={{backgroundColor: colors.black}}>
      <Column style={{color: colors.brown1}}>
        <Text.Headline style={{color: "white"}}>About</Text.Headline>
        <Text.Subheadline>Careers</Text.Subheadline>
        <Text.Subheadline>Press Kit</Text.Subheadline>
        <Text.Subheadline>Blog</Text.Subheadline>
      </Column>

      <Column style={{color: colors.brown1}}>
        <Text.Headline style={{color: "white"}}>Learn more</Text.Headline>
        <Text.Subheadline>Creators</Text.Subheadline>
        <Text.Subheadline>Developers</Text.Subheadline>
        <Text.Subheadline>GitHub</Text.Subheadline>
      </Column>

      <Column style={{color: colors.brown1}}>
        <Text.Headline style={{color: "white"}}>About</Text.Headline>
        <Text.Subheadline>Privacy Policy</Text.Subheadline>
        <Text.Subheadline>Terms & Disclaimer</Text.Subheadline>
        <Text.Subheadline>Bounty Program</Text.Subheadline>
      </Column>
    </Body>
  );
}

export default Footer;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 45px;
  background-color: gray;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;
