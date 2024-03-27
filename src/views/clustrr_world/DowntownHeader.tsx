import styled from "styled-components";
import DownTownLogo from "./DownTownLogo";

// type ImageType = {
//     name: string,
//     imgSrc: string,
// }
const DowntownHeader = () => {
    // const imgComp: ImageType = {
    //     name: "Downtown Logo",
    //     imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711117825/clustrr/downtown_logo_zx4wpz.svg",
    // }

    return (
        <NavHeader>
            <DownTownLogo />
            <ConnectButton>Connect Wallet</ConnectButton>
        </NavHeader>
    )
}

export default DowntownHeader

const NavHeader = styled.nav`
	display: flex;
    justify-content: space-between;
    padding-left: 5rem;
    padding-right: 5rem;
    margin-top: 1rem;
`;
const ConnectButton = styled.button`
    height: 2.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    font-weight: bold;
    border: 1px solid #FB6841;
    border-radius: 8px;
`;