document.getElementById("demo").onclick = function() {myFunction()};

function myFunction() {
 $('.nav').toggleClass('off');
    $('.side-body').toggleClass('full-width'); 
    $('.side-footer').toggleClass('full-width'); 
}