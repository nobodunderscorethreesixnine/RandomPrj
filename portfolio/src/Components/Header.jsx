import styles from "../Styles/Header.module.css";
// icons
import { Icon } from "@iconify-icon/react";
import { Link, useLocation } from "react-router";

const navLinks = [
	{ name: "About Me", id: "aboutMe" },
	{ name: "Tech Stack", id: "techStack" },
	{ name: "Projects", id: "projects" },
	{ name: "Contact", id: "contact" },
];

export default function Header({ activeSection, headerLinks }) {
	const location = useLocation();

	const handleActive = (id) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<>
			<header className={styles.headerWrapper}>
				<section className={styles.navLinkWrapper}>
					{location.pathname === "/" &&
						navLinks.map((link) => (
							<div
								key={link.id}
								className={`${styles.navLinks} ${activeSection === link.id ? styles.active : ""}`}
								onClick={() => handleActive(link.id)}
							>
								<span></span>
								{link.name}
							</div>
						))}

					{location.pathname !== "/" &&
						headerLinks.map((link) => (
							<Link key={link.id} to={link.link}>
								<div key={link.id} className={styles.navLinks}>
									<span></span>
									{link.name}
								</div>
							</Link>
						))}
				</section>

				<section className={styles.iconWrapper}>
					<a href="/" title="github">
						<Icon
							icon="mdi:github"
							color="gray"
							className={styles.icon}
						/>
					</a>
					<a href="/" title="linkedin">
						<Icon
							icon="mdi:linkedin"
							color="gray"
							className={styles.icon}
						/>
					</a>
					<a href="/" title="twitter">
						<Icon
							icon="mdi:twitter"
							color="gray"
							className={styles.icon}
						/>
					</a>
				</section>
			</header>

			<header className={styles.mobileHeaderWrapper}>
				<section className={styles.mobileNavLinkWrapper}>
					{location.pathname === "/" &&
						navLinks.map((link) => (
							<div
								key={link.id}
								className={`${styles.mobileNavLinks} ${activeSection === link.id ? styles.active : ""}`}
								onClick={() => handleActive(link.id)}
							>
								{link.name}
							</div>
						))}

					{location.pathname !== "/" &&
						headerLinks.map((link) => (
							<Link
								key={link.id}
								to={link.link}
								className={styles.mobileNavLinks}
							>
								{link.name}
							</Link>
						))}
					{/* {location.pathname !== '/' && headerLinks.map((link) => (
            <div
              key={link.id}
              className={`${styles.mobileNavLinks} ${activeSection === link.id ? styles.active : ""}`}
              onClick={() => handleActive(link.id)}
            >
              {link.name}
            </div>
          ))} */}
				</section>

				<section className={styles.iconWrapper}>
					<a href="/" title="github">
						<Icon
							icon="mdi:github"
							color="gray"
							className={styles.icon}
						/>
					</a>
					<a href="/" title="linkedin">
						<Icon
							icon="mdi:linkedin"
							color="gray"
							className={styles.icon}
						/>
					</a>
					<a href="/" title="twitter">
						<Icon
							icon="mdi:twitter"
							color="gray"
							className={styles.icon}
						/>
					</a>
				</section>
			</header>
		</>
	);
}

// import styles from "../Styles/Header.module.css";
// import { useState, useEffect, useRef } from "react";
// // icons
// import { Icon } from "@iconify-icon/react";
// import { Link, useLocation } from "react-router";
//
// const navLinks = [
//   { name: "About Me", id: "aboutMe" },
//   { name: "Tech Stack", id: "techStack" },
//   { name: "Projects", id: "projects" },
//   { name: "Contact", id: "contact" },
// ];
//
// export default function Header() {
//   const location = useLocation();
//   const [activeLink, setActiveLink] = useState(null);
//
//   useEffect(() => {
//     if (location.hash) {
//       const el = document.querySelector(location.hash);
//       if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
//     }
//   }, [location]);
//
//
//   const handleActive = (id) => {
//     setActiveLink(id);
//
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };
//
//   useEffect(() => {
//     const sections = navLinks.map((link) =>
//       document.getElementById(link.id),
//     );
//
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveLink(entry.target.id);
//           }
//         });
//       },
//       {
//         rootMargin: "-45% 0px -55% 0px", //top right bottom left
//       },
//     );
//
//
//     sections.forEach((section) => {
//       if (section) observer.observe(section)
//     })
//
//     return () => {
//       sections.forEach((section) => {
//         if (section) observer.unobserve(section)
//       })
//     }
//
//   }, []);
//
//   return (
//     <>
//       <header className={styles.headerWrapper}>
//         <section className={styles.navLinkWrapper}>
//           {navLinks.map((link) => (
//
//             location.pathname === '/' ?
//               < div
//                 key={link.id}
//                 className={`${styles.navLinks} ${activeLink === link.id ? styles.active : ""}`}
//                 onClick={() => handleActive(link.id, link.name)}
//               >
//                 <span></span>
//                 {link.name}
//               </div>
//               :
//               <Link key={link.id} to={`/#${link.id}`}
//               >
//                 {link.name}
//               </Link>
//
//
//           ))}
//         </section>
//
//         <section className={styles.iconWrapper}>
//           <a href="/" title="github">
//             <Icon
//               icon="mdi:github"
//               color="gray"
//               className={styles.icon}
//             />
//           </a>
//           <a href="/" title="linkedin">
//             <Icon
//               icon="mdi:linkedin"
//               color="gray"
//               className={styles.icon}
//             />
//           </a>
//           <a href="/" title="twitter">
//             <Icon
//               icon="mdi:twitter"
//               color="gray"
//               className={styles.icon}
//             />
//           </a>
//         </section>
//       </header >
//
//       <header className={styles.mobileHeaderWrapper}>
//         <section className={styles.mobileNavLinkWrapper}>
//           {navLinks.map((link) => (
//             <div
//               key={link.id}
//               className={`${styles.mobileNavLinks} ${activeLink === link.id ? styles.active : ""}`}
//               onClick={() => handleActive(link.id, link.name)}
//             >
//               {link.name}
//             </div>
//           ))}
//         </section>
//
//         <section className={styles.iconWrapper}>
//           <a href="/" title="github">
//             <Icon
//               icon="mdi:github"
//               color="gray"
//               className={styles.icon}
//             />
//           </a>
//           <a href="/" title="linkedin">
//             <Icon
//               icon="mdi:linkedin"
//               color="gray"
//               className={styles.icon}
//             />
//           </a>
//           <a href="/" title="twitter">
//             <Icon
//               icon="mdi:twitter"
//               color="gray"
//               className={styles.icon}
//             />
//           </a>
//         </section>
//       </header>
//     </>
//   )
// }
