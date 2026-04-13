import styles from "./NewsLetterSection.module.css";
import layout from "../styles/Layout.module.css";

export default function NewsLetter() {
	return (
				<article className={`${styles.newsLetterWrapper__container} ${layout.padWrapper}`}>
				<h3 className={styles.title}>
					stay updated with mine newsletter
				</h3>
				<div>
					<input type="email" placeholder="Enter Email Address" />
					<button className={styles.subBtn}>Subscribe</button>
				</div>
			</article>
	);
}
