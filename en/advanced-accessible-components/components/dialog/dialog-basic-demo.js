const buttonOpen = document.querySelector(".js-open-dialog");
const buttonClose = document.querySelector(".js-close-dialog");
const dialog = document.querySelector(".dialog");

const handleDialogClose = () => {
	dialog.close();
};

const handleDialogOpen = () => {
	dialog.showModal();
};

buttonOpen.addEventListener("click", handleDialogOpen);

buttonClose.addEventListener("click", handleDialogClose);