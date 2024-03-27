import styled from 'styled-components';
import Header from '../general_components/Header';
import Footer from '../general_components/Footer';
import JoinClusttr from '../general_components/JoinClusttr';
import Start from './Start';
import Mission from './Mission';
import WhyClusttr from './WhyClusttr';
import HowClusttrWorks from './HowClusttrWorks';
import JoinClusttrWaitlist from './JoinClusttrWaitlist';
import ComingSoon from './ComingSoon';

function Landing() {
	return (
		<Style>
			<Header />
			<Start />
			<Mission />
			<ComingSoon />
			<WhyClusttr />
			<HowClusttrWorks />
			<JoinClusttrWaitlist />
			<JoinClusttr />
			<Footer />
		</Style>
	);
}

const Style = styled.div`
	overflow: hidden;
`;
export default Landing;
