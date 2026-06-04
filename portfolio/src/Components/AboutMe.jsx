import layout from "../Styles/Layout.module.css";
import styles from "../Styles/AboutMe.module.css";
import mineImg from "../Assets/Images/mine.jpg";
import { Icon } from "@iconify-icon/react";
import { useEffect } from "react";
import useRevealOnScroll from "../Hooks/useRevealOnScroll.jsx"

export default function AboutMe({ sectionRef }) {
  // useEffect(() => {
  // 	const elements = document.querySelectorAll(
  // 		`.${styles.revealLeft},.${styles.revealRight},.${styles.revealUp}`,
  // 	);
  // 	const observer = new IntersectionObserver(
  // 		(entries) => {
  // 			entries.forEach((entry) => {
  // 				if (entry.isIntersecting) {
  // 					entry.target.classList.add(styles.show);
  // 				}
  // 			});
  // 		},
  // 		{ threshold: 0.2 },
  // 	);
  // 	elements.forEach((el) => observer.observe(el));
  //
  // 	return () => {
  // 		elements.forEach((el) => observer.unobserve(el));
  // 	};
  // }, []);

  useRevealOnScroll(`.${styles.revealLeft}, .${styles.revealRight}, .${styles.revealUp}`, styles.show)

  return (
    <section className={styles.outerWrapper}>
      <section
        className={`${styles.aboutWrapper} ${layout.topBtmPad}`}
        id="aboutMe" ref={sectionRef}
      >
        <p className={`${styles.greeting} ${styles.revealLeft} `}>
          what is up - i am
        </p>

        <div className={`${styles.revealRight} ${styles.introArea}`}>
          <div
            className={`${styles.imgWrapper} ${styles.glassEffect} `}
          >
            <h1>birat gautam</h1>
            <img src={mineImg} alt="profile-img" />
          </div>
        </div>

        <div className={`${styles.revealLeft} ${styles.bioArea}`}>
          <p
            className={`${styles.bioFull} ${styles.glassEffect} `}
          >
            I'm an aspiring web developer Working toward building a
            future as a professional web developer. My strengths lie
            in problem-solving, creativity, and staying focused on
            continuous growth. I enjoy turning ideas into
            functional, user-friendly designs, and I’m motivated by
            the dream of creating impactful digital experiences.
            This site is a reflection of my journey, my skills, and
            the goals I’m striving to achieve.
          </p>
        </div>

        <div className={`${styles.revealRight} ${styles.hobArea}`}>
          <div
            className={`${styles.hobbiesWrapper} ${styles.glassEffect}`}
          >
            <strong>Hobbies</strong>
            <ul>
              <li>
                {" "}
                <Icon icon="mdi:books" /> Reading Books
              </li>
              <li>
                <Icon icon="mdi:brain" />
                Philosophy
              </li>
              <li>
                <Icon icon="mdi:finance" />
                Trading
              </li>
              <li>
                <Icon icon="mdi:cinema" />
                Movies
              </li>
              <li>
                <Icon icon="mdi:cricket" />
                Cricket
              </li>
            </ul>
          </div>
        </div>

        <div className={`${styles.revealUp} ${styles.expArea}`}>
          <div
            className={`${styles.timelineWrapper} ${styles.glassEffect}`}
          >
            <strong>Experience</strong>
            <section className={styles.timeline}>
              <div className={styles.expItem}>
                <span>2024</span>
                <Icon
                  icon="dashicons:minus"
                  style={{ color: "gray" }}
                  width="13"
                />
                <p>Started Odin Project</p>
              </div>
              <div className={styles.expItem}>
                <span>2025</span>
                <Icon
                  icon="dashicons:minus"
                  style={{ color: "gray" }}
                  width="13"
                />
                <p>Build React Apps</p>
              </div>
              <div
                className={`${styles.expItem} ${styles.current}`}
              >
                <span>2026</span>
                <Icon
                  icon="dashicons:minus"
                  style={{ color: "gray" }}
                  width="13"
                />
                <p>Learning Backend</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </section>
  );
}
