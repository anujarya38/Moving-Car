const sound = new Audio('sound.mp3');
document.onkeydown=(e)=>{
if(e.keyCode == 32){
    sound.loop=true;
    sound.play();
}
}