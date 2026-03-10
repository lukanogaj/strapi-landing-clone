import { createElement } from "../utils/createElement.js";

export function renderHero(container) {
	const hero = createElement("section", "hero");
	container.appendChild(hero);

	const announcement = createElement("div", "new-span");
	hero.appendChild(announcement);

	const announcementBadge = createElement("div", "new-btn");
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

	const heroTitle = createElement("h1", "head1");
	heroTitle.textContent = "Design APIs fast, manage content easily.";
	hero.appendChild(heroTitle);

	const heroSubtitle = createElement("h2", "head2");
	heroSubtitle.textContent =
		"Strapi is the leading open-source headless CMS. It's 100% JavaScript, fully customizable and developer-first.";
	hero.appendChild(heroSubtitle);

	const heroInput = createElement("input", "input-api");
	heroInput.placeholder = "npx create-strapi-app@latest my-project";
	hero.appendChild(heroInput);

	const buttonGroup = createElement("div", "api-buttons");
	hero.appendChild(buttonGroup);

	const primaryButton = createElement("button", "getstarted-btn");
	primaryButton.textContent = "Get Started";
	buttonGroup.appendChild(primaryButton);

	const secondaryButton = createElement("button", "btn-demo");
	secondaryButton.textContent = "Try the live demo";
	buttonGroup.appendChild(secondaryButton);

	const animationWrapper = createElement("div", "animation-div");
	hero.appendChild(animationWrapper);

	const animationFirst = createElement("div", "animation-first");
	const animationSecond = createElement("div", "animation-second");

	animationWrapper.appendChild(animationFirst);
	animationWrapper.appendChild(animationSecond);
}
