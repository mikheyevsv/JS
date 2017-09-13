/**
 * Created by AngrySerg on 13.09.2017.
 */

window.onload = function(e) {
    var items = document.querySelectorAll(".items .item");
    var totalPrice = document.querySelector(".total");
    for(var i = 0; i < items.length; i++){
        items[i].onclick = function () {
            this.classList.toggle("active");
            calcPrice();
        }
    }
    
    
    function calcPrice() {
        var price = 0;
        for(var i = 0; i < items.length; i++){
            if(items[i].classList.contains("active")){
                price += parseInt(items[i].getAttribute("data-price"));
            }
        }

        totalPrice.innerHTML = price;
    }
}