import styled from "styled-components";

function WaitListForm() {
  return (
    <div style={{ gap: 120 }}>
      <WaitListButton>Join Waitlist</WaitListButton>
      <TextInput />
    </div>
  );
}

export default WaitListForm;

const WaitListButton = styled.button`
  height: 40px;
  font-size: 12px;
  font-weight: 500;
  color: black;
  padding-inline: 12px;
  border-radius: 12px;
  background-color: black;
  color: white;
`;

const TextInput = styled.input`
  width: 70%;
  height: 40px;
  margin-left: 16px;
  border-color: black;
  border-radius: 12px;
  padding-inline: 12px;
  font-size: 18px;
`;