import styles from "./FooterPage.module.css";
import layout from "../styles/Layout.module.css";

import {
	FaHeart,
	FaGithub,
	FaLinkedin,
	FaMailBulk,
} from "react-icons/fa";
import { FaLetterboxd, FaSquareLetterboxd } from "react-icons/fa6";

export default function Footer() {
	return (
		<footer className={`${styles.footerWrapper} ${layout.padWrapper}`}>
			<div className={styles.footerContent}>
				<section>
					<h3 className={styles.columnTitle}>Other Interests</h3>
					<div className={styles.interestList}>
						<p>
							{" "}
							<span className={styles.dot}>.</span>Reading
						</p>
						<p>
							{" "}
							<span className={styles.dot}>.</span>Movies
						</p>
						<p>
							{" "}
							<span className={styles.dot}>.</span>Philosophy
						</p>
						<p>
							{" "}
							<span className={styles.dot}>.</span>ShareMarket
						</p>
					</div>
				</section>

				<section>
					<h3 className={styles.columnTitle}>Reach Out</h3>
					<div className={styles.socialLinks}>
						<a href="https://github.com/nobodunderscorethreesixnine">
							<FaGithub size={20} />
							Github
						</a>

						<a href="/">
							<FaLinkedin size={20} />
							Linkedin
						</a>

						<a href="/">
							<FaMailBulk size={20} />
							Mail
						</a>
					</div>
				</section>
			</div>
			<div className={styles.attribution}>
				<p>© 2026 Birat Gautam. All rights reserved.</p>
				<p className={styles.madeWith}>
					Made with{" "}
					<FaHeart
						size={12}
						color="#EF4444"
						className={styles.heart}
					/>{" "}
					in Nepal
				</p>
			</div>
		</footer>
	);
}
