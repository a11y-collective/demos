const trigger = document.querySelector(".js-trigger");
const panel = document.querySelector(".js-panel");

trigger.addEventListener("click", () => {
	const expanded = trigger.getAttribute("aria-expanded") === "true" || false;

	trigger.setAttribute("aria-expanded", !expanded);
	panel.setAttribute("aria-hidden", expanded);
});
