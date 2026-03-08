import { createElement } from "../utils/createElement.js";
import { companyLogos } from "../data/logosData.js";

export function renderLogos(container) {
	const logosSection = createElement("section", "logos-style");
	container.appendChild(logosSection);

	companyLogos.forEach((logoPath) => {
		const logo = createElement("img", "logo-img");
		logo.src = logoPath;
		logo.alt = "Company logo";
		logosSection.appendChild(logo);
	});

	const ibmWrapper = createElement("div", "ibm-logo");
	container.appendChild(ibmWrapper);

	const ibmLogo = createElement("img", "ibm");
	ibmLogo.src = "./img-logos/ibm.png";
	ibmLogo.alt = "IBM logo";
	ibmWrapper.appendChild(ibmLogo);
}
