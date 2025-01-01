import styled from 'styled-components';
import joinClusttrLeftImage from '../../assets/join_clusttr/overlay_image.png';
import joinClusttrLogo from '../../assets/join_clusttr/join_clusttr.png';
// import fade from '../../assets/join_clusttr/gradient.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const JoinClusttr = () => {
	const [email, setEmail] = useState('');

	return (
		<JoinClusttrStyle>
			<div className="join_clusttr_container">
				{/* <img src={fade} alt="image" className="fade" /> */}

				<div className="join_clusttr_image_container">
					<img
						src={joinClusttrLeftImage}
						className="join_clusttr_image"
						alt="join_clusttr's image"
					/>
				</div>
				<div className="join_clusttr_newsletter_container">
					<div className="join_clusttr_logo_container">
						<img
							className="join_clusttr_logo"
							src={joinClusttrLogo}
							alt="image"
						/>
					</div>
					<div className="join_clusttr_comment">
						Subscribe to our newsletter to keep up with the latest crypto trends
					</div>
					<div className="join_clusttr_email_container">
						<input
							type="text"
							value={email}
							placeholder="example@example.com"
							className="join_clusttr_email"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
						<div
							className="join_clusttr_email_button"
							onClick={() => email && console.log('📧Email Sent!')}
						>
							<FontAwesomeIcon icon={faArrowRight} className="email_icon" />
						</div>
					</div>
				</div>
			</div>
		</JoinClusttrStyle>
	);
};

const JoinClusttrStyle = styled.div`
	color: black;
	background-color: #f5f5f5;
	margin: 90px 70px 0;

	border-radius: 15px;
	padding: 100px 120px;

	position: relative;
	overflow: hidden;
	& .fade {
		position: absolute;
		right: 0;
		top: 0;
	}
	& .join_clusttr_container {
		display: grid;
		grid-template-columns: 0.54fr 0.46fr;
		gap: 6rem;
	}
	& .join_clusttr_image_container {
		overflow: hidden;
	}
	& .join_clusttr_image {
		width: 95%;
	}
	& .join_clusttr_newsletter_container {
		display: flex;
		margin-left: 10px;
		flex-direction: column;
		justify-content: center;
		gap: 10px;
	}
	& .join_clusttr_comment {
		font-weight: 500;
		font-size: 1.4rem;
		line-height: 1.9rem;
	}
	& .join_clusttr_email_container {
		display: flex;
		align-items: center;
		margin-top: 10px;
	}
	& .join_clusttr_email {
		outline: none;
		border: none;
		color: black;
		padding: 15px 10px 15px 20px;
		width: 86%;
		font-size: 0.98rem;
		border-radius: 30px 0 0 30px;
	}
	& ::placeholder {
		color: #8d97a5;
	}
	& .join_clusttr_email_button {
		background-color: #00c187;
		padding: 17px 22px 17px 20px;
		color: white;
		border-radius: 0 30px 30px 0;
		cursor: pointer;
	}

	@media (min-width: 480px) and (max-width: 770px) {
		margin: 60px;

		padding: 7rem 20px 5rem;

		& .join_clusttr_container {
			display: flex;
			flex-direction: column;
			gap: 30px;
			align-items: center;
		}
		& .join_clusttr_image {
			width: 100%;
		}
		& .join_clusttr_newsletter_container {
			margin-left: 0;
			gap: 20px;
			align-items: center;
		}
		& .join_clusttr_logo {
			width: 100%;
		}
		& .join_clusttr_comment {
			font-size: 1.4rem;
			text-align: center;
			width: 60%;
		}
		.join_clusttr_email_container {
			width: 65%;
		}
		& .join_clusttr_email {
			padding: 16px 25px 17px 35px;
			font-size: 1rem;
		}
		& .join_clusttr_email_button {
			background-color: #00c187;
			padding: 15px 25px 15px 20px;
			color: white;
		}
		& .email_icon {
			font-size: 1rem;
		}
	}
	@media (max-width: 480px) {
		color: black;
		background-color: #f5f5f5;
		margin: 60px 20px;

		border-radius: 15px;
		padding: 25px 20px;

		& .join_clusttr_container {
			display: flex;
			flex-direction: column;
			gap: 30px;
		}
		& .join_clusttr_image {
			width: 100%;
		}
		& .join_clusttr_newsletter_container {
			margin-left: 0;
			gap: 10px;
		}
		& .join_clusttr_logo {
			width: 30%;
		}
		& .join_clusttr_comment {
			font-size: 1.1rem;
		}
	}
`;

export default JoinClusttr;
