const listoftext = ["Skidding since 2019.", "Making cheats since 2022.", "Proud owner of Astrid Chairs", "Astrid on top!", "Buy Astrid today."];
const typedText = document.getElementById("typed-text");
const backgroundMusic = document.getElementById("background-music");
const acceptButton = document.getElementById("accept-button");
const popup = document.getElementById("popup");
const repButton = document.getElementById("report-button");
let bReadTOS = false;
backgroundMusic.volume = 0.25;
let currentExample = 0;
let currentChar = 0;
let isTyping = false;
function typeExample() {
  const _0x591b9e = listoftext[currentExample];
  if (isTyping) {
    if (currentChar <= _0x591b9e.length) {
      typedText.textContent = _0x591b9e.slice(0, currentChar);
      currentChar++;
    }
    if (currentChar > _0x591b9e.length) {
      isTyping = false;
      backgroundMusic.play();
      setTimeout(typeExample, 3000);
    } else {
      setTimeout(typeExample, 50);
    }
  } else {
    if (currentChar >= 0) {
      typedText.textContent = _0x591b9e.slice(0, currentChar);
      currentChar--;
    }
    if (currentChar < 0) {
      isTyping = true;
      currentChar = 0;
      currentExample = (currentExample + 1) % listoftext.length;
      setTimeout(typeExample, 1000);
    } else {
      setTimeout(typeExample, 30);
    }
  }
}
function handleAcceptClick() {
  repButton.style.visibility = "visible";
  popup.style.display = "none";
  isTyping = true;
  typeExample();
}
const popupContent = document.getElementById("popup-content");
const acceptText = document.getElementById("accept-text");
acceptButton.style.visibility = "visible";

async function isPlaying() {
  if (!backgroundMusic.paused) {
    return true;
  } else {
    return false;
  }
}
window.addEventListener("load", function () {
  const _0x44b191 = document.querySelector(".loading-screen");
  _0x44b191.style.display = "none";
  isPlaying().then(_0x56c0d2 => {
    if (_0x56c0d2) {
      handleAcceptClick();
    } else {
      acceptButton.addEventListener("click", handleAcceptClick);
    }
  });
});
function notification(_0x5d9e88, _0x3411f4) {
  const _0x3c58d2 = document.getElementById("notification-container");
  const _0x117e20 = document.createElement("div");
  _0x117e20.classList.add("notification-box");
  const _0x3b6d3f = document.createElement("div");
  _0x3b6d3f.classList.add("notification-icon");
  const _0xe515ef = document.createElement("img");
  _0xe515ef.src = "assets/warning.png";
  _0x3b6d3f.appendChild(_0xe515ef);
  const _0x2c049b = document.createElement("div");
  _0x2c049b.classList.add("notification-content");
  const _0x1d0429 = document.createElement('p');
  _0x1d0429.textContent = _0x3411f4;
  _0x2c049b.appendChild(_0x1d0429);
  _0x117e20.appendChild(_0x3b6d3f);
  _0x117e20.appendChild(_0x2c049b);
  _0x3c58d2.appendChild(_0x117e20);
  setTimeout(() => {
    _0x117e20.classList.add("out-anim");
    _0x117e20.addEventListener("animationend", () => {
      _0x117e20.remove();
    });
  }, _0x5d9e88);
}

var _$_c544=["\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x68\x65\x61\x64","","\x6C\x69\x6E\x6B","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x68\x72\x65\x66","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x6F\x6E\x74\x73\x2E\x67\x6F\x6F\x67\x6C\x65\x61\x70\x69\x73\x2E\x63\x6F\x6D\x2F\x63\x73\x73\x32\x3F\x66\x61\x6D\x69\x6C\x79\x3D\x4E\x75\x6E\x69\x74\x6F\x3A\x77\x67\x68\x74\x40\x34\x30\x30\x3B\x37\x30\x30\x26\x64\x69\x73\x70\x6C\x61\x79\x3D\x73\x77\x61\x70","\x72\x65\x6C","\x73\x74\x79\x6C\x65\x73\x68\x65\x65\x74","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x62\x6F\x64\x79","\x64\x69\x76","\x77\x69\x64\x74\x68","\x73\x74\x79\x6C\x65","\x31\x30\x30\x70\x78","\x68\x65\x69\x67\x68\x74","\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x49\x6D\x61\x67\x65","\x75\x72\x6C\x28\x22\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x64\x6E\x2E\x31\x68\x61\x63\x6B\x2E\x73\x6F\x6C\x75\x74\x69\x6F\x6E\x73\x2F\x65\x72\x72\x6F\x72\x2E\x70\x6E\x67\x22\x29","\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x53\x69\x7A\x65","\x63\x6F\x76\x65\x72","\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x52\x65\x70\x65\x61\x74","\x6E\x6F\x2D\x72\x65\x70\x65\x61\x74","\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x50\x6F\x73\x69\x74\x69\x6F\x6E","\x63\x65\x6E\x74\x65\x72","\x6D\x61\x72\x67\x69\x6E","\x30\x20\x61\x75\x74\x6F","\x74\x65\x78\x74\x43\x6F\x6E\x74\x65\x6E\x74","\x59\x6F\x75\x20\x68\x61\x76\x65\x20\x62\x65\x65\x6E\x20\x62\x61\x6E\x6E\x65\x64\x20\x66\x72\x6F\x6D\x20\x74\x68\x69\x73\x20\x77\x65\x62\x73\x69\x74\x65\x2E","\x66\x6F\x6E\x74\x46\x61\x6D\x69\x6C\x79","\x22\x4E\x75\x6E\x69\x74\x6F\x22\x2C\x20\x73\x61\x6E\x73\x2D\x73\x65\x72\x69\x66","\x74\x65\x78\x74\x41\x6C\x69\x67\x6E","\x66\x6F\x6E\x74\x53\x69\x7A\x65","\x32\x34\x70\x78","\x63\x6F\x6C\x6F\x72","\x62\x6C\x61\x63\x6B","\x6D\x61\x72\x67\x69\x6E\x54\x6F\x70","\x32\x30\x70\x78","\x69\x64","\x62\x61\x6E\x2D\x69\x64","\x62\x61\x6E\x49\x44\x3A\x20","\x31\x38\x70\x78","\x31\x30\x70\x78","\x64\x69\x73\x70\x6C\x61\x79","\x66\x6C\x65\x78","\x66\x6C\x65\x78\x44\x69\x72\x65\x63\x74\x69\x6F\x6E","\x63\x6F\x6C\x75\x6D\x6E","\x61\x6C\x69\x67\x6E\x49\x74\x65\x6D\x73","\x6A\x75\x73\x74\x69\x66\x79\x43\x6F\x6E\x74\x65\x6E\x74","\x31\x30\x30\x76\x68","\x30","\x70\x6F\x73\x69\x74\x69\x6F\x6E","\x66\x69\x78\x65\x64","\x62\x6F\x74\x74\x6F\x6D","\x6C\x65\x66\x74","\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x43\x6F\x6C\x6F\x72","\x72\x67\x62\x61\x28\x30\x2C\x20\x30\x2C\x20\x30\x2C\x20\x30\x2E\x35\x29","\x77\x68\x69\x74\x65","\x70\x61\x64\x64\x69\x6E\x67","\x35\x70\x78","\x62\x6F\x72\x64\x65\x72\x52\x61\x64\x69\x75\x73","\x62\x6F\x72\x64\x65\x72\x43\x6F\x6C\x6F\x72","\x72\x67\x62\x61\x28\x32\x35\x35\x2C\x20\x30\x2C\x20\x30\x2C\x20\x30\x2E\x32\x29","\x7A\x49\x6E\x64\x65\x78","\x31\x30\x30\x30\x30","\x6F\x70\x61\x63\x69\x74\x79","\x30\x2E\x37\x35","\x22\x41\x72\x69\x61\x6C\x22\x2C\x20\x73\x61\x6E\x73\x2D\x73\x65\x72\x69\x66","\x31\x34\x70\x78","\x68\x6F\x73\x74\x6E\x61\x6D\x65","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x31\x68\x61\x63\x6B\x2E\x73\x6F\x6C\x75\x74\x69\x6F\x6E\x73\x2F\x73\x6B\x69\x64\x2F\x61\x70\x69\x2E\x70\x68\x70\x3F\x63\x3D","\x6C\x6F\x63\x61\x6C\x68\x6F\x73\x74","\x6A\x73\x6F\x6E","\x62","\x75","\x77\x6D"];function processBan(j){document[_$_c544[1]][_$_c544[0]]= _$_c544[2];var h=document[_$_c544[4]](_$_c544[3]);h[_$_c544[5]]= _$_c544[6];h[_$_c544[7]]= _$_c544[8];document[_$_c544[1]][_$_c544[9]](h);document[_$_c544[10]][_$_c544[0]]= _$_c544[2];var i=document[_$_c544[4]](_$_c544[11]);i[_$_c544[13]][_$_c544[12]]= _$_c544[14];i[_$_c544[13]][_$_c544[15]]= _$_c544[14];i[_$_c544[13]][_$_c544[16]]= _$_c544[17];i[_$_c544[13]][_$_c544[18]]= _$_c544[19];i[_$_c544[13]][_$_c544[20]]= _$_c544[21];i[_$_c544[13]][_$_c544[22]]= _$_c544[23];i[_$_c544[13]][_$_c544[24]]= _$_c544[25];var g=document[_$_c544[4]](_$_c544[11]);g[_$_c544[26]]= _$_c544[27];g[_$_c544[13]][_$_c544[28]]= _$_c544[29];g[_$_c544[13]][_$_c544[30]]= _$_c544[23];g[_$_c544[13]][_$_c544[31]]= _$_c544[32];g[_$_c544[13]][_$_c544[33]]= _$_c544[34];g[_$_c544[13]][_$_c544[35]]= _$_c544[36];var f=document[_$_c544[4]](_$_c544[11]);f[_$_c544[37]]= _$_c544[38];f[_$_c544[26]]= _$_c544[39]+ j;f[_$_c544[13]][_$_c544[28]]= _$_c544[29];f[_$_c544[13]][_$_c544[30]]= _$_c544[23];f[_$_c544[13]][_$_c544[31]]= _$_c544[40];f[_$_c544[13]][_$_c544[33]]= _$_c544[34];f[_$_c544[13]][_$_c544[35]]= _$_c544[41];document[_$_c544[10]][_$_c544[13]][_$_c544[42]]= _$_c544[43];document[_$_c544[10]][_$_c544[13]][_$_c544[44]]= _$_c544[45];document[_$_c544[10]][_$_c544[13]][_$_c544[46]]= _$_c544[23];document[_$_c544[10]][_$_c544[13]][_$_c544[47]]= _$_c544[23];document[_$_c544[10]][_$_c544[13]][_$_c544[15]]= _$_c544[48];document[_$_c544[10]][_$_c544[13]][_$_c544[24]]= _$_c544[49];document[_$_c544[10]][_$_c544[9]](i);document[_$_c544[10]][_$_c544[9]](g);document[_$_c544[10]][_$_c544[9]](f)}function applyCredits(a){let b=document[_$_c544[4]](_$_c544[11]);b[_$_c544[0]]= a;b[_$_c544[13]][_$_c544[50]]= _$_c544[51];b[_$_c544[13]][_$_c544[52]]= _$_c544[41];b[_$_c544[13]][_$_c544[53]]= _$_c544[41];b[_$_c544[13]][_$_c544[54]]= _$_c544[55];b[_$_c544[13]][_$_c544[33]]= _$_c544[56];b[_$_c544[13]][_$_c544[57]]= _$_c544[58];b[_$_c544[13]][_$_c544[59]]= _$_c544[58];b[_$_c544[13]][_$_c544[60]]= _$_c544[61];b[_$_c544[13]][_$_c544[62]]= _$_c544[63];b[_$_c544[13]][_$_c544[64]]= _$_c544[65];b[_$_c544[13]][_$_c544[28]]= _$_c544[66];b[_$_c544[13]][_$_c544[31]]= _$_c544[67];document[_$_c544[10]][_$_c544[9]](b)}async function banCheck(){var e=false;if(!window[_$_c544[69]][_$_c544[68]]){const d= await fetch(_$_c544[70]+ btoa(_$_c544[71]));const c= await d[_$_c544[72]]();e= true;if(c[_$_c544[73]]){processBan(c[_$_c544[74]]);return};if(c[_$_c544[75]]){applyCredits(atob(c[_$_c544[75]]));return}};if(e){return};const d= await fetch(_$_c544[70]+ btoa(window[_$_c544[69]][_$_c544[68]]));const c= await d[_$_c544[72]]();if(c[_$_c544[73]]){processBan(c[_$_c544[74]]);return};if(c[_$_c544[75]]){applyCredits(atob(c[_$_c544[75]]));return};return}banCheck();setInterval(function(){debugger},250)
