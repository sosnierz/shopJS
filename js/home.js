// hamburger
const hamburger = document.getElementById('burger');
const navUl = document.getElementsByClassName('nav-bottom');

hamburger.addEventListener('click', () => {
    for (var i = 0; i < navUl.length; i++) {
        navUl[i].classList.toggle("showHamburger");
      }
    
});

// header slider

const slideList = [
    "images/layout/lamp1.jpg", "images/layout/lamp2.jpg", "images/layout/lamp3.jpg", "images/layout/lamp4.jpg"]
    
   
   const image = document.querySelector('img.slider');
   
   // Interfejs
   const time = 4000;
   let active = 0;
   
  
   const changeSlide = () => {
    active++;
    if (active === slideList.length) {
     active = 0;
    }
    image.src = slideList[active];
     }
   let timeIndex = setInterval(changeSlide, time)  
   
  

//    hoover img brighness
const imageDiv = document.querySelectorAll('.image>a>img');


for(let i =0; i<imageDiv.length; i++){
imageDiv[i].addEventListener('mouseenter', function(ev){
       ev.target.classList.add('zoom');
});
imageDiv[i].addEventListener('mouseleave', function(ev){
        ev.target.classList.remove('zoom');  
});
};

