import { createElement } from "../utils/createElement.js";
import { menuItems } from "../data/menuData.js";

export function renderHeader(container) {
	const header = createElement("header", "header");
	container.appendChild(header);

	const topMenu = createElement("ul", "top-menu");
	header.appendChild(topMenu);

	const logo = createElement("h2", "strapi-logo");
	logo.textContent = "strapi";
	topMenu.appendChild(logo);

	menuItems.forEach((itemText) => {
		const item = createElement("li", "list-item");
		item.textContent = itemText;
		topMenu.appendChild(item);
	});

	const headerButtons = createElement("div", "header-btn");
	topMenu.appendChild(headerButtons);

	const gitHubIconButton = createElement("button", "gitHubBtn");
	gitHubIconButton.innerHTML = '<i class="fa-brands fa-github"></i>';
	headerButtons.appendChild(gitHubIconButton);

	const gitHubCountButton = createElement("button", "gitHubBtn");
	gitHubCountButton.textContent = "298057";
	headerButtons.appendChild(gitHubCountButton);

	const getStartedButton = createElement("button", "getstarted-btn");
	getStartedButton.textContent = "Get Started";
	topMenu.appendChild(getStartedButton);
}
