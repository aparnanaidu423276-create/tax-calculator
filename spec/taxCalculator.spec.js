const { calculateTax } = require('../taxCalculator');

describe("Tax Calculator Jasmine Tests", () => {

  it("returns 0 tax for income below 250000", () => {
    expect(calculateTax(200000)).toBe(0);
  });

  it("returns tax greater than 0 for income above 250000", () => {
    expect(calculateTax(500000)).toBeGreaterThan(0);
  });

  it("returns number type", () => {
    expect(typeof calculateTax(300000)).toBe("number");
  });

  it("does not return negative tax", () => {
    expect(calculateTax(100000)).toBeGreaterThanOrEqual(0);
  });

  it("returns 0 for zero income", () => {
    expect(calculateTax(0)).toBe(0);
  });

  it("handles large income", () => {
    expect(calculateTax(1000000)).toBeGreaterThan(0);
  });

  it("does not throw error", () => {
    expect(() => calculateTax(400000)).not.toThrow();
  });

});
