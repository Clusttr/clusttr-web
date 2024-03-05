import styled from 'styled-components';
import aboutBG from '../../assets/desktop-about-us-bg.png';

const AboutClusttr = () => {
	return (
		<>
			<Style>
				<div className="about_clusttr_header_container">
					<div className="about_clusttr_header">About Clusttr</div>
				</div>

				<div className="about_clusttr_sub_header">
					Unlocking New Horizons in Real Estate Investment and Ownership
				</div>
				<div className="about_clusttr">
					Clusttr is poised to improve the real estate investment landscape by
					utilising available digital technologies. We address the longstanding
					issues of housing illiquidity and restricted access, aiming to provide
					practical solutions for the real estate market.
				</div>
			</Style>
		</>
	);
};

const Style = styled.div`
	height: 100vh;
	text-align: center;
	background-color: #05020d;
	color: white;
	padding: 20px;
	padding-top: 75px;
	margin-top: 2rem;
	
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;

	& .about_clusttr_header_container {
		width: 100%;
		max-width: 7rem;
		margin-left: auto;
		margin-right: auto;
	}

	& .about_clusttr_header {
		width: 100%;
		font-size: 13px;
		font-weight: 500;
		font-family: Roobert;
		border: 1px solid white;
		border-radius: 20px;
		padding: 8px;
	}

	& .about_clusttr_sub_header {
		font-size: 2.8rem;
		font-weight: 500;
		width: 100%;
		max-width: 80%;
		margin-left: auto;
		margin-right: auto;
	}

	& .about_clusttr {
		font-size: 1.2rem;
		font-weight: 500;
		line-height: 30px;
		width: 100%;
		max-width: 65%;
		margin-left: auto;
		margin-right: auto;
		color: #c8e3df;
	}

	@media (min-width: 400px) {
		background-image: url(${aboutBG});
		background-size: cover;
		background-repeat: no-repeat;
	}
`;

export default AboutClusttr;
