const textarea = document.querySelector(".js-message");
const charCountSpan = document.querySelector(".js-count");
const maxChars = 150;

const updateCharCount = () => {
	let remainingChars = maxChars - textarea.value.length;

	if (remainingChars <= 0) {
		textarea.value = textarea.value.substring(0, maxChars - 1);
		remainingChars = 0;
	}

	charCountSpan.textContent = remainingChars;
};

textarea.addEventListener("input", updateCharCount);
