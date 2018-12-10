/* global document */

window.addEventListener('load', responsiveSlider, false);

const responsiveSlider = () => {
  const slider = document.getElementById('slider');
  const sliderWidth = slider.offsetWidth;
  const slideList = document.getElementById('slideWrap');
  const count = 1;
  let items = slideList.querySelectorAll("li").length;
  const prev = document.getElementById("prev");
  let next = document.getElementById("next");

  window.addEventListener('resize', () => {
    // sliderWidth = slider.offsetWidth;
  });

  var prevSlide = function() {
    if(count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = 1) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  var nextSlide = function() {
    if(count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = items) {
      slideList.style.left = "0px";
      count = 1;
    }
  };

  next.addEventListener("click", function() {
    nextSlide();
  });

  prev.addEventListener("click", function() {
    prevSlide();
  });

  setInterval(function() {
    nextSlide()
  }, 8000);

};

window.onload = function() {
  responsiveSlider();
}();
