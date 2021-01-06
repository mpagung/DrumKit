var buttons=document.querySelectorAll(".drum")
for (var i=0;i<buttons.length;i++){
  buttons[i].addEventListener("click",handleClicked)
  buttons[i].addEventListener("dblclick",handleRaped)
}

document.addEventListener("keydown", function(event){
  makeSound(event.key);})

function makeSound(key){
  console.log(key)
  switch (key) {
    case "w":
      var snare=new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "a":
      var tom1=new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "s":
      var tom2=new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "d":
      var tom3=new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "j":
      var tom4=new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "k":
      var kick=new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var crash=new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:

  }
}
function handleClicked(){
  var buttonInnerHTML=this.innerHTML;

  makeSound(buttonInnerHTML)
}
function handleRaped(){
  alert("I got raped :<")
}
