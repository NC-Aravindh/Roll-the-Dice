
$(".Roll").click(function(){
  // action goes here!!
  var random_number1 = Math.floor(Math.random() * 6+1);
  var random_number2 = Math.floor(Math.random() * 6+1);

  $('.img1').attr("src","images/dice"+random_number1+".png");
  $('.img2').attr("src","images/dice"+random_number2+".png");
  if (random_number1 > random_number2){
    $("h1").text("Player1 Wins")
  }
  else if (random_number1 < random_number2){
    $("h1").text("Player2 Wins")
  }
  else{
    $("h1").text("Draw")
  }
});
// $(".exit").click(()=>$('h1').text("End of the game")
// );
$(".exit").click(function(){
  $('h1').text("End of the game");
  $('.Roll').prop('disabled', true);
}
);
