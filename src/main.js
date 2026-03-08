import { renderHeader } from "./sections/renderHeader.js";
import { renderHero } from "./sections/renderHero.js";
import { renderLogos } from "./sections/renderLogos.js";
import { renderFeatures } from "./sections/renderFeatures.js";
import { renderSteps } from "./sections/renderSteps.js";

const mainDiv = document.querySelector("#main-div");

if (!mainDiv) {
	throw new Error("Root container #main-div not found");
}

function init() {
	renderHeader(mainDiv);
	renderHero(mainDiv);
	renderLogos(mainDiv);
	renderFeatures(mainDiv);
	renderSteps(mainDiv);
}

init();
