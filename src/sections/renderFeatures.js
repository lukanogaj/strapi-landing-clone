import { createElement } from "../utils/createElement.js";
import { featureCards } from "../data/featuresData.js";

export function renderFeatures(container) {
	const featuresSection = createElement("section", "features");
	container.appendChild(featuresSection);

	const featuresHeader = createElement("div", "features-header");
	featuresSection.appendChild(featuresHeader);

	const featuresEyebrow = createElement("h5", "features-eyebrow");
	featuresEyebrow.textContent = "TOP-FEATURES";
	featuresHeader.appendChild(featuresEyebrow);

	const featuresTitle = createElement("h1", "features-title");
	featuresTitle.textContent = "Build apps fast.";
	featuresHeader.appendChild(featuresTitle);

	const featuresSubtitle = createElement("h3", "features-subtitle");
	featuresSubtitle.textContent =
		"Building self-hosted, customizable, and performant content API has never been easier";
	featuresHeader.appendChild(featuresSubtitle);

	const cardsWrapper = createElement("div", "features-grid");
	featuresSection.appendChild(cardsWrapper);

	featureCards.forEach(({ title: cardTitle, description }) => {
		const card = createElement("div", "feature-card");
		cardsWrapper.appendChild(card);

		const heading = createElement("h3", "feature-card-title");
		heading.textContent = cardTitle;
		card.appendChild(heading);

		const paragraph = createElement("p", "feature-card-description");
		paragraph.textContent = description;
		card.appendChild(paragraph);
	});
}
