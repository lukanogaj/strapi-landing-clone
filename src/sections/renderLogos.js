import { createElement } from "../utils/createElement.js";
import { companyLogos } from "../data/logosData.js";

export function renderLogos(container) {
	const logosSection = createElement("section", "logos-section");
	container.appendChild(logosSection);

	const logosInner = createElement("div", "logos-inner");
	logosSection.appendChild(logosInner);

	const logosTrack = createElement("div", "logos-track");
	logosInner.appendChild(logosTrack);

	const duplicatedLogos = companyLogos.concat(companyLogos);

	duplicatedLogos.forEach((logoPath) => {
		const logoItem = createElement("div", "logo-item");
		logosTrack.appendChild(logoItem);

		const logo = createElement("img", "logo-img");
		logo.src = logoPath;
		logo.alt = "Company logo";

		logoItem.appendChild(logo);
	});
}
