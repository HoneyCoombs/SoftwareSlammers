
// Compute Exam test Cases
const computeExam = require('./computeExam.js');
describe("Compute Exam Test", () => {
    test('Input of 100 should return 40', () => {
      expect(computeExam.computeExam(Number(100))).toBe(40);
    });
  
    test('Input of 60 should return 24', () => {
      expect(computeExam.computeExam((60))).toBe(24);
    });
  
    test('Input of 40 should return 16', () => {
      expect(computeExam.computeExam((40))).toBe(16);
    });
  
  
    test('Input of 0 should return 0', () => {
      expect(computeExam.computeExam((0))).toBe(0);
    });
  
  })

  //Compute HW test Cases

  const computeHW = require('./computeHW.js');
describe("Compute HW Test", () => {

  test('Input of 100,100,100 should return 20', () => {
    expect(computeHW.computeHW((100,100,100))).toBe(20);
  });

  test('Input of 100,90,80 should return 18', () => {
    expect(computeHW.computeHW((100,90,80))).toBe(18);
  });

  test('Input of 100,75,30 should return 13.6', () => {
    expect(computeHW.computeHW((100,75,30))).toBe(13.6);
  });

})

const computeFinal = require('./computeFinal.js');
describe("Compute Final Test", () => {

  test('Input of 100,100,100 should return A', () => {
    expect(computeHW.computeHW((100,75,30))).toBe('A');
  });
}) 