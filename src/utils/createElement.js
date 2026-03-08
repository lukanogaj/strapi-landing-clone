export function createElement(tag, className, idName) {
	const element = document.createElement(tag);

	if (className) {
		element.classList.add(className);
	}

	if (idName) {
		element.id = idName;
	}

	return element;
}
