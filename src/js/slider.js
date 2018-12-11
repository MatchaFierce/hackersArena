/* global window */
/* global document */

const responsiveSlider = () => {
  const slider = document.getElementById('slider');
  const sliderWidth = slider.offsetWidth;
  const slideList = document.getElementById('slideWrap');
  let count = 1;
  const items = slideList.querySelectorAll('li').length;
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  window.addEventListener('resize', () => {
    // sliderWidth = slider.offsetWidth;
  });

  const prevSlide = () => {
    if (count > 1) {
      count -= 2;
      slideList.style.left = `-${count * sliderWidth}px`;
      count += 1;
    } else if (count === 1) {
      count = items - 1;
      slideList.style.left = `-${count * sliderWidth}px`;
      count += 1;
    }
  };

  const nextSlide = () => {
    if (count < items) {
      slideList.style.left = `-${count * sliderWidth}px`;
      count += 1;
    } else if (count === items) {
      slideList.style.left = '0px';
      count = 1;
    }
  };

  next.addEventListener('click', () => {
    nextSlide();
  });

  prev.addEventListener('click', () => {
    prevSlide();
  });

  setInterval(() => {
    nextSlide();
  }, 8000);
};

window.onload = () => {
  responsiveSlider();
};
