const sound = new Audio('sound.mp3');
document.onkeydown=(e)=>{
if(e.keyCode == 38){
    
    sound.loop=true;
    sound.play();
}
console.log(e.keyCode);
}