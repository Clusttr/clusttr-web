import styled from "styled-components";

type ImageType = {
    name: string,
    imgSrc: string,
}

const DownTownRoadMap = () => {
    // const stroke: ImageType = {
    //     name: "Line",
    //     imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711511516/clustrr/stroke_jmen3x.svg",
    // }
    const circle1: ImageType = {
        name: "stroke mark",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711512207/clustrr/roadmap_circle_point1_zvfwqe.svg",
    }
    const circle2: ImageType = {
        name: "stroke mark",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711512681/clustrr/roadmap_circle_point2_iy8ik1.svg",
    }
    const arrow1: ImageType = {
        name: "stroke mark",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711512311/clustrr/roadmap_arrow_point1_ykbmvm.svg",
    }
    const arrow2: ImageType = {
        name: "stroke mark",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711512688/clustrr/roadmap_arrow_point2_vfbck1.svg",
    }
    const roadMapIcon: ImageType = {
        name: "Q2 icon",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711518127/clustrr/roadmap_house_djmvlr.svg",
    }
    return (
        <RoadMapContainer>
            <Title>Roadmap</Title>
            <RoadMap>
                <LineBox>
                    <Line>
                        <Stroke></Stroke>
                        <div>
                            <img src={circle1.imgSrc} alt={circle1.name} />
                            <img src={arrow1.imgSrc} alt={arrow1.name} />
                            <span></span>
                        </div>
                        <div>
                            <img src={circle2.imgSrc} alt={circle2.name} />
                            <img src={arrow2.imgSrc} alt={arrow2.name} />
                            <span></span>
                        </div>
                        <div>
                            <img src={circle2.imgSrc} alt={circle2.name} />
                            <img src={arrow2.imgSrc} alt={arrow2.name} />
                            <span></span>
                        </div>
                        <div>
                            <img src={circle2.imgSrc} alt={circle2.name} />
                            <img src={arrow2.imgSrc} alt={arrow2.name} />
                            <span></span>
                        </div>
                    </Line>
                </LineBox>
                <WriteupContainer>
                    <Article>
                        <RoadMapImg>
                            <img src={roadMapIcon.imgSrc} alt={roadMapIcon.name} />
                        </RoadMapImg>
                        <RoadMapQuater>Q2 2024</RoadMapQuater>
                        <RoadMapTitle>Launch Closed testing of Downtown</RoadMapTitle>
                        <RoadMapDesc>Our invite only testnet for Downtown is scheduled to launch sometime in Q2 of 2024, limited to less than 200 testers.</RoadMapDesc>
                    </Article>
                    <Article>
                        <RoadMapImgGray></RoadMapImgGray>
                        <RoadMapQuaterGray>Q2 2024</RoadMapQuaterGray>
                        <RoadMapTitleGray>Launch First NFT (residential building Pack)</RoadMapTitleGray>
                        <RoadMapDescGray></RoadMapDescGray>
                    </Article>
                    <Article>
                        <RoadMapImgGray></RoadMapImgGray>
                        <RoadMapQuaterGray>Q3 2024</RoadMapQuaterGray>
                        <RoadMapTitleGray>???</RoadMapTitleGray>
                        <RoadMapDescGray>???</RoadMapDescGray>
                    </Article>
                    <Article>
                        <RoadMapImgGray></RoadMapImgGray>
                        <RoadMapQuaterGray>Q4 2024</RoadMapQuaterGray>
                        <RoadMapTitleGray>???</RoadMapTitleGray>
                        <RoadMapDescGray>???</RoadMapDescGray>
                    </Article>
                </WriteupContainer>
            </RoadMap>
        </RoadMapContainer>
    )
}

export default DownTownRoadMap

const RoadMapContainer = styled.div`
	height: 900px;
    width: 100%;
	display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    z-index: 20;
    background-color: black;
`;
const Title = styled.h2`
    font-family: 'Druk Wide Trial', sans-serif;
	font-size: 19px;
    font-weight: 1000;
`;
const RoadMap = styled.div`
	/* height: 900px; */
    max-width: 587px;
    /* border: 1px solid green; */
	display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 20px 0; */
`;
const LineBox = styled.div`
	height: 800px;
    width: 20%;
    /* border: 1px solid yellow; */
	display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 40px 30px;
`;
const Line = styled.div`
	height: 720px;
    width: 2px;
    position: relative;
    /* border: 1px solid red; */
	display: grid;
    grid-template-rows: repeat(4, 1fr); /* Define 4 rows with equal height */
    justify-items: center; /* Center the items horizontally */
    align-items: stretch;
    div{
         /* border: 1px solid red; */
         display: flex;
         flex-direction: column;
         justify-content:space-between;
         align-items: center;
         margin-left: -7px;
         z-index: 20;
    }
`;
const Stroke = styled.div`
background-image: url('https://res.cloudinary.com/stone-soft/image/upload/v1711511516/clustrr/stroke_jmen3x.svg');
height: 634px;
width: 2px;
position: absolute;
top: 0;
right: 0;
background-position: center;
background-repeat: no-repeat;
`
const WriteupContainer = styled.div`
	height: 720px;
    width: 80%;
    /* border: 1px solid yellow; */
	display: grid;
    grid-template-columns: auto;
    /* padding: 20px 20px; */
`;
const Article = styled.article`
	height: 180px;
    width: 100%;
    /* border: 1px solid pink; */
	display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: start;
    /* padding: 20px 20px; */
`;
const RoadMapImg = styled.div`
	height: 40px;
    width: 40px;
    border-radius: 8px;
    border: 1px solid green;
	display: flex;
    justify-content: center;
    align-content: center;
`;
const RoadMapQuater = styled.h3`
    font-family: 'Druk Wide Trial', sans-serif;
	font-size: 11px;
    font-weight: 500;
    color: #F76941;
    line-height: 7px;
    padding-top: 10px;
    `;
const RoadMapTitle = styled.h3`
    font-family: 'Druk Wide Trial', sans-serif;
	font-size: 13px;
    font-weight: 700;
    color: #F7F7F7;
    /* line-height: 9px; */
    padding: 10px 0;
`;
const RoadMapDesc = styled.p`
    font-family: "Inter", sans-serif;
	font-size: 14px;
    font-weight: 400;
    color: #B7B7B7;
`;
const RoadMapImgGray = styled.div`
	height: 40px;
    width: 40px;
    border-radius: 8px;
    border: 1px solid #353535;
	display: flex;
    justify-content: center;
    align-content: center;
`;
const RoadMapQuaterGray = styled.h3`
	font-family: 'Druk Wide Trial', sans-serif;
	font-size: 11px;
    font-weight: 500;
    color: #353535;
    line-height: 7px;
    padding-top: 10px;
    `;
const RoadMapTitleGray = styled.h3`
	font-family: 'Druk Wide Trial', sans-serif;
	font-size: 13px;
    font-weight: 700;
    color: #353535;
    /* line-height: 9px; */
    padding: 10px 0;
`;
const RoadMapDescGray = styled.p`
	font-family: "Inter", sans-serif;
	font-size: 14px;
    font-weight: 400;
    color: #353535;
`;
