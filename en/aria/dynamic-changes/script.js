const textarea = document.querySelector(".js-message");
const charCountSpan = document.querySelector(".js-count");
const ariaLive = document.querySelector(".js-aria-live");
const maxChars = 150;
const halfThreshold = maxChars * 0.5;
const ninthThreshold = maxChars * 0.1;

const updateCharCount = () => {
	let remainingChars = maxChars - textarea.value.length;

	if (remainingChars <= 0) {
		textarea.value = textarea.value.substring(0, maxChars - 1);
		remainingChars = 0;
	}

	charCountSpan.textContent = remainingChars;

	if (remainingChars === halfThreshold) {
		ariaLive.setAttribute("aria-live", "polite");
		ariaLive.innerHTML = `<p>${remainingChars} characters remaining</p>`;

		return;
	}

	if (remainingChars === ninthThreshold) {
		ariaLive.setAttribute("aria-live", "assertive");
		ariaLive.innerHTML = `<p>${remainingChars} characters remaining</p>`;

		return;
	}
};

textarea.addEventListener("input", updateCharCount);
