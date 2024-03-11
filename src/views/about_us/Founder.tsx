import styled from 'styled-components';
import founder from '../../assets/tochi.png';
import leftQuote from '../../assets/quotes_left.png';
import rightQuote from '../../assets/quotes_right.png';
// import strokes from '../../assets/founder_bg/strokes.png';
// import fade from '../../assets/founder_bg/fade.png';

const Founder = () => {
	return (
		<FounderStyle>
			{/* <img src={strokes} alt="image" className="strokes" />
			<img src={fade} alt="image" className="fade" /> */}
			<div className="founder_container">
				<div className="founder_details">
					<div className="founder_image_container">
						<img
							src={founder}
							className="founder_image"
							alt="founder's image"
						/>
					</div>
					<div>Tochukwu</div>
					<div>Founder, Clusttr</div>
				</div>
				<div className="founder_comment_container">
					<div>
						<img src={leftQuote} alt="image" />
					</div>
					<div className="founder_comment">
						In an era defined by digital innovation and the democratization of
						finance, the world of real estate seems stagnant and has resisted
						innovation. Clusttr is working towards innovating how we access,
						invest in, and co-own real estate assets in a way that benefits all,
						not just the rich.
					</div>
					<div>
						<img src={rightQuote} alt="image" />
					</div>
				</div>
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
	& .founder_container {
		display: flex;
		justify-content: center;
		gap: 5rem;
	}
	& .founder_image_container {
		border-radius: 50%;
		overflow: hidden;
		width: 130px;
		height: 130px;
	}
	& .founder_image {
		width: 100%;
	}
	& .founder_comment_container {
		width: 100%;
		max-width: 54%;
        display: flex;
        flex-direction: column;
        gap: 20px;
	}

	& .founder_comment {
		text-align: center;
		font-weight: 500;
		font-size: 1.15rem;
		line-height: 1.9rem;

	}
`;

export default Founder;
