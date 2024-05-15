import styled, { keyframes } from "styled-components";
// import DowntownHeader from "./DowntownHeader";
import DownTownHero from "./DownTownHero";
import DownTownFooter from "./DownTownFooter";
import DownTownMint from "./DownTownMint";
import DownTownRoadMap from "./DownTownRoadMap";
import { useEffect, useState } from "react";


const orbit = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;
const hold = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;


const images = [
    {
        name: "Animation Image1",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711608350/clustrr/animated/animationhouse1_fbi1gu.svg",
    },
    {
        name: "Animation Image2",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711608278/clustrr/animated/animationhouse2_bqrgrg.svg",
    },
    {
        name: "Animation Image3",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711608347/clustrr/animated/animationhouse3_xzq0oy.svg",
    },
    {
        name: "Animation Image4",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711608350/clustrr/animated/animationhouse5_wtmsew.svg",
    },
    {
        name: "Animation Image5",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711608350/clustrr/animated/animationhouse1_fbi1gu.svg",
    },
    {
        name: "Animation Image6",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711608278/clustrr/animated/animationhouse2_bqrgrg.svg",
    },
    {
        name: "Animation Image7",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711608347/clustrr/animated/animationhouse3_xzq0oy.svg",
    },
    {
        name: "Animation Image8",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711608350/clustrr/animated/animationhouse5_wtmsew.svg",
    },
    {
        name: "Animation Image1",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711608350/clustrr/animated/animationhouse1_fbi1gu.svg",
    },
    {
        name: "Animation Image2",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711608278/clustrr/animated/animationhouse2_bqrgrg.svg",
    },
    {
        name: "Animation Image3",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711608347/clustrr/animated/animationhouse3_xzq0oy.svg",
    },
    {
        name: "Animation Image4",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711608350/clustrr/animated/animationhouse5_wtmsew.svg",
    },
    {
        name: "Animation Image5",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711608350/clustrr/animated/animationhouse1_fbi1gu.svg",
    },
    {
        name: "Animation Image6",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711608278/clustrr/animated/animationhouse2_bqrgrg.svg",
    },
    {
        name: "Animation Image7",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711608347/clustrr/animated/animationhouse3_xzq0oy.svg",
    },
    {
        name: "Animation Image8",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711608350/clustrr/animated/animationhouse5_wtmsew.svg",
    }
]

const ClustrrWorld = () => {
    const [radius, setRadius] = useState(850);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setRadius(420);
            } else {
                setRadius(850);
            }
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const totalImages = images.length;
    // const radius = 850; // Adjust the radius as needed
    const angle = 360 / totalImages; // Angle between each image

    return (
        <Style>
            {/* <DowntownHeader /> */}
            <DownTownHero />
            <DownTownRoadMap />
            <DownTownMint />
            <DownTownFooter />
            <AnimationDiv>
                <RotatingImages>
                    <ul>
                        {images.map((image, index) => (
                            <li key={index} style={{ transform: `rotate(${angle * index}deg) translate(${radius}px) rotate(-${angle * index}deg)` }}>
                                <RotatingImage
                                    src={image.imgSrc}
                                    alt={image.name}
                                />
                            </li>
                        ))}
                    </ul>
                </RotatingImages>
            </AnimationDiv>
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
    position: relative;
`;
const AnimationDiv = styled.div`
    display: grid; 
    place-items:center;
`
const RotatingImages = styled.div`
    position: absolute;
    top: 435px;
    display: grid;
    place-items: center;
 
    /* width: 900px; */
    aspect-ratio: 1/1;
   
    @media (max-width: 48em) {
         top: 40px;
    }

     ul {
    display: grid;
    place-items: center;
    width: 1000px;
    height: 1000px;
    position: relative;
    list-style: none;
    z-index: 10;
    transform-origin: center;
    animation: ${orbit} 75s linear infinite;
  }

  li {
    position: absolute;
    width: 11rem;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    display: grid;
    place-items: center;

    & > * {
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      position: absolute;
      transform-origin: center;
    }
    @media (max-width: 48em) {
      width: 7rem;
  }
  }
`;

const RotatingImage = styled.img`
    width: 80px;
    height: 80px;
    margin: 0 10px;
    position: absolute;
    
    /* top: 50%;
    left: 50%; */
    transform-origin: center;
    animation: ${hold} 75s linear reverse infinite;
`;