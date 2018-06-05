$(function(){

  $("#countBtn").click(function(){
    var countTo = parseInt($("#number1").val());
    var countBy = parseInt($("#number2").val());

    if(isNaN(countTo) || isNaN(countBy) || countTo < 1 || countBy < 1){
      alert("Please enter a positive number in each field.");
    }else if (countBy > countTo){
      alert("Please switch the values to use the larger number in the Count To field");
    }else{
      for(var count = 0; count <= countTo; count += countBy){
        $("#userCounts").append("<li>" + count + "</li>")
      }
    }
  });

  // Ice Cream Method

  var flavors = ["chocolate", "vanilla", "strawberry"]

    for (index = 0; index < flavors.length; index += 1) {
      $("#iceCreamReturn").append("<li>" + flavors[index] + "</li>");
    }

  //WordPuzzle
  $("#puzzleBtn").click(function(e){
    e.preventDefault();

    var stringInput = $("#stringInput").val().split("");
    var vowels = ["a", "e", "i", "o", "u", "y"];

    for (index = 0; index < stringInput.length; index += 1) {
      for (vowel = 0; vowel < vowels.length; vowel += 1) {
      if (vowels[vowel] === stringInput[index])
        stringInput[index] = "-"
      }
    }
    
  });


});
