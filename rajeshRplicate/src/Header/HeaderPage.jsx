import { useState } from "react";
import styles from "../Header/HeaderPage.module.css";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const navItems = [
		"home",
		"Projects",
		"Blogs",
		"Contacts",
	];

	return (
		<header className={styles.hdrWrapper}>
			<div className={styles.topBar}>
				<a href="/">
					<h1 className={styles.logoTitle}>Birat Gautam</h1>
				</a>
				<button
					className={styles.menuBtn}
					onClick={() => setMenuOpen((prev) => !prev)}
				>
					{menuOpen ? (
						<RxCross2 color="white" size={20} />
					) : (
						<RxHamburgerMenu color="white" size={20} />
					)}
				</button>

				{/* desktop nav */}
				<nav className={`${styles.nav} ${styles.desktopNav}`}>
					{navItems.map((items) => (
						<a key={items} href="#">
							{items}
						</a>
					))}
				</nav>
			</div>

			{/* mobile nav */}
			<nav
				className={`${styles.nav} ${styles.mobileNav} ${menuOpen ? styles.open : ""}`}
			>
				{navItems.map((items) => (
					<a key={items} href="#">
						{items}
					</a>
				))}
			</nav>
		</header>
	);
}
