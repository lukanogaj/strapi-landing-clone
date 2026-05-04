
import { createElement } from "../utils/createElement.js";
import { companyLogos } from "../data/logosData.js";

function createLogoGroup(logos) {
	const group = createElement("div", "logos-group");

	logos.forEach((logoPath) => {
		const item = createElement("div", "logo-item");
		group.appendChild(item);

		const image = createElement("img", "logo-img");
		image.src = logoPath;
		image.alt = getLogoAltText(logoPath);
		item.appendChild(image);
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
	const logosSection = createElement("section", "logos-section");
	container.appendChild(logosSection);

	const logosViewport = createElement("div", "logos-viewport");
	logosSection.appendChild(logosViewport);

	const logosTrack = createElement("div", "logos-track");
	logosViewport.appendChild(logosTrack);

	const firstGroup = createLogoGroup(companyLogos);
	const secondGroup = createLogoGroup(companyLogos);
	const thirdGroup = createLogoGroup(companyLogos);

	secondGroup.setAttribute("aria-hidden", "true");
	thirdGroup.setAttribute("aria-hidden", "true");

	logosTrack.appendChild(firstGroup);
	logosTrack.appendChild(secondGroup);
	logosTrack.appendChild(thirdGroup);

	// uproszczone – zamiast Promise + decode
	window.addEventListener("load", () => {
		setLoopDistance(logosTrack, firstGroup);
	});

	window.addEventListener("resize", () =>
		setLoopDistance(logosTrack, firstGroup),
	);
}
