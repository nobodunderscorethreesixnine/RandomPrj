import { HOBBIES_DESC } from "../Constants/HobbiesDesc";
import Accordion from "./Accordion";
import styles from "../styles/HobbiesDesc.module.css";

export default function HobbiesDesc() {
	return (
		<section className={styles.hobbiesContainer}>
			<Accordion accordionItems={HOBBIES_DESC} />
		</section>
	);
}
