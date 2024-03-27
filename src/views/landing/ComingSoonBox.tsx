import styled from 'styled-components';
import coinsIcon from '../../assets/coming_soon/coins.png';
import dollarIcon from '../../assets/coming_soon/dollar_icon.png';
import ComingSoonCard from './ComingSoonCard';

type BoxTypes = {
	address: string;
	region: string;
	windowLength: string;
	beds: number;
	bathrooms: number;
	coins: number;
	dollar: number;
};

const ComingSoonBox = ({
	address,
	region,
	windowLength,
	beds,
	bathrooms,
	coins,
	dollar,
}: BoxTypes) => {
	return (
		<BoxStyle>
			<div>
				{address}, {region}
			</div>

			<ComingSoonCard
				windowLength={windowLength}
				beds={beds}
				bathrooms={bathrooms}
				coins={coins}
				dollar={dollar}
			/>

			<div className="coming_soon_icon_info_container">
				<div className="coming_soon_icon_info">
					<div>
						<img src={coinsIcon} alt="" />
					</div>
					<div>= Price</div>
				</div>
				<div className="coming_soon_icon_info">
					<div>
						<img src={dollarIcon} alt="" />
					</div>
					<div>= Price</div>
				</div>
			</div>
		</BoxStyle>
	);
};

const BoxStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;

	width: 100%;
	min-width: 550px;
	& .coming_soon_icon_info_container {
		display: flex;
		gap: 15px;
	}
	& .coming_soon_icon_info {
		display: flex;
	}
`;

export default ComingSoonBox;
