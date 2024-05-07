import styled from 'styled-components';
import house from '../../assets/why_clusttr/house.png';
import land from '../../assets/why_clusttr/land.png';
import coin from '../../assets/why_clusttr/coin.png';
import community from '../../assets/why_clusttr/community.png';

const WhyClusttr = () => {
	return (
		<WhyClusttrStyle>
			<div className="why_clusttr_container">
				<div className="why_clusttr_header_container">
					<div className="why_clusttr_header">Why Clusttr</div>
				</div>

				<div className="why_clusttr_top">
					<div className="why_clusttr_small_box selected_box why_clusttr_box">
						<div className="why_clusttr_small_box_icon_container">
							<img src={house} alt="" className="why_clusttr_icon" />
						</div>
						<div className="why_clusttr_box_header">Empowering Individuals</div>
						<div className="why_clusttr_box_info">
							Invest in premium properties with a fraction of the upfront cost &
							spread your investments across multiple properties and locations.
						</div>
					</div>
					<div className="why_clusttr_big_box why_clusttr_box">
						<div className="why_clusttr_big_box_icon_container">
							<img src={land} alt="" className="why_clusttr_icon" />
						</div>
						<div className="why_clusttr_box_header">
							Intelligent Co-Ownership Platform
						</div>
						<div className="why_clusttr_box_info">
							Connect with like-minded co-owners based on your preferences,
							goals, and investment strategies.
						</div>
					</div>
				</div>
				<div className="why_clusttr_bottom">
					<div className="why_clusttr_big_box why_clusttr_box">
						<div className="why_clusttr_big_box_icon_container">
							<img src={coin} alt="" className="why_clusttr_icon" />
						</div>
						<div className="why_clusttr_box_header">
							Comprehensive Financial Services
						</div>
						<div className="why_clusttr_box_info">
							Leave the hassles of property upkeep, maintenance, and management
							to our experienced team & enjoy a seamless, secure, and
							transparent financial ecosystem for co-owners.
						</div>
					</div>
					<div className="why_clusttr_small_box why_clusttr_box">
						<div className="why_clusttr_small_box_icon_container">
							<img src={community} alt="" className="why_clusttr_icon" />
						</div>
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
		grid-template-columns: 0.9fr 2.1fr;
		gap: 15px;
		margin-top: 15px;
	}

	& .why_clusttr_bottom {
		display: grid;
		grid-template-columns: 2.1fr 0.9fr;
		gap: 15px;
	}

	& .why_clusttr_small_box {
		background-color: #081517;
		padding: 20px 20px 125px 20px;
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		gap: 11px;
		border: 2px solid #132325;
	}
	& .why_clusttr_big_box {
		background-color: #081517;
		padding: 20px 35% 125px 20px;
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		gap: 11px;
		border: 2px solid #132325;
	}
	& .selected_box {
		border: 2px solid #77859b;
	}
	& .why_clusttr_small_box_icon_container {
		width: 20%;
	}
	& .why_clusttr_big_box_icon_container {
		width: 10%;
	}
	& .why_clusttr_icon {
		width: 100%;
	}
	& .why_clusttr_box_header {
		font-weight: 500;
		font-size: 1rem;
	}
	& .why_clusttr_box_info {
		font-weight: 500;
		font-size: 0.9rem;
		color: #c7d5d2;
		line-height: 22px;
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
	@media (max-width: 770px) {
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
