function calculateTax(income) {
  if (income <= 250000) {
    return 0;
  }
  return (income - 250000) * 0.1;
}

if (typeof module !== "undefined") {
  module.exports = { calculateTax };
}
