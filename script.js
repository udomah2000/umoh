

const navBg = document.querySelector('.bg-scroll')
const logo = document.querySelector('.add-script-img')
const bg_icon = document.querySelector('.bg-icon-white')
const bg_botton = document.querySelector('.bg-nav-botton')
const borderChangeColor = document.querySelector('.nav-btn')
const list = document.querySelector('ul')
const mybutton = document.querySelector(".myBtn");


window.addEventListener('scroll', myfunction )
function myfunction() {
    if (window.scrollY > 20) {
        logo.innerHTML = logo.src = "./assets/logo-color_2-removebg-preview.png"
        navBg.classList.add('nav-scroll-bg')
        bg_icon.classList.add('bg-icon-color')
        bg_botton.classList.add('bg-icon-color-botton')
        borderChangeColor.classList.add('nav-btn-scroll')
        borderChangeColor.classList.add('btn-hover-on-scroll')
        list.style.color = '#fff'

    }
    else {
        logo.innerHTML = logo.src = "./assets/Umoh-logo.png"
        navBg.classList.remove('nav-scroll-bg')
        bg_icon.classList.remove('bg-icon-color')
        bg_botton.classList.remove('bg-icon-color-botton')
        borderChangeColor.classList.remove('nav-btn-scroll')
        borderChangeColor.classList.remove('btn-hover-on-scroll')
        list.style.color = '#000'

    }
}



// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener('scroll', scrollFunction)
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.classList.add('scroll-top-block')
    } else {
        mybutton.classList.remove('scroll-top-block')
  }
}
 function scrollup() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }