const slider = document.querySelector(".slider");
const slides = [...document.querySelectorAll(".slider__slide")];
const track = document.querySelector(".slider__slides");

const sliderNav = document.querySelector('.slider__nav');
const sliderTabs = document.querySelectorAll('.slider__nav > [role="tab"]');

const controls = document.querySelectorAll('[data-action]');

let scrollTotal = track.scrollWidth;
let scrollPart = scrollTotal / slides.length;

let currentSlide = 0;
let scrollTimer = null;

const handleResize = () => {
	scrollTotal = track.scrollWidth;
	scrollPart = scrollTotal / slides.length;
};

const scrollFinished = () => {
	scrollTimer = null;
};

const selectCurrentSlide = () => {
	sliderTabs.forEach((button, i) => {
		if (i === currentSlide) {
			button.setAttribute("aria-selected", "true");
		} else {
			button.setAttribute("aria-selected", "false");
		}
	});
	
	slides.forEach((slide, i) => {
		if (i === currentSlide) {
			slide.setAttribute("aria-hidden", "false");
		} else {
			slide.setAttribute("aria-hidden", "true");
		}
	});
};

const scrollToCurrentSlide = () => {
	clearTimeout(scrollTimer);

	scrollTimer = setTimeout(() => {
		scrollFinished();
	}, 700);

	track.scrollLeft = currentSlide * scrollPart;
}

controls.forEach(control => {
	control.addEventListener("click", event => {
		const button = event.target.closest('button');
		const { action } = button.dataset;

		if (action === 'previous') {
			if (currentSlide === 0) {
				currentSlide = slides.length - 1;
			} else {
				currentSlide--;
			}
		}

		if (action === 'next') {
			if (currentSlide === slides.length - 1) {
				currentSlide = 0;
			} else {
				currentSlide++;
			}
		}

		scrollToCurrentSlide()
		selectCurrentSlide();
	})
})

sliderTabs.forEach( (tab, i) => {
	tab.addEventListener('click', () => {
		currentSlide = i;

		selectCurrentSlide();
		scrollToCurrentSlide();
	})
})

sliderNav.addEventListener('keydown', event => {
	if (event.key === "Tab") {
		event.preventDefault();
		controls[0].focus();
		return;
	}

	if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
		return;
	}

	if (event.key === "ArrowRight") {
		currentSlide++;

		if (currentSlide >= sliderTabs.length) {
			currentSlide = 0;
		}
	}

	if (event.key === "ArrowLeft") {
		currentSlide--;

		if (currentSlide < 0) {
			currentSlide = sliderTabs.length - 1;
		}
	}

	sliderTabs[currentSlide].focus();
	selectCurrentSlide();
	scrollToCurrentSlide();
})

track.addEventListener("scroll", () => {
	if (scrollTimer) {
		return;
	}

	const fraction = Math.round(track.scrollLeft / scrollPart);

	if (fraction !== currentSlide) {
		currentSlide = fraction;
		selectCurrentSlide();
	}
});

window.addEventListener("resize", handleResize);
selectCurrentSlide();
