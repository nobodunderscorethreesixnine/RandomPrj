import { useOutletContext, useParams, Link } from "react-router";
import { useEffect } from "react";
import styles from "../../Styles/ProjectDetailPage.module.css";
import layout from "../../Styles/Layout.module.css";
import useRevealOnScroll from "../../Hooks/useRevealOnScroll";
import errorStyle from '../../Styles/ErrorPage.module.css';

import todoImg from "../../Assets/Images/todoProject.png";
import cvImg from "../../Assets/Images/cvBuilderProject.png";
import shopImg from "../../Assets/Images/shopProject.png";

const projects = {
	"todo-app-case-study": {
		caseTopic: "to-do application",
		caseImg: todoImg,
		caseAbout:
			"This project is a simple task management application where users can add, edit, and remove tasks. It provides a clean interface to organize daily activities and helps practice fundamental web development concepts like DOM manipulation, event handling, and state management.",
		caseMotivation:
			"The motivation behind building this project was to strengthen my understanding of JavaScript fundamentals and apply them in a practical, interactive way. A to‑do list is a classic beginner project because it combines user input, dynamic updates, and persistent task handling — all essential skills for becoming a professional web developer.",
		caseCoreIntro:
			"The core of the project lies in the technologies and methods I used to bring it to life. I started with HTML to structure the application, defining input fields for new tasks, buttons for actions, and containers to display the list of items. Then I used CSS to style the interface, ensuring that tasks were visually distinct and the overall layout was clean and easy to navigate. The real functionality came from JavaScript, where I implemented the logic for adding new tasks, deleting them, and toggling their completion status.",
		caseCoreIntro2:
			"Event listeners played a crucial role, allowing the application to respond instantly when users clicked buttons or pressed keys. DOM manipulation methods such as appendChild, removeChild, and classList.toggle were used to update the interface dynamically. Finally, I deployed the project using GitHub Pages, making it accessible online and easy to share as part of my portfolio. Together, these elements formed the backbone of the project, showcasing how simple technologies can be combined to create a fully functional web application.",
		caseDesignColor: [
			"#38778c",
			"#3e6881",
			"#2aa5a5",
			"#006400",
			"#3333d8",
			"#e00e0e",
		],
		caseFonts: "monospace",
		livePreviewLink:
			"https://nobodunderscorethreesixnine.github.io/to_do_list_Odin_Project/",
		codeLink:
			"https://github.com/nobodunderscorethreesixnine/to_do_list_Odin_Project?tab=readme-ov-file",
	},

	"cv-app-case-study": {
		caseTopic: "cv-builder application",
		caseImg: cvImg,
		caseAbout:
			"The CV Builder project is a web application that allows users to create and customize their own resumes directly in the browser. It provides a structured form where users can input personal details, education, work experience, and skills, and then generates a clean, professional CV layout that can be previewed instantly. The goal was to make resume creation simple, interactive, and accessible without requiring external tools.",
		caseMotivation:
			"The motivation behind building this project was to strengthen your understanding of JavaScript fundamentals and apply them in a practical, interactive way. A to‑do list is a classic beginner project because it combines user input, dynamic updates, and persistent task handling — all essential skills for becoming a professional web developer.",
		caseCoreIntro:
			"At the core of the CV Builder project is the use of React for building the interface and managing application state. I structured the app around components that represent different sections of a CV, such as personal information, education, and work experience. Each section is interactive, allowing users to input data and see changes reflected immediately in the preview. I used CSS to style the layout, ensuring that the generated CV looks clean and professional, with consistent spacing, typography, and alignment.",
		caseCoreIntro2:
			"React’s state management was essential for handling user input and dynamically updating the preview without reloading the page. I also implemented features like conditional rendering to show or hide sections based on whether the user has entered information. Finally, I deployed the project on Netlify, making it accessible online and easy to share as part of my portfolio. Together, these technologies and techniques formed the backbone of the project, demonstrating how React can be used to build interactive, user‑friendly applications that solve practical problems.",
		caseDesignColor: [
			"#38778c",
			"#3e6881",
			"#2aa5a5",
			"#006400",
			"#3333d8",
			"#e00e0e",
		],
		caseFonts: "verdana",
		livePreviewLink: "https://cvresume-app.netlify.app/",
		codeLink:
			"https://github.com/nobodunderscorethreesixnine/odin_projects/tree/main/cv_app",
	},
	"shop-app-case-study": {
		caseTopic: "shop application",
		caseImg: shopImg,
		caseAbout:
			"NobodShop is an e‑commerce web application designed to showcase products in a clean, organized layout and allow users to explore items easily. The project focuses on presenting a professional storefront experience, combining structured product listings with a responsive design that adapts across devices. It serves as a demonstration of how modern web technologies can be applied to build a functional online shop interface.",
		caseMotivation:
			"The motivation behind building NobodShop was to deepen my understanding of how real‑world e‑commerce platforms are structured and to practice integrating multiple aspects of web development into a single cohesive project. Online shopping applications are highly relevant in today’s digital world, and working on this project gave me the opportunity to simulate the workflow of a professional developer building a commercial product. I wanted to challenge myself to go beyond static portfolio projects and create something that feels closer to a real application, with product displays, navigation, and responsive design.",
		caseCoreIntro:
			"At the core of NobodShop is the use of React for building the interface and managing dynamic components. I structured the application around reusable components for product cards, navigation, and layout sections, ensuring scalability and maintainability. CSS Modules were used to style the application, giving each component its own scoped styles and keeping the design consistent across the site.",
		caseCoreIntro2:
			"I focused on responsive design principles so that the shop looks polished on both desktop and mobile devices. React’s state management allowed me to handle product data and update the UI dynamically, while routing was implemented to provide smooth navigation between different sections of the shop. Deployment was done through Netlify, making the project accessible online and easy to share as part of my portfolio. Together, these technologies and techniques formed the backbone of NobodShop, showcasing how modern frameworks and styling approaches can be combined to create a professional, user‑friendly e‑commerce experience.",
		caseDesignColor: [
			"#ff7f50",
			"#ff8c00",
			"#2f4f4f",
			"#f5f5f5",
			"#006400",
			"#1e90ff",
		],
		caseFonts: "arial",
		livePreviewLink: "https://nobodshop.netlify.app/",
		codeLink:
			"https://github.com/nobodunderscorethreesixnine/odin_projects/tree/main/project_cart_page",
	},
};

export default function ProjectDetailPage() {
	const { setHeaderLinks } = useOutletContext();
	const { projectName } = useParams();
	const project = projects[projectName];

	useRevealOnScroll(
		`.${styles.revealLeft}, .${styles.revealRight}, .${styles.revealUp}`,
		styles.show,
	);

	useEffect(() => {
		if (!project) return;
		setHeaderLinks([
			{ name: "Back Home", link: "/" },
			{ name: "Live Preview", link: project.livePreviewLink },
			{ name: "Code", link: project.codeLink },
		]);
	}, [project, setHeaderLinks]);

	if (!project)
		return (
			<section className={errorStyle.errorWrapper}>
				<h1>Did you get lost !!</h1>
				<Link className={errorStyle.link} to="/">return back</Link>
			</section>
		);

	return (
		<section className={`${styles.caseStudyWrapper} ${layout.topBtmPad}`}>
			<section
				className={`${styles.caseIntroWrapper} ${styles.revealUp}`}
			>
				<div className={styles.intro}>
					<h1 className={styles.caseStudyTitle}>Case Study</h1>
					<strong className={styles.caseTopic}>
						{project.caseTopic}
					</strong>

					<div className={styles.heroImg}>
						<img src={project.caseImg} alt="" />
					</div>
				</div>
			</section>

			<div className={`${styles.topicInfoWrapper} `}>
				<article
					className={`${styles.topicInfo_1} ${styles.revealLeft}`}
					style={{ transitionDelay: "0.1s" }}
				>
					<h2>About</h2>
					<p>{project.caseAbout}</p>
				</article>

				<article
					className={`${styles.topicInfo_2} ${styles.revealRight}`}
					style={{ transitionDelay: "0.3s" }}
				>
					<h2>Motivation</h2>
					<p>{project.caseMotivation}</p>
				</article>
			</div>

			<div className={styles.caseDetailWrapperMob}>
				<section
					className={`${styles.caseDetailMob} ${styles.revealUp}`}
					style={{ transitionDelay: "0.5s" }}
				>
					<h2>The Core</h2>
					<p className={styles.intro1}>{project.caseCoreIntro}</p>
					<p className={styles.intro2}>{project.caseCoreIntro2}</p>
				</section>
			</div>

			<div className={styles.designWrapper}>
				<section className={`${styles.designIntro} ${styles.revealUp}`}>
					<h2>Designs</h2>
					<p>
						The designs are done using Sketchup tool. The color
						pallets were choosen with given style guides. Below are
						the color assets & fonts used in the project
					</p>
				</section>
				<section
					className={`${styles.designColorWrapper} ${styles.revealLeft}`}
				>
					<h2>Colors</h2>
					<section className={styles.designColor}>
						{project.caseDesignColor.map((color, index) => (
							<div
								key={color}
								className={styles.revealUp}
								style={{
									backgroundColor: `${color}`,
									transitionDelay: `${index * 0.1}s`,
								}}
							>
								{color}
							</div>
						))}
					</section>
				</section>

				<section
					className={`${styles.designFontWrapper} ${styles.revealRight}`}
				>
					<h2>Font Family - {project.caseFonts} </h2>
					<div
						className={styles.fontDisplay}
						style={{ fontFamily: `${project.caseFonts}` }}
					>
						<em>Hello World !</em>
						<h3>abcdefghijklm</h3>
						<h3>nopqrstuvwxyz</h3>
						<h5>abcdefghijklm</h5>
						<h5>nopqrstuvwxyz</h5>
						<h6>1234567890</h6>
					</div>
				</section>
			</div>
		</section>
	);
}
