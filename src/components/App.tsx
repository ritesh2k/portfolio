import '../styles/app.scss';
import Navbar from './Navbar';
import SelfDescription from './SelfDescription';
import VectorDesign from './VectorDesign';
import CardContainer from './CardContainer';
import Contact from './Contact';
import Footer from './Footer';
import { Project } from './Project';
import { Asteroid } from './Asteroid';

const App = () => (
    <div>
        <Navbar />
        <SelfDescription />
        <VectorDesign />
        <CardContainer />
        <Project />
        <Asteroid />
        <Contact />
        <Footer />
    </div>
);

App.propTypes = {};

export default App;
