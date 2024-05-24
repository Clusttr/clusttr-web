import styled from 'styled-components';
import coinsIcon from '../../assets/coming_soon/coins.png';
import dollarIcon from '../../assets/coming_soon/dollar_icon.png';
import ComingSoonCard from './ComingSoonCard';

type BoxTypes = {
	address: string;
	region: string;
	windowLength: number;
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
			<div className="coming_soon_location">
				<span className="coming_soon_highlighted">{address},</span> {region}
			</div>

			<ComingSoonCard
				windowLength={windowLength}
				beds={beds}
				bathrooms={bathrooms}
				coins={coins}
				dollar={dollar}
				fake={false}
			/>

			<div className="coming_soon_icon_info_container">
				<div className="coming_soon_icon_info">
					<div>
						<img src={coinsIcon} alt="" />
					</div>
					<div className="coming_soon_icon_info_text">=</div>
					<div className="coming_soon_icon_info_text">Price</div>
				</div>
				<div className="coming_soon_icon_info">
					<div>
						<img src={dollarIcon} alt="" />
					</div>
					<div className="coming_soon_icon_info_text">=</div>
					<div className="coming_soon_icon_info_text">Valuation</div>
				</div>
			</div>
		</BoxStyle>
	);
};

const BoxStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-right: 20px;

	width: 100%;
	min-width: 550px;
	& .coming_soon_location {
		font-weight: 500;
		font-size: 0.85rem;
	}
	& .coming_soon_highlighted {
		color: #c8e3df;
	}
	& .coming_soon_icon_info_container {
		display: flex;
		gap: 15px;
	}
	& .coming_soon_icon_info {
		display: flex;
		gap: 5px;
	}
	& .coming_soon_icon_info_text {
		font-weight: 500;
		font-size: 0.8rem;
		color: #c8e3df;
	}
`;

export default ComingSoonBox;
