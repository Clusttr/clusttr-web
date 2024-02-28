import { styled } from 'styled-components';

const Footer = () => {
	return (
		<Style>
			<div className="made-in-abuja">
				<p>Made in Abuja, Available to the 🌍</p>
			</div>
		</Style>
	);
};

export default Footer;

const Style = styled.footer`
	& .made-in-abuja {
		color: white;
		text-align: center;
		margin: 32px 20px;

		@media (min-width: 400px) {
			text-align: left;
		}
	}
`;
