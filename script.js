let text= document.getElementById("text");
let code=document.getElementById("code")
function load(){
    code.style.display="none"
}
let audio=document.querySelector("audio");
document.addEventListener("keydown",(e)=>{
    code.style.display="block"
    text.innerText="You Pressed: "+e.key;
    code.innerText="KeyCode: "+e.keyCode;
    code.classList.add="text";
    audio.play();
})