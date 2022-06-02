function socks() {
    if(document.body.style.color=='white'){document.body.style.color = 'red';}
    else{document.body.style.color = 'white';
    }
  }
function setClicker(){
    var sas = document.querySelectorAll(".img");
    for (var i=0;i< sas.length;i++){
        sas[i].setAttribute("class","noshow");
    }
}
function guys() { "use strict"; document.getElementsById("guys").style.display = "none"; }