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
	windowLength: number;
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
			<img className="grid_img" src={grid} alt="" />
			<div className="card_info_container">
				<div>
					<img src={house} alt="" />
				</div>
				<div className="card_info_inner_container">
					<div className="card_info_inner_container_contents">
						<div className="card_info">
							<img src={windowEdge} alt="" />
							<div>{windowLength} ft</div>
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
					<div className="card_info_inner_container_contents">
						<div className="card_info">
							<img src={coinsIcon} alt="" />
							<div>${coins}</div>
							<img src={angle} alt="" />
						</div>
						<div className="card_info">
							<img src={dollarIcon} alt="" />
							<div>${dollar}</div>
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
	gap: 30px;
	background-color: #081517;
	padding: 20px;
	border-radius: 20px;
	border: 2px solid #132325;
	align-items: center;
	position: relative;
	overflow: hidden;

	& .grid_img {
		position: absolute;
		right: 0;
	}
	& .card_info_container {
		display: flex;
		gap: 20px;
	}
	& .card_info_inner_container {
		display: flex;
		width: 100%;
		min-width: 300px;
		gap: 20px;
	}
	& .card_info_inner_container_contents {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	& .card_info {
		display: flex;
		align-items: center;
		gap: 8px;
		font-weight: 500;
		font-size: 0.8rem;
	}
`;

export default ComingSoonCard;
