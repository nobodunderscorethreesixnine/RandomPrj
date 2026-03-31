import githubIcon from "../assets/github_icon.png";
import phone_icon from "../assets/whatsapp.png";
import mail_icon from "../assets/email.png";
import styles from "../styles/SocialHandles.module.css";

export default function SocialHandles() {
	return (
		<section className={styles.socialHandlesContainer}>
			<h1>Let's get connect</h1>
			<section className={styles.socialLinks}>
				<div>
					<strong>Fork Me On</strong>
					<img src={githubIcon} alt="github-icon" />
				</div>
				<div>
					<strong>hello@gmail.com</strong>
					<img src={mail_icon} alt="mail-icon" />
				</div>
				<div>
					<strong>93849390</strong>
					<img src={phone_icon} alt="phone-icon" />
				</div>
			</section>
		</section>
	);
}
