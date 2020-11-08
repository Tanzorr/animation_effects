/*
animated string
 */
//
// function animate(id) {
//     var node = document.getElementById(id).childNodes[0];
//     var text = node.data;
//     setInterval(function () {
//         text = text.substring(1) + text[0];
//         node.data = text;
//     }, 150); //интервал прокрутки, мс
// }
// window.addEventListener('load', function (e) { animate('text_line'); }, false);

/*
end animated string
 */

/*
modal window
 */
var modal = document.getElementById("my_modal");
var btn = document.getElementById("btn_modal_window");
var span = document.getElementsByClassName("close_modal_window")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/*
modal window
 */

/*
Slider
 */
// var slideIndex = 1;
// showSlides(slideIndex);
//
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }
//
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
// }

/*
end  Slider
 */

/*
Slider object
 */
 function Slider (slides_class, dot_class) {

     var slideIndex = 1;

     this.showSlide = function(n) {
         var i;
         var slides = document.getElementsByClassName(slides_class);
         var dots = document.getElementsByClassName(dot_class);
         if (n > slides.length) {slideIndex = 1}
         if (n < 1) {slideIndex = slides.length}
         for (i = 0; i < slides.length; i++) {
             slides[i].style.display = "none";
         }
         for (i = 0; i < dots.length; i++) {
             dots[i].className = dots[i].className.replace(" active", "");
         }
         slides[slideIndex-1].style.display = "block";
         dots[slideIndex-1].className += " active";
     }
     this.showSlide(slideIndex);

     this.plussSlide = function plusSlides(n) {
         this.showSlide(slideIndex += n);
     }

     this.currentSlide = function currentSlide(n) {
         this.showSlide(slideIndex = n);
     }
 }

 var sleder = new Slider('mySlides','dot')
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

prev.addEventListener('click', ()=>{ sleder.plussSlide(-1)}, false)
next.addEventListener('click', ()=>{sleder.plussSlide(1)}, false)

/*
end Slider objet
 */

