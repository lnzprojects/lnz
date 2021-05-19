var Allsong=[
    {name:"ВІТЧИЗНА",singer:"PIANOBOY",path:"music/pianoboy-вітчизна.mp3"},
    {name:"ОБІЙМИ",singer:"ОКЕАНЕЛЬЗИ",path:"music/океан ельзи-обійми.mp3"},
    {name:"ЗОРІ",singer:"KALUSH",path:"music/kalush-зорі.mp3"},
    {name:"DEEPEND",singer:"FOUSHEE",path:"music/foushee-deepend.mp3"},
    {name:"ASTRONAUTINTHEOCEAN",singer:"MASKEDWOLF",path:"music/maskedwolf-astronautintheocean.mp3"},
    {name:"ТРИМАЙМЕНЕМІЦНО",singer:"ХРИСТИНАСОЛОВІЙ",path:"music/христинасоловій-тримайменеміцно.mp3"},
    {name:"ГРУППАКРОВИ",singer:"КИНО",path:"music/викторцой-группакрови.mp3"}];

var doppoints=[
    "За цей раунд ви отримаєте бонусний бал за назву пісні",
    "За цей раунд ви отримаєте бонусний бал за виконавця",
];
function changepoints() {
     document.getElementById("points").innerHTML="Бали - "+points;
}
var NummerAudio=0;
function SetNextAudio() {
NummerAudio++;
if(round>Allsong.length){
    return ALERTI.finish();
}
var ch=document.getElementById("soundplayer");
//console.log(ch);
//console.log(NummerAudio);
ch.src=shuffled[NummerAudio].path;
setTimeout(starttimer,1500);
setTimeout(playmusic,1500);
setTimeout(changeround,1500);
removeSomething(document.getElementById("nextetap"));
}
function PreSetNextAudio(){
var dali=document.getElementById("nextetap");  
   dali.style.display="block";
   dali.style.opacity=1;
}
var round=1;
var points=0;
var alltime=0;
//----------------------------------ALERTI
var ALERTI={
    pomilka:function() {
        alert("Введіть підходяще значення");
    },
    only_song:function(){
        alert("Ви вгадали назву пісні. +1 бал");
    },
    only_name: function(){
        alert("Ви вгадали співака. +1 бал");
    },
    name_and_song: function(){
        alert("Ви вгадали назву й співака. +2 бала");
    },
    nichogo:function(){
        alert("На жаль, ви нічого не вгадали");
    },
    finish:function() {
        alert("Дякую, за те , що пройшли цю гру.Ваша кількість балів - "+points+" та час - "+alltime);
        location.reload();
    },
    bonus_round_spivak:function(){
        alert("Ви вгадали співака, а також у ранді бонус. +2 бала");
    },
    bonus_round_name:function(){
        alert("Ви вгадали назву пісні, а також у ранді бонус. +2 бала");
    },
    bonus_round_name_and_spivak:function(){
        alert("Ви вгадали назву й співака, а також у раунді бонув. +3 бала");
    }   
};
//-----------------------------------------startoviy track
let shuffled=new Object();
function addtrack(){
shuffled=shuffletracks(Allsong);
document.getElementById("soundplayer").src=shuffled[0].path;
console.log(shuffled);
}
function shuffletracks(array) {
    for (var i = array.length - 1;i > 0;i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
//----------------------------------------------Nachalo
function start(){
addtrack();
//var knopkaRULES=document.getElementById("rules");
//knopkaRULES.onclick=alertrules();
var knopkaSTART=document.getElementById("start");
knopkaSTART.onclick=FirstMelody;
var knopka=document.getElementById("knopka");
knopka.onclick=perevirka;
var skipbutton=document.getElementById("skiper");
skipbutton.onclick=skip;
var knopochka=document.getElementById("guessPole");
knopochka.onkeypress=handleKeyPress;
var dali=document.getElementById("nextetap");
dali.onclick=SetNextAudio;

};
window.onload=start;
function handleKeyPress(e){
    var nextTrack=document.getElementById("knopka");
    if (e.keyCode===13){
        nextTrack.click();
        return false;
    }};
//----------------------------------------------TIMER
var ticks=13;
function starttimer(){
    document.getElementById("timer").style.display="block";
    document.getElementById("timer").style.opacity=1
    document.getElementById("skiper").style.display="block";
    document.getElementById("skiper").style.opacity=1
ticks=13;
secondstimer();
}
function secondstimer(){
if (ticks<=0){
    setTimeout(dobavlyat,0);
    setTimeout(vivestiGuess,1000);
    return;
}
document.getElementById("timer").innerHTML=ticks;
ticks--;
alltime++;
setTimeout(secondstimer,1000);
}
//----------------------------------------------Play music
function playmusic(){
    var ad=document.getElementById("soundplayer");
    ad.play();
}
function FirstMelody(){

    var knSTARTS=document.getElementById("starts");
    removeSomething(knSTARTS);


    setTimeout(starttimer, 1500);

    setTimeout(changeround ,500);
    setTimeout(playmusic,1500);

    setTimeout(function() {
        document.getElementById("kolonki").style.display="flex"
    }, 1500);

}
function changeround(){
    document.getElementById("kolonka1").src="musicPlay.gif";
    document.getElementById("kolonka2").src="musicPlay.gif";
    document.getElementById("points").style.display="block";
    var rand=document.getElementById("rounds");
    rand.style.display="block";
    document.getElementById("doppoints").style.display="block";
    if(round==3){
    document.getElementById("doppoints").innerHTML=doppoints[0];
    }else if(round==6){
    document.getElementById("doppoints").innerHTML=doppoints[1];
    }else{    document.getElementById("doppoints").innerHTML="&nbsp;";
    }
    rand.innerHTML="Раунд "+round;
    round++;

}
function removeSomething(myblock){
    myblock.style.opacity=1;
    var myblockid=setInterval(function(){
        if (myblock.style.opacity>0) {myblock.style.opacity -= .1;}
        else {clearInterval(myblockid);myblock.style.display="none";}
    },60)
}

function startnexttrack(){
    setTimeout(starttimer,1500);
    setTimeout(playmusic,1500);
}
function dobavlyat(){
wut=document.getElementById("timer");
removeSomething(wut);
removeSomething(document.getElementById("skiper"));
}
function vivestiGuess(){
    document.getElementById("kolonka1").src="musicPlay.png";
    document.getElementById("kolonka2").src="musicPlay.png";
    var smenit=document.getElementById("guesa2");
    smenit.style.display="block";
    smenit.style.opacity=1;
}
//---------------------------------------PEREVIRKA
var guesses=0;
function perevirka() {
   var guessInput = document.getElementById("guessPole");
   var guess=guessInput.value;
   var check=secondperevirka(guess);
   guessInput.value="";
   if (check){
var guesta2=document.getElementById("guesa2");
removeSomething(guesta2);
setTimeout(PreSetNextAudio,1000);
}
};
function secondperevirka(guess){
    guess=guess.replace(/\s/g,"");
    guess=guess.toUpperCase();
    if (guess=="" || guess==null || guess.indexOf("-")<0){
        ALERTI.pomilka();
        return false;
    }else{
    var half=guess.split("-");
    //console.log(half);
    var singer=half[0];
    var name=half[1];
    //if(name==""){singer=singer.substr(0);}
    //console.log(name + " "+ singer);
    var sometext=document.getElementById("doppoints").innerHTML;
    //console.log(num);
    //console.log(sometext);
    if (singer==shuffled[NummerAudio].singer && name==shuffled[NummerAudio].name){points=points+2;if(round-1==3|| round-1==6){points++;ALERTI.bonus_round_name_and_spivak();}else{ALERTI.name_and_song();} }
    else if (singer==shuffled[NummerAudio].singer){points++; console.log(round);if(round-1==6){points++;ALERTI.bonus_round_spivak();}else{ALERTI.only_name();}}
    else if (name==shuffled[NummerAudio].name){points++;console.log(round);if(round-1==3){points++;ALERTI.bonus_round_name();}else{ALERTI.only_song();}}
    else{ALERTI.nichogo();}
    }
    if(NummerAudio==Allsong.length-1){document.getElementById("nextetap").value="Кінець!";}
    changepoints();
    return true;
}
//-----------------------------------------alert pravila
function alertrules(){
    document.getElementById("popup").classList.toggle("active");
}
///////----------------------------------skipat treck
function  skip() {
    ticks=0;
    var ad=document.getElementById("soundplayer");
    setTimeout(ad.pause(),200);
}
//--------------------