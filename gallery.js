const THUMBNAILS = document.querySelectorAll(".gallery__thumbnail img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close");
const POPUP_IMG = document.querySelector(".popup__img");
const POPUP_ARROW_LEFT = document.querySelector(".popup__arrow--left");
const POPUP_ARROW_RIGHT = document.querySelector(".popup__arrow--right");
let currentImgIndex;

const nextImg = () => {
  if (currentImgIndex === THUMBNAILS.length + 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
};

const beforeImg = () => {
  if (currentImgIndex === 0) {
    currentImgIndex = THUMBNAILS.length - 1;
  } else {
    currentImgIndex--;
  }
  POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
};
THUMBNAILS.forEach((e, index) => {
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
  }, 200);
};

POPUP_CLOSE.addEventListener("click", closePopup);

POPUP_ARROW_LEFT.addEventListener("click", beforeImg);

POPUP_ARROW_RIGHT.addEventListener("click", nextImg);

document.addEventListener("keydown", (e) => {
  if (!POPUP.classList.contains("hidden")) {
    if (e.key === "POPUP_ARROW_RIGHT" || e.keyCode === 39) {
      nextImg();
    }
    if (e.key === "POPUP_ARROW_LEFT" || e.keyCode === 37) {
      beforeImg();
    }

    if (e.key === "Escape" || e.keyCode === 27) {
      closePopup();
    }
  }
});

POPUP.addEventListener("click", (e) => {
  if (e.target === POPUP) {
    closePopup();
  }
});
