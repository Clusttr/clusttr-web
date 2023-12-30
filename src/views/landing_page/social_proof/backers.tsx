import styled from "styled-components";
import super_team_image from "../../../assets/super-team.jpg";
import metaplex_image from "../../../assets/Metaplex.png";
import Text from "../../components/texts";

function Backers() {
  return (
    <Body>
      <Text.Title>Backers</Text.Title>

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
  margin-top: 40px;
  display: flex;
  /* background-color: red; */
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100px; */
  align-items: center;
  margin-inline: 16px;
`;

const Logo = styled.img`
  /* width: 75px; */
  height: 65px;
  border-radius: 18px;
  margin-bottom: 8px;
`;
