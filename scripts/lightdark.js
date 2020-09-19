function setCookie(name,value,days) {
		var expires = "";
		if (days) {
				var date = new Date();
				date.setTime(date.getTime() + (days*24*60*60*1000));
				expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + (value || "")  + expires + "; SameSite=Lax; path=/";
}

function getCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
}

var currentTheme = getCookie('theme') || 'dk',
		themeSheet = document.getElementById("theme-sheet"),
		themeSwitcher = document.getElementById("theme-switcher");

function toggleTheme() {
	currentTheme = currentTheme === 'dk' ? 'lt' : 'dk'
}

function resetSwitcherText() {
	themeSwitcher.textContent = currentTheme === 'dk' ? "\u263E\u263C" : "\u263C\u263D"
}

function loadTheme() {
	var t = themeSheet.href
	var stripped = t.substring(0, t.length - currentTheme.length - '.css'.length)
	themeSheet.href = stripped + currentTheme + ".css"
	setCookie('theme', currentTheme)
	resetSwitcherText()
}

loadTheme()

themeSwitcher.onclick = function() { toggleTheme(); loadTheme(); }
