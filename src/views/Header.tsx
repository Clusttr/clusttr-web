import styled from 'styled-components';

function Header() {
	return (
		<Style>
			<div>
				<img src="/logo.svg" alt="clusttr" />
			</div>
			<div>
				<button>
					<img src="/menu.svg" alt="menu" />
				</button>
			</div>
		</Style>
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
	padding: 16px;

	& button {
		border: none;
		background: transparent;
		cursor: pointer;
	}
`;
