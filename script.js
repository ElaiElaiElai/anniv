let myBtn = document.getElementById("Btn");

window.onscroll = function() {goTopFunction()};

function goTopFunction() {
    if (document.documentElement.scrollTop > 800) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
    }
 }

function goTop() {
    document.documentElement.scrollTop = 0;
}   

