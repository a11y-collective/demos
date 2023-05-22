// Main Menu
const mobileScreen = document.querySelector(".mobile-screen");
const menuButton = document.querySelector(".js-menu-button");
const navigation = document.querySelector(".js-navigation");
const hamburgerMenu = document.querySelector(".js-hamburger-menu");

const handleHamburgerClose = () => {
	navigation.setAttribute("aria-hidden", true);
	menuButton.setAttribute("aria-expanded", false);
	menuButton.setAttribute("aria-label", "Menu");
	menuButton.lastElementChild.textContent = "Menu";

	if (mobileScreen){
		mobileScreen.style.overflowY = "scroll";
	} else {
		document.body.style.overflowY = "initial";
	}
};

menuButton.addEventListener("click", () => {
	const expanded = menuButton.getAttribute("aria-expanded");

	if (expanded === "false") {
		navigation.setAttribute("aria-hidden", false);
		menuButton.setAttribute("aria-expanded", true);
		menuButton.setAttribute("aria-label", "Close menu");
		menuButton.lastElementChild.textContent = "Close";
		focusTrap(hamburgerMenu, menuButton, handleHamburgerClose);
		
		if (mobileScreen){
			mobileScreen.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "hidden";
		}
	}
});

// Sub Menu
const subButtons = document.querySelectorAll(".js-sub-button");

subButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const expanded = button.getAttribute("aria-expanded");
		const list = button.nextElementSibling;

		if (expanded === "false") {
			list.setAttribute("aria-hidden", false);
			button.setAttribute("aria-expanded", true);
		} else {
			list.setAttribute("aria-hidden", true);
			button.setAttribute("aria-expanded", false);
		}
	});
});
