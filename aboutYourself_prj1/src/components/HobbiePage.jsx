import styles from "../styles/HobbiePage.module.css";

function Label({ labelName }) {
	return (
		<section className={styles[labelName]}>
			<h1>{labelName}</h1>
		</section>
	);
}

export default function HobbiePage() {
	return (
		<article className={styles.hobbieContainer}>
			<h1 className={styles.title}>Hobbies</h1>
			<Label labelName="Reading" />
			<Label labelName="Philosophy" />
			<Label labelName="ShareMarket" />
			<Label labelName="Sport" />
			<Label labelName="Movies" />
		</article>
	);
}
