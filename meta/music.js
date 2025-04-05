// wii shop theme (suggested by Le gamer66 on discord URL: https://discord.com/channels/1346485785284575335/1346485786039681056/1351527080546009259)
// wii shop wednesday moment
var isWednesday = new Date().getDay() === 3;
// EDIT 4/5/25 7:51 OMG AY IT WORKS YAYSYASFGWSEKFJHWEHFEWHBN
var shoploop = new Audio(isWednesday ? "/media/shop_bgm_loop_wsw.wav" : "/media/shop_bgm_loop.wav");
shoploop.loop = true;
shoploop.volume = 0.8;
window.onload = function() {

  var savedTime = localStorage.getItem("bgmlooppoint");


  if (savedTime) {
    shoploop.currentTime = parseFloat(savedTime); 
  }

  if (localStorage.getItem("shopmusic") === "playing") {
      playBGM();
  } else {
    pauseBGM();
  }

};

window.onbeforeunload = function() {
  localStorage.setItem("bgmlooppoint", shoploop.currentTime);
};

function playBGM() {
  localStorage.setItem("shopmusic", "playing");

  shoploop.play();
  document.getElementById("shopbgm").innerHTML="Pause BGM";
  document.getElementById("shopbgmselector").href="javascript:pauseBGM();"
}


function pauseBGM() {
  localStorage.setItem("shopmusic", "paused");

  shoploop.pause();
  document.getElementById("shopbgm").innerHTML="Play BGM";
  document.getElementById("shopbgmselector").href="javascript:playBGM();"
}


// wii shop theme (suggested by Le gamer66 on discord URL: https://discord.com/channels/1346485785284575335/1346485786039681056/1351527080546009259)
