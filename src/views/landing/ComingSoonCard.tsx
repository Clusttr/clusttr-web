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
	blankDetails: boolean;
	isEmpoweringDesign: boolean;
};

const ComingSoonCard = ({
	windowLength,
	beds,
	bathrooms,
	coins,
	dollar,
	blankDetails,
	isEmpoweringDesign,
}: CardType) => {
	return (
		<CardStyle>
			<img className="grid_img" src={grid} alt="" />
			<div className="card_info_container">
				<div>
					<img src={house} alt="" />
				</div>
				<div
					className="card_info_inner_container"
					style={!isEmpoweringDesign ? { minWidth: '300px' } : { minWidth: 0 }}
				>
					<div className="card_info_inner_container_contents">
						<div className="card_info">
							<img src={windowEdge} alt="" />
							{blankDetails === false ? (
								<div>{windowLength.toLocaleString()} ft</div>
							) : (
								<div className="card_info_fake"></div>
							)}
						</div>
						<div className="card_info">
							<img src={bed} alt="" />
							{blankDetails === false ? (
								<div>{beds}</div>
							) : (
								<div className="card_info_fake"></div>
							)}
						</div>
						<div className="card_info">
							<img src={bathroom} alt="" />
							{blankDetails === false ? (
								<div>{bathrooms}</div>
							) : (
								<div className="card_info_fake"></div>
							)}
						</div>
					</div>
					<div className="card_info_inner_container_contents">
						<div className="card_info">
							<img src={coinsIcon} alt="" />
							{blankDetails === false ? (
								<div>${coins.toLocaleString()}</div>
							) : (
								<div className="card_info_fake"></div>
							)}
							<img src={angle} alt="" />
						</div>
						<div className="card_info">
							<img src={dollarIcon} alt="" />
							{blankDetails === false ? (
								<div>${dollar.toLocaleString()}</div>
							) : (
								<div className="card_info_fake"></div>
							)}
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
	& .card_info_fake {
		width: 3.4rem;
		height: 0.8rem;
		background-color: #292929;
	}
`;

export default ComingSoonCard;
