import styled from 'styled-components';
import person1 from '../../assets/why_clusttr/person1.png';
import person2 from '../../assets/why_clusttr/person2.png';
import person3 from '../../assets/why_clusttr/person3.png';
import person4 from '../../assets/why_clusttr/person4.png';
import coin from '../../assets/why_clusttr/platform_coin.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const WhyClusttrCoOwnershipDesign = () => {
	return (
		<BoxDesign>
			<div className="first_dotted_box dotted_box"></div>
			<div className="design_inner_container">
				<div className="design_top_container">
					<div className="design_top_first_stack">
						<div className="design_top_first_stack_info  ">
							4 bedroom duplex
						</div>
						{/* <Link to="/" >View details</Link> */}
						<div className="design_top_first_stack_details ">View details</div>
					</div>
					<div className="design_top_second_stack">
						<div className="design_fill_bar_outer"></div>
						<div className="design_fill_bar_inner"></div>
					</div>
					<div className="design_top_third_stack">
						<div className="design_top_third_stack_earn">
							<div>
								<img src={coin} alt="coin" />
							</div>
							<div>$2,245.05</div>
							<div>
								<FontAwesomeIcon
									icon={faAngleUp}
									color="#00C187"
									fontSize={11}
								/>
							</div>
						</div>
						<div className="design_top_third_stack_subscribed">
							70% subscribed
						</div>
					</div>
				</div>
				<div className="design_bottom_container">
					<div className="design_bottom_users">
						<div className="fake_user_container">
							<img src={person1} alt="fake_users" className="fake_users" />
						</div>
						<div className="fake_user_container">
							<img src={person2} alt="fake_users" className="fake_users" />
						</div>
						<div className="fake_user_container">
							<img src={person3} alt="fake_users" className="fake_users" />
						</div>
						<div className="fake_user_container">
							<img src={person4} alt="fake_users" className="fake_users" />
						</div>
					</div>
					<div className="fake_user_amount_subscribed">
						+12 others are subscribed
					</div>
				</div>
			</div>
			<div className="second_dotted_box dotted_box"></div>
		</BoxDesign>
	);
};

const BoxDesign = styled.div`
	// Intelligent Co-Ownership design

	width: 80%;
	cursor: default;
	position: relative;

	.first_dotted_box,
	.second_dotted_box {
		border-radius: 10px;
		padding: 40px 0;
		width: 50%;
		position: absolute;
	}
	.first_dotted_box {
		border: 2px dashed #00c187;
		border-left: none;
		border-bottom: none;
		top: -58%;
		left: -35%;
	}
	.second_dotted_box {
		border: 2px dashed #00c187;
		border-top: none;
		border-right: none;
		bottom: -32%;
		right: -30%;
	}

	.design_inner_container {
		display: flex;
		flex-direction: column;
	}
	.design_top_container {
		display: flex;
		flex-direction: column;
		background-color: #040d10;
		border: 1px solid #0b191b;
		padding: 10px 13px;
		border-radius: 10px;
		gap: 8px;
		z-index: 2;
	}
	.design_top_first_stack {
		display: flex;
		justify-content: space-between;
	}
	.design_top_first_stack > div {
		font-size: 0.65rem;
		font-weight: 500;
	}
	.design_top_first_stack_info {
		color: #5d7a76;
	}
	.design_top_first_stack_details {
		color: #fcfcfe;
		text-decoration: underline;
		letter-spacing: 0.2px;
	}
	.design_top_second_stack {
		width: 50%;
		position: relative;
	}
	.design_fill_bar_inner {
		padding: 2.5% 100%;
		background-color: #171723;
		// z-index: 3;
	}
	.design_fill_bar_outer {
		padding: 2.5% 70%;
		background-color: #00c187;
		// z-index: 4;
		position: absolute;
		top: 0;
	}
	.design_top_third_stack {
		display: flex;
		justify-content: space-between;
	}
	.design_top_third_stack > div {
		font-size: 0.67rem;
		font-weight: 500;
	}
	.design_top_third_stack_earn {
		display: flex;
		align-items: center;
		gap: 0.3rem;
		color: #fcfcfe;
	}
	.design_top_third_stack_subscribed {
		color: #00c187;
	}
	.design_bottom_container {
		display: flex;
		padding: 11px 0 10px 5px;
	}
	.design_bottom_users {
		width: 20%;
		// width: 100%;
		display: flex;
		align-items: center;
		position: relative;
	}
	.design_bottom_users > div:first-child {
		background-color: #ffffff;
	}
	.design_bottom_users > div:nth-child(2) {
		left: 13px;
		background-color: #9ce3f1;
	}
	.design_bottom_users > div:nth-child(3) {
		left: 26px;
		display: flex;
		background-color: #f7def4;
	}
	.design_bottom_users > div:nth-child(4) {
		left: 39px;
		background-color: #9ce3f1;
	}
	.fake_user_container {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		border: 1px solid #00c187;
		overflow: hidden;
		position: absolute;
		top: -40%;
	}
	.fake_users {
		width: 125%;
	}
	.fake_user_amount_subscribed {
		font-size: 0.7rem;
	}

	@media (max-width: 480px) {
		width: 100%;

		.dotted_box,
		.design_bottom_container {
			display: none;
		}
		.design_inner_container {
			align-items: flex-end;
		}
		.design_top_container {
			border: 1.2px solid #0b191b;
		}
		.design_top_container {
			width: 90%;
		}
	}
`;

export default WhyClusttrCoOwnershipDesign;
