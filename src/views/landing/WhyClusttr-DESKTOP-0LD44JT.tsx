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
					<div className="why_clusttr_small_box">
						<div>
							<img src={house} alt="" />
						</div>
						<div>Empowering Individuals</div>
						<div>
							Invest in premium properties with a fraction of the upfront cost &
							spread your investments across multiple properties and locations.
						</div>
					</div>
					<div className="why_clusttr_big_box">
						<div>
							<img src={land} alt="" />
						</div>
						<div>Intelligent Co-Ownership Platform</div>
						<div>
							Connect with like-minded co-owners based on your preferences,
							goals, and investment strategies.
						</div>
					</div>
				</div>
				<div className="why_clusttr_bottom">
					<div className="why_clusttr_big_box">
						<div>
							<img src={coin} alt="" />
						</div>
						<div>Comprehensive Financial Services</div>
						<div>
							Leave the hassles of property upkeep, maintenance, and management
							to our experienced team & enjoy a seamless, secure, and
							transparent financial ecosystem for co-owners.
						</div>
					</div>
					<div className="why_clusttr_small_box">
						<div>
							<img src={community} alt="" />
						</div>
						<div>Community Aligned</div>
						<div>
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
		margin-left: auto;
		margin-right: auto;
	}

	& .why_clusttr_header {
		width: 100%;
		font-size: 13px;
		font-weight: 500;
		font-family: Roobert;
		border: 1px solid white;
		border-radius: 20px;
		padding: 8px;
	}

	& .why_clusttr_top {
		display: grid;
		grid-template-columns: 0.5fr 1.5fr;
		gap: 15px;
	}

	& .why_clusttr_bottom {
		display: grid;
		grid-template-columns: 1.5fr 0.5fr;
		gap: 15px;
	}
	& .why_clusttr_small_box {
		background-color: #081517;
		padding: 50px 20px 125px 30px;
		border-radius: 20px;
	}
	& .why_clusttr_big_box {
		background-color: #081517;
		padding: 50px 20px 125px 30px;
		border-radius: 20px;
	}
`;

export default WhyClusttr;
