import styles from "./FooterPage.module.css";
import layout from "../styles/Layout.module.css";

import { FaFacebook, FaInstagram, FaHeart } from "react-icons/fa";

export default function Footer() {
	return (
		<section className={`${styles.footerWrapper} ${layout.padWrapper}`}>
			<h3 className={styles.title}>Birat Gautam</h3>
			<section className={styles.iconWrapper}>
				<div>
					<a herf="/">
						<FaFacebook size={18} color="white" />
					</a>
				</div>

				<div>
					<a herf="/">
						<FaInstagram size={18} color="white" />
					</a>
				</div>
			</section>
			<section className={styles.attributeWrapper}>
				<strong>
					© Copyright 2026, Birat Gautam. All Rights Reserved.
				</strong>
				<p>
					Made with <FaHeart size={12} color="red" /> in Nepal By
					BG
				</p>
			</section>
		</section>
	);
}
