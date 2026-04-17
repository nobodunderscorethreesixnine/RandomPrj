import HeroSection from "./HeroSection";
import styles from "./HomePage.module.css";
import LatestPostSection from "./LatestPostSection";
import SkillSection from "./SkillsSection";

export default function HomePage() {
	return (
		<section className={styles.homeWrapper}>
			<HeroSection />
			<SkillSection />
			<LatestPostSection />
		</section>
	);
}
