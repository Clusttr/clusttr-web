import styled from 'styled-components';
import Header from '../Header';
import { useState } from 'react';
import axios from 'axios';

function Landing() {
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e: any) => {
		e.preventDefault();

		setLoading(true);
		axios
			.post('https://clusttr.up.railway.app/waitlist/register', { email })
			.then(() => {
				alert(
					'Thank you. We have received your email. A confirmation email has also been sent to your email.'
				);
				setEmail('');
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<>
			<Header />
			<Style>
				<h1>Empowering Individuals to Co-Own and Invest in real estate</h1>
				<p>
					At Clusttr, we are transforming the way you think about real estate
					ownership.
				</p>

				<form onSubmit={handleSubmit}>
					<div className="join-waitlist">
						<div>
							<input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type="email"
								placeholder="Enter your email"
							/>
							<button type="submit">
								{loading ? '...Loading' : 'Join Waitlist'}
							</button>
						</div>
					</div>
				</form>
			</Style>
		</>
	);
}

export default Landing;

const Style = styled.div`
	height: 90vh;
	text-align: center;
	background-color: #05020d;
	color: white;
	padding: 20px;
	padding-top: 75px;
	display: flex;
	flex-direction: column;
	justify-content: center;

	& h1 {
		font-size: 32px;
		font-weight: 500;
		line-height: 38.4px;
		width: 100%;
		max-width: 653px;
		margin-left: auto;
		margin-right: auto;

		& + p {
			font-size: 16px;
			line-height: 19.2px;
			font-weight: 500;
			color: #c8e3df;
		}

		@media (min-width: 400px) {
			font-size: 40px;
			line-height: 48px;
		}
	}

	@media (min-width: 400px) {
		justify-content: flex-start;
		padding-top: 125px;
		background-image: url(/background.png);
		background-size: cover;
	}

	& .join-waitlist {
		margin-top: 25px;
		width: 100%;
		max-width: 454px;
		margin-left: auto;
		margin-right: auto;

		& > div {
			background-color: white;
			border: 1px solid #edf2f6;
			border-radius: 64px;
			height: 48px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 8px;

			& button {
				border: none;
				border-radius: 40px;
				background-color: #00c187;
				cursor: pointer;
				font-size: 13px;
				line-height: 15.6px;
				font-weight: 500;
				height: 32px;
				color: white;
				padding: 6.5px 10px 6.5px 10px;
			}

			& input {
				height: 100%;
				flex: 1;
				font-size: 13px;
				border: none;
				padding-left: 10px;
				font-weight: 500;

				&::placeholder {
					font-size: 13px;
					color: #c8e3df;
					font-size: 500;
				}
			}
		}
	}
`;
