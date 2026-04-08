// HeroSection.jsx
import styles from "./HeroSection.module.css";
import layout from "../styles/Layout.module.css";

export default function HeroSection() {
	return (
		<section className={layout.padCntrWrapper}>
			<h3 className={styles.title}>short biography</h3>
			<article className={styles.heroWrapper__container}>
				<section className={styles.statsWrapper}>
					<div className={styles.statsWrapper__container}>
						<p className={styles.statsWrapper__nmbr}>1988</p>
						<div className={styles.statsWrapper__text}>
							<p>first</p>
							<p>starring</p>
							<p>film role</p>
						</div>
					</div>
					<div className={styles.statsWrapper__container}>
						<p className={styles.statsWrapper__nmbr}>250+</p>
						<div className={styles.statsWrapper__text}>
							<p>films</p>
							<p>played</p>
							<p>till date</p>
						</div>
					</div>
					<div className={styles.statsWrapper__container}>
						<p className={styles.statsWrapper__nmbr}>60+</p>
						<div className={styles.statsWrapper__text}>
							<p>awards</p>
							<p>and</p>
							<p>nomination</p>
						</div>
					</div>
				</section>
				<p className={styles.heroWrapper__bio1}>
					Rajesh Hamal: the son of a diplomat, a scholarly man with a
					master’s degree in English Literature, a Goodwill Ambassador
					and recurrent contributor to charity. But you may know him
					better as the ‘Great Actor’ of Nepal, starring in award
					winning films such as Deuta(1992), for which he won the
					first of many Best Actor Awards by the National Film Award,
					the most prestigious cinematic awards association in Nepal.
					Since his film debut in the late 1980’s and his seemingly
					overnight rise to stardom, he has become one of the most, if
					not the most, iconic figures of Nepali cinema.{" "}
				</p>
				<p className={styles.heroWrapper__bio2}>
					His roles ranged in character and variety from light hearted
					romantic comedy,to seat-gripping action and adventure. His
					cinematic success has not gone unnoticed; he’s the recipient
					of three decades worth of Best Actor awards and nominations,
					in addition to numerous other achievements. It seems as if
					there is nothing that Mr. Hamal cannot do. Rajesh Hamal has
					become common household name in Nepal. His dedicated acting
					career has redefined the classifications of what it means to
					be a Nepali actor.
					<span>
						<a href="/" className={styles.heroWrapper__btn}>
							Read More &gt;
						</a>
					</span>
				</p>
			</article>
		</section>
	);
}
