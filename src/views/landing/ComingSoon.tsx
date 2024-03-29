import styled from 'styled-components';
import ComingSoonBox from './ComingSoonBox';
import overlay from '../../assets/coming_soon/coming_soon_bg.png';

const fakeData = [
	{
		address: '5135 How....',
		region: 'London, UK',
		windowLength: 22350.75,
		beds: 7,
		bathrooms: 8,
		coins: 22456.05,
		dollar: 100.54,
	},
	{
		address: '5135 How....',
		region: 'Paris, France',
		windowLength: 22350.75,
		beds: 7,
		bathrooms: 8,
		coins: 22456.05,
		dollar: 100.54,
	},
	{
		address: '1212 General Za...',
		region: 'Sydney, Australia',
		windowLength: 10525275,
		beds: 3,
		bathrooms: 3,
		coins: 2456.05,
		dollar: 1374536.54,
	},
	{
		address: '224 Fishers...',
		region: 'Ottawa, Canada',
		windowLength: 155625,
		beds: 4,
		bathrooms: 9,
		coins: 42255.05,
		dollar: 14525663.54,
	},
	{
		address: '9012 Lake...',
		region: 'New York City, US',
		windowLength: 255209,
		beds: 1,
		bathrooms: 2,
		coins: 5100,
		dollar: 12235,
	},
];

const ComingSoonBoxes = () => {
	return (
		<div className="coming_soon_boxes">
			{fakeData.map(
				({ windowLength, beds, bathrooms, coins, dollar, address, region }) => {
					return (
						<ComingSoonBox
							address={address}
							region={region}
							windowLength={windowLength}
							beds={beds}
							bathrooms={bathrooms}
							coins={coins}
							dollar={dollar}
						/>
					);
				}
			)}
		</div>
	);
};

const ComingSoon = () => {
	return (
		<ComingSoonStyle>
			<div className="overlay_bg">
				<div className="comingSoonBoxesClones">
					<ComingSoonBoxes />
					<ComingSoonBoxes />
					<img src={overlay} alt="" className="overlay" />
				</div>
			</div>

			<div className="coming_soon">Coming soon</div>
		</ComingSoonStyle>
	);
};

const ComingSoonStyle = styled.div`
	color: white;
	padding-bottom: 60px;

	& .overlay_bg {
		position: relative;
		overflow: hidden;
	}
	& .overlay {
		position: absolute;
		top: 0;
		left: 0;
		righ11: 02;
		// background-color: red;
	}

	@keyframes slide {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}
	& .comingSoonBoxesClones {
		display: flex;
		margin: 110px 0 30px;
	}
	& .coming_soon_boxes {
		display: flex;
		animation: slide 30s infinite linear;
	}

	& .comingSoonBoxesClones:hover .coming_soon_boxes {
		animation-play-state: paused;
	}

	& .coming_soon {
		font-size: 1.8rem;
		font-weight: 500;
		text-align: center;
		padding-bottom: 3px;
		background: -webkit-linear-gradient(#ffffff, #013828);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`;

export default ComingSoon;
