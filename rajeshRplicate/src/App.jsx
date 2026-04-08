// app.jsx
import Header from "./Header/HeaderPage";
import "./App.css";
import HomePage from "./Home/HomePage";
import Footer from "./Footer/FooterPage";

export default function App() {
	return (
		<section className="appWrapper">
			<Header />
			<HomePage />
			<Footer />
		</section>
	);
}
