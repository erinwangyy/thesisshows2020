function ccamenu(){

document.querySelector(".ccaoption").style.display="block"
console.log("yes")
}

function ccamenu2(){
    document.querySelector(".ccaoption").style.display="none"
}
$(document).on("scroll", function() {
  var distanceScrolled =
  $(document).scrollTop();
  $("#letter1").css("top",distanceScrolled * 0.69);
  $(document).scrollTop();
  $("#letter2").css("top",distanceScrolled * 0.40);
  $(document).scrollTop();
  $("#letter3").css("top",distanceScrolled * 0.63);
  $(document).scrollTop();
  $("#letter4").css("top",distanceScrolled * 0.28);
  $(document).scrollTop();
  $("#letter5").css("top",distanceScrolled * 0.05);
  $(document).scrollTop();
  $("#letter6").css("top",distanceScrolled * 0.55);
  $(document).scrollTop();
  $("#letter8").css("top",distanceScrolled * 0.29);
  $(document).scrollTop();
  $("#letter9").css("top",distanceScrolled * 0.49);
  $(document).scrollTop();
  $("#letter10").css("top",distanceScrolled * 0.4);
  $(document).scrollTop();
  $("#letter11").css("top",distanceScrolled * 0.35);
  $(document).scrollTop();
  $("#letter12").css("top",distanceScrolled * 0.1);
  $(document).scrollTop();
  $("#letter14").css("top",distanceScrolled * 0.25);
  $(document).scrollTop();
  $("#letter15").css("top",distanceScrolled * 0.01);
  $(document).scrollTop();
  $("#letter16").css("top",distanceScrolled * 0.2);
  $(document).scrollTop();
  $("#letter17").css("top",distanceScrolled * 0.75);
})
