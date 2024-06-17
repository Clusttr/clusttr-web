import styled from 'styled-components';
import innovationImg from '../../assets/our_values_icons/innovative_icon.png';
import communicativeImg from '../../assets/our_values_icons/collaborative_icon.png';
import integrityImg from '../../assets/our_values_icons/professional_icon.png';
import strokes from '../../assets/our_values_bg/strokes.png';
import fade from '../../assets/our_values_bg/fade.png';

type CardType = {
	imgUrl: string;
	title: string;
	info: string;
	bgColor: string;
};

const OurValuesCard = ({ imgUrl, title, info, bgColor }: CardType) => {
	return (
		<div className="our_values_card" style={{ backgroundColor: bgColor }}>
			<div>
				<img src={imgUrl} alt="image" />
			</div>
			<div className="our_values_title">{title}</div>
			<div className="our_values_info">{info}</div>
		</div>
	);
};

const OurValues = () => {
	return (
		<OurValuesStyle>
			<img src={strokes} alt="image" className="strokes" />
			<img src={fade} alt="image" className="fade" />
			<div className="our_values_header">Our Values</div>
			<div className="our_values_cards_container">
				<OurValuesCard
					imgUrl={innovationImg}
					title={`Innovation`}
					info={`One of the driving forces behind our product has been the will to
						innovate and solve problems regarding the current housing and real
						estate market. Moving forward, innovation will continue to be part
						of our philosophy and values, looking to always stay ahead of the
						curve and research potential avenues to make positively impacts on
						our customers and market.`}
					bgColor="#E5FAF4"
				/>
				<OurValuesCard
					imgUrl={communicativeImg}
					title={`Communicative`}
					info={`We understand the importance of a community centered project and how
						those participating within our platform are the true stars of the
						show. The team behind clusttr engages in activities that carries the
						whole community along, from collecting feedbacks, to hosting
						community sessions, we ensure that the community is never left out
						while we are building.`}
					bgColor="#FAE2F5"
				/>
				<OurValuesCard
					imgUrl={integrityImg}
					title={`Integrity`}
					info={`We believe that one way trust comes by is by others seeing you do
						things the right thing. As a company providing value in the housing
						market, we make sure that we are honest. We understand the
						responsibilities tied to what we do and never want to be viewed in a
						bad light. As we continue to operate, we hope our market sees us as
						a company worth trusting.`}
					bgColor="#D9E5FC"
				/>
			</div>
		</OurValuesStyle>
	);
};

const OurValuesStyle = styled.div`
	color: white;
	position: relative;
	overflow: hidden;

	background-color: #050e11;
	width: 95%;
	margin: 45px auto 50px auto;
	border: 2px #163340 dashed;
	border-radius: 30px;
	padding: 45px 55px 40px 55px;
	z-index: 2;

	& .strokes {
		position: absolute;
		right: 0;
		top: 0;
	}
	& .fade {
		position: absolute;
		right: 0;
		bottom: 0;

		rotate: 90deg;
	}
	& .our_values_header {
		font-size: 6.1rem;
		line-height: 7.7rem;
		width: 40%;
	}
	& .our_values_cards_container {
		margin-top: 25px;
		display: flex;
		gap: 15px;
	}
	& .our_values_card {
		padding: 20px 25px 40px 20px;
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	& .our_values_title {
		color: black;
		font-size: 1.2rem;
		margin-top: 4px;
	}
	& .our_values_info {
		color: #355358;
		font-weight: 500;
		font-size: 1.05rem;
		line-height: 1.7rem;
	}

	@media (max-width: 770px) {
		padding: 45px 10px 15px;

		& .strokes {
			right: -50%;
		}
		& .our_values_header {
			font-size: 1.4rem;
			font-weight: 500;
			line-height: 0;
			width: 100%;
			text-align: center;
		}
		& .our_values_cards_container {
			position: relative;
			margin-top: 30px;
			display: flex;
			flex-direction: column;
			gap: 15px;
		}
		& .our_values_card {
			padding: 20px 25px 40px 20px;
			border-radius: 20px;
			display: flex;
			flex-direction: column;
			gap: 10px;
		}
	}

	@media (min-width: 480px) and (max-width: 770px) {
		padding: 45px 10px;

		& .strokes {
			right: 0;
		}
		& .fade {
			bottom: 50%;
		}
		& .our_values_header {
			font-size: 3.3rem;
			text-align: left;
			padding: 25px 20px 0;
		}
		& .our_values_cards_container {
			margin-top: 60px;
			gap: 25px;
			padding: 0 25px;
		}
		& .our_values_card {
			padding: 35px 25px 25px 20px;
		}
		& .our_values_title {
			font-size: 1.25rem;
			font-weight: 500;
		}
		& .our_values_info {
			font-size: 1.25rem;
			line-height: 1.9rem;
		}
	}
`;

export default OurValues;
