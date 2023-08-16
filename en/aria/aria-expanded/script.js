const toggle = document.querySelector(".js-toggle");
const content = document.querySelector(".js-content");

toggle.addEventListener("click", function () {
	const isExpanded = toggle.getAttribute("aria-expanded") === "true";

	if (isExpanded) {
		toggle.setAttribute("aria-expanded", "false");
		content.setAttribute("aria-hidden", "true");
	} else {
		toggle.setAttribute("aria-expanded", "true");
		content.setAttribute("aria-hidden", "false");
	}
});
