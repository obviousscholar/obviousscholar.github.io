var currentTheme = getCookie('theme') || 'dark',
		themeSwitcher;
		
function initThemeSwitcher() {
	themeSwitcher = document.createElement('span');
	themeSwitcher.id = 'theme-switcher';
	themeSwitcher.onclick = function() { toggleTheme(); loadTheme(); }
	document.querySelector('footer.footer').appendChild(themeSwitcher);
	resetSwitcherText();
}

function toggleTheme() {
	currentTheme = currentTheme === 'dark' ? 'light' : 'dark'
}

function resetSwitcherText() {
	themeSwitcher.textContent = currentTheme === 'dark' ? "\u263E\u263C" : "\u263C\u263D"
}

function loadTheme() {
	if (document.documentElement.dataset.theme === undefined) {
		console.log(currentTheme)
		if (currentTheme)
			document.documentElement.dataset.theme = currentTheme;
		else
			document.documentElement.dataset.theme = "dark"
	} else {
		if (!currentTheme)
			currentTheme = 'dark';
		setCookie('theme', currentTheme);
		document.documentElement.dataset.theme = currentTheme
	}
	if (themeSwitcher)
		resetSwitcherText();
}

loadTheme();
initThemeSwitcher()
