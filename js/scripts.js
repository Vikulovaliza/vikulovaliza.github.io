function sayHello() {
    document.querySelector('.img').setAttribute("class","noshow");
  }
window.onload = function setClicker(){
    var sas = document.querySelectorAll(".img");
    for (var i=0;i< sas.length;i++){
        sas[i].addEventListener('click', sayHello);
    }
}
function guys() { "use strict"; document.getElementsById("guys").style.display = "none"; }