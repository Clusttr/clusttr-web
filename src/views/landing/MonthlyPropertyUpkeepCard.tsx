import styled from 'styled-components';

type UpkeepCardProps = {
	card: object;
};

const MonthlyPropertyUpkeepCard = ({ card }: UpkeepCardProps) => {
	return (
		<UpkeepDesign
			style={
				card
			}
		>
			<div className="upkeep_side_line"></div>
			<div className="upkeep_main_content">
				<div className="upkeep_main_top">
					<div>MONTHLY PROPERTY UPKEEP</div>
					<div>
						<div>70% done</div>
						<div className="active_progress__bar"></div>
					</div>
				</div>
				<div className='blank_box'>
					<div className='first_box'></div>
					<div className='second_box'></div>
					<div></div>
					<div></div>
					<div className='fifth_box'></div>
					<div className='sixth_box'></div>
				</div>
			</div>
		</UpkeepDesign>
	);
};

const UpkeepDesign = styled.div`
	display: flex;
	border: 2px solid #0e191b;
	border-radius: 10px;
	overflow: hidden;
	width: 100%;
	position: absolute;
	.upkeep_side_line {
		height: 70px;
		border-radius: 10px 0 0 10px;
		width: 4.7%;
		background-image: linear-gradient(to bottom, #9cb08d, #ceabcb);
	}
	.upkeep_main_content {
		width: 100%;
		background-image: linear-gradient(to bottom, #040d10, #050e11);
		padding: 10px;
		display:flex;
		flex-direction:column;
		gap:10px;
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
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		color: #355358;
		font-size: 0.5rem;
	}
	.active_progress__bar {
		padding: 3.8px;
		border-radius: 50px;
		// border: 1px solid #9eaeb1;
		// border: 1px solid #c2e6eb;
		// border: 1px solid #929c9d;
		border: 1px solid #808080;
		position: relative;
		overflow: hidden;
	}
	.active_progress__bar::after {
		content: '';
		position: absolute;
		top: 2px;
		left: 2px;
		border-radius: 50px;
		padding: 2px;
		background-color: #00c187;
	}

	.blank_box {
		display: grid;
		grid-template-columns: auto auto auto auto auto auto;
		gap:8px;
		width: 90%;
	}
	.blank_box > div {
		background-color:#132325;
		width: 100%;
		height: 3px;
		
	}
	.first_box{
		grid-column-start: 1;
		grid-column-end: 3;
	}
	.second_box{
		grid-column-start: 3;
		grid-column-end: 5;
	}
	.fifth_box{
		grid-column-start: 1;
		grid-column-end: 3;
	}
	.sixth_box{
		grid-column-start: 3;
		grid-column-end: 7;
	}
`;

export default MonthlyPropertyUpkeepCard;
