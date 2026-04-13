// HeroSection.jsx
import styles from "./HeroSection.module.css";
import layout from "../styles/Layout.module.css";
import mineImg from "../assets/mine.jpg";

export default function HeroSection() {
	return (
		<section className={layout.padCntrWrapper}>
			<h3 className={styles.title}>About me</h3>
			<article className={styles.heroWrapper__container}>
				<div className={styles.bgImg}>
					<img
						src={mineImg}
						alt="mine img"
						className={styles.profileImg}
					/>
				</div>

				<p className={styles.heroWrapper__bio1}>
					I'm an asspiring web developer, working toward building a
					future as a professional web developer. My strengths lie in
					problem-solving, creativity, and staying focused on
					continuous growth. I enjoy turning ideas into functional,
					user-friendly designs, and I’m motivated by the dream of
					creating impactful digital experiences. This site is a
					reflection of my journey, my skills, and the goals I’m
					striving to achieve.
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
