function focusTrap(element, removeButton, handleClose) {
	const focusable =
		'button, a:not(.skiplink), input, select, textarea, [tabindex]:not([tabindex="-1"])';
	const focusableElements = element.querySelectorAll(focusable);
	const firstFocusableElement = focusableElements[0];
	const lastFocusableElement = focusableElements[focusableElements.length - 1];

	firstFocusableElement.focus();

	const shutdownFocusTrap = () => {
		handleClose();
		element.removeEventListener('keydown', handleKeydown);
		removeButton.removeEventListener('click', shutdownFocusTrap);
		removeButton.focus();
	};

	removeButton.addEventListener('click', shutdownFocusTrap);
	
	const handleKeydown = (event) => {
		const isEscPressed = (event.key === 'Escape');
		const isTabPressed = (event.key === 'Tab' || event.keyCode === 9);
		

		if ( isEscPressed ) {
			shutdownFocusTrap();
		}
		
		if ( !isTabPressed ) {
			return;
		}
		
		if ( event.shiftKey ) {
			if ( document.activeElement === firstFocusableElement ) {
				event.preventDefault();
				lastFocusableElement.focus();
			}
			return;
		}
		
		if ( document.activeElement === lastFocusableElement ) {
			event.preventDefault();
			firstFocusableElement.focus();
		}
	};
	
	element.addEventListener('keydown', handleKeydown);
}
