// HomePage.jsx
import HeroSection from "./HeroSection";
import styles from "./HomePage.module.css";
import LatestPostSection from "./LatestPostSection";
import NewsLetter from "./NewsLetterSection";

export default function HomePage() {
	return (
		<section className={styles.homeWrapper}>
			<HeroSection />
			<hr />
			<LatestPostSection />
			<NewsLetter />
		</section>
	);
}
