var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var randomNumber;
var randomChosenColor;
var x;
var level = 0;
var index;
var f=0;
//______________________________________________
document.addEventListener("keypress", function() {
  if (level === 0) {
  var b = "Level " + " " + level;
    $("h1").text(b);
    nextSequence();
  }
});

//_______________________________________________
function visual() {
  $(x).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(150);
}
function plays(a) {
  switch (a) {
    case "red":
      document.querySelector(".red_audio").play();
      break;
    case "blue":
      document.querySelector(".blue_audio").play();
      break;
    case "green":
      document.querySelector(".green_audio").play();
      break;
    case "yellow":
      document.querySelector(".yellow_audio").play();
      break;
  }
}
function animatePress(a) {
  var b = "#" + a;
  $(b).addClass("pressed");
  setTimeout(function() {
    $(b).removeClass("pressed");
  }, 100);
}
// _______________________________________________
function nextSequence() {
  level++;
  var b = "Level " + level;
  $("h1").text(b);
  randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  x = "." + randomChosenColor;
  plays(randomChosenColor);
  visual();
  userClickedPattern = [];
  index = 0;
}
$(".btn").click(function(event) {
  var userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  animatePress(userChosenColor);
  plays(userChosenColor);
  index++;
  if(index<= gamePattern.length)
  {
    var result=check(index);

    if(result=="false")
    {
      f=1;
      gameover();
    }
  }
  if(index==(gamePattern.length ))
  {
    if(f==0)
    {
      setTimeout(function(){
        nextSequence()
      },100);
    }
  }
})


function check(c) {
  if(userClickedPattern[c-1]!= gamePattern[c-1])
  {
    return ("false")
  }
}
function gameover()
{
  $("h1").text("Game Over!! Press any key to restart");
  document.querySelector(".wrong_audio").play();
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  }, 200);
   startover();
}
function startover()
{
  document.addEventListener("keypress", function(){
  gamePattern=[];
  userClickedPattern=[];
  index=0;
  f=0;
  level=0;
  nextSequence();})
}
