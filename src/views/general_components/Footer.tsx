import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import ClusttrLogo from '../../assets/footer/clusttr_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faDiscord,
	faGithub,
	faLinkedinIn,
	faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
	const year = new Date().getFullYear();
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (screen.width <= 480) setIsMobile(true);
		else setIsMobile(false);
	}, []);

	return (
		<Style>
			<div className="footer_container">
				<div className="footer_details">
					<div className="footer_clusttr_logo_container">
						<img className="footer_clusttr_logo" src={ClusttrLogo} alt="" />
					</div>
					<div className="footer_details_links_container">
						<div className="footer_details_links">
							<div className="footer_details_links_header">Get Started</div>
							<div className="footer_details_link">Documentation</div>
							<div className="footer_details_link">Clusttr World (NFT)</div>
							<div className="footer_details_link">Download Clusttr</div>
						</div>
						<div className="footer_details_links">
							<div className="footer_details_links_header">Company</div>
							<div className="footer_details_link">Blog</div>
							<div className="footer_details_link">Partnership</div>
							<div className="footer_details_link">About Us</div>
							<div className="footer_details_link">Contact Us</div>
						</div>
						<div className="footer_details_links">
							<div className="footer_details_links_header">Legal</div>
							<div className="footer_details_link">Terms of Use</div>
							<div className="footer_details_link">Privacy Policy</div>
						</div>
						{isMobile ? (
							<div className="footer_details_links">
								<div className="footer_details_links_header">Community</div>
								<Link target="_blank" to="https://x.com/clusttr_io">
									<div className="footer_details_link">Twitter</div>
								</Link>
								<Link target="_blank" to="https://github.com/Clusttr">
									<div className="footer_details_link">Github</div>
								</Link>
								<div className="footer_details_link">Linkedin</div>
								<Link target="_blank" to="https://discord.gg/bu2TQDCq">
									<div className="footer_details_link">Discord</div>
								</Link>
							</div>
						) : (
							<></>
						)}
					</div>
					{/* <div className="made-in-abuja">
						<p>Made in Abuja, Available to the 🌍</p>
					</div> */}
				</div>
				<div className="more_details_container">
					<div className="more_details_rights">
						&copy; {year} Clusttr LTD. All rights reserved.
					</div>
					<div className="more_details_about">
						Clusttr is a platform that facilitates real estate investment and
						financial services. All investments involve risks, and past
						performance does not guarantee future results. Please consult with a
						financial advisor before making any investment decisions and read
						our{' '}
						<Link className="terms_of_use" to={'/'}>
							Terms of Use.
						</Link>
					</div>
					{isMobile ? (
						<></>
					) : (
						<div className="more_details_brand_icons">
							<Link target="_blank" to="https://x.com/clusttr_io">
								<FontAwesomeIcon icon={faXTwitter} size="lg" />
							</Link>
							<Link target="_blank" to="https://github.com/Clusttr">
								<FontAwesomeIcon icon={faGithub} size="lg" />
							</Link>
							<FontAwesomeIcon icon={faLinkedinIn} size="lg" />
							<Link target="_blank" to="https://discord.gg/bu2TQDCq">
								<FontAwesomeIcon icon={faDiscord} size="lg" />
							</Link>
						</div>
					)}
				</div>
			</div>
		</Style>
	);
};

export default Footer;

const Style = styled.footer`
	color: white;
	margin-top: 100px;
	& .footer_container {
		display: grid;
		grid-template-columns: 1.25fr 0.75fr;
		padding: 0 70px;
		border-top: 1px solid #252928;
	}
	& .footer_details {
		display: flex;
		flex-direction: column;
		padding-top: 70px;
		gap: 50px;
		border-right: 1px solid #252928;
	}
	& .footer_clusttr_logo_container {
		width: 9%;
	}
	& .footer_clusttr_logo {
		width: 100%;
	}
	& .footer_details_links_container {
		display: flex;
		gap: 150px;
		padding-bottom: 110px;
	}
	& .footer_details_links {
		display: flex;
		flex-direction: column;
		gap: 22px;
	}
	.footer_details_links > a {
		text-decoration: none;
	}
	& .footer_details_links_header {
		font-weight: 500;
		font-size: 1.05rem;
	}
	& .footer_details_link {
		font-size: 0.8rem;
		font-weight: 500;
		cursor: pointer;
		color: #687370;
	}
	& .terms_of_use {
		color: #687370;
	}
	& .made-in-abuja {
		// text-align: center;
		padding: 82px 0 15px 0;
		font-size: 0.85rem;
		color: #687370;
		font-weight: 500;
		@media (min-width: 480px) {
			text-align: left;
		}
	}
	& .more_details_container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 20px 0 85px;
		gap: 25px;
		color: #687370;
	}
	& .more_details_rights {
		font-weight: 500;
		font-size: 0.9rem;
	}
	& .more_details_about {
		font-weight: 500;
		font-size: 0.95rem;
		line-height: 22px;
		color: #687370;
	}
	& .more_details_brand_icons {
		display: flex;
		gap: 14px;
		color: white;
		cursor: pointer;
	}

	@media (max-width: 770px) {
		& .footer_container {
			display: flex;
			flex-direction: column;
			padding: 0;
		}

		& .footer_details {
			padding: 30px 40px 20px;
			gap: 35px;
			border-right: none;
			border-bottom: 1px solid #252928;
		}
		& .footer_clusttr_logo_container {
			width: 15%;
		}
		& .footer_details_links_container {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 45px;
			padding-bottom: 45px;
		}
		& .footer_details_links {
			display: flex;
			flex-direction: column;
		}
		& .footer_details_links_header {
			font-size: 1.1rem;
		}
		& .footer_details_link {
			font-size: 0.9rem;
		}

		& .more_details_container {
			padding: 35px 15px 40px;
			gap: 25px;
		}
		& .more_details_rights {
			font-weight: 500;
			font-size: 1rem;
		}
		& .more_details_about {
			font-size: 1rem;
			padding-right: 27px;
			line-height: 25px;
		}
	}

	@media (min-width: 480px) and (max-width: 770px) {
		& .footer_details {
			padding: 50px 20px 20px 60px;
		}
		& .footer_details_links_container {
			grid-template-columns: 1fr 1fr 1fr;
			padding-bottom: 8rem;
			gap: 0;
		}

		& .more_details_container {
			padding: 35px 30px 40px 60px;
			gap: 25px;
		}
	}

	a {
		color: inherit;
	}
`;
