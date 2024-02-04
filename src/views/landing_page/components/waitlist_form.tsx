import styled from "styled-components";
import colors from "../../components/colors";
import { SetStateAction, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function WaitListForm() {
  const [email, setEmail] = useState<string>("");
  let url = "https://clusttr.up.railway.app"

  const handleSubmit = () => {
    // Check if email is present
    if (!email) {
      toast("Email is required!");
      return;
    }

    const data = {
      email: email,
    };

    fetch(`${url}/waitlist/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          setEmail("")
          toast("Error! Please try again");
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        toast("Success! You'll be the first to know when we launch");
        return res.json();
      })
  };



  return (
    <WaitListContainer>
      <TextInput value={email} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)} style={{ backgroundColor: colors.brown1 }} />
      <WaitListButton onClick={handleSubmit} style={{ backgroundColor: colors.blue3, color: colors.brown1 }}>Join Waitlist</WaitListButton>
      <ToastContainer />
    </WaitListContainer>
  );
}

export default WaitListForm;

const WaitListContainer = styled.div`
  display: flex;
  gap: 2px;
`

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
  border-color: black;
  border-radius: 12px;
  padding-inline: 12px;
  font-size: 18px;
`;