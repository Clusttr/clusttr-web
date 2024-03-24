import styled from 'styled-components';
import chart from '../../assets/coming_soon/chart_line.png';
import house from '../../assets/coming_soon/house.png';
import grid from '../../assets/coming_soon/grid.png';
import windowEdge from '../../assets/coming_soon/window_edge.png';
import bed from '../../assets/coming_soon/bed.png';
import bathroom from '../../assets/coming_soon/bathroom.png';
import coinsIcon from '../../assets/coming_soon/coins.png';
import dollarIcon from '../../assets/coming_soon/dollar_icon.png';
import angle from '../../assets/coming_soon/angle.png';

type CardType = {
	windowLength: string;
	beds: number;
	bathrooms: number;
	coins: number;
	dollar: number;
};

const ComingSoonCard = ({
	windowLength,
	beds,
	bathrooms,
	coins,
	dollar,
}: CardType) => {
	return (
		<CardStyle>
			<div className="card_info_container">
				<div>
					<img src={house} alt="" />
				</div>
				<div className="card_info_inner_container">
					<div>
						<div className="card_info">
							<img src={windowEdge} alt="" />
							<div>{windowLength}</div>
						</div>
						<div className="card_info">
							<img src={bed} alt="" />
							<div>{beds}</div>
						</div>
						<div className="card_info">
							<img src={bathroom} alt="" />
							<div>{bathrooms}</div>
						</div>
					</div>
					<div>
						<div className="card_info">
							<img src={coinsIcon} alt="" />
							<div>{coins}</div>
							<img src={angle} alt="" />
						</div>
						<div className="card_info">
							<img src={dollarIcon} alt="" />
							<div>{dollar}</div>
							<img src={angle} alt="" />
						</div>
					</div>
				</div>
			</div>
			<div>
				<img src={chart} alt="" />
			</div>
		</CardStyle>
	);
};

const CardStyle = styled.div`
	display: flex;
	gap: 80px;
	background-color: #081517;
	padding: 20px;
	border-radius: 20px;
	border: 2px solid #132325;
	align-items: center;

	& .card_info_container {
		display: flex;
		gap: 20px;
	}
	& .card_info_inner_container {
		display: flex;

		gap: 10px;
	}
	& .card_info {
		display: flex;
		gap: 5px;
	}
`;

export default ComingSoonCard;
