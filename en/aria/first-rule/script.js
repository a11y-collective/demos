const alertButtons = document.querySelectorAll(".js-alert");

alertButtons.forEach((button) => {
	button.addEventListener("click", () => {
		alert("You clicked me!");
	});

	button.addEventListener("keydown", (event) => {
		if (event.key === "Enter") {
			button.click();
		}
	});
});
