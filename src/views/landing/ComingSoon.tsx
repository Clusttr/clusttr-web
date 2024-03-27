import styled from 'styled-components';
import ComingSoonBox from './ComingSoonBox';

const ComingSoon = () => {
	return (
		<ComingSoonStyle>
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
			</div>
			<div className="coming_soon">Coming soon</div>
		</ComingSoonStyle>
	);
};

const ComingSoonStyle = styled.div`
	color: white;

	& .coming_soon_boxes {
		display: flex;
		gap: 20px;
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
