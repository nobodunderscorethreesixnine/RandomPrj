import { useEffect } from "react";

export default function useRevealOnScroll(
	selectors,
	className,
	options = { threshold: 0.2 },
) {
	useEffect(() => {
		const elements = document.querySelectorAll(selectors);
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add(className);
				}
			});
		}, options);

		elements.forEach((el) => observer.observe(el));

		// return () => elements.forEach(el => observer.unobserve(el))
		return () => {
			elements.forEach((el) => observer.unobserve(el));
			observer.disconnect();
		};
	}, []);
}