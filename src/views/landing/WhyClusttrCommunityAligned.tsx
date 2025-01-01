import styled from 'styled-components';
import person1 from '../../assets/why_clusttr/person1.png';
import person2 from '../../assets/why_clusttr/person2.png';
import person3 from '../../assets/why_clusttr/person3.png';
import person4 from '../../assets/why_clusttr/person4.png';
import person5 from '../../assets/why_clusttr/person5.png';
import person6 from '../../assets/why_clusttr/person6.png';
import person7 from '../../assets/why_clusttr/person7.png';
import person8 from '../../assets/why_clusttr/person8.png';
import person9 from '../../assets/why_clusttr/person9.png';
import person10 from '../../assets/why_clusttr/person10.png';
import person11 from '../../assets/why_clusttr/person11.png';
import person12 from '../../assets/why_clusttr/person12.png';
import Avatar from './Avatar';

const shuffleColors = (color: string[]) => {
	color.forEach((_, i) => {
		const RI /*randomIndex*/ = Math.floor(Math.random() * (i + 1));

		// Fisher-Yates algorithm for shuffling
		[color[i], color[RI]] = [color[RI], color[i]];
	});

	return color;
};

const WhyClusttrCommunityAligned = () => {
	// const randomColors: string[] = [];

	const colors: string[] = ['#fff', '#9CE3F1', '#F7DEF4'];

	const duplicatedColors: string[] = colors.flatMap((color) =>
		Array(4).fill(color)
	);

	const RC /*randomColors*/ = shuffleColors(duplicatedColors);

	return (
		<CommunityDesign>
			<div>
				<Avatar avatarsNumber={1} imgSrc={person1} randomColors={RC} />
				<Avatar avatarsNumber={2} imgSrc={person2} randomColors={RC} />
				<Avatar avatarsNumber={3} imgSrc={person3} randomColors={RC} />
				<Avatar avatarsNumber={4} imgSrc={person4} randomColors={RC} />
				<Avatar avatarsNumber={5} imgSrc={person5} randomColors={RC} />
				<Avatar avatarsNumber={6} imgSrc={person6} randomColors={RC} />
				<Avatar avatarsNumber={7} imgSrc={person7} randomColors={RC} />
				<Avatar avatarsNumber={8} imgSrc={person8} randomColors={RC} />
				<Avatar avatarsNumber={9} imgSrc={person9} randomColors={RC} />
				<Avatar avatarsNumber={10} imgSrc={person10} randomColors={RC} />
				<Avatar avatarsNumber={11} imgSrc={person11} randomColors={RC} />
				<Avatar avatarsNumber={12} imgSrc={person12} randomColors={RC} />
			</div>
		</CommunityDesign>
	);
};

const CommunityDesign = styled.div`
	> div {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		width: 90%;
		gap: 10px;
		position: absolute;
		right: -4%;
		bottom: -4%;
	}

	@media (min-width: 480px) and (max-width: 770px) {
		> div {
			gap: 10px;
			right: -5%;
			bottom: -7%;
		}
	}
	@media (max-width: 480px) {
		> div {
			width: 75%;
			gap: 15px;
			grid-template-columns: repeat(5, 1fr);
			right: 12.5%;
			bottom: -32%;
		}
	}

	@media (min-width: 321px) and (max-width: 376px) {
		> div {
			bottom: -26%;
		}
	}
	@media (max-width: 321px) {
		> div {
			bottom: -20%;
		}
	}
`;

export default WhyClusttrCommunityAligned;
