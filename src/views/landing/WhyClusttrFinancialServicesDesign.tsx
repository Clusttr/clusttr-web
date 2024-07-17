import styled from 'styled-components';
import MonthlyPropertyUpkeepCard from './MonthlyPropertyUpkeepCard';

const WhyClusttrFinancialServicesDesign = () => {
	return (
		<ServicesDesign>
			<div>
				<MonthlyPropertyUpkeepCard
					card={{ top: 0, right: 0, zIndex: 3 }}
					hideCard={true}
				/>
				<MonthlyPropertyUpkeepCard
					card={{ top: '8px', right: '-2%', zIndex: 2 }}
					hideCard={false}
				/>
				<MonthlyPropertyUpkeepCard
					card={{ top: '16px', right: '-4%', zIndex: 1 }}
					hideCard={false}
				/>
			</div>
		</ServicesDesign>
	);
};

const ServicesDesign = styled.div`
	// padding: 110px 0 160px;
	display: flex;
	justify-content: center;
	align-items: center;

	> div {
		margin: 74.5px 20% 0;
		padding: 112.25px 0;
		width: 60%;
		position: relative;
	}

	@media (min-width: 480px) and (max-width: 770px) {
		display: unset;

		> div {
			width: 145%;
			margin: 0;
			padding: 0;
			position: absolute;
		}
	}
	@media (max-width: 480px) {
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;

		> div {
			width: 80%;
			margin: 0;
			padding: 0;
			position: relative;
		}
	}
`;

export default WhyClusttrFinancialServicesDesign;
