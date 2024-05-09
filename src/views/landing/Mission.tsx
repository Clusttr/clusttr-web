import { useEffect, useState } from 'react';
import styled from 'styled-components';
import BG from '../../assets/our_mission_bg.png';

const Mission = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (screen.width <= 480) setIsMobile(true);
		else setIsMobile(false);
	}, []);

	return (
		<MissionContainer>
			{isMobile ? <></> : <img className="mission_bg" src={BG} alt="" />}
			<MissionStyle>
				<div className="title">
					<h2>Our Mission</h2>
				</div>
				<p>
					Over the years, the ability to acquire properties has continually
					shrunk, with the housing market being the{' '}
					<u>worst its been since 1984</u>. The average millennial can no longer
					afford to participate in the real estate industry worldwide.
				</p>
				<br />
				<p>
					Blockchain technology is enabling the team behind clusttr solve this
					problem by{' '}
					<span className="highlighted-text">
						democratising real estate investment in through fractional ownership
						and easy access to liquidity.
					</span>
				</p>
			</MissionStyle>
		</MissionContainer>
	);
};

const MissionContainer = styled.div`
	position: relative;
	& .mission_bg {
		position: absolute;
		left: 0;
		right: 0;
	}
`;
const MissionStyle = styled.div`
	color: white;
	text-align: center;
	font-size: 20px;
	line-height: 29.88px;
	padding: 50px 20px;
	max-width: 702px;
	margin-right: auto;
	margin-left: auto;

	& .title {
		border: 1.5px solid #edf2f6;
		margin-left: auto;
		margin-right: auto;
		width: max-content;
		padding: 2.5px 16px;
		font-size: 13px;
		font-weight: 500;
		border-radius: 24px;
		margin-bottom: 31px;

		& h2 {
			color: white;
			font-size: 14px;
		}
	}

	& .highlighted-text {
		color: #00c187;
	}

	@media (max-width: 480px) {
		font-size: 17px;
		padding: 50px 30px;
		margin-top: 15rem;

		& .title {
			& h2 {
				font-size: 13px;
			}
		}
	}
	@media (max-width: 770px) {
		font-size: 1.25rem;
	}
`;

export default Mission;
