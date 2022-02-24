var prompt = require('prompt');
 var schema = {
    properties: {
      name: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      
      HW1: { type: 'number'},
      HW2: { type: 'number'},
      HW3: { type: 'number'},
      Exam1: { type: 'number'},
      Exam2: { type: 'number'}
    },
  };

  prompt.get(schema, function (err, result) {

    console.log('Grades:');
    console.log(' Homework 1:', result.HW1);
    console.log(' Homework 2:', result.HW2);
    console.log(' Homework 3:', result.HW3);
    console.log(' Exam 1:', result.Exam1);
    console.log(' Exam 2:', result.Exam2);
    
    var totalHW;
    totalHW = (0.2) * (result.HW1 + 
                         result.HW2 + 
                         result.HW3);
    console.log(' Homework Average:', totalHW )

  });

prompt.start();