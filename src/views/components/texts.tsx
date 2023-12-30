import styled from "styled-components";

// const headline = 14;
// const subhead = 12;
// const body = 14;
// const caption = 11;

const LargeTitle = styled.p`
  font-size: 57px;
  font-weight: 800;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: 800;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
`

const Headline = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
`;

const Subheadline = styled.p`
  font-size: 14px;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
`

const Body = styled.p`
  font-size: 14px;
  /* font-weight: 800; */
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
`;

const Caption = styled.p`
  font-size: 11px;
  font-weight: 800;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  opacity: 0.65;
`;

export default {
    LargeTitle,
    Title,
    Headline,
    Subheadline,
    Body,
    Caption
}
