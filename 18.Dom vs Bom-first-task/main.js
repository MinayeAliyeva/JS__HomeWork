let startBtn = document.querySelector(".start");
let result = document.querySelector(".result");
let stopBtn = document.querySelector(".stop");
let increase = document.querySelector("#increase");
let declaretment = document.querySelector("#declerement");
let reset = document.querySelector("#reset");
let button = document.querySelector(".btn");
let input = document.querySelector("#input");
let count = 0;
let interval;
startBtn.addEventListener("click", function () {
  interval = setInterval(() => {
    ++count;
    result.innerText = count;
  }, 1000);
});
stopBtn.addEventListener("click", function () {
  clearInterval(interval);
});
increase.addEventListener("click", function () {
  result.innerText = ++count;
});
declaretment.addEventListener("click", function () {
  result.innerText = --count;
});
reset.addEventListener("click", function () {
  clearInterval(interval);
  count = 0;
  result.innerText = count;
});
button.addEventListener("click", function () {
  let value = Number(input.value);
  result.innerText = count += value;
});
