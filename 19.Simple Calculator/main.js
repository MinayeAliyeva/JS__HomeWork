let total = document.querySelector(".total");
let value1 = document.querySelector(".value1");
let value2 = document.querySelector(".value2");
let addition = document.querySelector("#add");
let substract = document.querySelector("#sub");
let multiply = document.querySelector("#mul");
let division = document.querySelector("#div");
let reset = document.querySelector("#res");

addition.addEventListener("click", function () {
  if (value1.value && value2.value) {
    let sum = +value1.value + +value2.value;
    total.innerText = sum;
  } else {
    window.alert("value1 and value2 must be filled");
  }
});
substract.addEventListener("click", function () {
  if (value1.value && value2.value) {
    let sum = +value1.value - value2.value;
    total.innerText = sum;
  } else {
    window.alert("value1 and value2 must be filled");
  }
});
multiply.addEventListener("click", function () {
  if (value1.value && value2.value) {
    let sum = +value1.value * value2.value;
    total.innerText = sum;
  } else {
    window.alert("value1 and value2 must be filled");
  }
});
division.addEventListener("click", function () {
  if (value1.value && value2.value) {
    let sum = +value1.value / value2.value;
    total.innerText = sum;
  } else {
    window.alert("value1 and value2 must be filled");
  }
});
reset.classList.add("reset-hover");
reset.addEventListener("click", function () {
  value1.value = "";
  value2.value = "";
  total.innerText = 0;
});
