const requiredFields = document.querySelectorAll("[required]");
const form           = document.querySelector(".js-form");
const notifications  = document.querySelector(".js-notifications");

const checkValidity = (event) => {
	event.preventDefault();
	const emptyFields = [];

	requiredFields.forEach((field) => {
		field.setAttribute("aria-invalid", "false");

		// Check if field is empty.
		if (!field.value) {
			field.setAttribute("aria-invalid", "true");
			emptyFields.push(field.labels[0]);
		}
	});

	notifications.innerHTML = "";

	if (!emptyFields.length) {
		notifications.innerHTML = "<p>Form successfully send!</p>"; // Success message.
	} else {
		setSummary(emptyFields);
		setInlineMessage(emptyFields);
	}
	notifications.focus();
};

const setSummary = (fields) => {

	const summaryBox     = document.createElement("div");
	const summaryMessage = document.createElement("h3");
	const summaryText    = document.createElement("p");
	const summaryList    = document.createElement("ol");

	summaryBox.classList.add("form__summary");

	const listItems = fields.map((field) => {
		return `
			<li>
				<a href="#${field.getAttribute("for")}">
					${field.querySelector(".form__field-name").textContent}: ${
			field.dataset.validation
		}
				</a>
			</li>
		`;
	});
	summaryMessage.innerHTML = "There was a problem with your submission. The following inputs need attention"; // Fail message.
	summaryList.innerHTML    = listItems.join("");
	summaryBox.append(summaryMessage, summaryText, summaryList);
	notifications.prepend(summaryBox);
};

const setInlineMessage = (fields) => {
	fields.forEach((field) => {
		const message = field.nextElementSibling.nextElementSibling;
		message.textContent = field.dataset.validation;
	});
};

form.addEventListener("submit", checkValidity);
