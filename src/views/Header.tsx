import styled, { css } from 'styled-components';
import Logo from '../assets/Logo';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
	const [open, setOpen] = useState(false);

	const [state, setState] = useState({ width: 62.22, height: 20 });

	const screenWidth = () => {
		if (window.innerWidth >= 400) {
			setState({ ...state, width: 99.56, height: 32 });
		} else {
			setState({ ...state, width: 62.22, height: 20 });
		}
	};

	useEffect(() => {
		if (window.innerWidth >= 400) {
			setState({ ...state, width: 99.56, height: 32 });
		} else {
			setState({ ...state, width: 62.22, height: 20 });
		}

		window.addEventListener('resize', screenWidth);

		() => {
			window.removeEventListener('resize', screenWidth);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Style>
				<div>
					<Link to="/">
						<Logo width={state.width} height={state.height} />
					</Link>
				</div>
				<div>
					<div className="menu-links">
						<ul>
							<li>
								<a>Blog</a>
							</li>
							<li>
								<Link to="/about-us">About Us</Link>
							</li>
							<li>
								<Link to="/clustrr-world">Clusttr World(NFT)</Link>
							</li>
							<li>
								<a
									id="whitepaper"
									target="_blank"
									href="https://clusttr.gitbook.io/clusttrs-white-paper/"
								>
									whitepaper
								</a>
							</li>
						</ul>
					</div>
					<button id="menu" onClick={() => setOpen(!open)}>
						<img src="/menu.svg" alt="menu" />
					</button>
				</div>
			</Style>

			<MobileDropdownMenu open={open}>
				<ul>
					<li>
						<a>Blog</a>
					</li>
					<li>
						<Link to="/about-us">About Us</Link>
					</li>
					<li>
						<a>Clusttr World(NFT)</a>
					</li>
					<li>
						<a
							id="whitepaper"
							target="_blank"
							href="https://clusttr.gitbook.io/clusttrs-white-paper/"
						>
							whitepaper
						</a>
					</li>
				</ul>
			</MobileDropdownMenu>
		</>
	);
}

export default Header;

const Style = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1;
	color: white;
	background-color: #070808;
	border-bottom: 1px solid #1e2120;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 14px;
	padding-left: 40px;
	z-index: 4;

	& button#menu {
		border: none;
		background: transparent;
		cursor: pointer;

		@media (min-width: 400px) {
			display: none;
		}
	}

	& .menu-links {
		display: none;

		& li {
			display: inline-block;
			margin-right: 24px;
			& a {
				color: #9aaba6;
				text-decoration: none;
				font-weight: 400;
				font-size: 14px;
				line-height: 16.8px;
				text-transform: capitalize;

				&#whitepaper {
					border-radius: 40px;
					background-color: #00c187;
					font-size: 13px;
					line-height: 15.6px;
					font-weight: 500;
					height: 32px;
					color: white;
					padding: 6.5px 10px 6.5px 10px;
				}
			}
		}

		@media (min-width: 400px) {
			display: block;
		}
	}
`;

const MobileDropdownMenu = styled.aside<{ open: boolean }>`
	position: fixed;
	z-index: 0.5;
	width: 100%;
	background-color: black;
	top: -162px;
	padding: 20px;
	transition: top 400ms ease-in-out;

	@media (min-width: 400px) {
		display: none;
	}

	& li {
		text-align: center;

		& a {
			padding: 20px;
			display: block;
			color: white;
			text-decoration: none;
			font-size: 14px;
			line-height: 16.8px;
			text-transform: capitalize;

			&#whitepaper {
				border-radius: 40px;
				background-color: #00c187;
				font-size: 13px;
				line-height: 15.6px;
				font-weight: 500;
				height: 32px;
				color: white;
				padding: 6.5px 10px 6.5px 10px;
			}
		}
	}

	${(props) =>
		props.open &&
		css`
			top: 62px;
		`}
`;
