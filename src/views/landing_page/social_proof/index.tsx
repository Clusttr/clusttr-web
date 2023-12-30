import styled from "styled-components";
import Tweets from "./tweets";
import Backers from "./backers";

function Social() {
    return <Body>
        <Tweets />
        <Backers />
    </Body>
}

export default Social

const Body = styled.div`
    height: 100vh;
    /* margin-inline: 10%; */
`