const images = [
  "https://optim.tildacdn.com/tild3833-3962-4766-a236-306363663437/-/format/webp/DSC01560-01.jpg",
  "https://static.tildacdn.com/tild6363-3338-4436-b035-313961303464/DSC015612.jpg",
  "https://static.tildacdn.com/tild3834-3131-4862-a363-306364333639/DSC01622.jpg",
  "https://static.tildacdn.com/tild3262-6337-4532-a562-643363663239/DSC01755.jpg",
  "https://static.tildacdn.com/tild6132-6135-4561-b562-663461633832/photo.jpg",
  "https://static.tildacdn.com/tild3430-3663-4265-a166-313130323235/DSC01587.jpg",
  "https://static.tildacdn.com/tild3733-3562-4966-a461-666138313864/DSC01679.jpg",
  "https://static.tildacdn.com/tild3735-3537-4830-a138-653538336337/DSC01640.jpg",
];

export function initializeImageSlider() {
  const sliderImage = document.querySelector(".slider-image");
  const slideNumber = document.querySelector(".slide-number");
  const totalSlide = document.querySelector(".totla-slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentIndex = 0;

  function updateSlider() {
    sliderImage.src = images[currentIndex];
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    updateSlider();
  });

  updateSlider();
}