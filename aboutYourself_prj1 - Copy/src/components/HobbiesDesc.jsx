import { HOBBIES_DESC } from "../Constants/HobbiesDesc";
import Accordion from "./Accordion";
import styles from "../styles/HobbiesDesc.module.css";

export default function HobbiesDesc() {
	return (
		<section className={styles.hobbiesContainer}>
			<Accordion accordionItems={HOBBIES_DESC} />
		</section>
	);
}

// export default function HobbiesDesc () {
//   return (
//     <Accordion title='Sports'>
//       {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure voluptate tempore laborum nemo molestiae excepturi eius culpa illo esse exercitationem, necessitatibus deleniti itaque eligendi natus, beatae quasi assumenda qui, quisquam minima asperiores debitis officia voluptatum ducimus reiciendis. Voluptatibus, repellendus. Optio!</p> */}
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae atque distinctio itaque, excepturi dignissimos vero corrupti fuga sequi voluptate nam?
//     </Accordion>
//   )
// }
