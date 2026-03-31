import { useState, useRef } from "react";
import styles from "../styles/Carousel.module.css";

export default function Carousel({ children }) {
	const [carouselCurrIndex, setCarouselCurrIndex] = useState(0);
	const startXRef = useRef(null);

	// for mobile
	function handleTouchStart(e) {
		startXRef.current = e.touches[0].clientX;
	}

	function handleTouchEnd(e) {
		const endX = e.changedTouches[0].clientX;
		handleSwipe(startXRef.current, endX);
	}

	// for desktop
	function handleMouseDown(e) {
		startXRef.current = e.clientX;
	}

	function handleMouseUp(e) {
		const endX = e.clientX;
		handleSwipe(startXRef.current, endX);
	}

	function handleSwipe(startX, endX) {
		const diff = startX - endX;
		if (Math.abs(diff) > 60) {
			if (diff > 0) {
				nextCarousel();
			} else {
				prevCarousel();
			}
		}
	}

	function nextCarousel() {
		setCarouselCurrIndex((prev) => (prev + 1) % children.length);
	}

	function prevCarousel() {
		setCarouselCurrIndex(
			(prev) => (prev - 1 + children.length) % children.length,
		);
	}

	return (
		<section className={styles.carouselViewport}>
			<div
				className={styles.carouselTrack}
				style={{
					transform: `translateX(-${carouselCurrIndex * 100}%)`,
				}}
				onTouchEnd={handleTouchEnd}
				onTouchStart={handleTouchStart}
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
			>
				{children}
			</div>
			<div className={styles.carouselNavigation}>
				{children.map((item, index) => (
					<p
						key={index}
						className={`${styles.navigationBtn} ${index === carouselCurrIndex ? styles.active : ""}`}
						onClick={() => setCarouselCurrIndex(index)}
					></p>
				))}
			</div>
		</section>
	);
}
