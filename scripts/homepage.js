const IMG = document.querySelectorAll(".section-img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close");
const POPUP_IMG = document.querySelector(".popup__img");

IMG.forEach((e, index) => {
  e.addEventListener("click", (img) => {
    POPUP.classList.remove("hidden");
    POPUP_IMG.src = img.target.src;
    currentImgIndex = index;
  });
});

const closePopup = () => {
  POPUP.classList.add("fade-out");
  setTimeout(() => {
    POPUP.classList.add("hidden");
    POPUP.classList.remove("fade-out");
  }, 150);
};

POPUP_CLOSE.addEventListener("click", closePopup);

document.addEventListener("keydown", (e) => {
  if (!POPUP.classList.contains("hidden")) {
    if (e.key === "Escape" || e.keyCode === 27) {
      closePopup();
    }
  }
});
