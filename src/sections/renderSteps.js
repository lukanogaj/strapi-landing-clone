import { createElement } from "../utils/createElement.js";

export function renderSteps(container) {
	const stepsSection = createElement("section", "step-div");
	container.appendChild(stepsSection);

	const stepsHeadings = createElement("div", "stepby-headings");
	stepsSection.appendChild(stepsHeadings);

	const stepEyebrow = createElement("h5", "head-h5");
	stepEyebrow.textContent = "STEP-BY-STEP";
	stepsHeadings.appendChild(stepEyebrow);

	const stepTitle = createElement("h1", "head-h1");
	stepTitle.textContent = "How does it work";
	stepsHeadings.appendChild(stepTitle);

	const stepSubtitle = createElement("h3", "head-h3");
	stepSubtitle.textContent =
		"Make a flexible data structure in 2 minutes. Use our powerful features to customize your API";
	stepsHeadings.appendChild(stepSubtitle);

	const stepsContent = createElement("div", "step-div-2");
	stepsSection.appendChild(stepsContent);

	const leftVisual = createElement("div", "stepdiv-1");
	stepsContent.appendChild(leftVisual);

	const rightContent = createElement("div", "stepdiv-2");
	stepsContent.appendChild(rightContent);

	const stepNumber = createElement("h5", "head-h5");
	stepNumber.textContent = "Step 1";
	rightContent.appendChild(stepNumber);

	const stepHeading = createElement("h3", "wrap-main-head");
	stepHeading.textContent =
		"Effortlessly create content structures that flex to your needs";
	rightContent.appendChild(stepHeading);

	const stepDescription = createElement("p", "wrap-paragraph");
	stepDescription.textContent =
		"No matter which data structure is best for your business, you can easily define models and add relations to create rich layout experiences.";
	rightContent.appendChild(stepDescription);
}
