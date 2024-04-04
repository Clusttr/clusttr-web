import { useEffect, useState } from 'react';
import styled from 'styled-components';
import aboutBGDesktop from '../../assets/desktop-about-us-bg.png';
import aboutBGMobile from '../../assets/mobile-about-us-bg.png';

const AboutClusttr = () => {
	return (
		<>
			<AboutClusttrStyle>
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
			</AboutClusttrStyle>
		</>
	);
};

const AboutClusttrStyle = styled.div`
	height: 100vh;
	text-align: center;
	background-color: #05020d;
	color: white;
	padding: 20px;
	padding-top: 75px;
	margin-top: 2rem;

	background-image: url(${aboutBGDesktop});
	background-size: cover;
	background-repeat: no-repeat;

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
		font-size: 0.85rem;
		font-weight: 500;
		font-family: Roobert;
		border: 1px solid white;
		border-radius: 20px;
		padding: 8px;
	}

	& .about_clusttr_sub_header {
		font-size: 2.8rem;
		font-weight: 500;
		line-height: 3.2rem;
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

	@media (max-width: 480px) {
		background-image: url(${aboutBGMobile});
		background-size: cover;
		background-repeat: no-repeat;
		margin-top: 0;

		& .about_clusttr_sub_header {
			line-height: 2.4rem;
			font-size: 1.9rem;
			max-width: 100%;
			margin-left: 0;
			margin-right: 0;
		}
		& .about_clusttr {
			font-size: 1rem;
			line-height: 1.4rem;
			max-width: 100%;
			margin-left: 0;
			margin-right: 0;
		}
	}
`;

export default AboutClusttr;
