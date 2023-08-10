
const requiredFields = document.querySelectorAll("[required]");
const form = document.querySelector(".js-form");
const summaryBox = document.createElement("div");
const summaryText = document.createElement("p");
const summaryList = document.createElement("ol");

const checkValidity = (event) => {
    event.preventDefault();
    const emptyFields = [];

    requiredFields.forEach((field) => {
        field.setAttribute('aria-invalid', 'false');

        // Check if field is empty
        if (!field.value) {
            field.setAttribute('aria-invalid', 'true');
            emptyFields.push(field.labels[0]);
        }
    });

    if (!emptyFields.length) {
        form.submit();
    } else {
        setSummary(emptyFields);
        setInlineMessage(emptyFields);
    }
};

const setSummary = (fields) => {
    summaryBox.classList.add("form__summary");
    summaryText.textContent =
        "There was a problem with your submission. The following inputs need attention";

    const listItems = fields.map((field) => {
        return `
			<li>
				<a href="#${field.getAttribute("for")}">${field.querySelector('.form__field-name').textContent}: ${field.dataset.validation}</a>
			</li>
		`;
    });

    summaryList.innerHTML = listItems.join("");

    summaryBox.append(summaryText, summaryList);
    summaryBox.setAttribute("tabindex", "0");
    form.prepend(summaryBox);
    summaryBox.focus();
};

const setInlineMessage = (fields) => {
    fields.forEach((field) => {
        const message = field.nextElementSibling.nextElementSibling;
        message.textContent = field.dataset.validation;
    });
};

form.addEventListener("submit", checkValidity);


