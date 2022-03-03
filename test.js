

const computeExam = require('./computeExam.js');
const computeHW = require('./computeHW.js');
const computeFinal = require('./computeFinal.js');

// Compute Exam test Cases
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

  
describe("Compute HW Test", () => {

  test('Input of 100,100,100 should return 20', () => {
    
    const result  = computeHW.computeHW(100,100,100);
    expect(result).toBe(20);
  });

  test('Input of 100,90,80 should return 18', () => {
    
    result  = computeHW.computeHW(100,90,80); 
    expect(result).toBe(18);
  });

  test('Input of 100,75,50 should return 15', () => {
    
    result  = computeHW.computeHW(100,75,50); 
    expect(result).toBe(15);
  });

})



describe("Compute Final Test", () => {

  const result  = computeFinal.computeFinal(20,40,40);
  test('Input of 20,40,40 should return A', () => {
    expect(result).toBe('A');
  });
  
  const result2  = computeFinal.computeFinal(18,24,40);
  test('Input of 18,24,40 should return B-', () => {
    expect(result2).toBe('B-');
  });
   const result3  = computeFinal.computeFinal(15,16,40);
  test('Input of 15,16,40 should return C-', () => {
    expect(result3).toBe('C-');
  });
}) 