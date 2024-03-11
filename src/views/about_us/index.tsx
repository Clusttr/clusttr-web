import Header from '../Header';
import Footer from '../Footer';
import HowWeStarted from './HowWeStarted'
import AboutClusttr from './AboutClusttr';
import OurValues from './OurValues';
import Founder from './Founder';

const About = () => {
	return (
		<>
			<Header />
			<AboutClusttr />
			<OurValues />
			<HowWeStarted/>
			<Founder/>
			<Footer />
		</>
	);
};

export default About;
