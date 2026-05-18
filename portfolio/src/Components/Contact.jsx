import layout from "../Styles/Layout.module.css";
import styles from "../Styles/Contact.module.css";
import { useEffect } from "react";

import personCode from "../Assets/Images/codingPerson.png";

export default function Contact() {
	useEffect(() => {
		const elements = document.querySelectorAll(
			`.${styles.revealLeft},.${styles.revealRight}`,
		);
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add(styles.show);
				}
			});
		});

		elements.forEach((el) => observer.observe(el));

		return () => {
			elements.forEach((el) => observer.unobserve(el));
		};
	}, []);

	return (
		<section
			id="contact"
			className={`${styles.contactWrapper} ${layout.topBtmPad}`}
		>
			<h1 className={styles.contactHdr}>Contact //</h1>

			<div className={styles.contactFormWrapper}>
				<section
					className={`${styles.contactDesc} ${styles.revealLeft}`}
				>
					<h1>Crafting Ideas Together!</h1>

					<img
						src={personCode}
						alt="code img"
						className={styles.codeImg}
					/>
				</section>

				<section
					className={`${styles.contactForm} ${styles.revealRight}`}
				>
					<label htmlFor="name">
						<p>Name:</p>
						<input type="text" id="name" />
					</label>
					<label htmlFor="email">
						<p>Email:</p>
						<input type="email" id="email" />
					</label>
					<label htmlFor="comment">
						<p>Comment:</p>
						<textarea id="comment" rows={3}></textarea>
					</label>
					<button>Share Idea</button>
				</section>
			</div>
		</section>
	);
}
