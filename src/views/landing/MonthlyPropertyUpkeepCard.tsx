import styled from 'styled-components';

const MonthlyPropertyUpkeepCard = () => {
	return (
		<UpkeepDesign>
			<div className="upkeep_side_line"></div>
			<div className="upkeep_main_content">
				<div className="upkeep_main_top">
					<div>MONTHLY PROPERTY UPKEEP</div>
					<div>
						<div>70% done</div>

						<div>
							<div></div>
						</div>
					</div>
				</div>
				<div></div>
			</div>
		</UpkeepDesign>
	);
};

const UpkeepDesign = styled.div`
	display: flex;
	border: 1px solid #132325;
	border-radius: 10px;
	overflow: hidden;
	width: 55%;
	// position: absolute;
	.upkeep_side_line {
		height: 70px;
		border-radius: 10px 0 0 10px;
		width: 4.8%;
		background-image: linear-gradient(to bottom, #9cb08d, #ceabcb);
	}
	.upkeep_main_content {
		width: 100%;
		background-image: linear-gradient(to bottom, #040d10, #050e11);
		padding: 10px;
	}
	.upkeep_main_top {
		display: flex;
		justify-content: space-between;
		font-size: 0.7rem;
		font-weight: 500;
	}
	.upkeep_main_top > div:first-child {
		color: #5d7a76;
		font-size: 0.55rem;
	}
	.upkeep_main_top > div:last-child {
		color: #355358;
		font-size: 0.5rem;
	}
`;

export default MonthlyPropertyUpkeepCard;
