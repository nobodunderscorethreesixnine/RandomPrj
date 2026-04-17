import styles from "./SkillsSection.module.css";
import layout from "../styles/Layout.module.css";
import {
	FaHtml5,
	FaCss3Alt,
	FaJsSquare,
	FaReact,
	FaTerminal,
	FaGithub,
	FaGithubAlt,
	FaLinux,
	FaPython,
} from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";

export default function SkillSection() {
	return (
		<article className={`${styles.skillsWrapper} ${layout.padWrapper}`}>
			<h3>Tech arsenal <span id={styles.separator}> //..</span></h3>

			<div>
				<p className={styles.title}>
					html <FaHtml5 id={styles.titleIcon}/>
				</p>
				<p className={styles.title}>
					css
					<FaCss3Alt id={styles.titleIcon}/>
				</p>
				<p className={styles.title}>
					js
					<FaJsSquare id={styles.titleIcon}/>
				</p>
				<p className={styles.title}>
					React <FaReact id={styles.titleIcon}/>
				</p>
				<p className={styles.title}>
					python <FaPython id={styles.titleIcon}/>
				</p>
				<p className={styles.title}>
					Terminal <FaTerminal id={styles.titleIcon}/>
				</p>
				<p className={styles.title}>
					Git <FaGithub id={styles.titleIcon}/>
				</p>
				<p className={styles.title}>
					linux <FaLinux id={styles.titleIcon}/>
				</p>
			</div>
		</article>
	);
}
