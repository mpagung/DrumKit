function makeSound(key){
  // causes the audio file to play depending on what key is pressed
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
function buttonAnimation(key){
  var activeButton=document.querySelector("."+key);
  activeButton.classList.add("pressed")
  setTimeout(function(){activeButton.classList.remove("pressed")},100);
}

// Add listeners to buttons for clicks
var buttons=document.querySelectorAll(".drum")
for (var i=0;i<buttons.length;i++){
  buttons[i].addEventListener("click",function(){
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  })
  buttons[i].addEventListener("dblclick",function(event){
    // random function to add character to the code when button is pressed too much
    alert("Don't damage my virtual drums! :<")
  })
}

// Listeners for keyboard presses
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);})
