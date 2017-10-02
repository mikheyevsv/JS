/**
 * Created by AngrySerg on 15.09.2017.
 */
window.onload = function () {
    // var images1 = document.querySelectorAll(".slider-1 .photos img");
    // var slider1 = new Slider(images1);
    //
    // document.querySelector(".slider-1 .buttons .prev").onclick = function () {
    //     slider1.prev();
    // }
    //
    // document.querySelector(".slider-1 .buttons .next").onclick = function () {
    //     slider1.next();
    // }


   //  var images2 = document.querySelectorAll(".slider-2 .photos img");
   //  var slider2 = new Slider(images2);
   //
   // setInterval(function () {
   //      slider2.next();
   //  }, 2000);
    
    new Slider({
        images: ".slider-2 .photos img",
        auto: true,
        buttonPrev: ".slider-2 .buttons .prev",
        buttonNext: ".slider-2 .buttons .next",
        rate: 3000
    });
    
}


function Slider(settings) {
    this.images = document.querySelectorAll(settings.images);
    this.auto = settings.auto;
    this.buttonPrev = settings.buttonPrev;
    this.buttonNext = settings.buttonNext;
    this.rate = settings.rate || 1000;
    var i = 0;
    var slider = this;


    this.prev = function () {
        slider.images[i].classList.remove("show");
        i--;
        if(i < 0){
            i = slider.images.length - 1;
        }
        slider.images[i].classList.add("show");
    }

    this.next = function () {
        slider.images[i].classList.remove("show");
        i++;

        if(i >= slider.images.length){
            i = 0;
        }
        slider.images[i].classList.add("show");
    }

    document.querySelector(slider.buttonNext).onclick = this.next;
    document.querySelector(slider.buttonPrev).onclick = this.prev;

    if(slider.auto){
        setInterval(slider.next, slider.rate);
    }
}
