import styled from "styled-components";
import Tweets from "./tweets";

function Social() {
    return <Body>
        <Tweets />
    </Body>
}

export default Social

const Body = styled.div`
    height: 100vh;
`