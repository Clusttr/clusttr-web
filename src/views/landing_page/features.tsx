import styled from "styled-components";
import FeatureItem from "./components/feature_item";
import { Feature, features } from "./models/Feature";
import { useState } from "react";

function Features() {
  const [activeFeature, setActiveFeature] = useState<Feature>(features[0]);
  return (
    <Body>
      <MainCard>
        <Heading>Features</Heading>

        <Subheadline>{activeFeature.description}</Subheadline>

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

const Heading = styled.h1`
  font-size: 40px;
  font-weight: 600;
`;

const Subheadline = styled.p`
  color: black;
  font-size: 14px;
  font-family: "Courier New", Courier, monospace;
  font-weight: 900;
  width: 50%;
`;

const FeatureList = styled.div`
  display: flex;
  margin-top: 60px;
`;
