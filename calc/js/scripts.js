window.onload = function(e){


    var buttons = document.querySelectorAll(".calc input[type=button]");
    for(var i = 0; i < buttons.length; i ++){
        buttons[i].onclick = calculate;
    }

}


function calculate() {
    var inp1 = document.querySelector('input[name=num1]');
    var inp2 = document.querySelector('input[name=num2]');
    var res = document.querySelector('.res');
    var operation = this.getAttribute("data-value");
    var result;
    var res1 = inp1.value;
    var res2 = inp2.value;

    if(operation == "+"){
        result = parseInt(res1) + parseInt(res2);
        operation = this.setAttribute("disabled", "disabled");
    } else if (operation == "-"){
        result = parseInt(res1) - parseInt(res2);
        operation = this.setAttribute("disabled", "disabled");
    } else if (operation == "*"){
              result = parseInt(res1) * parseInt(res2);
              operation = this.setAttribute("disabled", "disabled");
    } else if (operation == "/"){
             result = parseInt(res1) / parseInt(res2);
             operation = this.setAttribute("disabled", "disabled");
    }
    res.innerHTML = result;
}