import styled from "styled-components";
import { Feature } from "../models/Feature";

interface Props {
  feature: Feature;
  isActive: Boolean;
  onClick: (feature: Feature) => void;
}

function FeatureItem({ feature, isActive, onClick }: Props) {
  return (
    <Card
    style={{opacity: isActive ? 1 : 0.6}}
      onClick={_ => onClick(feature)}
    >
      <IconView style={{backgroundColor: isActive ? "palevioletred" : "transparent"}}>
        <Icon src={feature.image} />
      </IconView>
      <Title style={{fontWeight: isActive ? 600 : 100}}>{feature.title}</Title>
    </Card>
  );
}

export default FeatureItem;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 145px;
  background: "red";
  align-items: center;
`;

const IconView = styled.div`
  padding-block: 28px;
  padding-inline: 26px;
  justify-content: center;
  background-color: palevioletred;
  border-radius: 12px;
`;

const Icon = styled.img`
  width: 75px;
  height: 75px;
`;

const Title = styled.p`
  color: black;
  text-align: center;
  margin-top: 8;
`;
