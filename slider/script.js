/**
 * Created by AngrySerg on 15.09.2017.
 */
window.onload = function () {
    var images1 = document.querySelectorAll(".slider-1 .photos img");
    var slider1 = new Slider(images1);

    document.querySelector(".slider-1 .buttons .prev").onclick = function () {
        slider1.prev();
    }

    document.querySelector(".slider-1 .buttons .next").onclick = function () {
        slider1.next();
    }


    var images2 = document.querySelectorAll(".slider-2 .photos img");
    var slider2 = new Slider(images2);

   setInterval(function () {
        slider2.next();
    }, 2000);
}

function Slider(images) {
    this.images = images;
    var i = 0;

    this.prev = function () {
        this.images[i].classList.remove("show");
        i--;
        if(i < 0){
            i = this.images.length - 1;
        }
        this.images[i].classList.add("show");
    }

    this.next = function () {
        this.images[i].classList.remove("show");
        i++;
        if(i >= this.images.length){
            i = 0;
        }
        this.images[i].classList.add("show");
    }
}
