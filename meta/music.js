// wii shop theme (suggested by Le gamer66 on discord URL: https://discord.com/channels/1346485785284575335/1346485786039681056/1351527080546009259)
// wii shop wednesday moment
var isWednesday = new Date().getDay() === 3;
// EDIT 4/5/25 7:51 OMG AY IT WORKS YAYSYASFGWSEKFJHWEHFEWHBN
var shoploop = new Audio(isWednesday ? "/media/shop_bgm_loop_wsw.wav" : "/media/shop_bgm_loop.wav");
shoploop.loop = true;
shoploop.volume = 0; // prevent clipping
window.onload = function() {
  var savedTime = localStorage.getItem("bgmlooppoint");

  if (savedTime) {
    shoploop.currentTime = parseFloat(savedTime); 
  }

  if (localStorage.getItem("shopmusic") === "playing") {
    playBGMonload();
  } else {
    pauseBGM();
  }

  if (isWednesday) {
    document.getElementById("wednesdaytitles").style.display = "block";
    document.getElementById("wednesdaytitles").style.height="fit-content";
  } else {
    document.getElementById("wednesdaytitles").style.display = "none";
    document.getElementById("wednesdaytitles").style.height="0px";
  }
};

function bgm2() {
  // loads on html load for quicker music
  var savedTime = localStorage.getItem("bgmlooppoint");

  if (savedTime) {
    shoploop.currentTime = parseFloat(savedTime); 
  }

  if (localStorage.getItem("shopmusic") === "playing") {
    playBGMonload();
  } else {
    pauseBGM();
  }

  if (isWednesday) {
    document.getElementById("wednesdaytitles").style.display = "block";
    document.getElementById("wednesdaytitles").style.height="fit-content";
  } else {
    document.getElementById("wednesdaytitles").style.display = "none";
    document.getElementById("wednesdaytitles").style.height="0px";
  }
}

window.onbeforeunload = function() {
  localStorage.setItem("bgmlooppoint", shoploop.currentTime);
};

function playBGM() {
  shoploop.volume = 0.8;
  localStorage.setItem("shopmusic", "playing");
  shoploop.play();
  document.getElementById("shopbgm").innerHTML = "Pause BGM";
  document.getElementById("shopbgmselector").href = "javascript:pauseBGM();";
}

function pauseBGM() {
  localStorage.setItem("shopmusic", "paused");
  shoploop.pause();
  document.getElementById("shopbgm").innerHTML = "Play BGM";
  document.getElementById("shopbgmselector").href = "javascript:playBGM();";
}

function playBGMonload() {
  // this version has it fade in for smoother experince between pages uwu (i could of used set interval, but memory issues?)
  fadeinbgm();
  localStorage.setItem("shopmusic", "playing");
  shoploop.play();
  document.getElementById("shopbgm").innerHTML = "Pause BGM";
  document.getElementById("shopbgmselector").href = "javascript:pauseBGM();";
}

function fadeinbgm() {
  shoploop.volume="0.0";
  setTimeout(fade2,10);
}
function fade2() {
  shoploop.volume="0.1";
  setTimeout(fade3,10);
}
function fade3() {
  shoploop.volume="0.2";
  setTimeout(fade4,10);
}
function fade4() {
  shoploop.volume="0.3";
  setTimeout(fade5,10);
}
function fade5() {
  shoploop.volume="0.4";
  setTimeout(fade6,10);
}
function fade6() {
  shoploop.volume="0.5";
  setTimeout(fade7,10);
}
function fade7() {
  shoploop.volume="0.6";
  setTimeout(fade8,10);
}
function fade8() {
  shoploop.volume="0.7";
  setTimeout(fade9,10);
}
function fade9() {
  shoploop.volume="0.8";
}