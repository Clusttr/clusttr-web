import styled from 'styled-components';

type AvatarType = {
	avatarsNumber: number;
	imgSrc: string;
	randomColors: string[];
};

const Avatar = ({ avatarsNumber, imgSrc, randomColors }: AvatarType) => {
	return (
		<AvatarStyle
			style={{
				background:
					randomColors[avatarsNumber - 1] === '#9CE3F1'
						? 'linear-gradient(to bottom, #E9F8FF, #9CE3F1)'
						: randomColors[avatarsNumber - 1] === '#F7DEF4'
						? 'linear-gradient(to bottom, #DAE6D1, #F7DEF4)'
						: `${randomColors[avatarsNumber - 1]}`,
			}}
		>
			<div>
				<img src={imgSrc} alt="community_avatar" className="h" />
			</div>
		</AvatarStyle>
	);
};

const AvatarStyle = styled.div`
	border: 3px solid #00c187;
	border-radius: 50px;
	width: 100%;
	height: 57px;
	overflow: hidden;
	position: relative;
	
	> div {
		position: absolute;
		top: -1px;
		right: -3px;
	}

	> div > img {
		// aspect-ratio: 1/1;
		width: 88%;
	}

	@media (min-width: 480px) and (max-width: 770px) {
		width: 100px;
		height: 60px;
		border: 3px solid #00c187;

		> div > img {
			width: 88%;
		}
	}
	@media (max-width: 480px) {
		width: 100%;
		height: 44px;
		border: 2px solid #00c187;

		> div {
			top: unset;
			right: unset;
			bottom: -2px;
		}

		> div > img {
			width: 100%;
		}
	}

	@media (min-width: 321px) and (max-width: 380px) {
		height: 35px;
	}
	@media (max-width: 321px) {
		height: 25px;
	}
`;

export default Avatar;
