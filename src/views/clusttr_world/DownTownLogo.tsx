import styled from "styled-components"

type ImageType = {
    name: string,
    imgSrc: string,
}

const DownTownLogo = () => {
    const imgComp: ImageType = {
        name: "Downtown Logo",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711117825/clustrr/downtown_logo_zx4wpz.svg",
    }
    return (
        <Imag src={imgComp.imgSrc} alt={imgComp.name} />
    )
}

export default DownTownLogo

const Imag = styled.img`
    @media (max-width: 48em) {
        width: 10rem;
        height: auto;

    }
`