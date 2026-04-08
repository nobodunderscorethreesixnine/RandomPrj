// headerPage.jsx
import { useState } from "react";
import logo from "../assets/logo.png";
import styles from "../Header/HeaderPage.module.css";
import rajeshImg from "../assets/banner.jpg";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const navItems = [
		"home",
		"Biography",
		"Blogs",
		"Movies",
		"Endorsement",
		"Contacts",
	];

	return (
		<header className={styles.hdrWrapper}>
			<div className={styles.topBar}>
				<a href="/">
					<img src={logo} alt="rajeshHamal logo" />
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

			<img src={rajeshImg} alt="rajesh hamal img" />
		</header>
	);
}
