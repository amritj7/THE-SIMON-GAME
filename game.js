var level = 0;
var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
$(".btn").click(function(){
  var userChoosenColor = $(this).attr("id");
  userClickedPattern.push(userChoosenColor);
  playSound( userChoosenColor);
  animatePress(userChoosenColor);
  checkAnswer(userClickedPattern.length-1);
});



function nextSequence(){
  var randumNumber = Math.floor(Math.random()*4);
  var randomColorChoose = buttonColors[randumNumber];
  gamePattern.push(randomColorChoose);
  $("#"+randomColorChoose).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomColorChoose);

  level++;
    $("h1").html("Level "+ level);


}
function playSound( name)
{

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}
function animatePress(currentColor){
$("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
  } , 100);

}
var gameStarter = false;
$(document).keypress(function(event){
  if(gameStarter=== false){
    nextSequence();
    $("h1").html("Level "+ level);
    gameStarter  = true;
  }


});
function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){
    console.log("correct");
    if(currentLevel==level-1){
      setTimeout(function(){
        nextSequence();
      }, 1000);
      userClickedPattern = [];
    }
  }
  else{
    console.log("wrong");
    level = 0;
    $("h1").html("You're wrong. Press any key to restart");
    gameStarter = false;
    userClickedPattern = [];
    gamePattern = [];
  }
}
