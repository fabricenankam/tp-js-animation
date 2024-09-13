function gestionnaireEvent1(){
    alert("Mise en oeuvre évènement 'click' reussie");
}
function gestionnaireEvent2(){
    alert("Mise en oeuvre évènement 'doubleclick' reussie");
}
function gestionnaireEvent3(){
    alert("Mise en oeuvre évènement 'mouseover' reussie");
}
function gestionnaireEvent4(){
    alert("Mise en oeuvre évènement 'mouseout' reussie");
}
function gestionnaireEvent5(){
    alert("Mise en oeuvre évènement 'click' reussie");
}



document.getElementById("event1").addEventListener("click",gestionnaireEvent1);
document.getElementById("event2").addEventListener("dblclick",gestionnaireEvent2);
document.getElementById("event3").addEventListener("mouseover",gestionnaireEvent3);
document.getElementById("event4").addEventListener("mouseout",gestionnaireEvent4);
document.getElementById("event1").addEventListener("click",gestionnaireEvent5);
