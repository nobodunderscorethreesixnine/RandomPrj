import "./App.css";
// importing components
import IntroPage from "./components/IntroPage";
import Carousel from "./components/Carousel";
import HobbiePage from "./components/HobbiePage";
import HobbiesDesc from "./components/HobbiesDesc";
import SocialHandles from "./components/SocialHandles";

export default function App() {
	return (
		<section className="parentWrapper">
				<Carousel>
					<IntroPage />
					<HobbiePage />
					<HobbiesDesc/>
					<SocialHandles/>
				</Carousel>
		</section>
	);
}

