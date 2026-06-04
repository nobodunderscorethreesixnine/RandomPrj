import { Link } from "react-router";
import styles from '../Styles/ErrorPage.module.css';

export default function ErrorPage() {
	return (
		<section className={styles.errorWrapper}>
			<h1>Did you get lost</h1>
			<Link className={styles.link} to='/'>return back</Link>
		</section>
	);
}
