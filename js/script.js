let sec1 = document.querySelector('.sec1');
let sec2 = document.querySelector('.sec2');

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    sec1.style.clipPath = "circle("+value * 1.15+"px at 0 0)"
    sec2.style.clipPath = "circle("+value * 1+"px at 100% 100%)"
})