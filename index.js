function openTab(evt, tabName){
    var i, tablinks, tabcontents;
    tablinks = document.getElementsByClassName("tab-links");
    for(i=0; i < tablinks.length; i++){
        tablinks[i].classList.remove("active-link");
    }
    tabcontents = document.getElementsByClassName("tab-contents");
    for(i=0; i < tabcontents.length; i++){
        tabcontents[i].classList.remove("active-content");
    }
    evt.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-content")
}

var sidemeu = document.getElementById("sidemenu");
function openmenu(){
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right = "-200px";
}