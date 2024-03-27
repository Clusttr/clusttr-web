import styled from "styled-components";
// import DowntownHeader from "./DowntownHeader";
import DownTownHero from "./DownTownHero";
import DownTownFooter from "./DownTownFooter";
import DownTownMint from "./DownTownMint";
import DownTownRoadMap from "./DownTownRoadMap";


const ClustrrWorld = () => {
    return (
        <Style>
            {/* <DowntownHeader /> */}
            <DownTownHero />
            <DownTownRoadMap />
            <DownTownMint />
            <DownTownFooter />
        </Style>
    )
}

export default ClustrrWorld

const Style = styled.div`
    font-family: "Inter", sans-serif;
	overflow: hidden;
	display: flex;
    color: white;
    flex-direction: column;
    /* background-color: black; */
    /* width: 100vw; */
`;