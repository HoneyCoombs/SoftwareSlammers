var computeHW = require("./computeHW.js");
var computeExam = require("./computeExam.js");
var computeFinal = require("./computeFinal.js");

var prompt = require('prompt');
 var schema = {
    properties: {      
      HW1: { type: 'number'},
      HW2: { type: 'number'},
      HW3: { type: 'number'},
      Exam1: { type: 'number'},
      Exam2: { type: 'number'}
    },
  };

  prompt.get(schema, function (err, result) {
    //outputs all the grades from input
    console.log('Grades:');
    console.log(' Homework 1:', result.HW1);
    console.log(' Homework 2:', result.HW2);
    console.log(' Homework 3:', result.HW3);
    console.log(' Exam 1:', result.Exam1);
    console.log(' Exam 2:', result.Exam2);
    
    //calls all the functions to get percentages of the homeworks, each exam, and the final grade
    var totalHW = computeHW.computeHW(result.HW1,result.HW2,result.HW3);
    var exam1 = computeExam.computeExam(result.Exam1)
    var exam2 = computeExam.computeExam(result.Exam2)
    var finalGrade = computeFinal.computeFinal(totalHW,exam1,exam2);

    //proof that the math works, I don't know if we need to show this or just the letter grade
    console.log(' Homework:', totalHW)
    console.log(' Exam 1:', exam1)
    console.log(' Exam 2:', exam2)
    console.log(' Final Grade:', Math.round(totalHW + exam1 + exam2).toFixed(1))

    //the letter grade
    console.log(' Final Letter Grade:', finalGrade)

  });

  prompt.start();