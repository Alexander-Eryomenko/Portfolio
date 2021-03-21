// Слайдер акции


$(document).ready(function(){
  $('.promo__slider, .masters__slider').slick({
    arrows: true,
    dots: true,
    speed: 1000,
    pauseOnFocus: true,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
      breakpoint: 992,
      settings: {
        arrows: false,
      }
    }, 
    {
      breakpoint: 576,
      settings: {
        arrows: false,
      }
    },]
  });
});


// wow js

new WOW().init()

const btn = document.querySelector('.hamburger')
const overlay = document.querySelector('.overlay')
const menu = document.querySelector('.menu')
const listOfMobileMenu = document.querySelector('#listOfMobileMenu')

function toggleMobileMenu () {
  btn.addEventListener('click', (event) => {
    overlay.classList.add('active')
    menu.classList.add('active')
    btn.style.cssText = 'opacity: 0; transition: 0.3s linear all;'
  })

    overlay.addEventListener('click', (event) => {
    overlay.classList.remove('active')
    menu.classList.remove('active')
    btn.style.cssText = 'opacity: 1; transition: 0.3s linear all;'
    })

    listOfMobileMenu.childNodes.forEach((item) => {
      item.addEventListener('click', (event) => {
        overlay.classList.remove('active')
        menu.classList.remove('active')
        btn.style.cssText = 'opacity: 1; transition: 0.3s linear all;'
      })
    })
}

toggleMobileMenu()


