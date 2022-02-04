"use strict";

let result;
let operator;
let rounding;
let resultValues;
const calculateButton = document.querySelector("#calculate");
const clearButton = document.querySelector("#clear");
const firstNumber = document.querySelector("#firstnumber");
const secondNumber = document.querySelector("#secondnumber");
const roundTo = document.querySelector("#doround");
const results = document.querySelector("#results");

document.addEventListener("DOMContentLoaded", settingUp);

function settingUp() {
  console.log("setting up");
  calculateButton.addEventListener("click", clickCalculate);
  clearButton.addEventListener("click", clearResults);
}

function clickCalculate() {
  console.log("clickedCalculate");
  operator = document.querySelector("#operator").value;

  if (operator === "add") {
    resultValues = parseInt(firstNumber.value) + parseInt(secondNumber.value);
  } else if (operator === "sub") {
    resultValues = firstNumber.value - secondNumber.value;
  } else if (operator === "mul") {
    resultValues = firstNumber.value * secondNumber.value;
  } else if (operator === "div") {
    resultValues = firstNumber.value / secondNumber.value;
  }
  //resultatet skal stå i øverste input felt
  firstNumber.value = resultValues;
  //tilføjer til resultatliste og tilføjer scroll
  result = document.createElement("li");
  result.textContent = resultValues;
  results.appendChild(result);
  results.scrollTop = results.scrollHeight;

  if (roundTo.checked === true) {
    //her finder den ud af hvor mange decimaler der skal være
    rounding = parseInt(document.querySelector("#decimals").value);
    //ændrer output til afrundet antal decimaler
    resultValues = resultValues.toFixed(rounding);
  }
}

function clearResults() {
  results.innerHTML = "";
  console.log("cleared");
}
