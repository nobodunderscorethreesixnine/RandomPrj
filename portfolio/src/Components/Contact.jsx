import layout from "../Styles/Layout.module.css";
import styles from "../Styles/Contact.module.css";
// import { useEffect } from "react";

import personCode from "../Assets/Images/codingPerson.png";
import useRevealOnScroll from "../Hooks/useRevealOnScroll";

export default function Contact({ sectionRef }) {
  // useEffect(() => {
  // 	const elements = document.querySelectorAll(
  // 		`.${styles.revealLeft},.${styles.revealRight}`,
  // 	);
  // 	const observer = new IntersectionObserver((entries) => {
  // 		entries.forEach((entry) => {
  // 			if (entry.isIntersecting) {
  // 				entry.target.classList.add(styles.show);
  // 			}
  // 		});
  // 	},{threshold:0.2});
  //
  // 	elements.forEach((el) => observer.observe(el));
  //
  // 	return () => {
  // 		elements.forEach((el) => observer.unobserve(el));
  // 	};
  // }, []);
  useRevealOnScroll(`.${styles.revealLeft}, .${styles.revealRight}`, styles.show)

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`${styles.contactWrapper} ${layout.topBtmPad}`}
    >
      <h1 className={styles.contactHdr}>Contact //</h1>

      <div className={styles.contactFormWrapper}>
        <section
          className={`${styles.contactDesc} ${styles.revealLeft}`}
        >
          <h1>Crafting Ideas Together!</h1>

          <img
            src={personCode}
            alt="code img"
            className={styles.codeImg}
          />
        </section>

        <section
          className={`${styles.contactForm} ${styles.revealRight}`}
        >
          <label htmlFor="name">
            <p>Name:</p>
            <input type="text" id="name" />
          </label>
          <label htmlFor="email">
            <p>Email:</p>
            <input type="email" id="email" />
          </label>
          <label htmlFor="comment">
            <p>Comment:</p>
            <textarea id="comment" rows={3}></textarea>
          </label>
          <button>Share Idea</button>
        </section>
      </div>
    </section>
  );
}
