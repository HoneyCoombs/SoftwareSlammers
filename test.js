const computeExam = require('./computeExam.js');
describe("Compute Exam Test", () => {
    test('Input of 100 should return 40', () => {
      expect(computeExam.computeExam(Number(100))).toBe(40);
    });
   })