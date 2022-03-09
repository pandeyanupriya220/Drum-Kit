//Detecting Buttons Press
var noOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i =0; i< noOfDrumButtons; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function()
{
  var buttonInnerHTML = this.innerHTML; // this used the button to trigger the event, .innerHTML.
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);

});
}

//Detecting keyboard press
document.addEventListener("keydown", function(event)
{
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key)
{
  switch (key) {
    case "w":
       var audio = new Audio("sounds/tom-1.mp3");
       audio.play();
       break;
    case "a":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
    case "s":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
    case "d":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
    case "j":
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;
    case "k":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;
    case "l":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;

    default: console.log(buttonInnerHTML);
  }

}
function buttonAnimation(currentKey){
//selecting the button through their respective classes (all buttons have classes in html body)
var activeButton = document.querySelector("."+ currentKey); //eg. document.querySelector(".w")
activeButton.classList.add("pressed"); //pressed class is made in css, so adding the class to selected button.
// to just pour shadow to the button for few seconds, v use following function.
setTimeout(function() {
  activeButton.classList.remove("pressed");//remove pressed to put back the button in original state aftr few sec.
},100);//for 0.2 sec, the pressed class will work.

}

//var audio = new Audio('sounds/tom-1.mp3');
//audio.play();
//console.log(this.style.color = "white");
