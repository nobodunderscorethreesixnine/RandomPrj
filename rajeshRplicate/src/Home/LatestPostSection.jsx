import styles from "./LatestPostSection.module.css";
import layout from "../styles/Layout.module.css";

import quizImg from "../assets/quiz-mania.jpg";
import lifeImg from "../assets/3-Mistakes-of-my-life.jpg";
import rajeshImg from "../assets/Rajesh-Hamal.jpg";

export default function LatestPostSection() {
	return (
		<section className={layout.padCntrWrapper}>
			<div className={styles.postTitles}>
				<p className={styles.title}>latest post</p>
				<a className={styles.title} href="/">
					view all
				</a>
			</div>

			<section className={styles.postWrapper__container}>
				<article className={styles.postCard}>
					<a href="/">
						<img src={quizImg} alt="rajesh hamal img" />
					</a>
					<h4 className={styles.postCard__title}>
						नोवेल क्विज मेनिया ६ मा आठ टिम छनौट{" "}
					</h4>
					<p className={styles.postCard__text}>
						साउन, २ काठमाडौँ ।&nbsp;एसियाली स्तरको नोवेल क्विज
						मेनिया सिजन ६ को सेमिफाइनलमा आठ टिम छनौट भएका छन् ।
						राजधानीमा जारी अडिसनमा राजधानी बाहिरका विद्यालय ...
					</p>
					<button className={styles.postCard__btn}>
						Read More &raquo;
					</button>
				</article>

				<article className={styles.postCard}>
					<a href="/">
						<img src={lifeImg} alt="rajesh hamal img" />
					</a>
					<h4 className={styles.postCard__title}>
						My 3 Mistakes – Rajesh Hamal{" "}
					</h4>
					<p className={styles.postCard__text}>
						My father was against my decision to pursue acting as a
						profession because, at that time, it was not considered
						as a good career ...
					</p>
					<button className={styles.postCard__btn}>
						Read More &raquo;
					</button>
				</article>

				<article className={styles.postCard}>
					<a href="/">
						<img src={rajeshImg} alt="rajesh hamal img" />
					</a>
					<h4 className={styles.postCard__title}>
						Rajesh hamal to turn to direction{" "}
					</h4>
					<p className={styles.postCard__text}>
						Superstar Rajesh Hamal has announced that he’s planning
						to produce and direct a movie. After making his
						Kollywood debut in 1988, Hamal has gone ...
					</p>
					<button className={styles.postCard__btn}>
						Read More &raquo;
					</button>
				</article>
			</section>
		</section>
	);
}
