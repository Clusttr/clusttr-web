import styled, { css } from 'styled-components';
import Logo from '../../assets/Logo';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import topRay from '../../assets/dropdown-top-ray.png';
import bottomRay from '../../assets/dropdown-bottom-ray.png';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Header({ open, setOpen }: { open: boolean; setOpen: any }) {
	// const [open, setOpen] = useState(false);

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
						{open ? (
							<FontAwesomeIcon
								icon={faTimes}
								color="white"
								size="xl"
								style={{ padding: 3.6 }}
							/>
						) : (
							<img src="/menu.svg" alt="menu" />
						)}
					</button>
				</div>
			</Style>
			{open ? (
				<MobileDropdownMenu open={open}>
					<img src={topRay} alt="top ray" className="top_ray" />
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
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
					<img src={bottomRay} alt="bottom ray" className="bottom_ray" />
				</MobileDropdownMenu>
			) : (
				<></>
			)}
		</>
	);
}

export default Header;

const Style = styled.header`
	position: fixed;
	top: 0;
	left: 0;

	width: 100%;
	z-index: 4;
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

		@media (min-width: 480px) {
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

		@media (min-width: 480px) {
			display: block;
		}
	}
`;

const MobileDropdownMenu = styled.aside<{ open: boolean }>`
	position: fixed;
	z-index: 3;
	width: 100%;
	background-color: #05020d;
	top: 0;
	bottom: 0;
	padding: 40% 0;
	transition: top 400ms ease-in-out;
	display: flex;
	justify-content: center;

	// @media (max-width: 480px) {
	// }

	& .top_ray {
		position: absolute;

		top: 0;
		z-index: 1;
	}
	& .bottom_ray {
		position: absolute;
		bottom: 0;
		z-index: 1;
	}
	& ul {
		z-index: 2;
	}
	& li {
		text-align: center;

		& a {
			padding: 25px;
			display: block;
			color: white;
			text-decoration: none;
			font-size: 15px;
			font-weight: 500;
			line-height: 16.8px;
			text-transform: capitalize;

			&#whitepaper {
				border-radius: 40px;
				background-color: #00c187;
				font-size: 13px;
				font-weight: 500;
				line-height: 15.6px;
				font-weight: 500;
				margin-top: 15px;
				color: white;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 15px 10px;
			}
		}
	}

	${(props) =>
		!props.open &&
		css`
			display: none;
		`}
`;
