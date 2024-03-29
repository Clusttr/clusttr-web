import { styled } from 'styled-components';
import ClusttrLogo from '../../assets/footer/clusttr_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faDiscord,
	faGithub,
	faLinkedinIn,
	faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	const year = new Date().getFullYear();

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
					</div>
					<div className="made-in-abuja">
						{/* <p>Made in Abuja, Available to the 🌍</p> */}
					</div>
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
						our Terms of Use.
					</div>
					<div className="more_details_brand_icons">
						<FontAwesomeIcon icon={faXTwitter} size="lg" />
						<FontAwesomeIcon icon={faGithub} size="lg" />
						<FontAwesomeIcon icon={faLinkedinIn} size="lg" />
						<FontAwesomeIcon icon={faDiscord} size="lg" />
					</div>
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
	}
	& .footer_details_links {
		display: flex;
		flex-direction: column;
		gap: 22px;
	}
	& .footer_details_links_header {
		font-weight: 500;
		font-size: 1.05rem;
	}
	& .footer_details_link {
		font-size: 0.8rem;
		font-weight: 500;
		color: #687370;
		cursor: pointer;
	}
	& .made-in-abuja {
		// text-align: center;
		padding: 82px 0 15px 0;
		font-size: 0.85rem;
		color: #687370;
		font-weight: 500;
		@media (min-width: 400px) {
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
	}
	& .more_details_brand_icons {
		display: flex;
		gap: 14px;
		color: white;
		cursor: pointer;
	}
`;
