import { createElement } from "../utils/createElement.js";
import { menuItems } from "../data/menuData.js";

export function renderHeader(container) {
	const header = createElement("header", "header");
	container.appendChild(header);

	const headerNav = createElement("nav", "header-nav");
	header.appendChild(headerNav);

	const logo = createElement("a", "strapi-logo");
	logo.textContent = "strapi";
	logo.href = "#hero";
	headerNav.appendChild(logo);

	const navList = createElement("ul", "header-nav-list");
	headerNav.appendChild(navList);

	menuItems.forEach((itemText) => {
		const navItem = createElement("li", "header-nav-item");

		const link = createElement("a");
		link.textContent = itemText;
		link.href = `#${itemText.toLowerCase()}`;

		navItem.appendChild(link);
		navList.appendChild(navItem);
	});

	const headerActions = createElement("div", "header-actions");
	headerNav.appendChild(headerActions);

	const gitHubIconButton = createElement("button", "github-button");
	gitHubIconButton.innerHTML = '<i class="fa-brands fa-github"></i>';
	headerActions.appendChild(gitHubIconButton);

	gitHubIconButton.addEventListener("click", () => {
		window.open("https://github.com/YOUR_REPO", "_blank");
	});

	const gitHubCountButton = createElement("button", "github-button");
	gitHubCountButton.textContent = "298057";
	headerActions.appendChild(gitHubCountButton);

	gitHubCountButton.addEventListener("click", () => {
		window.open("https://github.com/YOUR_REPO", "_blank");
	});

	const getStartedButton = createElement("button", "getstarted-btn");
	getStartedButton.textContent = "Get Started";
	headerActions.appendChild(getStartedButton);

	getStartedButton.addEventListener("click", () => {
		window.location.href = "#steps";
	});
}
