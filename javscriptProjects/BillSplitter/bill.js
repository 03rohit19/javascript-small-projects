const billAmount = document.querySelector(".bill-amount");
const numberOfPeopleInput = document.querySelector(".number-of-people");
const generateBillBtn = document.querySelector(".generate-bill");
const tipAmountOutput = document.querySelector(".tip-amount span"); // Target the span inside .tip-amount
const totalAmountOutput = document.querySelector(".total span"); // Target the span inside .total
const customTipInput = document.querySelector(".custom-tip");
const eachPersonBillAmount = document.querySelector(".each-person-bill span"); // Target the span inside .each-person-bill
const resetBtn = document.querySelector(".reset-btn"); // Target the reset button

generateBillBtn.addEventListener("click", () => {
  const bill = parseFloat(billAmount.value); // Use parseFloat for decimal values
  const numberOfPeople = parseInt(numberOfPeopleInput.value);
  const customTip = parseFloat(customTipInput.value); // Parse tip input

  // Check if all inputs have valid values
  if (
    isNaN(bill) ||
    isNaN(customTip) ||
    isNaN(numberOfPeople) ||
    numberOfPeople <= 0
  ) {
    alert("Please enter valid numbers for all fields.");
    return;
  }

  // Calculate tip amount and total amount
  const tipAmount = (bill * customTip) / 100;
  const totalAmount = bill + tipAmount;

  // Calculate per person bill amount
  const eachPersonBill = totalAmount / numberOfPeople;

  // Update the UI with calculated values
  tipAmountOutput.innerText = `₹ ${tipAmount.toFixed(2)}`; // Format to 2 decimal places
  totalAmountOutput.innerText = `₹ ${totalAmount.toFixed(2)}`; // Format to 2 decimal places
  eachPersonBillAmount.innerText = `₹ ${eachPersonBill.toFixed(2)}`; // Format to 2 decimal places
});

// Reset button functionality
resetBtn.addEventListener("click", () => {
  billAmount.value = "";
  numberOfPeopleInput.value = "";
  customTipInput.value = "";
  tipAmountOutput.innerText = "";
  totalAmountOutput.innerText = "";
  eachPersonBillAmount.innerText = "";
});
