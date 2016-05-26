  var quiz = [{
    "question": 'Q1',
    "background": "../where-are-you/video/wave.mp4",
    "choices": 
      [
        "Senegal", 
        'Orlando', 
        'San Diego', 
      ],
    "correct": 'Senegal',
    "description": "West Africa"

  },
  {
    "question": 'Q2',
    "background": "../where-are-you/video/snow.mp4",
    "choices": 
      [
        "Dusty", 
        "Othello", 
        "Spokane", 
      ],
    "correct": 'Spokane',
    "description": "Washington"
  },
  {
    "question": 'Q3',
    "background": "../where-are-you/video/flowers.mp4",
    "choices": 
      [
        "Kent", 
        "Santa Cruz", 
        "Ann Arbor", 
      ],
    "correct": 'Santa Cruz',
    "description": "California"
  },
  {
    "question": 'Q4',
    "background": "../where-are-you/video/snow.mp4",
    "choices": 
      [
        "Billings", 
        "Havre", 
        "Great Falls", 
      ],
    "correct": 'Havre',
    "description": "Montana"
  },
  {
    "question": 'Q5',
    "background": "../where-are-you/video/wave.mp4",
    "choices": 
      [
        "Des Moines", 
        "Federal Way", 
        "Bellvue", 
      ],
    "correct": 'Des Moines',
    "description": "Washington"
  }]

  var userAnswer;
  var answerKey = [quiz[0].correct, quiz[1].correct, quiz[2].correct];
  var userAnswers = [];
  var score = 0;
  var stage = 0;
  var vid = document.getElementById("background");
  var vidTwo = document.getElementById("overlay-background");
  var inputOne = quiz[stage].choices[0];
  var inputTwo = quiz[stage].choices[1];
  var inputThree = quiz[stage].choices[2];

  $('.answer-button').click(function(){
    var userAnswer = $( this ).html();
    if (userAnswer == quiz[stage].correct){
      score++;
    };
    console.log("Score: " + score);
  });

$(document).ready(function(){
  runQuiz();  

      /*--- Display answer box ---*/
    $(".button").click(function(){
        $(".overlay").fadeIn(1000);
    });

    $("#answer-button-one").click(function(){
      userAnswers.push(quiz[stage].choices[0]);
       console.log(userAnswers);
    });
    $("#answer-button-two").click(function(){
      userAnswers.push(quiz[stage].choices[1]);
       console.log(userAnswers);
    });
    $("#answer-button-three").click(function(){
      userAnswers.push(quiz[stage].choices[2]);
       console.log(userAnswers);
    });

    $(".answer-button").click(function(){
      $("#correct-answer").html(quiz[stage].correct);
      $("#description").html(quiz[stage].description);
      $(".userScore").html("You got " + score + " out of 5");


    });

    $("#newGame").click(function(e){
      stage = -1;
      score = 0;
      $(".scoreboard").fadeOut(1000);
      e.preventDefault();
    });

    /*--- Hide answer box ---*/
    $("a.close").click(function(){
    //Fade back in to main page
    if (stage <= 3) {
      $(".overlay").fadeOut(300);
    }
    else {
      $(".scoreboard").fadeIn(1000);
      }

      stage++;
      runQuiz();  
      // scoreboard();

    });

function runQuiz(){
    // stage++;
    console.log("Stage: " + stage);

    vid.src = quiz[stage].background;
    vidTwo.src = quiz[stage].background;
    $("#answer-button-one").html(quiz[stage].choices[0]);
    $("#answer-button-two").html(quiz[stage].choices[1]);
    $("#answer-button-three").html(quiz[stage].choices[2]);
    $(".stage-count").html(stage + 1);

    // scoreboard();
    console.log("Score: " + score);

    if (stage == 3) {
      return;
    };
};

// function scoreboard(){
//   if ($.inArray(userAnswers[0], answerKey) > -1) {
//     score++;
//   }
//   if ($.inArray(userAnswers[1], answerKey) > -1) {
//     score++;
//   }
//   if ($.inArray(userAnswers[2], answerKey) > -1) {
//     score++;
//   }
// }


//TO DO: 
// Display score on scoreboard
//Create reset function
//Display current stage


// function game(){

//Track "next" button clicks
  // $("#next").click(function(){
  //   stage++;
  //   console.log(stage);
  // });

//   if (stage = 0) {
//   vid.src = "../where-are-you/video/wave.mp4";
//   }
//   else if (stage = 1) {
//   vid.src = "../where-are-you/video/snow.mp4";
//   }
//   else if (stage = 2) {
//   vid.src = "../where-are-you/video/flowers.mp4";
//   }
//   else if (stage = 3) {
//   vid.src = "../where-are-you/video/wave.mp4";
//   }
//   else {
//   vid.src = "../where-are-you/video/wave.mp4";
//   }
// };
  // e.preventDefault();

});


//Track "next" button clicks
//Create variables based on button clicks
//Fill answers and background based on variables

//Learn how to end loop and display score-page.





