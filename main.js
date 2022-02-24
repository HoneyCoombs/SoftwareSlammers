var computeHW = require("./computeHW.js");
var computeExam = require("./computeExam.js");
var computeFinal = require("./computeFinal.js");

var prompt = require('prompt');
 var schema = {
    properties: {      
      HW1: {pattern: /^[1-9][0-9]?$|^100$/,message: 'Grade must be number 0-100',required: true},
      HW2: {pattern: /^[1-9][0-9]?$|^100$/,message: 'Grade must be number 0-100',required: true},
      HW3: {pattern: /^[1-9][0-9]?$|^100$/,message: 'Grade must be number 0-100',required: true},
      Exam1: {pattern: /^[1-9][0-9]?$|^100$/,message: 'Grade must be number 0-100',required: true},
      Exam2: {pattern: /^[1-9][0-9]?$|^100$/,message: 'Grade must be number 0-100',required: true},
    },
  };

  prompt.get(schema, function (err, result) {
    //outputs all the grades from input
    console.log('Grades:');
    console.log(' Homework 1:', Number(result.HW1));
    console.log(' Homework 2:', Number(result.HW2));
    console.log(' Homework 3:', Number(result.HW3));
    console.log(' Exam 1:', Number(result.Exam1));
    console.log(' Exam 2:', Number(result.Exam2));
    
    //calls all the functions to get percentages of the homeworks, each exam, and the final grade
    var totalHW = computeHW.computeHW(Number(result.HW1),Number(result.HW2),Number(result.HW3));
    var exam1 = computeExam.computeExam(Number(result.Exam1))
    var exam2 = computeExam.computeExam(Number(result.Exam2))
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