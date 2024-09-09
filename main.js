const sliderImages = document.querySelectorAll('.mem-img');
const sliderLine = document.querySelector('.images');
const sliderDots = document.querySelectorAll('.button');

let sliderCount = 0;
let sliderWidth;

window.addEventListener('resize', showSlide);

function showSlide (){
    sliderWidth = document.querySelector('.main').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');
}

showSlide();



