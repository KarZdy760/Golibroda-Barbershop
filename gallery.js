const THUMBNAILS = document.querySelectorAll(".gallery__thumbnail img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close");
const POPUP_IMG = document.querySelector(".popup__img");
THUMBNAILS.forEach((e) => {
  e.addEventListener("click", (img) => {
    POPUP.classList.remove("hidden");
    POPUP_IMG.src = img.target.src;
  });
});

POPUP_CLOSE.addEventListener("click", () => {
  POPUP.classList.add("hidden");
});
