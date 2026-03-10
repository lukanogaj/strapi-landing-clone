import { createElement } from "../utils/createElement.js";
import { companyLogos } from "../data/logosData.js";

export function renderLogos(container) {
	const section = createElement("section", "logos-section");
	container.appendChild(section);

	const viewport = createElement("div", "logos-viewport");
	section.appendChild(viewport);

	const track = createElement("div", "logos-track");
	viewport.appendChild(track);

	const loopedLogos = [...companyLogos, ...companyLogos];

	loopedLogos.forEach((logoPath, index) => {
		const item = createElement("div", "logo-item");
		track.appendChild(item);

		const img = createElement("img", "logo-img");
		img.src = logoPath;
		img.alt = `Company logo ${index + 1}`;
		img.loading = "lazy";

		item.appendChild(img);
	});
}
