window.onload = function(e){
    
    var sum = document.querySelector('input[name=calc]');
    var deduct = document.querySelector('input[name=deduct]');
    var mult = document.querySelector("input[name=mult]");
    var divid = document.querySelector("input[name=divid]");
    var inp1 = document.querySelector('input[name=num1]');
    var inp2 = document.querySelector('input[name=num2]');
    var span = document.querySelector('.res');
    
    sum.onclick = function(){

        var res = parseInt(inp1.value) + parseInt(inp2.value);
        span.innerHTML = res;
        sum.setAttribute("disabled", "disabled");
         }

     deduct.onclick = function(){

        var res = parseInt(inp1.value) - parseInt(inp2.value);
        span.innerHTML = res;
        deduct.setAttribute("disabled", "disabled");
         }

     mult.onclick = function(){

        var res = parseInt(inp1.value) * parseInt(inp2.value);
        span.innerHTML = res;
        mult.setAttribute("disabled", "disabled");
        }

     divid.onclick = function(){

        var res = parseInt(inp1.value) / parseInt(inp2.value);
        span.innerHTML = res;
        divid.setAttribute("disabled", "disabled");
            }
    
}

