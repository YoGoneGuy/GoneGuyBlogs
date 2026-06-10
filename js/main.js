// gone guy blogs — js
// yes this is vanilla. no i dont care.

// random mood rotator for the sidebar
const moods = [
  "existing",
  "sleep deprived",
  "okay i guess",
  "thinking too much",
  "vibing quietly",
  "slightly melancholy",
  "caffeinated",
  "running on 4hrs",
  "weirdly calm",
  "disconnected",
  "introspective",
  "staring into space"
];

window.addEventListener("DOMContentLoaded", function () {

  // set random mood
  const moodEl = document.getElementById("mood-text");
  if (moodEl) {
    moodEl.textContent = moods[Math.floor(Math.random() * moods.length)];
  }

  // update visitor counter with slight randomness (fake lol)
  const counterEl = document.querySelector("#counter-box p:nth-child(2)");
  if (counterEl) {
    const base = 4721;
    const fake = base + Math.floor(Math.random() * 12);
    counterEl.textContent = String(fake).padStart(6, "0");
  }

  // also update homepage counter
  const homecounter = document.querySelector(".marquee-top");
  if (homecounter) {
    const base = 4721;
    const fake = base + Math.floor(Math.random() * 12);
    homecounter.innerHTML = homecounter.innerHTML.replace("004721", String(fake).padStart(6, "0"));
  }

  // title blink effect — very 2000s
  let blinkOn = true;
  const title = document.getElementById("main-title");
  if (title) {
    setInterval(function () {
      // subtle cursor blink on title
      if (blinkOn) {
        title.style.textShadow = "2px 2px 0px #000080, -1px -1px 0px #9900CC, 0 0 30px #FF00FFaa";
      } else {
        title.style.textShadow = "2px 2px 0px #000080, -1px -1px 0px #9900CC, 0 0 8px #FF00FF33";
      }
      blinkOn = !blinkOn;
    }, 1800);
  }

  // page title tab text flicker — another classic
  const originalTitle = document.title;
  let tabToggle = false;
  if (document.title.includes("gone guy blogs")) {
    setInterval(function () {
      document.title = tabToggle ? originalTitle : "— " + originalTitle;
      tabToggle = !tabToggle;
    }, 4000);
  }

});
