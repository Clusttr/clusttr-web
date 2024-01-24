import styled from "styled-components";
import colors from "../../components/colors";

function WaitListForm() {
  return (
    <div style={{ gap: 120}}>
      <WaitListButton style={{backgroundColor: colors.blue3, color: colors.brown1 }}>Join Waitlist</WaitListButton>
      <TextInput style={{backgroundColor: colors.brown1}} />
    </div>
  );
}

export default WaitListForm;

const WaitListButton = styled.button`
  height: 40px;
  font-size: 12px;
  font-weight: 500;
  padding-inline: 12px;
  border-radius: 12px;
  color: white;
  border: none;
  cursor: pointer;
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