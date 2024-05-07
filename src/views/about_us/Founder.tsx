import styled from 'styled-components';
import founder from '../../assets/tochi.png';
import leftQuote from '../../assets/quotes_left.png';
import rightQuote from '../../assets/quotes_right.png';
import MobileLeftQuote from '../../assets/mobile_quote_left.png';
import MobileRightQuote from '../../assets/mobile_quote_right.png';
import ellipse_1 from '../../assets/founder_bg/ellipse_1.png';
import ellipse_2 from '../../assets/founder_bg/ellipse_2.png';
import { useEffect, useState } from 'react';

const Founder = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (screen.width <= 480) setIsMobile(true);
		else setIsMobile(false);
	}, []);

	return (
		<FounderStyle>
			<div className="founder_container">
				<img src={ellipse_1} alt="image" className="ellipse_1" />

				<div className="founder_details">
					<div className="founder_image_container">
						<img
							src={founder}
							className="founder_image"
							alt="founder's image"
						/>
					</div>
					<div className="founder_name_and_title">
						<div className="founder_name">Tochukwu</div>
						<div className="founder_title">Founder, Clusttr</div>
					</div>
				</div>
				<div className="founder_comment_container">
					{isMobile ? (
						<div className="left_quote_container">
							<img
								className="left_quote quote"
								src={MobileLeftQuote}
								alt="image"
							/>
						</div>
					) : (
						<div className="left_quote_container">
							<img className="left_quote quote" src={leftQuote} alt="image" />
						</div>
					)}

					<div className="founder_comment">
						In an era defined by digital innovation and the democratization of
						finance, the world of real estate seems stagnant and has resisted
						innovation. Clusttr is working towards innovating how we access,
						invest in, and co-own real estate assets in a way that benefits all,
						not just the rich.
					</div>
					{isMobile ? (
						<div className="right_quote_container">
							<img
								src={MobileRightQuote}
								className=" quote right_quote"
								alt="image"
							/>
						</div>
					) : (
						<div className="right_quote_container">
							<img
								src={rightQuote}
								className=" quote right_quote"
								alt="image"
							/>
						</div>
					)}
				</div>
				<img src={ellipse_2} alt="image" className="ellipse_2" />
			</div>
		</FounderStyle>
	);
};

const FounderStyle = styled.div`
	color: white;
	width: 95%;
	background-color: #050e11;
	margin: 210px auto 50px auto;
	padding: 120px 55px 120px 55px;
	border: 2px #163340 dashed;
	border-radius: 30px;
	position: relative;
	overflow: hidden;
	& .ellipse_1 {
		position: absolute;
		right: 0;
		top: 0;
	}
	& .ellipse_2 {
		position: absolute;
		left: 0;
		bottom: 0;
	}
	& .founder_container {
		display: flex;
		justify-content: center;
		gap: 6rem;
	}
	& .founder_details {
		display: flex;
		flex-direction: column;
		gap: 9px;
		align-items: center;
	}
	& .founder_image_container {
		border-radius: 50%;
		overflow: hidden;
		width: 135px;
		height: 135px;
	}
	& .founder_image {
		width: 100%;
	}
	& .founder_name_and_title {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	& .founder_name {
		background-color: #064624;
		color: #00c187;
		padding: 9px 0;
		border-radius: 20px;
		text-align: center;
		font-size: 0.8rem;
		font-weight: 500;
	}
	& .founder_title {
		color: #00c187;
		font-weight: 500;
		font-size: 0.85rem;
	}
	& .founder_comment_container {
		width: 100%;
		max-width: 56%;
		display: flex;
		flex-direction: column;
		gap: 38px;
	}

	& .founder_comment {
		text-align: center;
		font-weight: 500;
		font-size: 1.2rem;
		line-height: 1.9rem;
	}
	& .quote {
		width: 6%;
	}
	& .left_quote_container {
		position: relative;
	}
	& .left_quote {
		position: absolute;
		left: -2.4rem;
	}
	& .right_quote_container {
		position: relative;
	}
	& .right_quote {
		position: absolute;
		right: -2rem;
	}
	@media (max-width: 480px) {
		margin: 90px auto 70px auto;

		padding: 30px 25px;

		& .ellipse_1 {
			width: 100%;
			top: 0;
			right: 0;
		}
		& .ellipse_2 {
			width: 100%;
			left: 0;
			bottom: 0;
		}
		& .founder_container {
			display: flex;
			flex-direction: column-reverse;
			justify-content: left;
			gap: 3rem;
		}
		& .founder_comment_container {
			max-width: 100%;
		}

		& .founder_comment {
			text-align: left;
			font-size: 0.9rem;
			line-height: 1.5rem;
		}
		& .quote {
			width: 10%;
		}
		& .left_quote {
			left: 0;
		}
		& .right_quote {
			right: 0;
		}

		& .founder_details {
			display: flex;
			flex-direction: row;
			gap: 9px;
		}
		& .founder_image_container {
			width: 50px;
			height: 50px;
		}
		& .founder_name_and_title {
			gap: 9px;
		}
		& .founder_name {
			background-color: transparent;
			color: #ffffff;
			padding: 0;
			text-align: left;
			width: 100%;
		}
	}
	@media (max-width: 770px) {
		margin: 90px auto 70px auto;

		padding: 30px 25px;

		& .founder_container {
			align-items: center;
			gap: 6rem;
		}

		& .founder_comment_container {
			max-width: 100%;
			gap: 20px;
		}

		& .founder_comment {
			font-size: 1.1rem;
			line-height: 1.7rem;
			width: 100%;
			padding: 10px 40px;
		}
		& .quote {
			width: 10%;
		}
		& .left_quote {
			left: -2rem;
		}
		& .right_quote {
			right: -0.2rem;
			top: -1.1rem;
		}
	}
`;

export default Founder;
