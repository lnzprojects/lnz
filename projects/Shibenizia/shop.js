window.onload = function() {
	if (localStorage.getItem('coin') === undefined || localStorage.getItem('coin') === null) {
		localStorage.setItem('coin', 0);
	}
	document.getElementById('text-coin').innerHTML = localStorage.getItem('coin');
	if (localStorage.getItem('scene') === undefined || localStorage.getItem('scene') === null) {
		localStorage.setItem('scene', 0);
	}
	if (localStorage.getItem('bought') === undefined || localStorage.getItem('bought') === null) {
		localStorage.setItem('bought', 0);
	}

	for (var i = 0; i < localStorage.getItem('bought').length; i++) {
		document.getElementsByClassName("shop-item-span")[parseInt(localStorage.getItem('bought')[i])].innerHTML = 'куплено';
		document.getElementsByClassName("coin")[parseInt(localStorage.getItem('bought')[i])].src = 'bought.png';
		document.getElementsByClassName("shop-item-title")[parseInt(localStorage.getItem('bought')[i])].style.paddingLeft = "25px";
	}

	document.getElementsByClassName("td-shop")[parseInt(localStorage.getItem('scene'))].style.border = '3px solid red';

	document.addEventListener('click', function(event) {
		
		if (event.target.className == 'td-shop' || event.target.className == 'div-shop-image' || event.target.className == 'shop-image' || event.target.className == 'shop-item-title' || event.target.className == 'shop-item-span' || event.target.className == 'coin' || event.target.className == 'div-coin-item' || event.target.className == 'div-item-span') {
			let a = event.target.className,
				num;
			for (let i = 0; i < document.getElementsByClassName(a).length; i++) {
				if (document.getElementsByClassName(a)[i] == event.target) {
					num = i;
					break;
				}
			}
			let coinSrc = document.getElementsByClassName("coin")[num].src;
			if (coinSrc[coinSrc.length-5] == 'n') {
				buyorno = confirm('Ви впевпені, що хочете купити цього персонажа?');
				if (buyorno) {
					if (parseInt(document.getElementById('text-coin').innerHTML) < parseInt(document.getElementsByClassName("shop-item-span")[num].innerHTML)) {
						alert('На жаль, у Вас недостатньо монеток..');
					} else {
						localStorage.setItem('coin', parseInt(localStorage.getItem('coin'))-parseInt(document.getElementsByClassName("shop-item-span")[num].innerHTML));
						document.getElementById('text-coin').innerHTML = localStorage.getItem('coin');
						localStorage.setItem('bought', localStorage.getItem('bought')+num);
						document.getElementsByClassName("shop-item-span")[num].innerHTML = 'bought';
						document.getElementsByClassName("coin")[num].src = 'bought.png';
					}
					
				}
			} else if (coinSrc[coinSrc.length-5] == 't') {
				for (var i = 0; i < document.getElementsByClassName("td-shop").length; i++) {
					document.getElementsByClassName("td-shop")[i].style.border = '3px solid #B9B9B4';
				}
				document.getElementsByClassName("td-shop")[num].style.border = '3px solid red';
				let sceneSrc = document.getElementsByClassName('shop-image')[num].src;
				sceneSrc = sceneSrc.slice(-10, -9);
				localStorage.setItem('scene', sceneSrc);
			}
		}
			
	});
}