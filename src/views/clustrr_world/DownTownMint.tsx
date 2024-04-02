import styled from "styled-components";

type ImageType = {
    name: string,
    imgSrc: string,
}

const DownTownMint = () => {
    const house: ImageType = {
        name: "minthouse",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711333736/clustrr/minthouse_ivdibp.png",
    }
    const moon: ImageType = {
        name: "Moon",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711373550/clustrr/mooncorenew_ahnbze.png",
    }
    const targetTop: ImageType = {
        name: "target",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711374259/clustrr/targeting1_bn0ywg.svg",
    }
    const targetBottom: ImageType = {
        name: "target",
        imgSrc: "https://res.cloudinary.com/stone-soft/image/upload/v1711374259/clustrr/targeting2_igjt8v.svg",
    }
    return (
        <MintContainer>
            <MintImageBackground>
                <HouseImageContainer>
                    <img className="minthouse" src={house.imgSrc} alt={house.name} />
                    <div className="target">
                        <img className="target1" src={targetTop.imgSrc} alt={targetTop.name} />
                    </div>
                    <div className="target_slant">
                        <img className="target2" src={targetBottom.imgSrc} alt={targetBottom.name} />
                    </div>
                </HouseImageContainer>
                <MintStartTime>
                    <p className="starts_in">Mint starts in:</p>
                    <p className="mint_time">TBA</p>
                    {/* <p className="mint_time">10d:19h:20m:20s</p> */}
                </MintStartTime>
                <MintControls>
                    <MintGeneral>
                        <InputContainer>
                            <label>Quantity:</label>
                            <div className="fraction">
                                <input
                                    disabled
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    min="1"
                                    max="5"
                                    value={0}
                                />
                                <span>/5</span>
                            </div>
                        </InputContainer>
                        <LabelItems>
                            <LabTitlep>Price</LabTitlep>
                            <Quantity>TBA</Quantity>
                        </LabelItems>
                        <LabelItems>
                            <LabTitlep>Remaining</LabTitlep>
                            <Quantity>4567/4567</Quantity>
                        </LabelItems>

                    </MintGeneral>
                    <button disabled>Mint</button>
                </MintControls>

                <div className="moon_house">
                    <img className="moon" src={moon.imgSrc} alt={moon.name} />
                </div>
            </MintImageBackground>
        </MintContainer>
    )
}

export default DownTownMint

const MintContainer = styled.div`
	height: 650px;
    width: 100%;
    background: linear-gradient(180deg, #020A0D 0%, #161F20 100%);
	display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    z-index: 20;
`;
const MintImageBackground = styled.div`
	height: 100%;
    width: 100%;
    max-width:1300px;
    background-image: url('https://res.cloudinary.com/stone-soft/image/upload/v1711329935/clustrr/dotted_Mint_rhqxik.svg');
    /* background-position: center; */
    background-size: contain;
    background-repeat: no-repeat;
    color: white;
	display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    /* border: 1px solid red; */
    position: relative;
    padding: 20px 0;

    .moon_house{
        position: absolute;
        top: 10px;
        right: 90px;
        height: 200px;
    }
    .moon {
        height: 100%;
    }
    @media (max-width: 48em) {
        .moon_house{
            position: absolute;
            top: 10px;
            right: 4px;
            height: 160px;
        }
    }
`;
const HouseImageContainer = styled.div`
	display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    position: relative;
    .minthouse {
        /* height: 100%; */
        scale: 0.75;
        z-index: 20;
    }

    .target {
        position: absolute;
        top: -75px;
        right: 0.5px;
        z-index: 15;
        
        .target1 {
           scale: 0.75; 
        }
    }
    
    .target_slant {
        position: absolute;
        bottom: -80px;
        left: -55px;
        z-index: 15;

        .target2 {
           scale: 0.75; 
        }
    }
    @media (max-width: 48em) {
        .minthouse {
            width: 300px;
            height: auto;
        }
        .target {
        position: absolute;
        top: -35px;
        right: -51px;
        z-index: 15;
        
            .target1 {
            scale: 0.5; 
            }
        }
        .target_slant {
        position: absolute;
        bottom: -51px;
        left: -92px;
        z-index: 15;

        .target2 {
           scale: 0.5; 
        }
    }
    }
`;
const MintStartTime = styled.article`
	text-align: center;
    .starts_in {
        font-size: 14px;
        font-weight: 500;
        color: #737373; 
    }
    .mint_time {
        font-family: 'Druk Wide Trial', sans-serif;
        margin-top: 14px;
        font-size: 24px;
        font-weight: 500;
    }
    `;
const MintControls = styled.div`
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* border: 1px solid red; */
        height: 75px; 
        width: 600px; 
        border-radius: 8px;
        padding: 0 20px;

        button {
            font-family: 'Pricedown Bl', sans-serif;                 
            font-size: 24px;
            font-weight: 900;
            padding: 15px 22px;
            background-color: #A2A2A2;
            /* background-color: #FB6841; */
            border-radius: 8px;
            border: none;
            color: white;
        }
        @media (max-width: 48em) {
            height: auto; 
            width: auto; 
            max-width: 320px; 
            flex-direction: column;
            padding: 5px;

            button {
                margin-top: 13px;
                width: 100%;
                padding: 10px 12px;
            }
        }
    `;
const MintGeneral = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* border: 1px solid green; */
        /* height: 75px;  */
        width: 420px; 
        border-radius: 8px;

        @media (max-width: 48em) {
           width: 310px;
           padding-top: 7px;
        }
    `;

const InputContainer = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%; 
        color: #D6D7E2;

        label {
            font-size: 13px;
        }
        .fraction {
            width: 73px;
            height: 48px; 
            margin-left: 10px;
            border-radius: 8px;
            border: 1px solid #D6D7E2;
            display: flex; 
            justify-content: center;
            align-items: center;
            input[type="number"]::-webkit-inner-spin-button,
            input[type="number"]::-webkit-outer-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }

            input {
                width:50%;
                height: 100%;
                background-color: white;
                color: #D6D7E2;
                border-radius: 8px 0 0 8px;
                font-family: inherit;
                font-size: 14px;
                font-weight: 500;
                text-align: right;
                /* color: #020202; */
                border: none; 
                outline: none; 
                padding-bottom: 2px;
            }
            span {
                background-color: white;
                color: #D6D7E2;
                /* color: #020202; */
                width:50%;
                height: 100%;
                font-size: 14px;
                border-radius: 0 8px 8px 0;
                display: flex;
                align-items: center; 
                font-size: 14px;
                font-weight: 500;
            }
        }
    `;

const LabelItems = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        /* border: 1px solid green; */
    `;
const LabTitlep = styled.p`
        color: #D6D7E2;
        font-size: 13px;
        margin-bottom: 10px;
    `;
const Quantity = styled.p`
        font-family: 'Druk Wide Trial', sans-serif;
        color: #020202;
        font-size: 14px; 
        font-weight: 700;
        @media (max-width: 48em) {
            font-size: 10px; 
            font-weight: 600;
        }
    `;