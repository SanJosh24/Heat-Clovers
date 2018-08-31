var game;
// CLICK EVENTS

// $('.back').click(function ()
$("#start").click(function() {
  console.log("starting new game!!!");
  game = new Game();
  game.start();
  heatTeam();
});
var panel = $("#quiz-area");
var scoreboard = $("#scoreBoard");

// Easy Question Set

var easyQuestions = [
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: [
      "The < body > section",
      "The < head > section",
      "Both the < head > section and the < body > section are correct"
    ],
    correctAnswer:
      "Both the < head > section and the < body > section are correct",
    points: 1
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    answers: ["False", "True"],
    correctAnswer: "False",
    points: 1
  },
  {
    question: "How do you call a function named 'myFunction'?",
    answers: [
      "myFunction()",
      "call myFunction()",
      "call function myFunction()"
    ],
    correctAnswer: "myFunction()",
    points: 1
  },
  {
    question: "How can you add a comment in a JavaScript?",
    answers: [
      "'This is a comment",
      "<!--This is a comment-->",
      "//This is a comment"
    ],
    correctAnswer: "//This is a comment",
    points: 1
  },
  {
    question: "JavaScript is the same as Java.",
    answers: ["True", "False"],
    correctAnswer: "False",
    points: 1
  },
  {
    question: "How do you declare a JavaScript variable?",
    answers: ["var carName;", "v carName;", "variable carName;"],
    correctAnswer: "var carName;",
    points: 1
  },
  {
    question: "What will the following code return: Boolean(10 > 9)",
    answers: ["NaN", "False", "True"],
    correctAnswer: "True",
    points: 1
  },
  {
    question:
      "Where in an HTML document is the correct place to refer to an external style sheet?",
    answers: [
      "In the <head> section",
      "In the <body> section",
      "At the end of the document"
    ],
    correctAnswer: "In the <head> section",
    points: 1
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    answers: ["font", "styles", "class", "style"],
    correctAnswer: "style",
    points: 1
  },
  {
    question: "Which property is used to change the background color?",
    answers: ["bgcolor", "background-color", "color", "background-image"],
    correctAnswer: "background-color",
    points: 1
  },
  {
    question:
      "What is the correct CSS syntax for making all the < p > elements bold?",
    answers: [
      "p {text-size:bold;}",
      "p style='text-size:bold;",
      "p {font-weight:bold;}",
      "p style='font-size:bold;'"
    ],
    correctAnswer: "p {font-weight:bold;}",
    points: 1
  },
  {
    question: "Which property is used to change the font of an element?",
    answers: ["font-style", "font-family", "font-weight"],
    correctAnswer: "font-family",
    points: 1
  },
  {
    question: "Which property is used to change the left margin of an element?",
    answers: ["indent", "margin-left", "padding-left", "margin"],
    correctAnswer: "margin-left",
    points: 1
  },
  {
    question:
      "When using the padding property; are you allowed to use negative values?",
    answers: ["Yes", "No"],
    correctAnswer: "No",
    points: 1
  },
  {
    question: "How do you select an element with id 'demo'?",
    answers: ["*demo", "#demo", ".demo", "demo"],
    correctAnswer: "#demo",
    points: 1
  },
  {
    question: "How do you select elements with class name 'test'",
    answers: ["test", ".test", "*test", "#test"],
    correctAnswer: ".test",
    points: 1
  }
];

// Medium Question Set

var mediumQuestions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["< js >", "< script >", "< javascript >", "< scripting >"],
    correctAnswer: "< script >",
    points: 2
  },
  {
    question:
      "What is the correct JavaScript syntax to change the content of the HTML element below?",
    answers: [
      "document.getElement('p').innerHTML = 'Hello World!';",
      "document.getElementByName('p').innerHTML = 'Hello World!';",
      "#demo.innerHTML = 'Hello World!';",
      "document.getElementById('demo').innerHTML = 'Hello World!';"
    ],
    correctAnswer:
      "document.getElementById('demo').innerHTML = 'Hello World!';",
    points: 2
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answers: [
      "< script name='xxx.js' >",
      "< script src='xxx.js' >",
      "< script href='xxx.js' >"
    ],
    correctAnswer: "< script src='xxx.js' >",
    points: 2
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      "function myFunction()",
      "function = myFunction()",
      "function:myFunction()"
    ],
    correctAnswer: "function myFunction()",
    points: 2
  },
  {
    question:
      "How to insert a comment that has more than one line in JavaScript?",
    answers: [
      "/*This comment has more than one line*/",
      "//This comment has more than one line//",
      "<!--This comment has more than one line-->"
    ],
    correctAnswer: "/*This comment has more than one line*/",
    points: 2
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    answers: [":", "x", "=", "*"],
    correctAnswer: "=",
    points: 2
  },
  {
    question:
      "Is JavaScript a front-end, back-end, or full-stack programming language?",
    answers: ["Front-end", "Back-end", "Full-stack"],
    correctAnswer: "Full-stack",
    points: 2
  },
  {
    question: "Null is an object, yes or no?",
    answers: ["Yes", "No"],
    correctAnswer: "Yes",
    points: 2
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Computer Style Sheets",
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets"
    ],
    correctAnswer: "Cascading Style Sheets",
    points: 2
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    answers: ["< script >", "< css >", "< style >"],
    correctAnswer: "< style >",
    points: 2
  },
  {
    question: "Which is the correct CSS syntax?",
    answers: [
      "body {color: black;}",
      "body:color=black;",
      "{body:color=black;}",
      "{body;color:black;}"
    ],
    correctAnswer: "body {color: black;}",
    points: 2
  },
  {
    question: "How do you add a background color for all <h1> elements?",
    answers: [
      "h1.all {background-color:#FFFFFF;}",
      "all.h1 {background-color:#FFFFFF;}",
      "h1 {background-color:#FFFFFF;}",
      "< h1 > {background-color:#FFFFFF;}"
    ],
    correctAnswer: "h1 {background-color:#FFFFFF;}",
    points: 2
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    answers: ["text-color", "color", "fgcolor", "font-color"],
    correctAnswer: "Color",
    points: 2
  },
  {
    question: "Which CSS property controls the text size?",
    answers: ["font-size", "text-style", "font-style", "text-size"],
    correctAnswer: "font-size",
    points: 2
  },
  {
    question:
      "How do you make each word in a text start with a capital letter?",
    answers: [
      "You can't do that with CSS",
      "text-transform:capitalize",
      "text-style:captialize",
      "transform:capitalize"
    ],
    correctAnswer: "text-transform:capitalize",
    points: 2
  },
  {
    question: "How do you make the text bold?",
    answers: ["style:bold;", "font:bold;", "font-weight:bold;"],
    correctAnswer: "font-weight:bold;",
    points: 2
  },
  {
    question: "How do you select all p elements inside a div element?",
    answers: ["div + p", "div.p", "div p"],
    correctAnswer: "div p",
    points: 2
  }
];

// Hard Question Set

var hardQuestions = [
  {
    question: "What is the default value of the position property?",
    answers: ["relative", "fixed", "static", "absolute"],
    correctAnswer: "static",
    points: 3
  },
  {
    question: "How do you group selectors",
    answers: [
      "Seperate each selector with a comma",
      "Seperate each selector with a plus sign",
      "Seperate each selector with a space",
      "Seperate each selector with a dash"
    ],
    correctAnswer: "Seperate each selector with a comma",
    points: 3
  },
  {
    question: "How do you make a list that lists its items with squares?",
    answers: [
      "list-style-type: square;",
      "list-type: square;",
      "list: square;",
      "list-style: square;"
    ],
    correctAnswer: "list-style-type: square",
    points: 3
  },
  {
    question:
      "'How do you display a border like this: The top border = 10 pixels The bottom border = 5 pixels The left border = 20 pixels The right border = 1pixel?",
    answers: [
      "border-width:10px 20px 5px 1px;",
      "border-width:10px 1px 5px 20px;",
      "border-width:10px 5px 20px 1px;",
      "border-width:5px 20px 10px 1px;"
    ],
    correctAnswer: "border-width:10px 1px 5px 20px;",
    points: 3
  },
  {
    question: "How do you display hyperlinks without an underline?",
    answers: [
      "a {underline:none;}",
      "a {decoration:no-underline;}",
      "a {text-decoration:no-underline;}",
      "a {text-decoration:none;}"
    ],
    correctAnswer: "a {text-decoration:none;}",
    points: 3
  },
  {
    question: "How do you insert a comment in a CSS file?",
    answers: [
      "/* this is a comment",
      "// this is a comment",
      "/* this is a comment */",
      "// this is a comment //"
    ],
    correctAnswer: "/* this is a comment */",
    points: 3
  },
  {
    question: "Which of the following is not a reserved word in JavaScript?",
    answers: ["default", "finally", "throw", "undefined"],
    correctAnswer: "undefined",
    points: 3
  },
  {
    question: "Who created JavaScript?",
    answers: ["Microsoft", "Sun Microsystems", "Oracle", "Netscape"],
    correctAnswer: "Netscape",
    points: 3
  },
  {
    question:
      "How long did Brendan Eich take to write the JavaScript programming language?",
    answers: ["10 days", "2 weeks", "2 months", "10 months"],
    correctAnswer: "10 days",
    points: 3
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    answers: [
      "var colors = ['red', 'green', 'blue']",
      "var colors = (1:'red', 2:'green', 3:'blue')",
      "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
      "var colors = 'red', 'green', 'blue'"
    ],
    correctAnswer: "var colors = ['red', 'green', 'blue']",
    points: 3
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    answers: ["round(7.25)", "rnd(7.25)", "Math.rnd(7.25)", "Math.round(7.25)"],
    correctAnswer: "Math.round(7.25)",
    points: 3
  },
  {
    question: "How do you find the number with the highest value of x and y?",
    answers: ["ceil(x, y)", "Math.ceil(x, y)", "top(x, y)", "Math.max(x, y)"],
    correctAnswer: "Math.max(x, y)",
    points: 3
  },
  {
    question: "How can you detect the client's browser name?",
    answers: ["navigator.appName", "client.navName", "browser.name"],
    correctAnswer: "navigator.appName",
    points: 3
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: ["onmouseover", "onclick", "click", "onmouseclick"],
    correctAnswer: "onclick",
    points: 3
  },
  {
    question: "How to write an IF statement in JavaScript?",
    answers: ["if (i == 5)", "if i = 5 then", "if i = 5", "if i == 5 then"],
    correctAnswer: "if (i == 5)",
    points: 3
  },
  {
    question: "How does a WHILE loop start?",
    answers: ["while (i <= 10; i++)", "while (i <= 10)", "While i = 1 to 10"],
    correctAnswer: "while (i <= 10)",
    points: 3
  },
  {
    question: "How does a FOR loop start?",
    answers: [
      "for i = 1 to 5",
      "for (i = 0; i <= 5; i++)",
      "for (i <= 5; i++)",
      "for (i = 0; i <= 5)"
    ],
    correctAnswer: "for (i = 0; i <= 5; i++)",
    points: 3
  }
];

// Variable that will hold the setInterval

function heatTeam() {
  $('.answerBtn').remove();
  $('h2').remove();

  panel.append(
    "<button class = 'btn btn-warning heat-easy'><img class = 'heat-sm-logo' src = '../Images/heat-logo.png'>EASY (+1)</button>"
  );
  panel.append(
    "<button class = 'btn btn-warning heat-medium'><img class = 'heat-sm-logo' src = '../Images/heat-logo.png'>MEDIUM (+2)</button>"
  );
  panel.append(
    "<button class = 'btn btn-warning heat-hard'><img class = 'heat-sm-logo' src = '../Images/heat-logo.png'>HARD (+3)</button>"
  );

  game.start()
}

function nextTeam() {

  $('.answerBtn').remove();
  $('h2').remove();

  panel.append(
    "<button class = 'btn btn-success celtic-easy'><img class = 'celtic-sm-logo' src = '../Images/boston-celtics-logo-vector-400x400.png'>EASY (+1)</button>"
  );
  panel.append(
    "<button class = 'btn btn-success celtic-medium'><img class = 'celtic-sm-logo' src = '../Images/boston-celtics-logo-vector-400x400.png'>MEDIUM (+2)</button>"
  );
  panel.append(
    "<button class = 'btn btn-success celtic-hard'><img class = 'celtic-sm-logo' src = '../Images/boston-celtics-logo-vector-400x400.png'>HARD (+3)</button>"
  );

  game.start();

}

class Game {
  constructor() {
    // this.incorrect = 0;
    this.counter = 24;
    // this.correct = 0;
    this.homeScore = 0;
    this.homeFoul = 0;
    this.awayScore = 0;
    this.awayFoul = 0;
    this.theEasyAnswer;
    this.theMediumAnswer;
    this.theHardAnswer;
    this.heatTurn = true;
  }
  countdown() {
    var timer = setInterval(() => {
      this.counter--;
      $("#counter-number").html(this.counter);
      if (this.counter === 0) {
        console.log("TIME UP");
        this.done();
        this.timer = clearInterval();
      }
    }, 1000);
  }
  start() {

    scoreboard.prepend(
      "<div class = 'shot-clock'><span id='counter-number'>24</span></div>" // inputing time remainder element as h2
    );

    $("#start").remove(); // removes the start button once clicked

    scoreboard.prepend(
      "<div class = 'away-fouls'>" + this.awayFoul + "</div>"
    ); // prepends away incorrect answers
    scoreboard.prepend(
      "<div class = 'home-fouls'>" + this.homeFoul + "</div>"
    ); // prepends home incorrent answers
    scoreboard.prepend("<div class = 'away-score'>" + this.awayScore + "</div>"); // prepends away score
    scoreboard.prepend("<div class = 'home-score'>" + this.homeScore + "</div>"); // prepends home score

    // panel.append(
    //   "<button class = 'btn btn-warning heat-easy'><img class = 'heat-sm-logo' src = '../Images/heat-logo.png'>EASY (+1)</button>"
    // );
    // panel.append(
    //   "<button class = 'btn btn-warning heat-medium'><img class = 'heat-sm-logo' src = '../Images/heat-logo.png'>MEDIUM (+2)</button>"
    // );
    // panel.append(
    //   "<button class = 'btn btn-warning heat-hard'><img class = 'heat-sm-logo' src = '../Images/heat-logo.png'>HARD (+3)</button>"
    // );

    // for (var i = 0; i < questions.length; i++) {

    // let random = Math.floor(Math.random()*questions.length);
    // panel.append("<h2>" + questions[random].question + "</h2>");
    // for (var i = 0; i < questions[random].answers.length; i++) {
    //   panel.append(
    //     "<button id = 'answer' class= 'btn btn-warning answer' name='question-" +
    //       i +
    //       "' value='" +
    //       questions[random].answers[i] +
    //       "''>" +
    //       questions[random].answers[i]
    //   );

    // }
    // }

    // panel.append("<button class='btn btn-dark' id='done'>Submit</button>");
    let randomEasy = Math.floor(Math.random() * easyQuestions.length);
    let randomMedium = Math.floor(Math.random() * mediumQuestions.length);
    let randomHard = Math.floor(Math.random() * hardQuestions.length);
    // var homeScore = 0;
    // var homeFoul = 0;
    // var awayScore = 0;
    // var awayFoul = 0;

    // $('#quiz-area > button').click((e)=> {

    // });

    $(".heat-easy").click(() => {
      console.log('jgjkgkjgkgkgkgkgkgkgkgkgkgkgk')
      this.theEasyAnswer = easyQuestions[randomEasy].correctAnswer;
      panel.append("<h2>" + easyQuestions[randomEasy].question + "</h2>");
      $("#quiz-area button").remove();
      for (var i = 0; i < easyQuestions[randomEasy].answers.length; i++) {
        panel.append(
          `<button onclick='checkCorrectAnswer(game, "${easyQuestions[randomEasy].answers[i]}")' id='answer${i}' class='answerBtn btn btn-warning answer' name='question-${i}' value='${
            easyQuestions[randomEasy].answers[i]
          } '> <img class='heat-sm-logo' src='../Images/heat-logo.png' /> ${
            easyQuestions[randomEasy].answers[i]
          } </button>`
        );
      }
    });
    $(".heat-medium").click(() => {
      this.theMediumAnswer = mediumQuestions[randomMedium].correctAnswer;
      panel.append("<h2>" + mediumQuestions[randomMedium].question + "</h2>");
      $("#quiz-area button").remove();
      for (var i = 0; i < mediumQuestions[randomMedium].answers.length; i++) {
        panel.append(
          `<button onclick='checkCorrectAnswer(game, "${mediumQuestions[randomMedium].answers[i]}")' id='answer${i}' class='answerBtn btn btn-warning answer' name='question-${i}' value='${
            mediumQuestions[randomMedium].answers[i]
          } '> <img class='heat-sm-logo' src='../Images/heat-logo.png' /> ${
            mediumQuestions[randomMedium].answers[i]
          } </button>`
        );
      }
    });
    $(".heat-hard").click(() => {
      this.theHardAnswer = hardQuestions[randomHard].correctAnswer;
      panel.append("<h2>" + hardQuestions[randomHard].question + "</h2>");
      $("#quiz-area button").remove();
      for (var i = 0; i < hardQuestions[randomHard].answers.length; i++) {
        panel.append(
          `<button onclick='checkCorrectAnswer(game, "${hardQuestions[randomHard].answers[i]}")' id='answer${i}' class='answerBtn btn btn-warning answer' name='question-${i}' value='${
            hardQuestions[randomHard].answers[i]
          } '> <img class='heat-sm-logo' src='../Images/heat-logo.png' /> ${
            hardQuestions[randomHard].answers[i]
          } </button>`
        );
      }
    });

    console.log('dkahkdhak: ', $(".celtic-easy"))

    $(".celtic-easy").click(() => {
      console.log("hello")
      this.theEasyAnswer = easyQuestions[randomEasy].correctAnswer;
      panel.append("<h2>" + easyQuestions[randomEasy].question + "</h2>");
      $("#quiz-area button").remove();
      for (var i = 0; i < easyQuestions[randomEasy].answers.length; i++) {
        panel.append(
          `<button onclick='checkCorrectAnswer(game, "${easyQuestions[randomEasy].answers[i]}")' id='answer${i}' class='answerBtn btn btn-success answer' name='question-${i}' value='${
            easyQuestions[randomEasy].answers[i]
          } '> <img class='celtic-sm-logo' src='../Images/boston-celtics-logo-vector-400x400.png' /> ${
            easyQuestions[randomEasy].answers[i]
          } </button>`
        );
      }
    });
    $(".celtic-medium").click(() => {
      console.log("hello")
      this.theMediumAnswer = mediumQuestions[randomMedium].correctAnswer;
      panel.append("<h2>" + mediumQuestions[randomMedium].question + "</h2>");
      $("#quiz-area button").remove();
      for (var i = 0; i < mediumQuestions[randomMedium].answers.length; i++) {
        panel.append(
          `<button onclick='checkCorrectAnswer(game, "${mediumQuestions[randomMedium].answers[i]}")' id='answer${i}' class='answerBtn btn btn-success answer' name='question-${i}' value='${
            mediumQuestions[randomMedium].answers[i]
          } '> <img class='celtic-sm-logo' src='../Images/boston-celtics-logo-vector-400x400.png' /> ${
            mediumQuestions[randomMedium].answers[i]
          } </button>`
        );
      }
    });
    $(".celtic-hard").click(() => {
      this.theHardAnswer = hardQuestions[randomHard].correctAnswer;
      panel.append("<h2>" + hardQuestions[randomHard].question + "</h2>");
      $("#quiz-area button").remove();
      for (var i = 0; i < hardQuestions[randomHard].answers.length; i++) {
        panel.append(
          `<button onclick='checkCorrectAnswer(game, "${hardQuestions[randomHard].answers[i]}")' id='answer${i}' class='answerBtn btn btn-success answer' name='question-${i}' value='${
            hardQuestions[randomHard].answers[i]
          } '> <img class='celtic-sm-logo' src='../Images/boston-celtics-logo-vector-400x400.png' /> ${
            hardQuestions[randomHard].answers[i]
          } </button>`
        );
      }
    });


  }

  checkAnswer(theValue) {

    console.log("checking answer =================== ", this.theEasyAnswer);
    console.log("checking value >>>>>>>>>>>>>>>>>>>> ", theValue)

      if(this.heatTurn === true){

        if (
          theValue === this.theEasyAnswer
          // theValue === this.theMediumAnswer ||
          // theValue === this.theHardAnswer
        ) {
          // this.correct++;
          this.homeScore+=1;
          $(".home-score").html(this.homeScore);
          this.heatTurn = false;
          nextTeam();
          return true;
        } if (
          theValue === this.theMediumAnswer
        ) {
          this.homeScore+=2;
          $(".home-score").html(this.homeScore);
          this.heatTurn = false;
          nextTeam();
          return true;
        } if (
          theValue === this.theHardAnswer
        ) {
          this.homeScore+=3;
          $(".home-score").html(this.homeScore);
          this.heatTurn = false;
          nextTeam();
          return true;
        } else {
          this.homeFoul+=1;
          $(".home-fouls").html(this.homeFoul);
          // this.incorrect++;
          this.heatTurn = false;
          nextTeam();
          return false;
        }
      } else {
        if (
          theValue === this.theEasyAnswer
        ) {
          this.awayScore+=1;
          $(".away-score").html(this.awayScore);
          this.heatTurn = true;
          heatTeam();
          return true;
        } if (
          theValue === this.theMediumAnswer
        ) {
          this.awayScore+=2;
          $(".away-score").html(this.awayScore);
          this.heatTurn = true;
          heatTeam();
          return true;
        } if (
          theValue === this.theHardAnswer
        ) {
          this.awayScore+=3;
          $(".away-score").html(this.awayScore);
          this.heatTurn = true;
          heatTeam();
          return true;
        } else {
          this.awayFoul+=1;
          $(".away-fouls").html(this.awayFoul);
          // this.incorrect++;
          this.heatTurn = true;
          heatTeam();
          return false;
        }
      }
    }

  // document.querySelector("#quiz-area > button").addEventListener("click", this.checkCorrectAnswer);

  // checkCorrectAnswer(gameObject) {
  //   console.log("checking answer !!!!");
  //   if($('answerBtn').hasClass('heat-sm-logo')) {

  //     if (e.currentTarget.value === easyQuestions[randomEasy].correctAnswer || e.currentTarget.value === mediumQuestions[randomMedium].correctAnswer || e.currentTarget.value === hardQuestions[randomHard].correctAnswer) {
  //       gameObject.correct++;
  //       homeScore++
  //       $('.home-score').html(homeScore);
  //       console.log(gameObject)
  //       return true;
  //     } else {
  //       homeFoul++
  //       $('.home-foul').html(homeFoul);
  //       // gameObject.incorrect++;
  //       return false;
  //     }
  //   }
  //   if ($('answerBtn').hasClass('celtics-sm-logo')){
  //     if (e.currentTarget.value === easyQuestions[randomEasy].correctAnswer || e.currentTarget.value === mediumQuestions[randomMedium].correctAnswer || e.currentTarget.value === hardQuestions[randomHard].correctAnswer) {
  //       this.correct++;
  //       awayScore++
  //       $('.away-score').html(awayScore);
  //       console.log(this)
  //       return true;
  //     } else {
  //       awayFoul++
  //       $('.away-foul').html(awayFoul);
  //       // this.incorrect++;
  //       return false;
  //     }
  //   }
  // }

  done() {
    if (this.homeScore >= 5) {
    }
    if (this.awayScore) {
      return alert("Boston Celtics win the game!")
    }
  }

  result() {
    // clearInterval(timer);
    if ($("#quiz-area > button").click() === true) {
      this.correct++;
    }
    $("#sub-wrapper h2").remove();

    // panel.html("<h2>All Done!</h2>");
    // panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    // panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    // panel.append(
    //   "<h3>Unanswered: " +
    //     (questions.length - (this.incorrect + this.correct)) +
    //     "</h3>"
    // );
  }
}
function checkCorrectAnswer(gameObject, theValue) {
  console.log("the game object :::::::::::::: ", gameObject);
  gameObject.checkAnswer(theValue);


  // if ($("answerBtn").hasClass("heat-sm-logo")) {
  //   if (
  //     theValue === easyQuestions[randomEasy].correctAnswer ||
  //     theValue === mediumQuestions[randomMedium].correctAnswer ||
  //     theValue === hardQuestions[randomHard].correctAnswer
  //   ) {
  //     // gameObject.correct++;
  //     gameObject.homeScore+=1;
  //     $(".home-score").html(homeScore);
  //     console.log(gameObject);
  //     return true;
  //   } else {
  //     gameObject.homeFoul+=1;
  //     $(".home-foul").html(homeFoul);
  //     // gameObject.incorrect++;
  //     return false;
  //   }
  // }
  // if ($("answerBtn").hasClass("celtics-sm-logo")) {
  //   if (
  //     theValue === easyQuestions[randomEasy].correctAnswer ||
  //     theValue === mediumQuestions[randomMedium].correctAnswer ||
  //     theValue === hardQuestions[randomHard].correctAnswer
  //   ) {
  //     // gameObject.correct++;
  //     gameObject.awayScore+=1;
  //     $(".away-score").html(awayScore);
  //     console.log(gameObject);
  //     return true;
  //   } else {
  //     gameObject.awayFoul+=1;
  //     $(".away-foul").html(awayFoul);
  //     // gameObject.incorrect++;
  //     return false;
  //   }
  // }
}
// function nextTeam() {

//   $('.answerBtn').remove();
//   $('h2').remove();

//   panel.append(
//     "<button class = 'btn btn-success celtic-easy'><img class = 'celtic-sm-logo' src = '../Images/boston-celtics-logo-vector-400x400.png'>EASY (+1)</button>"
//   );
//   panel.append(
//     "<button class = 'btn btn-success celtic-medium'><img class = 'celtic-sm-logo' src = '../Images/boston-celtics-logo-vector-400x400.png'>MEDIUM (+2)</button>"
//   );
//   panel.append(
//     "<button class = 'btn btn-success celtic-hard'><img class = 'celtic-sm-logo' src = '../Images/boston-celtics-logo-vector-400x400.png'>HARD (+3)</button>"
//   );
// }

// function nextTeam() {
//   panel.append(
//     "<button class = 'btn btn-success celtic-easy'><img class = 'celtic-sm-logo' src = '../Images/boston-celtics-logo-vector-400x400.png'>EASY (+1)</button>"
//   );
//   panel.append(
//     "<button class = 'btn btn-success celtic-medium'><img class = 'celtic-sm-logo' src = '../Images/boston-celtics-logo-vector-400x400.png'>MEDIUM (+2)</button>"
//   );
//   panel.append(
//     "<button class = 'btn btn-success celtic-hard'><img class = 'celtic-sm-logo' src = '../Images/boston-celtics-logo-vector-400x400.png'>HARD (+3)</button>"
//   );
// }

// lines 449-533
// function pickQuest(){
//   var  random = math.floor(math.random)*myQuestions.length

//     ("#quiz").HTML(myQuestions[random].prompt)
//     for (var i = 0; i < myQuestions[random].answers.length; i++){
//       // $(`.Ans[${i}].HTML(QuestArray[${Random}]Ans[${i}])`)

//     }

//   }
// var score= 0;
// // for(var i=0; i<myQuestions.length; i++);
// var response= window.prompt(questions[i].prompt(questions[i].prompt))
// if (response == questions[i].correctAnswer){
//   score++;
//   alert("Correct!");
// } else{
//   alert("Wrong");
// }
