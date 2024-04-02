import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import logo from '../../assets/footer/clusttr_logo.png';

const JoinClusttrWaitlist = () => {
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
		<JoinClusttrWaitlistStyle>
			<div className="join_clusttr_waitlist_label">
				<span>Join the </span> <img className="logo" src={logo} alt="" />{' '}
				<span>waitlist</span>
			</div>

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
		</JoinClusttrWaitlistStyle>
	);
};

const JoinClusttrWaitlistStyle = styled.div`
	color: white;
	background-color: #00c187;
	display: flex;
	justify-content: space-between;
	margin: 50px 70px 0 70px;
	align-items: center;
	padding: 12px 20px;
	border-radius: 20px;

	& .join_clusttr_waitlist_label {
		font-size: 1.1rem;
		font-weight: 500;
		font-family: Roobert;
		display: flex;
		gap: 5px;
		align-items: center;
	}
	& .logo {
		width: 25%;
	}

	& .join-waitlist {
		width: 100%;
		max-width: 454px;

		& > div {
			background-color: white;
			border: 1px solid #edf2f6;
			border-radius: 64px;
			height: 40px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 8px;
			width: 400px;

			& button {
				border: none;
				border-radius: 40px;
				background-color: #00c187;
				cursor: pointer;
				font-size: 13px;
				line-height: 15.6px;
				font-weight: 500;
				height: 29px;
				color: white;
				padding: 3px 20px;
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
					color: #858f8d;
					font-size: 500;
				}
				&:focus {
					outline: none;
				}
			}
		}
	}

	@media (max-width: 480px) {
		display: none;
	}
`;

export default JoinClusttrWaitlist;
