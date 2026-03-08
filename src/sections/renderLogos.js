import { createElement } from "../utils/createElement.js";
import { companyLogos } from "../data/logosData.js";

export function renderLogos(container) {
	const logosSection = createElement("section", "logos-section");
	container.appendChild(logosSection);

	const logosInner = createElement("div", "logos-inner");
	logosSection.appendChild(logosInner);

	companyLogos.forEach((logoPath) => {
		const logoItem = createElement("div", "logo-item");
		logosInner.appendChild(logoItem);

		const logo = createElement("img", "logo-img");
		logo.src = logoPath;
		logo.alt = "Company logo";
		logoItem.appendChild(logo);
	});

	const ibmItem = createElement("div", "logo-item");
	logosInner.appendChild(ibmItem);

	const ibmLogo = createElement("img", "logo-img");
	ibmLogo.src = "./img-logos/ibm.png";
	ibmLogo.alt = "IBM logo";
	ibmItem.appendChild(ibmLogo);
}
