import styled from 'styled-components';
import MonthlyPropertyUpkeepCard from './MonthlyPropertyUpkeepCard';

const WhyClusttrFinancialServicesDesign = () => {
	return (
		<ServicesDesign>
			<div>
				<MonthlyPropertyUpkeepCard />
				<MonthlyPropertyUpkeepCard />
				<MonthlyPropertyUpkeepCard />
			</div>
		</ServicesDesign>
	);
};

const ServicesDesign = styled.div`
	// padding: 110px 0 160px;
	> div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 10px;
		// position: relative;
	}
`;

export default WhyClusttrFinancialServicesDesign;
