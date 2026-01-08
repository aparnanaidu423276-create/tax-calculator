function calculate() {
  let income = document.getElementById("income").value;
  let tax = calculateTax(Number(income));
  document.getElementById("result").innerText = "Tax: ₹" + tax;
}
