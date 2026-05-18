import layout from "../Styles/layout.module.css";
import styles from "../Styles/Projects.module.css";
// images
import cvBuilderImg from "../Assets/Images/cvBuilderProject.png";
import shopImg from "../Assets/Images/shopProject.png";
import todoImg from "../Assets/Images/todoProject.png";
import { useEffect } from "react";

const projects = [
	{
		title: "Todo",
		tech: "HTML • CSS • JS",
		img: todoImg,
		desc: "Simple task manager built with vanilla JS.",
		link: "https://nobodunderscorethreesixnine.github.io/to_do_list_Odin_Project/",
	},
	{
		title: "CV Builder",
		tech: "React • CSS",
		img: cvBuilderImg,
		desc: "A resume builder app with live preview.",
		link: "https://cvresume-app.netlify.app/",
	},
	{
		title: "Shop",
		tech: "React • CSS • API",
		img: shopImg,
		desc: "E-commerce demo with product API integration.",
		link: "https://nobodshop.netlify.app/",
	},
];

export default function Projects() {
	useEffect(() => {
		const items = document.querySelectorAll(`.${styles.timelineItem}`);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add(styles.revealItem);
					}
				});
			},
			{
				threshold: 0.2,
			},
		);
		items.forEach((item) => observer.observe(item));
		return () => {
			items.forEach((item) => observer.unobserve(item));
		};
	}, []);

	return (
		<section
			id="projects"
			className={`${styles.projectWrapper} ${layout.topBtmPad}`}
		>
			<h1 className={styles.prjHdr}>Projects //</h1>
			<section className={styles.timelineWrapper}>
				{projects.map((p, i) => (
					<div
						key={p.title}
						className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}
					>
						<div className={styles.timelineContent}>
							<img
								src={p.img}
								alt={p.title}
								className={styles.timelineImg}
							/>
							<h3 className={styles.timelineTitle}>{p.title}</h3>
							<p className={styles.timelineTech}>{p.tech}</p>
							<p className={styles.timelineDesc}>{p.desc}</p>
							<a href={p.link} className={styles.timelineBtn}>
								Live Preview
							</a>
						</div>
					</div>
				))}
			</section>
		</section>
	);
}