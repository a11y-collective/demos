const textarea = document.querySelector(".js-message");
const charCountSpan = document.querySelector(".js-count");
const maxChars = 150;

textarea.addEventListener("input", updateCharCount);

const updateCharCount = () => {
	const remainingChars = maxChars - textarea.value.length;
	charCountSpan.textContent = remainingChars;

	if (remainingChars <= 0) {
		textarea.value = textarea.value.substring(0, maxChars - 1);
	}
};
