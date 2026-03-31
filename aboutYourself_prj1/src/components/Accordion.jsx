import { useState } from "react";
import styles from "../styles/Accordion.module.css";
import PlusIcon from "../assets/plus_icon.png";
import MinusIcon from "../assets/minus_icon.png";

export default function Accordion({ accordionItems }) {
	const [openIndex, setOpenIndex] = useState(null);

	return accordionItems.map((item, index) => (
		<section key={index} className={styles.accordionContainer}>
			<div className={styles.accordionHdr}>
				<h2 className={styles.title}>{item.title}</h2>
				<button
					aria-expanded={openIndex === index}
					className={styles.btn}
					onClick={() =>
						setOpenIndex((prev) => (prev === index ? null : index))
					}
				>
					<img
						src={openIndex === index ? MinusIcon : PlusIcon}
						alt="plusIcon"
					/>
				</button>
			</div>

			<div
				hidden={openIndex !== index}
				className={`${styles.accordionContent} ${openIndex === index ? styles.show : ""}`}
			>
				<p>{item.description}</p>
			</div>
		</section>
	));
}
