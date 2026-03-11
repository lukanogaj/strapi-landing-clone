import { createElement } from "../utils/createElement.js";

export function renderSteps(container) {
	const stepsSection = createElement("section", "steps-section");
	stepsSection.id = "steps";
	container.appendChild(stepsSection);

	const stepsHeadings = createElement("div", "steps-headings");
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

	const stepsContent = createElement("div", "steps-layout");
	stepsSection.appendChild(stepsContent);

	const leftVisual = createElement("div", "steps-visual");
	stepsContent.appendChild(leftVisual);

	const mockWindow = createElement("div", "steps-mock-window");
	leftVisual.appendChild(mockWindow);

	const mockTopbar = createElement("div", "steps-mock-topbar");
	mockWindow.appendChild(mockTopbar);

	const mockDots = createElement("div", "steps-mock-dots");
	mockTopbar.appendChild(mockDots);

	for (let i = 0; i < 3; i += 1) {
		const dot = createElement("span", "steps-mock-dot");
		mockDots.appendChild(dot);
	}

	const mockLayout = createElement("div", "steps-mock-layout");
	mockWindow.appendChild(mockLayout);

	const mockSidebar = createElement("div", "steps-mock-sidebar");
	mockLayout.appendChild(mockSidebar);

	for (let i = 0; i < 5; i += 1) {
		const sidebarLine = createElement("div", "steps-mock-sidebar-line");
		mockSidebar.appendChild(sidebarLine);
	}

	const mockContent = createElement("div", "steps-mock-content");
	mockLayout.appendChild(mockContent);

	const mockBadge = createElement("div", "steps-mock-badge");
	mockBadge.textContent = "Content Type Builder";
	mockContent.appendChild(mockBadge);

	const mockHeading = createElement("div", "steps-mock-heading");
	mockContent.appendChild(mockHeading);

	const mockRow = createElement("div", "steps-mock-row");
	mockContent.appendChild(mockRow);

	const mockCardPrimary = createElement(
		"div",
		"steps-mock-card steps-mock-card-primary",
	);
	mockRow.appendChild(mockCardPrimary);

	const mockCardSecondary = createElement("div", "steps-mock-card");
	mockRow.appendChild(mockCardSecondary);

	const mockFooterLine = createElement("div", "steps-mock-footer-line");
	mockContent.appendChild(mockFooterLine);

	const rightContent = createElement("div", "steps-text");
	stepsContent.appendChild(rightContent);

	const stepNumber = createElement("h5", "head-h5");
	stepNumber.textContent = "Step 1";
	rightContent.appendChild(stepNumber);

	const stepHeading = createElement("h3", "feature-card-title");
	stepHeading.textContent =
		"Effortlessly create content structures that flex to your needs";
	rightContent.appendChild(stepHeading);

	const stepDescription = createElement("p", "feature-card-description");
	stepDescription.textContent =
		"No matter which data structure is best for your business, you can easily define models and add relations to create rich layout experiences.";
	rightContent.appendChild(stepDescription);
}
