import styled from 'styled-components';
import ComingSoonBox from './ComingSoonBox';

const ComingSoonBoxes = () => {
	return (
		<div className="coming_soon_boxes">
			<ComingSoonBox
				address="5135 How...."
				region="London, UK"
				windowLength="22,350.75 ft"
				beds={7}
				bathrooms={8}
				coins={22456.05}
				dollar={100.54}
			/>
			<ComingSoonBox
				address="5135 How...."
				region="London, UK"
				windowLength="22,350.75 ft"
				beds={7}
				bathrooms={8}
				coins={22456.05}
				dollar={100.54}
			/>
			<ComingSoonBox
				address="5135 How...."
				region="London, UK"
				windowLength="22,350.75 ft"
				beds={7}
				bathrooms={8}
				coins={22456.05}
				dollar={100.54}
			/>
			<ComingSoonBox
				address="5135 How...."
				region="London, UK"
				windowLength="22,350.75 ft"
				beds={7}
				bathrooms={8}
				coins={22456.05}
				dollar={100.54}
			/>
			<ComingSoonBox
				address="5135 How...."
				region="London, UK"
				windowLength="22,350.75 ft"
				beds={7}
				bathrooms={8}
				coins={22456.05}
				dollar={100.54}
			/>
			<ComingSoonBox
				address="5135 How...."
				region="London, UK"
				windowLength="22,350.75 ft"
				beds={7}
				bathrooms={8}
				coins={22456.05}
				dollar={100.54}
			/>
		</div>
	);
};

const ComingSoon = () => {
	return (
		<ComingSoonStyle>
			<ComingSoonBoxes />
			<ComingSoonBoxes />

			<div className="coming_soon">Coming soon</div>
		</ComingSoonStyle>
	);
};

const ComingSoonStyle = styled.div`
	color: white;
	padding-bottom: 60px;
	display: flex;

	@keyframes slide {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}

	& .coming_soon_boxes {
		display: flex;

		// padding: 110px 50px 110px;

		animation: slide 15s infinite linear;
	}
	// & .coming_soon_boxes:last-child {
	// 	margin-right: 350px;
	// }

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
