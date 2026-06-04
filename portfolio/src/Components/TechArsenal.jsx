import layout from "../Styles/Layout.module.css";
import styles from "../Styles/TechArsenal.module.css";
import { useEffect } from "react";

import { Icon } from "@iconify-icon/react";
import useRevealOnScroll from "../Hooks/useRevealOnScroll";

const techs = [
  {
    name: "Linux",
    icon: "logos:linux-tux",
  },
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "html",
    icon: "logos:html-5",
  },
  {
    name: "js",
    icon: "logos:javascript",
  },
  {
    name: "css",
    icon: "logos:css-3",
  },
  {
    name: "git",
    icon: "logos:git-icon",
  },
  {
    name: "github",
    icon: "logos:github-icon",
  },
  {
    name: "terminal",
    icon: "logos:bash",
  },
];

export default function TechArsenal({ sectionRef }) {
  // useEffect(() => {
  // 	const cards = document.querySelectorAll(`.${styles.techCard}`);
  // 	const observer = new IntersectionObserver(
  // 		(entries) => {
  // 			entries.forEach((entry) => {
  // 				if (entry.isIntersecting) {
  // 					entry.target.classList.add(styles.reveal);
  // 				}
  // 			});
  // 		},
  // 		{ threshold: 0.2 },
  // 	);
  //
  // 	cards.forEach((card) => observer.observe(card));
  // 	return () => cards.forEach((card) => observer.unobserve(card));
  // }, []);

  useRevealOnScroll(`.${styles.techCard}`, styles.reveal)

  return (
    <section
      className={`${styles.techWrapper} ${layout.topBtmPad}`}
      id="techStack" ref={sectionRef}
    >
      <h1 className={styles.techHdr}>Tech Stack //</h1>
      <section className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {[...techs, ...techs].map((tech, i) => (
            <div className={styles.techCard} key={i}>
              <Icon
                icon={tech.icon}
                className={styles.techIcon}
              />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
      {/* mobile layout */}
      <section className={styles.techContainer}>
        {techs.map((tech, i) => (
          <div
            className={styles.techCard}
            style={{ transitionDelay: `${i * 0.01}s` }}
            key={i}
          >
            <Icon icon={tech.icon} className={styles.techIcon} />
            <span>{tech.name}</span>
          </div>
        ))}
      </section>
    </section>
  );
}
