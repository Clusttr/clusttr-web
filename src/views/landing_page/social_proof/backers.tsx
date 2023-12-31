import styled from "styled-components";
import super_team_image from "../../../assets/super-team.jpg";
import metaplex_image from "../../../assets/Metaplex.png";
import Text from "../../components/texts";
import colors from "../../components/colors";

function Backers() {
  return (
    <Body>
      <Text.Title style={{color: colors.grey3}}>Backers</Text.Title>

      <BackersList>
        {BackerItem(super_team_image, "Super Team by Solana")}
        {BackerItem(metaplex_image, "")}
      </BackersList>
    </Body>
  );
}

function BackerItem(image: string, caption: string) {
  return (
    <Item>
      <Logo src={image} />
      <Text.Caption style={{ textAlign: "center" }}>{caption}</Text.Caption>
    </Item>
  );
}

export default Backers;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: 10%;
`;
const BackersList = styled.div`
  margin-top: 24px;
  display: flex;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: 16px;
`;

const Logo = styled.img`
  height: 65px;
  border-radius: 18px;
  margin-bottom: 8px;
`;