// CLICK EVENTS

// $('.back').click(function ()
$('#start').click(function() {
  console.log("starting new game!!!");
  var game = new Game();
  game.start();
});
var panel = $("#quiz-area");

// Question set
var questions = [
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
    correctAnswer: "document.getElementById('demo').innerHTML = 'Hello World!';",
    points: 2
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: [
      "The < body > section",
      "The < head > section",
      "Both the < head > section and the < body > section are correct"
    ],
    correctAnswer: "Both the < head > section and the < body > section are correct",
    points: 1
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answers: [
      "< script name='xxx.js' >",
      "< script src='xxx.js' >",
      "< script href='xxx.js' >"
    ],
    correctAnswer: "< script src='xxx.js' >"
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    answers: ["False", "True"],
    correctAnswer: "False"
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      "alertBox('Hello World');",
      "msg('Hello World');",
      "msgBox('Hello World');",
      "alert('Hello World');"
    ],
    correctAnswer: "alert('Hello World');"
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      "function myFunction()",
      "function = myFunction()",
      "function:myFunction()"
    ],
    correctAnswer: "function myFunction()"
  },
  {
    question: "How do you call a function named 'myFunction'?",
    answers: [
      "myFunction()",
      "call myFunction()",
      "call function myFunction()"
    ],
    correctAnswer: "myFunction()"
  },
  {
    question: "How to write an IF statement in JavaScript?",
    answers: ["if (i == 5)", "if i = 5 then", "if i = 5", "if i == 5 then"],
    correctAnswer: "if (i == 5)"
  },
  {
    question: "How does a WHILE loop start?",
    answers: ["while (i <= 10; i++)", "while (i <= 10)", "While i = 1 to 10"],
    correctAnswer: "while (i <= 10)"
  },
  {
    question: "How does a FOR loop start?",
    answers: [
      "for i = 1 to 5",
      "for (i = 0; i <= 5; i++)",
      "for (i <= 5; i++)",
      "for (i = 0; i <= 5)"
    ],
    correctAnswer: "for (i = 0; i <= 5; i++)"
  },
  {
    question: "How can you add a comment in a JavaScript?",
    answers: [
      "'This is a comment",
      "<!--This is a comment-->",
      "//This is a comment"
    ],
    correctAnswer: "//This is a comment"
  },
  {
    question:
      "How to insert a comment that has more than one line in JavaScript?",
    answers: [
      "/*This comment has more than one line*/",
      "//This comment has more than one line//",
      "<!--This comment has more than one line-->"
    ],
    correctAnswer: "/*This comment has more than one line*/"
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    answers: [
      "var colors = ['red', 'green', 'blue']",
      "var colors = (1:'red', 2:'green', 3:'blue')",
      "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
      "var colors = 'red', 'green', 'blue'"
    ],
    correctAnswer: "var colors = ['red', 'green', 'blue']"
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    answers: ["round(7.25)", "rnd(7.25)", "Math.rnd(7.25)", "Math.round(7.25)"],
    correctAnswer: "Math.round(7.25)"
  },
  {
    question: "How do you find the number with the highest value of x and y?",
    answers: ["ceil(x, y)", "Math.ceil(x, y)", "top(x, y)", "Math.max(x, y)"],
    correctAnswer: "Math.max(x, y)"
  },
  {
    question:
      "What is the correct JavaScript syntax for opening a new window called 'w2' ?",
    answers: [
      "w2 = window.open('http://www.w3schools.com');",
      "w2 = window.new('http://www.w3schools.com');"
    ],
    correctAnswer: "w2 = window.open('http://www.w3schools.com');"
  },
  {
    question: "JavaScript is the same as Java.",
    answers: ["True", "False"],
    correctAnswer: "False"
  },
  {
    question: "How can you detect the client's browser name?",
    answers: ["navigator.appName", "client.navName", "browser.name"],
    correctAnswer: "navigator.appName"
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: ["onmouseover", "onclick", "onchange", "onmouseclick"],
    correctAnswer: "onclick"
  },
  {
    question: "How can you detect the client's browser name?",
    answers: ["navigator.appName", "client.navName", "browser.name"],
    correctAnswer: "navigator.appName"
  },
  {
    question: "How do you declare a JavaScript variable?",
    answers: ["var carName;", "v carName;", "variable carName;"],
    correctAnswer: "var carName;"
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    answers: ["-", "x", "=", "*"],
    correctAnswer: "="
  },
  {
    question: "What will the following code return: Boolean(10 > 9)",
    answers: ["NaN", "False", "True"],
    correctAnswer: "True"
  },
  {
    question: "Who created JavaScript?",
    answers: ["Microsoft", "Sun Microsystems", "Oracle", "Netscape"],
    correctAnswer: "Netscape"
  },
  {
    question:
      "How long did Brendan Eich take to write the JavaScript programming language?",
    answers: ["10 days", "2 weeks", "2 months", "10 months"],
    correctAnswer: "10 days"
  },
  {
    question:
      "Is JavaScript a front-end, back-end, or full-stack programming language?",
    answers: ["Front-end", "Back-end", "Full-stack"],
    correctAnswer: "Full-stack"
  },
  {
    question: "Null is an object, yes or no?",
    answers: ["Yes", "No", "", ""],
    correctAnswer: "Yes"
  },
  {
    question: "Which of the following is not a reserved word in JavaScript?",
    answers: ["default", "finally", "throw", "undefined"],
    correctAnswer: "undefined"
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Computer Style Sheets",
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets"
    ],
    correctAnswer: "Cascading Style Sheets"
  },
  {
    question:
      "What is the correct HTML for referring to an external style sheet?",
    answers: [
      "style src='mystyle.css'>",
      "<stylesheet>mystyle.css</stylesheet>",
      "<link rel='stylesheet' type='text/css' href='mystyle.css'>"
    ],
    correctAnswer: "<link rel='stylesheet' type='text/css' href='mystyle.css'>"
  },
  {
    question:
      "Where in an HTML document is the correct place to refer to an external style sheet?",
    answers: [
      "In the <head> section",
      "In the <body> section",
      "At the end of the document"
    ],
    correctAnswer: "In the <head> section"
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    answers: ["<script>", "<css>", "<style>"],
    correctAnswer: "<style>"
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    answers: ["font", "styles", "class", "style"],
    correctAnswer: "style"
  },
  {
    question: "Which is the correct CSS syntax?",
    answers: [
      "body {color: black;}",
      "body:color=black;",
      "{body:color=black;}",
      "{body;color:black;}"
    ],
    correctAnswer: "body {color: black;}"
  },
  {
    question: "How do you insert a comment in a CSS file?",
    answers: [
      "' this is a comment",
      "// this is a comment",
      "/* this is a comment */",
      "// this is a comment //"
    ],
    correctAnswer: "/* this is a comment */"
  },
  {
    question: "Which property is used to change the background color?",
    answers: ["bgcolor", "background-color", "color"],
    correctAnswer: "background-color"
  },
  {
    question: "How do you add a background color for all <h1> elements?",
    answers: [
      "h1.all {background-color:#FFFFFF;}",
      "all.h1 {background-color:#FFFFFF;}",
      "h1 {background-color:#FFFFFF;}"
    ],
    correctAnswer: "h1 {background-color:#FFFFFF;}"
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    answers: ["text-color", "color", "fgcolor"],
    correctAnswer: "Color"
  },
  {
    question: "Which CSS property controls the text size?",
    answers: ["font-size", "text-style", "font-style", "text-size"],
    correctAnswer: "font-size"
  },
  {
    question:
      "What is the correct CSS syntax for making all the <p> elements bold?",
    answers: [
      "p {text-size:bold;}",
      "<p style='text-size:bold;'>",
      "p {font-weight:bold;}",
      "<p style='font-size:bold;'>"
    ],
    correctAnswer: "p {font-weight:bold;}"
  },
  {
    question: "How do you display hyperlinks without an underline?",
    answers: [
      "a {underline:none;}",
      "a {decoration:no-underline;}",
      "a {text-decoration:no-underline;}",
      "a {text-decoration:none;}"
    ],
    correctAnswer: "a {text-decoration:none;}"
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
    correctAnswer: "text-transform:capitalize"
  },
  {
    question: "Which property is used to change the font of an element?",
    answers: ["font-style", "font-family", "font-weight"],
    correctAnswer: "font-family"
  },
  {
    question: "How do you make the text bold?",
    answers: ["style:bold;", "font:bold;", "font-weight:bold;"],
    correctAnswer: "font-weight:bold;"
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
    correctAnswer: "border-width:10px 1px 5px 20px;"
  },
  {
    question: "Which property is used to change the left margin of an element?",
    answers: ["indent", "margin-left", "padding-left"],
    correctAnswer: "margin-left"
  },
  {
    question:
      "When using the padding property; are you allowed to use negative values?",
    answers: ["Yes", "No"],
    correctAnswer: "No"
  },
  {
    question: "How do you make a list that lists its items with squares?",
    answers: [
      "list-style-type: square;",
      "list-type: square;",
      "list: square;"
    ],
    correctAnswer: "list-style-type: square"
  },
  {
    question: "How do you select an element with id 'demo'?",
    answers: ["*demo", "#demo", ".demo", "demo"],
    correctAnswer: "#demo"
  },
  {
    question: "How do you select elements with class name 'test'",
    answers: ["test", ".test", "*test", "#test"],
    correctAnswer: ".test"
  },
  {
    question: "How do you select all p elements inside a div element?",
    answers: ["div + p", "div.p", "div p"],
    correctAnswer: "div p"
  },
  {
    question: "How do you group selectors",
    answers: [
      "Seperate each selector with a comma",
      "Seperate each selector with a plus sign",
      "Seperate each selector with a space"
    ],
    correctAnswer: "Seperate each selector with a comma"
  },
  {
    question: "What is the default value of the position property?",
    answers: ["relative", "fixed", "static", "absolute"],
    correctAnswer: "static",
    points: 3
  }
];

// Variable that will hold the setInterval

class Game {
  constructor() {
    this.incorrect = 0;
    this.counter = 1000;
    this.correct = 0;
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
    }, 1000)
  };
  start() {
    this.countdown()

    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>10</span> Seconds</h2>"  // inputing time remainder element as h2
    ); 

    $("#start").remove();   // removes the start button once clicked

    
    // for (var i = 0; i < questions.length; i++) {
      let random = Math.floor(Math.random()*questions.length);
      // console.log("==================== ", questions[random]);
      panel.append("<h2>" + questions[random].question + "</h2>");
      for (var i = 0; i < questions[random].answers.length; i++) {
        // console.log("==================== ", questions[random].answers[i]);
        panel.append(
          "<button id = 'answer' class= 'btn btn-warning answer' name='question-" +
            i +
            "' value='" +
            questions[random].answers[i] +
            "''>" +
            questions[random].answers[i]
        );
      // }
    }

    // panel.append("<button class='btn btn-dark' id='done'>Submit</button>");

    $('#quiz-area > button').click(function() {
      if ($(this).val() === questions[random].correctAnswer) {
        this.correct++;
      } else {
        this.incorrect++;
      }
      // game.done();
    });
  };

  done() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[random].correctAnswer) {
        this.correct++;
      } else {
        this.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        this.correct++;
      } else {
        this.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        this.correct++;
      } else {
        this.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        this.correct++;
      } else {
        this.incorrect++;
      }
    });

    this.result();
  };

  result() {
    // clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append(
      "<h3>Unanswered: " +
        (questions.length - (this.incorrect + this.correct)) +
        "</h3>"
    );
  }
};

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