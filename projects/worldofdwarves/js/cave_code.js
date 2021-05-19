function sleep(ms) 
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

var gold=0;
var rock=0;
var wood=0;
var mine=0;
var sawmill=0;
var warehouse=0;
var max=20;

if (localStorage.getItem('gold') === null || localStorage.getItem('gold') === undefined) 
{
    localStorage.setItem('gold', 0);
}
if (localStorage.getItem('rock') === null || localStorage.getItem('rock') === undefined) 
{
    localStorage.setItem('rock', 0);
}
if (localStorage.getItem('wood') === null || localStorage.getItem('wood') === undefined) 
{
    localStorage.setItem('wood', 0);
}
if (localStorage.getItem('mine') === null || localStorage.getItem('mine') === undefined) 
{
    localStorage.setItem('mine', 0);
}    
if (localStorage.getItem('sawmill') === null || localStorage.getItem('sawmill') === undefined) 
{
    localStorage.setItem('sawmill', 0);
}    
if (localStorage.getItem('warehouse') === null || localStorage.getItem('warehouse') === undefined) 
{
    localStorage.setItem('warehouse', 0);
}    
if (localStorage.getItem('max') === null || localStorage.getItem('max') === undefined) 
{
    localStorage.setItem('max', 20);
}  

console.log(gold,'gold');
console.log(rock,'rock');
console.log(wood,'wood');


gold = parseInt(localStorage.getItem('gold'));
rock = parseInt(localStorage.getItem('rock'));
wood = parseInt(localStorage.getItem('wood'));
mine = parseInt(localStorage.getItem('mine'));
sawmill = parseInt(localStorage.getItem('sawmill'));
warehouse = parseInt(localStorage.getItem('warehouse'));
max = parseInt(localStorage.getItem('max'));

document.getElementById("Gol").innerHTML = localStorage.getItem('gold');
document.getElementById("Roc").innerHTML = localStorage.getItem('rock');
document.getElementById("Woo").innerHTML = localStorage.getItem('wood');

window.onload = storage;


function storage()
{
	localStorage.setItem('gold', gold);
	localStorage.setItem('rock', rock);
	localStorage.setItem('wood', wood);
	localStorage.setItem('mine', mine);
	localStorage.setItem('sawmill', sawmill);
	localStorage.setItem('warehouse', warehouse);
	localStorage.setItem('max', max);
	gold = parseInt(localStorage.getItem('gold'));
	rock = parseInt(localStorage.getItem('rock'));
	wood = parseInt(localStorage.getItem('wood')); 
	mine = parseInt(localStorage.getItem('mine'));
	sawmill = parseInt(localStorage.getItem('sawmill'));
	warehouse = parseInt(localStorage.getItem('warehouse'));
	max = parseInt(localStorage.getItem('max'));
	document.getElementById("Gol").innerHTML = gold;
	document.getElementById("Roc").innerHTML = rock;
	document.getElementById("Woo").innerHTML = wood;
	setTimeout(storage, 1000);
}






if (mine == 1)
	{
		Mineing(); 
	}
if (mine == 1)
	{
		var image = document.getElementById("mine0");
		image.src = "images/mine8.png";
	}



if (sawmill == 1)
	{
		Sawmilling(); 
	}
if (sawmill == 1)
	{
		var image = document.getElementById("sawmill0");
		image.src = "images/sawmill11.png";
	}


if (warehouse == 1)
	{
		var image = document.getElementById("warehouse0");
		image.src = "images/warehouse9.png";
	}
if (warehouse == 2)
	{
		var image = document.getElementById("warehouse0");
		image.src = "images/warehouse16.png";
	}
while (gold+rock+wood>=64)
{
	var image = document.getElementById("warehouse0");
	image.src = "images/warehouse17.png";
}



function buying_mine()
{
	var image = document.getElementById("mine0");
	if (wood>=4 && gold>=10)
	{
		wood=wood-4;
		gold=gold-10;
		document.getElementById("Woo").innerHTML = wood;
		document.getElementById("Gol").innerHTML = gold;
		image.src = "images/mine1.png";
		setTimeout(() => 
		{ 
			image.src = "images/mine2.png";
			setTimeout(() => 
			{ 
				image.src = "images/mine3.png";
				setTimeout(() => 
				{ 
					image.src = "images/mine4.png";
					setTimeout(() => 
					{ 
						image.src = "images/mine5.png";  
						setTimeout(() => 
						{ 
							image.src = "images/mine6.png"; 
							setTimeout(() => 
							{ 
								image.src = "images/mine7.png"; 
								setTimeout(() => 
								{ 
									image.src = "images/mine8.png"; 
								 	mine=1;
									Mineing(); 
								}, 1000); 
							}, 1000); 	 
						}, 1000);	 
					}, 1000);
				}, 1000);	 
			}, 1000); 
		}, 1000);
	}
	else
	{
		console.log('МАЛО!!!');
	}	
}


function Mineing()
{
	setTimeout(() => 
	{ 
		rock=rock+10; 
		console.log(rock,'rock');
		document.getElementById("Roc").innerHTML = rock;
		Mineing()	 
	}, 5000);

	if (rock>max)
	{
		rock=max;
		document.getElementById("Roc").innerHTML = rock;
	}
}


function buying_sawmill()
{
	var image = document.getElementById("sawmill0");
	if (wood>=8 && gold>=10 && rock>=9)
	{
		wood=wood-8;
		gold=gold-10;
		rock=rock-9;
		document.getElementById("Woo").innerHTML = wood;
		document.getElementById("Gol").innerHTML = gold;
		document.getElementById("Roc").innerHTML = rock;
		image.src = "images/sawmill1.png";
		setTimeout(() => 
		{ 
			image.src = "images/sawmill2.png";
			setTimeout(() => 
			{ 
				image.src = "images/sawmill3.png";
				setTimeout(() => 
				{ 
					image.src = "images/sawmill4.png";
					setTimeout(() => 
					{ 
						image.src = "images/sawmill5.png";  
						setTimeout(() => 
						{ 
							image.src = "images/sawmill6.png"; 
							setTimeout(() => 
							{ 
								image.src = "images/sawmill7.png"; 
								setTimeout(() => 
								{ 
									image.src = "images/sawmill8.png"; 
								 	setTimeout(() => 
									{ 
										image.src = "images/sawmill9.png"; 
								 		setTimeout(() => 
										{ 
											image.src = "images/sawmill10.png"; 
								 			setTimeout(() => 
											{ 
												image.src = "images/sawmill11.png"; 
								 				sawmill=1;
								 				Sawmilling();
											}, 1000);
										}, 1000);
									}, 1000);
								}, 1000); 
							}, 1000); 	 
						}, 1000);	 
					}, 1000);
				}, 1000);	 
			}, 1000); 
		}, 1000);
	}
	else
	{
		console.log('МАЛО!!!');
	}	
}




function Sawmilling()
{
	setTimeout(() => 
	{ 
		wood=wood+10; 
		console.log(wood,'wood');
		document.getElementById("Woo").innerHTML = wood;
		Sawmilling()	 
	}, 5000);

	if (wood>max)
	{
		wood=max;
		document.getElementById("Woo").innerHTML = wood;
	}
}




function buying_warehouse()
{
	var image = document.getElementById("warehouse0");
	if (warehouse==1)
	{
		if (wood>=4 && gold>=10 && rock>=10)
		{
			wood=wood-4;
			gold=gold-10;
			rock=rock-10;
			document.getElementById("Woo").innerHTML = wood;
			document.getElementById("Gol").innerHTML = gold;
			document.getElementById("Roc").innerHTML = rock;
			image.src = "images/warehouse10.png";
			setTimeout(() => 
			{ 
				image.src = "images/warehouse11.png";
				setTimeout(() => 
				{ 
					image.src = "images/warehouse12.png";
					setTimeout(() => 
					{ 
						image.src = "images/warehouse13.png";
						setTimeout(() => 
						{ 
							image.src = "images/warehouse14.png";  
							setTimeout(() => 
							{ 
								image.src = "images/warehouse15.png"; 
								setTimeout(() => 
								{ 
									image.src = "images/warehouse16.png"; 
									warehouse=2;
									max=50;
								}, 1000); 	 
							}, 1000);	 
						}, 1000);
					}, 1000);	 
				}, 1000); 
			}, 1000);
		}
		else
		{
			console.log('МАЛО!!!');
		}	
	}
	if (warehouse==0)
	{
		if (wood>=6 && gold>=10 && rock>=20)
		{
			wood=wood-6;
			gold=gold-10;
			rock=rock-20;
			document.getElementById("Woo").innerHTML = wood;
			document.getElementById("Gol").innerHTML = gold;
			document.getElementById("Roc").innerHTML = rock;
			image.src = "images/warehouse1.png";
			setTimeout(() => 
			{ 
				image.src = "images/warehouse2.png";
				setTimeout(() => 
				{ 
					image.src = "images/warehouse3.png";
					setTimeout(() => 
					{ 
						image.src = "images/warehouse4.png";
						setTimeout(() => 
						{ 
							image.src = "images/warehouse5.png";  
							setTimeout(() => 
							{ 
								image.src = "images/warehouse6.png"; 
								setTimeout(() => 
								{ 
									image.src = "images/warehouse7.png"; 
									setTimeout(() => 
									{ 
										image.src = "images/warehouse8.png"; 
									 	setTimeout(() => 
										{ 
											image.src = "images/warehouse9.png"; 
									 		warehouse=1;
										}, 1000);
									}, 1000); 
								}, 1000); 	 
							}, 1000);	 
						}, 1000);
					}, 1000);	 
				}, 1000); 
			}, 1000);
		}
		else
		{
			console.log('МАЛО!!!');
		}	
	}
}



function moreGold()
{
	gold=gold+1;
	console.log(gold,'gold');
	document.getElementById("Gol").innerHTML = gold;
	var image = document.getElementById("miner1");
	image.src = "images/miner2.png";
	setTimeout(() => 
	{ 
		image.src = "images/miner1.png";
		setTimeout(() => 
		{   
			image.src = "images/miner3.png";
			setTimeout(() => 
			{
				image.src = "images/miner4.png";
				setTimeout(() => 
				{
					image.src = "images/miner3.png";
					setTimeout(() => 
					{
						image.src = "images/miner1.png";
					}, 100);
				}, 100);	
			}, 100);
		}, 100);	 
	}, 100);

	if (gold>max)
	{
		gold=max
	}
};



function Small_Rock1()
{
	rock=rock+1;
	console.log(rock,'rock');
	document.getElementById("Roc").innerHTML = rock;
	var image = document.getElementById("SmallRock1");
	image.src = "images/nothing.png"; 
	setTimeout(() => 
	{ 
		image.src = "images/SmallRock1.png"; 	 
	}, 7000);

	if (rock>max)
	{
		rock=max
	}
};

function Small_Rock2()
{
	rock=rock+1;
	console.log(rock,'rock');
	document.getElementById("Roc").innerHTML = rock;
	var image = document.getElementById("SmallRock2");
	image.src = "images/nothing.png"; 
	setTimeout(() => 
	{ 
		image.src = "images/SmallRock2.png"; 	 
	}, 9000);

	if (rock>max)
	{
		rock=max
	}
};

function Small_Wood1()
{
	wood=wood+1;
	console.log(wood,'wood');
	document.getElementById("Woo").innerHTML = wood;
	var image = document.getElementById("SmallWood1");
	image.src = "images/nothing.png"; 
	setTimeout(() => 
	{ 
		image.src = "images/SmallWood1.png"; 	 
	}, 9000);

	if (wood>max)
	{
		wood=max
	}
};

function Small_Wood2()
{
	wood=wood+1;
	console.log(wood,'wood');
	document.getElementById("Woo").innerHTML = wood;
	var image = document.getElementById("SmallWood2");
	image.src = "images/nothing.png"; 
	setTimeout(() => 
	{ 
		image.src = "images/SmallWood2.png"; 	 
	}, 7000);

	if (wood>max)
	{
		wood=max
	}
};

function Small_Wood3()
{
	wood=wood+1;
	console.log(wood,'wood');
	document.getElementById("Woo").innerHTML = wood;
	var image = document.getElementById("SmallWood3");
	image.src = "images/nothing.png"; 
	setTimeout(() => 
	{ 
		image.src = "images/SmallWood3.png"; 	 
	}, 10000);

	if (wood>max)
	{
		wood=max
	}
};

function Small_Wood4()
{
	wood=wood+1;
	console.log(wood,'wood');
	document.getElementById("Woo").innerHTML = wood;
	var image = document.getElementById("SmallWood4");
	image.src = "images/nothing.png"; 
	setTimeout(() => 
	{ 
		image.src = "images/SmallWood4.png"; 	 
	}, 8000);

	if (wood>max)
	{
		wood=max
	}
};







document.getElementById("mine0").addEventListener("mouseover", function() 
{
	console.log(this.src[this.src.length-5])
	if (this.src[this.src.length-5] == "0")
	{
    document.getElementById("text").style.display = "block";
	}
});

document.getElementById("mine0").addEventListener("mouseout", function() 
{
    document.getElementById("text").style.display = "none";
});


document.getElementById("mine0").addEventListener("mouseover", function() 
{
	console.log(this.src[this.src.length-5])
	if (this.src[this.src.length-5] == "8")
	{
    document.getElementById("text1").style.display = "block";
	}
});

document.getElementById("mine0").addEventListener("mouseout", function() 
{
    document.getElementById("text1").style.display = "none";
});









document.getElementById("sawmill0").addEventListener("mouseover", function() 
{
	console.log(this.src[this.src.length-5])
	if (this.src[this.src.length-5] == "0")
	{
    document.getElementById("text2").style.display = "block";
	}
});

document.getElementById("sawmill0").addEventListener("mouseout", function() 
{
    document.getElementById("text2").style.display = "none";
});


document.getElementById("sawmill0").addEventListener("mouseover", function() 
{
	console.log(this.src[this.src.length-6]+this.src[this.src.length-5])
	if (this.src[this.src.length-6]+this.src[this.src.length-5] == "11")
	{
    document.getElementById("text3").style.display = "block";
	}
});

document.getElementById("sawmill0").addEventListener("mouseout", function() 
{
    document.getElementById("text3").style.display = "none";
});






document.getElementById("warehouse0").addEventListener("mouseover", function() 
{
	console.log(this.src[this.src.length-5])
	if (this.src[this.src.length-5] == "0")
	{
    document.getElementById("text4").style.display = "block";
	}
});

document.getElementById("warehouse0").addEventListener("mouseout", function() 
{
    document.getElementById("text4").style.display = "none";
});


document.getElementById("warehouse0").addEventListener("mouseover", function() 
{
	console.log(this.src[this.src.length-5])
	if (this.src[this.src.length-5] == "9")
	{
    document.getElementById("text5").style.display = "block";
	}
});

document.getElementById("warehouse0").addEventListener("mouseout", function() 
{
    document.getElementById("text5").style.display = "none";
});



document.getElementById("warehouse0").addEventListener("mouseover", function() 
{
	console.log(this.src[this.src.length-6]+this.src[this.src.length-5])
	if (this.src[this.src.length-6]+this.src[this.src.length-5] == "16")
	{
    document.getElementById("text6").style.display = "block";
	}
});

document.getElementById("warehouse0").addEventListener("mouseout", function() 
{
    document.getElementById("text6").style.display = "none";
});