import styled from 'styled-components';
import DownTownLogo from "./DownTownLogo";


const DownTownHero = () => {



    return (
        <Style>
            <HeroContainer>
                <NavHeader>
                    <DownTownLogo />
                    <ConnectButton>Connect <span>Wallet</span></ConnectButton>
                </NavHeader>
                <HeroTextContainer>
                    <h1>Become a real estate mogul</h1>
                    <div>
                        <p>Build your utopia onchain, earn xp from your properties and become the biggest real estate mogul around</p>
                    </div>
                    <span>Coming Soon</span>
                </HeroTextContainer>
            </HeroContainer>
        </Style>
    )
}

export default DownTownHero


const Style = styled.div`
    height: 600px;
    width: 100%;
    background: linear-gradient(180deg, #020A0D 0%, #161F20 100%);
    background-position: center;
	display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;
const HeroContainer = styled.div`
    height: 100%;
    width: 100%;
    background-image: url('https://res.cloudinary.com/stone-soft/image/upload/v1711303199/clustrr/dotted_Stars2_wdkphw.svg');
    background-position: center;
    color: white;
	display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid green; */
`;
const NavHeader = styled.nav`
    position: absolute;
    top: 0;
	display: flex;
    justify-content: space-between;
    padding-left: 4rem;
    padding-right: 4rem;
    margin-top: 1rem;
    width: 100%;
    max-width: 1300px;
    z-index: 20;

    @media (max-width: 48em) {
        padding-left: 1rem;
        padding-right: 1rem;
    }
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
    

    @media (max-width: 48em) {
        padding-left: 0.4rem;
        padding-right: 0.4rem;
    }
    @media (max-width: 19.25rem) {
        span{
            display: none;
        }
    }
    
`;
const HeroTextContainer = styled.article`
    text-align: center;
    color: white;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 8rem;
    h1{
        font-size: 60px;
        font-weight: 500;
        letter-spacing: -1px;
    }
    div{
        max-width: 500px; 
        /* border: 1px solid green; */
        p{
            font-size: 16px;
            /* letter-spacing: -6; */
            padding: 20px 0px;
            font-weight: 500;
            color: #B7B7B7;
        }
    }
    span {
        font-family: 'Pricedown Bl', sans-serif;
        /* padding: 10px 10px; */
        width: 178px;
        height: 40px;
        font-size: 24px;
        font-weight: 900;
        border-radius: 64px;
        border: none;
        background-color: white;
        color: #020A0D;
        /* line-height: 28.8px */

        display: flex;
        justify-content: center; 
        align-items: center;
    }

    @media (max-width: 48em) {
        h1 {
        font-size: 40px;
        padding-left: 1rem;
        padding-right: 1rem;
        }
        div{
        padding-left: 1rem;
        padding-right: 1rem;
        p{
            font-size: 14px;
        }
    }
    }
`;

