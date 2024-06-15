import styled from 'styled-components';
import MonthlyPropertyUpkeepCard from './MonthlyPropertyUpkeepCard';

const WhyClusttrFinancialServicesDesign = () => {
	return (
		<ServicesDesign>
			<div>
				<MonthlyPropertyUpkeepCard card={{ top: 0, zIndex: 3 }} />
				<MonthlyPropertyUpkeepCard
					card={{ top: '8px', right: '-2%', zIndex: 2 }}
				/>
				<MonthlyPropertyUpkeepCard
					card={{ top: '16px', right: '-4%', zIndex: 1 }}
				/>
			</div>
		</ServicesDesign>
	);
};

const ServicesDesign = styled.div`
	// padding: 110px 0 160px;
	
	> div {
		margin: 74.5px 20% 0;
		padding: 112.25px;
		position: relative;
		display: flex;
		// flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

export default WhyClusttrFinancialServicesDesign;
