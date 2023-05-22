const component = document.querySelector('.tabs');
const tabList = component.querySelector('[role="tablist"]');
const tabs = component.querySelectorAll('[role="tab"]');
const tabPanels = component.querySelectorAll('[role="tabpanel"]');

let tabsIndex = 0;

tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		changeTabs(tab);
	});
});


tabList.addEventListener("keydown", event => {
	if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
		return;
	}

	tabs[tabsIndex].setAttribute("tabtabsIndex", -1);

	if (event.key === "ArrowRight") {
		tabsIndex++;

		if (tabsIndex >= tabs.length) {
			tabsIndex = 0;
		}
	}

	if (event.key === "ArrowLeft") {
		tabsIndex--;

		if (tabsIndex < 0) {
			tabsIndex = tabs.length - 1;
		}
	}

	tabs[tabsIndex].setAttribute("tabtabsIndex", 0);
	tabs[tabsIndex].focus();
	changeTabs(tabs[tabsIndex]);
});

function changeTabs(nextTab) {
	tabs.forEach( tab => {
		if (tab === nextTab) {
			tab.setAttribute("aria-selected", true)
		} else {
			tab.setAttribute("aria-selected", false);
		}
	});

	tabPanels.forEach( tabPanel => {
		tabPanel.setAttribute("aria-hidden", true)
	});

	component.querySelector(`#${nextTab.getAttribute("aria-controls")}`).setAttribute("aria-hidden", false);
}
