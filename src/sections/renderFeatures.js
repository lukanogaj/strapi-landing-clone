import { createElement } from "../utils/createElement.js";
import { featureCards } from "../data/featuresData.js";

export function renderFeatures(container) {
	const wrapper = createElement("section", "wrapper");
	container.appendChild(wrapper);

	const headings = createElement("div", "wrapper-headings");
	wrapper.appendChild(headings);

	const eyebrow = createElement("h5", "head-h5");
	eyebrow.textContent = "TOP-FEATURES";
	headings.appendChild(eyebrow);

	const title = createElement("h1", "head-h1");
	title.textContent = "Build apps fast.";
	headings.appendChild(title);

	const subtitle = createElement("h3", "head-h3");
	subtitle.textContent =
		"Building self-hosted, customizable, and performant content API has never been easier";
	headings.appendChild(subtitle);

	const cardsWrapper = createElement("div", "wrap-main-div");
	wrapper.appendChild(cardsWrapper);

	featureCards.forEach(({ title: cardTitle, description }) => {
		const card = createElement("div", "wrapper-divs");
		cardsWrapper.appendChild(card);

		const heading = createElement("h3", "wrap-main-head");
		heading.textContent = cardTitle;
		card.appendChild(heading);

		const paragraph = createElement("p", "wrap-paragraph");
		paragraph.textContent = description;
		card.appendChild(paragraph);
	});
}
