const listoftext = ["Skidding since 2019.", "Leaning C++ Since 2021", "Proud owner of NostalgX", "NostalgX on top!", "Join NostalgX today."];
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
/*function notification(_0x5d9e88, _0x3411f4) {
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
}*/


