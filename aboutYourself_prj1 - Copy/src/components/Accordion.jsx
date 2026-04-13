import { useState } from "react";
import styles from "../styles/Accordion.module.css";
// import PlusIcon from "../assets/plus_icon.svg";
import PlusIcon from "../assets/plus_icon.png";
import MinusIcon from "../assets/minus_icon.png";

export default function Accordion({ accordionItems }) {
	const [openIndex, setOpenIndex] = useState(null);

	return accordionItems.map((item, index) => (
		<section key={index} className={styles.accordionContainer}>
			<div className={styles.accordionHdr}>
				<h2 className={styles.title}>{item.title}</h2>
				<button
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
				// className={`${styles.accordionContent} ${openIndex === index ? styles.show : styles.hide}`}
				className={`${styles.accordionContent} ${openIndex === index ? styles.show : ''}`}
			>
				<p>{item.description}</p>
			</div>
		</section>
	));
}

// export default function Accordion({ title, children }) {
// 	const [isOpen, setIsOpen] = useState(false);

// 	return (
// 		<section className={styles.accordionContainer}>
// 			<div className={styles.accordionHdr}>
// 				<h3 className={styles.title}>{title}</h3>
// 				{/* <svg
// 					className={styles.btn}
// 					onClick={() => setIsOpen((prev) => !prev)}
// 					height="40px"
// 					viewBox="0 -960 960 960"
// 					width="40px"
// 					fill="#000000"
// 				>
// 					<path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
// 				</svg> */}

// 				<img
// 					className={styles.btn}
// 					src={PlusIcon}
// 					alt="PlusIcon"
// 					onClick={() => setIsOpen((prev) => !prev)}
// 				/>
// 			</div>
// 			<div
// 				className={`${styles.accordionContent} ${isOpen ? styles.show : styles.hide}`}
// 			>
// 				{children}
// 			</div>
// 		</section>
// 	);
// }
