// Style
import './App.css'

// Components
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import TechArsenal from "./Components/TechArsenal";
import Contact from './Components/Contact.jsx';

export default function App() {
	return (
		<section className="appWrapper">

			<section className="appWrapper__col1">
				<Header />
			</section>

			<section className="appWrapper__col2">
				<AboutMe />
				<TechArsenal />
				<Projects />
        <Contact/>
				<Footer />
			</section>

		</section>
	);
}
