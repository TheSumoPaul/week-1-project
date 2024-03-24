const learnMore = document.querySelector("button");
const audio = new Audio(
  "./assets/roblox-pizza-place-evil-laugh-sound-effect.mp3"
);

learnMore.addEventListener("click", function () {
  audio.play();
});
