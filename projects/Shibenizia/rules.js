window.onload = function() {
	document.getElementById('text-coin').innerHTML = localStorage.getItem('coin');
	if (localStorage.getItem('coin') === undefined || localStorage.getItem('coin') === null) {
		localStorage.setItem('coin', 0);
	}
}

