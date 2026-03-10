export function createElement(tag, className, idName) {
	const element = document.createElement(tag);

	if (className) {
		if (className) {
			element.className = className;
		}
	}

	if (idName) {
		element.id = idName;
	}

	return element;
}
