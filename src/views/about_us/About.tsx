import styled from 'styled-components';
import Header from '../general_components/Header';
import Footer from '../general_components/Footer';
import HowWeStarted from './HowWeStarted';
import AboutClusttr from './AboutClusttr';
import OurValues from './OurValues';
import Founder from './Founder';
import JoinClusttr from './../general_components/JoinClusttr';

const About = () => {
	return (
		<Style>
			<Header />
			<AboutClusttr />
			<OurValues />
			<HowWeStarted />
			<Founder />
			<JoinClusttr />
			<Footer />
		</Style>
	);
};

const Style = styled.div`
	overflow: hidden;
`;

export default About;
