import styled from "styled-components";
import FeatureItem from "./components/feature_item";
import { Feature, features } from "./models/Feature";
import { useState } from "react";
import Text from "../components/texts"

function Features() {
  const [activeFeature, setActiveFeature] = useState<Feature>(features[0]);
  return (
    <Body>
      <MainCard>
        <Text.Title style={{margin: 0}}>Features</Text.Title>

        <Text.Subheadline style={{width: "50%", color: "#6c6c6c"}}>{activeFeature.description}</Text.Subheadline>

        <FeatureList>
          {features.map((item) => (
            <FeatureItem
              feature={item}
              isActive={item === activeFeature}
              onClick={setActiveFeature}
            />
          ))}
        </FeatureList>

        <SubCard></SubCard>
      </MainCard>
    </Body>
  );
}

export default Features;

const Body = styled.div`
  display: flex;
  height: 100vh;
  background-color: wheat;
  justify-content: center;
  align-items: center;
  align-self: center;
  align-content: center;
  padding-top: 50px;
  padding-inline: 100px;
`;

const MainCard = styled.div`
  width: 70%;
  height: 70%;
  background-color: white;
  padding: 70px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 12px;
`;

const SubCard = styled.div`
    width: 30%;
    height: 50%;
    position: absolute;
    right: 5%;
    border-radius: 18px;
    background-color: gray;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 12px;
`;

const FeatureList = styled.div`
  display: flex;
  margin-top: 60px;
`;
