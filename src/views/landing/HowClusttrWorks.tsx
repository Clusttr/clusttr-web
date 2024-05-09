import styled from 'styled-components';
import logo from '../../assets/footer/clusttr_logo.png';
import signUp from '../../assets/how_clusttr_works/sign_up.png';
import vector from '../../assets/how_clusttr_works/vector.png';
import ownership from '../../assets/how_clusttr_works/ownership.png';
import finance from '../../assets/how_clusttr_works/finance.png';

const HowClusttrWorks = () => {
	return (
		<HowClusttrWorksStyle>
			<div className="how_clusttr_works_header_container">
				<div className="how_clusttr_works_header">
					<span>How</span> <img className="logo" src={logo} alt="" />{' '}
					<span>Works</span>
				</div>
			</div>
			<div className="how_clusttr_works_info">
				Our primary objective is twofold:{' '}
				<span className="how_clusttr_works_info_highlight">
					to simplify real estate investment for the public and to unlock the
					potential of real estate assets by tokenization.
				</span>
			</div>
			<div className="how_clusttr_works_boxes">
				<div className="how_clusttr_works_box_container">
					<div>
						<img src={signUp} alt="" />
					</div>
					<div className="how_clusttr_works_box_header">
						Sign Up & Discover Properties
					</div>
					<div className="how_clusttr_works_box_info">
						Create your Clusttr account and set your preferences.
					</div>
				</div>
				<div className="how_clusttr_works_box_container">
					<div>
						<img src={vector} alt="" />
					</div>
					<div className="how_clusttr_works_box_header">Acquire a piece</div>
					<div className="how_clusttr_works_box_info">
						Find the right property to invest in fractionally.
					</div>
				</div>
				<div className="how_clusttr_works_box_container">
					<div>
						<img src={ownership} alt="" />
					</div>
					<div className="how_clusttr_works_box_header">
						Participate in fractional ownership
					</div>
					<div className="how_clusttr_works_box_info">
						Finalize the legalities and reap the benefits of co-ownership.
					</div>
				</div>
				<div className="how_clusttr_works_box_container">
					<div>
						<img src={finance} alt="" />
					</div>
					<div className="how_clusttr_works_box_header">
						Access Financial Services
					</div>
					<div className="how_clusttr_works_box_info">
						Enjoy secure and transparent financial transactions within our
						ecosystem.
					</div>
				</div>
			</div>
		</HowClusttrWorksStyle>
	);
};

const HowClusttrWorksStyle = styled.div`
	color: white;
	margin-top: 1.5rem;

	& .how_clusttr_works_header_container {
		width: 100%;
		max-width: 9rem;
		margin-left: auto;
		margin-right: auto;
	}

	& .how_clusttr_works_header {
		width: 100%;
		font-size: 12px;
		font-weight: 500;
		font-family: Roobert;
		border: 1px solid white;
		border-radius: 20px;
		padding: 10px;
		text-align: center;
		display: flex;
		gap: 5px;
		justify-content: center;
		align-items: center;
	}
	& .logo {
		width: 38%;
	}
	& .how_clusttr_works_info {
		font-size: 0.9rem;
		font-weight: 500;
		line-height: 30px;
		width: 100%;
		max-width: 27%;
		text-align: center;
		margin: 25px auto 0 auto;
	}
	& .how_clusttr_works_info_highlight {
		color: #04b882;
	}
	& .how_clusttr_works_boxes {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 5px;
		padding: 50px 70px 0;
	}

	& .how_clusttr_works_box_container {
		border: 2px #163340 dashed;
		display: flex;
		flex-direction: column;
		gap: 10px;
		border-radius: 20px;
		background-color: #050e11;
		padding: 20px 20px 30px 20px;
	}
	& .how_clusttr_works_box_header {
		font-weight: 500;
		font-size: 0.9rem;
	}
	& .how_clusttr_works_box_info {
		font-weight: 500;
		font-size: 0.8rem;
		color: #c7d5d2;
		line-height: 20px;
	}

	@media (max-width: 480px) {
		margin-top: 70px;

		& .how_clusttr_works_info {
			font-size: 0.9rem;
			font-weight: 500;
			max-width: 100%;
			padding: 15px 17px;
		}

		& .how_clusttr_works_boxes {
			display: flex;
			flex-direction: column;
			gap: 10px;
			padding: 15px 35px;
		}

		& .how_clusttr_works_box_container {
			padding: 35px 40px 45px 30px;
			gap: 11px;
		}

		& .how_clusttr_works_box_header {
			font-size: 1.1rem;
		}

		& .how_clusttr_works_box_info {
			font-size: 0.95rem;
		}
	}
	@media (max-width: 770px) {
		& .how_clusttr_works_header {
			padding: 7px 16px;
		}
		& .how_clusttr_works_info {
			font-size: 1.05rem;
			line-height: 30px;
			max-width: 55%;
		}
		& .how_clusttr_works_boxes {
			grid-template-columns: 1fr 1fr;
			gap: 15px;
		}
		& .how_clusttr_works_box_header {
			font-weight: 500;
			font-size: 1rem;
		}
		& .how_clusttr_works_box_info {
			font-weight: 500;
			font-size: 1rem;
			color: #c7d5d2;
			line-height: 20px;
		}
	}
`;

export default HowClusttrWorks;
