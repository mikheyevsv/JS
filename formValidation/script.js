/**
 * Created by AngrySerg on 14.09.2017.
 */
window.onload = function () {
    // var fieldForm = document.querySelectorAll("form input");
    var fields = document.querySelectorAll("form input[type=text]");
    var submit = document.querySelector("form input[type=submit]");

    document.querySelector("form").onsubmit = function (e) {
        var err = false;
        for(var i = 0; i < fields.length; i++){
            if(fields[i].value === ''){
                fields[i].classList.add("error");
                err = true;
            }
            else {
                fields[i].classList.remove("error");
            }
        }
        if(err){
            e.preventDefault();
        }
    }
}