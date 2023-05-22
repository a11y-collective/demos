const buttonOpen = document.querySelector(".js-open-dialog");
const buttonClose = document.querySelector(".js-close-dialog");
const dialog = document.querySelector(".dialog");

const handleDialogClose = () => {
	document.documentElement.style.removeProperty("overflow");
	dialog.close();
};

const handleDialogOpen = () => {
	document.documentElement.style.overflow = "clip";
	dialog.showModal();
};

buttonOpen.addEventListener("click", handleDialogOpen);

buttonClose.addEventListener("click", handleDialogClose);