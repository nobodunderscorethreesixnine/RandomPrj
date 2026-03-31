import styles from "../styles/IntroPage.module.css";
import profileAvatar from "../assets/developer_avatar.svg";

export default function IntroPage() {
	return (
		<article className={styles.introContainer}>
			<section className={styles.introContainer__hdr}>
				<img
					src={profileAvatar}
					alt="profile-picture"
					className={styles.profileImg}
				/>
				<h1 className={styles.title}>
					<span id={styles.separator}>Namaste|</span>Ma Birat
				</h1>
			</section>

			<section className={styles.introContainer__bio}>
				<p>
					I'm an asspiring web developer, working toward building a
					future as a professional web developer. My strengths lie in
					problem-solving, creativity, and staying focused on
					continuous growth. I enjoy turning ideas into functional,
					user-friendly designs, and I’m motivated by the dream of
					creating impactful digital experiences. This site is a
					reflection of my journey, my skills, and the goals I’m
					striving to achieve.
				</p>
			</section>
		</article>
	);
}
