import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import HowWeStarted from './HowWeStarted';
import AboutClusttr from './AboutClusttr';
import OurValues from './OurValues';
import Founder from './Founder';

const About = () => {
	return (
		<Style>
			<Header />
			<AboutClusttr />
			<OurValues />
			<HowWeStarted />
			<Founder />
			<Footer />
		</Style>
	);
};

const Style = styled.div`
	overflow: hidden;
`;
export default About;
