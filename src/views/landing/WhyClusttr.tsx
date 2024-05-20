import styled from 'styled-components';
// import house from '../../assets/why_clusttr/house.png';
// import land from '../../assets/why_clusttr/land.png';
// import coin from '../../assets/why_clusttr/coin.png';
// import community from '../../assets/why_clusttr/community.png';
import person1 from '../../assets/why_clusttr/person1.png';
import person2 from '../../assets/why_clusttr/person2.png';
import person3 from '../../assets/why_clusttr/person3.png';
import person4 from '../../assets/why_clusttr/person4.png';

const WhyClusttr = () => {
	return (
		<WhyClusttrStyle>
			<div className="why_clusttr_container">
				<div className="why_clusttr_header_container">
					<div className="why_clusttr_header">Why Clusttr</div>
				</div>

				<div className="why_clusttr_top">
					<div className="why_clusttr_big_box selected_box why_clusttr_box">
						{/* <div className="why_clusttr_small_box_icon_container">
							<img src={house} alt="" className="why_clusttr_icon" />
						</div> */}
						<div className="why_clusttr_box_header">Empowering Individuals</div>
						<div className="why_clusttr_box_info">
							Invest in premium properties with a fraction of the upfront cost &
							spread your investments across multiple properties and locations.
						</div>
					</div>
					<div className="why_clusttr_small_box why_clusttr_box">
						{/* <div className="why_clusttr_big_box_icon_container">
							<img src={land} alt="" className="why_clusttr_icon" />
						</div> */}
						<div className="why_clusttr_box_header">
							Intelligent Co-Ownership Platform
						</div>
						<div className="why_clusttr_box_info">
							Connect with like-minded co-owners based on your preferences,
							goals, and investment strategies.
						</div>
						<div className="platform_container">
							<div className="first_dotted_box"></div>
							<div className="platform_inner_container">
								<div className="platform_top_container">
									<div className="platform_top_first_stack">
										<div>4 bedroom duplex</div>
										{/* <Link to="/" >View details</Link> */}
										<div>View details</div>
									</div>
									<div className="platform_top_second_stack">
										<div></div>
										<div></div>
									</div>
									<div className="platform_top_third_stack">
										<div>
											<div></div>
											<div>$2,245.05</div>
											<div></div>
										</div>
										<div>70% subscribed</div>
									</div>
								</div>
								<div className="platform_bottom_container">
									<div className="platform_bottom_users">
										<div className="fake_user_container">
											<img
												src={person1}
												alt="fake_users"
												className="fake_users"
											/>
										</div>
										<div className="fake_user_container">
											<img
												src={person2}
												alt="fake_users"
												className="fake_users"
											/>
										</div>
										<div className="fake_user_container">
											<img
												src={person3}
												alt="fake_users"
												className="fake_users"
											/>
										</div>
										<div className="fake_user_container">
											<img
												src={person4}
												alt="fake_users"
												className="fake_users"
											/>
										</div>
									</div>
									<div className='fake_user_amount_subscribed'>+12 others are subscribed</div>
								</div>
							</div>
							<div className="second_dotted_box"></div>
							<div className="background_grid"></div>
						</div>
					</div>
				</div>
				<div className="why_clusttr_bottom">
					<div className="why_clusttr_small_box why_clusttr_box">
						{/* <div className="why_clusttr_big_box_icon_container">
							<img src={coin} alt="" className="why_clusttr_icon" />
						</div> */}
						<div className="why_clusttr_box_header">
							Comprehensive Financial Services
						</div>
						<div className="why_clusttr_box_info">
							Leave the hassles of property upkeep, maintenance, and management
							to our experienced team & enjoy a seamless, secure, and
							transparent financial ecosystem for co-owners.
						</div>
					</div>
					<div className="why_clusttr_big_box why_clusttr_box">
						{/* <div className="why_clusttr_small_box_icon_container">
							<img src={community} alt="" className="why_clusttr_icon" />
						</div> */}
						<div className="why_clusttr_box_header">Community Aligned</div>
						<div className="why_clusttr_box_info">
							Join a community witth fellow co-owners, investors, and experts
							who are here to share knowledge and insights.
						</div>
					</div>
				</div>
			</div>
		</WhyClusttrStyle>
	);
};

const WhyClusttrStyle = styled.div`
	color: white;

	& .why_clusttr_container {
		display: flex;
		flex-direction: column;
		padding: 50px 70px 0 70px;
		gap: 15px;
	}
	& .why_clusttr_header_container {
		width: 100%;
		max-width: 7rem;
		text-align: center;
		margin: 0 auto 20px auto;
	}

	& .why_clusttr_header {
		width: 100%;
		font-size: 0.8rem;
		font-weight: 500;
		font-family: Roobert;
		border: 1px solid white;
		border-radius: 20px;
		padding: 8px;
	}

	& .why_clusttr_top {
		display: grid;
		grid-template-columns: 1.8fr 1.2fr;
		gap: 15px;
		margin-top: 15px;
	}
	& .why_clusttr_top > div {
		align-items: center;
		text-align: center;
	}

	& .why_clusttr_top > div:first-child > div:nth-child(2) {
		width: 57%;
	}
	& .why_clusttr_top > div > div:nth-child(2) {
		width: 77%;
	}

	& .why_clusttr_bottom {
		display: grid;
		grid-template-columns: 1.2fr 1.8fr;
		gap: 15px;
	}
	& .why_clusttr_box {
		background-color: #081517;
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		gap: 11px;
		border: 2px solid #132325;
		padding: 60px 20px 125px;
	}
	// & .why_clusttr_big_box {
	// 	padding: 60px 20px 125px;
	// }
	// & .why_clusttr_small_box {
	// 	padding: 60px 20px 125px;
	// }
	& .selected_box {
		border: 2px solid #77859b;
	}
	// & .why_clusttr_small_box_icon_container {
	// 	width: 20%;
	// }
	// & .why_clusttr_big_box_icon_container {
	// 	width: 10%;
	// }
	// & .why_clusttr_icon {
	// 	width: 100%;
	// }
	& .why_clusttr_box_header {
		font-weight: 500;
		font-size: 1rem;
	}
	& .why_clusttr_box_info {
		font-weight: 500;
		font-size: 0.9rem;
		color: #5d7a76;
		line-height: 22px;
	}

	// Intelligent Co-Ownership Platform
	.platform_container {
		width: 80%;
		// position: relative;
	}
	.platform_container > .first_dotted_box,
	.second_dotted_box {
		border-radius: 10px;
		padding: 40px 0;
		width: 50%;
		// position: absolute;
	}
	.first_dotted_box {
		border: 2px dashed #00c187;
		border-left: none;
		border-bottom: none;
	}
	.second_dotted_box {
		border: 2px dashed #00c187;
		border-top: none;
		border-right: none;
	}
	.platform_inner_container {
		display: flex;
		flex-direction: column;
	}
	.platform_top_container {
		display: flex;
		flex-direction: column;
		background-color: #0b191b;
	}
	.platform_top_first_stack {
		display: flex;
		justify-content: space-between;
	}
	.platform_top_third_stack {
		display: flex;
		justify-content: space-between;
	}
	.platform_bottom_container {
		display: flex;
		padding: 40px 0;
		
	}
	.platform_bottom_users {
		width:20%;
		// width: 100%;
		display:flex;
		align-items: center;
		position: relative;
	}
	.platform_bottom_users > div:first-child {
		background-color: #ffffff;
	}
	.platform_bottom_users > div:nth-child(2) {
		left: 13px;
		background-color: #9ce3f1;
	}
	.platform_bottom_users > div:nth-child(3) {
		left: 26px;
		display: flex;
		background-color: #f7def4;
	}
	.platform_bottom_users > div:nth-child(4) {
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
		top: 0;
	}
	.fake_users {
		width: 125%;
	}
	.fake_user_amount_subscribed{
		font-size: 0.7rem;
	}

	@media (max-width: 480px) {
		& .why_clusttr_container {
			padding: 50px 20px 30px;
			gap: 25px;
		}

		& .why_clusttr_top {
			display: flex;
			flex-direction: column;
			gap: 25px;

			margin-top: 0;
		}

		& .why_clusttr_bottom {
			display: flex;
			flex-direction: column;
			gap: 25px;
		}

		& .why_clusttr_box {
			gap: 15px;
			padding: 20px;
		}

		& .why_clusttr_small_box_icon_container {
			width: 17%;
		}
		& .why_clusttr_big_box_icon_container {
			width: 25%;
		}
		& .why_clusttr_box_header {
			font-size: 1.3rem;
		}
		& .why_clusttr_box_info {
			font-size: 1rem;
			line-height: 22px;
		}
	}
	@media (min-width: 480px) and (max-width: 770px) {
		& .why_clusttr_container {
			padding: 50px 40px 30px;
			gap: 15px;
		}

		& .why_clusttr_header {
			font-size: 0.9rem;
		}

		& .why_clusttr_top {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 15px;
			margin-top: 15px;
		}

		& .why_clusttr_bottom {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 15px;
		}

		& .why_clusttr_box {
			gap: 15px;
			padding: 20px 20px 60px;
		}

		& .why_clusttr_small_box_icon_container {
			width: 25%;
		}
		& .why_clusttr_big_box_icon_container {
			width: 25%;
		}
		& .why_clusttr_box_header {
			font-size: 1.1rem;
		}
		& .why_clusttr_box_info {
			font-size: 1.07rem;
			line-height: 30px;
		}
	}
`;

export default WhyClusttr;
