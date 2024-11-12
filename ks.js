

function ca(){
    document.addEventListener("click", muz)
    
}

function muz(){
    document.getElementById("mu").play();
    document.getElementById("mu").volume = 0.05;
    document.removeEventListener("click", muz)
}
function di(){
    document.getElementById("mu").pause();
}