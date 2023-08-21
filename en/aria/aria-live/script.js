const chat = document.querySelector(".js-chat");
const input = document.querySelector(".js-input");
const submitButton = document.querySelector(".js-submit");

submitButton.addEventListener("click", sendMessage);

function sendMessage() {
	const userMessage = input.value.trim();
	if (userMessage !== "") {
		appendMessage(`You: ${userMessage}`, true);
		input.value = "";
		generateRandomResponse();
		input.focus();
	}
}

function generateRandomResponse() {
	const responses = [
		"I see.",
		"Interesting perspective!",
		"Please tell me more.",
		"That's a valid point.",
		"I'm here to chat with you.",
		"Feel free to share your thoughts.",
		"Let's continue the conversation!",
		"That's worth considering.",
		"I appreciate your input.",
		"Your insights are valuable.",
		"Thank you for sharing.",
		"I'm glad you're engaging with me.",
		"You have a unique viewpoint.",
		"Let's explore that further.",
		"Your thoughts matter.",
		"I'm listening.",
		"Your perspective is important.",
		"It's great to discuss with you.",
		"Keep the conversation going!",
		"Your feedback is welcome.",
	];

	const randomIndex = Math.floor(Math.random() * responses.length);
	const response = `Computer: ${responses[randomIndex]}`;
	appendMessage(response, false);
}

function appendMessage(message) {
	const messageElement = document.createElement("p");
	messageElement.textContent = message;
	chat.appendChild(messageElement);
}
