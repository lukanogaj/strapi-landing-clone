const mainDiv = document.querySelector("#main-div");

if (!mainDiv) {
	throw new Error("Root container #main-div not found");
}

function createElement(tag, className, idName) {
	const element = document.createElement(tag);

	if (className) {
		element.classList.add(className);
	}

	if (idName) {
		element.id = idName;
	}

	return element;
}

const menuItems = [
	"Why Strapi",
	"Solutions",
	"Open-source",
	"Docs & Resources",
];

const companyLogos = [
	"./img-logos/orion-health.png",
	"./img-logos/toyota-logo.png",
	"./img-logos/quest-france.png",
	"./img-logos/walmart.png",
	"./img-logos/delivery-hero.png",
	"./img-logos/nasa.png",
	"./img-logos/societe-generale.png",
	"./img-logos/accenture.png",
	"./img-logos/aecom.png",
	"./img-logos/generali.png",
];

const featureCards = [
	{
		title: "Open Source",
		description:
			"Forever. The entire codebase is available on GitHub and maintained by hundreds of contributors.",
	},
	{
		title: "Customizable",
		description:
			"Easily customize the admin panel as well as the API. Extend your content management with custom plugins in seconds.",
	},
	{
		title: "Restful or GraphQL",
		description:
			"Consume the API from any client (React, Vue, Angular), mobile apps, or even IoT devices using REST or GraphQL.",
	},
	{
		title: "Self-hosted",
		description:
			"Don't give up on data privacy or lock yourself in. Keep control of your data and your costs at all times.",
	},
];

function renderHeader(container) {
	const header = createElement("header", "header");
	container.appendChild(header);

	const topMenu = createElement("ul", "top-menu");
	header.appendChild(topMenu);

	const logo = createElement("h2", "strapi-logo");
	logo.textContent = "strapi";
	topMenu.appendChild(logo);

	menuItems.forEach((itemText) => {
		const item = createElement("li", "list-item", "menu-items");
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

function renderHero(container) {
	const hero = createElement("section", "hero");
	container.appendChild(hero);

	const announcement = createElement("div", "new-span");
	hero.appendChild(announcement);

	const announcementBadge = createElement("div", "new-btn");
	announcementBadge.textContent = "New";
	announcement.appendChild(announcementBadge);

	const announcementText = createElement("div", "paragrh1");
	announcementText.textContent = "Strapi closes $31M Series B";
	announcement.appendChild(announcementText);

	const announcementLinkWrapper = createElement("div", "href1");
	announcement.appendChild(announcementLinkWrapper);

	const announcementLink = createElement("a", "hrefLink");
	announcementLink.textContent = "Learn more";
	announcementLink.href = "#";
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

function renderLogos(container) {
	const logosSection = createElement("section", "logos-style");
	container.appendChild(logosSection);

	companyLogos.forEach((logoPath) => {
		const logo = createElement("img", "logo-img");
		logo.src = logoPath;
		logo.alt = "Company logo";
		logosSection.appendChild(logo);
	});

	const ibmWrapper = createElement("div", "ibm-logo");
	container.appendChild(ibmWrapper);

	const ibmLogo = createElement("img", "ibm");
	ibmLogo.src = "./img-logos/ibm.png";
	ibmLogo.alt = "IBM logo";
	ibmWrapper.appendChild(ibmLogo);
}

function renderFeatures(container) {
	const wrapper = createElement("section", "wrapper");
	container.appendChild(wrapper);

	const headings = createElement("div", "wrapper-headings");
	wrapper.appendChild(headings);

	const eyebrow = createElement("h5", "head-h5");
	eyebrow.textContent = "TOP-FEATURES";
	headings.appendChild(eyebrow);

	const title = createElement("h1", "head-h1");
	title.textContent = "Build apps fast.";
	headings.appendChild(title);

	const subtitle = createElement("h3", "head-h3");
	subtitle.innerHTML =
		"Building self-hosted, customizable, and performant content API <br> has never been easier";
	headings.appendChild(subtitle);

	const cardsWrapper = createElement("div", "wrap-main-div");
	wrapper.appendChild(cardsWrapper);

	featureCards.forEach(({ title: cardTitle, description }) => {
		const card = createElement("div", "wrapper-divs");
		cardsWrapper.appendChild(card);

		const heading = createElement("h3", "wrap-main-head");
		heading.textContent = cardTitle;
		card.appendChild(heading);

		const paragraph = createElement("p", "wrap-paragraph");
		paragraph.textContent = description;
		card.appendChild(paragraph);
	});
}

function renderSteps(container) {
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
	stepSubtitle.innerHTML =
		"Make a flexible data structure in 2 minutes.<br>Use our powerful features to customize your API";
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
	stepHeading.innerHTML =
		"Effortlessly create content<br>structures that flex to your needs";
	rightContent.appendChild(stepHeading);

	const stepDescription = createElement("p", "wrap-paragraph");
	stepDescription.innerHTML =
		"No matter which data structure is best for<br>your business, you can easily define models<br>and add relations to create rich layout<br>experiences.";
	rightContent.appendChild(stepDescription);
}

function init() {
	renderHeader(mainDiv);
	renderHero(mainDiv);
	renderLogos(mainDiv);
	renderFeatures(mainDiv);
	renderSteps(mainDiv);
}

init();
