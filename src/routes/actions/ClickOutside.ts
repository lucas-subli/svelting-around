export function clickOutside(node: HTMLDivElement) {
	const handleClick = (event: MouseEvent) => {
        console.log("clickOutside: ", node.constructor.name);
		if (!node.contains(event.target as Node)) {
			node.dispatchEvent(new CustomEvent("outclick"));
		}
	};

	document.addEventListener("click", handleClick, true);

	return {
		destroy() {
			document.removeEventListener("click", handleClick, true);
		}
	};
}