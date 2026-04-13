import styles from "./LatestPostSection.module.css";
import layout from "../styles/Layout.module.css";

import loginPrjImg from "../assets/loginProject.png";
import gamePrjImg from "../assets/gameProject.png";
import todoPrjImg from "../assets/todoProject.png";

export default function LatestPostSection() {
	return (
		<section className={layout.padCntrWrapper}>
			<div className={styles.postTitles}>
				<p className={styles.title}>Latest Project</p>
				<a className={styles.title} href="/">
					view all
				</a>
			</div>

			<section className={styles.postWrapper__container}>
				<article className={styles.postCard}>
					<a href="/">
						<img src={loginPrjImg} alt="rajesh hamal img" />
					</a>
					<h4 className={styles.postCard__title}>Login Page</h4>
					<p className={styles.postCard__text}>
						I created this sign‑up form project as a way to practice
						and showcase my web development skills. It’s a simple
						but functional site where users can enter their details
						...
					</p>
					<button className={styles.postCard__btn}>
						Read More &raquo;
					</button>
				</article>

				<article className={styles.postCard}>
					<a href="/">
						<img src={gamePrjImg} alt="rajesh hamal img" />
					</a>
					<h4 className={styles.postCard__title}>
						Pokemon Memory Game
					</h4>
					<p className={styles.postCard__text}>
						I built this memory game project to challenge myself
						with interactive JavaScript and DOM manipulation. It’s a
						fun, engaging site where players flip cards to find
						matching pairs ...
					</p>
					<button className={styles.postCard__btn}>
						Read More &raquo;
					</button>
				</article>

				<article className={styles.postCard}>
					<a href="/">
						<img src={todoPrjImg} alt="rajesh hamal img" />
					</a>
					<h4 className={styles.postCard__title}>ToDo App</h4>
					<p className={styles.postCard__text}>
						I created this to‑do list project as part of my learning
						journey with web development. It’s a simple application
						where I can add, manage, and remove tasks, giving me
						hands‑on ...
					</p>
					<button className={styles.postCard__btn}>
						Read More &raquo;
					</button>
				</article>
			</section>
		</section>
	);
}
