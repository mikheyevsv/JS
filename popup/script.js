window.onload = function () {

    var pop = new PopUp();
    // var links = document.querySelectorAll("ul li");
    // for(var i = 0; i < links.length; i++){
    //     links[i].onclick = pop.open;
    // }
    
    document.querySelector(".link1").onclick = function(){
        pop.open("<h1>заказать звонок</h1><p>fkljhgldkjghdkljкнекннгнне</p>");
    }

    document.querySelector(".link2").onclick = function(){
        pop.open("<h1>заказать пиздюлей</h1><p>fkljhgldkjghdkкенкеljкнекннгнне</p>");
    }
    document.querySelector(".link3").onclick = function(){
        pop.open("<h1>заказать девок</h1><p>fkljhgldkjghdkljкнекннгнне</p>");
    }
    document.querySelector(".link4").onclick = function(){
        pop.open("<h1>заказать ааа</h1><p>fkljhgldkjghdkljкнекннгнне</p>");
    }
}

function PopUp() {
    this.modal = document.querySelector(".popup");
    this.over = document.querySelector(".popupWrapp");;
    
    var popUp = this;
    
    this.open = function (content) {
        popUp.modal.innerHTML = content;
        popUp.over.classList.add("active");
        popUp.modal.classList.add("active");
    }

    this.close = function () {
        popUp.over.classList.remove("active");
        popUp.modal.classList.remove("active");
    }

    popUp.over.onclick = popUp.close;
}