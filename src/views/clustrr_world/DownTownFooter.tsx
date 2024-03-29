import styled from 'styled-components';

type ImageType = {
    name: string,
    imgSrc: string,
}
const DownTownFooter = () => {
    const imgComp: ImageType = {
        name: "Downtown Logo",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711317162/clustrr/footerlogo_dn36h1.svg",
    }
    return (
        <Style>
            <ImgContainer>
                <img src={imgComp.imgSrc} alt={imgComp.name} />
            </ImgContainer>
            {/* <p>Made in Abuja, Available to the 🌍</p> */}
        </Style>
    )
}

export default DownTownFooter

const Style = styled.div`
    height: 400px;
    width: 100%;
    background-color: #F76941;
    color: white;
	display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    /* padding: 20px 0; */
`;
const ImgContainer = styled.div`
    max-width: 600px;
    /* width: 500px; */
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 100%
    }

     @media (max-width: 48em) {
    img {
      width: 20rem;
      height: auto;
    }
  }

`;