import { createElement } from "../utils/createElement.js";
import { companyLogos } from "../data/logosData.js";

function createLogoGroup(logos) {
	const group = createElement("div", "logos-group");

	logos.forEach((logoPath) => {
		const item = createElement("div", "logo-item");
		group.appendChild(item);

		const img = createElement("img", "logo-img");
		img.src = logoPath;
		img.alt = getLogoAltText(logoPath);
		img.loading = "lazy";

		item.appendChild(img);
	});

	return group;
}

function getLogoAltText(path) {
	const fileName = path.split("/").pop()?.replace(".png", "") ?? "company-logo";
	return fileName.replace(/-/g, " ");
}

function setLoopDistance(track, firstGroup) {
	const groupWidth = firstGroup.offsetWidth;
	track.style.setProperty("--loop-distance", `-${groupWidth}px`);
	track.classList.add("is-ready");
}

export function renderLogos(container) {
	const section = createElement("section", "logos-section");
	container.appendChild(section);

	const viewport = createElement("div", "logos-viewport");
	section.appendChild(viewport);

	const track = createElement("div", "logos-track");
	viewport.appendChild(track);

	const firstGroup = createLogoGroup(companyLogos);
	const secondGroup = createLogoGroup(companyLogos);
	const thirdGroup = createLogoGroup(companyLogos);

	secondGroup.setAttribute("aria-hidden", "true");
	thirdGroup.setAttribute("aria-hidden", "true");

	track.appendChild(firstGroup);
	track.appendChild(secondGroup);
	track.appendChild(thirdGroup);

	const startCarousel = () => setLoopDistance(track, firstGroup);

	requestAnimationFrame(startCarousel);
	window.addEventListener("resize", () => setLoopDistance(track, firstGroup));
}
