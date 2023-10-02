document.addEventListener("DOMContentLoaded", function () {
  const img = [
    {
      src: "./assets/img/2daacfe012733764748706b7fc7517fd.jpg",
      alt: "t-shirt",
    },
    {
      src: "./assets/img/217925554afbee1916658ad9ddbc4d0d.jpg",
      alt: "t-shirt2",
    },
  ];

  const [prevBtn, nextBtn] = document.querySelectorAll(".btn");
  const sliderImg = document.querySelector(".sliderImg");
  let slideIndex = 0;

  function nextSlideHandler() {
    slideIndex++;
    if (slideIndex >= img.length) {
      slideIndex = 0;
    }
    sliderImg.src = img[slideIndex].src;
  }

  function prevSlideHandler() {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = img.length - 1;
    }
    sliderImg.src = img[slideIndex].src;
  }

  nextBtn.addEventListener("click", nextSlideHandler);
  prevBtn.addEventListener("click", prevSlideHandler);
});
