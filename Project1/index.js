const count = document.querySelector(".count");
const addBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");
const changeBy = document.querySelector(".changeBy");
const reset = document.querySelector(".reset-btn");

minusBtn.addEventListener("click", () => {
  const countVal = parseInt(count.innerText);
  const changeByVal = parseInt(changeBy.value);
  count.innerText = countVal - changeByVal;
});
addBtn.addEventListener("click", () => {
  const countVal = parseInt(count.innerText);
  const changeByVal = parseInt(changeBy.value);
  count.innerText = countVal + changeByVal;
});

reset.addEventListener("click", () => {
  count.innerText = 0;
});
