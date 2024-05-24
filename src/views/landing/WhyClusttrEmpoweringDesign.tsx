import styled from 'styled-components';
import ComingSoonCard from './ComingSoonCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const WhyClusttrEmpoweringDesign = () => {
	return (
		<EmpowerDesign>
				<div className="empower_design_header">
					<div>Sydney, Australia</div>
					<div className="empower_design_price">
						<div>PRICE </div>
						<div>
							<FontAwesomeIcon icon={faAngleDown} fontSize={8} />
						</div>
					</div>
				</div>

				<ComingSoonCard
					windowLength={10.75}
					beds={7}
					bathrooms={8}
					coins={2245.05}
					dollar={10540000}
					fake={false}
				/>
				<ComingSoonCard
					windowLength={10.75}
					beds={7}
					bathrooms={8}
					coins={2245.05}
					dollar={10540000}
					fake={true}
				/>
		</EmpowerDesign>
	);
};

const EmpowerDesign = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	position: absolute;
	bottom: -10%;
	z-index: 1;
	& .empower_design_header {
		font-weight: 500;
		display: flex;
		justify-content: space-between;
		font-size: 0.75rem;
	}
	& .empower_design_price {
		display: flex;
		gap: 5px;
		margin-right: 2px;
	}
	& .empower_design_price > :first-child {
		color: #5d7a76;
	}
`;
export default WhyClusttrEmpoweringDesign;
