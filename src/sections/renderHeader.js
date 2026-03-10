import { createElement } from "../utils/createElement.js";
import { menuItems } from "../data/menuData.js";

export function renderHeader(container) {
	const header = createElement("header", "header");
	container.appendChild(header);

	const topMenu = createElement("nav", "top-menu");
	header.appendChild(topMenu);

	const logo = createElement("a", "strapi-logo");
	logo.textContent = "strapi";
	logo.href = "#hero";
	topMenu.appendChild(logo);

	menuItems.forEach((itemText) => {
		const item = createElement("li", "list-item");

		const link = createElement("a");
		link.textContent = itemText;
		link.href = `#${itemText.toLowerCase()}`;

		item.appendChild(link);
		topMenu.appendChild(item);
	});

	const headerButtons = createElement("div", "header-btn");
	topMenu.appendChild(headerButtons);

	const gitHubIconButton = createElement("button", "gitHubBtn");
	gitHubIconButton.innerHTML = '<i class="fa-brands fa-github"></i>';
	headerButtons.appendChild(gitHubIconButton);

	gitHubIconButton.addEventListener("click", () => {
		window.open("https://github.com/YOUR_REPO", "_blank");
	});

	const gitHubCountButton = createElement("button", "gitHubBtn");
	gitHubCountButton.textContent = "298057";
	headerButtons.appendChild(gitHubCountButton);

	gitHubCountButton.addEventListener("click", () => {
		window.open("https://github.com/YOUR_REPO", "_blank");
	});

	const getStartedButton = createElement("button", "getstarted-btn");
	getStartedButton.textContent = "Get Started";
	topMenu.appendChild(getStartedButton);

	getStartedButton.addEventListener("click", () => {
		window.location.href = "#steps";
	});
}
