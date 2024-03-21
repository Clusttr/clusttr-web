// import styled from 'styled-components';
import Header from '../general_components/Header';
import Footer from '../general_components/Footer';
import JoinClusttr from '../general_components/JoinClusttr';
import Start from './Start';
import Mission from './Mission';
import WhyClusttr from './WhyClusttr';
import HowClusttrWorks from './HowClusttrWorks';
import JoinClusttrWaitlist from './JoinClusttrWaitlist';

function Landing() {
	return (
		<>
			<Header />
			<Start />
			<Mission />
			<WhyClusttr />
			<HowClusttrWorks />
			<JoinClusttrWaitlist />
			<JoinClusttr />
			<Footer />
		</>
	);
}

export default Landing;
