import styled from 'styled-components';
import lightRay from '../../assets/light_ray.png';

const HowWeStarted = () => {
	return (
		<HowWeStartedStyle>
			<img src={lightRay} alt="image" className="light_ray" />
			<div className="how_we_started_container">
				<div className="how_we_started_header_container">
					<div className="how_we_started_header">How we started</div>
				</div>
				<div className="how_we_started_container">
					<div className="how_we_started">
						The team behind clusttr has spent more than 5 years working in
						multiple fields{' '}
						<span className="how_we_started_highlight">
							including fintech, edtech and blockchain, working as business
							development officers, Senior software engineers etc.
						</span>{' '}
						Where they experienced the pain associated with finding affordable
						living while working remotely.
					</div>
					<div className="how_we_started">
						Building clusttr came as a result of this frustration and the
						frustration faced by many colleagues, friends, workmates in
						acquiring affordable real estate investment. When statistics showed
						that
						<span className="how_we_started_highlight">
							{' '}
							Nigeria had a housing deficient of 28m homes
						</span>
						, the team knew it was time to build a solution to this problem and
						began working on a solution.
					</div>
				</div>
			</div>
		</HowWeStartedStyle>
	);
};

const HowWeStartedStyle = styled.div`
	color: white;
	margin: 65px auto 50px auto;
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;

	& .light_ray {
		position: absolute;
		top: -25rem;
        right: -2rem;
		z-index: 1;
	}
	& .how_we_started_container {
        z-index:2;
	}
	& .how_we_started_header_container {
		width: 100%;
		max-width: 7.5rem;
		margin-left: auto;
		margin-right: auto;
	}
	& .how_we_started_header {
		width: 100%;
		font-size: 13px;
		font-weight: 500;
		font-family: Roobert;
		border: 1px solid white;
		border-radius: 20px;
		padding: 8px 13px;
	}
	& .how_we_started_container {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	& .how_we_started {
		font-size: 1.14rem;
		font-weight: 500;
		line-height: 30px;
		width: 100%;
		max-width: 47%;
		text-align: center;
		margin: 14px auto 0 auto;
        
	}
	& .how_we_started_highlight {
		color: #00c187;
	}
`;

export default HowWeStarted;
