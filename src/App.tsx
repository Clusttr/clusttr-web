import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Spline from "@splinetool/react-spline";
import NavBar from './views/components/nev_bar';
import HeroView from './views/landing_page/hero';
import Features from './views/landing_page/features';
import Social from './views/landing_page/social_proof';
import Landing from './views/landing';
import About from './views/about_us/About.tsx';
import ClusttrWorld from './views/clusttr_world/ClusttrWorld.tsx';

/**
 * The main application component.
 * It uses React Router to handle different routes and renders the corresponding components.
 *
 * @returns {JSX.Element} - The JSX element representing the application.
 */
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/clusttr-world" element={<ClusttrWorld />} />
                <Route
                    path="/former"
                    element={
                        <Base>
                            <NavBar />
                            <HeroView />
                            <Features />
                            <Social />
                        </Base>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;

const Base = styled.div`
	/* background-color: green; */
`;
