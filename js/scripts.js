//user
$(document).ready(function() {
  $("form#pingPongForm").submit(function(event) {
    $("#userOutput").empty();
    var userInput = parseInt($("input#number").val());
    var result = pingPongFun(userInput);
    result.forEach(function(output) {
    $("#userOutput").append("<li>" + output + "</li>");
    // $(".#userOutput").animate("url('')")
    event.preventDefault();
  });
  // alert("pingpong");
});
});

//business
function pingPongFun(userInput){
var result = [];
for (var i = 1; i <= 300; i++){
  if ((i % 15) === 0){
    result.push ("Ping-Pong");
  } else if ((i % 5) === 0){
    result.push ("Pong");

  } else if ((i % 3) === 0){
    result.push ("Ping");
  } else
    result.push (i);
}
return result;
}
