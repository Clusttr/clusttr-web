import { useState } from 'react';
import styled, { css } from 'styled-components';
import Header from '../general_components/Header';
import Footer from '../general_components/Footer';
import HowWeStarted from './HowWeStarted';
import AboutClusttr from './AboutClusttr';
import OurValues from './OurValues';
import Founder from './Founder';
import JoinClusttr from './../general_components/JoinClusttr';

const About = () => {
	const [open, setOpen] = useState(false);

	return (
		<Style open={open}>
			<Header open={open} setOpen={setOpen} />
			<AboutClusttr />
			<OurValues />
			<HowWeStarted />
			<Founder />
			<JoinClusttr />
			<Footer />
		</Style>
	);
};

const Style = styled.div<{ open: boolean }>`
	overflow: hidden;

	${(props) =>
		props.open &&
		css`
			position: fixed;
		`}
`;

export default About;
