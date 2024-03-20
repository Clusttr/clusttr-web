import styled from 'styled-components';

const Mission = () => {
	return (
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
	);
};

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
`;

export default Mission;
