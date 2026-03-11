import { createElement } from "../utils/createElement.js";

function createMockLine(className) {
	return createElement("div", className);
}

function createDashboardMock() {
	const mock = createElement("div", "hero-mock hero-mock-dashboard");

	const topbar = createElement("div", "hero-mock-topbar");
	mock.appendChild(topbar);

	const topbarDots = createElement("div", "hero-mock-dots");
	topbar.appendChild(topbarDots);

	for (let index = 0; index < 3; index += 1) {
		topbarDots.appendChild(createElement("span", "hero-mock-dot"));
	}

	const topbarBadge = createElement("div", "hero-mock-badge");
	topbarBadge.textContent = "Content Manager";
	topbar.appendChild(topbarBadge);

	const body = createElement("div", "hero-mock-body");
	mock.appendChild(body);

	const sidebar = createElement("div", "hero-mock-sidebar");
	body.appendChild(sidebar);

	for (let index = 0; index < 5; index += 1) {
		sidebar.appendChild(createMockLine("hero-mock-sidebar-line"));
	}

	const content = createElement("div", "hero-mock-content");
	body.appendChild(content);

	const contentHeader = createElement("div", "hero-mock-content-header");
	content.appendChild(contentHeader);

	const contentTitle = createElement("div", "hero-mock-title");
	contentHeader.appendChild(contentTitle);

	const contentChip = createElement("div", "hero-mock-chip");
	contentChip.textContent = "Draft";
	contentHeader.appendChild(contentChip);

	const cardGrid = createElement("div", "hero-mock-card-grid");
	content.appendChild(cardGrid);

	const primaryCard = createElement(
		"div",
		"hero-mock-card hero-mock-card-primary",
	);
	cardGrid.appendChild(primaryCard);

	const primaryCardLineWide = createMockLine(
		"hero-mock-card-line hero-mock-card-line-wide",
	);
	const primaryCardLineShort = createMockLine(
		"hero-mock-card-line hero-mock-card-line-short",
	);
	primaryCard.appendChild(primaryCardLineWide);
	primaryCard.appendChild(primaryCardLineShort);

	const secondaryCard = createElement("div", "hero-mock-card");
	cardGrid.appendChild(secondaryCard);

	const secondaryCardLineWide = createMockLine(
		"hero-mock-card-line hero-mock-card-line-wide",
	);
	const secondaryCardLineMedium = createMockLine(
		"hero-mock-card-line hero-mock-card-line-medium",
	);
	secondaryCard.appendChild(secondaryCardLineWide);
	secondaryCard.appendChild(secondaryCardLineMedium);

	const footerLine = createMockLine("hero-mock-footer-line");
	content.appendChild(footerLine);

	return mock;
}

function createApiMock() {
	const mock = createElement("div", "hero-mock hero-mock-api");

	const topbar = createElement("div", "hero-mock-topbar hero-mock-topbar-api");
	mock.appendChild(topbar);

	const endpoint = createElement("div", "hero-mock-endpoint");
	endpoint.textContent = "GET /api/articles";
	topbar.appendChild(endpoint);

	const status = createElement("div", "hero-mock-status");
	status.textContent = "200 OK";
	topbar.appendChild(status);

	const codeWindow = createElement("div", "hero-code-window");
	mock.appendChild(codeWindow);

	const codeLines = [
		"{",
		'  "data": [',
		'    { "title": "Homepage",',
		'      "status": "published" }',
		"  ]",
		"}",
	];

	codeLines.forEach((lineText, index) => {
		const line = createElement("div", "hero-code-line");
		if (index === 0 || index === codeLines.length - 1) {
			line.classList.add("hero-code-line-symbol");
		}
		if (index === 1) {
			line.classList.add("hero-code-line-accent");
		}
		line.textContent = lineText;
		codeWindow.appendChild(line);
	});

	const apiFooter = createElement("div", "hero-api-footer");
	mock.appendChild(apiFooter);

	const responseCard = createElement("div", "hero-api-response");
	apiFooter.appendChild(responseCard);

	const responseTitle = createElement("div", "hero-api-response-title");
	responseTitle.textContent = "API Response";
	responseCard.appendChild(responseTitle);

	const responseLineOne = createMockLine(
		"hero-api-response-line hero-api-response-line-wide",
	);
	const responseLineTwo = createMockLine(
		"hero-api-response-line hero-api-response-line-medium",
	);
	responseCard.appendChild(responseLineOne);
	responseCard.appendChild(responseLineTwo);

	return mock;
}

export function renderHero(container) {
	const hero = createElement("section", "hero");
	hero.id = "hero";
	container.appendChild(hero);

	const announcement = createElement("div", "hero-announcement");
	hero.appendChild(announcement);

	const announcementBadge = createElement("div", "hero-announcement-badge");
	announcementBadge.textContent = "New";
	announcement.appendChild(announcementBadge);

	const announcementText = createElement("div", "announcement-text");
	announcementText.textContent = "Strapi closes $31M Series B";
	announcement.appendChild(announcementText);

	const announcementLinkWrapper = createElement(
		"div",
		"announcement-link-wrap",
	);
	announcement.appendChild(announcementLinkWrapper);

	const announcementLink = createElement("a", "hrefLink");
	announcementLink.textContent = "Learn more";
	announcementLink.href = "#steps";
	announcementLinkWrapper.appendChild(announcementLink);

	const heroTitle = createElement("h1", "hero-title");
	heroTitle.textContent = "Design APIs fast, manage content easily.";
	hero.appendChild(heroTitle);

	const heroSubtitle = createElement("h2", "hero-subtitle");
	heroSubtitle.textContent =
		"Strapi is the leading open-source headless CMS. It's 100% JavaScript, fully customizable and developer-first.";
	hero.appendChild(heroSubtitle);

	const heroInput = createElement("input", "input-api");
	heroInput.placeholder = "npx create-strapi-app@latest my-project";
	hero.appendChild(heroInput);

	const buttonGroup = createElement("div", "hero-actions");
	hero.appendChild(buttonGroup);

	const primaryButton = createElement("button", "getstarted-btn");
	primaryButton.textContent = "Get Started";
	buttonGroup.appendChild(primaryButton);

	const secondaryButton = createElement("button", "btn-demo");
	secondaryButton.textContent = "Try the live demo";

	secondaryButton.addEventListener("click", () => {
		window.open("https://strapi.io/demo", "_blank");
	});

	buttonGroup.appendChild(secondaryButton);

	const animationWrapper = createElement("div", "hero-visuals");
	hero.appendChild(animationWrapper);

	const dashboardCard = createElement(
		"div",
		"hero-visual-card hero-visual-card--dashboard",
	);
	const apiCard = createElement(
		"div",
		"hero-visual-card hero-visual-card--api",
	);

	dashboardCard.appendChild(createDashboardMock());
	apiCard.appendChild(createApiMock());

	animationWrapper.appendChild(dashboardCard);
	animationWrapper.appendChild(apiCard);
}
