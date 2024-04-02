import styled, { css } from 'styled-components';
import Header from '../general_components/Header';
import Footer from '../general_components/Footer';
import JoinClusttr from '../general_components/JoinClusttr';
import Start from './Start';
import Mission from './Mission';
import WhyClusttr from './WhyClusttr';
import HowClusttrWorks from './HowClusttrWorks';
import JoinClusttrWaitlist from './JoinClusttrWaitlist';
import ComingSoon from './ComingSoon';
import { useState } from 'react';

function Landing() {
	const [open, setOpen] = useState(false);
	return (
		<Style open={open}>
			<Header open={open} setOpen={setOpen} />
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

const Style = styled.div<{ open: boolean }>`
	overflow: hidden;

	${(props) =>
		props.open &&
		css`
			position: fixed;
		`}
`;
export default Landing;
