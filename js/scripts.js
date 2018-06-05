function wordPuzzle() {
  var stringInput = $("#stringInput").val();
  var splitInput = stringInput.split("");
  var vowels = ["a", "e", "i", "o", "u", "y"];
  var newArray = []
   for (index = 0; index < splitInput.length; index += 1){
    for (vowel = 0; vowel < vowels.length; vowel += 1){
    if (splitInput[index] === vowels[vowel]) {
      newArray[index]="-"
      vowel += vowel.length;
    } else {
      newArray[index]= splitInput[index]
      }
    }
  }
  $("#puzzleString").append(newArray);
}

function wordGuess() {
  var stringInput = $("#stringInput").val();
  var guess = $("#guess").val();
  if (guess === stringInput) {
    alert("You got it!")
    $("#puzzleString").text("");
  } else {
    alert("Try again!")
  }

}

function fortuneBuilder() {
  $("#fortune").show();
  $("input:checkbox[name=questionOne]:checked").each(function(){
    var questionOneResponses = $(this).val();
    $('#fortune').append(questionOneResponses + ", ");
    console.log(questionOneResponses);

  });
  $("input:checkbox[name=questionTwo]:checked").each(function(){
    var questionTwoResponses = $(this).val();
    $('#fortune').append(questionTwoResponses + ", ");
    console.log(questionTwoResponses);


  });
  $("input:checkbox[name=questionThree]:checked").each(function(){
    var questionThreeResponses = $(this).val();
    $('#fortune').append(questionThreeResponses + ", ");
  });


  // for (index = 0; index > questionOneResponses.length);
}



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
    wordPuzzle();

  });
  $("#guessBtn").click(function(e){
    e.preventDefault();
    wordGuess();
  });

// Transportation
$("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
    });
    $('#transportation_survey').hide();
    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");
    });
    $('#transportation_survey').hide();
  });

  $("form#fortune_survey").submit(function(event){
      event.preventDefault();
      fortuneBuilder();
      // $('#transportation_survey').hide();
      // $("#fun-responses").show();
      // $("input:checkbox[name=fun-transportation]:checked").each(function(){
      //   var funTransportationMode = $(this).val();
      //   $('#fun-responses').append(funTransportationMode + "<br>");
      // });
      // $('#transportation_survey').hide();
    });

  $("#palindromeBtn").click(function(e) {
    e.preventDefault();

    var string1 = $("#palindromeInput").val();
    var string2 = string1.split("").reverse().join("");
    if (string2 === string1) {
      alert("It's a palindrome!")
    } else {
      alert("Nope! It's not.")
    }

  });

  var n = 10;
  var numbers = [];
  var difference = 2
  for (index = 0; (index + 2) <= n; index += 1) {
    numbers.push(index + 2)
  }
  console.log("number array:" + numbers);
  for (var prime = 2; (prime - 2) <= numbers.length; prime +=1) {
    for (i = 2; (i - 2) <= numbers.length; i += 1){
      if (i !== prime)  {
        var remainder = i % prime
        console.log("remainder" + remainder)
        if (remainder === 0) {
          var index = numbers.indexOf(i);
          numbers.splice(index, 1)
          // console.log("difference before" + difference)
          // // difference += 1
          // console.log(difference)
          console.log("prime:" + prime + "i:"+ i)
          console.log("index=" + index)
          console.log(numbers)
        }
      }
    }
  }

  // var index = 0

//   for (prime = 2; (prime - 2) <= numbers.length; prime += 1) {
//     console.log("current prime:" + prime)
//     index = 1;
//     for(i = 2; (i - 2) <= numbers.length; i += 1){
//       console.log("Remainder calc:" + numbers[index - 1] + "%" + prime)
//       var remainder = (numbers[index - 1]) % prime
//
//       console.log(remainder);
//       if (remainder === 0 && prime < (numbers[index - 1])) {
//         numbers.splice(index - 2, 1)
//         index += 1;
//         console.log("splice index" + (index -2))
//         console.log("number array:" + numbers)
//     } else {
//       index += 1;
//     }
//   }
// }


});
