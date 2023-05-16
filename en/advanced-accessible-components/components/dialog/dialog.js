const buttonOpen = document.querySelectorAll(".js-open-dialog");
const buttonClose = document.querySelector(".js-close-dialog");
const dialog = document.querySelector(".dialog");
const card = document.querySelector(".dialog__card");

const handleDialogClose = () => {
	dialog.close();
	document.documentElement.style.removeProperty("overflow");
	card.removeAttribute("tabindex");
};

const handleDialogOpen = (e) => {
	card.setAttribute("tabindex", "0");
	dialog.showModal();
	document.documentElement.style.overflow = "clip";
	focusTrap(dialog, buttonClose, handleDialogClose);
};

buttonOpen.forEach( button => {
	button.addEventListener("click", handleDialogOpen);
})

dialog.addEventListener("click", handleDialogClose);

card.addEventListener("click", (e) => {
	e.stopPropagation();
});
