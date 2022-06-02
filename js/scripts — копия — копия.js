var sas = document.getElementsByTagName("p");
var pop = [];
for (var i = 0;i<sas.length;i++){
  pop[i] = sas[i].textContent;
  sas[i].textContent="";
}
var i =0;
window.onload = function sasemangus(){
  setTimeout(function(){

      for (var q = 0;q<sas.length;q++){
        if(i<pop[q].length)
          sas[q].textContent += pop[q][i];
        }
        i++;
        
      if(i<180){
        sasemangus();
      }
      }
,100);}