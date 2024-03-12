import styled from 'styled-components';
import founder from '../../assets/tochi.png';
import leftQuote from '../../assets/quotes_left.png';
import rightQuote from '../../assets/quotes_right.png';
import ellipse_1 from '../../assets/founder_bg/ellipse_1.png';
import ellipse_2 from '../../assets/founder_bg/ellipse_2.png';

const Founder = () => {
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
					<div className="founder_name">Tochukwu</div>
					<div className="founder_title">Founder, Clusttr</div>
				</div>
				<div className="founder_comment_container">
					<div className="left_quote_container">
						<img className="left_quote quote" src={leftQuote} alt="image" />
					</div>
					<div className="founder_comment">
						In an era defined by digital innovation and the democratization of
						finance, the world of real estate seems stagnant and has resisted
						innovation. Clusttr is working towards innovating how we access,
						invest in, and co-own real estate assets in a way that benefits all,
						not just the rich.
					</div>
					<div className="right_quote_container">
						<img src={rightQuote} className=" quote right_quote" alt="image" />
					</div>
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
	border: 2px #163340 dashed;
	border-radius: 30px;
	padding: 120px 55px 120px 55px;
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
	& .founder_name {
		background-color: #064624;
		color: #00c187;
		padding: 9px 0;
		border-radius: 20px;
		text-align: center;
		font-size: 0.8rem;
		width: 70%;
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
`;

export default Founder;
